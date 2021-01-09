from django.contrib import admin
from .models import UserProfile, Review


class UserProfileAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)


class ReviewAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)


admin.site.register(UserProfile, UserProfileAdmin)
admin.site.register(Review, ReviewAdmin)
