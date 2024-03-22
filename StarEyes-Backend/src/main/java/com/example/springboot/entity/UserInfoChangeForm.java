package com.example.springboot.entity;

public class UserInfoChangeForm {
    String user_name;
    String user_email;
    String user_phone;
    String user_wechat;
    String token;
    String user_id;

    public String getUser_id() {
        return user_id;
    }

    public String getToken() {
        return token;
    }

    public String getUser_email() {
        return user_email;
    }

    public String getUser_name() {
        return user_name;
    }

    public String getUser_phone() {
        return user_phone;
    }

    public String getUser_wechat() {
        return user_wechat;
    }
}
