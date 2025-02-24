import { Route, Routes } from 'react-router-dom';
import Home from './Containers/Home/Home.tsx';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  );
};

export default App;
