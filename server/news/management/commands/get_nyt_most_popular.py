import os
import requests

from django.core.management import BaseCommand
from news.models import Article, Topic, Trend


class Command(BaseCommand):
    help = 'Retrieves the most viewed New York Times articles in the past day'

    def handle(self, *args, **options):
        response = requests.get(
            'https://api.nytimes.com/svc/mostpopular/v2/shared/1.json',
            params={'api-key': os.getenv('NYT_API_KEY')}
        )

        data = response.json()

        trend = Trend.objects.create()

        for article_data in data['results']:
            article, _ = Article.objects.get_or_create(
                nyt_id=article_data['id'],
                url=article_data['url'],
                title=article_data['title'],
                abstract=article_data['abstract'],
            )

            for facet in article_data['des_facet']:
                topic, _ = Topic.objects.get_or_create(
                    name=facet,
                    type='topic',
                )
                article.topics.add(topic)

            for facet in article_data['org_facet']:
                topic, _ = Topic.objects.get_or_create(
                    name=facet,
                    type='organization',
                )
                article.topics.add(topic)

            for facet in article_data['per_facet']:
                topic, _ = Topic.objects.get_or_create(
                    name=facet,
                    type='person',
                )
                article.topics.add(topic)

            trend.articles.add(article)
