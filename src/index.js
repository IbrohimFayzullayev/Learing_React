import React from "react";
import ReactDOM from "react-dom";
import faker from "@faker-js/faker";
import CommentComponent from "./CommentComponent.js";
const App = function () {
  return (
    <div>
      <CommentComponent
        name={faker.name.firstName()}
        img={faker.image.avatar()}
        comment={faker.hacker.phrase()}
        day={2}
      />
      <CommentComponent
        name={faker.name.firstName()}
        img={faker.image.avatar()}
        comment={faker.hacker.phrase()}
        day={3}
      />
      <CommentComponent
        name={faker.name.firstName()}
        img={faker.image.avatar()}
        comment={faker.hacker.phrase()}
        day={4}
      />
      <CommentComponent
        name={faker.name.firstName()}
        img={faker.image.avatar()}
        comment={faker.hacker.phrase()}
        day={5}
      />
      <CommentComponent
        name={faker.name.firstName()}
        img={faker.image.avatar()}
        comment={faker.hacker.phrase()}
        day={6}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

// let getDate = function () {
//   let week = [
//     "Yanvar",
//     "Fevral",
//     "Mart",
//     "Aprel",
//     "May",
//     "Iyun",
//     "Iyul",
//     "Avgust",
//     "Sentyabr",
//     "Oktyabr",
//     "Noyabr",
//     "Dekabr",
//   ];
//   const date = new Date();
//   const vaqt = `${date.getHours()}:${String(date.getMinutes()).padStart(
//     2,
//     0
//   )}:${String(date.getSeconds()).padStart(2, 0)}`;
//   const kun = `${date.getDate()}-${
//     week[date.getMonth()]
//   } ${date.getFullYear()}`;
//   let r = vaqt + " " + kun;
//   return r;
// };

// const App = function () {
//   let textStyle = {
//     textAlign: "center",
//     color: "green",
//   };
//   return (
//     <div>
//       <h1 style={textStyle}>Hozirgi vaqt: {getDate()}</h1>
//     </div>
//   );
// };
// setInterval(() => {
// }, 1000);

// currentTime();
// const App = function () {
//   const styleBtn = {
//     color: "white",
//     backgroundColor: "red",
//     cursor: "pointer",
//     border: "none",
//     padding: "4px 8px",
//   };
//   return (
//     <div>
//       <label htmlFor="name">Enter Name</label>
//       <input className="inputClass" id="name" type="text" />
//       <button style={styleBtn}>Submit</button>
//     </div>
//   );
// };
