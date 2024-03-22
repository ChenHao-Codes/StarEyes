package com.example.springboot.controller;

import com.example.springboot.dao.UserDao;
import com.example.springboot.entity.*;
import com.example.springboot.util.TimeChecker;
import com.example.springboot.util.TokenProcessor;
import com.example.springboot.common.Authorization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Array;
import java.sql.Time;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

//注解
@RestController
public class UserController {
    @Autowired
    private UserDao userDao;

    @PostMapping(value = "/login")
    public User login(@RequestBody User user) {
        if (user.getId() == null || user.getPassword() == null) {
            throw new RuntimeException("error:前端用户名或密码为空");
        } else {
            User result = userDao.loginByID(user.getId(), user.getPassword());
            if (result == null) {
                user.setId("-1");
            } else {
                TokenProcessor newToken = new TokenProcessor();
                String token = newToken.makeToken();
                user.setToken(token);
                userDao.saveToken(user.getId(), user.getToken());

                TimeChecker timeCheck = new TimeChecker();
                String expTime = timeCheck.getExpirationtime();
                userDao.saveExpTime(user.getId(), expTime);
            }
            return user;
        }
    }

    @PostMapping(value = "/api/auth/verify")
    public boolean verify(@RequestBody User user) {
        String token = userDao.getToken(user.getId());
        String expTime = userDao.gerExpTime(user.getId());
        return new Authorization().verify(user, token, expTime);
    }

    @PostMapping(value = "/api/cameraList")
    public List<Camera> getCameras(@RequestBody User user){
        List<Camera> cameras = new ArrayList<>();
        String expTime = userDao.gerExpTime(user.getId());
        String token = userDao.getToken(user.getId());
        if( new Authorization().verify(user,token,expTime)){
            String userOrganization = userDao.getOrganization(user.getId());
             cameras = userDao.getCameras(userOrganization);
        }
        return cameras;
    }

    @PostMapping(value = "/api/user/getUserInfo")
    public UserInformation getUserInformation(@RequestBody User user){
        UserInformation getInfoResult = new UserInformation();
        String expTime = userDao.gerExpTime(user.getId());
        String token = userDao.getToken(user.getId());
        if( new Authorization().verify(user,token,expTime)){
            getInfoResult = userDao.getUserInformation(user.getId());
            getInfoResult.setTokenZero();
        }
        return getInfoResult;
    }

    @PostMapping(value = "/api/event/getEventList")
    public List<Event> getEvents(@RequestBody User user){
        List<Event> events = new ArrayList<>();
        List<Camera> cameraForEvents =  getCameras(user);
        String expTime = userDao.gerExpTime(user.getId());
        String token = userDao.getToken(user.getId());
        if( new Authorization().verify(user,token,expTime)){
            List<Event> tempEventResult= new ArrayList<>();
            for(int i = 0; i < cameraForEvents.size(); i++){
                tempEventResult = userDao.getEventsForOneCamera(cameraForEvents.get(i).getCam_id());
                for(int j = 0; j < tempEventResult.size(); j++){
                    events.add(tempEventResult.get(j));
                }
            }
        }
        return events;
    }


    @PostMapping(value = "/api/event/read")
    public boolean changeReadStatus(@RequestBody String id){
        userDao.setReadStatus(id);
        return true;
    }

    @RequestMapping(value = "/api/camera/update", method = {RequestMethod.POST, RequestMethod.GET})
    public boolean changeCameraInformation(@RequestBody CameraChangeForm cameraChangeForm){
        String expTime = userDao.gerExpTime(cameraChangeForm.getUser().getId());
        String token = userDao.getToken(cameraChangeForm.getUser().getId());
        if( new Authorization().verify(cameraChangeForm.getUser(),token,expTime)){
            userDao.updateCamera(cameraChangeForm.getCam_id(),cameraChangeForm.getCam_name(),cameraChangeForm.getPos_lon(),cameraChangeForm.getPos_lat());
            return true;
        }
        return true;
    }

    @PostMapping(value = "/api/event/delete")
    public void deleteEvent(@RequestBody int  eventId){
        userDao.deleteEvent(eventId);
    }

    @RequestMapping(value = "/api/user/changeUserInfo", method = {RequestMethod.POST,RequestMethod.GET})
    public boolean changeUserInfo(@RequestBody UserInfoChangeForm userInfoChangeForm){
        String expTime = userDao.gerExpTime(userInfoChangeForm.getUser_id());
        String token =  userDao.getToken(userInfoChangeForm.getUser_id());
        if(new Authorization().verifyById(userInfoChangeForm.getToken(),token,expTime)){
            userDao.changeUserInfo(userInfoChangeForm.getUser_id(),userInfoChangeForm.getUser_name(),userInfoChangeForm.getUser_email(), userInfoChangeForm.getUser_phone(), userInfoChangeForm.getUser_wechat());
            return true;
        }
        return false;
    }

    @RequestMapping(value = "/api/user/changePassword")
    public void changeUserPassword(@RequestBody PasswordChangeForm passwordChangeForm){
        String expTime = userDao.gerExpTime(passwordChangeForm.getUser_id());
        String token = userDao.getToken(passwordChangeForm.getUser_id());
        if(new Authorization().verifyById(passwordChangeForm.getToken(), token,expTime)){
            userDao.changeUserPassword(passwordChangeForm.getUser_id(), passwordChangeForm.getNewPassword());
        }
    }

    @RequestMapping(value = "/api/event/addEvent")
    public void addEvent(@RequestBody EventAddForm eventAddForm) throws ParseException {
        User user = new User();
        user.setId(eventAddForm.getUser_id());
        user.setPassword(eventAddForm.getPassword());
        if(!login(user).getId().equals("-1")){  //access success
            String have_read = "0";
//            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//            long ms = sdf.parse(eventAddForm.getTime()).getTime();
//            Time time = new Time(ms);
//            Timestamp
            userDao.addEvent(eventAddForm.getCam_id(), eventAddForm.getTime(),have_read, eventAddForm.getEvent_type());
        }
    }


}
