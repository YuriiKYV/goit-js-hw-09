import Notiflix from 'notiflix';

const amount = document.querySelector('input[name="amount"]');
const btn = document.querySelector('button[type="submit"]');
const firstDelay = document.querySelector('input[name="delay"]');
const stepValue = document.querySelector('input[name="step"]');


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
      resolve({ position, delay });
  } else {
      reject({ position, delay })
  }
      }, delay);
        
  });
    
}


function amountСycle(e) {
  e.preventDefault()
  for (let i = 0; i < amount.value; i += 1) {
    
    const step = Number(firstDelay.value) + Number(stepValue.value) * i;
    const position = i + 1;
    

    createPromise(position, step)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    
  }
}


btn.addEventListener('click', amountСycle)