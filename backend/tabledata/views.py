from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination

from .models import TableRecord
from .serializers import TableRecordSerializer


@api_view(['GET'])
def table_data(request):
    dates = request.GET.get('dates')

    queryset = TableRecord.objects.all().order_by('id')

    if dates:
        date_list = dates.split(',')
        queryset = queryset.filter(date__in=date_list)

    # Pagination
    paginator = PageNumberPagination()
    paginator.page_size = 20   

    result_page = paginator.paginate_queryset(queryset, request)

    serializer = TableRecordSerializer(result_page, many=True)

    return paginator.get_paginated_response(serializer.data)