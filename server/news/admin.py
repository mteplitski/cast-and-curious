from django.contrib import admin
from .models import Topic, Article, Trend


class TopicAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)


class ArticleAdmin(admin.ModelAdmin):
    readonly_fields = ('id', )


class TrendAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)


admin.site.register(Topic, TopicAdmin)
admin.site.register(Article, ArticleAdmin)
admin.site.register(Trend, TrendAdmin)
