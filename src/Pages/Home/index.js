import { useEffect, useState } from "react";
import api from "../../services/api";

//URL: https://api.themoviedb.org/3/movie/now_playing?api_key=d330c193d76504d0b0c0a8780235060c&language=pt-BR

function Home(){

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {

    async function loadFilmes(){
      const response = await api.get("movie/now_playing", {
        params:{
          api_key: "d330c193d76504d0b0c0a8780235060c",
          language: "pt-BR",
          page: 1,
        }
      })
      console.log(response);
    }

    loadFilmes();

  },[])

  return(
    <div>
      <h1>BEM VINDO A HOME</h1>
    </div>
  )
}

export default Home;