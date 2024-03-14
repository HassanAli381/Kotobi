const form = document.querySelector(".signin");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const url = `http://localhost:3000/api/users/login`;

  const formData = new FormData(form);

  const email = formData.get("email");
  const password = formData.get("password");

  const data = {
    email,
    password,
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
