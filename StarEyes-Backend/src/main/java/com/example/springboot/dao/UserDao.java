package com.example.springboot.dao;

import com.example.springboot.entity.Camera;
import com.example.springboot.entity.Event;
import com.example.springboot.entity.User;
import com.example.springboot.entity.UserInformation;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.sql.Date;
import java.sql.Time;
import java.util.ArrayList;
import java.util.List;

@Mapper
public interface UserDao {

    User loginByID(@Param("id") String id, @Param("password")String password);

    Integer saveToken(@Param("id") String id, @Param("token") String token);

    Integer saveExpTime(@Param("id") String id, @Param("time") String expTime);

    String getToken(@Param("id") String id);

    String gerExpTime(@Param("id") String id);

    String getOrganization(@Param("id") String id);
    List<Camera> getCameras(@Param("organization") String organization);

    UserInformation getUserInformation(@Param("id") String id);

    List<Event> getEventsForOneCamera(@Param("cam_id") String id);

    void setReadStatus(@Param("id") String id);

    void updateCamera(@Param("cam_id") String cam_id, @Param("cam_name") String name, @Param("pos_lon") String pos_lon, @Param("pos_lat") String pos_lat);

    void deleteEvent(@Param("id") int eventId);

    void changeUserInfo(@Param("id") String id, @Param("username") String user_name, @Param("email") String user_email, @Param("phone") String user_phone, @Param("wechat") String user_wechat);

    void changeUserPassword(@Param("id") String user_id, @Param("password") String password);

    void addEvent(@Param("cam_id") String cam_id, @Param("time") String time, @Param("have_read") String have_read, @Param("event_type") String event_type);
    /*List<User> findAll();

    User getByID(Integer id);

    User checkByID(@Param("id") String id, @Param("password")String password);

    //insert 只会返回int
    void insert(User user);

    void update(User user);

    Integer delete(Integer id);*/
}
