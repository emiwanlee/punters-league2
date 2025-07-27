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

# Create your views here.
# Dictionary of teams and their win/loss records

# View to show all charts in one page
from django.http import HttpResponse
import matplotlib.pyplot as plt
import io


from django.shortcuts import render

#def all_teams_view(request):
    #return render(request, 'home/premiership.html')  # Replace with actual template


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
    
     

def index_view(request):
    leagues = League.objects.all()
    return render(request, 'home/index.html', {'leagues':leagues})



    #return render(request, 'home/premiership.html')



def England(request):
    return render(request, 'home/england.html')

def Spain(request):
    return render(request, 'home/spain.html')

def Italy(request):
    return render(request, 'home/italy.html')

def Germany(request):
    return render(request, 'home/germany.html')

def France(request):
    return render(request, 'home/france.html')

def Netherlands(request):
    return render(request, 'home/netherlands.html')

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