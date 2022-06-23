"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMoveiDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const answerFilms = prompt("Один из последних просмотренных фильмов?"),
      answerFilmsBall = prompt("На сколько оцените его?");

personalMoveiDB.movies[answerFilms] = answerFilmsBall;

console.log(personalMoveiDB);   