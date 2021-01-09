from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import SimpleRouter

from podcasts.views import EpisodeViewSet

router = SimpleRouter()
router.register(r'episodes', EpisodeViewSet, basename='episodes')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
