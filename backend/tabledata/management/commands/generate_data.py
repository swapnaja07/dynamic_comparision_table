from django.core.management.base import BaseCommand
from faker import Faker
from random import randint, choice
from tabledata.models import TableRecord
from datetime import datetime, timedelta

fake = Faker()

class Command(BaseCommand):
    help = "Generate mock table data"

    def handle(self, *args, **kwargs):
        products = [f"Product {i}" for i in range(1, 101)]
        regions = ['North', 'South', 'East', 'West']

        start_date = datetime(2026, 1, 1)

        records = []

        for _ in range(40000):
            records.append(
                TableRecord(
                    product=choice(products),
                    region=choice(regions),
                    date=start_date + timedelta(days=randint(0, 120)),
                    value=randint(100, 10000)
                )
            )

        TableRecord.objects.bulk_create(records)

        self.stdout.write(self.style.SUCCESS("40K records inserted"))