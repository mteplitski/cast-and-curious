from rest_framework import serializers

from .models import Topic
from podcasts.serializers import EpisodeListSerializer


class TopicSerializer(serializers.ModelSerializer):
    episodes = serializers.SerializerMethodField()

    class Meta:
        model = Topic
        fields = ['name', 'colour', 'episodes', ]

    def get_episodes(self, obj):
        episodes = obj.episodes.filter(active=True)
        return EpisodeListSerializer(
            episodes,
            many=True,
            read_only=True,
        ).data
