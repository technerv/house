from rest_framework import serializers
from core.models import  House, Tenant, Plot
from accounts.models import User

class PlotSerializer(serializers.ModelSerializer):

    class Meta:
        model = Plot
        fields = '__all__'

    def to_representation(self, instance):
        rep = super(PlotSerializer, self).to_representation(instance)
        rep['plot_owner']=instance.plot_owner.first_name + " "+ instance.plot_owner.last_name
        return rep  
     
class HouseSerializer(serializers.ModelSerializer):

    plot_number = serializers.StringRelatedField()
    
    class Meta:
        model =  House
        fields = '__all__'   

class TenantSerializer(serializers.ModelSerializer):

    tenant_name = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
   
    class Meta:
        model = Tenant
        fields = ['tenant_name', 'house_number']
    
    def to_representation(self, instance):
        rep = super(TenantSerializer, self).to_representation(instance)
        rep['house_number']=instance.house_number.house_number
        return rep