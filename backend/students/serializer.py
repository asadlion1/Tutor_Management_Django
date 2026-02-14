from rest_framework import serializers
from backend.students.models import Student


class ParentSerialzer(serializers.Serializer):
    class Meta:
        model = Student
        fields = [
            "student_name",
            "enrollment_date",
            "school",
            "grade",
            "courses",
            "is_active"
        ]
        
        hidden_fields = [
            "date_of_birth"
        ]

