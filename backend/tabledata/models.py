from django.db import models


class TableRecord(models.Model):
    product = models.CharField(max_length=100)
    region = models.CharField(max_length=100)
    date = models.DateField(db_index=True)
    value = models.IntegerField()

    def __str__(self):
        return f"{self.product} - {self.region}"
