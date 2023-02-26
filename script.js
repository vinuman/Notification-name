const markButton = document.getElementById('mark-button');
const notificationCount = document.getElementById('notification-count');

    



const cardContainer = document.querySelector('.cards-container');
notificationCount.textContent = cardContainer.children.length;
markButton.addEventListener('click', function(event){
    for(let i=0; i<cardContainer.children.length; i++){
        if(cardContainer.children[i].classList.contains('cards')){
            cardContainer.children[i].classList.add('inactive');
            
        }
        const activeCards = document.querySelectorAll('.inactive');
        notificationCount.textContent = cardContainer.children.length - activeCards.length;
    }
});


const cards = document.querySelectorAll('.cards');

cards.forEach((card)=>{
    card.addEventListener('click', ()=>{
        card.classList.toggle('inactive');
        const activeCards = document.querySelectorAll('.inactive');
    notificationCount.textContent = cardContainer.children.length - activeCards.length;
    })
});









