from pydantic import BaseModel, EmailStr, constr
from typing import Optional

class Student(BaseModel):
    student_id: Optional[str] = None  # Auto-generated ID
    degree_code: str
    hall_ticket_no: Optional[str] = None
    name: str
    father_name: str
    mother_name: str
    date_of_birth: str  # Store as YYYY-MM-DD format
    gender: str
    identification_mark_1: Optional[str] = None
    identification_mark_2: Optional[str] = None
    
    # 10th Details
    tenth_board_name: str
    tenth_school_name: str
    tenth_hall_ticket_no: str
    tenth_max_marks: int
    tenth_total_marks: str
    tenth_percentage: float
    tenth_month_year: str
    
    # 12th Details
    twelfth_board_name: str
    twelfth_college_name: str
    twelfth_hall_ticket_no: str
    twelfth_max_marks: int
    twelfth_total_marks: str
    twelfth_percentage: float
    twelfth_subject_scores: dict  # Dictionary for M1, M2, P1, P2, etc.
    twelfth_month_year: str
    
    # Entrance Exams
    eamcet_hall_ticket_no: Optional[str] = None
    eamcet_rank: Optional[int] = None
    jee_hall_ticket_no: Optional[str] = None
    jee_mains_rank: Optional[int] = None
    
    # Personal Info
    aadhaar_card_number: Optional[str] = None
    mother_tongue: str
    student_phone_no: str
    parent_phone_no: str
    vnr_email: Optional[EmailStr] = None
    student_email: EmailStr
    parent_email: Optional[EmailStr] = None
    
    # Reservation & Category
    reservation: bool
    category_name: str
    caste_as_per_tc: str
    ebc_status: bool
    ews_status: bool
    income: Optional[int] = None
    
    # Medical & Nationality
    blood_group: Optional[str] = None
    nationality: str
    religion: str
    minority_status: bool
    
    # Address
    address_door_no: str
    address_street: str
    address_village_town: str
    address_mandal: str
    address_district: str
    address_state: str
    address_pincode: str
    rural_urban: str
    
    # College Details
    admission_category: str
    section: Optional[str] = None
    branch_code: str
    college_code: str
    
    # Special Status
    ph_status: bool
    scribe_needed: bool
