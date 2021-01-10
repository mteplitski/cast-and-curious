from rest_framework import serializers

from .models import Topic
from podcasts.serializers import EpisodeListSerializer


class TopicSerializer(serializers.ModelSerializer):
    episodes = EpisodeListSerializer(many=True)

    class Meta:
        model = Topic
        fields = ['name', 'colour', 'episodes', ]
