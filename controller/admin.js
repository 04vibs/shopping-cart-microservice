const express = require('express');
const RBAC = require('rbac').default;
import secure from 'rbac/controllers/express';
 
// your custom controller for express
function adminController(req, res, next) {
  res.send('Hello admin');
}
 
const app = express();
const rbac = new RBAC({
  roles: ['admin', 'user'],
});
 
await rbac.init();
 
// setup express routes
app.use('/admin', secure.hasRole(rbac, 'admin'), adminController);