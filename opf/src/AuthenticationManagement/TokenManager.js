let TokenManager = {
  get_token() {
    return "test";
  },
  generate_token(credential) {
    console.log(JSON.stringify(credential));
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
        console.log(data);
        return data.token;
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
  },
};

export default TokenManager;
