import React, { useEffect, useState } from "react";
import { getEmployeeById, updateEmployee } from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const UpdateEmployee = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const navigator = useNavigate();
  const { id } = useParams(); // employee id from URL

  // Load employee data when page opens
  useEffect(() => {
    getEmployeeById(id).then((response) => {
      setFirstName(response.data.firstName);
      setLastName(response.data.lastName);
      setEmail(response.data.email);
    });
  }, [id]);

  // Update employee function
  function updateEmployeeData(e) {
    e.preventDefault();

    const employee = { firstName, lastName, email };

    updateEmployee(id, employee).then((response) => {
      navigator("/employees");
    });
  }

  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Update Employee</h2>

          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name:</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  value={firstName}
                  className="form-control"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Last Name:</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  value={lastName}
                  className="form-control"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button
                className="btn btn-primary"
                onClick={updateEmployeeData}
              >
                Update
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
