from rest_framework import serializers
from .models import TableRecord

class TableRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = TableRecord
        fields = '__all__'