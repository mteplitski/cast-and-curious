from rest_framework import mixins, viewsets

from .models import Episode
from .serializers import EpisodeSerializer, EpisodePreviewSerializer
from .services import get_trending_episodes


class EpisodeViewSet(mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    queryset = Episode.objects.all()
    serializer_class = EpisodeSerializer
    http_method_names = ['get']


class TrendingEpisodesViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    serializer_class = EpisodePreviewSerializer
    http_method_names = ['get']

    def get_queryset(self):
        # return Episode.objects.all()
        return get_trending_episodes()


class InterestEpisodesViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    serializer_class = EpisodePreviewSerializer
    http_method_names = ['get']
    pass
