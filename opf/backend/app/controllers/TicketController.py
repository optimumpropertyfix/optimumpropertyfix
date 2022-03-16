from mysql.connector import MySQLConnection, Error
from app.DatabaseConfiguration import database_configuration
'''
def admin_get_all_tickets():
    try:
        db_config = read_db_config()
        connection = MySQLConnection(**db_config)
        cursor = connection.cursor()

        cursor.callproc('admin_get_all_tickets')

        # print out the result
        for result in cursor.stored_results():
            print(result.fetchall())

    except Error as error:
        print(error)

    finally:
        cursor.close()
        connection.close()

if __name__ == '__main__':
    admin_get_all_tickets()
'''
class TicketController:

    def __init__(self):

        print("DEBUG: UnitController Loaded.")
        print(database_configuration)