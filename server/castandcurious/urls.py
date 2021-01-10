from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import SimpleRouter

from news.views import TrendingTopicsViewSet
from podcasts.views import EpisodeViewSet
from profiles.views import FavouriteTopicsViewSet

router = SimpleRouter()
router.register(r'episodes', EpisodeViewSet, basename='episodes')
router.register(r'topics/trending', TrendingTopicsViewSet, basename='trending_topics')
router.register(r'topics/favourites', FavouriteTopicsViewSet, basename='favourite_topics')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
