const candles = document.getElementsByClassName("candle");
const fires = document.getElementsByClassName("fire");



for (let i = 0; i < candles.length; i++) {

    candles[i].addEventListener("mouseenter", e => {
        fires[i].classList.toggle("active");
    });
}
