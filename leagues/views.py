from django.shortcuts import render
from .models import League, Teams
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib
matplotlib.use('Agg')
from django.http import HttpResponse
import io
from django.utils.timezone import now
from django.http import JsonResponse
from .models import Teams, League
from django.db.models import F, ExpressionWrapper, IntegerField
from django.shortcuts import render, get_object_or_404

# Create your views here.
# Dictionary of teams and their win/loss records

# View to show all charts in one page
from django.http import HttpResponse
import matplotlib.pyplot as plt
import io


from django.shortcuts import render

#def all_teams_view(request):
    #return render(request, 'home/premiership.html')  # Replace with actual template
def league_detail(request, slug):
    league = get_object_or_404(League, slug=slug)
    teams = Teams.objects.filter(league=league).order_by('-points', '-goals_difference', '-power')
    context = {
        'league': league,
        'teams': teams,
    }
    return render(request, 'leagues/league_detail.html', context)


def english_premiership(request):
   # teams_data = [
       # {'name': 'Man City', 'won': 12, 'lost': 2},
       # {'name': 'Arsenal', 'won': 10, 'lost': 3},
       # {'name': 'Liverpool', 'won': 11, 'lost': 4},
   # ]
    return render(request, 'home/premiership.html')   #, {
        #'teams_data': teams_data,
       #  'league_name': 'English Premier League'
    # })

def english_championship(request):
    return render(request, 'home/english_championship.html')
    # teams_data = [
       # {'name': 'Leeds', 'won': 9, 'lost': 6},
       # {'name': 'Southampton', 'won': 8, 'lost': 7},
      #  {'name': 'Norwich', 'won': 7, 'lost': 8},
    #]
    # return render(request, 'english_championship.html', {
        #'teams_data': teams_data,
        #'league_name': 'English Championship'
    #  })
"""
def league_table(request, league_id):
    league =get_object_or_404 (League, id=league_id)
    teams = Teams.objects.filter(league=league).order_by('-points', '-goals_difference')
    return render(request, 'home/england.html', {
        'league': league,
        'teams': teams
    })
"""
def index_view(request):
    leagues = League.objects.all()
    return render(request, 'home/index.html', {'leagues':leagues})



    #return render(request, 'home/premiership.html')



def England(request):
    premier_league = League.objects.get(name="Premier League")
    championship = League.objects.get(name="Championship")
    league_one = League.objects.get(name="League One")
    league_two = League.objects.get(name="League Two")

    premiership = Teams.objects.filter(league=premier_league).order_by('-points')
    championship_teams = Teams.objects.filter(league=championship).order_by('-points')
    league_one_teams = Teams.objects.filter(league=league_one).order_by('-points')
    league_two_teams = Teams.objects.filter(league=league_two).order_by('-points')

    context = {
        'premiership': premiership,
        'championship_teams': championship_teams,
        'league_one_teams': league_one_teams,
        'league_two_teams': league_two_teams,
    }
    return render(request, 'home/england.html', context)
    #return render(request, 'home/england.html')

def Spain(request):
    spanish_la_liga = League.objects.get(name="La Liga")
    spanishLaLiga2 = League.objects.get(name="La Liga 2")

    spanishLaLiga_teams= Teams.objects.filter(league=spanish_la_liga).order_by('-points')
    spanishLaLiga2_teams = Teams.objects.filter(league=spanishLaLiga2).order_by('-points')

    context = {
        'spanishLaLiga_teams': spanishLaLiga_teams,
        'spanishLaLiga2_teams': spanishLaLiga2_teams,
        
    }
    return render(request, 'home/spain.html', context)

def Italy(request):
    italian_serie_a = League.objects.get(name="Serie A")
    italian_serie_b = League.objects.get(name="Serie B")

    italian_serie_a_teams= Teams.objects.filter(league=italian_serie_a).order_by('-points')
    italian_serie_b_teams = Teams.objects.filter(league=italian_serie_b).order_by('-points')

    context = {
        'italian_serie_a_teams': italian_serie_a_teams,
        'italian_serie_b_teams': italian_serie_b_teams,
        
    }
    return render(request, 'home/italy.html', context)

def Germany(request):
    german_bundesliga = League.objects.get(name="Bundesliga")
    german_bundesliga_2 = League.objects.get(name="Bundesliga 2")

    german_bundesliga_teams= Teams.objects.filter(league=german_bundesliga).order_by('-points')
    german_bundesliga_2_teams = Teams.objects.filter(league=german_bundesliga_2).order_by('-points')

    context = {
        'german_bundesliga_teams': german_bundesliga_teams,
        'german_bundesliga_2_teams': german_bundesliga_2_teams,
        
    }
    return render(request, 'home/germany.html', context)

def France(request):
    french_ligue_1 = League.objects.get(name="Ligue 1")
    french_ligue_2 = League.objects.get(name="Ligue 2")

    french_ligue_1_teams= Teams.objects.filter(league=french_ligue_1).order_by('-points')
    french_ligue_2_teams = Teams.objects.filter(league=french_ligue_2).order_by('-points')

    context = {
        'french_ligue_1_teams': french_ligue_1_teams,
        'french_ligue_2_teams': french_ligue_2_teams,
        
    }
    return render(request, 'home/france.html', context)

def Netherlands(request):
     netherlands_eredevesie = League.objects.get(name="Eredevesie")
     netherlands_eersteedevesie = League.objects.get(name="Eerste Devesie")
    

     netherlands_eredevesie_teams= Teams.objects.filter(league=netherlands_eredevesie).order_by('-points')
     netherlands_eersteedevesie_teams= Teams.objects.filter(league=netherlands_eersteedevesie).order_by('-points')
    

     context = {
        'nertherlands_eredevesie_teams': netherlands_eredevesie_teams,
        'netherlands_eersteedevesie_teams': netherlands_eersteedevesie_teams,
        
        
     }
     return render(request, 'home/netherland.html', context)

def Belgium(request):
    return render(request, 'home/belgium.html')   


def Scotland(request):
    return render(request, 'home/scotland.html')  


def Brazil(request):
    return render(request, 'home/brazil.html') 


def About_us(request):
    return render(request, 'home/about.html') 


def Blog(request):
    return render(request, 'home/blog.html')

def Contact_us(request):
    return render(request, 'home/contact.html')

def Privacy(request):
    return render(request, 'home/privacy.html')