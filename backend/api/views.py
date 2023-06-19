from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def complete_task(self, request, pk=None):
        task = self.get_object()
        task.completed = True
        task.save()
        serializer = TaskSerializer(task)
        return Response(serializer.data)

    def destroy(self, request, pk=None):
        task = self.get_object()
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
