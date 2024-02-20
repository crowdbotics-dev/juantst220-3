from django.conf import settings
from django.db import models


class Bank(models.Model):
    "Generated Model"
    address = models.CharField(
        max_length=255,
    )
    gold = models.BigIntegerField()
