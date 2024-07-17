#!/bin/bash

python manage.py migrate --noinput

waitress-serve --port=$PORT grad_na_dlanu_48774.wsgi:application
