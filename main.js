const myList = document.querySelector('.myList');
const about = document.querySelector('.about');
const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=> {
    const projects = document.createElement('li');
    projects.textContent = 'Projects';

    myList.insertBefore(projects, about);
});
