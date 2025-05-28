MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # <-- ADD THIS LINE
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    # ... other middleware ...
]
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'docintelligence_db',
        'USER': 'your_mysql_user',         # <-- replace with your MySQL username
        'PASSWORD': 'your_mysql_password', # <-- replace with your MySQL password
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
CORS_ALLOW_ALL_ORIGINS = True