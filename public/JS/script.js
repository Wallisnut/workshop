function submitLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("select-btn").value;
  const usernameError1 = document.getElementById("message1");
  const usernameError3 = document.getElementById("message3");
  const form = document.getElementById("loginForm");

  if (username.length < 10) {
    usernameError1.innerText =
      "You need to enter 10 characters for the username.";
    usernameError1.style.color = "red";
    return;
  } else {
    usernameError1.innerText = "";
  }
  if (role == "--select your role--") {
    usernameError3.innerText = "Please select role";
    return;
  } else {
    usernameError3.innerText = "";
  }

  const loginData = {
    UserName: username,
    PassWord: password,
  };

  fetch("https://restapi.tu.ac.th/api/v1/auth/Ad/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Application-Key":
        "TUe33b2c50821a92ab2a6558ae461bdc819b22ba4d33b408d5eefe9e9bbf0cdb5ffb8185a7dd452f3afdc195b79bf45cba",
    },
    body: JSON.stringify(loginData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Incorrect Credentials");
      }
      return response.json();
    })
    .then((data) => {
      console.log("API response:", data);
      if (data.status === true && data.message === "Success") {
        const userData = {
          username: data.username,
          type: role,
          displayname_en: data.displayname_en,
          email: data.email,
          faculty: data.faculty,
        };
        fetch("http://localhost:8080/api/main/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }).then(() => {
          const resultElement = document.getElementById("b");
          const resultText = `Username: ${data.displayname_th}
    Student ID: ${data.username}
    Department: ${data.department}
    Faculty: ${data.faculty}`;
          resultElement.innerText = resultText;
          resultElement.style.fontSize = "25px";
          resultElement.style.marginTop = "-10px";

          const deletee = document.getElementById("a");
          deletee.style.marginTop = "-100px";
          deletee.innerHTML = `Hello Welcome back!`;
          document.getElementById("c").innerHTML = "";
          document.getElementById("d").innerHTML = "";
        });
        form.reset();
      } else {
        alert("Error: ไม่สามารถ login ได้สำเร็จ");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error: ไม่สามารถ login ได้สำเร็จ");
      form.reset();
    });
}
document
  .getElementById("toggle-password")
  .addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const button = this;

    if (passwordField.type === "password") {
      passwordField.type = "text";
      button.innerText = "Hide";
    } else {
      passwordField.type = "password";
      button.innerText = "Show";
    }
  });
