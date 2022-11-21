google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Element", "Density", { role: "style" } ],
    ["PSOE", 120, "red"],
    ["UnidasPodemos", 33, "purple"],
    ["PP", 88, "blue"],
    ["Vox", 52, "color: green"],
    ["ERC", 21.45, "color: yellow"]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
                   { calc: "stringify",
                     sourceColumn: 1,
                     type: "string",
                     role: "annotation" },
                   2]);

  var options = {
    title: "Congreso de los Diputados",
    width: 700,
    height: 400,
    bar: {groupWidth: "85%"},
    legend: { position: "none" },
    animation:{
      duration: 1000,
      easing: 'out',
    }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
  chart.draw(view, options);

}