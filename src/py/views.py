# views.py
from django.shortcuts import render, redirect
from .models import Flashcard
from .forms import FlashcardForm

def create_flashcard(request):
    if request.method == 'POST':
        form = FlashcardForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('flashcard_list')
    else:
        form = FlashcardForm()
    return render(request, 'create_flashcard.html', {'form': form})

def study_flashcards(request):
    flashcards = Flashcard.objects.all()
    return render(request, 'study_flashcards.html', {'flashcards': flashcards})
