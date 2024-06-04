import React, { useState, useEffect } from 'react'
import StudentService from '../service/StudentService';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddStudentComponent = () => {
    /** Variables and method to collect and store inputes */
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nim, setNim] = useState('');
    const [kelas, setKelas] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const studentData = { firstName, lastName, nim, kelas, email }; //bundle the inpute from user

    /**send data to api and navigate when succesful */
    function saveStudent(e) {
        e.preventDefault();

        if (studentData.firstName !== "" && studentData.lastName !== "" && studentData.nim !== "" && studentData.kelas !== ""&& studentData.email != "") {
            /**If id is present in the parameter, it should update else it should save */
            if (id) {
                StudentService.updateStudent(id, studentData)
                    .then(navigate("/student"))
                    .catch(e => console.log(e));
            } else {
                StudentService.saveStudent(studentData)
                    .then(navigate("/student"))
                    .catch(e => console.log(e));
            }

        } else {
            alert("Please, fill in all inputes");
        }
    }

    function tile() {
        if (id) {
            return "Update Student";
        } else {
            return "Add Student";
        }
    }
    useEffect(() => {
        if (id) {
            StudentService.getStudentById(id)
                .then(res => {
                    setFirstName(res.data.firstName);
                    setLastName(res.data.lastName);
                    setNim(res.data.nim);
                    setKelas(res.data.kelas);
                    setEmail(res.data.email);
                })
                .catch(e => console.log(e));
        }
    }, []);

    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                        <h2 className='text-center'>{tile()}</h2>
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <input className='form-control'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        type="text" placeholder='Enter First Name' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control'
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        type="text" placeholder='Enter Last Name' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control'
                                        value={nim}
                                        onChange={(e) => setNim(e.target.value)}
                                        type="text" placeholder='Enter NIM' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control'
                                        value={kelas}
                                        onChange={(e) => setKelas(e.target.value)}
                                        type="text" placeholder='Enter Class' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email" placeholder='Enter Email' />
                                </div>
                                <button onClick={(e) => saveStudent(e)} className='btn btn-success'>Save</button> {" "}
                                <Link to={"/student"} className='btn btn-danger' href="">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudentComponent