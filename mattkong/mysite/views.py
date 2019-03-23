from django.shortcuts import render

from django.http import HttpResponse # temp


def index(request):
	return render(request, 'mysite/index.html')

