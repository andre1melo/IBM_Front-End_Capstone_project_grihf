import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookingConsultation from "./Components/BookingConsultation";
import ReviewForm from "./Components/ReviewForm/ReviewForm"
import Layout from "./Components/Landing_Page/Landing_Page";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Sign_Up/Sign_Up";
import Root from "./Page/Root";
import ProfileCard from "./Components/ProfileCard/ProfileCard"
import ReportsLayout from "./Components/ReportsLayout/ReportsLayout"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Layout /> },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "instant-consultation",
          element: <BookingConsultation />,
        },
        {
          path: "reviews",
          element: <ReviewForm />
        },
        {
          path: "profile",
          element: <ProfileCard />
        },
        {
            path: "report",
            element: <ReportsLayout />
          },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
}

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <> </>
  );
}

export default App;
*/
/*
import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing_Page from './Components/Landing_Page/Landing_Page';

import Login from './Components/Login/Login';
import Sign_Up from './Components/Sign_Up/Sign_Up';
//import InstantConsultationBooking from './Components/InstantConsultation/InstantConsultationBooking';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';  
import BookingConsultation from './Components/BookingConsultation';  
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
        
          <Navbar/>
              <Routes>
              <Route path="/" element={<Landing_Page/>}/>
              <Route path="/Login" element={<Login/>}/>
              <Route path="/Sign_Up" element={<Sign_Up/>}/>
              <Route path="/InstantConsultation" element={<InstantConsultation/>} />
              <Route path="/BookingConsultation" element={<BookingConsultation/>} />
              </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;*/