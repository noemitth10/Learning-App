from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import SentenceSerializer

from .models import Sentence

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'/sentence-list/',
		'Detail View':'/sentence-detail/<str:pk>/',
		'Create':'/sentence-create/',
		'Update':'/sentence-update/<str:pk>/',
		'Delete':'/sentence-delete/<str:pk>/',
	}

	return Response(api_urls)

@api_view(['GET'])
def sentenceList(request):
    sentences = Sentence.objects.all()
    serializer = SentenceSerializer(sentences, many=True)
    
    return Response(serializer.data)

@api_view(['GET'])
def sentenceDetail(request, pk):
    sentences = Sentence.objects.get(id=pk)
    serializer = SentenceSerializer(sentences, many=False)
    
    return Response(serializer.data)

@api_view(['POST'])
def sentenceCreate(request):
    serializer = SentenceSerializer(data=request.data)
    if(serializer.is_valid()):
        serializer.save()
    
    return Response(serializer.data)

@api_view(['POST'])
def sentenceUpdate(request, pk):
    sentence = Sentence.objects.get(id=pk)
    serializer = SentenceSerializer(instance=sentence, data=request.data)
    if(serializer.is_valid()):
        serializer.save()
    
    return Response(serializer.data)

@api_view(['DELETE'])
def sentenceDelete(request, pk):
    sentence = Sentence.objects.get(id=pk)
    sentence.delete()

    return Response("Succesfully deleted!")

