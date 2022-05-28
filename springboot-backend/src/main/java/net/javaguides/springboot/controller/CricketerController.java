package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Cricketers;
import net.javaguides.springboot.repository.CricketerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/cricketers")
public class CricketerController {

    @Autowired
    private CricketerRepository cricketerRepository;

    @GetMapping
    public List<Cricketers> getAllCricketers(){
        return cricketerRepository.findAll();
    }
    @PostMapping
    public Cricketers createCricketer(@RequestBody Cricketers cricketer){
        return cricketerRepository.save(cricketer);
    }

    @DeleteMapping("{id}")
      public ResponseEntity<HttpStatus> deleteCricketer( @PathVariable long id){
        Cricketers cricketer = cricketerRepository.findById(id).orElseThrow();

     cricketerRepository.delete(cricketer);
     return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }
}
