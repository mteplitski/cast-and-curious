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
