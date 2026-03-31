document.addEventListener('DOMContentLoaded', () => {
    const container = document.body;

    // Função para criar pétalas caindo suavemente
    function createFallingPetal() {
        const petal = document.createElement('div');
        petal.style.position = 'absolute';
        petal.style.width = '15px';
        petal.style.height = '15px';
        petal.style.background = '#ff758f';
        petal.style.borderRadius = '50% 0 50% 50%';
        petal.style.opacity = Math.random();
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.top = '-20px';
        petal.style.zIndex = '1';
        
        // Animação via JS
        const duration = Math.random() * 3 + 4;
        petal.style.transition = `transform ${duration}s linear, top ${duration}s linear`;
        
        container.appendChild(petal);

        setTimeout(() => {
            petal.style.transform = `rotate(${Math.random() * 360}deg) translateX(${Math.random() * 100 - 50}px)`;
            petal.style.top = '110vh';
        }, 100);

        // Remove do DOM após cair
        setTimeout(() => {
            petal.remove();
        }, duration * 1000);
    }

    // Inicia a chuva de pétalas após a flor principal subir
    setTimeout(() => {
        setInterval(createFallingPetal, 300);
    }, 2000);
});