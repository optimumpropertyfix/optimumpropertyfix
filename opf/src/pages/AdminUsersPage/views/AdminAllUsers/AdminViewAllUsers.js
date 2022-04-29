import styles from "./AdminViewAllUsers.module.css";
import UserItem from "../../../../components/UserItem/UserItem";
import { useEffect, useState } from "react";
import TokenManager from "../../../../TokenManager";
import { view_all_opf_users_route } from "../../../../Routes"
export function AdminViewAllUsers() {

    const [users, set_users] = useState([])
    const {get_token} = TokenManager()


    useEffect(() => {
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${get_token()}`,
        },
      };
      const route = view_all_opf_users_route();
  
      fetch(route, options)
        .then((response) => {
          if (!response.ok) {
            throw Error(`${response.statusText} - ${response.status}`);
          }
          return response.json();
        })
        .then((users) => {
          set_users(users)
        })
        .catch((error) => {
          console.log(error);
        });
    }, [])

    return (
        <div className={styles.AdminViewAllUsers}>
          <div className={`${styles.view_container} view_layout`}>
            <p className={`${styles.page_title_text} page_title_text`}>
                Viewing All OPF Users
            </p>
            <div className={`${styles.content_container} view_content_layout`}>
              <div className={styles.accounts_list}>

                {users.map((user) => {
                  return <UserItem key={user.user_id} {...user} />
                })}
              </div>
            </div>
          </div>
        </div>
      );
}