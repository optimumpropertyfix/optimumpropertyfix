print("SERIALIZER ACCESSED - User")
def user_serializer(user):
    return {

      "id": user.id,
      "first_name": user.first_name,

    }