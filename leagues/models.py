from django.db import models

# Create your models here.
class League(models.Model):
    name = models.CharField(max_length=120)
    country = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class Teams(models.Model) :
    name =models.CharField(max_length=100)
    league =models.ForeignKey(League, on_delete=models.CASCADE)
    matches_played =models.IntegerField(default=0)
    matches_won =models.IntegerField(default=0)
    matches_drawn =models.IntegerField(default=0)
    matches_lost =models.IntegerField(default=0)
    goals_for =models.IntegerField(default=0)
    goals_against =models.IntegerField(default=0)
    goals_diffrerence =models.IntegerField(default=0)
    points  =models.IntegerField(default=0)


    @property
    def matches_lost(self):
        return self.matches_played - self.matches_won
    
    @property
    def goals_difference(self):
        return self.goals_for - self.goals_against
    
    @property
    def points(self):
        return self.matches_won * 3 + self.matches_drawn
    
    @property
    def power(self):
        try:
            return round((self.points / (self.matches_played * 3)) * 100, 2)
        except ZeroDivisionError:
            return 0.0

    def __str__(self):
        return self.name