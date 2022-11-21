google.charts.load('current', {
    'packages':['geochart'],
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Popularity'],
      ['France', 117.7],
      ['Mexico', 51.1],
      ['United States', 45.0],
      ['Italy', 38.4],
      ['Hungary', 31.6],
      ['Croatia', 21.6]
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }