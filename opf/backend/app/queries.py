from sqlalchemy import create_engine,text

engine = create_engine('sqlite:///database.db')

with engine.connect() as connection:
    result = connection.execute(text("SELECT question, answer FROM faq;"))
    for row in result:
        print("question:", row['question'], "answer:", row['answer'])
    result.close()


