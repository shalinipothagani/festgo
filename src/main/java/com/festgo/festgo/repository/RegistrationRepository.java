package com.festgo.festgo.repository;

import com.festgo.festgo.model.Registration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RegistrationRepository extends JpaRepository<Registration, Integer> {

    // 🔥 Filter by userId
    List<Registration> findByUserId(Integer userId);
}