from django.db import models
from backend.students.models import Student

# Create your models here.

class DaysOfWeek(models.TextChoices):
    MONDAY    = "MON", "Monday"
    TUESDAY   = "TUE", "Tuesday"
    WEDNESDAY = "WED", "Wednesday"
    THURSDAY  = "THU", "Thursday"
    FRIDAY    = "FRI", "Friday"
    SATURDAY  = "SAT", "Saturday"
    SUNDAY    = "SUN", "Sunday"


class Student(models.Model):
    # Blank for Parent Field (one to many, one parent can have many child)
    name = models.CharField(max_length=255)
    date_of_birth = models.DateField()
    enrollment_date = models.DateField()



class StudentSchedule(models.Model):
    student = models.ForeignKey(
        Student,
        on_delete=models.CASCADE,
        related_name="student_schudule"
    )
    start_time = models.TimeField()
    end_time = models.TimeField()



    
    
    
    
