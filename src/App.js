
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Info from './Page/Info';
import Home from './Page/Home';
import Course from './Page/Course';
import Booking from './Page/Booking';
import Review from './Page/Review';
import Header from './Page/Header';
import Footer from './Page/Footer';
import Place from './Page/Place';
import Dogway from './Page/Dogway';
import School from './Page/School';
import Register from './Page/Register';
import Login from './Page/Login';
import Glogin from './Page/Glogin';

import './Database/firebase';
import User from './Page/User';
import Parents from './Page/Parents';
import Child from './Page/Btn';
import {firestore} from "./Database/firebase";

function App() {
  return (
    <div className="App">
      < Header />



       <Routes> 
          
          
          <Route path='/glogin' element={<Glogin />}> </Route>
          <Route path='/user' element={<User />}> </Route>

          <Route path='/parents' element={<Parents />}> </Route>
          <Route path='/child' element={<Child />} > </Route>
          </Routes> 

      <Routes> 
          <Route path='/' element={<Home />}> </Route>
          <Route path='/info' element={<Info />} > 
          <Route path='course' element={<Course />}/>
          <Route path='place' element={<Place />} /> </Route>
          <Route path='/course' element={<Course />} />
          <Route path='/place' element={<Place />} />
          <Route path='/booking' element={<Booking />}> </Route>
          <Route path='/review' element={<Review />}> </Route>
          <Route path='/dogway' element={<Dogway />}> </Route>
          <Route path='/school' element={<School />}> </Route>
          <Route path='/register' element={<Register />}> </Route>
          <Route path='/login' element={<Login />}> </Route>
      </Routes> 

    <Footer />


    </div>
  );
}

export default App;
