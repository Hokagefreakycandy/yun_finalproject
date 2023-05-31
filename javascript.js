
 /*varibale */
const imagesOfCats = [
    'unsplash_0F7GRXNOG7g.png',
    'unsplash_Tn8DLxwuDMA.png',
    'unsplash_13ky5Ycf0ts.png',
    'unsplash_YeQIAysCP3w.png',
    'unsplash_75715CVEJhI.png',
    'unsplash_ZlFKIG6dApg.png',
    'unsplash_7AIDE8PrvA0.png',
    'unsplash_mJaD10XeD7w.png',
    'unsplash_7E9qvMOsZEM.png',
    'unsplash_nKC772R_qog.png',
    'unsplash_7GX5aICb5i4.png',
    'unsplash_p6yH8VmGqxo.png',
    'unsplash_BLW_KQ0Rkn0.png',
    'unsplash_rW-I87aPY5Y.png',
    'unsplash_Dl39g6QhOIM.png',
    'unsplash_uhnbTZC7N9k.png',
    'unsplash_KGiQFgF7dkc.png',
    'unsplash_w2DsS-ZAP4U.png',
    'unsplash_NodtnCsLdTE.png',
    'unsplash_yJozLVBxNA0.png',
    'unsplash_RCfi7vgJjUY.png'
]

 const imagesOfDogs = [
    'Unsplash-Avatars_0003s_0000_curology-cCwfSmUTqYs-unsplash.png',
    'Unsplash-Avatars_0003s_0001_zach-lucero-8qJPk1ESNSE-unsplash.png',
    'Unsplash-Avatars_0003s_0011_jose-alejandro-cuffia-k1LNP6dnyAE-unsplash.png',
    'Unsplash-Avatars_0003s_0016_mitchell-orr-PUY5xUszd3Y-unsplash.png',
    'Unsplash-Avatars_0003s_0026_alexandra-novitskaya-8K0vunxffaM-unsplash.png',
    'Unsplash-Avatars_0003s_0013_patrick-hendry-FAz_61uH1nA-unsplash.png',
    'Unsplash-Avatars_0003s_0010_herbert-goetsch-NqB1kRjvFbM-unsplash.png',
 ]


 /*Function for swapping */
 function shuffletry(array){
    let currentIndex = array.length, randomIndex;
    while (currentIndex !=0){

       randomIndex = Math.floor(Math.random() * currentIndex);currentIndex--;
       [array[currentIndex], array[randomIndex]] = 
       [array[randomIndex], array[currentIndex]]; 
    }
    return array;
 }


 /* Placeholder */

 
 const storing =  document.getElementById("placeholder_cats")
 shuffletry(imagesOfCats);
 console.log(imagesOfCats); 

 if (storing){ 

     /*Show all the pictures on the container*/
 for (let i=0; i < imagesOfCats.length; i++) {
    ; const pic = `<img src="images/cats/${imagesOfCats[i]}" />` 
        console.log(pic);
    
        storing.innerHTML = pic + (storing.innerHTML)
    
     }
    

 }




  /* Placeholder */
 
  const storingdog =  document.getElementById("placeholder_dogs")
  shuffletry(imagesOfDogs);
  console.log(imagesOfDogs); 
 
  if (storingdog){
     /*Show all the pictures on the container*/
  for (let i=0; i < imagesOfDogs.length; i++) {
 ; const pic = `<img src="images/dogs/${imagesOfDogs[i]}" />` 
     console.log(pic);

     storingdog.innerHTML = pic + (storingdog.innerHTML)
 
  }
  }
 


  //Validation Code for Inputs

  var username = document.forms['loginform']['username'];
  var password = document.forms['loginform']['password'];
  var selfintro = document.forms['loginform']['introtext'];

  var name_error = document.getElementById('name_error')
  var password_error = document.getElementById('password_error')
  var intro_error = document.getElementById('intro_error')


  function validated(event){ 
    if (username.value.length < 1) {
        username.style.border = "1px solid red";
        name_error.style.display = "block";
        username.focus(); 
        event.preventDefault()
    }

    if (password.value.length < 1) {
        password.style.border = "1px solid red";
        password_error.style.display = "block";
        password.focus(); 
        event.preventDefault()
    }

    if (selfintro.value.length < 1) {
        selfintro.style.border = "1px solid red";
        intro_error.style.display = "block";
        selfintro.focus(); 
        event.preventDefault()
        return false;
    }

  }
  document.getElementById("loginform").addEventListener("submit",validated)