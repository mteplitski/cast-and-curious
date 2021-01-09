from django.db import models


class Show(models.Model):
    id = models.IntegerField(primary_key=True, editable=False)
    name = models.CharField(max_length=512)
    publisher = models.CharField(max_length=200)
    image_url = models.URLField(blank=True)

    def __str__(self):
        return self.name


class Episode(models.Model):
    id = models.IntegerField(primary_key=True, editable=False)
    name = models.CharField(max_length=512)
    description = models.CharField(max_length=2048, blank=True)
    spotify_url = models.URLField(blank=True)
    release_date = models.DateTimeField(blank=True, null=True)
    duration_ms = models.IntegerField(blank=True, null=True)
    show = models.ForeignKey(
        'podcasts.Show',
        on_delete=models.PROTECT,
        related_name='episodes',
    )

    def __str__(self):
        return self.name
