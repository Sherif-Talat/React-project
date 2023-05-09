
import React from 'react';
import Header  from '../component/header'
import Footer from '../component/footer'
import MainContent from '../component/Main-content'


const Home = () => {
  return (
    <div>
        
      <Header />

      
    <MainContent  pageName= "Home"  Designer = "  Designed by sherif Talat" />
      
    <Footer />


    </div>
  );
}

export default Home;
