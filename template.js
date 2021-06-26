// Grab DOM elements while the DOM loads
const navContainer = document.querySelector('nav');
const navLinks = navContainer.getElementsByClassName('nav-item');
const noRecord = document.querySelector('.no-record');
const searchItems = document.querySelector('.searchList');
const liGroup = searchItems.querySelectorAll('li');
const inputField = document.getElementById('search');
const closeBtn = document.querySelector('.close-search');

const init = () => {
  liGroup.forEach(li => li.style.display = 'none');
  noRecord.style.display = 'none';
  closeBtn.style.display = 'none';
}

init();

// Function scoping navigation handler logic
const navHandler = () => {
  Array.from(navLinks).forEach(link => {
    link.addEventListener('click', (e) => {
      currentActiveLink = document.getElementsByClassName('nav-item active-link');
      currentActiveLink[0].classList.remove('active-link');
      link.classList.add('active-link');
    });
  });
};

// Evoke/run the navhandler function
navHandler();

// Handle search logic
const handleSearch = () => {
  let filter, a, txtValue;
  filter = inputField.value.toUpperCase();
  
  for (i = 0; i < liGroup.length; i += 1) {
    a = liGroup[i].getElementsByTagName('a')[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      liGroup[i].style.display = '';
    } else {
      liGroup[i].style.display = 'none';
    }
    closeBtn.style.display = 'block';
  }
};

// Add event listener to search area
inputField.onkeyup = (e) => {
  handleSearch();
};

// Function to handle the closeSearch button click
const handleCloseSearchClick = (e) => {
  liGroup.forEach(li => li.style.display = 'none');
  e.target.style.display = 'none';
  inputField.value = '';
};

closeBtn.onclick = e => handleCloseSearchClick(e);