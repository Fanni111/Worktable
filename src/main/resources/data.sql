insert into user(username, password, enabled, role, img, email) values (
  'owner1', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', true, 'ROLE_OWNER', '/assets/images/img3.jpg', 'weirdo@ww.wwad');
insert into user(username, password, enabled, role, img, email) values (
  'owner2', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', true, 'ROLE_OWNER', '/assets/images/img2.jpg', 'asd@gmail.com');
insert into user(username, password, enabled, role, img, email) values (
  'user1', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', true, 'ROLE_USER', '/assets/images/img3.jpg', 'asd@gmail.com');
insert into user(username, password, enabled, role, img, email) values (
  'owner3', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', true, 'ROLE_OWNER', '/assets/images/img1.png', 'asd@gmail.com');
insert into user(username, password, enabled, role, img, email) values (
  'user2', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', true, 'ROLE_USER', '/assets/images/img3.jpg', 'asd@gmail.com');
insert into user(username, password, enabled, role, img, email) values (
  'user3', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', true, 'ROLE_USER', '/assets/images/img3.jpg', 'asd@gmail.com');


insert into usercalendar(user_id, total_free_days, reason, response, accept_or_decline) values
 (1, 30, 'This is the reason', 'This is the response', true);