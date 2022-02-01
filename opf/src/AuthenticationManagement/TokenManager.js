let TokenManager = {
  get_token() {
    return localStorage.getItem("token");
  },
  generate_token(credential) {
    fetch("/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credential),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.statusText} - ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.token);
        localStorage.setItem("token", data.token);
        console.log(localStorage.getItem("token"));
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
    localStorage.setItem("token", null);
  },
};

export default TokenManager;
