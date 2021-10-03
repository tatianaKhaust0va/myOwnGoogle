let inputSearch = document.querySelectorAll('#search');
let btnSearch = document.querySelector('#lucky');

btnSearch.addEventListener('onclick', function () {

  if (inputSearch.value === " ") {
    window.location.href = "https://www.google.com/doodles";
  }
});