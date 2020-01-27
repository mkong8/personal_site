from rest_framework import serializers
from api.models import SocialMedia

class SocialMediaSerializer(serializers.ModelSerializer):
	class Meta:
		model = SocialMedia
		fields = '__all__'