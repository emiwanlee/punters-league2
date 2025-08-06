from django.contrib.sitemaps import Sitemap
from .models import League  # make sure this matches your actual model name
from django.urls import reverse

class LeagueSitemap(Sitemap):
    changefreq = "daily"
    priority = 0.8

    def items(self):
        return League.objects.all()

    def location(self, obj):
        return reverse('league_detail', args=[obj.slug])
