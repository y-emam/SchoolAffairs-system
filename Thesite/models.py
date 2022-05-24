import email
from django.db import models
from datetime import datetime
# Create your models here.


class Student_Data (models.Model):
    name = models.CharField(max_length=100)
    SI = models.CharField(max_length=10)
    GPA = models.CharField(max_length=5)
    gender = models.CharField(max_length=10)
    level = models.CharField(max_length=5)
    status = models.CharField(max_length=10)
    Email = models.CharField(max_length=30)
    mobile = models.CharField(max_length=20)
    DateOfBirth = models.DateField(
        auto_now_add=False, blank=False, null=False, auto_now=False)
    department = models.CharField(
        max_length=40, default=None, null=True, blank=True)
