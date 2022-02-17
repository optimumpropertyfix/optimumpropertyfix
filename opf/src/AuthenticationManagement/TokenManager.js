let TokenManager = {
  get_token() {
    return localStorage.getItem("token");
  },
  generate_token(credentials) {
    fetch("/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.statusText} - ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  revoke_token() {
    fetch("/revoke", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.removeItem("token");
  },
};

export default TokenManager;
