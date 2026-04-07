from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.models import Product
from api.serializers import ProductSerializer


class ProductListAPIView(APIView):
    def get(self,request):
        p=Product.objects.all()
        s=ProductSerializer(p,many=True)
        return Response(s.data)

    def post(self,request):
        s=ProductSerializer(data=request.data)
        if s.is_valid():
            s.save()
            return Response(s.data,status=status.HTTP_201_CREATED)
        return Response(s.errors,status=status.HTTP_400_BAD_REQUEST)


class ProductDetailAPIView(APIView):
    def get_object(self,product_id):
        try:
            return Product.objects.get(id=product_id)
        except Product.DoesNotExist:
            return None

    def get(self,request,product_id):
        p=self.get_object(product_id)
        if p is None:
            return Response(status=status.HTTP_404_NOT_FOUND)
        s=ProductSerializer(p)
        return Response(s.data)

    def put(self,request,product_id):
        p=self.get_object(product_id)
        if p is None:
            return Response(status=status.HTTP_404_NOT_FOUND)
        s=ProductSerializer(p,data=request.data)
        if s.is_valid():
            s.save()
            return Response(s.data)
        return Response(s.errors,status=status.HTTP_400_BAD_REQUEST)

    def delete(self,request,product_id):
        p=self.get_object(product_id)
        if p is None:
            return Response(status=status.HTTP_404_NOT_FOUND)
        p.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)