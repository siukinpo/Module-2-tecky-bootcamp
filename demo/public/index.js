console.log("hi");
let studentContainer = document.querySelector("#student-container");

// fetch("/students")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

async function main() {
  let response = await fetch("/students");
  console.log(response);
  let students = await response.json();
  console.log(students);
  for (let [idx, student] of students.entries()) {
    console.log(idx, student);
    let studentDiv = document.createElement("div");
    studentDiv.classList.add("student");
    studentDiv.textContent = "name: " + student.name;
    let deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", async (event) => {
      let response = await fetch(`/students/${idx}`, {
        method: "DELETE",
      });
      let result = await response.json();
      console.log(result);
    });
    deleteBtn.textContent = "delete";
    studentDiv.appendChild(deleteBtn);
    studentContainer.appendChild(studentDiv);
  }
}

main();
