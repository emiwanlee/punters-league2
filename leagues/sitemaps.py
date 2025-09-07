from django.contrib.sitemaps import Sitemap
from .models import League  # make sure this matches your actual model name
from django.urls import reverse
from posts.models import Post

class LeagueSitemap(Sitemap):
    changefreq = "daily"
    priority = 0.8

    def items(self):
        return League.objects.all()

    def lastmod(self, obj):
        return None
class StaticViewSitemap(Sitemap):
    changefreq = "monthly"
    priority = 0.5

    def items(self):
        return ['blog', 'about',
                'posts:posts_list', 'england', 'spain', 'france', 'italy',
                'germany', 'netherlands', 'belgium', 'contact', 'privacy',
                'terms']  # Add more static views if you have them

    def location(self, item):
        return reverse(item)
    
class PostSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.8

    def items(self):
        return Post.objects.all()

    def lastmod(self, obj):
        return obj.date  #    
    
    def items(self):
        return [
            "posts:post_detail",
            "posts:post_list",
        ]