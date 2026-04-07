from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from api.models import Product
from api.serializers import ProductSerializer


@api_view(['GET','POST'])
def products_list(request):
    if request.method=='GET':
        p=Product.objects.all()
        s=ProductSerializer(p,many=True)
        return Response(s.data)

    if request.method=='POST':
        s=ProductSerializer(data=request.data)
        if s.is_valid():
            s.save()
            return Response(s.data,status=status.HTTP_201_CREATED)
        return Response(s.errors,status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET','PUT','DELETE'])
def product_detail(request,product_id):
    try:
        p=Product.objects.get(id=product_id)
    except Product.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method=='GET':
        s=ProductSerializer(p)
        return Response(s.data)

    if request.method=='PUT':
        s=ProductSerializer(p,data=request.data)
        if s.is_valid():
            s.save()
            return Response(s.data)
        return Response(s.errors,status=status.HTTP_400_BAD_REQUEST)

    if request.method=='DELETE':
        p.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)