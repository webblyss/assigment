# Task Management Web Application

The Task Management Web Application is a simple web application built with Django for the backend API and React with React Context API for the frontend. It allows users to manage tasks by creating new tasks, updating task details, marking tasks as completed, and deleting tasks.

## Installation

To install and run the Task Management API, follow these steps:

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the API directory: `cd api`
3. Create a virtual environment (optional but recommended):
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
4. Install the required dependencies: `pip install -r requirements.txt`
5. Apply database migrations: `python manage.py migrate`
6. Start the development server: `python manage.py runserver`

The API server will be running at `http://localhost:8000`.

## Endpoints

The backend API provides the following endpoints for task management:

- **GET `/api/tasks/`**: Retrieve a list of all tasks.
- **POST `/api/tasks/`**: Create a new task.
- **GET `/api/tasks/<task_id>/`**: Retrieve a specific task.
- **PUT `/api/tasks/<task_id>/`**: Update a specific task.
- **DELETE `/api/tasks/<task_id>/`**: Delete a specific task.
- **PUT `/api/tasks/<task_id>/complete/`**: Mark a specific task as completed.





Replace `<task_id>` in the URL with the actual ID of the task you want to interact with.

## Frontend

The frontend of the Task Management Web Application is built with React and utilizes the React Context API for state management.

To set up and run the frontend application, follow these steps:

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the frontend directory: `cd frontend`
3. Install the required dependencies: `npm install`
4. Start the development server: `npm start`

The frontend application will be running at `http://localhost:3000`, and you can access it in your web browser.

The React application is set up with a simple UI that interacts with the backend API using the provided endpoints. You can create new tasks, update their details, mark them as completed, and delete tasks through the user interface.

Ensure that the backend API is running and accessible at `http://localhost:8000/api/tasks/` or update the API endpoint URLs in the frontend code to match the backend API's location.

Feel free to explore and customize the frontend application as needed to suit your requirements.

## Conclusion

The Task Management Web Application provides a simple and intuitive interface for managing tasks using the Django backend API and React frontend with React Context API. You can create, update, and delete tasks seamlessly through the user interface.

Feel free to extend and enhance the application as per your needs, and if you have any questions or issues, please don't hesitate to reach out.

Enjoy task management with the Task Management Web Application!
