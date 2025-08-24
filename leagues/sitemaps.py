from django.contrib.sitemaps import Sitemap
from .models import League  # make sure this matches your actual model name
from django.urls import reverse

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
        return ['home', 'about']  # Add more static views if you have them

    def location(self, item):
        return reverse(item)