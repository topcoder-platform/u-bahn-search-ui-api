'use strict';

var utils = require('../utils/writer.js');
var Uploads = require('../service/UploadsService');

module.exports.createUpload = function createUpload (req, res, next) {
  var upload = req.swagger.params['upload'].value;
  Uploads.createUpload(upload)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUploadById = function getUploadById (req, res, next) {
  Uploads.getUploadById()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUploadById = function updateUploadById (req, res, next) {
  var body = req.swagger.params['body'].value;
  Uploads.updateUploadById(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
