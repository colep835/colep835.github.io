const years = ["2015-2016", "2025-2026", "2026-2027"];
const catoids = [24,79,84];
const programs = ["BSIT", "BASIT", "BSCS"];
8
10
const poids = [
[2967, 2972, 2587],
[10870, 10873, 10777],
[11748, 11751, 11680]
]
// 2024-2025
// 2025-2026
// 2026-2027
let html = ` `;
for(let x=0 ;x<3; x++)
for(let i=0 ;i<3; i++)
html+=`<a href = https://catalog.kennesaw.edu/preview_program.php?catoid=${catoids[5]}&poid=${poid[0][i]}>
${programs[i]}
</a>`;
html += `<a href = https://catalog.kennesaw.edu/preview_program.php?catoid=${catoids[5]}&poid=${poid[1][i]}>
${programs[i]}
</a>`;
html+=`<br>`;

document.write(html)
