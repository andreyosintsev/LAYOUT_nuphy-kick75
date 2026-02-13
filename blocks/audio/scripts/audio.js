document.addEventListener('DOMContentLoaded', function () {
    const audioContainers = document.querySelectorAll('.audio__container');

    audioContainers.forEach(container => {
        const audio = container.querySelector('.audio__audio');
        const progressFill = container.querySelector('.audio__progress-bar-fill');
        const tips = container.querySelector('.audio__tips');

        // Клик по блоку
        container.addEventListener('click', function (e) {

            // Если кликнули именно по progress-bar — не дублируем
            if (e.target.closest('.audio__progress-bar')) return;

            // Если играет — ставим на паузу
            if (!audio.paused) {
                audio.pause();
                tips.textContent = 'Воспроизвести';
                return;
            }

            // Останавливаем все остальные аудио
            document.querySelectorAll('.audio__audio').forEach(otherAudio => {
                if (otherAudio !== audio) {
                    otherAudio.pause();
                    otherAudio.currentTime = 0;

                    const otherContainer = otherAudio.closest('.audio__container');
                    const otherProgress = otherContainer.querySelector('.audio__progress-bar-fill');
                    otherProgress.style.width = '0%';
                }
            });

            audio.play();
            tips.textContent = 'Пауза';
        });

        // Обновление прогресса
        audio.addEventListener('timeupdate', function () {
            const percent = (audio.currentTime / audio.duration) * 100;
            progressFill.style.width = percent + '%';
        });

        // Когда аудио закончилось
        audio.addEventListener('ended', function () {
            progressFill.style.width = '2%';
            audio.currentTime = 0;
        });

        // Если поставили на паузу вручную
        audio.addEventListener('pause', function () {
            if (audio.currentTime === 0) {
                progressFill.style.width = '2%';
            }
        });
    });
});
