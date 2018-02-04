/* Replace with your SQL commands */

CREATE TABLE  `user` {
    id      char(36) ,
    email varchar(40) UNIQUE,
    tel_number integer,
    password varchar(30),
    profile_image_url varchar(50),
    full_profile_image_url varchar(50),
    background_image_url varchar(50),
    comment varchar(30),
    updated_at date,
    created_at
    CONSTRAINT user_identity PRIMARY KEY(id, email, tel_number)
}