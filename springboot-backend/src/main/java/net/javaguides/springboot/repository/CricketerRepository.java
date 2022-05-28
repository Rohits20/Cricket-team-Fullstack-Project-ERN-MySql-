package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.Cricketers;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CricketerRepository extends JpaRepository<Cricketers,Long> {
}
