let name = prompt("Enter name: ");
let roll = parseInt(prompt("Enter roll number: "));
let m1 = parseFloat(prompt("Enter first marks: "));
let m2 = parseFloat(prompt("Enter second marks: "));
let m3 = parseFloat(prompt("Enter third marks: "));
let m4 = parseFloat(prompt("Enter fourth marks: "));
let m5 = parseFloat(prompt("Enter fifth marks: "));


const total = (m1, m2, m3, m4, m5) => {
    return m1+m2+m3+m4+m5
}

console.log(`Name of the Student: ${name}`)
console.log(`Roll number of the Student: ${roll}`)

let t = total(m1, m2, m3, m4, m5);
console.log(`${t} / 500`)

const result = () => {
    if(m1 >= 33 && m2 >= 33 && m3 >= 33 && m4 >= 33 && m5 >= 33){
        console.log("Passed")
    } else {
        console.log("Failed")
    }
}

result();

const percentage = (marks) => {
    return marks / 5;
}

let percent = percentage(t);

console.log(`Percentage: ${percent}`)

switch (true) {
    case (percent >= 90):
        console.log("Grade: A+");
        break;

    case (percent >= 80):
        console.log("Grade: A");
        break;

    case (percent >= 70):
        console.log("Grade: B");
        break;

    case (percent >= 60):
        console.log("Grade: C");
        break;

    case (percent >= 50):
        console.log("Grade: D");
        break;

    case (percent >= 33):
        console.log("Grade: E");
        break;

    default:
        console.log("Grade: F (Fail)");
}

const maxMarks = () => {
    return Math.max(m1, m2, m3, m4, m5);
}

const minMarks = () => {
    return Math.min(m1, m2, m3, m4, m5);
}

console.log(`Max marks: ${maxMarks()}`)
console.log(`Min marks: ${minMarks()}`)