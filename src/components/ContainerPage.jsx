import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Star} from 'react-feather';

export default function ContainerPage(props){
    return(
      <div>
        <div className='container'>
          <img src=".\src\assets\topgame.png" />
          <div className='Name'>
            <h1>{props.Name}</h1>
            <p>{props.Price}</p>
          </div>
          <p>{props.Place}</p>
          <div className='buttons'>
            <div>
              <Star /> <Star /> <Star /> <Star /> <Star className='gray' />
            </div>
            <button>Забронировать</button>
          </div>
        </div>
      </div>
    )
  }

  