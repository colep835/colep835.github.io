let A1=9
let A2=60
let q1=20

let score = (A1 + A2 + q1) / (10 + 100 +20);
score = Math.round(score * 100);

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
document.write("Average Score: " + score + "<br>");

let row= 4
let column= 5
let table = "<table cellspacing='0' border='1'>"

    for (let x = 1; x <= row; x++) {
    table+=(`<tr>`);
    for (let y = 1; y <= column; y++) {
    table+=(`<td>Row ${x}, Column ${y}</td>`);
    }
    table+=(`</tr>`);    
}
    document.write(table);

