from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name="api-overview"),
    path('sentence-list/', views.sentenceList, name="sentence-list"),
    path('sentence-detail/<str:pk>/', views.sentenceDetail, name="sentence-detail"),
    path('sentence-create/', views.sentenceCreate, name="sentence-create"),

    path('sentence-update/<str:pk>/', views.sentenceUpdate, name="sentence-update"),
    path('sentence-delete/<str:pk>/', views.sentenceDelete, name="sentence-delete"),
]