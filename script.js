const numerOfFilms = +prompt('Сколько фильмов вы посмотрели?','')



let personalMovieDB ={
    count:numerOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
}

let   a = prompt('Один из последних просмотренных фильмов', ''),
      b = prompt('На сколько оцените его', ''),
      c = prompt('Один из последних просмотренных фильмов',''),
      d = prompt('На сколько оценишь его?','');


      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);

 