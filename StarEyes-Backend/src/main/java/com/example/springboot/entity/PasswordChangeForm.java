package com.example.springboot.entity;

public class PasswordChangeForm {
    private String user_id;
    private String token;
    private String newPassword;

    public String getUser_id() {
        return user_id;
    }

    public String getToken() {
        return token;
    }

    public String getNewPassword() {
        return newPassword;
    }
}
