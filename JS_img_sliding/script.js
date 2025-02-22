const mainDiv= document.getElementById("main");
const autoDiv= document.getElementById("autos");
let imagesarr=[
    "./images/be88a25d-bfd4-4be1-b3b4-2757192af14c.jpg",
    "./images/Black-Friday_web_banner_20.jpg",
   "./images/black_friday_web_banner_33.jpg",
   "./images/31128711_business_web_banner_06.jpg",
   "./images/34012978_black_friday_facebook_banner_02.jpg",
    "./images/20552287_6327123.jpg"
]

let start=0
const divimg=document.createElement("img");
divimg.src=imagesarr[start]
mainDiv.appendChild(divimg)


function next(){
    
    len=imagesarr.length;
    if(start<len-1)
        start=start+1;    
   else
        start=0;
      
    console.log(start);
       
    divimg.src=imagesarr[start]
    mainDiv.appendChild(divimg)
  
}

function prev(){
  
    len=imagesarr.length;
    if(start!=0)
        start=start-1;    
   else
        start=len-1;
      
    console.log(start);
       
    divimg.src=imagesarr[start]
    mainDiv.appendChild(divimg)
  
}


function autoslider(){
    
    let autoimg=document.createElement("img");
    imagesarr.forEach((nn) => {
     
        
        autoimg.src=nn;
        console.log(autoimg.src);
        autoDiv.appendChild(autoimg);
        
    })


}
autoslider();
arrs=document.getElementById("btn");
arrs2=document.getElementById("btn2");
arrs.addEventListener("click", () => {
  
    mainDiv.classList.add("transition");
  });
  //when btn1 is clicked add transition class to slide
  arrs.addEventListener("mouseup", () => {
    mainDiv.classList.remove("transition");
  });
  //when btn1 is clicked remove transition class from slide
 

  arrs2.addEventListener("click", () => {
  
    mainDiv.classList.add("transition");
  });
  //when btn1 is clicked add transition class to slide
  arrs2.addEventListener("mouseup", () => {
    mainDiv.classList.remove("transition");
  });
  //when btn1 is clicked remove transition class from slide
 

  