from django.db import models
from backend.students.models import Student

# Create your models here.




class Student(models.Model):
    name = models.CharField(max_length=255)
    date_of_birth = models.DateField()
    enrollment_date = models.DateField()
    
    
    
    
