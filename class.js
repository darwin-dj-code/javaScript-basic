class Student {
  constructor(name, year, dept, rollNumber) {
    this.name = name;
    this.year = year;
    this.dept = dept;
    this.rollNumber = rollNumber;
  }

  log() {
    console.log("Student Details");
    console.log(
      " Name : " +
        this.name +
        "\n Year : " +
        this.year +
        "\n Department : " +
        this.dept +
        "\n Roll Number : " +
        this.rollNumber +
        ""
    );
  }
}



let student = new Student("Ram", "3", "CSE", 101989);

student.log();

