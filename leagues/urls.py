from django.urls import path
from . import views 

urlpatterns = [
    path('', views.index_view, name='index'),
    path('england/', views.England, name="england"),
     path('about/', views.About_us, name="about"),
     path('blog/', views.Blog, name="blog"),
      path('privacy/', views.Privacy, name="privacy"),
     path('contact/', views.Contact_us, name="contact"),
    path('spain/', views.Spain, name="spain"),
    path('belgium/', views.Belgium, name="belgiun"),
    path('brazil/', views.Brazil, name="brazil"),
    path('netherlands/', views.Netherlands, name="netherlands"),
    path('scotland/', views.Scotland, name="scotland"),
    path('germany/', views.Germany, name="germany"),
    path('france/', views.France, name="france"),
   path('italy/', views.Italy, name="italy"),
    #path('french_ligue_two/', views.FrenchLigue2, name="french_ligue_two"),
    #path('italian_serie_a/', views.ItalianSerieA, name="italian_serie_a"),
    
   
  #path('league/<int:league_id>/table/', views.league_table, name='league_table'),
   # path('all-teams', views.all_teams_view, name='premiership'),
    #path('championship/', views.english_championship, name='english_championship'),
    # path("team-stats-json/", views.team_stats_json, name="team_stats_json"),
    # path('chart/<str:team_name>/', views.team_win_loss_chart, name='team_chart'),
     # ✅ Make sure name matches
]

