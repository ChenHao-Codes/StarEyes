package com.example.springboot.entity;


import lombok.Data;

@Data
public class UserInformation {
    String id;
    String password;
    String username;
    String wechat;
    String email;
    String phone;
    String organization;
    String token;

    public void setTokenZero(){
        this.token = "0";
    }
}