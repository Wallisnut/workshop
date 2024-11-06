package com.example.crud;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import org.antlr.v4.runtime.misc.NotNull;


@Data
@Entity
@Table(name="main")
public class Main {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;

    @Column(name = "username", nullable = false)
    private String username ;

    @Column(name = "type", nullable = false)
    private String type ;

    @Column(name = "displayname_en" , nullable = false)
    private String displayname_en;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "faculty",nullable = false)
    private String faculty;
}
