from rest_framework import serializers
from .models import Guardian


class GurdianSerializer(serializers.Serializer):
    name = serializers.CharField()

    class Meta:
        model = Guardian
        fields = [


            
        ]