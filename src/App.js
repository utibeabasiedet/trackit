import React from 'react';
import './App.css';
import Brandpic from './Components/Brandpic';
import Nav from './Components/Nav';
import About from './Components/Our services/About';
import Firstdiv from './Components/Our services/Firstdiv'
import Content from './Components/Our Courses/Content';
import Footer from './Components/Our Courses/Footer';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

function App() {
  return (
    <div>
        <Nav />
        <Brandpic />
        <Firstdiv />
        <About />
        <Content />
        <Footer />
    </div>
  )
}

export default App;