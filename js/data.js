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

var leftoverEntries = localStorage.getItem('entries-data');
if (leftoverEntries !== null) {
  data = JSON.parse(leftoverEntries);
}

// Fresh page = same as before
