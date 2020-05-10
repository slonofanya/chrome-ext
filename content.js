console.log('-=Start sl ext=-');

setInterval(() => {
  const twichPointsButton = document.querySelector('.tw-button');

  if (twichPointsButton) {
    console.log({ twichPointsButton });
    twichPointsButton.click();
  }
}, 5000);
