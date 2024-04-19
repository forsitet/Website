# Generated by Django 5.0.4 on 2024-04-08 21:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('surname', models.CharField(max_length=80, verbose_name='Фамилия')),
                ('name', models.CharField(max_length=80, verbose_name='Имя')),
                ('patronymic', models.CharField(blank=True, max_length=80, verbose_name='Отчество')),
            ],
            options={
                'verbose_name': 'Автор',
                'verbose_name_plural': 'Авторы',
                'ordering': ['surname'],
            },
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150, verbose_name='Название')),
                ('slug', models.SlugField(max_length=150, unique_for_date='created')),
                ('image', models.ImageField(blank=True, null=True, upload_to='books_images', verbose_name='Изображение')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('author', models.ManyToManyField(related_name='books', to='book.author', verbose_name='Автор')),
            ],
            options={
                'verbose_name': 'Книга',
                'verbose_name_plural': 'Книги',
                'ordering': ['title'],
                'indexes': [models.Index(fields=['title'], name='book_book_title_b5b75a_idx')],
            },
        ),
    ]