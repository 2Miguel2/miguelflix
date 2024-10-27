document.querySelectorAll('.categoria-videos a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Impede o redirecionamento padrão

        const videoId = this.getAttribute('data-video-id');
        const iframe = document.querySelector('iframe');

        // Atualiza o src do iframe com o novo vídeo
        iframe.src = `https://www.youtube.com/embed/${videoId}?si=4NwqMB3tusXL_QD8`;

        // Atualiza a imagem clicada para a que estava no iframe
        const oldSrc = iframe.src.split('/embed/')[1].split('?')[0];
        this.querySelector('img').src = `https://img.youtube.com/vi/${oldSrc}/maxresdefault.jpg`;
    });
});
