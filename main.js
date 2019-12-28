"use sctrict";

function clock() {
  const hours = document.querySelector(".hours");
  const minutes = document.querySelector(".minutes");
  const seconds = document.querySelector(".seconds");

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
