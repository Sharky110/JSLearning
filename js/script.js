'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//1
//const adDivs = document.getElementsByClassName('promo__adv');
//adDivs[0].remove();

const movieList = document.querySelector(".promo__interactive-list");
const btn = document.querySelector('button');
const backgroundDivs = document.querySelector('.promo__bg');
const input = document.querySelector('.adding__input');
const genreDivs = document.querySelector('.promo__genre');
const adDivs = document.querySelectorAll('.promo__adv img');


adDivs.forEach(item => {
    item.remove();
});

//2
//const genreDivs = document.getElementsByClassName('promo__genre');
//genreDivs[0].textContent = 'Драма';


genreDivs.textContent = 'Драма';

//3
//const backgroundDivs = document.getElementsByClassName('promo__bg');
//backgroundDivs[0].style.cssText = 'background: url("../img/bg.jpg") top center/cover no-repeat;';



backgroundDivs.style.backgroundImage = 'url("../img/bg.jpg")';

//4 & 5
//const movieLists = document.getElementsByClassName('promo__interactive-item');
//movieDB.movies.sort();
//for(let i=0;i<movieDB.movies.length;i++)
//{
//    movieLists[i].innerHTML = `${i+1}. ` + movieDB.movies[i] + '<div class="delete"></div>';
//}

refreshMovieDB();

function refreshMovieDB(){
    movieList.innerHTML = "";

    movieDB.movies.sort();
    movieDB.movies.forEach((film, i) =>{
        movieList.innerHTML += `
        <li class="promo__interactive-item">${i+1}. ${film}
            <div class="delete"></div>
        </li>
        `;
    });
}
deleteMovieEventHandler();
addNewMovie();

function addNewMovie(){
    btn.addEventListener('click', (event)=>{
        event.preventDefault();
        const cuttedName = input.value.length > 21 
            ? input.value.substring(0,21) + '...' 
            : input.value;
        movieDB.movies.push(cuttedName);
        refreshMovieDB();
        deleteMovieEventHandler();
    });
}

function deleteMovieEventHandler(){
    const delIcon = document.querySelectorAll('.delete');
    delIcon.forEach((item) => {
        item.addEventListener('click', (event) =>{
            item.parentElement.remove();
        });

    });
}