console.log('-=Start sl ext=-');

setInterval(() => {
  const twichPointsButton = document.querySelector('.tw-button');

  if (twichPointsButton) {
    console.log({ twichPointsButton });
    twichPointsButton.click();
  }

  const wasdButtons = document.querySelectorAll('.gifts-info__buttons');
  console.log({ wasdButtons });

  if (wasdButtons) {
    const dron = wasdButtons[0];

    if (dron.nextElementSibling.innerText.indexOf('10 COINS') && dron.getAttribute('class').indexOf('disabled') > -1) {
      console.log({ dron });
      dron.click();
    }

    const banka = wasdButtons[2];

    if (banka.getAttribute('class').indexOf('disabled') > -1) {
      console.log({ banka });
      banka.click();
    }
  }
}, 5000);
