import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";
import Checkout from './pages/Checkout';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import { publicRoutes } from './routes/publicRoutes';
function App() {
  return (
    <>
      <Header />
      <Routes>
        {publicRoutes?.map(({path, Comment},index)=>(
          <Route path={path} element={<Comment/>} key={index}/>
        ))}
        <Route path='/checkout'element={
        <RequireAuth>
          <Checkout/>
        </RequireAuth>}/>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </>
  );
}

export default App;
