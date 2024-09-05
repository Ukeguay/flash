from django.urls import path
from . import views

urlpatterns = [
    path('', views.flashcard_list, name='flashcard_list'),
    path('create/', views.create_flashcard, name='create_flashcard'),
    path('study/', views.study_flashcards, name='study_flashcards'),
]