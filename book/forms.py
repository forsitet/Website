from django import forms
class UserForm(forms.Form):
    first_name= forms.CharField(max_length=100)
    email= forms.EmailField()
    comments = forms.CharField(max_length=500)


class SearchForm(forms.Form):
    query = forms.CharField()
