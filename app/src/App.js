// Application entrypoint
import React, { useEffect, useState } from "react";
import axios from "axios";
import SelectOption from "./components/SelectOption";

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieList, setMovieList] = useState([]);

  const reqConfig = {
    url: "/movie/popular",
    baseURL: "https://api.themoviedb.org/3/",
    method: "get",
    params: {
      api_key: "1c27e642d8cedef632716f85732ec043",
    },
  };

  const getMovieData = async () => {
    const { data } = await axios(reqConfig);
    setMovieList(data?.results ?? []);
  };

  const onChangeHander = (movie) => {
    console.log("Onchange called");
    setSelectedMovie(movie);
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div>
      <h3>Movies List</h3>
      <div>Selected Movie: {selectedMovie?.title ?? ""}</div>
      <SelectOption data={movieList ?? []} onChangeHandler={onChangeHander} />
    </div>
  );
};

export default App;
