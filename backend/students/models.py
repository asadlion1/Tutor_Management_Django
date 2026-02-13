# backend/students/models.py
from django.db import models
from backend.students.models import Student

class DaysOfWeek(models.TextChoices):
    MONDAY    = "MON", "Monday"
    TUESDAY   = "TUE", "Tuesday"
    WEDNESDAY = "WED", "Wednesday"
    THURSDAY  = "THU", "Thursday"
    FRIDAY    = "FRI", "Friday"
    SATURDAY  = "SAT", "Saturday"
    SUNDAY    = "SUN", "Sunday"


class Activity(models.TextChoices):
    ACTIVE = "active", "Active"
    INACTIVE = "inactive", "Inactive"

class Student(models.Model):
    """
    Docstring for Student
    This class is for Student, when they get enrolled to save them
    """

    # Parent field 

    # Personal information about Student
    student_name = models.CharField(max_length=255)
    date_of_birth = models.DateField()
    enrollment_date = models.DateField()

    # School information on the student
    school = models.CharField()
    grade = models.IntegerField()
    courses = models.CharField() # Gotta figure out what this one is

    # See if student is active or not 
    is_active = models.TextField(choices=Activity)




class StudentSchedule(models.Model):
    student = models.ForeignKey(
        Student,
        on_delete=models.CASCADE,
        related_name="student_schudule"
    )
    start_time = models.TimeField()
    end_time = models.TimeField()
    days = models.TextChoices(choices=DaysOfWeek)
