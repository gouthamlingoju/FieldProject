from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from google.auth.transport.requests import Request
import os
import pickle
from io import BytesIO
from googleapiclient import http
from PIL import Image
import google.generativeai as genai

from dotenv import load_dotenv
import os

load_dotenv()

GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')
# ...existing code...



DRIVE_SCOPES = ['https://www.googleapis.com/auth/drive.readonly']


def authenticate_google_service(scopes, token_file='token.pickle', credentials_file='credentials.json', api_name=None, api_version='v3'):
    """Authenticates with Google using OAuth 2.0 and returns a service client."""
    creds = None
    if os.path.exists(token_file):
        with open(token_file, 'rb') as token:
            creds = pickle.load(token)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                credentials_file, scopes)
            creds = flow.run_local_server(port=0)

        with open(token_file, 'wb') as token:
            pickle.dump(creds, token)

    if api_name:
        return build(api_name, api_version, credentials=creds)
    else:
        raise ValueError("API name must be specified when building the service.")
    

def download_image_from_drive(file_id):
    """Downloads an image from Google Drive given its file ID."""
    service = authenticate_google_service(DRIVE_SCOPES, token_file='drive_token.pickle', credentials_file='credentials.json', api_name='drive', api_version='v3')
    try:
        request = service.files().get_media(fileId=file_id)
        fh = BytesIO()
        downloader = http.MediaIoBaseDownload(fh, request)
        done = False
        while not done:
            status, done = downloader.next_chunk()
            print(f"Drive Download Progress for {file_id}: {int(status.progress() * 100)}%")
        return fh.getvalue()
    except Exception as e:
        print(f"Error downloading image {file_id} from Drive: {e}")
        return None


def process_image_with_gemini(image_bytes, prompt):
    """Processes an image (as bytes) with the Gemini API."""
    genai.configure(api_key=GOOGLE_API_KEY)
    model = genai.GenerativeModel('gemini-2.0-flash')
    try:
        image = Image.open(BytesIO(image_bytes))
        contents = [image, prompt]
        response = model.generate_content(contents)
        return response.text
    except Exception as e:
        return f"Error processing image with Gemini: {e}"