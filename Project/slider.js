let list =document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let pre = document.getElementById('pre');
let next = document.getElementById('next');

// set trang đầu tiên là vị trí đầu của slide
let active =0;
// set trang cuối là vị trí cuối của slide
let lengthItems =items.length-1;

// function cho nút next
next.onclick = function(){
  if(active+1 >lengthItems){
    active=0;
  }
  else{
    active =active+1;
  }
  reloadSlider();
}
// function cho nút pre
pre.onclick =function(){
  if(active -1 <0){
    active = lengthItems;
  }
  else{
    active = active -1;
  }
  reloadSlider();
}

// function để chọn trang bằng cái dấu chấm
dots.forEach((li,key) => {
  li.addEventListener('click' , function(){
    active =key;
    reloadSlider();
  })
})

// function để autoplay slider
let refreshSlider = setInterval(() => {next.click()},3000);

// function để load lại các hiệu ứng của autoplay và hiệu ứng của các nút
function reloadSlider(){
  let checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft+'px';

  let lastActiveDot = document.querySelector('.slider .dots li.active');
  lastActiveDot.classList.remove('active');
  dots[active].classList.add('active');
  clearInterval(refreshSlider);
  refreshSlider = setInterval(() => {next.click()},3000);
}