package com.festgo.festgo.controller;


import com.festgo.festgo.model.Registration;
import com.festgo.festgo.service.RegistrationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/registrations")
@CrossOrigin(origins = "http://localhost:5174")
public class RegistrationController {


    @Autowired
    private RegistrationService service;



    // Create registration
    @PostMapping
    public Registration register(
            @RequestBody Registration registration){

        return service.registerEvent(registration);
    }



    // View all registrations
    @GetMapping
    public List<Registration> getAll(){

        return service.getAllRegistrations();
    }



    // Delete registration
    @DeleteMapping("/{id}")
    public String delete(
            @PathVariable int id){

        service.deleteRegistration(id);

        return "Deleted successfully";
    }
}