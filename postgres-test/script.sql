CREATE DATABASE db_test;
\c db_test;

CREATE TABLE users (
    "id" SERIAL,
    "user" VARCHAR UNIQUE,
    name VARCHAR(100),
    status VARCHAR(100),
    password VARCHAR(100)
);