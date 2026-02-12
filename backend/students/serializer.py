from rest_framework import serializers
from backend.students.models import Student


class ParentSerialzer(serializers.Serializer):
    class Meta:
        model = Student
        fields = [
            "student_name",
            ""



        ]

