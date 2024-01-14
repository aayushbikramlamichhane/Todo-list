from django.db import models

class Task(models.Model):
    title=models.CharField( max_length=50)
    complete=models.BooleanField(default=False)
    created=models.DateTimeField( auto_now_add=False)
    
    
    def __str__(self):
        return self.title
    
    
