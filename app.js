const pieces = d3.select(".pieces");

const svg = pieces.append("svg");

const gameSettings = {
    yAxes : 800,
    xAxes : 800,
    xEnemies : 20,
}

const gameboard = svg.attr("width", gameSettings.xAxes)
                     .attr("height", gameSettings.yaxes)

const enemies = svg.append("circle")
                   .attr("cx", "25")
                   .attr("cy", "25")
                   .attr("r", 25)
                   .style("fill", "silver")
                   .style("stroke", "red")
                   .style("stroke-width", 4)

const player = svg.append("circle")
                  .attr("cx", "25")
                  .attr("cy", "25")
                  .attr("r", 25)
                  .style("fill", "yellow")
                  .style("stroke", "blue")
                  .style("stroke-width", 4)


