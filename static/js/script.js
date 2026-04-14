document.addEventListener("DOMContentLoaded", () => {

    const botao = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu-lateral");

    if (botao && menu) {
        botao.addEventListener("click", () => {
            menu.classList.toggle("ativo");
            botao.textContent = menu.classList.contains("ativo") ? "✖" : "☰";
        });
    }

    /* MEDIA SECTION */
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

    /* VÍDEO HOVER */
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

    /* CARROSSEL */
    const athletes = [
        {
            sport: "F1",
            title: "Max Verstappen domina a F1 com maestria",
            desc: "Max Verstappen domina a F1 com maestria, conquistando títulos e quebrando recordes. O piloto holandês é conhecido por sua habilidade excepcional, agressividade nas pistas e consistência, tornando-se um dos maiores nomes da história da Fórmula 1.",
            image: "/static/img/maxverstappen.jpg",
            link: "/atletas/max-verstappen"
        },
        {
            sport: "FUTEBOL",
            title: "Neymar Jr. maior artilheiro do Brasil",
            desc: "Neymar ultrapassa Pelé e faz história como maior artilheiro da seleção Brasileira.",
            image: "/static/img/Neymar.jpg",
            link: "/atletas/neymar-jr"
        },
        {
            sport: "ESQUI ALPINO",
            title: "Lucas Braathen surpreende",
            desc: "Brasileiro se destaca nas olimpíadas de inverno, mostrando talento e determinação em um esporte pouco tradicional para o país.",
            image: "/static/img/lucas.jpg",
            link: "/esportes/esqui"
        },
        {
            sport: "E-SPORTS",
            title: "Gaules domina a cena",
            desc: "Um dos maiores nomes do e-sports, Gaules é conhecido por sua habilidade excepcional, carisma e influência na comunidade gamer, conquistando fãs ao redor do mundo.",
            image: "/static/img/gaules.jpg",
            link: "/esportes/esports"
        }
    ];

    let currentAthlete = 0;

    const athleteSport = document.getElementById("athleteSport");
    const athleteTitle = document.getElementById("athleteTitle");
    const athleteDesc = document.getElementById("athleteDesc");
    const athleteImage = document.getElementById("athleteImage");
    const athleteLink = document.getElementById("athleteLink");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (
        athleteSport &&
        athleteTitle &&
        athleteDesc &&
        athleteImage &&
        athleteLink &&
        prevBtn &&
        nextBtn
    ) {

        function updateCarousel() {
            const carousel = document.querySelector(".athlete-carousel");
            const item = athletes[currentAthlete];

            /* 🔥 SAÍDA */
            carousel.classList.remove("carousel-entering");
            carousel.classList.add("carousel-changing");

            setTimeout(() => {

                /* troca conteúdo */
                athleteSport.textContent = item.sport;
                athleteTitle.textContent = item.title;
                athleteDesc.textContent = item.desc;
                athleteImage.src = item.image;
                athleteImage.alt = item.title;
                athleteLink.href = item.link;

                /* 🔥 ENTRADA */
                carousel.classList.remove("carousel-changing");
                carousel.classList.add("carousel-entering");

                setTimeout(() => {
                    carousel.classList.remove("carousel-entering");
                }, 800);

            }, 400);
        }

        nextBtn.addEventListener("click", () => {
            currentAthlete = (currentAthlete + 1) % athletes.length;
            updateCarousel();
        });

        prevBtn.addEventListener("click", () => {
            currentAthlete = (currentAthlete - 1 + athletes.length) % athletes.length;
            updateCarousel();
        });

        updateCarousel();
    }

}); // 🔥 FECHADO CORRETAMENTE

/* GSAP (seguro) */
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}