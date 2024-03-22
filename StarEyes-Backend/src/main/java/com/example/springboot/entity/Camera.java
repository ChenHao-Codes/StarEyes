package com.example.springboot.entity;


import lombok.Data;

@Data
public class Camera {
    private String cam_id;
    private String cam_name;
    private String organization;
    private int status;
    private float pos_lon;   //经度
    private float pos_lat;   //纬度

    public String getCam_id() {
        return cam_id;
    }

    public float getPos_lat() {
        return pos_lat;
    }

    public float getPos_lon() {
        return pos_lon;
    }

    public int getStatus() {
        return status;
    }

    public String getCam_name() {
        return cam_name;
    }

    public String getOrganization() {
        return organization;
    }
}
