$(document).ready(function () {
  $(".toggle-btn").on("click", function () {
    $("nav ul").toggleClass("nav-active");
  });
});