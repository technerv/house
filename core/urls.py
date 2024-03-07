from django.urls import path, include
from rest_framework import routers
from core.views import PlotViewSet, HouseViewSet, TenantViewSet

router = routers.DefaultRouter()
router.register(r'plot', PlotViewSet)
router.register(r'house', HouseViewSet)
router.register(r'tenant', TenantViewSet)

urlpatterns = [
  
  path('', include(router.urls)),
 
]