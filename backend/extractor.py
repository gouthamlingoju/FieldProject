import re
from GoogleAuthService import download_image_from_drive,process_image_with_gemini
import json

prompt_SSC = '''Extract the following structured data from the image:
Candidate Name: Name of the candidate
Father Name: Name of the father
Mother Name: Name of the mother
Date of Birth: Date of birth in the format DD/MM/YYYY
tenth_board_name: Name of the educational board (e.g., CBSE, ICSE, State Board)
tenth_school_name: Name of the school
tenth_hall_ticket_no: Hall ticket or roll number
tenth_max_marks/CGPA: Total maximum marks possible (if telanagana state "10")
tenth_total_marks/CGPA: Total marks obtained
tenth_percentage: Percentage scored(please Calculate as (total marks obtained/total maximum marks)*100)
tenth_month_year: Month and year of passing (e.g., March 2020)
identification_marks1: Identification marks (if any)
identification_marks2: Identification marks (if any)


Please return the result in Dictionary format with exact field names as mentioned above  (if any field not found return null)
just Dictionary no other stuff.'''

prompt_uidai = '''Extract the following structured data from the image:
Number: Number of the Aadhar card
Gender: Male/Female /Others


Please return the result in Dictionary format with exact field names as mentioned above  (if any field not found return null)
just Dictionary no other stuff.
'''

prompt_jee_and_eamcet = '''Extract the following structured data from the image:
HT Number: Hall ticket number 
Rank : Rank obtained


Please return the result in Dictionary format with exact field names as mentioned above (if any field not found return null)
just Dictionary no other stuff.'''

prompt_TC = '''Extract the following structured data from the image:
Mother Tongue: Mother tongue of the student(Only one)
Nationality: Nationality of the student
Religion: Religion of the student
College Name: Name of the college
Caste as per TC: Caste as per the Transfer Certificate (TC)


Please return the result in Dictionary format with exact field names as mentioned above (if any field not found return null)
just Dictionary no other stuff.'''

prompts=[prompt_SSC,prompt_uidai,prompt_jee_and_eamcet,prompt_TC]

def extract(linkstr,prompt):
    file_id_match = re.search(r'id=([a-zA-Z0-9_-]+)', linkstr).group(1)
    image_bytes = download_image_from_drive(file_id_match)
    gemini_response = json.loads(process_image_with_gemini(image_bytes, prompt).split("```")[1][5:])
    # print(f"Gemini Response for {file_id_match}: {gemini_response}")
        # data_dict = json.loads(response.text.split("```")[1][5:])
    return gemini_response

#sample links

# extract("https://drive.google.com/open?id=1l52UOx3MHSZwO2VKhV1VtrDkLJ60ZIl1",prompt_SSC)

# extract("https://drive.google.com/open?id=1Fvt0dEOSyacvrsMcpyDBkw5vv5QeWRQi",prompt_uidai)

# extract("https://drive.google.com/open?id=1Fvt0dEOSyacvrsMcpyDBkw5vv5QeWRQi",prompt_jee_and_eamcet)

# extract("https://drive.google.com/open?id=1nQPgkyfYhiM8Xix9NfbY7d8TXzNTfDO1",prompt_TC)
