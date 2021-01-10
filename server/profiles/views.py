from django.db.models import Count
from rest_framework import mixins, viewsets

from .models import UserProfile
from news.serializers import TopicSerializer


class FavouriteTopicsViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    serializer_class = TopicSerializer
    http_method_names = ['get']

    def get_queryset(self):
        user = UserProfile.objects.get(id=1)

        if user is None:
            return []

        return (
            user.topics
            .filter(active=True)
            .annotate(episode_count=Count('episodes'))
            .filter(episode_count__gte=2)
        )
