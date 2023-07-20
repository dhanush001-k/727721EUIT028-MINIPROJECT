package com.example.Groceryproject.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="SignUp")
public class Signup {
	@Id 
	private String FirstName;
	private String LastName;
	private String Email;
	private String Password;
	private long PhoneNumber;
	public String getFirstName() {
		return FirstName;
	}
	public void setFirstName(String firstName) {
		FirstName = firstName;
	}
	public String getLastName() {
		return LastName;
	}
	public void setLastName(String lastName) {
		LastName = lastName;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public long getPhoneNumber() {
		return PhoneNumber;
	}
	public void setPhoneNumber(long phoneNumber) {
		PhoneNumber = phoneNumber;
	}
	public Signup(String firstName, String lastName, String email, String password, long phoneNumber) {
		super();
		FirstName = firstName;
		LastName = lastName;
		Email = email;
		Password = password;
		PhoneNumber = phoneNumber;
	}
	public Signup() {
		
	}

}
