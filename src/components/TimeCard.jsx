import React from 'react'
import {Card} from './Card'
import '../styles/TimeCard.css'

function TimeCard(props) {
    var list = props.list
    return (
        <div className='time-cards'>
            {list.map((product) =>
                    <Card
                        activity={product.activity}
                        hour={product.hour}
                        week={product.week}
                        back={product.back}
                        ima={product.ima}
                    />)}
        </div>
    )
}

export { TimeCard }