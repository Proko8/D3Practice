const pieces = d3.select(".body");

const svg = pieces.append("svg").attr("height", "800px").attr("width", "800px");

const gameSettings = {
  height: 800,
  width: 800,
  padding: 20,
  nEnemies: 20,
};

const scoreBoard = {
  score: 0,
  best: 0,
};

var player = svg
  .append("circle")
  .attr("cx", 400)
  .attr("cy", 400)
  .attr("r", 8)
  .style("fill", "yellow")
  .style("stroke", "blue")
  .style("stroke-width", 1);
player.append("use");

var dragHandler = d3.drag().on("drag", function () {
  d3.select(this).attr("cx", d3.event.x).attr("cy", d3.event.y);
});

dragHandler(svg.selectAll("use"));

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


  var totalEnemies = svg
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 8)
  .style("fill", "silver")
  .style("stroke", "red")
  .style("stroke-width", 1)
  .transition()
  .duration(1000)
  .attr("cx", Math.random() * 790)
  .attr("cy", Math.random() * 790)
  .end();

  var totalEnemies = svg
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 8)
  .style("fill", "silver")
  .style("stroke", "red")
  .style("stroke-width", 1)
  .transition()
  .duration(1000)
  .attr("cx", Math.random() * 790)
  .attr("cy", Math.random() * 790);
  var totalEnemies = svg
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 8)
  .style("fill", "silver")
  .style("stroke", "red")
  .style("stroke-width", 1)
  .transition()
  .duration(1000)
  .attr("cx", Math.random() * 790)
  .attr("cy", Math.random() * 790);
  var totalEnemies = svg
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 8)
  .style("fill", "silver")
  .style("stroke", "red")
  .style("stroke-width", 1)
  .transition()
  .duration(1000)
  .attr("cx", Math.random() * 790)
  .attr("cy", Math.random() * 790);
  var totalEnemies = svg
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 8)
  .style("fill", "silver")
  .style("stroke", "red")
  .style("stroke-width", 1)
  .transition()
  .duration(1000)
  .attr("cx", Math.random() * 790)
  .attr("cy", Math.random() * 790);
  var totalEnemies = svg
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 8)
  .style("fill", "silver")
  .style("stroke", "red")
  .style("stroke-width", 1)
  .transition()
  .duration(1000)
  .attr("cx", Math.random() * 790)
  .attr("cy", Math.random() * 790);
  var totalEnemies = svg
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 8)
  .style("fill", "silver")
  .style("stroke", "red")
  .style("stroke-width", 1)
  .transition()
  .duration(1000)
  .attr("cx", Math.random() * 790)
  .attr("cy", Math.random() * 790);
  var totalEnemies = svg
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 8)
  .style("fill", "silver")
  .style("stroke", "red")
  .style("stroke-width", 1)
  .transition()
  .duration(1000)
  .attr("cx", Math.random() * 790)
  .attr("cy", Math.random() * 790);
  var totalEnemies = svg
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 8)
  .style("fill", "silver")
  .style("stroke", "red")
  .style("stroke-width", 1)
  .transition()
  .duration(1000)
  .attr("cx", Math.random() * 790)
  .attr("cy", Math.random() * 790);
  var totalEnemies = svg
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 8)
  .style("fill", "silver")
  .style("stroke", "red")
  .style("stroke-width", 1)
  .transition()
  .duration(1000)
  .attr("cx", Math.random() * 790)
  .attr("cy", Math.random() * 790);
  var totalEnemies = svg
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 8)
  .style("fill", "silver")
  .style("stroke", "red")
  .style("stroke-width", 1)
  .transition()
  .duration(1000)
  .attr("cx", Math.random() * 790)
  .attr("cy", Math.random() * 790);
  var totalEnemies = svg
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 8)
  .style("fill", "silver")
  .style("stroke", "red")
  .style("stroke-width", 1)
  .transition()
  .duration(1000)
  .attr("cx", Math.random() * 790)
  .attr("cy", Math.random() * 790);
  var totalEnemies = svg
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 8)
  .style("fill", "silver")
  .style("stroke", "red")
  .style("stroke-width", 1)
  .transition()
  .duration(1000)
  .attr("cx", Math.random() * 790)
  .attr("cy", Math.random() * 790);
  var totalEnemies = svg
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 8)
  .style("fill", "silver")
  .style("stroke", "red")
  .style("stroke-width", 1)
  .transition()
  .duration(1000)
  .attr("cx", Math.random() * 790)
  .attr("cy", Math.random() * 790);
  var totalEnemies = svg
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 8)
  .style("fill", "silver")
  .style("stroke", "red")
  .style("stroke-width", 1)
  .transition()
  .duration(1000)
  .attr("cx", Math.random() * 790)
  .attr("cy", Math.random() * 790);
  var totalEnemies = svg
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 8)
  .style("fill", "silver")
  .style("stroke", "red")
  .style("stroke-width", 1)
  .transition()
  .duration(1000)
  .attr("cx", Math.random() * 790)
  .attr("cy", Math.random() * 790);
