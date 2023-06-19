from django.urls import include, path
from rest_framework import routers
from .views import TaskViewSet

router = routers.DefaultRouter()
router.register(r'tasks', TaskViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api/tasks/<int:pk>/complete/', TaskViewSet.as_view({'put': 'complete_task'}), name='task-complete'),
]
