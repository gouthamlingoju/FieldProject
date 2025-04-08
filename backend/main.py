from database import db
from fastapi import FastAPI,HTTPException
from fastapi.middleware.cors import CORSMiddleware
from models.FormModel import FormModel
from models.StudentModel import Student
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

# @app.get("/")

# def read_root():
#     students_ref = db.collection("items").stream()
#     students = [{doc.id: doc.to_dict()} for doc in students_ref]
#     return {"Items":students}

# @app.post("/add_student")
# def add_student(student: dict):

#     return {"message": "Student added successfully"}


class Item(BaseModel):
    timestamp: Optional[str] = None
    name: Optional[str] = None
    phone: Optional[str] = None
    email: Optional[str] = None

@app.post("/submit")
async def receive_form_data(data:Item):
    try:
        doc_ref =(data.dict())
        return {"message": "Data Processed successfully", "data": doc_ref}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
