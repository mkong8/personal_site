from django.shortcuts import render

from django.http import HttpResponse # temp


def index(request):
	return HttpResponse("This is going to be the homepage")

