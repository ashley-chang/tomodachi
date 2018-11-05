function loadButtons(selectedOption) {
  const optionArray = document.getElementsByClassName('option');
  const startingOption = optionArray[0];
  let selectModeOn = false;
  let activeIndex = null;
  let selected;

  // Button color change on press
  const btns = document.getElementsByTagName('button');
  Array.from(btns).forEach((btn) => {
    btn.addEventListener('mousedown', function () {
      this.style.backgroundColor = 'black'; // eslint-disable-line no-param-reassign
    });
    btn.addEventListener('mouseup', function () {
      this.style.backgroundColor = 'white'; // eslint-disable-line no-param-reassign
    });
  });

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
      [selected] = document.getElementsByClassName('active');
      selected.classList.toggle('active');
      selectedOption.value = selected.getAttribute('id'); // eslint-disable-line no-param-reassign
      selectModeOn = false;
      activeIndex = null;
      selected = null;
    } else {
      // Not choosing any menu options
      // display time
    }
  });

  buttonCancel.addEventListener('click', () => {
    if (selectModeOn) {
      [selected] = document.getElementsByClassName('active');
      selected.classList.toggle('active');
    }
    selectModeOn = false;
  });
}

export default loadButtons;
