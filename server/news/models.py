from django.db import models


class Topic(models.Model):
    name = models.CharField(max_length=200)
    # One of 'topic', 'organization', or 'person'
    type = models.CharField(max_length=20, blank=True)
    created_at = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)
    # One of 'primary', 'secondary' or 'error'
    colour = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return self.name


class Article(models.Model):
    nyt_id = models.PositiveBigIntegerField(blank=True, null=True)
    url = models.URLField(blank=True)
    title = models.CharField(max_length=200)
    abstract = models.TextField(max_length=2048, blank=True)
    topics = models.ManyToManyField(Topic, blank=True)
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Trend(models.Model):
    articles = models.ManyToManyField(Article)
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.created_at)
