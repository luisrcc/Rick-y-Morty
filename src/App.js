import { useEffect, useState } from "react";
import './App.css';
import NavBar from "../src/components/NavBar/NavBar";
import Cards from "../src/components/Cards/Cards";
import Pagination from "../src/components/Pagination/Pagination";

function App() {
  const [character, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const url1 = "https://rickandmortyapi.com/api/character";

  const getCharacters = (url) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);        
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () =>{
    getCharacters(info.prev);
  };

  const onNext = () => {
    getCharacters(info.next);
  }

  useEffect(() => {
    getCharacters(url1);
  }, []);

  return (
    <>
      <NavBar brand="Rick and Morry App" />

      <div className="container mt-5">
        <Cards character={character} />
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      </div>
      
    </>
  );
}

export default App;
