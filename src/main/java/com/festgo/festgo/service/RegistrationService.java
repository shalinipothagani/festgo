package com.festgo.festgo.service;

import com.festgo.festgo.model.Registration;
import com.festgo.festgo.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class RegistrationService {


    @Autowired
    private RegistrationRepository repository;


    // Save registration
    public Registration registerEvent(Registration registration){

        return repository.save(registration);
    }


    // Get all registrations
    public List<Registration> getAllRegistrations(){

        return repository.findAll();
    }


    // Delete registration
    public void deleteRegistration(int id){

        repository.deleteById(id);
    }
}