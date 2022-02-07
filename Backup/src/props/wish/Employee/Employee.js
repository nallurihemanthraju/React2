import React, { Component } from 'react';

class Employee extends Component {
    Employee_id=[{"id":201,"name":"hemanth","sal":387},
                 {"id":202,"name":"raju","sal":382},
                 {"id":203, "name":"nallur","sal":9823}
            ]


  render() {
    return (
         <React.Fragment>
    <div className="continer">
    <div className="row">
        <div className="col-md-8">
            <table className="table table-hover">
                <thead className="bg-dark">
                    <tr> 
                        <th>ID</th>
                        <th>Name</th>
                        <th>Sal</th>
                    </tr>
                </thead>
                <tbody>
                    {this.Employee_id.map((emp)=>{
                        return <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.sal}</td>
                            </tr>   
                    
                    })}
                
                </tbody>
            </table>

        </div>
    </div>
      </div>
    </React.Fragment>
    
     )
    }
}

export default Employee
