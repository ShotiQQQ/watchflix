import {useEffect, useState} from 'react';
import axios from "axios";
export const usePopularFilms = () => {
  const [popularFilms, setPopularFilms] = useState(null);

  useEffect(() => {
    axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1', {
      headers: {
        'X-API-KEY': 'd14231b5-13fa-433d-8560-dbccf8ac2cae',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setPopularFilms(res.data.films);
      })
      .catch(err => console.log(err))
  }, [])

  return [popularFilms];
};
