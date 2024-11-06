package com.example.crud;

public class MainDTO {
    private String username;
    private String type;
    private String displayname_en;
    private String email;
    private String faculty;

    public String getUsername() {
        return username;
    }

    public String getType() {
        return type;
    }

    public String getDisplayname_en() {
        return displayname_en;
    }

    public String getEmail() {
        return email;
    }

    public String getFaculty() {
        return faculty;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setDisplayname_en(String displayname_en) {
        this.displayname_en = displayname_en;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setFaculty(String faculty) {
        this.faculty = faculty;
    }
}
