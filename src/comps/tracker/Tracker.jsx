import React from 'react'
import './tracker.css'
import List  from '../list/List'
// import Zoom from 'react-reveal'
function Tracker() {
    return (
        <div className='tracker__container'>
           <div className='tracker__wrapper'>
               <h2>Spender Tracker</h2>
               <small>Power by Speechy</small>
               <div className='tracker__content'>
                   <h2>Total Balance $757</h2>
                   <div className='tracker__text'>
                       <p>Try saying</p>
                       <p>Add Expense for $50 in Category Travel for Thursday</p>
                   </div>
                   <div className='underline'></div>
               </div>
               <div className='other'>
                   <small>Tips</small>
                   <form>
                       <div className='form__wrapper'>
                           <div className='input__wraper'>
                               <label>Category</label>
                               <select>
                                   <option>fcshflsuifh</option>
                                   <option>fcshflsuifh</option>
                                   <option>fcshflsuifh</option>
                                   <option>fcshflsuifh</option>
                                </select>                     
                           </div>
                           <div className='input__wraper'>
                               <label>Income</label>
                               <select>
                                   <option>fcshflsuifh</option>
                                   <option>fcshflsuifh</option>
                                   <option>fcshflsuifh</option>
                                   <option>fcshflsuifh</option>
                                </select>                           
                           </div>
                       </div>
                       <div className='form__wrapper'>
                       <div className='input__wraper'>
                               <label>Amount</label>
                               <input type='number'/>
                           </div>
                           <div className='input__wraper'>
                               <label>Date</label>
                               <input type='date' />
                           </div>
                       </div>
                          <button className='create'>CREATE</button>
                   </form>
                   <div className='main__list__container'>
                       {/* <Zoom top> */}
                      <List />
                      <List />
                      <List />
                      {/* </Zoom> */}
                   </div>
                   </div>
           </div>
        </div>
    )
}

export default Tracker


