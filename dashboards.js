"use script";

const sideMenu = document.querySelector("aside");
const showMenu = document.querySelector(".open-btn");
const closeMenu = document.querySelector(".close-btn");

showMenu.addEventListener("click", function () {
  sideMenu.style.display = "block";
});
closeMenu.addEventListener("click", function () {
  sideMenu.style.display = "none";
});

const themeToggler = document.querySelector(".theme-toggler");

themeToggler.addEventListener("click", function () {
  console.log("CLICKED");

  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `<td>${order.productName}</td>
  <td>${order.productNumber}</td>
  <td>${order.paymentStatus}</td>
  <td class="${
    order.shipping === "Declined"
      ? "danger"
      : order.shipping === "Pending"
      ? "warning"
      : "success"
  }">${order.shipping}</td>
  <td class="primary">Details</td>`;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
