import React from 'react';
import {Photo} from './Photo';

export const Column = ({photoArr}) => {
    return(
       <div className='col'>
       {photoArr.map(p => <Photo photoUrl = {p.url} albumNumber = {p.albumId}  title = {p.title} key = {p.id}/>)}
    </div>
    )
}