/**
 * App constants
 */
const UserRoles = {
  admin: 'Admin',
  administrator: 'Administrator',
  topcoderUser: 'Topcoder User',
  copilot: 'Copilot'
}

const Scopes = {
  CreateUpload: 'create:upload',
  GetUpload: 'get:upload',
  UpdateUpload: 'update:upload',
  AllUpload: 'all:upload',
  CreateTemplate: 'create:template',
  GetTemplate: 'get:template',
  AllTemplate: 'all:template'
}

const AllAuthenticatedUsers = [UserRoles.admin, UserRoles.administrator, UserRoles.topcoderUser, UserRoles.copilot]

module.exports = {
  Scopes,
  AllAuthenticatedUsers
}
