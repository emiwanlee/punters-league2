from django.db import models
from django.utils.text import slugify
from django.contrib.auth.models import User

# Create your models here.
class Post(models.Model):
    CATEGORY_CHOICES = [
        ('news', 'News'),
        ('predictions', 'Predictions'),
        ('results', 'Results'),
        ('analysis', 'Analysis'),
        ('general', 'General'),
        ('rewind', 'Rewind'),
        ('player_ratings', 'Player Ratings'),
        ('team_ratings', 'Team Ratings'),
        ('league_ratings', 'League Ratings'),
        ('drop_zone', 'Drop Zone'),
    ]

    title = models.CharField(max_length=95)
    body = models.TextField()
    slug = models.SlugField(unique=True, blank=True, null=True)
    date = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='post_images/',blank=True, null=True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='general')
    cloudinary_url = models.URLField(max_length=500,blank=True, null=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
    

    