import * as bcrypt from 'bcryptjs';
import * as sinon from 'sinon';
import TeamsModel from '../database/models/team.model';
import TeamService from '../services/teams.service';
import teams from './mocks/TeamMocks';
import { app } from '../app';
import * as chai from 'chai';
import { expect } from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Teste o TeamsService', function() {
    afterEach(()=>{
      sinon.restore();
    });

    it('Teste o retorno do findAll', async function() {

        sinon.stub(TeamsModel, 'findAll').resolves();

        const response = await chai.request(app).get('/teams');

        expect(response.status).to.be.equal(200);
    });

    it('Teste o retorno do findByPk', async function() {

      sinon.stub(TeamsModel, 'findByPk').resolves();

      const response = await chai.request(app).get('/teams/:id');

      expect(response.status).to.be.equal(200);
  });


})