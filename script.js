document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('start-test');
    const wave = document.querySelector('.wave-container');
    const status = document.getElementById('status-msg');
    const overlay = document.getElementById('scare-overlay');
    
    // O áudio final (Gemidão ou Susto)
    const audioFinal = new Audio("https://www.myinstants.com/media/sounds/gemidao-do-zap.mp3");
    
    // Som de fundo (ruído branco bem baixinho) para dar realismo
    const noise = new Audio("data:audio/wav;base64,UklGRjIAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA="); // Placeholder
    noise.volume = 0.05; // Quase mudo
    noise.loop = true;

    btn.addEventListener('click', function() {
        btn.classList.add('hidden');
        wave.classList.add('active');
        status.classList.remove('hidden');
        
        // Inicia o ruído de fundo (Isso faz a pessoa pensar: "Ih, tá baixo mesmo")
        noise.play().catch(() => {});

        // Cronograma do golpe
        // 0-8 seg: A pessoa está tentando ouvir o "locutor" inexistente e aumentando o volume.
        
        setTimeout(() => {
            status.innerText = "Frequência atual: 18.5kHz. Analisando...";
            status.style.color = "#ff3b30"; // Cor de alerta para prender a atenção
        }, 5000);

        setTimeout(() => {
            status.innerText = "Sinal detectado. Finalizando leitura de driver...";
        }, 10000);

        // O Grand Finale aos 13 segundos (tempo suficiente para ela colocar no máximo)
        setTimeout(() => {
            noise.pause();
            audioFinal.volume = 1.0;
            audioFinal.play();
            
            overlay.classList.remove('hidden');

            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            }
        }, 13000);
    });
});