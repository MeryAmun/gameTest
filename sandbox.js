
const button = document.querySelector('.restart');
const ul = document.querySelector('.tiles1');
const ul2 = document.querySelector('.tiles2');
const head = document.querySelector('.header');
const head2 = document.querySelector('.header2');
const single = document.getElementsByClassName('.title.singile');
const tiles = [1,2,3,4,5,6,7,8,9];
let html = ``;
tiles.forEach((tile,index) => {
    const randomColor = "#" + Math.floor(Math.random()*16907215).toString(16) ;
      html += `<li class="single" tabindex="1" style="background: ${randomColor}">${tile}</li>`; 
                 
});

ul.innerHTML = html;

const singleLi = ul.children;
console.log(singleLi[0].className)
  // console.log(singleLi[0].innerHTML)
   //console.log(singleLi[0].style.background)

const keys = Object.keys(ul.children);

keys.forEach((key, index) => {
  //console.log(key)
  const singleLi = ul.children;
  
  singleLi[key].onclick = border;
  function border(){
    singleLi[key].setAttribute('class', 'selected');
    // console.log(singleLi[key], '1')
    const newItem = document.querySelector('.selected');
console.log(newItem, '1');
localStorage.setItem('new',singleLi[key]);
 
  //end of border 
   

    const keys2 = Object.keys(ul.children);
     keys2.forEach((key2, index) => {
       const singleLi2 = ul2.children;
       singleLi2[key2].addEventListener("click", change); 
       
       function change(){
         
          singleLi2[key2].style.border = "none";
         singleLi2[key2].setAttribute('class', 'li2Select');
         console.log(singleLi2[key2])
        const newClass = singleLi2[key].className
     singleLi[key].setAttribute('class', `${newClass}`);
     singleLi2[key2].append(singleLi[key]);
     console.log(singleLi[key])
     
        if(singleLi.length < 1 && ul2.innerHTML === [5,4,2,6,1,3,7,8,9]){
         head.innerHTML = "Game finished, you won";
        }else if(singleLi.length < 1 && ul2.innerHTML !== [5,4,2,6,1,3,7,8,9]){
         head.innerHTML = "game finished, you lose";
       }else{
         head.innerHTML = `${singleLi.length} moves left`;
        }
       }
      
     });

    //end of second click
     
   };
   
    
});
var newLiItem = localStorage.getItem("new");
console.log(newLiItem);

// var frag = document.createDocumentFragment();
// frag.appendChild(newLiItem);
// var htmll = frag.innerHTML;
// delete frag; //
// console.log(htmll)
// if( ul2.innerHTML === [5,4,2,6,1,3,789]){
//   head2.innerHTML = "you won";
// }else{
//   head2.innerHTML = "gamefinished, you lose";
// }
//console.log(ul2)


button.addEventListener("click", function(){
  window.location.reload();
 
});

//  if(singleLi.length < 1 && ul2.innerHTML === [5,4,2,6,1,3,7,8,9] || [1,2.3,6,5,4,7,8,9]){
  //   head.innerHTML = "Game finished, you won";
  //  }else 
  // if(singleLi.length < 1){
  //   head.innerHTML = `${singleLi.length} moves left`;
  //    }
     // else if(singleLi.length < 1 && ul2.innerHTML !== [5,4,2,6,1,3,7,8,9] || [1,2.3,6,5,4,7,8,9]){
     //   head.innerHTML = "game finished, you lose";
     // }else{
     //   head.innerHTML = "game finished, you won";
     //  }



    //  const keys2 = Object.keys(ul.children);
    //  keys2.forEach((key2, index) => {
    //    const singleLi2 = ul2.children;
    //    singleLi2[key2].onclick =  change;
       
    //    function change(){
         
    //       singleLi2[key2].style.border = "none";
    //      singleLi2[key2].setAttribute('class', 'li2Select');
    //     const newClass = singleLi2[key].className
    //  singleLi[key].setAttribute('class', `${newClass}`);
    //  singleLi2[key2].append(singleLi[key]);
    //  //console.log(singleLi[key])
     
    //     if(singleLi.length < 1 && ul2.innerHTML === [5,4,2,6,1,3,7,8,9]){
    //      head.innerHTML = "Game finished, you won";
    //     }else if(singleLi.length < 1 && ul2.innerHTML !== [5,4,2,6,1,3,7,8,9]){
    //      head.innerHTML = "game finished, you lose";
    //    }else{
    //      head.innerHTML = `${singleLi.length} moves left`;
    //     }
    //    }
      
    //  });