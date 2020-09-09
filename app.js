const pieces = d3.select(".body");

const svg = pieces.append("svg").attr("height", "800px").attr("width", "800px");

const gameSettings = {
  height: 800,
  width: 800,
  padding: 50,
  nEnemies: 20,
};

const scoreBoard = {
  score: 0,
  best: 0,
};

const player = svg
  .append("circle")
  .attr("cx", 400)
  .attr("cy", 400)
  .attr("r", 8)
  .style("fill", "yellow")
  .style("stroke", "blue")
  .style("stroke-width", 1);

// const dragHandler = d3.drag().on("drag", function () {
//   svg.select(this).attr("cx", svg.event.x).attr("cy", svg.event.y);
// });

// dragHandler(player.selectAll("use"));

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

  // function createEnemies() {
  //   _.range(0, gameSettings.nEnemies).map(i) = {
  //     id : i,
  //     x : Math.random() * 100,
  //     y : Math.random() * 100,
  //   }
  // }

function autoTransition(input){
  input
  .append("circle")
  .transition()
  .duration(3000)
  .attr("cx", Math.random() * 790)
  .attr("cy", Math.random() * 790)
}

function trans(input) {
  d3.selectAll(input)
  .transition()
  .duration(3000)
  .attr("cx", Math.random() * 790)
  .attr("cy", Math.random() * 790)
  .on("end", function(){trans(input)})
  }

var enemyTemplate = svg
.append("circle")
.attr("cx", 0)
.attr("cy", 0)
.attr("r", 8)
.style("fill", "silver")
.style("stroke", "red")
.style("stroke-width", 1)
.transition()
.duration(3000)
.attr("cx", Math.random() * 790)
.attr("cy", Math.random() * 790)
.on("end", function(){trans(enemyTemplate)})

// function totalEnemies(enemyTemplate, gameSettings){
//   let k = 0;
//   for(let i = 0; i < gameSettings; i++){
//     console.log(gameSettings)
//     let array = [this['enemy' + k ] = enemyTemplate];
//   }
//   return array;
// }
// totalEnemies(enemyTemplate, gameSettings.nEnemies)

var enemy2 = svg
.append("circle")
.attr("cx", 0)
.attr("cy", 0)
.attr("r", 8)
.style("fill", "silver")
.style("stroke", "red")
.style("stroke-width", 1)
.transition()
.duration(3000)
.attr("cx", Math.random() * 790)
.attr("cy", Math.random() * 790)
.on("end", function(){trans(enemy2)})

var enemy3 = svg
.append("circle")
.attr("cx", 0)
.attr("cy", 0)
.attr("r", 8)
.style("fill", "silver")
.style("stroke", "red")
.style("stroke-width", 1)
.transition()
.duration(3000)
.attr("cx", Math.random() * 790)
.attr("cy", Math.random() * 790)
.on("end", function(){trans(enemy3)})

var enemy4 = svg
.append("circle")
.attr("cx", 0)
.attr("cy", 0)
.attr("r", 8)
.style("fill", "silver")
.style("stroke", "red")
.style("stroke-width", 1)
.transition()
.duration(3000)
.attr("cx", Math.random() * 790)
.attr("cy", Math.random() * 790)
.on("end", function(){trans(enemy4)})

var enemy5 = svg
.append("circle")
.attr("cx", 0)
.attr("cy", 0)
.attr("r", 8)
.style("fill", "silver")
.style("stroke", "red")
.style("stroke-width", 1)
.transition()
.duration(3000)
.attr("cx", Math.random() * 790)
.attr("cy", Math.random() * 790)
.on("end", function(){trans(enemy5)})

var enemy6 = svg
.append("circle")
.attr("cx", 0)
.attr("cy", 0)
.attr("r", 8)
.style("fill", "silver")
.style("stroke", "red")
.style("stroke-width", 1)
.transition()
.duration(3000)
.attr("cx", Math.random() * 790)
.attr("cy", Math.random() * 790)
.on("end", function(){trans(enemy6)})

var enemy7 = svg
.append("circle")
.attr("cx", 0)
.attr("cy", 0)
.attr("r", 8)
.style("fill", "silver")
.style("stroke", "red")
.style("stroke-width", 1)
.transition()
.duration(3000)
.attr("cx", Math.random() * 790)
.attr("cy", Math.random() * 790)
.on("end", function(){trans(enemy7)})

var enemy8 = svg
.append("circle")
.attr("cx", 0)
.attr("cy", 0)
.attr("r", 8)
.style("fill", "silver")
.style("stroke", "red")
.style("stroke-width", 1)
.transition()
.duration(3000)
.attr("cx", Math.random() * 790)
.attr("cy", Math.random() * 790)
.on("end", function(){trans(enemy8)})

var enemy9 = svg
.append("circle")
.attr("cx", 0)
.attr("cy", 0)
.attr("r", 8)
.style("fill", "silver")
.style("stroke", "red")
.style("stroke-width", 1)
.transition()
.duration(3000)
.attr("cx", Math.random() * 790)
.attr("cy", Math.random() * 790)
.on("end", function(){trans(enemy9)})

var enemy10 = svg
.append("circle")
.attr("cx", 0)
.attr("cy", 0)
.attr("r", 8)
.style("fill", "silver")
.style("stroke", "red")
.style("stroke-width", 1)
.transition()
.duration(3000)
.attr("cx", Math.random() * 790)
.attr("cy", Math.random() * 790)
.on("end", function(){trans(enemy10)})

var enemy11 = svg
.append("circle")
.attr("cx", 0)
.attr("cy", 0)
.attr("r", 8)
.style("fill", "silver")
.style("stroke", "red")
.style("stroke-width", 1)
.transition()
.duration(3000)
.attr("cx", Math.random() * 790)
.attr("cy", Math.random() * 790)
.on("end", function(){trans(enemy11)})

var enemy12 = svg
.append("circle")
.attr("cx", 0)
.attr("cy", 0)
.attr("r", 8)
.style("fill", "silver")
.style("stroke", "red")
.style("stroke-width", 1)
.transition()
.duration(3000)
.attr("cx", Math.random() * 790)
.attr("cy", Math.random() * 790)
.on("end", function(){trans(enemy12)})

var enemy13 = svg
.append("circle")
.attr("cx", 0)
.attr("cy", 0)
.attr("r", 8)
.style("fill", "silver")
.style("stroke", "red")
.style("stroke-width", 1)
.transition()
.duration(3000)
.attr("cx", Math.random() * 790)
.attr("cy", Math.random() * 790)
.on("end", function(){trans(enemy13)})

var enemy14 = svg
.append("circle")
.attr("cx", 0)
.attr("cy", 0)
.attr("r", 8)
.style("fill", "silver")
.style("stroke", "red")
.style("stroke-width", 1)
.transition()
.duration(3000)
.attr("cx", Math.random() * 790)
.attr("cy", Math.random() * 790)
.on("end", function(){trans(enemy14)})

var enemy15 = svg
.append("circle")
.attr("cx", 0)
.attr("cy", 0)
.attr("r", 8)
.style("fill", "silver")
.style("stroke", "red")
.style("stroke-width", 1)
.transition()
.duration(3000)
.attr("cx", Math.random() * 790)
.attr("cy", Math.random() * 790)
.on("end", function(){trans(enemy15)})

var enemy16 = svg
.append("circle")
.attr("cx", 0)
.attr("cy", 0)
.attr("r", 8)
.style("fill", "silver")
.style("stroke", "red")
.style("stroke-width", 1)
.transition()
.duration(3000)
.attr("cx", Math.random() * 790)
.attr("cy", Math.random() * 790)
.on("end", function(){trans(enemy16)})

var enemy17 = svg
.append("circle")
.attr("cx", 0)
.attr("cy", 0)
.attr("r", 8)
.style("fill", "silver")
.style("stroke", "red")
.style("stroke-width", 1)
.transition()
.duration(3000)
.attr("cx", Math.random() * 790)
.attr("cy", Math.random() * 790)
.on("end", function(){trans(enemy17)})

var enemy18 = svg
.append("circle")
.attr("cx", 0)
.attr("cy", 0)
.attr("r", 8)
.style("fill", "silver")
.style("stroke", "red")
.style("stroke-width", 1)
.transition()
.duration(3000)
.attr("cx", Math.random() * 790)
.attr("cy", Math.random() * 790)
.on("end", function(){trans(enemy18)})

var enemy19 = svg
.append("circle")
.attr("cx", 0)
.attr("cy", 0)
.attr("r", 8)
.style("fill", "silver")
.style("stroke", "red")
.style("stroke-width", 1)
.transition()
.duration(3000)
.attr("cx", Math.random() * 790)
.attr("cy", Math.random() * 790)
.on("end", function(){trans(enemy19)})

var enemy20 = svg
.append("circle")
.attr("cx", 0)
.attr("cy", 0)
.attr("r", 8)
.style("fill", "silver")
.style("stroke", "red")
.style("stroke-width", 1)
.transition()
.duration(3000)
.attr("cx", Math.random() * 790)
.attr("cy", Math.random() * 790)
.on("end", function(){trans(enemy20)})