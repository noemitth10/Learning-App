from rest_framework import serializers
from rest_framework.authtoken.models import Token
from .models import Sentence, Lessons, Sentences, SentencesToLesson
from django.contrib.auth.models import User


class SentenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sentence
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'is_staff', 'password']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user

class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lessons
        fields = '__all__'

class SentencesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sentences
        fields = '__all__'

class SentencesToLessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = SentencesToLesson
        fields = '__all__'