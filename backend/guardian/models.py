# backend/guradian/models.py
from django.db import models
from students.models import Student



class Guardian(models.Model):
    """
    Docstring for Guardian
    This class is for the parents of students, when they sign up as their inforation is needed 
 
    """

    # Personal Information of the Parent
    parent_name = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=20)
    email = models.EmailField(blank=True, null=True)

    # Relationship with Student
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='guardians')
    relationship = models.CharField(max_length=100)

    # Sign up date
    signup_date = models.DateField(blank=False)

    # For logging and data 
    created_at = models.DateField()



