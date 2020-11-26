console.log('-=Start sl ext=-');

const isEnabled = el => (el.getAttribute('class') || '').indexOf('disabled') < 0

setInterval(() => {
  const twichPointsButton = document.querySelector('.tw-button');

  if (twichPointsButton) {
    console.log({ twichPointsButton });
    twichPointsButton.click();
  }

  const wasdButtons = document.querySelectorAll('.gifts-info__buttons button');

  if (wasdButtons) {
    const dron = wasdButtons[0];

    if (dron) {
	    const has10 = dron.nextElementSibling.innerText.indexOf('10 COINS');
	    const isDronEnabled = isEnabled(dron)
	    console.log({ has10, isDronEnabled});

	    if (has10 && isDronEnabled) {
	      dron.click();
	    }
    }

    const banka = wasdButtons[2];

    if (banka) {
	    const isBankaEnabled = isEnabled(banka)

	    if (isBankaEnabled) {
	      banka.click();
	    }
    }
  }
}, 5000);
