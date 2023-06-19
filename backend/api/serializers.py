from rest_framework import serializers
from .models import Task

# DEFINE SERIALIZERS

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'
