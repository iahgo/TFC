import { expect } from 'chai';
import * as chai from 'chai';
import * as bcrypt from 'bcryptjs';
import * as sinon from 'sinon';
import UserModels from '../database/models/user.model';
import UserService from '../services/user.service';
import { app } from '../app';

chai.use(require('chai-http'));
// @ts-ignore
import chaiHttp = require('chai-http');
chai.use(chaiHttp);

const userLogin = {
  email: 'admin@admin.com',
  password: 'secret_admin',
}
const testValidUser = {
    id: 1,
      username: 'Admin',
      role: 'admin',
      email: 'admin@admin.com',
      password: 'secret_admin',
  };
const testInvalidUser = {
    id: 1,
      username: 'Admin',
      role: 'undefined',
      email: 'iahgo@gmail.com',
      password: 'senha_invalida',
}


