package net.javaguides.springboot;

import net.javaguides.springboot.model.Cricketers;
import net.javaguides.springboot.repository.CricketerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}
	 @Autowired
	 private CricketerRepository cricketerRepository;
	@Override
	public void run(String... args) throws Exception {

	}
}
