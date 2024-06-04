package com.tutorial.studentmanagmentbackend.service;

import com.tutorial.studentmanagmentbackend.model.Student;

import java.util.List;
import java.util.Optional;

public interface StudentServiceInterface {
    public Student saveStudent(Student student);
    public Optional<Student> getStudentById(int id);
    List<Student> getAllStudent();
    Student updateStudent(int id, Student student);
    void deleteStudent(int id);
}
