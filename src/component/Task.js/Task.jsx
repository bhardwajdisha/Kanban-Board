import React from 'react'
import {BiCalendar} from 'react-icons/bi'
import {RiMessage2Line} from 'react-icons/ri'
import './Task.scss'

const Task = ({tasks}) => {
    return (
        <div>
           {
               tasks.map((task,index)=>{
                  return(
                      <div className='task' key={index}>
                          <div className="task-header">
                                {task.name}
                                { task.imgUrl?
                                    <div className="task-image">
                                        <img src={task.imgUrl} alt="img"/>
                                    </div>:null
                                }
                          </div>
                          <div className="task-details">
                              <div>
                                  Assigned:
                              </div>
                              <div className='duration'>
                                <BiCalendar />
                                {task.duration}
                              </div>
                              <div className="task-footer">
                                <div 
                                    className="level"
                                    style={ task.level ==='Low'? {backgroundColor:' #e6faff',color:' #00ccff'}
                                            : task.level ==='Medium'?{backgroundColor:'#fdffe6' , color:  '#e6c700'}
                                            :{backgroundColor:'#ffe6e6',color:'#ff0000'}}
                                >
                                    {task.level}
                                 </div>
                                 <div className="messages">
                                        <RiMessage2Line />
                                        {task.messages}
                                 </div>
                              </div>
                          </div>
                      </div>
                  )
               })
           }
        </div>
    )
}

export default Task
