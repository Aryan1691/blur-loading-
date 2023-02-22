let x = document.querySelector('.loading');
let y = document.querySelector('.bg');

let index = 0;
let int = setInterval(run,30);
function run(){
  index++;

if (index>99) {
  clearInterval(int);
}

x.innerHTML=index+"%";
x.style.opacity = transparent(index,0,100,1,0);
y.style.filter = `blur(${transparent(index,0,100,30,0)}px)`;
}


let transparent = (num,in_min,in_max,out_min,out_max)=>{
let total =((num-in_min)*(out_max-out_min))/(in_max-in_min)+out_min;
return total;
}
