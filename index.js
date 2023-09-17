const express = require("express");
const cors = require('cors');
const db = require("./db");
const app = express();

app.use(cors());

// 라우팅
// 주소로 요청했을 때 응답할 데이터 정의
app.get("/", function (req, res) {
  res.send('Hello World');
})

app.get("/json", function (req, res) {
    res.json({name: "psk"});
})

app.get("/user/:id", function (req, res) {
    // http://localhost:8000/user/psk
    // {"id": "xxx"}
    res.send(req.params);
})

app.get("/query/:id", function (req, res) {
    // http://localhost:8000/query/psk1210?name=psk&age=25
    // {"name": "psk", "age": "25"}
    res.send(req.query)
})

// 8000번으로의 요청을 듣고 있겠다는 뜻. 콜백함수엔 서버를 돌리고 나서 실행할 동작을 입력함.
app.listen(8000, () => {
    console.log("hello, world!");
    db.connect();
})