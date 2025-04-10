
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

def extract_10(linkstr):
