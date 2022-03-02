
#Installing OPF:
Installing Stipes requires the following software to be installed on the host system:

- Python 3
- Package Installer for Python (pip)
- Node Package Manager (npm)

1. Clone the repository with `git clone https://github.com/optimumpropertyfix/optimumpropertyfix.git` 
2. Change directory to be within the Stipes folder with `$cd opf`
3. Within the root directory install the required node packages with `$npm install`
4. Within the root directory install the required library for charts with `$npm install --save react-apexcharts apexcharts`
5. Change directory to be within the backend folder with `$cd backend`
6. Make a new python environment with `$python3 -m venv env`
7. Activate the virtual environment with `$. env/bin/activate`
8. Within the virtual environment, install python-dotenv with `$pip install python-dotenv`
9. Within the virtual environment, install Flask with `$pip install Flask`
10. Within the virtual environment, install Flask-SQLAlchemy with `$pip install Flask-SQLAlchemy`
11. Within the virtual environment, install Flask-SQLAlchemy with `$pip install flask-jwt-extended`
12. Within the virtual environment, Launch a python shell with `$python3`
13. Within the python shell, import the database object with `$from app import database`
14. Within the python shell, create the database with `$database.create_all()`

#Starting OPF: 
1. Open a new terminal window within the root OPF directory.
2. Change directory to the api folder with `cd backend`
3. Enter into the virtual environment with `. env/bin/activate`
4. Start the flask application with `flask run`

