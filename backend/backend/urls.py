from django.contrib import admin
from django.urls import include, path
# from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    # path('token/', obtain_jwt_token),
    path('', include('api.urls'))
]
