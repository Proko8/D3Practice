const pieces = d3.select(".body");

const svg = pieces.append("svg").attr("height", "800px").attr("width", "800px");

const gameSettings = {
  height: 800 /*- margin.top - margin.bottom,*/,
  width: 800 /*- margin.left - margin.right,*/,
  padding: 20,
  enemies: 20,
};

const scoreBoard = {
  score: 0,
  best: 0,
};

// const totalEnemies = svg

// function allEnemies(enemies) {
//   let i = 0;
//   while (i < enemies) {
//     totalEnemies
//       .append("circle")
//       .attr("cx", 50)
//       .attr("cy", 50)
//       .attr("r", 5)
//       .style("fill", "silver")
//       .style("stroke", "red")
//       .style("stroke-width", 1)
//     i++;
//   }
// }
// allEnemies(gameSettings.enemies);

// totalEnemies.transition()
//             .duration(1000)
//             .attr("cx", 400)

var totalEnemies = svg
  .append("circle")
  .attr("cx", 400)
  .attr("cy", 200)
  .attr("r", 8)
  .style("fill", "silver")
  .style("stroke", "red")
  .style("stroke-width", 1);

totalEnemies
  .transition()
  .duration(1000)
  .attr("cx", Math.random() * 500)
  .attr("cy", Math.random() * 500);

var player = svg
  .append("circle")
  .attr("cx", 400)
  .attr("cy", 200)
  .attr("r", 8)
  .style("fill", "yellow")
  .style("stroke", "blue")
  .style("stroke-width", 1);

player
  .transition()
  .duration(1000)
  .attr("cx", Math.random() * 500)
  .attr("cy", Math.random() * 500)
  // .each("Start", function () {
  //   d3.select(this);
  // });

const scoreboard = svg
  .append("rect")
  .attr("width", "125")
  .attr("height", "50")
  .attr("x", 0)
  .attr("y", 0)
  .attr("fill", "transparent")
  .attr("stroke", "black")
  .attr("x", 675);

const score = svg
  .append("text")
  .text(`Current Score : ${scoreBoard.score}`)
  .attr("x", 680)
  .attr("y", 20);

const best = svg
  .append("text")
  .text(`High Score : ${scoreBoard.best}`)
  .attr("x", 696)
  .attr("y", 40);
