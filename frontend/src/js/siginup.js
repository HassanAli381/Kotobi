const form = document.querySelector(".register");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const url = `http://localhost:3000/api/users/register`;

  const formData = new FormData(form);

  const name = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const passwordConfirm = formData.get("password-confirm");

  const data = {
    name,
    email,
    password,
    passwordConfirm,
  };

  console.log(JSON.stringify(data));

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((json) => console.log(json));
});
