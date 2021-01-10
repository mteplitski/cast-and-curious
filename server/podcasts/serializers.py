from rest_framework import serializers

from .models import Show, Episode
from profiles.serializers import ReviewSerializer


class ShowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Show
        fields = ['name', 'publisher', 'image_url', ]


class EpisodeListSerializer(serializers.ModelSerializer):
    show = ShowSerializer()

    class Meta:
        model = Episode
        fields = [
            'id',
            'name',
            'description',
            'release_date',
            'duration_ms',
            'show',
        ]


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


class EpisodePreviewSerializer(serializers.ModelSerializer):
    show = ShowSerializer()
    topic = serializers.SerializerMethodField()

    class Meta:
        model = Episode
        fields = [
            'id',
            'name',
            'description',
            'show',
            'topic',
        ]

    def get_topic(self, obj):
        if obj.topics:
            return obj.topics.first().name
        return None
