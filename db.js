const mariadb = require("mariadb");

module.exports = {
    connect: async function asyncFunction() {
        let conn;
        
        const pool = mariadb.createPool({
            host: "192.168.242.128", 
            user: "psk", 
            password: "sky1359", 
            database: "board", 
            connectionLimit: 5
        });
    
        try {
          conn = await pool.getConnection();
          const rows = await conn.query("SELECT 1 as val");
          console.log(rows);
          // rows: [ {val: 1}, meta: ... ]
      
        //   const res = await conn.query("INSERT INTO users value (?, ?, ?)", [0, "psk2", "sky1359"]);
        //   console.log(res);
          // res: { affectedRows: 1, insertId: 1, warningStatus: 0 }
      
        } finally {
          if (conn) conn.release(); //release to pool
          console.log("success")
        }
    }
}