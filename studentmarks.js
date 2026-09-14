function calculateTotal(m1, m2, m3, m4, m5) {
    return m1 + m2 + m3 + m4 + m5;
}

function calculatePercentage(total) {
    return total / 5;
}

function getGrade(percentage) {
    if (percentage >= 90) {
        return "A+";
    } else if (percentage >= 80) {
        return "A";
    } else if (percentage >= 70) {
        return "B";
    } else if (percentage >= 60) {
        return "C";
    } else if (percentage >= 50) {
        return "D";
    } else {
        return "F";
    }
}

function runProgram() {
    let name = prompt("Enter student name:");
    let rollNo = prompt("Enter roll number:");

    let m1 = Number(prompt("Enter marks in Subject 1:"));
    let m2 = Number(prompt("Enter marks in Subject 2:"));
    let m3 = Number(prompt("Enter marks in Subject 3:"));
    let m4 = Number(prompt("Enter marks in Subject 4:"));
    let m5 = Number(prompt("Enter marks in Subject 5:"));

    let total = calculateTotal(m1, m2, m3, m4, m5);
    let percentage = calculatePercentage(total);
    let grade = getGrade(percentage);

    document.getElementById("result").innerHTML = `
        <h2>Student Result</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Roll Number:</strong> ${rollNo}</p>
        <p><strong>Total Marks:</strong> ${total} / 500</p>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
    `;
}
