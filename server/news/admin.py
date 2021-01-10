from django.contrib import admin
from .models import Topic, Article, Trend


class TopicAdmin(admin.ModelAdmin):
    readonly_fields = ('id', )
    search_fields = ('name', )
    list_display = ('name', 'type', 'active', )


class ArticleAdmin(admin.ModelAdmin):
    readonly_fields = ('id', 'nyt_id', 'url', )
    search_fields = ('title', )
    list_display = ('title', )


class TrendAdmin(admin.ModelAdmin):
    readonly_fields = ('id', )
    search_fields = ('title', )


admin.site.register(Topic, TopicAdmin)
admin.site.register(Article, ArticleAdmin)
admin.site.register(Trend, TrendAdmin)
