document.addEventListener("DOMContentLoaded", () => {
    const botao = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu-lateral");

    if (botao && menu) {
        botao.addEventListener("click", () => {
            menu.classList.toggle("ativo");
            botao.textContent = menu.classList.contains("ativo") ? "✖" : "☰";
        });
    }

    /* ANIMAÇÃO DA SEÇÃO DO CARRO */
    const car = document.querySelector(".car-image");
    const text = document.querySelector(".text-container");

    if (car && text) {
        const carObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    car.classList.add("show");
                    text.classList.add("show");
                } else {
                    car.classList.remove("show");
                    text.classList.remove("show");
                }
            });
        }, { threshold: 0.3 });

        carObserver.observe(car);
    }

    /* ANIMAÇÃO DOS CARDS DA MEDIA SECTION POR GRUPO */
    const mediaSection = document.querySelector(".media-section");
    const grupo1 = document.querySelectorAll(".grupo-1");
    const grupo2 = document.querySelectorAll(".grupo-2");

    if (mediaSection) {
        const cardsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    grupo1.forEach(card => card.classList.add("show"));

                    setTimeout(() => {
                        grupo2.forEach(card => card.classList.add("show"));
                    }, 350);
                } else {
                    grupo1.forEach(card => card.classList.remove("show"));
                    grupo2.forEach(card => card.classList.remove("show"));
                }
            });
        }, { threshold: 0.25 });

        cardsObserver.observe(mediaSection);
    }

    /* VÍDEO NO HOVER DOS CARDS */
    const mediaCards = document.querySelectorAll(".media-card");

    mediaCards.forEach(card => {
        const video = card.querySelector(".card-video");

        if (video) {
            card.addEventListener("mouseenter", () => {
                video.currentTime = 0;
                video.play().catch(() => {});
            });

            card.addEventListener("mouseleave", () => {
                video.pause();
                video.currentTime = 0;
            });
        }
    });

    /* OBSERVER GERAL PARA OUTROS ELEMENTOS */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.1 });

    /* CARDS DE ESPECIFICAÇÕES */
    const specCards = document.querySelectorAll(".spec-card");
    specCards.forEach((card) => observer.observe(card));

    /* IMAGEM DE DESIGN */
    const designImage = document.querySelector(".design-image");
    if (designImage) {
        observer.observe(designImage);
    }

    /* IMAGENS DA GALERIA */
    const galleryImages = document.querySelectorAll(".gallery-image");
    galleryImages.forEach((image) => observer.observe(image));
});

/* GSAP / SCROLLTRIGGER */
gsap.registerPlugin(ScrollTrigger);

/* Animação da Imagem do Motor (Zoom e Fade) */
gsap.from(".motor-img-box img", {
    scrollTrigger: { 
        trigger: ".motor-img-box", 
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
    },
    scale: 0.5,
    opacity: 0,
    duration: 1.5
});

/* Animação da Coluna de Estatísticas (Esquerda) */
gsap.from(".col-stats .stat-item", {
    scrollTrigger: {
        trigger: ".ficha-tecnica-container",
        start: "top 80%",
    },
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
});

/* Animação do Motor (Centro - Efeito de Zoom) */
gsap.from(".motor-img-box img", {
    scrollTrigger: {
        trigger: ".ficha-tecnica-container",
        start: "top 75%",
    },
    scale: 0.7,
    opacity: 0,
    duration: 1.5,
    ease: "back.out(1.7)"
});

/* Animação da Coluna de Informações (Direita) */
gsap.from(".info-col h3, .info-col p", {
    scrollTrigger: {
        trigger: ".ficha-tecnica-container",
        start: "top 80%",
    },
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power2.out"
});

/* Parallax suave no motor */
gsap.to(".motor-img-box img", {
    scrollTrigger: {
        trigger: ".ficha-tecnica-container",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    },
    y: -30
});