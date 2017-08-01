import { performImgurSearch } from './request';

document.querySelector('#search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = e.target.querySelector('input').value;
    performImgurSearch(searchTerm, (value) => console.log(value))
})