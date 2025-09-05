import cloudinary
import cloudinary.uploader
import cloudinary.api

# Configure Cloudinary (replace with your credentials)
cloudinary.config(
    cloud_name="dn6pgr3ta",
    api_key="485638436986578",
    api_secret="RyeEK_txPlOUZ9nseD921i7B4Pw",
    secure=True
)

# Example: upload one file
result = cloudinary.uploader.upload(
    "media/post_images/punters-league_welcome_picture.png",
    folder="punters-league/post_images"
)
print(result['secure_url'])

# 🚀 If you want to upload everything in /media/post_images:
import os

local_folder = "media/post_images"
for filename in os.listdir(local_folder):
    file_path = os.path.join(local_folder, filename)
    if os.path.isfile(file_path):
        upload_result = cloudinary.uploader.upload(
            file_path,
            folder="punters-league/post_images"
        )
        print(f"{filename} → {upload_result['secure_url']}")
