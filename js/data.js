/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', logBefore);

function logBefore(event) {
  var entriesData = JSON.stringify(data);
  localStorage.setItem('entries-data', entriesData);
}

window.addEventListener('DOMContentLoaded', appendDOM)

function appendDOM() {
  for (var i = 0; i < data.entries.length; i++) {
    entryDOM(data.entries[i]);
  }
}