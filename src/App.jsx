import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import fantasy from "./data/fantasy.json";
import BookList from "./components/BookList";
import { useState } from "react";

const App = () => {
  /* state = {
    isSelected: false,
    asin: null,
    comments: []
  }; */

  const [asin, setAsin] = useState("");

  const [comments, setComments] = useState([]);

  const [isSelected, setIsSelected] = useState(false);

  const [selectedAsin, setSelectedAsin] = useState("");

  const handleClick = asin => {
    setAsin(asin);
    setSelectedAsin(asin);
    setIsSelected(true);
  };

  return (
    <div className="App">
      <MyNav />
      <BookList genre={fantasy} handleClick={handleClick} comments={comments} asin={asin} setComments={setComments} isSelected={isSelected} selectedAsin={selectedAsin} setSelectedAsin={setSelectedAsin} />
    </div>
  );
};

export default App;
