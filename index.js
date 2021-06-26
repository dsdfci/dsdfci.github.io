// Grab DOM elements
const moreLinks = document.getElementById('sub-links');
const showMoreButton = document.getElementById('show-more');
const hideMoreButton = document.getElementById('hide-more');
const hiddenLinks = document.querySelectorAll('.beyond-5');
const showAllButtons = document.querySelectorAll('.show-all');
const collapseButtons = document.querySelectorAll('.collapse-list');
const navContainer = document.querySelector('nav');
const navLinks = navContainer.getElementsByClassName('nav-item');
const searchItems = document.querySelector('.searchList');
const liGroup = searchItems.querySelectorAll('li');
const inputField = document.getElementById('search');
const noRecord = document.querySelector('.no-record');
const closeBtn = document.querySelector('.close-search');

// Initialize function executed upon DOM loading
const initialize = () => {
  moreLinks.style.display = 'none';
  hideMoreButton.style.display = 'none';
  hiddenLinks.forEach(link => link.style.display = 'none');
  collapseButtons.forEach(button => button.style.display = 'none');
  showAllButtons.forEach(button => button.style.display = 'block');
  liGroup.forEach(li => li.style.display = 'none');
  noRecord.style.display = 'none';
  closeBtn.style.display = 'none';
};

// Invoke initialize function
initialize();

// function to handle onkeyup event for search feature
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

// handle click event on the plus and minus buttons in box 4
const handleShowMoreButtonClick = (e) => {
  if (e.target.id == 'show-more') {
    moreLinks.style.display = 'block';
    hideMoreButton.style.display = 'block';
    e.target.style.display = 'none';
  } else {
    moreLinks.style.display = 'none';
    showMoreButton.style.display = 'block';
    e.target.style.display = 'none';
  } 
};

// Add event listener on the plus and minus buttons
showMoreButton.addEventListener('click', (e) => handleShowMoreButtonClick(e));
hideMoreButton.addEventListener('click', (e) => handleShowMoreButtonClick(e));

// Handle click show all button
const handleShowAllButtonClick = (e) => {
  const collapseBtn = e.target.parentElement.parentElement.childNodes[15];
  const moreLinks = e.target.parentElement.parentElement.childNodes[13];
  moreLinks.style.display = 'block';
  e.target.parentElement.style.display = 'none';
  collapseBtn.style.display = 'block';
};

// Add event listener on the clicked show all button
showAllButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    handleShowAllButtonClick(e);
  });
});

// Handle collapse button click
const handleCollapseListButtonClick = (e) => {
  const showAll = e.target.parentElement.parentElement.childNodes[11];
  const moreLinks = e.target.parentElement.parentElement.childNodes[13];
  moreLinks.style.display = 'none';
  e.target.parentElement.style.display = 'none';
  showAll.style.display = 'block';
};

// Add event listener on the collapse button clicked
collapseButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    handleCollapseListButtonClick(e);
  });
});