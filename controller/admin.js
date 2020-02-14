const express = require('express');
const RBAC = require('rbac').default;
import secure from 'rbac/controllers/express';
 
// your custom controller for express
let adminRole = async(req, res, next) => {
  try {
    // call admin service to do the required functionality
  } catch (error) {
      next(error);
  }
}


module.exports = {
  adminRole
}