# Generated by Django 3.0.2 on 2020-01-27 14:42

from django.db import migrations

def create_data(apps, schema_editor):
    SocialMedia = apps.get_model('api', 'SocialMedia')
    SocialMedia(name='Github', link='https://www.github.com/mkong8', dark_image='github_dark.png', light_image='github_light.png').save()


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_api'),
    ]

    operations = [
        migrations.RunPython(create_data)
    ]
