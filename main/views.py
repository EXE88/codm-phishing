from django.shortcuts import render
from django.views import View

class LoginPage(View):
    def get(self,request):
        return render(request,'login_page_template.html')
    def post(self,request):
        pass
