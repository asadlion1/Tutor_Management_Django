from rest_framework import serializers
from backend.students.models import Student

"""
Serializers is an API boundary!
This is whwere python objects are transformed into JSON format

In Serializers, we need to differentiate between what we send (POST) and recive(GET)

"""


class StudentSerialzer(serializers.Serializer):
    class Meta:
        model = Student
        fields = [
            "student_name",
            ""



        ]



