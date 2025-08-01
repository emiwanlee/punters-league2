from django.contrib import admin
from leagues.models import Teams, League


admin.site.site_header = "Punters League Admin"
admin.site.site_title = "Punters League Admin Portal"
admin.site.index_title = "Welcome to Punters League Management"
admin.site.register(Teams)
admin.site.register(League)