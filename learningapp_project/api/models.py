from django.db import models

class Sentence(models.Model):
    text = models.TextField()
    text_type = models.CharField(max_length=50)

    def __str__(self):
        return self.text

class Lessons(models.Model):
    category = models.CharField(max_length=100)
    text_of_the_lesson = models.TextField()
    level = models.CharField(max_length=20)
    sentences = models.ForeignKey('SentencesToLesson', on_delete=models.CASCADE)

class Sentences(models.Model):
    text = models.TextField()
    text_type = models.CharField(max_length=50)
    predicate = models.CharField(max_length=50)
    subjective = models.CharField(max_length=50)

class SentencesToLesson(models.Model):
    lesson_id = models.ForeignKey('Lessons', on_delete=models.CASCADE)
    sentence_id = models.ForeignKey('Sentences', on_delete=models.CASCADE)