
import axios from 'axios';


const EMPLOYEE_API_BASE_URL="http://springbootemployee-env.eba-zt3iydzr.us-east-1.elasticbeanstalk.com/api/v1/employees";
class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL)
    }
    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL +'/' +employeeId);
    }


}

export default new EmployeeService();