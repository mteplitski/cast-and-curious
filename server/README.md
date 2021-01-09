# Cast and Curious Backend

## Setup

### Installation

```
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
```

### Running the podcasts app

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
