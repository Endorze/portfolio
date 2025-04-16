CREATE TABLE login_details (
    id SERIAL PRIMARY KEY,

    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    
    username VARCHAR(255) UNIQUE NOT NULL,
    created_at DATE DEFAULT now() 
);

CREATE TABLE contact_form (
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    message_text VARCHAR(2048) NOT NULL,
    created_at DATE DEFAULT now() 
);