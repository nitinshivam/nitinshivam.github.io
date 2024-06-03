function changeImage(imageSrc, element) {
    const img = document.getElementById('project-image');
    img.src = imageSrc;

    const columns = document.querySelectorAll('.column');
    columns.forEach(column => column.classList.remove('active'));

    element.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.column').classList.add('active');
});

function openForm() {
    document.getElementById("formPopup").classList.add('is-visible');
}

  function closeForm() {
    document.getElementById("formPopup").classList.remove('is-visible');
}

var swiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

