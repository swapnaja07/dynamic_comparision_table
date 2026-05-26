from django.urls import path
from .views import table_data

urlpatterns = [
    path('table-data/', table_data),
]