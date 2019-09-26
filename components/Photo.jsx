import React from 'react';
import styled from 'styled-components';

const PhotoContainer = styled.div`
background-color: #ffffff;
margin-bottom:20px;
border-radius: 5px;
box-shadow: 0 0 10px rgba(0,0,0,0.5);

div {
    padding-left: 20px;
    padding-bottom: 20px;
}
`;

export const Photo = ({photoUrl, title, albumNumber}) => {
    return(
      <PhotoContainer>
          <img src={photoUrl} alt='' />
          <div>
              <p>{title}</p>
              <p>Album number: {albumNumber}</p>
          </div>
      </PhotoContainer> 
    )
}