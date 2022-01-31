import React from 'react'
import './list.css'
function List() {
  const transaction = [
    {id:1, type:"Income", category: 'Salary', amount: 50, date: new Date()},
    {id:2, type:"Expence", category: 'Buy Car', amount: 100, date: new Date()},
    {id:3, type:"Income", category: 'Salary', amount: 150, date: new Date()}
  ]
    return (
        <div className='list__container'>
            <div className='list__wrapper'>
                <div className='main__list__content'>
              <div className='image__wrapper'>
                 <img src='' alt='icon__pic'/>
              </div>
              <div className='list__content'>
                <div className='title'>the title</div>
                <small>5100 - 2022-12-17</small>
              </div>
              </div>
              <div className='delete'>del</div>
            </div>
        </div>
    )
}

export default List
