from api.models import SocialMedia
from api.serializers import SocialMediaSerializer
from rest_framework import viewsets

class SocialMediaView(viewsets.ModelViewSet):
    queryset = SocialMedia.objects.all()
    serializer_class = SocialMediaSerializer