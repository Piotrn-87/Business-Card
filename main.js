"use sctrict";

function clock() {
  const hours = document.querySelector(".time__box--hours");
  const minutes = document.querySelector(".time__box--minutes");
  const seconds = document.querySelector(".time__box--seconds");

  const timer = new Date();

  const h = timer.getHours() < 10 ? "0" + timer.getHours() : timer.getHours();
  const m =
    timer.getMinutes() < 10 ? "0" + timer.getMinutes() : timer.getMinutes();
  const s =
    timer.getSeconds() < 10 ? "0" + timer.getSeconds() : timer.getSeconds();

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}

setInterval(clock, 1000);
