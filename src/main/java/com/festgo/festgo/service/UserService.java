package com.festgo.festgo.service;

import com.festgo.festgo.model.User;
import com.festgo.festgo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    // 🔹 Registration
    public User register(User user) {
        return repository.save(user);
    }

    // 🔐 Login Method (ADD THIS)
    public User loginUser(String email, String password) {

        User user = repository.findByEmail(email);

        if (user != null && user.getPassword().equals(password)) {
            return user;
        } else {
            return null;
        }
    }
}