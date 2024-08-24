let main_empty_diary_el = document.querySelector('.empty_state');
// let notes = localStorage.getItem('notes');

// +(function checkIsNotes() {
//   if (notes) {
//     main_empty_notes_el.style.display = 'none';
//     notes = JSON.parse(notes);
//   }
// })();
//a few categories : social medias, events, how my day was
let diary_list = [
  {
    date: '19.08.2024',
    time: '20:25',
    color: '#FD99FF',
    id: new Date().getTime(),
    category: 'work',
    title: 'UI concepts worth exsistin',
    body: '1,349 inspirational designs, illustrations, and graphic elements from the world’s best designers. Want more inspiration? Browse our search results...',
  },
  {
    date: ' 20.08.2024',
    time: '17:52',
    color: '#FF9E9E',
    id: new Date().getTime() + 2,
    category: 'routine',
    title: 'Book Review : The Design of Everyday Things by Don',
    body: 'You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.',
  },
  {
    date: ' 17.08.2024',
    time: '17:56',
    id: new Date().getTime() + 2,
    color: '#91F48F',
    category: 'health',
    title: 'Animes produced by Ufotable',
    body: "The best anime 'Naruto' ",
  },
  {
    date: ' 15.09.2023',
    time: '01:56',
    color: '#FFF599',
    id: new Date().getTime() + 3,
    category: 'anime',
    title: 'Mangas planned to read',
    body: "'Start one of the manga on the You Should Read This Manga list before April 30th and get a time-limited badge for your profile! '",
  },
  {
    date: ' 11.01.2021',
    time: '14:51',
    color: '#9EFFFF',
    id: new Date().getTime() + 4,
    category: 'twits',
    title: 'Awesome tweets collection',
    body: 'I hope this email finds you in the paradise city where the grass is green and the girls are pretty.',
  },
  {
    date: ' 15.10.2014',
    time: '10:46',
    color: '#B69CFF',
    id: new Date().getTime() + 5,
    category: 'news',
    title: 'List of free & open source apps',
    body: "'This article is about software free to be modified and distributed. For examples of software free in the monetary sense, see List of freeware.' ",
  },
  {
    date: ' 13.10.2024',
    time: '17:46',
    color: '#2E81CC',
    id: new Date().getTime() + 6,
    category: 'films',
    title: 'Watch the avangers : Endgame',
    body: 'I so exited! I really want to watch this movie.',
  },
  {
    date: ' 19.08.2024',
    time: '13:46',
    color: '#FF4500',
    id: new Date().getTime() + 7,
    category: 'events',
    title: 'Some funny event',
    body: 'I so exited! I really want to watch this movie.',
  },
];
let diaryListElement = document.querySelector('#diary_list');
function generateNoutes() {
  diary_list.forEach(({ date, time, color, id, category, title }) => {
    diaryListElement.insertAdjacentHTML(
      'beforeend',
      `<li>
      <div id='${id}' style="background-color: ${color};" class= "diary-item">
        <h3 class="diary-item-title">${title}</h3>
        <div class="date_and_category_wrapper">
          <p class="diary-note-category">${category}</p>
          <p class="diary-note-date">${date}</p>
        </div>
      </div>
    </li>`
    );
  });
}
generateNoutes();

//  let notes = JSON.parse(localStorage.notes);
//  notes.forEach(({ title, id, color }) =>
//    document
//      .querySelector('body')
//      .insertAdjacentHTML(
//        'beforeend',
//        `<p class="note"  style="background: ${color};" id="${id}">${title}</p>`
//      )
//  );
