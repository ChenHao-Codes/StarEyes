package com.example.springboot.common;

import com.example.springboot.entity.User;
import com.example.springboot.util.TimeChecker;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Time;

@RestController
public class Authorization {

    public boolean verify(User user, String token, String expTime) {
        if (user.getToken().equals(token)) {
            TimeChecker timeCheck = new TimeChecker();
            return timeCheck.checkTime(expTime);
        } else return false;
    }

    public boolean verifyById(String tokenFromWeb,String token,String expTime){
        if(tokenFromWeb.equals(token)){
            TimeChecker timeChecker = new TimeChecker();
            return timeChecker.checkTime(expTime);
        }
        return false;
    }

}