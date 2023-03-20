var table = [];
var fileInput;
function chooseFile(fileInput) {
  // if(fileInput.file && fileInput.file[0]){
  //   var reader = new FileReader();
  //   reader.onload = function(e){
  //     $("#inputImage").attr('src', e.target.result)
  //   }
  //   reader.readAsDataURL(fileInput.files[0])
  // }
  var reader = new FileReader();
  reader.onload = function (e) {
    $("#inputImage").attr("src", e.target.result);
  };
  reader.readAsDataURL(fileInput);
  console.log("aaa");
}
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
  document.getElementById("inputText").innerHTML =
    "<input id='inputID' type='number' placeholder = 'Nhap ID'/> <input id='inputName' type='text' placeholder = 'Nhap ten san pham'/> <input id='inputPrice' type='number' placeholder = 'Nhap gia san pham'/> <input id='inputInfo' type='text' placeholder = 'Nhap thong tin san pham'/> <input id='inputCategory' type='text' placeholder = 'Nhap loai san pham'/> <input id='inputImage' type='file' accept='image/png' onchange='chooseFile(this)'/> <button id='addProduct'>Add new</button>";

  document.getElementById("addProduct").addEventListener("click", function () {
    let inputID = $("#inputID").val();
    let inputName = $("#inputName").val();
    let inputInfo = $("#inputInfo").val();
    let inputPrice = $("#inputPrice").val();
    // chooseFile(fileInput)
    // let inputImage = $("#inputImage").val();
    let inputCategory = $("#inputCategory").val();
    let newData = {
      id: inputID,
      name: inputName,
      price: inputPrice,
      info: inputInfo,
      image: inputImage,
      category: inputCategory,
    };
    table.push(newData);
    // console.log(table);
    localStorage.setItem("table", JSON.stringify(table));
    renderTable();
    clearInput();
  });
}
function renderTable() {
  let tableData = `<table id="table">
  <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Price</th>
      <th>Info</th>
      <th>Image</th>
      <th>Category</th>
      <th>Edit</th>
      <th>Delete</th>
  </tr>
  </table>`;
  table.forEach((data, index) => {
    tableData += `<tr> 
      <td>${data.id}</td> 
      <td>${data.name}</td>
      <td>${data.price}</td>
      <td>${data.info}</td>
      <td>${(data.image = `<img src = '' width = '50px' height = '50px' />`)}</td>
      <td>${data.category}</td>
      <td>${(data.edit = `<button onclick='editProduct(${index})' class='button4'>Edit</button>`)}</td>
      <td>${(data.delete = `<button onclick='deleteProduct(${index})' class='button5'>Delete</button>`)}</td>
      </tr>`;
  });
  document.getElementById("table").innerHTML = tableData;
}
function clearInput() {
  document.getElementById("inputID").value = "";
  document.getElementById("inputName").value = "";
  document.getElementById("inputInfo").value = "";
  document.getElementById("inputPrice").value = "";
  document.getElementById("inputImage").value = "";
  document.getElementById("inputCategory").value = "";
}
function editProduct(index) {
  document.getElementById("inputText").innerHTML =
    "<input id='inputID' type='number' placeholder = 'Nhap ID'/> <input id='inputName' type='text' placeholder = 'Nhap ten san pham'/> <input id='inputPrice' type='number' placeholder = 'Nhap gia san pham'/> <input id='inputInfo' type='text' placeholder = 'Nhap thong tin san pham'/> <input id='inputCategory' type='text' placeholder = 'Nhap loai san pham'/> <input id='inputImage' type='file' accept='image/png' onchange='chooseFile(this)'/> <button id='updateProduct'>Update</button>";
  document.getElementById("inputID").value = table[index].id;
  document.getElementById("inputName").value = table[index].name;
  document.getElementById("inputPrice").value = table[index].price;
  document.getElementById("inputInfo").value = table[index].info;
  // chooseFile(fileInput)
  document.getElementById("inputImage").value = table[index].image;
  document.getElementById("inputCategory").value = table[index].category;
  document
    .getElementById("updateProduct")
    .addEventListener("click", function () {
      table[index] = {
        id: document.getElementById("inputID").value,
        name: document.getElementById("inputName").value,
        price: document.getElementById("inputPrice").value,
        info: document.getElementById("inputInfo").value,
        // image: document.getElementById("inputImage").value,
        category: document.getElementById("inputCategory").value,
      };
      localStorage.setItem("table", JSON.stringify(table));
      renderTable();
      clearInput();
    });
}
function deleteProduct(index) {
  table.splice(index, 1);
  if (confirm("Bạn muốn xóa không")) {
    localStorage.setItem("table", JSON.stringify(table));
  }
  renderTable();
}
function searchProduct(event) {
  let dataSearch = JSON.parse(localStorage.getItem("table"));
  let inputSearch = document.getElementById("input").value.toLowerCase();
  let searchResult = dataSearch.filter((data) =>
    data.name.toLowerCase().includes(inputSearch)
  );

  let tableData = `<table id="table">
  <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Price</th>
      <th>Info</th>
      <th>Image</th>
      <th>Category</th>

  </tr>
  </table>`;
  searchResult.forEach((data, index) => {
    tableData += `<tr> 
      <td>${data.id}</td> 
      <td>${data.name}</td>
      <td>${data.price}</td>
      <td>${data.info}</td>
      <td>${data.image}</td>
      <td>${data.category}</td>
      </tr>`;
  });
  document.getElementById("table").innerHTML = tableData;
  event.preventDefault();
}
