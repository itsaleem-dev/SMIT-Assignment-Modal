const overlay = document.getElementById("overlay");
const openModal = () => overlay.style.display = "flex";
const closeModal = () => overlay.style.display = "none";
const outside = e => e.target === overlay && closeModal();