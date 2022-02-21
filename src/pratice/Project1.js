import React from "react";
const Project1=()=>{
  const onChangeHandler=()=>{
      
  }

    return(<div>
        <div className="container">
            <div className="row md-5">
                <div className="col mt-6">
                    <div className="gutter-gap">
                        <h1 className="text- center mt-5 text-success">TODO LIST</h1>
                       
                         <form method="post"> 
                         <div className="mb-5">
                             <input type="text" placeholder="Enter Name " name="name" className="form-control round-0"/>
                             </div>   
                             <div className="mb-5">
                             <input type="text" placeholder="Enter email " name="email" className="form-control round-0"/>
                             </div>  
                               <div className="mb-5">
                             <input type="text" placeholder="Enter Vaild Mobile " name="number" className="form-control round-0"/>
                             </div>    
                             <div className="mb-5">
                             <input type="text" placeholder="Enter project Name " name="projrct-name" className="form-control round-0"/>
                             </div>    
                             <div className="mb-5">
                             <input type="text" placeholder="Enter task Description " name="task-description" className="form-control round-0"/>
                             </div>
                             <div className="mb-3 d-md-flex">
                                 <div className="w-50 me-1">
                                     <p>Start Date</p>
                                     <input type="date" name="start_date" className="form-control round-0 py-2"/>

                                 </div>
                                 <div className="w-50 ms-1">
                                     <p>End Date</p>
                                     <input type="date" name="end_date" className="form-control round-0 py-2"/>

                                 </div>

                             </div>
                             <div className="mb-3">
                                 <div className="d-md-flex align-item-center radio-status">
                                     <p className="m-0">Task status</p>
                                    
                                     <div className="mx-5">
                                         <input type="radio" name="status" className='from-check-input mx-5'  value="planned"/>Planne
                                     <input type="radio" name="status" className='from-check-input mx-5' value="progress"/>in-progress
                                   <input type="radio" name="status" className='from-check-input mx-5'  value="Done"/>Done
                                    </div>
                                 </div>

                             </div>
                             <div className="mb-3 d-md-flex align-items-centerjustify-content-between mt-3">
                            <button type="Submit" className="btn btn-primary rounded-0 px-4 m-5">Submit</button>
                            <button type=" View" className="btn btn-success rounded-0 px-4 m-5">View</button>
                              </div>
                              </form>                   

                    </div>

                </div>

            </div>

        </div>
        

    </div>)
}
export default Project1