from django.contrib import admin
from .models import Topic


class TopicAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)


admin.site.register(Topic, TopicAdmin)
