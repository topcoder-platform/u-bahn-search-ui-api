'use strict';


/**
 * Upload an excel file for batch processing
 * Accepts only an excel file as input and responds with an id to identify the upload later. Uploads the file to Amazon S3 and stores the url against the upload id in the database. No restriction on file size for now. On upload, the status against the upload id is set to `pending` in the database and the entire upload object (the upload database item) is posted to the Bus API
 *
 * upload File The excel file that needs to be processed
 * returns Upload
 **/
exports.createUpload = function(upload) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"created":"2020-05-08T17:31:44.947Z","updated":"2020-05-08T17:31:44.947Z","createdBy":23124329,"updatedBy":23124329,"id":"5af256f0-9152-11ea-bb37-0242ac130002","url":"https://amockS3urlthatonlyadmincanaccess.com","status":"pending","info":""};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the details of an upload
 * Responds with the details of an upload
 *
 * returns Upload
 **/
exports.getUploadById = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"created":"2020-05-08T17:31:44.947Z","updated":"2020-05-08T17:31:44.947Z","createdBy":23124329,"updatedBy":23124329,"id":"5af256f0-9152-11ea-bb37-0242ac130002","url":"https://amockS3urlthatonlyadmincanaccess.com","status":"completed","info":""};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update the upload attributes
 * For now, only support an update on the `status` attribute of the upload associated with the id with either `completed` or `failed` value. Optionally accept an update on the `info` attribute as well.
 *
 * body Body The request body
 * returns Upload
 **/
exports.updateUploadById = function(body) {
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
