/* global data */
/* exported data */
var $imgUrl = document.querySelector('input[id="photoUrl"]');
var $formSubmit = document.querySelector('form');
var $inputTitle = document.querySelector('input[id=title]');
var $textArea = document.querySelector('textarea');
var $setImg = document.querySelector('img');
var $ul = document.querySelector('ul');


$imgUrl.addEventListener('input', changeImg);

function changeImg(event) {
  $setImg.setAttribute('src', event.target.value);
}

$formSubmit.addEventListener('submit', logForm);
function logForm(event) {
  event.preventDefault();
  var formObject = {
    title: $inputTitle.value,
    photoUrl: $imgUrl.value,
    notes: $textArea.value,
    entryId: data.nextEntryId
  };
  if (data.editing !== null){
    for (var k = 0; k < data.entries.length; k++) {
      if (data.editing === data.entries[k].entryId) {
        var changeObject = {
          title: $inputTitle.value,
          photoUrl: $imgUrl.value,
          notes: $textArea.value,
          entryId: data.entries.length - k
        }
        data.entries.splice(k, 1, changeObject)
        var $findLi = document.querySelectorAll('li')
        $findLi[k].replaceWith(entryDOM(changeObject))
        data.editing = null;
      }
    }
  } else {
      data.nextEntryId += 1;
      data.entries.unshift(formObject);
      $setImg.setAttribute('src', 'images/placeholder-image-square.jpg');
      $formSubmit.reset();
      $ul.prepend(entryDOM(formObject));
    }
   switchViews("entries");
   
}

function entryDOM(entry) {
    var $icon = document.querySelectorAll('i');
    for (var i = 0; i < $icon.length; i++) {
      $icon[i].setAttribute("EntryId", $icon.length - i)
      $icon[i].addEventListener('click', function () {
        switchViews(event.target.getAttribute('data-view'))
      })
    }
  var $createLi = document.createElement('li');
  var $createDivData = document.createElement('div');
  var $createDivRow = document.createElement('div');
  var $createImg = document.createElement('img');
  var $createDivColHalf = document.createElement('div');
  var $createH2 = document.createElement('h2');
  var $createP = document.createElement('p');
  var $justifyDiv = document.createElement('div');
  var $createIcon = document.createElement('i');
  $createIcon.setAttribute('class', 'fas fa-pen');
  $createIcon.setAttribute('data-view', 'entry-form')
  $createLi.appendChild($createDivData);
  $createDivData.setAttribute('data-view', 'entries');
  $createDivData.appendChild($createDivRow);
  $createDivRow.setAttribute('class', 'row');
  $createDivRow.appendChild($createImg);
  $createImg.setAttribute('src', entry.photoUrl);
  $createImg.setAttribute('height', '400px');
  $createImg.setAttribute('class', 'column-half');
  $createImg.setAttribute('class', 'column-half');
  $createDivRow.appendChild($createDivColHalf);
  $createDivColHalf.setAttribute('class', 'column-half');
  $createDivColHalf.appendChild($justifyDiv);
  $justifyDiv.setAttribute('class', 'justify-space row')
  $justifyDiv.appendChild($createH2);
  $createH2.textContent = entry.title;
  $justifyDiv.appendChild($createIcon);
  $createDivColHalf.appendChild($createP);
  $createP.textContent = entry.notes;

  $ul.appendChild($createLi);
  return $createLi;
}

var $entriesPage = document.querySelector('div[data-view="entries"]');
var $newButton = document.querySelector('.newButton');
var $newEntry = document.querySelector('div[data-view="entry-form"]');
var $entriesLink = document.querySelector('a[href="#entry-form"]');

$newButton.addEventListener('click', handleViewNavigation);
$entriesLink.addEventListener('click', handleViewNavigation)

function handleViewNavigation(event){
  switchViews(event.target.getAttribute('data-view'));
}

var $viewElements = document.querySelectorAll('div[data-view]');

function switchViews(view) {
  for (var i = 0; i < $viewElements.length; i++) {
    if ($viewElements[i].getAttribute('data-view') !== view) {
      $viewElements[i].className = 'hidden';
    } else {
      $viewElements[i].className = '';
      data.view = $viewElements[i].getAttribute('data-view');
    }
  }
  if ($ul.childElementCount === 0) {
    $noItems.className = 'center-text';
  } else {
    $noItems.className = 'center-text hidden';
  }

}

window.addEventListener('DOMContentLoaded', appendDOM);
var $noItems = document.querySelector('.center-text');


function appendDOM() {
  for (var i = 0; i < data.entries.length; i++) {
    entryDOM(data.entries[i]);
  }
  switchViews(data.view);
  var $icon = document.querySelectorAll('i');
  for(var i = 0; i < $icon.length; i++){
    $icon[i].setAttribute("EntryId", $icon.length - i)
    $icon[i].addEventListener('click', function(){
      switchViews(event.target.getAttribute('data-view'))
      console.log("$icon[i]:", $icon[0].attributes.entryid)
    })
  }
  var $liAll = document.querySelectorAll('li');
  for (var y = 0; y < $liAll.length; y++) {
    $liAll[y].setAttribute('position', $liAll.length - y)
  }
}

$entriesPage.addEventListener('click', function () {
  if (event.target.tagName === 'I') {
    for (var x = 0; x < data.entries.length; x++){
      if (data.entries[x].entryId === parseInt(event.target.attributes.EntryId.value)){
        $inputTitle.value = data.entries[x].title;
        $imgUrl.value = data.entries[x].photoUrl
        $textArea.value = data.entries[x].notes
        $setImg.setAttribute('src', data.entries[x].photoUrl);
        data.editing = parseInt(event.target.attributes.EntryId.value)
      }
    }
  }
})
