from database import db
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from models.FormModel import FormModel
from models.StudentModel import Student
from pydantic import BaseModel
from typing import Optional
import json

app = FastAPI()

DRIVE_SCOPES = ['https://www.googleapis.com/auth/drive.readonly']

@app.post("/submit")
async def receive_form_data(data: FormModel):
    try:
        # Convert FormModel to dict
        form_data = data.dict()
        
        # Create Student object and map address fields
        student = Student(
            # ...existing fields mapping...
            address_street=form_data["address"]["street"],
            address_village_town=form_data["address"]["village"],
            address_state=form_data["address"]["state"],
            address_pincode=form_data["address"]["pincode"],
            branch_code=form_data["branch"],
            admission_category=form_data["admissionCategory"],
            student_phone_no=form_data["phone"],
            parent_phone_no=form_data["parentPhone"],
            student_email=form_data["email"],
            parent_email=form_data["parentEmail"],
            blood_group=form_data["bloodGroup"],
            tenth_board_name=form_data["twelfthBoard"],
        )

                # Add this import at the top
        
        
         # Print student details in a formatted way
        print("\n=== Student Details ===")
        student_dict = student.dict(exclude_none=True)  # Only print non-None values
        for key, value in student_dict.items():
            print(f"{key}: {value}")
        print("====================\n")
        
        return {"message": "Data Processed successfully", "data": student.dict()}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
