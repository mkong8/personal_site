from server.models import SocialMedia
from rest_framework import viewsets, permissions
from .serializers import SocialMediaSerializer


class SocialMediaViewSet(viewsets.ModelViewSet):
	queryset = SocialMedia.objects.all()
	permission_classes = [
		permissions.AllowAny
	]

	serializer_class = SocialMediaSerializer