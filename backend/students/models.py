from django.db import models
from backend.students.models import Student

# Create your models here.




class Student(models.Model):
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


class DaysOfWeek(models.CharField):
    monday = "monday, Monday"
    
    
    
    
    
