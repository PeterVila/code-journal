/* global data */
/* exported data */
var $imgUrl = document.querySelector('input[id="photoUrl"]');
var $formSubmit = document.querySelector('form');
var $inputTitle = document.querySelector('input[id=title]');
var $textArea = document.querySelector('textarea');
var $setImg = document.querySelector('img');

// Listening for input changes for IMAGE
$imgUrl.addEventListener('input', changeImg);
function changeImg(event) {
  $setImg.setAttribute('src', event.target.value);
}

// Listening for submit event
$formSubmit.addEventListener('submit', logForm);
function logForm(event) {
  event.preventDefault();
  var formObject = {
    title: $inputTitle.value,
    photoUrl: $imgUrl.value,
    notes: $textArea.value,
    nextEntryId: data.nextEntryId + 1
  };
  data.nextEntryId += 1;
  data.entries.unshift(formObject);
  $setImg.setAttribute('src', 'images/placeholder-image-square.jpg');
  $formSubmit.reset();
}

// Put the form 's input values into a new object.
// Add the nextEntryId to the object.
// Increment the nextEntryId on the data model.
// Prepend the new object to the entries in the data model.
// Reset the image preview 's `src'
// attribute.
// Reset the form inputs.
