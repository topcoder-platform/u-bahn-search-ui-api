'use strict';


/**
 * Create a new template
 * Accepts a file as input and responds with an id to identify the file later. Uploads the file to Amazon S3 and stores the url against the template id in the database. Before upload to S3, the file type needs to be detected and passed as content-type during S3 upload. Needs to restrict file size to 2 MB
 *
 * template File The template file that needs to be created. Supports any format.
 * name String The name of the template. Should be unique
 * returns Template
 **/
exports.createTemplate = function(template,name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get template identified by id
 * Responds with the details of a template
 *
 * returns Template
 **/
exports.getTemplateById = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

