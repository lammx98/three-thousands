"use strict";
import express from 'express';
import mongoose from 'mongoose'
const bodyParser = require('body-parser')
require('dotenv').config()
/** env variables */
const DATABASE_CONNECTION = process.env.DATABASE_CONNECTION as string
const PORT = process.env.PORT as string
/** import components */

/** global settings */

/** server */
const app = express()
/** connect mongo DB */
mongoose.set('strictQuery', false)
mongoose.connect(DATABASE_CONNECTION)

mongoose.connection.on('error' , (error) => { console.log(error); })
mongoose.connection.once('connected', () => { console.log(`Connected to {DATABASE_CONNECTION}`); })