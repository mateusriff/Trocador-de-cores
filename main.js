const element = document.querySelector('.black');

var color = 'black';

//element.addEventListener('click', () => {
//  element.classList.toggle('white');
//});

function changecolor (){
    if (color === 'black'){
        document.body.style.background = '#F2F2F2';
        TXTcontent.innerHTML="Background: #F2F2F2";
        color = 'white';
    } else if (color === 'white'){ 
        document.body.style.background = '#C7C7C7';
        TXTcontent.innerHTML="Background: #C7C7C7";
        color = 'gray';
    } else if (color === 'gray'){
        document.body.style.background = '#292929';
        TXTcontent.innerHTML="Background: #292929";
        color = 'black';
    }
}