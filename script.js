document.addEventListener('DOMContentLoaded', function(){
    //DOMContentLoaded é um evento que é acionado quando todo o HTML foi
    //completamente carregado e analisado, sem aguardar e analisado, sem aguardar
    //a acao do CSS.
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const indicators = document.querySelector('.carousel-indicators');

    //criando um bloco de variaveis
    let currentIndex = 0;
    const itemWidth = items[0].offsetWidth + 20; //adicionando o espaçamento
    const visibleitems = Match.Floor(carousel.offsetWidth / itemWidth);
    const totalItems = items.length;

    //Criar Indicadores
    for (let i = 0; i < totalItems - visibleitems +1; i++) {
        const dot = document.createElement('div');
        dot.classList.add('indicator');
        if (i==0) dot.classList.add('active');
        dot.addEventListener('click', () =>{
            goToSlide(i)
        });
        indicators.appendChild(dot);
    }

//Atualizar indicadores
function updateIndicators(){
    const dots = document.querySelectorAll('.indicator'); //dots. forEach é uma instrucao de interacao.
    dots.forEach((dot, index)=>{
        dot.classList.toggle('active', index === currentIndex);
        // o metodo classlist.toggle é uma funcionalidade dpo javaScipt 
        // que permite adiciobnar ou remover uma classe de um elemento.

    });

}

//ir para um slide especifico 
function goToSlide(index){
    currentIndex = index;
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    //transletX permite mover um elemento ao longo do eixo X,
    //espaco 2D isto é, você pode deslocar
    //um elemento para a esquerda ou para direita
    //em relacao a sua posicao original
    updateIndicators();
}

//Slide original
prevButton.addEventListener('click', () => {
    if (currentIndex > 0){
        goToSlide(currentIndex - 1);
    } else {
        //opcional voltar para o final
        goToSlide(totalItems - visibleitems);
    }
    });

    //próximo slide
    nextButton.addEventListener('click', () => {
        if (currentIndex < totalItems - visibleitems){
            goToSlide(currentIndex + 1);
        } else {
            goToSlide(0);
        }
        });

        //eventos de toque para navegacao mobile
        let touchStartX = 0;
        let touchEndX = 0;

        carousel.addEventListener('touchstart', e =>{
            touchStartX = e.changedTouches[0].screenX;
            handleSwipe();
            //facilita a deteccao de gesto de deslizar
            //(swipe) em dispositivos moveis e touchsreens

            carousel.addEnventListener('touchstart', e =>{
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
                // facilita a detecção de gestos de deslizar
                // (swipe) em dispositivos moveis e touchscreens
            });
        
            function handleSwipe(){
                if (touchStartX = touchEndX > 50){
                    // deslizar para a esquerda 
                    nextButton.click();
                } else if (touchEndX - touchStartX > 50){
                    // deslizar para direita
                    prevButton.click();
                }
            }
            
            });
}
)