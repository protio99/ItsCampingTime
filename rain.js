const container = document.querySelector('.containerRain');
const card = document.querySelector('.card');
let cardWidth = card.offsetWidth;


const rain = () =>{
    let j = 0;
    while(j <= 80){
        let gout = document.createElement('i');
        let x = cardWidth * Math.random();
       
        let time = 1 * Math.random();


        gout.style.animationDuration = time <=0.4 ? (time + 0.4) + 's': time + 's';
        gout.style.animationDelay = time + 's';
        gout.style.left = x + 'px';
        



        container.appendChild(gout);

        j++;
    }
}
rain();