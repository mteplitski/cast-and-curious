# Generated by Django 3.1.5 on 2021-01-10 04:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('podcasts', '0003_auto_20210109_2003'),
    ]

    operations = [
        migrations.AddField(
            model_name='episode',
            name='created_at',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='show',
            name='created_at',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='episode',
            name='description',
            field=models.TextField(blank=True, max_length=4096),
        ),
        migrations.AlterField(
            model_name='episode',
            name='release_date',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
