from .models import Trend


def get_trending_topics():
    latest_trend = Trend.objects.latest('created_at')

    if latest_trend is None:
        return []

    topics = []
    for article in latest_trend.articles.all():
        for topic in article.topics.all():
            topics.append(topic)

    # TODO: filter top topics by occurrence
    return topics[0:3]
