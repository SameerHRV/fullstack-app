import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

interface AppProps {}

const App = ({}: AppProps) => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <h1>Jokes {jokes.length}</h1>

      {jokes.map((joke: any) => (
        <div key={joke.id}>{joke.joke}</div>
      ))}
    </div>
  );
};

export default App;
