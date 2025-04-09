from pydantic import BaseModel
from typing import Optional

# Define Pydantic model
class Address(BaseModel):
    street: Optional[str] = ""
    village: Optional[str] = ""
    state: Optional[str] = ""
    pincode: Optional[str] = ""

class FormModel(BaseModel):
    timestamp: Optional[str] = ""
    name: Optional[str] = ""
    phone: Optional[str] = ""
    email: Optional[str] = ""
    parentPhone: Optional[str] = ""
    parentEmail: Optional[str] = ""
    admissionCategory: Optional[str] = ""
    tenthMarksMemo: Optional[str] = ""
    twelfthBoard: Optional[str] = ""
    twelfthMarksMemo: Optional[str] = ""
    tgEAPCETRank: Optional[str] = ""
    jeeMainRank: Optional[str] = ""
    aadhaarCard: Optional[str] = ""
    transferCertificate: Optional[str] = ""
    bloodGroup: Optional[str] = ""
    address: Address
    branch: Optional[str] = ""