from django.contrib import admin
from .models import League, Teams

# Register your models here.
class TeamInline(admin.TabularInline):
    model = Teams
    extra = 1
    readonly_fields = ('matches_lost', 'goals_difference', 'points')


@admin.register(League)
class LeagueAdmin(admin.ModelAdmin):
    list_display =('name', 'country')
    inlines = [TeamInline]


@admin.register(Teams)  
class TeamAdmin(admin.ModelAdmin):
    list_display =('name', 'league', 'matches_played', 'matches_won', 'matches_lost',
                   'goals_for', 'goals_against', 'goals_difference', 'goals_against', 'points',
                   'power')  
    list_filter =('league',)
    search_fields =('name',)
    readonly_fields = ('matches_lost', 'goals_difference', 'points', 'power')