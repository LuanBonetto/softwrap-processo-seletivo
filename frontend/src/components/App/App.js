import React from 'react';
import ContentTable from '../Table';

export default function App() {
  // const [repositories, setRepositories] = useState([]);

  // useEffect(async () => {
  //   const response = await fetch('https://api.github.com/users/diego3g/repos');
  //   const data = await response.json();

  //   setRepositories(data);
  // }, []);

  return (
    <ContentTable />
  );
}
