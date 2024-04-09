const startCounter = () => {
  const startTime = new Date().getTime();
  const counterElement = document.getElementById("counter");

  const updateCounter = () => {
    const currentTime = new Date().getTime();
    const passedTime = Math.floor((currentTime - startTime) / 1000);
    counterElement.innerText = "Tempo trascorso: " + passedTime + " secondi";
    sessionStorage.setItem("startTime", startTime);
  };

  setInterval(updateCounter, 1000);
};

window.onload = startCounter;
