package com.example.springboot.entity;

public class EventAddForm {
    private String user_id;
    private String password;
    private String cam_id;
    private String time;
    private String event_type;

    public String getUser_id() {
        return user_id;
    }

    public String getCam_id() {
        return cam_id;
    }

    public String getTime() {
        return time;
    }

    public String getEvent_type() {
        return event_type;
    }

    public String getPassword() {
        return password;
    }

    public void setEvent_type(String event_type) {
        this.event_type = event_type;
    }

    public void setCam_id(String cam_id) {
        this.cam_id = cam_id;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }
}
