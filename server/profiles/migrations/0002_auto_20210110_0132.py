# Generated by Django 3.1.5 on 2021-01-10 01:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0002_auto_20210110_0132'),
        ('podcasts', '0003_auto_20210109_2003'),
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='listened_to',
            field=models.ManyToManyField(blank=True, related_name='listened_by', to='podcasts.Episode'),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='topics',
            field=models.ManyToManyField(blank=True, related_name='followed_by', to='news.Topic'),
        ),
    ]