/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', logBefore);

function logBefore(event) {
  window.localStorage.setItem('javascript-local-storage', JSON.stringify(data));
}
