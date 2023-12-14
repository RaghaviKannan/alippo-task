import React, { useEffect, useState } from "react";
import Table from "./Table";

interface ApiDataObject {
  id: number;
  name: string | null;
  age: number | null;
  city: string | null;
  pinCode: string | null;
}

const App: React.FC = () => {
  const [apiData, setApiData] = useState<ApiDataObject[]>([]);

  useEffect(() => {
    fetch("https://assets.alippo.com/catalog/static/data.json")
      .then((response) => response.json())
      .then((data) => setApiData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <h1>API Data Table</h1>
      {apiData.length > 0 ? <Table data={apiData} /> : <p>Loading data...</p>}
    </div>
  );
};

export default App;
