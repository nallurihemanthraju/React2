import React from 'react';

const Todolist = ({Todos,deleteHandler,views,editHandler})=>{
  return(<>{(views)===true?<>
  {
        Object.keys(Todos).length>0?<table className='table table-striped'>
        <thead>
            <tr>
                <th>S.NO</th>
                <th>Name</th>
                <th>Project</th>
                <th>Task</th>
                <th>Status</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Edit / Delete</th>
            </tr>
        </thead>
        <tbody>
            {
               Todos.map((todo,index)=>{
                   return(<tr key={index}>
                            <td>{index+1}</td>
                            <td>{todo.name}</td>
                            <td>{todo.project_name}</td>
                            <td>{todo.task_description}</td>
                            <td>{todo.status}</td>
                            <td>{todo.start_date}</td>
                            <td>{todo.end_date}</td>
                           
                          <td className='text-center table-delete-edit_btn d-flex ps-4'>
                      <button className="btn btn-success "
                                onClick={()=>editHandler(index)}>Edit</button> 
                                <button className="btn btn-danger" 
                                onClick={()=>deleteHandler(index)}>Delete</button>
                   </td>
                          </tr>)
               }) 
            }
        </tbody>
    </table>:null
    }
  </>:null}
    
  </>)
}
export default Todolist;