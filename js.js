window.addEventListener('DOMContentLoaded', function() {
    var nextPageLink = document.querySelector('.next-page-link');
    nextPageLink.addEventListener('click', function(e) {
      e.preventDefault();
      var currentPage = document.querySelector('.page');
      currentPage.classList.add('next-page');
      setTimeout(function() {
        window.location.href = nextPageLink.href;
      }, 1000); // Espera 1 segundo antes de redireccionar a la siguiente página
    });
  });
  