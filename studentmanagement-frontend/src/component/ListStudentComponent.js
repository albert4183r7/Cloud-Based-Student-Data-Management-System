import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import StudentService from '../service/StudentService';

const ListStudentComponent = () => {
    const [studentArray, setStudentArray] = useState([]);

    useEffect(() => {
        getAllStudent();
    }, []);

    function getAllStudent() {
        StudentService.getAllStudent()
            .then(res => { setStudentArray(res.data); console.log(res) })
            .catch(e => console.log(e));
    }
    function deleteStudent(e, id) {
        e.preventDefault()
        StudentService.deleteStudent(id).then(getAllStudent()).catch(e => console.log(e));
    }


    return (
        <div className='container'>
            <Link to={"/add-student"} className='btn btn-primary mb-2 mt-3' href="">Add student</Link>
            <h2 className='text-center mb-4'>List student</h2>
            <table className='table table-bordered table striped'>
                <thead>
                    <th>Student ID</th>
                    <th>Student First Name</th>
                    <th>Student Last Name</th>
                    <th>Student NIM</th>
                    <th>Student Class</th>
                    <th>Student Email</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {studentArray.map(student =>
                        <tr id={student.id}>
                            <td>{student.id}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.nim}</td>
                            <td>{student.kelas}</td>
                            <td>{student.email}</td>
                            <td>
                                <Link to={`/add-student/${student.id}`} className='btn btn-info' href="">Update</Link> {" "}
                                <a onClick={(e) => deleteStudent(e, student.id)} className='btn btn-danger'>Delete</a>
                            </td>
                        </tr>)}

                </tbody>
            </table>
        </div>
    )
}

export default ListStudentComponent