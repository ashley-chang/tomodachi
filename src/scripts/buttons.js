function buttons() {
  const optionArray = document.getElementsByClassName('option');
  const startingOption = optionArray[0];
  let selectModeOn = false;
  let activeIndex = null;
  let chosen;

  const buttonEnter = document.getElementById('button-enter');
  const buttonSelect = document.getElementById('button-select');
  const buttonCancel = document.getElementById('button-cancel');

  buttonSelect.addEventListener('click', () => {
    if (!selectModeOn) {
      selectModeOn = true;
      startingOption.classList.toggle('active');
      // Start at beginning
      activeIndex = 0;
    } else {
      // Cycle through options
      optionArray[activeIndex].classList.toggle('active');
      activeIndex += 1;

      // Reset to beginning if cycled through all options
      if (activeIndex >= optionArray.length) {
        activeIndex = 0;
      }
      optionArray[activeIndex].classList.toggle('active');
    }
  });

  buttonEnter.addEventListener('click', () => {
    if (selectModeOn) {
      [chosen] = document.getElementsByClassName('active');
      chosen.classList.toggle('active');
      console.log(chosen);
      selectModeOn = false;
      activeIndex = null;
      chosen = null;
    } else {
      // Not choosing any menu options
      // display time
    }
  });

  buttonCancel.addEventListener('click', () => {
    if (selectModeOn) {
      [chosen] = document.getElementsByClassName('active');
      chosen.classList.toggle('active');
    }
    selectModeOn = false;
  });
}

export default buttons;
