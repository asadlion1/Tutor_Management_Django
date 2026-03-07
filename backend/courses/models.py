from django.db import models


"""
Models for courses that will be available (Admin will add)
"""


class Course(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=100)
    
    
    
    def __str__(self):
        return self.name
    
    


