require('dotenv').config();

module.exports = {
  EXPRIRED_TOKEN: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoidGVzdCIsInNjb3BlcyI6WyJCVEMiLCJCQ0giLCJFVEgiLCJMVEMiLCJET0dFIiwiREFTSCIsIk5FTyIsIkVUQyIsIkVPUyJdLCJpYXQiOjE1MzMyOTAyNTksImV4cCI6MTUzMzI5NzQ1OX0.G5w17J0zSDBIL_N41TDbUfcJWp2UTYYAF_sDWWl9_WM',
  LOG_LEVEL: process.env.LOG_LEVEL || 'NONE', // ALL, DEBUG, INFO, WARN, ERROR, NONE
  API_KEY: process.env.API_KEY,
  SECRECT: process.env.SECRET_KEY,
  BASE_URL: process.env.BASE_URL,
  AUTH_URL: process.env.AUTH_URL,
};