# Generated by Django 4.1.4 on 2022-12-22 19:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fscohort', '0003_alter_student_options_student_about_student_avatar_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='avatar',
            field=models.ImageField(blank=True, null=True, upload_to='student'),
        ),
    ]
