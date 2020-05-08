'use strict';

var utils = require('../utils/writer.js');
var Templates = require('../service/TemplatesService');

module.exports.createTemplate = function createTemplate (req, res, next) {
  var template = req.swagger.params['template'].value;
  var name = req.swagger.params['name'].value;
  Templates.createTemplate(template,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTemplateById = function getTemplateById (req, res, next) {
  Templates.getTemplateById()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
