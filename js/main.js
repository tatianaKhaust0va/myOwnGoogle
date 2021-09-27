let form = document.querySelectorAll("form");

form.addEventListener("submit", function (e) {
 e.preventDefault();
 let search = form.querySelectorAll('#search');
 search.value = "search:css-search.com " + search.value;
 form.submit();
});
