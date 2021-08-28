from django.urls import path
from django.urls.resolvers import URLPattern
from ..views import user_views as views


urlpatterns = [
    path('login', views.MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('register/', views.registerUser, name='register'),
    path('profile/', views.getUserProfile, name='userprofile'),
    path('', views.getUsers, name='users'),


]