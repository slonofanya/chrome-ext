setInterval(() => {
  const twichPointsButton = document.querySelector('[aria-label="Claim Bonus"]');

  if (twichPointsButton) {
    console.log({ twichPointsButton });
    twichPointsButton.click();
  }
}, 5000);
