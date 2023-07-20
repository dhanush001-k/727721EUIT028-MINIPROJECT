package com.example.Groceryproject.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Groceryproject.Entity.Signup;
import com.example.Groceryproject.Service.Proserv;

@RestController
@CrossOrigin 
public class Controller {
	@Autowired
	Proserv serv;
	@PostMapping("/add")
	public Signup addInfo(@RequestBody Signup g) {
		return serv.saveDetails(g);
	}
	@GetMapping("/getting")
	public List<Signup> fetchDetails(){
		return serv.getDetails();
	}
}
