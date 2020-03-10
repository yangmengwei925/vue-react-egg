'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx ,app} = this;

    ctx.body = app.sendMes(0,'登录成功')
  }
}

module.exports = LoginController;