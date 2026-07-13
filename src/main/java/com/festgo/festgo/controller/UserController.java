package com.festgo.festgo.controller;

import com.festgo.festgo.model.User;
import com.festgo.festgo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService service;

    // 🔹 Register API
    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return service.register(user);
    }

    // 🔐 Login API (ADD THIS)
    @PostMapping("/login")
    public String loginUser(@RequestBody User user) {

        User loggedUser = service.loginUser(user.getEmail(), user.getPassword());

        if (loggedUser != null) {
            return "Login Successful";
        } else {
            return "Invalid Email or Password";
        }
    }
}