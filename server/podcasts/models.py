from django.db import models

from news.models import Topic


class Show(models.Model):
    name = models.CharField(max_length=512)
    publisher = models.CharField(max_length=200)
    image_url = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Episode(models.Model):
    name = models.CharField(max_length=512)
    description = models.TextField(max_length=4096, blank=True)
    spotify_url = models.URLField(blank=True)
    release_date = models.CharField(max_length=50, blank=True, null=True)
    duration_ms = models.PositiveIntegerField(blank=True, null=True)
    show = models.ForeignKey(
        Show,
        on_delete=models.PROTECT,
        related_name='episodes',
    )
    topics = models.ManyToManyField(
        Topic,
        related_name='episodes',
        blank=True,
    )
    created_at = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.name
