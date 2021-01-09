from rest_framework import viewsets

from .models import Episode
from .serializers import EpisodeSerializer


class EpisodeViewSet(viewsets.ReadOnlyModelViewSet):
    '''  # noqa: E501
    GET /api/episodes
    Returns all episodes in the following form:
    [
        {
            "id": 1,
            "name": "Episode 1: Bananas",
            "description": "Bananas, potatoes, and tomatoes",
            "spotify_url": "https://open.spotify.com/track/4t9cpYT8AD3G2TGwSRQVDK?si=O6PMpFCSQ7y10gqhkPH1ow",
            "release_date": "2021-01-09T08:09:55Z",
            "duration_ms": 60000,
            "show": {
                "name": "Minion Madness",
                "publisher": "Brittany",
                "image_url": "https://upload.wikimedia.org/wikipedia/en/7/7d/Minions_characters.png"
            }
        }
    ]

    GET /api/episodes/:id
    Returns the episode's details in the following form:
    {
        "id": 1,
        "name": "Episode 1: Bananas",
        "description": "Bananas, potatoes, and tomatoes",
        "spotify_url": "https://open.spotify.com/track/4t9cpYT8AD3G2TGwSRQVDK?si=O6PMpFCSQ7y10gqhkPH1ow",
        "release_date": "2021-01-09T08:09:55Z",
        "duration_ms": 60000,
        "show": {
            "name": "Minion Madness",
            "publisher": "Brittany",
            "image_url": "https://upload.wikimedia.org/wikipedia/en/7/7d/Minions_characters.png"
        }
    }
    '''
    queryset = Episode.objects.all()
    serializer_class = EpisodeSerializer
    http_method_names = ['get']
