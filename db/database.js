var Config = require('../conf/config');
var odbc = require('odbc');

class Database {
  
  // コンストラクタ
  constructor() {
    this.connection = null;
  }


  // 接続
  async connect() {
    try {
      this.connection = await odbc.connect(Config.getDbConnParam());
    } catch (err) {
      throw err;
    }
  }


  // クエリ実行
  async query(sql, bind = null) {
    if (!this.connection) {
      throw new Error('DB接続が確立されていません');
    }

    try {
      const result = await this.connection.query(sql, bind);
      return result;
    } catch (err) {
      throw err;
    }
  }


  // トランザクション開始
  async beginTransaction() {
    if (!this.connection) {
      throw new Error('DB接続が確立されていません');
    }

    try {
      await this.connection.beginTransaction();
    } catch (err) {
      throw err;
    }
  }


  // コミット
  async commit() {
    if (!this.connection) {
      throw new Error('DB接続が確立されていません');
    }

    try {
      await this.connection.commit();
    } catch (err) {
      throw err;
    }
  }


  // ロールバック
  async rollback() {
    if (!this.connection) {
      throw new Error('DB接続が確立されていません');
    }

    try {
      await this.connection.rollback();
    } catch (err) {
      throw err;
    }
  }

  
  // 切断
  async close() {
    if (!this.connection) {
      return;
    }

    try {
      await this.connection.close();
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Database;
