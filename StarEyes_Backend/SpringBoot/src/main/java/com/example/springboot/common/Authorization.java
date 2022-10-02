package com.example.springboot.common;

import com.example.springboot.entity.User;
import com.example.springboot.util.TimeChecker;
import com.example.springboot.dao.UserDao;

public class Authorization {

    private UserDao userDao;

    public boolean verify(User user) {
        String token = userDao.getToken(user.getId());
        String expTime = userDao.gerExpTime(user.getId());
        if (user.getToken().equals(token)) {
            TimeChecker timeCheck = new TimeChecker();
            return timeCheck.checkTime(expTime);
        } else return false;
    }
}