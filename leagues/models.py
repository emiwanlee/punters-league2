from django.db import models
from django.utils.text import slugify
from django.urls import reverse

# Create your models here.
class League(models.Model):
    name = models.CharField(max_length=120)
    country = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, null=True, blank=True)

    def __str__(self):
        return self.name
    
    def get_absolute_url(self):
        return reverse('league_detail', args=[self.slug])

"""
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        slug = base_slug
        num = 1
        while League.objects.filter(slug=slug).exists():
            slug = f"{base_slug}-{count}"
            count += 1
        league.slug = slug
        league.save()


"""
    

 
    
class Teams(models.Model) :
    name =models.CharField(max_length=100)
    league =models.ForeignKey(League, on_delete=models.CASCADE)
    matches_played =models.IntegerField(default=0)
    matches_won =models.IntegerField(default=0)
    matches_drawn =models.IntegerField(default=0)
    goals_for =models.IntegerField(default=0)
    goals_against =models.IntegerField(default=0)
    points  =models.IntegerField(default=0)

    points = models.IntegerField(default=0)
    goals_difference = models.IntegerField(default=0)
    power = models.FloatField(default=0.0)



    @property
    def matches_lost(self):
        return self.matches_played - self.matches_won

    def save(self, *args, **kwargs):
        self.points = self.matches_won * 3 + self.matches_drawn
        self.goals_difference = self.goals_for - self.goals_against
        try:
            self.power = round((self.points / (self.matches_played * 3)) * 100, 2)
        except ZeroDivisionError:
            self.power = 0.0
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name   