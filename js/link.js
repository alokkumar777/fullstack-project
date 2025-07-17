// Navbar
fetch("./navbar.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
  });

//   Product
fetch("./product.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("product").innerHTML = data;
  });
fetch("./hero.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("hero").innerHTML = data;
  });
