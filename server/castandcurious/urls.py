from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import SimpleRouter

from news.views import TrendingTopicsViewSet
from podcasts.views import EpisodeViewSet

router = SimpleRouter()
router.register(r'episodes', EpisodeViewSet, basename='episodes')
router.register(r'trending/topics', TrendingTopicsViewSet, basename='trending_topics')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
