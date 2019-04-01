from rest_framework import routers
from .api import SocialMediaViewSet


router = routers.DefaultRouter()
router.register('api/socialmedia', SocialMediaViewSet, 'socialmedia')

urlpatterns = router.urls