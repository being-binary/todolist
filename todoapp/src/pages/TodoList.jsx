import React, { useRef } from 'react'
import { useState } from 'react'
import { FaPlus } from "react-icons/fa";

const TodoList = () => {
    let [list, setList] = useState([
        { taskName: 'Buy groceries', status: 'pending' },
        { taskName: 'Clean the house', status: 'completed' },
        { taskName: 'Finish report', status: 'in progress' },
        { taskName: 'Call mom', status: 'pending' },
        { taskName: 'Pay bills', status: 'completed' },
        { taskName: 'Read a book', status: 'pending' },
        { taskName: 'Exercise', status: 'in progress' },
        { taskName: 'Walk the dog', status: 'completed' },
        { taskName: 'Cook dinner', status: 'pending' },
        { taskName: 'Write blog post', status: 'in progress' },
        { taskName: 'Plan vacation', status: 'pending' },
        { taskName: 'Study for exam', status: 'completed' },
        { taskName: 'Water plants', status: 'pending' },
        { taskName: 'Organize closet', status: 'in progress' },
        { taskName: 'Fix the sink', status: 'pending' },
        { taskName: 'Respond to emails', status: 'completed' },
        { taskName: 'Attend meeting', status: 'pending' },
        { taskName: 'Meditate', status: 'in progress' },
        { taskName: 'Buy a gift', status: 'pending' },
        { taskName: 'Go for a run', status: 'completed' },
        { taskName: 'Review budget', status: 'pending' },
        { taskName: 'Paint the fence', status: 'in progress' },
        { taskName: 'Learn a new recipe', status: 'pending' },
        { taskName: 'Update resume', status: 'completed' },
        { taskName: 'Visit the dentist', status: 'pending' }
    ])
    let [hide, setHide] = useState(false)
    let newTaskName = useRef()
    let addTask = ()=>{
        if(newTaskName.current.value){    
            let todotask = {
                taskName: newTaskName.current.value,
                status: 'pending',
            }
            setList([...list,todotask])
        }
        else{
            alert('Enter task Name')
        }
    }
    
    let deleteTask = (index) => {
        let copydata = [...list]
        copydata.splice(index, 1)
        setList([...copydata])
    }
    let updateTask = (index) => {
        let task = [...list]
        task[index].status == "pending" ? task[index].status = 'in progress' : task[index].status == 'in progress' ? task[index].status = 'completed' : deleteTask(index)
        setList([...task])
    }
    return (


        <div className="relative overflow-x-auto g:px-[10vw] md:px-[10vw] px-[5vw] py-5">
            <table className="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400 text-center rounded-md">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            task no
                        </th>
                        <th scope="col" className="px-6 py-3">
                            task name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            status
                        </th>
                        <th scope="col" colSpan={2} className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((task, index) => {
                            return <tr key={index} className={`bg-white dark:bg-gray-800 px-6 py-4 text-xl ${task.status == 'pending' ? 'bg-gray-400' : task.status == 'completed' ? 'bg-green-400' : 'bg-yellow-400'}`}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {index + 1}
                                </th>
                                <td className="px-6 py-4">
                                    {task.taskName}
                                </td>
                                <td className="px-6 py-4 capitalize">
                                    {task.status}
                                </td>
                                <td className="px-6 py-4 flex justify-center grid-cols-2 gap-2">
                                    <button className='px-2 py-3 bg-red-400 rounded-md capitalize text-white hover:bg-red-600 w-[120px] h-[50px]' onClick={() => deleteTask(index)}>delete</button>
                            {task.status!=='completed' && <button className={` ${hide && 'hidden'} 'px-2 py-3 bg-red-400 rounded-md capitalize text-white hover:bg-red-600 w-[120px] h-[50px]'`} onClick={() => updateTask(index)}>
                                        {
                                            task.status == "pending" ? 'Start' : task.status == 'completed' ? 'Finished' : 'complete'
                                        }
                                    </button>}
                                </td>
                            </tr>
                        })
                    }
                </tbody>
                <tfoot>
            <tr className="font-semibold text-gray-900 dark:text-white bg-red-400">
                <th scope="row" className="px-6 py-3  text-xl">{list.length+1}</th>
                <td className="px-6 py-3">
                    <input ref={newTaskName} type="text" name="tname" id="tname" placeholder='enter task name' className='px-2 py-3' />
                </td>
                <td className="px-6 py-3 text-xl">Pending</td>
                <td className="px-6 py-7 text-xl flex justify-center" onClick={addTask}><FaPlus/></td>
            </tr>
        </tfoot>    
            </table>
        </div>


    )
}

export default TodoList
