const orderBtn = document.querySelector('.buttons__btn1'),
      order = document.querySelector('.order'),
      message = document.querySelector('.message'),
      btn2 = document.querySelector('.buttons__btn2');


orderBtn.addEventListener('click', function(){
    order.style.display = 'none';
    message.style.display = 'flex';
})

btn2.addEventListener('click', function(){
    location.reload();
})