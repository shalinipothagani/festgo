package com.festgo.festgo.repository;

import com.festgo.festgo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    // 🔐 Method for login (find user by email)
    User findByEmail(String email);

}