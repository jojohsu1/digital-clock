//cache the DOM
const $digitalClock = document.querySelector('.digital-clock');

const setClock = _ => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (hours < 10) { hours = `0${hours}` }
    if (minutes < 10) { minutes = `0${minutes}` }
    if (seconds < 10) { seconds = `0${seconds}` }
    let markup = `
      <span id='hour'>${hours}</span>
      <span id='colon'>:</span>
      <span id='minute'>${minutes}</span>
      <span id='colon'>:</span>
      <span id='second'>${seconds}</span>
    `;
    $digitalClock.innerHTML = markup;
}

setInterval(setClock, 1000);