document.addEventListener('DOMContentLoaded', function () {
  let count = 0;
  const button = document.getElementById('clickButton');
  const display = document.getElementById('clickCount');
  const message = document.getElementById('message');

  button.addEventListener('click', function () {
    count++;
    display.textContent = count;

    if (count >= 15) {
      button.disabled = true;
      message.textContent = 'Достигнуто максимальное количество кликов!';
    }
  });

  let timerCount = 10;
  const timerDisplay = document.getElementById('timer');
  const resetButton = document.getElementById('resetButton');
  let timerInterval;

  function startTimer() {
    timerInterval = setInterval(function () {
      timerCount--;
      timerDisplay.textContent = timerCount;

      if (timerCount <= 0) {
        clearInterval(timerInterval);
        timerDisplay.textContent = 'Время вышло!';
      }
    }, 1000);
  }

  resetButton.addEventListener('click', function () {
    clearInterval(timerInterval);
    timerCount = 10;
    timerDisplay.textContent = timerCount;
    startTimer();
  });

  startTimer();

  let ct = 0;
  let intervali;

  const ourtext = document.getElementById('tm');
  const sb = document.getElementById('sb');
  const st = document.getElementById('st');
  const re = document.getElementById('re');

  sb.addEventListener('click', function () {
    if (!intervali) {
      intervali = setInterval(function () {
        ct++;
        // ++ добавь единицу, увеличиваем счетчик
        ourtext.textContent = ct;
      }, 1000);
    }
    // проверяем, не запущен ли таймер
  });

  st.addEventListener('click', function () {
    clearInterval(intervali);
    intervali = null;
  });

  re.addEventListener('click', function () {
    clearInterval(intervali);
    intervali = null;

    ct = 0;
    ourtext.textContent = ct;
  });

  // let count = 0;
  // const but = document.getElementById('but');
  // const countinc = document.getElementById('countinc');

  // but.addEventListener('click', function () {
  //   count += 1;
  //   countinc.textContent = count;
  //   // .textContent - для изменения текстового содержимого элемента

  //   if (count >= 15) {
  //     but.disabled = true;
  //     //   disabled = true; - блокировка кнопки
  //   }
  // });
  // let co = 0;
  // const timer = document.getElementById('timer');
  // //   set interval - позволяет вызывать функцию регулярно, повторяя вызов через опред. интервал
  // const interval = setInterval(function () {
  //   co += 1;
  //   timer.textContent = co;
  //   if (co >= 10) {
  //     clearInterval(interval);
  //   }
  // }, 1000);
});
