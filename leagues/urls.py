from django.urls import path
from . import views 
from django.views.generic import TemplateView
from django.contrib.sitemaps import Sitemap
from django.contrib.sitemaps.views import sitemap  # ✅ Note: use .views not .as_views
from .sitemaps import LeagueSitemap  # best to separate into a sitemaps.py file

sitemaps = {
    'leagues': LeagueSitemap,
}

#urlpatterns += [
 #   path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),
#]




# ✅ Define your sitemaps dictionary OUTSIDE urlpatterns
sitemaps = {
    'leagues': LeagueSitemap,
}

# ✅ Now define urlpatterns
urlpatterns = [
    path('', views.index_view, name='index'),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),
    path('england/', views.England, name="england"),
    path('about/', views.About_us, name="about"),
    path('blog/', views.Blog, name="blog"),
    path('privacy/', views.Privacy, name="privacy"),
    path('contact/', views.Contact_us, name="contact"),
    path('spain/', views.Spain, name="spain"),
    path('belgium/', views.Belgium, name="belgium"),
    path('brazil/', views.Brazil, name="brazil"),
    path('netherlands/', views.Netherlands, name="netherland"),
    path('scotland/', views.Scotland, name="scotland"),
    path('germany/', views.Germany, name="germany"),
    path('france/', views.France, name="france"),
    path('italy/', views.Italy, name="italy"),

    # ✅ robots.txt as plain text
    path('robots.txt', TemplateView.as_view(template_name='robots.txt', content_type='text/plain')),

    # ✅ Sitemap XML
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='sitemap'),
    path('<slug:slug>/', views.league_detail, name='league_detail'),
]


