# backend/students/models.py
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.core.exceptions import ValidationError
from backend.courses.models import Course
from backend.guardian.models import Parent

"""
Models is the Database Contract
We Store Data that must be consitent and queryable
Models are real life entities 
"""

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
    This class is for Student, adding them to the DB
    """

    # Parent field 
    parent = models.ForeignKey(
        Parent,
        on_delete=models.CASCADE,
        related_name="Student"
        
    )

    # Personal information about Student
    student_name = models.CharField(max_length=255)
    date_of_birth = models.DateField()
    enrollment_date = models.DateField()

    # School information on the student
    school = models.CharField(max_length=255, blank=True)
    grade = models.PositiveSmallIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(12)]
    )
    
    courses = models.ManyToManyField(
        Course,
        related_name="Student",
        blank=True
    )

    # See if student is active or not 
    is_active = models.CharField(
        max_length=8,
        choices=Activity.choices,
        default=Activity.ACTIVE
    )
    
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    
    def __str__(self):
        return f"{self.student_name} (Grade {self.grade})"



class StudentSchedule(models.Model):
    student = models.ForeignKey(
        Student,
        on_delete=models.CASCADE,
        related_name="student_schedule"
    )
    start_time = models.TimeField()
    end_time = models.TimeField()
    day_of_week = models.CharField(
        max_length=8,
        choices=DaysOfWeek.choices
        )
    
    
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["student", "day_of_week", "start_time", "end_time"],
                name="uniq_student_schedule_block"
            )
        ]
        
        
    def clean(self):
        # Prevents end time <= start time
        if self.end_time <= self.start_time:
            raise ValidationError("end_time must be after start_time")


    def __str__(self):
        return f"{self.student} - {self.start_time} - {self.end_time} - {self.day_of_week}"