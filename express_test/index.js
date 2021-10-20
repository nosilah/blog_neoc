import fetch from 'node-fetch';
// const ex = require('expressjs');
import express from 'express';



const response = await fetch('http://nginx/api/test');
const data = await response.json();

console.log(data);