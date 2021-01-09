from rest_framework import serializers

from .models import Show, Episode


class ShowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Show
        fields = ['name', 'publisher', 'image_url', ]


class EpisodeSerializer(serializers.ModelSerializer):
    show = ShowSerializer()

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
        ]
