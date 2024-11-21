class Config {
  static getDbConnParam() {
    var rtnVal = "DRIVER="         + process.env.DB_DRIVER         + ";"
               + "Integrated="     + process.env.DB_INTEGRATED     + ";" 
               + "CommLinks="      + process.env.DB_COMMLINKS      + ";" 
               + "CommBufferSize=" + process.env.DB_COMMBUFFERSIZE + ";"
               + "ENG="            + process.env.DB_ENG            + ";"
               + "DBN="            + process.env.DB_DBN            + ";"
               + "CHARSET="        + process.env.DB_CHARSET        + ";"
               + "UID="            + process.env.DB_UID            + ";"
               + "PWD="            + process.env.DB_PWD            + ";"
               ;
  
    return rtnVal;
  }
}

module.exports = Config;