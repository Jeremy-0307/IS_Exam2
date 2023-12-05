import React, {useEffect, useState} from 'react'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
       setData(Object.values(data)[0]);
      }
    )
  }, []);
  console.log(data);
  return (
    <div>
    {data.map((d,index) => (
      <div key={index}>
      {d}
      </div>
    ))}
    </div>
  );
}

export default App;
