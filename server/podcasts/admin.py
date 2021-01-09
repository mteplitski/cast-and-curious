from django.contrib import admin
from .models import Show, Episode


class ShowAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)


class EpisodeAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)


admin.site.register(Show, ShowAdmin)
admin.site.register(Episode, EpisodeAdmin)
