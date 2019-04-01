from django.shortcuts import render


def home(request):
	context = {}
	
	menu_items = [
		('Home', 'home:index'),
		('Projects', 'home:index'),
		('Music', 'home:index'),
		('Contact', 'home:index')
	]

	social_links = [
		('facebook', 'https://www.facebook.com/matt.kong2'),
		('instagram', 'https://www.instagram.com/mat_kong/'),
		('github', 'https://www.github.com/mkong8'),
		('youtube', 'https://www.youtube.com/channel/UCnDpGh9GcAbh4DANwKNo4BA?view_as=subscriber'),
		('linkedin', 'https://www.linkedin.com/in/mattkong8/')
	]

	context['menu'] = menu_items
	context['social'] = social_links

	return render(request, 'frontend/index.html')
