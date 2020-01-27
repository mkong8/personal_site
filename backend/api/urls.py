from django.urls import path, include
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register('socialmedia', views.SocialMediaView, 'socialmedia')

urlpatterns = [
    path('api/', include(router.urls))
]