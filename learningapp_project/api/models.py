from django.db import models

class Sentence(models.Model):
    text = models.TextField()
    text_type = models.CharField(max_length=50)

    def __str__(self):
        return self.text

