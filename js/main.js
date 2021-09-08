/* global data */
/* exported data */
// var $imgUrl = document.querySelector('input[id="photoUrl"]');
// var $formSubmit = document.querySelector('form');
// var $inputTitle = document.querySelector('input[id=title]');
// var $textArea = document.querySelector('textarea');
// var $setImg = document.querySelector('img');

// // Listening for input changes for IMAGE
// $imgUrl.addEventListener('input', changeImg);
// function changeImg(event) {
//   $setImg.setAttribute('src', event.target.value);
// }

// // Listening for submit event
// $formSubmit.addEventListener('submit', logForm);
// function logForm(event) {
//   event.preventDefault();
//   var formObject = {
//     title: $inputTitle.value,
//     photoUrl: $imgUrl.value,
//     notes: $textArea.value,
//     nextEntryId: data.nextEntryId + 1
//   };
//   data.nextEntryId += 1;
//   data.entries.unshift(formObject);
//   $setImg.setAttribute('src', 'images/placeholder-image-square.jpg');
//   $formSubmit.reset();
// }

//Issue 2 - User can view their entries

function entryDOM(entry){
  var $createLi = document.createElement('li');
  var $createDivData = document.createElement('div');
  var $createDivRow = document.createElement('div');
  var $createImg = document.createElement('img');
  var $createDivColHalf = document.createElement('div');
  var $createH2 = document.createElement('h2');
  var $createP = document.createElement('p');

  $createLi.appendChild($createDivData);
    $createDivData.setAttribute('data-view', 'entries');
    $createDivData.appendChild($createDivRow);
    $createDivRow.setAttribute('class','row');
      $createDivRow.appendChild($createImg);
      $createImg.setAttribute('class','column-half');
      $createDivRow.appendChild($createDivColHalf);
      $createDivColHalf.setAttribute('class','column-half');
        $createDivColHalf.appendChild($createH2);
        $createDivColHalf.appendChild($createP);
  console.log($createLi);
}
entryDOM()
