from django.urls import path
from . import views
#from rest_framework import routers
#router = routers.DefaultRouter()
#router.register('users', UserViewSet)

urlpatterns = [
    path('', views.apiOverview, name="api-overview"),
    path('sentence-list/', views.sentenceList, name="sentence-list"),
    path('sentence-detail/<str:pk>/',
         views.sentenceDetail, name="sentence-detail"),
    path('sentence-create/', views.sentenceCreate, name="sentence-create"),

    path('sentence-update/<str:pk>/',
         views.sentenceUpdate, name="sentence-update"),
    path('sentence-delete/<str:pk>/',
         views.sentenceDelete, name="sentence-delete"),

    path('user-list/', views.userList, name="user-list"),
    path('user-detail/<str:pk>/',
         views.userDetail, name="user-detail"),
    path('user-create/', views.userCreate, name="user-create"),

    path('user-update/<str:pk>/',
         views.userUpdate, name="user-update"),
    path('user-delete/<str:pk>/',
         views.userDelete, name="user-delete"),
]
