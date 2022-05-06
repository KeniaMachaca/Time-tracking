import React from 'react'

import '../styles/Card.css'

function Card(props) {
    const activity = props.activity
    const hour = props.hour
    const week = props.week
    // const back = props.back + 'card-container'
    // const ima =  props.ima + 'card-container__top-img'
    
  return (
    <div className='card-container'>
        
        <div className='card-container__top'>
            <div className = 'card-container__top-img' ></div>
        </div>
        <div className='card-container__body'>
            <div className='card-container__body-top'>
                <div>{activity}</div>
                <div></div>
            </div>
            <div className='card-container__body-bottom'>
                <span>{hour}</span>
                <span>{week}</span>
            </div>
        </div>
        
        

    </div>
  )
}

export { Card }