from django.http import HttpResponse

def real_home(request):
    return HttpResponse('This is main home page......')