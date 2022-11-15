import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Info from './Page/Info';
import Home from './Page/Home';
import Course from './Page/Course';
import Booking from './Page/Booking';
import Review from './Page/Review';
import Header from './Page/Header';
import Footer from './Page/Footer';



function App() {
  return (
    <div className="App">
      < Header />

      <Routes> 
          <Route path='/' element={<Home />}> </Route>
          <Route path='/info' element={<Info />}> 
          <Route path='course' element={<Course />} /></Route>
          <Route path='/booking' element={<Booking />}> </Route>
          <Route path='/review' element={<Review />}> </Route>
      </Routes> 

    <Footer />


    </div>
  );
}

export default App;
