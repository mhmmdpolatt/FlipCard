const cardArray=[
    {
        name:'foto1',
        image:'images/foto1.jpg'
    },
    {
        name:'foto1',
        image:'images/foto1.jpg'
    },
    {
        name:'foto2',
        image:'images/foto2.jpg'
    },
    {
        name:'foto2',
        image:'images/foto2.jpg'
    },
    {
        name:'foto4',
        image:'images/foto4.jpg'
    },
    {
        name:'foto4',
        image:'images/foto4.jpg'
    },
    {
        name:'foto5',
        image:'images/foto5.jpg'
    },
    {
        name:'foto5',
        image:'images/foto5.jpg'
    },
    {
        name:'foto6',
        image:'images/foto6.jpg'
    },
    {
        name:'foto6',
        image:'images/foto6.jpg'
    },
    {
        name:'foto3',
        image:'images/foto3.jpg'
    },
    {
        name:'foto3',
        image:'images/foto3.jpg'
    }
    // {
    //     name:'soru',
    //     image:'images/soru.png'
    // },
    // {
    //     name:'black',
    //     image:'images/Black.png'
    // }

];

cardArray.sort(()=>{
  return  0.5 - Math.random();
})

const reset=document.getElementById('reset').addEventListener('click', function() 

{
    window.location.reload();


    
} );

const score=document.getElementById('score');


const grid=document.getElementById('grid');
let cardChosen=[]
let cardChosenId=[]
const cardWon=[]
function checkMatch(){
    const cards = document.querySelectorAll('#grid img')
    const optionOneId=cardChosenId[0]
    const optionTwoId=cardChosenId[1]
    if (cardChosen[0]===cardChosen[1]) {
        cards[optionOneId].setAttribute('src','images/kutlama.png')
        cards[optionTwoId].setAttribute('src','images/kutlama.png')
        cardWon.push(cardChosen)


    }else{
        cards[optionOneId].setAttribute('src','images/soru.png')
        cards[optionTwoId].setAttribute('src','images/soru.png')


    }

    cardChosen=[]
    cardChosenId=[]
    score.innerText=cardWon.length;
    if (cardWon.length==6) {
        
        score.innerText='KAZANDINIZ'
        
    }
}

function  tersCevir(){
    const cardId =this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId);
    this.setAttribute('src',cardArray[cardId].image)
    if (cardChosen.length==2) {
        setTimeout(checkMatch,500)
    }

}   

console.log(cardChosen)

function ekranOlustur(){
    for( let i =0;  i<cardArray.length; i++){
        const card =document.createElement('img')
        card.setAttribute('src','images/soru.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',tersCevir)
        card.classList.add('rotate')

        console.log(cardChosen)
        grid.appendChild(card)
    }
}
ekranOlustur();

// Tüm resim elementlerini seç
const images = document.querySelectorAll('img');

// Her resim elementine tıklandığında dönme efekti uygula
images.forEach(image => {
    image.addEventListener('click', function() {
        this.classList.toggle('rotated'); // Dönme efekti sınıfını ekleyip kaldır
    });
});
