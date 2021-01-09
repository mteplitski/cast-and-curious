from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator

from news.models import Topic
from podcasts.models import Episode


class UserProfile(models.Model):
    user = models.OneToOneField(
        User,
        related_name='profile',
        on_delete=models.CASCADE,
    )
    topics = models.ManyToManyField(
        Topic,
        related_name='users',
        blank=True,
    )
    listened_to = models.ManyToManyField(
        Episode,
        related_name='users',
        blank=True,
    )

    def __str__(self):
        return self.user.username


class Review(models.Model):
    user = models.ForeignKey(
        UserProfile,
        related_name='reviews',
        on_delete=models.CASCADE,
    )
    episode = models.ForeignKey(
        Episode,
        related_name='reviews',
        on_delete=models.CASCADE,
    )
    rating = models.PositiveIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)],
    )
    comment = models.TextField(max_length=2048, blank=True)
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.user} - {self.episode.name}'
