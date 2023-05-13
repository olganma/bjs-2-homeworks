function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let Olga = new Student();
let Vasya = new Student();

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
  if (!this.marks) {
    console.log("Студент отчислен")
    return;
  }
  this.marks.push(...marks);
}

Student.prototype.getAverage = function() {
  if (!this.marks || !this.marks.length) {
    return 0;
  }
  let sum = this.marks.reduce((totalSum, studentMark) => totalSum + studentMark);
  return (sum / this.marks.length);
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}