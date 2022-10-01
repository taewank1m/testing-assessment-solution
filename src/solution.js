/*
  Write a function that separates students into two buckets based on a given score. The end result for the "happy path" should be an array with two arrays inside of it.
*/

function partitionStudentsByScore(students, score) {
  let result = [belowScore = [], aboveScore = []];
  if (!students || !score) { return result };
  const sort = students.forEach((student) => {
    student.score <= score ? belowScore.push(student) : aboveScore.push(student);
  });  
  return result; 
}

module.exports = partitionStudentsByScore;
