import React, { useEffect, useState } from 'react';
import './global.css';
function App() {
  const [items, setItems] = useState([])
  const [json] = useState(false);

  useEffect(() => {
    fetch('https://covid19-brazil-api.now.sh/api/report/v1/countries')
      .then(res => res.json())
      .then(res => {
        setItems(res.data)
        //console.log(JSON.stringify(res));
      });
  }, []);
  return (
    <div className="App">
      <div className="profile-container">
        <ul>
          {items.map((e) => (
            <li key={e}>
              <p>País: {e.country}</p>
              <p>Casos: {e.cases}</p>
              <p>Confirmados: {e.confirmed}</p>
              <p>Mortes: {e.deaths}</p>
              <p>Recuperados: {e.recovered }</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
