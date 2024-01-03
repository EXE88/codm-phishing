from django.shortcuts import render , redirect
from django.views import View

class MainPage(View):
    def get(self,request):
        return render(request,'main/main_page_template.html')
    
class LoginPage(View):
    def get(self,request):
        return render(request,'main/login_page_template.html')
    
    def post(self,request):
        print(request.POST)
        return redirect('complete_page')
    
class CompletePage(View):
    def get(self,request):
        return render(request,'main/complete_page_template.html')