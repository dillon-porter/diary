const entryForm = document.getElementById('entryForm');
const entriesSection = document.querySelector('#entries');
const entryTextbox = document.querySelector('.entry-textbox');
const entriesNav = document.querySelector('.entries-nav');

let count = 1;
function addEntryToDom(event) {
    event.preventDefault();
    const entryDiv = document.createElement('div'); //created a new div
    entryDiv.className = 'single-entry'; // named it single entry
    entryDiv.innerText = entryTextbox.value;
    entryDiv.style.display = 'none';
    entriesSection.appendChild(entryDiv);
    entryTextbox.value = ''; 
    
    const displayEntryButton = document.createElement('button'); //displays an entry button when the entry is submitted.
    displayEntryButton.className = 'display-entry-button';
    displayEntryButton.innerText = count;
    entriesNav.appendChild(displayEntryButton);

    displayEntryButton.addEventListener('click', function() { //displays the entry text in a block in the bottom div.
        const allEntries = document.querySelectorAll('.single-entry');
        for (let i = 0; i < allEntries.length; i++) {
            allEntries[i].style.display = 'none';  // only shows 1 entry at a time while rotating through the buttons.
        }
        entryDiv.style.display = 'block';
    });

    count++;
}

entryForm.addEventListener('submit', addEntryToDom)

