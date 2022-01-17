import React from 'react';
import SideBar from './SideBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import TopBar from './TopBar';
import ContentRowMovies from './ContentRowMovies';
import ContentRowCenter from './ContentRowCenter';
import Chart from './Chart';

/* import GenresInDb from './GenresInDb' */

function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <div className='content'>
            <TopBar />
            <ContentRowMovies />
            {/* Inicio de campo de muestra */}
            <ContentRowCenter />
					  <Chart />
            {/* Fin de campo de muestra */}
            <Footer />
          </div>
        </div>
    </React.Fragment>
  );
}

export default App;
