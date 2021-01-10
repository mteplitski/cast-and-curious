from django.db.models import Count

from .models import Topic, Trend


def get_trending_topics():
    latest_trend = Trend.objects.latest('created_at')

    if latest_trend is None:
        return []

    topic_ids = []
    for article in latest_trend.articles.all():
        topics = (
            article.topics
            .filter(active=True)
            .annotate(episode_count=Count('episodes'))
            .filter(episode_count__gte=2)
        )
        for topic in topics:
            topic_ids.append(topic.id)

    topic_id_counts = {}
    for topic_id in topic_ids:
        if topic_id in topic_id_counts:
            topic_id_counts[topic_id] += 1
        else:
            topic_id_counts[topic_id] = 1

    sorted_topic_ids = list(dict(sorted(
        topic_id_counts.items(),
        key=lambda item: item[1],
        reverse=True,
    )).keys())

    topics = []
    for topic_id in sorted_topic_ids[0:4]:
        topics.append(
            Topic.objects.get(id=topic_id)
        )
    return topics
