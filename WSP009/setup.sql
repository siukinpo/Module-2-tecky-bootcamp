create database "memo-wall";
create role "memo-wall" with password 'memo-wall' superuser;
alter role "memo-wall" with login;

create table "memo" (
	id serial primary key
, content text
, image varchar(255)
, created_at timestamp default CURRENT_TIMESTAMP
, updated_at timestamp
);

create table "user" (
	id serial primary key
, username varchar(255) not null unique
, password varchar(255) not null
, created_at timestamp default CURRENT_TIMESTAMP
, updated_at timestamp
);



-- psql -U wsp009 -W -h localhost wsp009 -f demo.sql