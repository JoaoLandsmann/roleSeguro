let imagens1= document.querySelectorAll('.small_img1');
let imagens2= document.querySelectorAll('.small_img2');
let imagens3= document.querySelectorAll('.small_img3');
let imagens4= document.querySelectorAll('.small_img4');
let imagens5= document.querySelectorAll('.small_img5');
let imagens6= document.querySelectorAll('.small_img6');
let imagens7= document.querySelectorAll('.small_img7');
let imagens8= document.querySelectorAll('.small_img8');
let imagens9= document.querySelectorAll('.small_img9');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');
let btClose = document.querySelector('#bt_close');
let srcVal="";

for(let i =0; i<imagens1.length;i++){
    imagens1[i].addEventListener('click',function(){
        
        srcVal = imagens1[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    });
    
}

for(let i =0; i<imagens2.length;i++){
    imagens2[i].addEventListener('click',function(){
        
        srcVal = imagens2[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    });
    
}

for(let i =0; i<imagens3.length;i++){
    imagens3[i].addEventListener('click',function(){
        
        srcVal = imagens3[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    });
    
}

for(let i =0; i<imagens4.length;i++){
    imagens4[i].addEventListener('click',function(){
        
        srcVal = imagens4[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    });
    
}

for(let i =0; i<imagens5.length;i++){
    imagens5[i].addEventListener('click',function(){
        
        srcVal = imagens5[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    });
    
}

for(let i =0; i<imagens6.length;i++){
    imagens6[i].addEventListener('click',function(){
        
        srcVal = imagens6[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    });
    
}

for(let i =0; i<imagens7.length;i++){
    imagens7[i].addEventListener('click',function(){
        
        srcVal = imagens7[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    });
    
}

for(let i =0; i<imagens8.length;i++){
    imagens8[i].addEventListener('click',function(){
        
        srcVal = imagens8[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    });
    
}

for(let i =0; i<imagens9.length;i++){
    imagens9[i].addEventListener('click',function(){
        
        srcVal = imagens9[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    });
    
}

btClose.addEventListener('click', function(){

    for (var i = modal.classList.length - 1; i > 0; i--) {
        modal.classList.toggle('modal_active');
    }
});

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;

        if ("key" in evt) {

            isEscape = (evt.key === "Escape" || evt.key === "Esc");
        } else {

            isEscape = (evt.keyCode === 27);
        }

            if (isEscape) {

                for (var i = modal.classList.length - 1; i > 0; i--) {
                    modal.classList.toggle('modal_active');
                }

            }
};