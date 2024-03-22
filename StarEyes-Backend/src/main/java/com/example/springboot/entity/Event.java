package com.example.springboot.entity;

public class Event {
    private String id;
    private String cam_id;
    private String time;
    private String event_type;
    private String have_read;

    public String getCam_id() {
        return cam_id;
    }

    public String getEvent_type() {
        return event_type;
    }

    public String getId() {
        return id;
    }

    public String getTime() {
        return time;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setCam_id(String cam_id) {
        this.cam_id = cam_id;
    }

    public void setEvent_type(String event_type) {
        this.event_type = event_type;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getHave_read() {
        return have_read;
    }

    public void setHave_read(String have_read) {
        this.have_read = have_read;
    }
}
