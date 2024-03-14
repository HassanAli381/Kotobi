const form = document.querySelector(".signin");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const url = `http://localhost:3000/api/users/login`;
  // const formData = new FormData(form);

  // const username = formData.get("username");
  // const password = formData.get("password");

  // const data = {
  //   username,
  //   password,
  // };

  // console.log(JSON.stringify(data));

  console.log(JSON.stringify({ email: "user@gmail.com", password: "123" }));

  const options = {
    method: "POST",
    body: JSON.stringify({ email: "user2@gmail.com", password: "123" }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((json) => console.log(json));
});
