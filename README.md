# Learning-App

Hungarian grammar learning application with sentence analysis and spelling checker for students

Useful commands
Install Django in command line

- pip install django

Check the version of Django

- python -m django --version

Install Django Rest Framework

- pip install djangorestframework

-> Add 'rest_framework' to your INSTALLED_APPS settings.

Create new Django project

- django-admin startproject project_name

Create new Django app within the project -python manage.py startapp app_name

Run Django project on server

- python mamage.py runserver

Starting development server at http://127.0.0.1:8000/

Apply migrations to the project

- python mamage.py migrate

Create the tables with the migrations

- python manage.py sqlmigrate app_name migration_name
- f.e. python manage.py sqlmigrate api 0001

Make migrations

- python manage.py makemigrations
