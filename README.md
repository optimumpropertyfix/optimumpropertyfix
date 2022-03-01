
#Installing OPF:
Installing Stipes requires the following software to be installed on the host system:

- Python 3
- Package Installer for Python (pip)
- Node Package Manager (npm)

1. Clone the repository with `git clone https://github.com/optimumpropertyfix/optimumpropertyfix.git` 
2. Change directory to be within the Stipes folder with `$cd opf`
3. Within the root directory install the required node packages with `$npm install`
4. Change directory to be within the backend folder with `$cd backend`
5. Make a new python environment with `$python3 -m venv env`
6. Activate the virtual environment with `$. env/bin/activate`
7. Within the virtual environment, install python-dotenv with `$pip install python-dotenv`
8. Within the virtual environment, install Flask with `$pip install Flask`
9. Within the virtual environment, install Flask-SQLAlchemy with `$pip install Flask-SQLAlchemy`
10. Within the virtual environment, install Flask-SQLAlchemy with `$pip install flask-jwt-extended`
11. Within the virtual environment, Launch a python shell with `$python3`
12. Within the python shell, import the database object with `$from app import database`
13. Within the python shell, create the database with `$database.create_all()`

#Starting OPF: 
1. Open a new terminal window within the root OPF directory.
2. Change directory to the api folder with `cd backend`
3. Enter into the virtual environment with `. env/bin/activate`
4. Start the flask application with `flask run`

