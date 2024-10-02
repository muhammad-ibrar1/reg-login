# Laravel & Vue.js Web Application


## Project Overview
This is a basic web application that uses Laravel for the backend and Vue.js for the frontend. It includes user authentication (login and registration) with real-time form validation and error handling.

## Features
- User authentication (Login & Registration)
- Real-time validation with Vue.js
- Error handling with Vue.js and Axios


## Setup Instructions

1. Clone the project
2. composer install
3. npm install
4. cp .env.example .env
5. php artisan migrate
6. npm run dev
7. php artisan serve


## Code Structure and Decisions

1. Laravel is used for the backend to handle user registration, login, and validation.
2. Vue.js is used for client-side form validation and dynamic error display.
3. Axios is used for making HTTP requests to the Laravel backend.(for the time being i am going with common routes did not use api routes.)
