from .models import Episode
from news.models import Trend


def get_episode_for_article(article):
    # TODO: search somehow
    return Episode.objects.first()


def get_trending_episodes():
    latest_trend = Trend.objects.latest('created_at')

    if latest_trend is None:
        return []

    episodes = []
    for article in latest_trend.articles.all():
        episodes.append(get_episode_for_article(article))

    return episodes
