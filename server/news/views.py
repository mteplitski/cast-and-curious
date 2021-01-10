from rest_framework import mixins, viewsets

from .serializers import TopicSerializer
from .services import get_trending_topics


class TrendingTopicsViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    serializer_class = TopicSerializer
    http_method_names = ['get']

    def get_queryset(self):
        return get_trending_topics()
