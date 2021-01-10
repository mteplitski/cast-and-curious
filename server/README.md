# Cast and Curious Backend

## Setup

### Installation

```
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
```

### Database setup

```
psql
create database "cast_and_curious";
\q
```

### Environment file config

Duplicate `sample.env` and rename it to `.env`, then add the following:

```
DJANGO_SK=[ask for this one]
DB_NAME='cast_and_curious'
DB_USER=[your postgresql user]
DB_PASSWORD=[your postgresql password]
```

### Running the app

```
python3 manage.py migrate
python3 manage.py runserver
```

The app should be running at http://127.0.0.1:8000/ by default!

### Accessing the Django admin

If you don't already have a superuser account, first create one:

```
python3 manage.py createsuperuser
```

Then, log in at http://127.0.0.1:8000/admin.

## Making database changes

```
python3 manage.py makemigrations [app name]
python3 manage.py migrate [app name]
```

## Lint

```
flake8
```

## Deploy

```
cd ..
git subtree push --prefix server heroku main
```

If Heroku gives you a merge conflict, try:

```
git push heroku `git subtree split --prefix server main`:main --force
```

## API documentation

## API documentation

### Episodes

#### GET /api/episodes/:id
Returns an episode's details in the following form:

```json
{
    "id": 1,
    "name": "Episode 1: Bananas",
    "description": "Bananas, potatoes, and tomatoes",
    "spotify_url": "https://open.spotify.com/track/4t9cpYT8AD3G2TGwSRQVDK?si=O6PMpFCSQ7y10gqhkPH1ow",
    "release_date": "2021-01-09T08:09:55Z",
    "duration_ms": 60000,
    "show": {
        "name": "Minion Madness",
        "publisher": "Brittany",
        "image_url": "https://upload.wikimedia.org/wikipedia/en/7/7d/Minions_characters.png"
    },
    "topics": [
        "sustainability",
        "entertainment",
        "worker's rights"
    ],
    "reviews": [
        {
            "user": "milo",
            "rating": 5,
            "comment": "woof",
            "created_at": "2021-01-09T21:32:19.378593Z"
        }
    ]
}
```

### Topics

#### GET /api/trending/topics

Returns the currently trending topics, and some related episodes. Any topics with fewer than 2 related episodes are filtered out.

```json
[
    {
        "name": "sustainability",
        "colour": "primary",
        "episodes": [
            {
                "id": 1,
                "name": "Bananas",
                "description": "",
                "release_date": null,
                "duration_ms": null,
                "show": {
                    "name": "Minions",
                    "publisher": "Bob",
                    "image_url": ""
                }
            }
        ]
    },
    {
        "name": "civil rights",
        "episodes": []
    }
]
```
