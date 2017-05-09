insert into users (first_name, last_name, phone, email)
values ($1, $2, $3, $4)
returning user_id
