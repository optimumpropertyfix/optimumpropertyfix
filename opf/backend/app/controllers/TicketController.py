from multiprocessing import connection
from mysql.connector import MySQLConnection, Error
from python_mysql_dbconfig import read_db_config


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