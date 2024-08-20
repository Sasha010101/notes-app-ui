let main_empty_notes_el = document.querySelector('.empty_state');
let notes = localStorage.getItem('notes');
+(function checkIsNotes() {
  if (notes) {
    main_empty_notes_el.style.display = 'none';
    notes = JSON.parse(notes);
  }
})();
