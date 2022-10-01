package com.example.springboot.controller;

import com.example.springboot.dao.UserDao;
import com.example.springboot.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.springboot.util.TokenProcessor;


//注解
@RestController
//@RequestMapping("/user")    //默认是 get 请求
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
                return user;
            } else {
                TokenProcessor newToken = new TokenProcessor();
                String token = newToken.makeToken();
                user.setToken(token);
                Integer saveFlag = userDao.saveToken(user.getId(), user.getToken());
                System.out.println("saveFlag: " + saveFlag);
                System.out.println("token: " + token);
                return user;
            }
        }
    }
}
