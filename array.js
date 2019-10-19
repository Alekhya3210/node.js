var grades = [50, 60, 80, 97];
var totalGrade = 0;
grades.push(55);
grades.unshift(48);
grades.forEach(function(grade){
	totalGrade = totalGrade + grade;
	console.log(' current total is ' + totalGrade);
});
var average = totalGrade/grades.length;
console.log (' Average is ' + average);
