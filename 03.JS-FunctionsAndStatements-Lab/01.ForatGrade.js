function formatGrade(grade) {
  let gradeDesc = "";
  if (grade < 3) {
    gradeDesc = "Fail";
  } else if (grade < 3.5) {
    gradeDesc= "Poor";
  } else if (grade < 4.5) {
    gradeDesc = "Good";
  } else if (grade < 5.5) {
    gradeDesc = "Very good";
  } else {
    gradeDesc = "Excellent";
  }
  if(gradeDesc==='Fail'){
    console.log(`${gradeDesc} (2)`);
  }else{
  console.log(`${gradeDesc} (${grade.toFixed(2)})`);
  }
}
formatGrade(2.99);
