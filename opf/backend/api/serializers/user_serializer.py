print("SERIALIZER ACCESSED - User")
def user_serializer(user):
    return {
      "id": user.id,
      "first_name": user.first_name,
      "last_name": user.last_name,
      "isStudent": user.isStudent,
      "isAdmin": user.isAdmin,
      "email": user.email,
      "net_id": user.net_id,
      "nshe_id": user.nshe_id,
      "gender": user.gender,
      "year": user.year,
      "password": user.password,
    }