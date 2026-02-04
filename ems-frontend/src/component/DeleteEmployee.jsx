import React, { useEffect, useState } from "react";
import { listEmployees, deleteEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const DeleteEmployee = () => {

  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();

  // Load employees
  useEffect(() => {
    getAllEmployees();
  }, []);

  function getAllEmployees() {
    listEmployees().then((response) => {
      setEmployees(response.data);
    });
  }

  // Delete Employee Function
  function removeEmployee(id) {
    deleteEmployee(id).then(() => {
      getAllEmployees(); // reload list after delete
    });
  }

  // Navigate Update Page
  function updateEmployeeData(id) {
    navigator(`/update-employee/${id}`);
  }

  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>

              <td>
                {/* Update Button */}
                <button
                  className="btn btn-info"
                  onClick={() => updateEmployeeData(employee.id)}
                >
                  Update
                </button>

                {/* Delete Button */}
                <button
                  className="btn btn-danger"
                  style={{ marginLeft: "10px" }}
                  onClick={() => removeEmployee(employee.id)}
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteEmployee;
