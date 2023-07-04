const prev_btn = document.getElementById('prev-btn');
const next_btn = document.getElementById('next-btn');
const progress = document.getElementById('empty-div');
const steps = document.querySelectorAll('.step');


let counter = 1;
let add = 30;
next_btn.addEventListener('click', () =>{
    counter++;

    if(counter > steps.length){
        counter = steps.length;
    };
    
    if(counter > 4){
        next_btn.disabled = true;
    }else{
        next_btn.disabled = false;
    }
    update();
   
});

prev_btn.addEventListener('click', () =>{
    counter--;

    if(counter < 1){
        counter = 1;
    };

    console.log(counter);

    if(counter < 1){
        prev_btn.disabled = true;
    }else{
        prev_btn.disabled = false;
    }

    update();
});

function update(){
 steps.forEach((step, idx)=>{
   
   if(idx < counter){
    // console.log(idx);
    step.classList.add('active');
   }else{
    step.classList.remove('active');
   };

   const active = document.querySelectorAll('.active');

//    console.log((active.length  / steps.length - 0.5) * 100);



   progress.style.width = ((active.length -1) / (steps.length - 1)) * 100 + "%";
//    console.log(active.length);
//    console.log(steps.length);
if(counter === 1){
    prev_btn.disabled = true;
}else if (counter === 4){
    next_btn.disabled = true;
}else{
    next_btn.disabled = false;
    prev_btn.disabled = false;
}
 });
}

