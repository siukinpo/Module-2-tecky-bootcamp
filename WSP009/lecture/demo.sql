insert into students
(name, level)
values
('Peter',25),
('John',10);

select id, name, level from students;

alter table students add unique (name);

-- narrow down to select a subset of rows
select id, name from students where name = 'Peter';
select id, name from students where id = 1;

-- rename the existing records to avoid duplicated name
update students set name = 'Peter Lo' where id = 1;
select id, name from students where id = 1;

-- tell postgres to reject future insertion if the name is duplicated
alter table students add unique (name);

-- now postgres will reject this insert, because there is already a record having 'Peter' as name
insert into students (name,level) values ('Peter',35);

insert into students (name,level) values ('user1',19);
insert into students (name,level) values ('user2',20);
insert into students (name,level) values ('user3',21);
insert into students (name,level) values ('user4',22);
insert into students (name,level) values ('user5',23);
insert into students (name,level) values ('user6',24);
insert into students (name,level) values ('user7',25);
insert into students (name,level) values ('user8',26);
insert into students (name,level) values ('user9',27);
insert into students (name,level) values ('user10',28);
insert into students (name,level) values ('user11',29);
insert into students (name,level) values ('user12',30);

select id, name from students order by id asc;

update students set level = level + 100 where id = 12;

-- add a timestamp column using the current time as default value
alter table students add column created_at timestamp default CURRENT_TIMESTAMP;