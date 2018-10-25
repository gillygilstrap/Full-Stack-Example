insert in users (auth0_id, email, name, picture) values
(${auth0_id}, ${email}, ${name}, ${picture}) returning *;