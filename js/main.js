/* global data */
/* exported data */
var $imgUrl = document.querySelector('input[id="photoUrl');

$imgUrl.addEventListener('input', changeImg)

function changeImg(event){
    console.log(event.target.value);
    var $setImg = document.querySelector('img');
    $setImg.setAttribute('src', event.target.value)
}