# Task Management Web Application

The Task Management Web Application is a simple web application built with Django for the backend API and React with React Context API for the frontend. It allows users to manage tasks by creating new tasks, updating task details, marking tasks as completed, and deleting tasks.

## Installation

To install and run the Task Management API, follow these steps:

1. Clone the repository: `git clone https://github.com/webblyss/assigment`
2. Navigate to the API directory:
3.  `cd assignment`
4.  `cd backend`
5. Create a virtual environment (optional but recommended):
   - On macOS and Linux:
     ```
     python3 -m venv env
     source env/bin/activate
     ```
   - On Windows:
     ```
     python -m venv env
     .\env\Scripts\activate
     ```
6. Install the required dependencies: `pip install -r requirements.txt`
7. Apply database migrations: `python manage.py migrate`
8. Start the development server: `python manage.py runserver`

The API server will be running at `http://localhost:8000`.

## Endpoints

The backend API provides the following endpoints for task management:

- **GET `/api/tasks/`**: Retrieve a list of all tasks.
- **POST `/api/tasks/`**: Create a new task.
- **GET `/api/tasks/<task_id>/`**: Retrieve a specific task..
- **PUT `/api/tasks/<task_id>/`**: Update a specific task.
- **DELETE `/api/tasks/<task_id>/`**: Delete a specific task.
- **PUT `/api/tasks/<task_id>/complete/`**: Mark a specific task as completed..





Replace `<task_id>` in the URL with the actual ID of the task you want to interact with.

## Frontend

The frontend of the Task Management Web Application is built with React + vite and utilizes the React Context API for state management.

To set up and run the frontend application, follow these steps:

1. Navigate to the frontend directory: `cd frontend`
2. Install the required dependencies: `npm install`
3. Start the development server: `npm run dev`

The frontend application will be running at `http://localhost:3000`, and you can access it in your web browser.

The React application is set up with a simple UI that interacts with the backend API using the provided endpoints. You can create new tasks, update their details, mark them as completed, and delete tasks through the user interface.

Ensure that the backend API is running and accessible at `http://localhost:8000/api/tasks/` or update the API endpoint URLs in the frontend code to match the backend API's location.


# THE IS HOW THE APP LOOK LIKE

![Screenshot from 2023-06-21 12-24-58](https://github.com/webblyss/assigment/assets/60282806/c1378614-eed1-483d-8253-571ca2a9db7c)

![Screenshot from 2023-06-21 14-10-30](https://github.com/webblyss/assigment/assets/60282806/808e4a89-6855-4afc-909f-6bda1004d678)



# GIF VIDEO

![Screencast-from-2023-06-21-01573](https://github.com/webblyss/assigment/assets/60282806/ddc93085-1454-452e-af4e-9024a7e15f6d)



