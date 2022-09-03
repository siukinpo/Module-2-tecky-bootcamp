document
  .querySelector("#signup")
  .addEventListener("submit", async function (event) {
    console.log("hi");
    event.preventDefault();

    const form = event.target;
    const formObject = {};
    formObject["username"] = form.username.value;
    formObject["password"] = form.password.value;
    formObject["re_password"] = form.re_password.value;

    formObject["email"] = form.email.value;

    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject),
    });
    const result = await res.json();

    // document.querySelector("#signup").innerHTML = result;
    alert(result.success);

    form.reset();
  });
