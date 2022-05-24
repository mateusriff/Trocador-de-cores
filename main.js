//teste

function changecolor (){
    if(document.body.style.background = '#292929'){
        document.body.style.background = '#F2F2F2';
        TXTcontent.innerHTML="Background: #F2F2F2";
    } else if (document.body.style.background = '#F2F2F2'){ 
        document.body.style.background = '#C7C7C7';
        TXTcontent.innerHTML="Background: #C7C7C7";
    } else {
        document.body.style.background = '#292929';
        TXTcontent.innerHTML="Background: #292929";
    }
}