const form = document.querySelector(".signin");

form.addEventListener("submit", (e) => {
  console.log("Hello");
  e.preventDefault();

  const url = `http://localhost:3000/api/users/login`;
  const formData = new FormData(form);

  const username = formData.get("username");
  const password = formData.get("password");

  const data = {
    username,
    password,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  };
  fetch(url, options);
});
