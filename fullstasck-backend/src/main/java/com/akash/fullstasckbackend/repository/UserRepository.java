package com.akash.fullstasckbackend.repository;

import com.akash.fullstasckbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
