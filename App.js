import React, {useState, useEffect} from 'react';
import './App.css';
import {photosAPI} from './api/api';
import {Column} from './components/Column';
import styled from 'styled-components';

const PhotosContainer = styled.div`
display: grid;
grid-gap: 1em;
grid-template-columns: 1fr;
padding: 10px;

.col {
  padding: 20px;
}

.col img {
  max-width: 100%;
  display: block;
}


@media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr; 
}

@media screen and (min-width: 992px) and (max-width: 1299px) {
    grid-template-columns: 1fr 1fr 1fr;
}

@media screen and (min-width:  767px) and (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
}
`;

const AppContainer = styled.div`
margin:0;
font-family: Arial;
background-color: #f5f5dc;

.data {
  height: 150px;
  display:flex;
  flex-direction: column;
  text-align: center;
}
`;

let  App = (props) => {
  let [initialization, setInitialization] = useState(false);
  let [photos, setPhotos] = useState(null);


 let getPhotos = async () => {
    let data = await photosAPI.getPhotos();
    setPhotos(data);
    setInitialization(true);
  }

  useEffect(() => {
      getPhotos();
  },[]);

  return (
    <div className="App">
      <AppContainer>
      {!initialization ? <h1>Идёт загрузка...</h1> :
       <div className="data">
         <h1>Вывод данных в цикле</h1>
        <p>Количество записей: 20</p>
        </div>
      }
      {initialization &&
        <PhotosContainer>
          <Column photoArr={photos.firstCol} />
          <Column photoArr={photos.secondCol} />
          <Column photoArr={photos.thirdCol} />
          <Column photoArr={photos.fourthCol} />
        </PhotosContainer>
      }
      </AppContainer>
    </div>
  );
}

export default App;
