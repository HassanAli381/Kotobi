const form = document.querySelector(".register");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const url = `http://localhost:3000/api/users/register`;

  // const formData = new FormData(form);

  // const username = formData.get("username");
  // const password = formData.get("password");

  // const data = {
  //   username,
  //   password,
  // };

  // console.log(JSON.stringify(data));

  console.log(
    JSON.stringify({
      name: "Abdalla",
      email: "abdalla@gmail.com",
      password: "abdalla",
    })
  );

  const options = {
    method: "POST",
    body: JSON.stringify({
      name: "Abdalla",
      email: "abdalla@gmail.com",
      password: "abdalla",
      passwordConfirm: "abdalla",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((json) => console.log(json));
});
