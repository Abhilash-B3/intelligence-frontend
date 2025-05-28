from django.db import models

class Document(models.Model):
    title = models.CharField(max_length=255)
    file_path = models.CharField(max_length=1024)
    file_type = models.CharField(max_length=20)
    file_size = models.IntegerField()
    pages = models.IntegerField()
    status = models.CharField(max_length=20, default="processing")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class DocumentChunk(models.Model):
    document = models.ForeignKey(Document, related_name="chunks", on_delete=models.CASCADE)
    chunk_index = models.IntegerField()
    page_numbers = models.CharField(max_length=50)
    text = models.TextField()
    embedding_id = models.CharField(max_length=255) 