"use strict";
const examResult = {
    name: "Alice",
    scores: [["Math", 85], ["Science", 92], ["History", 78]],
    totalScore: 255
};
function displayAverageScore(result) {
    const totalSubjects = result.scores.length;
    const totalScore = result.totalScore;
    const averageScore = totalScore / totalSubjects;
    console.log(`Average Score for ${result.name}: ${averageScore.toFixed(2)}`);
}
displayAverageScore(examResult);
