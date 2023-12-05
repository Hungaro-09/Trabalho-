import express from 'express';
import mysql from 'mysql2/promise';

export const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'alex@@1992',
    database: 'trabalhoweb'
  });
