import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mySite.settings")
django.setup()

from posts.models import Post

# Map local filenames to Cloudinary URLs
mapping = {
    "class_on_assignment.PNG": "https://res.cloudinary.com/dn6pgr3ta/image/upload/v1757040926/punters-league/post_images/volccnmqmh5eqghf1ex4.png",
    "punters-league_welcome_picture.png": "https://res.cloudinary.com/dn6pgr3ta/image/upload/v1757040928/punters-league/post_images/jcnus25adargtlluji2o.png",
}

for filename, url in mapping.items():
    try:
        post = Post.objects.get(image__icontains=filename)
        post.cloudinary_url = url
        post.save()
        print(f"✅ Updated {post.title} → {url}")
    except Post.DoesNotExist:
        print(f"❌ No post found for {filename}")
