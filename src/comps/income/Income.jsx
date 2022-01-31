import React from 'react'
import './income.css'
import { Doughnut } from 'react-chartjs-2'
function Income(props) {
    return (
        <div className='income__container container' style={{borderBottom: props.color}}>
            <div className='income__wrapper'>
                <h2>Income</h2>
                <div className='money'>$12.0</div>
               {/* <Doughnut /> */}
            </div>
        </div>
    )
}

export default Income
