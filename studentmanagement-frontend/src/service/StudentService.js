import axios from "axios";

const BASE_URL = "http://54.169.167.73:8080/student";
class StudentService{

    //**Method to get all student from our api or database */
    getAllStudent(){
        return axios.get(BASE_URL);
    }
    /**MEthod to save student */
    saveStudent(studentData){
        return axios.post(BASE_URL, studentData);
    }
    updateStudent(id, studentData){
        return axios.put(`${BASE_URL}/${id}`, studentData)
    }
    getStudentById(id){
        return axios.get(`${BASE_URL}/${id}`);
    }
    deleteStudent(id){
        return axios.delete(BASE_URL +"/" +id);
    }

}
export default new StudentService();