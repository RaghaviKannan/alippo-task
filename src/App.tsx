import React, { useEffect, useState } from "react";
import Table from "./Table";
import TableRow from "./TableRow";

const App: React.FC = () => {
  const [apiData, setApiData] = useState<TableRow[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://assets.alippo.com/catalog/static/data.json"
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();
        setApiData(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  return (
    <div className="App">
      <h1>API Data Table</h1>
      {loading && <p>Loading data...</p>}
      {!loading && error && <p>Error fetching data: {error}</p>}
      {!loading && !error && apiData.length > 0 ? (
        <Table data={apiData} />
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default App;
