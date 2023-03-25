function checkLogin() {
  if (localStorage.getItem("datas")) {
    document.getElementById(
      "avatar"
    ).innerHTML = `<div class='admin'>Admin</div> <img src="../images/avatar.png" />`;
  } else {
    document.getElementById("avatar").innerHTML = "";
  }
}

function checkLogout() {
  localStorage.removeItem("datas");
  window.location.href = "http://127.0.0.1:5500/html/login.html";
}

function addNew() {
  let inputText = document.getElementById("inputText");
  inputText.style.visibility = "visible";
  inputText.innerHTML =
    "<input id='inputName' type='text' placeholder = 'Nhap ten san pham'/> <input id='inputPrice' type='number' placeholder = 'Nhap gia san pham'/> <input id='inputInfo' type='text' placeholder = 'Nhap thong tin san pham'/> <input id='inputCategory' type='text' placeholder = 'Nhap loai san pham'/> <button id='addProduct'>Add new</button>";

  document.getElementById("addProduct").addEventListener("click", function () {
    let inputName = $("#inputName").val();
    let inputInfo = $("#inputInfo").val();
    let inputPrice = $("#inputPrice").val();
    let inputCategory = $("#inputCategory").val();
    if (inputName && inputInfo && inputPrice && inputCategory) {
      let newData = {
        name: inputName,
        price: inputPrice,
        info: inputInfo,
        category: inputCategory,
      };
      $.ajax({
        url: "https://641c4f32b556e431a86b27fb.mockapi.io/product",
        method: "POST",
        data: newData,
        success: function (res) {
          // console.log(res)
          renderTable();
        },
      });
      clearInput();
      inputText.style.visibility = "hidden";
    } else {
      alert("Vui lòng nhập đủ thông tin");
    }
  });
}

function renderTable() {
  $("#tableItems").empty();
  $.get(
    "https://641c4f32b556e431a86b27fb.mockapi.io/product",
    function (table, status) {
      for (let i = 0; i < table.length; i++) {
        var data = table[i];
        $("#tableItems").append(`<tr>
         <td>${data.id}</td>
         <td>${data.name}</td>
         <td>${data.price}</td>
         <td>${data.info}</td>
         <td>${data.category}</td>
         <td><button onclick='editProduct(${data.id})' class='button4'>Edit</button></td>
         <td><button onclick='deleteProduct(${data.id})' class='button5'>Delete</button></td>
         </tr>`);
      }
    }
  );
}

function clearInput() {
  document.getElementById("inputName").value = "";
  document.getElementById("inputInfo").value = "";
  document.getElementById("inputPrice").value = "";
  document.getElementById("inputCategory").value = "";
}

function editProduct(id) {
  document.getElementById("inputText").style.visibility = "visible";
  document.getElementById("inputText").innerHTML =
    "<input id='inputName' type='text' placeholder = 'Nhap ten san pham'/> <input id='inputPrice' type='number' placeholder = 'Nhap gia san pham'/> <input id='inputInfo' type='text' placeholder = 'Nhap thong tin san pham'/> <input id='inputCategory' type='text' placeholder = 'Nhap loai san pham'/> <button id='updateProduct'>Update</button>";
  $.ajax({
    url: `https://641c4f32b556e431a86b27fb.mockapi.io/product/${id}`,
    type: "GET",
    success: function (data) {
      console.log(data);
      document.getElementById("inputName").value = data.name;
      document.getElementById("inputPrice").value = data.price;
      document.getElementById("inputInfo").value = data.info;
      document.getElementById("inputCategory").value = data.category;
    },
  });
  document
    .getElementById("updateProduct")
    .addEventListener("click", function () {
      $.ajax({
        url: `https://641c4f32b556e431a86b27fb.mockapi.io/product/${id}`,
        type: "PUT",
        data: {
          name: document.getElementById("inputName").value,
          price: document.getElementById("inputPrice").value,
          info: document.getElementById("inputInfo").value,
          category: document.getElementById("inputCategory").value,
        },
        success: function (res) {
          // console.log(res)
          renderTable();
        },
      });
      clearInput();
      document.getElementById("inputText").style.visibility = "hidden";
    });
}

function deleteProduct(id) {
  $.ajax({
    url: `https://641c4f32b556e431a86b27fb.mockapi.io/product/${id}`,
    method: "DELETE",
    success: function (res) {
      renderTable();
    },
  });
}

function searchProduct() {
  $.ajax({
    url: "https://641c4f32b556e431a86b27fb.mockapi.io/product",
    type: "GET",
    success: function (dataSearch) {
      let inputSearch = document
        .getElementById("inputSearch")
        .value.toLowerCase();
      let searchResult = dataSearch.filter((data) =>
        data.name.toLowerCase().includes(inputSearch)
      );
      $("#tableItems").empty();
      for (let i = 0; i < searchResult.length; i++) {
        var data = searchResult[i];
        $("#tableItems").append(`<tr>
         <td>${data.id}</td>
         <td>${data.name}</td>
         <td>${data.price}</td>
         <td>${data.info}</td>
         <td>${data.category}</td>
         <td><button onclick='editProduct(${data.id})' class='button4'>Edit</button></td>
         <td><button onclick='deleteProduct(${data.id})' class='button5'>Delete</button></td>
         </tr>`);
      }
      console.log(searchResult);
    },
  });
}
