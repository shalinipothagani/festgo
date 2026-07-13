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

    // 🎟️ Create booking
    public Registration registerEvent(Registration registration) {
        return repository.save(registration);
    }

    // 📋 Get all bookings
    public List<Registration> getAllRegistrations() {
        return repository.findAll();
    }

    // 🔍 Filter by user
    public List<Registration> getByUser(Integer userId) {
        return repository.findByUserId(userId);
    }

    // ❌ Delete booking
    public void deleteRegistration(Integer id) {
        repository.deleteById(id);
    }
}