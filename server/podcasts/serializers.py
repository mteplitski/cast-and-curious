from rest_framework import serializers

from .models import Show, Episode
from news.serializers import TopicSerializer
from profiles.serializers import ReviewSerializer


class ShowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Show
        fields = ['name', 'publisher', 'image_url', ]


class EpisodeSerializer(serializers.ModelSerializer):
    show = ShowSerializer()
    topics = serializers.SerializerMethodField()
    reviews = ReviewSerializer(many=True)

    class Meta:
        model = Episode
        fields = [
            'id',
            'name',
            'description',
            'spotify_url',
            'release_date',
            'duration_ms',
            'show',
            'topics',
            'reviews',
        ]

    def get_topics(self, obj):
        return [topic.name for topic in obj.topics.all()]
