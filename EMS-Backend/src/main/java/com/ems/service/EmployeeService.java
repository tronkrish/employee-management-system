package com.ems.service;

import com.ems.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

//    single employee id
    EmployeeDto getEmployeeById(Long employeeId);

//    total employees id
    List<EmployeeDto> getAllEmployees();

//    Build Update Employee
    EmployeeDto updateEmployee(Long employeeId, EmployeeDto updateEmployee);

    //    Build Update Employee
    void deleteEmployee(Long employeeId);
}
