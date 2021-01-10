from django.db import models


class Topic(models.Model):
    name = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Article(models.Model):
    nyt_id = models.IntegerField(null=True)
    title = models.CharField(max_length=200)
    url = models.URLField(blank=True)
    abstract = models.TextField(max_length=2048, blank=True)
    topics = models.ManyToManyField(Topic, blank=True)  # des_facet
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Trend(models.Model):
    articles = models.ManyToManyField(Article)
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.created_at)
