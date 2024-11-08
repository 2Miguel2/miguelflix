document.addEventListener("DOMContentLoaded", function() {
    const videoLinks = document.querySelectorAll(".categoria-videos a");
    const iframe = document.getElementById("video-frame");
    const titleElement = document.getElementById("video-title");
    const descriptionElement = document.getElementById("video-description");

    videoLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            // Obtém o ID do vídeo, título e descrição do link clicado
            const videoId = link.getAttribute("data-video-id");
            const videoTitle = link.getAttribute("data-title");
            const videoDescription = link.getAttribute("data-description");

            // Atualiza o iframe com o novo vídeo
            iframe.src = `https://www.youtube.com/embed/${videoId}`;

            // Atualiza o título e a descrição
            titleElement.textContent = videoTitle;
            descriptionElement.textContent = videoDescription;
        });
    });
});
