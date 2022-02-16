const form = document.querySelector('form');

const submitHandler = (event) => {
  event.preventDefault();
 
  const animeWatched = form.amount.value;
  
  let weebLevel = null; 

  console.log(animeWatched);
  
  if (animeWatched === '1-5' ) {
    weebLevel = 'Beginner' ;
  } else if (animeWatched === '5-20'  ) {
    weebLevel = 'Rookie';
  } else if (animeWatched === '20-50') {
    weebLevel = 'Novice';
  } else if (animeWatched === '50+') {
    weebLevel = 'Crazy!';
  } else {

    console.warn('Amount of anime watched not selected.');
  }

  console.log(weebLevel);

  if (weebLevel) {
    
    form.output.value = `Your weeb level is: ${weebLevel}`;
  } else {
    form.output.value = 'Amount of anime watched not selected.';
  }
}

form.addEventListener('submit', submitHandler);