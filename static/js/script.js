document.addEventListener("DOMContentLoaded", () => {
    const botao = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu-lateral");

    if (botao && menu) {
        botao.addEventListener("click", () => {
            // Liga/Desliga a classe 'ativo' no menu
            menu.classList.toggle("ativo");

            // Troca o ícone dependendo se o menu está aberto ou não
            if (menu.classList.contains("ativo")) {
                botao.textContent = "✖";
            } else {
                botao.textContent = "☰";
            }
        });
    } else {
        console.error("Botão ou Menu não encontrados! Verifique as classes no HTML.");
    }
});

// Faz os cards aparecerem suavemente conforme o scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {

    const car = document.querySelector(".car-image");
    const text = document.querySelector(".text-container");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                car.classList.add("show");
                text.classList.add("show");

            } else {

                car.classList.remove("show");
                text.classList.remove("show");

            }

        });

    }, { threshold: 0.3 });

    observer.observe(car);

});