package com.example.crud;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.*;
import org.springframework.stereotype.Repository;

@Repository
public interface MainRepository extends JpaRepository<Main,Long> {
}
