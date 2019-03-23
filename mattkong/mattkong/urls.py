from django.urls import include, path

urlpatterns = [
	path('', include('mysite.urls')),
]
