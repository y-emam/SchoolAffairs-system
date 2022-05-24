from django.shortcuts import render, redirect
from . import views
from .models import Student_Data
from django.http import HttpResponse, JsonResponse
# Create your views here.


def home(request):
    return render(request, 'home.html')


def add(request):
    return render(request, 'add.html')


def index(request):
    return render(request, 'index.html')


def login(request):
    return render(request, 'login.html')


def edit(request):
    return render(request, 'edit.html')


def view(request):
    return render(request, 'view page.html')


def search(request):
    return render(request, 'search_active.html')


def search_edit(request):
    return render(request, 'search_edit.html')


def department(request):
    if request.method == 'GET':
        return render(request, 'department_registeration.html', {'res': ''})
    elif request.method == 'POST':
        name = request.POST.get('name')
        id = request.POST.get('id')
        department = request.POST.get('department')

        student = Student_Data.objects.get(SI=id)

        level = int(student.level)

        # check for level and return response
        if level == 3:
            student.department = department
            student.save()

            return render(request, 'department_registeration.html', {'res': 'done'})
        else:
            print("You must be at level 3 to register")

            return render(request, 'department_registeration.html', {'res': 'error'})


def create(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        si = request.POST.get('ID')
        gpa = request.POST.get('GPA')
        gender = request.POST.get('gender')
        level = request.POST.get('level')
        status = request.POST.get('status')
        email = request.POST.get('email')
        mobile = request.POST.get('mobile')
        dateOfBirth = request.POST.get('date of brith')
        Department = request.POST.get('department')

        newStudent = Student_Data(name=name, gender=gender, level=level, SI=si, GPA=gpa, status=status,
                                  Email=email, mobile=mobile, DateOfBirth=dateOfBirth, department=Department)

        newStudent.save()
        return redirect('add')
