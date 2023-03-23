console.log('Žiju!');
/*
//úkol1//


function left() {
    const car = document.querySelector('.car');
    car.classList.remove('moveRight');
    car.classList.add('moveLeft');
  }
  
  function right() {
    const car = document.querySelector('.car');
    car.classList.remove('moveLeft');
    car.classList.add('moveRight');
  }
*/


/*
//ukol2//
const user = {
    email: 'bartolomej.rozumbrada@gmail.com',
    password: 'vimzenicnevim',
    name: 'Bartoloměj'
  }
  
  const form = document.querySelector('form');
  const errorMessage = document.getElementById('error-message');
  const successMessage = document.getElementById('success-message');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (emailInput.value === user.email && passwordInput.value === user.password) {
     
      errorMessage.classList.add('hidden');
      successMessage.textContent = `Logged in as: ${user.name}`;
      successMessage.classList.remove('hidden');
      emailInput.value = '';
      passwordInput.value = '';
    } else {
      errorMessage.classList.remove('hidden');
      successMessage.classList.add('hidden');
      passwordInput.value = '';
    }
  });
*/



/*
  //ukol3//
 
  const form = document.querySelector('form');

  form.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = document.querySelector('input');   
      console.log(email.value);
      form.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email.value}`;
  
  })
  
  const emailInput = document.querySelector('input')
  
  emailInput.addEventListener('input', (event) => {
      event.preventDefault()
      
      if (event.target.value === '') {
          emailInput.classList.add('red')
      }
  
      if (event.target.value != '') {
          emailInput.classList.remove('red')
      }
  
      if (event.target.value.includes('@') === false) {
          emailInput.classList.add('red')
      }
  
      if (event.target.value.includes('@') === true) {
          emailInput.classList.remove('red')
      }    
  })
  */