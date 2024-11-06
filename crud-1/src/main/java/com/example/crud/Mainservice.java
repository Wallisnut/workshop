package com.example.crud;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

public class Mainservice {
    @Autowired
    private MainRepository studentRepository;

    public Main saveStudent(MainDTO studentDTO) {
        Main student = new Main();
        student.setUsername(studentDTO.getUsername());
        student.setType(studentDTO.getType());
        student.setDisplayname_en(studentDTO.getDisplayname_en());
        student.setEmail(studentDTO.getEmail());
        student.setFaculty(studentDTO.getFaculty());

        return studentRepository.save(student);
    }
}
