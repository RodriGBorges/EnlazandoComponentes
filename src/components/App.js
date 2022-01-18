import React from 'react';
import SideBar from './SideBar';
import Footer from './Footer';
import TopBar from './TopBar';
import ContentRowMovies from './ContentRowMovies';
import Chart from './Chart';
import LastMovieInDb from './LastMovieInDb';
import GenresInDB from './GenresInDb'
import { Route, Switch } from 'react-router-dom'
import NotFound from './NotFound';

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
            <div className='center'>
              <Switch>
              <Route path='/lastmovie' component={LastMovieInDb}/>
              <Route path='/genres' component={GenresInDB}/>
              <Route path='/content' component={Chart}/>
              <Route component={NotFound}/>
              </Switch>
            </div>
            {/* Fin de campo de muestra */}
            <Footer />
          </div>
        </div>
    </React.Fragment>
  );
}

export default App;
