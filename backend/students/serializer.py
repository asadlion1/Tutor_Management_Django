from rest_framework import serializers
from backend.students.models import Student

"""
Serializers is an API boundary
This is whwere python objects are transformed into JSON format
In Serializers, we need to differentiate between what we send (POST) and recive(GET)
"""


class StudentReadSerialzer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = [
            "student_name",
            "school",
            "courses",
        ]




class StudentCreateSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=50)
    date_of_birth = serializers.DateField()
    enrollment_date = serializers.DateField()
    school = serializers.CharField(max_length=100)
    grade = serializers.IntegerField()



    def validate_grade(self, grade):

        if not (grade < 1 or grade > 12):
            raise serializers.ValidationError(
                "Grade cannot be grader than 12 or less than 1"
            )
            
        return grade 
    
