import React from 'react';
import axios from 'axios';

import './App.css';

const fetchTestDatas = function () {
    axios.get({url: '/api/v1/tests', headers: { "Access-Control-Allow-Origin": "http://localhost:3000" }})
      .then(res => res.json())
      .then((response) => { console.log("Test datas response", response); }).catch((error) => {
          debugger;
  })
      // .catch((error) => { console.log("Error while fetching test datas", error); })
}

function App() {
  return (
      <div className="App">
        <button onClick={fetchTestDatas}>
          Fetch Test Datas
        </button>
      </div>
  );
}

export default App;
