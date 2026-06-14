/**
 * Restored source for Webpack Module #58670.
 *
 * Cookie-data adapter barrel.
 */
"use strict"

const { UserDataBase } = require("./UserDataBase")
const { UserDataWeb } = require("./UserDataWeb")
const { UserDataLocalStorage } = require("./UserDataLocalStorage")
const { SessionData } = require("./SessionData")

module.exports = {
  CookieDataBase: UserDataBase,
  CookieDataWeb: UserDataWeb,
  CookieDataLocalStorage: UserDataLocalStorage,
  UserDataBase,
  UserDataWeb,
  UserDataLocalStorage,
  SessionData,
}
