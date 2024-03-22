package com.example.springboot.entity;

public class CameraChangeForm {
    private String cam_name;
    private String cam_id;
    private String pos_lon;
    private String pos_lat;
    private User user;

    public String getCam_id() {
        return cam_id;
    }

    public String getCam_name() {
        return cam_name;
    }

    public String getPos_lat() {
        return pos_lat;
    }

    public String getPos_lon() {
        return pos_lon;
    }

    public User getUser() {
        return user;
    }

    public void setCam_id(String cam_id) {
        this.cam_id = cam_id;
    }

    public void setCam_name(String cam_name) {
        this.cam_name = cam_name;
    }

    public void setPos_lat(String pos_lat) {
        this.pos_lat = pos_lat;
    }

    public void setPos_lon(String pos_lon) {
        this.pos_lon = pos_lon;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
