from django.contrib import admin
from .models import Show, Episode


class ShowAdmin(admin.ModelAdmin):
    search_fields = ('name', 'publisher', )
    list_display = ('name', 'publisher', )
    readonly_fields = ('id',)


class EpisodeAdmin(admin.ModelAdmin):
    search_fields = ('id', 'name', 'show__name', )
    list_display = ('name', 'show', 'active', )
    readonly_fields = ('id',)


admin.site.register(Show, ShowAdmin)
admin.site.register(Episode, EpisodeAdmin)
