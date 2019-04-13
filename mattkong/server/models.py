from django.db import models


class SocialMedia(models.Model):
	name = models.CharField(max_length=100)
	link = models.CharField(max_length=100)
	dark_image = models.CharField(max_length=100)
	light_image = models.CharField(max_length=100)
