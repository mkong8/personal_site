from rest_framework import serializers
from server.models import SocialMedia

class SocialMediaSerializer(serializers.ModelSerializer):
	class Meta:
		model = SocialMedia
		fields = '__all__'