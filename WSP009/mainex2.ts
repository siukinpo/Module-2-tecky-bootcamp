import pg from "pg";
import dotenv from "dotenv";
import XLSX from "xlsx";

dotenv.config();
const client = new pg.Client({
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let dt = XLSX.readFile("course-0488031531243-WSP009-exercise.xlsx");
// let data = {};
// // console.log(dt.Sheets.keys());
// for (let key in dt.Sheets) {
//   data[key] = XLSX.utils.sheet_to_json(dt.Sheets[key]);
// }
// console.log(data["user"]);

// for (let idx of dt.Sheets){
//     const data[idx+1] = XLSX.utils.sheet_to_json(dt.Sheets[dt.SheetNames[idx]], { header: 1 });
// }
// const first_worksheet = dt.Sheets[dt.SheetNames[0]];
// const data1 = XLSX.utils.sheet_to_json(first_worksheet, { header: 1 });
// console.log(data1);
// const second_worksheet = dt.Sheets[dt.SheetNames[1]];
// const data2 = XLSX.utils.sheet_to_json(second_worksheet, { header: 1 });
// console.log(data2);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export async function main() {
  await client.connect(); // "dial-in" to the postgres server
  const user = {
    username: "gordon, '123'); select * from users;",
    password: "tecky",
  };
  await client.query(
    `INSERT INTO users (username,password) values (${user.username},$2)`
    // , [
    //   user.username,
    //   user.password,
    // ]
  );

  const result = await client.query(`SELECT * from users where username = $1`, [
    "gordon",
  ]);
  console.log(result.rows[0].username, result.rows[0].password); // gordon
  await client.end(); // close connection with the database
}
main();

// console.log("reading excel data...");
// const filename = "WSP009-exercise.xlsx";
// var workbook = XLSX.readFile(filename);
// console.log("workbook: ", workbook);
