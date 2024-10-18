currentslidEl = 1; // 1st show image
slider = document.getElementById("slider");  // this i d is ul tag id name
totalslider = slider.childElementCount;  // how many child in ul tag check ? totally 5

// const btn = document.querySelector(".btn"); future add on

function next(){
    if (currentslidEl < totalslider){
        currentslidEl++;
        show()
    }
   
}

function previous(){
    if (currentslidEl > 1){
        currentslidEl--;
        show()
    }
    
}

function show(){
    slides = slider.getElementsByTagName('li');

    for (let index = 0; index < totalslider ;index++){
      
    const element = slides[index];
    
    if (currentslidEl === index+1){
        element.classList.remove('ulli');
    }else{
        element.classList.add('ulli');
    }
    }
}