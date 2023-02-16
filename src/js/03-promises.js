import {Notify} from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delay: document.getElementsByName('delay'),
  step: document.getElementsByName('step'),
  amount: document.getElementsByName('amount'),
  button: document.querySelector('button')
};

refs.button.addEventListener('click', onFormSubmit)

function onFormSubmit(e) {
  e.preventDefault();
  const amount = Number(refs.amount[0].value);
  const firstDelay = Number(refs.delay[0].value);
  const delayStep = Number(refs.step[0].value);
  console.log(amount, firstDelay, delayStep);

  let delay = 0;
  for (let position = 1; position <= amount; position += 1) {
    // console.log(position - 1);
    delay = firstDelay + delayStep * (position - 1);

  createPromise(position, delay)
    .then(({ position, delay }) => {
       Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  };
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (shouldResolve) {
          resolve({position, delay});
        } else {
          reject({position, delay});
         }
  }, delay); 
  }) 
};