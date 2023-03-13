import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";
import { publicRoutes } from './routes/publicRoutes';
function App() {
  return (
    <>
      <Header />
      <Routes>
        {publicRoutes?.map(({path, Comment},index)=>(
          <Route path={path} element={<Comment/>} key={index}/>
        ))}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
