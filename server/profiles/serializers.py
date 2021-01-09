from rest_framework import serializers

from .models import UserProfile, Review


class ReviewSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Review
        fields = ['user', 'rating', 'comment', 'created_at', ]

    def get_user(self, obj):
        return obj.user.user.username

