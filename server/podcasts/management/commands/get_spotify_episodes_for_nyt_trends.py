import requests

from django.core.management import BaseCommand
from news.models import Topic
from podcasts.models import Episode, Show


class Command(BaseCommand):
    help = 'Retrieves the most viewed New York Times articles in the past day'

    def add_arguments(self, parser):
        parser.add_argument(
            '--token',
            dest='token',
            required=True,
            type=str,
            help=(
                'Bearer token retrieved from authenticating at '
                'https://accounts.spotify.com/authorize?client_id={CLIENT ID}'
                '&response_type=token'
            ),
        )

    def handle(self, *args, **options):
        token = options.get('token')

        for topic in Topic.objects.all():
            response = requests.get(
                'https://api.spotify.com/v1/search',
                params={
                    'type': 'episode',
                    'q': topic.name,
                    'limit': 10,
                    'market': 'CA',
                },
                headers={'Authorization': f'Bearer {token}'},
            )

            data = response.json()

            for basic_episode_data in data['episodes']['items']:
                if basic_episode_data is None:
                    continue

                spotify_id = basic_episode_data['id']

                response = requests.get(
                    f'https://api.spotify.com/v1/episodes/{spotify_id}',
                    headers={'Authorization': f'Bearer {token}'},
                )
                episode_data = response.json()

                if episode_data is None:
                    continue

                show_data = episode_data['show']
                print(show_data['name'])
                print(episode_data['name'])
                show, _ = Show.objects.get_or_create(
                    name=show_data['name'],
                    publisher=show_data['publisher'],
                    image_url=show_data['images'][0]['url'],
                )

                episode, created = Episode.objects.get_or_create(
                    name=episode_data['name'],
                    description=episode_data['description'],
                    spotify_url=episode_data['external_urls']['spotify'],
                    release_date=episode_data['release_date'],
                    duration_ms=episode_data['duration_ms'],
                    show=show,
                )

                if created:
                    episode.topics.add(topic)
