function login() {
  let inputAccount = document.getElementById("account").value;
  let inputPassword = document.getElementById("password").value;
  if (inputAccount && inputPassword) {
    let datas = {
      inputAccount,
      inputPassword,
    };
    localStorage.setItem("datas", JSON.stringify(datas));
    window.open("http://127.0.0.1:5500/html/admin.html", "_blank");
  } else {
    alert("Vui nhap du thong tin");
  }

  document.getElementById("account").value = "";
  document.getElementById("password").value = "";
}
