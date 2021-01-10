from rest_framework import mixins, viewsets

from .models import Episode
from .serializers import EpisodeSerializer
from .services import get_trending_episodes


class EpisodeViewSet(mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    queryset = Episode.objects.all()
    serializer_class = EpisodeSerializer
    http_method_names = ['get']
