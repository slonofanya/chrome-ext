console.log('-=Start sl ext=-');

const isEnabled = el => (el.getAttribute('class') || '').indexOf('disabled') < 0

setInterval(() => {
  const twichPointsButton = document.querySelector('[aria-label="Claim Bonus"]');

  if (twichPointsButton) {
    console.log({ twichPointsButton });
    twichPointsButton.click();
  }

  const wasdButtons = document.querySelectorAll('.gifts-info__buttons button');

  if (wasdButtons) {
    const dron = wasdButtons[0];

    if (dron) {
	    const has10 = dron.nextElementSibling.innerText.indexOf('10 COINS') > -1;
	    const isDronEnabled = isEnabled(dron)

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
