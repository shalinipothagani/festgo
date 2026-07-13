package com.festgo.festgo.controller;

import com.festgo.festgo.model.Registration;
import com.festgo.festgo.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/registrations")
public class RegistrationController {

    @Autowired
    private RegistrationService service;

    // 🎟️ Create booking
    @PostMapping
    public Registration register(@RequestBody Registration registration) {
        return service.registerEvent(registration);
    }

    // 📋 Get all bookings
    @GetMapping
    public List<Registration> getAll() {
        return service.getAllRegistrations();
    }

    // 🔍 Filter by user
    @GetMapping("/user/{userId}")
    public List<Registration> getByUser(@PathVariable Integer userId) {
        return service.getByUser(userId);
    }

    // ❌ Delete booking
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id) {
        service.deleteRegistration(id);
        return "Deleted successfully";
    }
}