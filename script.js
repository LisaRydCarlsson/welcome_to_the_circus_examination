document.addEventListener("DOMContentLoaded", function() {
    let enterSection = document.getElementById('enter');
    let welcomeSection = document.getElementById('welcome');

    if (enterSection && welcomeSection) {
      // Sätt initiala värden för translateY och scale på #enter
      enterSection.style.transform = 'translateY(-50px) scale(1)';
      welcomeSection.style.opacity = 0;

      // Animering: Visa bakgrundsbilden
      anime({
        targets: "#enter",
        opacity: [1, 1],
        duration: 1000,
        easing: 'linear',
        complete: () => {
          // Animeringseffekt för inmatning (sugas in)
          anime({
            targets: "#enter",
            opacity: [1, 0],
            scale: 2.7,
            duration: 9000,
            easing: 'linear',
            complete: () => {
              // Fördröj återställning av scale efter att bakgrunden är borta
              setTimeout(() => {
                // Återställ scale på #enter till 1
                anime({
                  targets: enterSection,
                  scale: 1,
                  duration: 1000,
                  easing: 'easeOutElastic'
                });
              }, 1000); // Ta bort?
              
              // Slutsteg - Visa #welcome-sektionen med "bang"-effekten
              anime({
                targets: '#welcome',
                opacity: 1,
                scale: 0.8,
                duration: 500,
                easing: 'easeOutElastic',
                complete: () => {
                    anime({
                        targets: '#enter-btn',
                        opacity: 1,
                        translateY: ['1000rem', '0%'],
                        duration: 1000,
                        easing: 'linear'            
                });
            }
            });
        }
          });
        }
      });
    } else {
      console.log('#enter or #welcome element not found');
    }
});


