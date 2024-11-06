package com.example.crud;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/main")
public class MainController {

    @Autowired
    private MainRepository Repository;

    @GetMapping
    public List<Main> getALLUser(){
        return Repository.findAll();
    }

    @PostMapping("/add")
    public Main createUser(@RequestBody Main main){
        return Repository.save(main);
    }
}
