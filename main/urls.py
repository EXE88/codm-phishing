from django.urls import path
from . import views

urlpatterns = [
    path('',views.MainPage.as_view(),name='main_page'),
    path('codm/loginMobileGame/',views.LoginPage.as_view(),name='login_page'),
    path('complete/',views.CompletePage.as_view(),name='complete_page'),
]
