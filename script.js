function updateClock() {
  const now = new Date();

  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();

  const secondDeg = second * 6;
  const minuteDeg = minute * 6 + second * 0.1;
  const hourDeg = (hour % 12) * 30 + minute * 0.5;

  document.getElementById("second").style.transform = `rotate(${secondDeg}deg)`;
  document.getElementById("minute").style.transform = `rotate(${minuteDeg}deg)`;
  document.getElementById("hour").style.transform = `rotate(${hourDeg}deg)`;

  const digitalTime = now.toLocaleTimeString('en-GB', { hour12: false });
  document.getElementById("digitalTime").textContent = digitalTime;

  const dateString = now.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  document.getElementById("currentDate").textContent = dateString;
}

setInterval(updateClock, 1000);
updateClock();
