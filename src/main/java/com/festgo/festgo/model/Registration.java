package com.festgo.festgo.model;

import jakarta.persistence.*;

@Entity
@Table(name="registration")
public class Registration {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    private String name;

    private String email;

    private String phoneNumber;

    private String eventName;

    private String branch;



    public int getId() {
        return id;
    }


    public void setId(int id) {
        this.id=id;
    }



    public String getName(){
        return name;
    }


    public void setName(String name){
        this.name=name;
    }



    public String getEmail(){
        return email;
    }


    public void setEmail(String email){
        this.email=email;
    }



    public String getPhoneNumber(){
        return phoneNumber;
    }


    public void setPhoneNumber(String phoneNumber){
        this.phoneNumber=phoneNumber;
    }



    public String getEventName(){
        return eventName;
    }


    public void setEventName(String eventName){
        this.eventName=eventName;
    }



    public String getBranch(){
        return branch;
    }


    public void setBranch(String branch){
        this.branch=branch;
    }

}