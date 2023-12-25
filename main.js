function toggleMenu() {
    var content = document.querySelector(".list_main");
    var icon = document.querySelector(".dart i");

    if (content.style.display === 'none') {
        content.style.display = 'block';
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        content.style.display = 'none';
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
}