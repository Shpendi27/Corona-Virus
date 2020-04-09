var canvas  = document.getElementById("myChart");
var canvas  = new Chart(canvas ,
 {
    title: {
        text: "Grafet dhe Statistikat "
    },
    axisX: {
        valueFormatString: "MMM YYYY"
    },
    axisY2: {
        title: "Grafet dhe Statistikat ",
        prefix: "",
        suffix: "përsona"
    },
    toolTip: {
        shared: true
    },
    legend: {
        cursor: "pointer",
        verticalAlign: "top",
        horizontalAlign: "center",
        dockInsidePlotArea: true,
        itemclick: toogleDataSeries
    },
    data: [{
        type:"line",
        axisYType: "secondary",
        name: "Prishtinë",
        showInLegend: true,
        markerSize: 0,
        yValueFormatString: "#,përsona",
        dataPoints: [		
        { x: new Date(2020, 03, 01), y: 00 },
            { x: new Date(2020, 03, 02), y: 00 },
            { x: new Date(2020, 03, 03), y: 02 },
            { x: new Date(2020, 03, 04), y: 03 },
            { x: new Date(2020, 03, 05), y: 03 },
            { x: new Date(2020, 03, 06), y: 05 },
            { x: new Date(2020, 03, 07), y: 06 },
            { x: new Date(2020, 03, 08), y: 09 },
            { x: new Date(2020, 03, 09), y: 09 },
            { x: new Date(2020, 03, 10), y: 09 },
            { x: new Date(2020, 03, 11), y: 10 },
            { x: new Date(2020, 03, 12), y: 12 },
            { x: new Date(2020, 03, 13), y: 13 },
            { x: new Date(2020, 03, 14), y: 15 },
            { x: new Date(2020, 03, 15), y: 15 },
            { x: new Date(2020, 03, 16), y: 16 },
            { x: new Date(2020, 03, 17), y: 17 },
            { x: new Date(2020, 03, 18), y: 18 },
            { x: new Date(2020, 03, 19), y: 20 },
            { x: new Date(2020, 03, 20), y: 20 },
            { x: new Date(2020, 03, 21), y: 20 },
            { x: new Date(2020, 03, 22), y: 21 },
            { x: new Date(2020, 03, 23), y: 21 },
            { x: new Date(2020, 03, 24), y: 22 },
            { x: new Date(2020, 03, 25), y: 22 },
            { x: new Date(2020, 03, 26), y: 22 },
            { x: new Date(2020, 03, 27), y: 23 },
            { x: new Date(2020, 03, 28), y: 23 },
            { x: new Date(2020, 03, 29), y: 23 },
            { x: new Date(2020, 03, 30), y: 24},
            { x: new Date(2020, 03, 31), y: 25 }
        ]
    },
    {
        type: "line",
        axisYType: "secondary",
        name: "Malishevë",
        showInLegend: true,
        markerSize: 0,
        yValueFormatString: "#,përsona",
        dataPoints: [
        { x: new Date(2020, 03, 01), y: 04 },
            { x: new Date(2020, 03, 02), y: 04 },
            { x: new Date(2020, 03, 03), y: 04 },
            { x: new Date(2020, 03, 04), y: 07 },
            { x: new Date(2020, 03, 05), y: 07 },
            { x: new Date(2020, 03, 06), y: 08 },
            { x: new Date(2020, 03, 07), y: 09 },
            { x: new Date(2020, 03, 08), y: 09 },
            { x: new Date(2020, 03, 09), y: 10 },
            { x: new Date(2020, 03, 10), y: 11 },
            { x: new Date(2020, 03, 11), y: 12 },
            { x: new Date(2020, 03, 12), y: 12 },
            { x: new Date(2020, 03, 13), y: 15 },
            { x: new Date(2020, 03, 14), y: 18 },
            { x: new Date(2020, 03, 15), y: 22 },
            { x: new Date(2020, 03, 16), y: 24 },
            { x: new Date(2020, 03, 17), y: 28 },
            { x: new Date(2020, 03, 18), y: 35 },
            { x: new Date(2020, 03, 19), y: 38 },
            { x: new Date(2020, 03, 20), y: 43 },
            { x: new Date(2020, 03, 21), y: 48 },
            { x: new Date(2020, 03, 22), y: 50 },
            { x: new Date(2020, 03, 23), y: 52 },
            { x: new Date(2020, 03, 24), y: 54 },
            { x: new Date(2020, 03, 25), y: 55 },
            { x: new Date(2020, 03, 26), y: 57 },
            { x: new Date(2020, 03, 27), y: 58 },
            { x: new Date(2020, 03, 28), y: 60 },
            { x: new Date(2020, 03, 29), y: 62 },
            { x: new Date(2020, 03, 30), y: 64 },
            { x: new Date(2020, 03, 31), y: 64 }
        ]
    },
    {
        type: "line",
        axisYType: "secondary",
        name: "Gjakovë",
        showInLegend: true,
        markerSize: 0,
        yValueFormatString: "#,persona",
        dataPoints: [
        { x: new Date(2020, 03, 01), y: 00 },
            { x: new Date(2020, 03, 02), y: 00 },
            { x: new Date(2020, 03, 03), y: 00 },
            { x: new Date(2020, 03, 04), y: 00 },
            { x: new Date(2020, 03, 05), y: 00 },
            { x: new Date(2020, 03, 06), y: 00 },
            { x: new Date(2020, 03, 07), y: 02 },
            { x: new Date(2020, 03, 08), y: 02 },
            { x: new Date(2020, 03, 09), y: 02 },
            { x: new Date(2020, 03, 10), y: 02 },
            { x: new Date(2020, 03, 11), y: 02 },
            { x: new Date(2020, 03, 12), y: 05 },
            { x: new Date(2020, 03, 13), y: 05 },
            { x: new Date(2020, 03, 14), y: 05 },
            { x: new Date(2020, 03, 15), y: 05 },
            { x: new Date(2020, 03, 16), y: 05 },
            { x: new Date(2020, 03, 17), y: 05 },
            { x: new Date(2020, 03, 18), y: 07 },
            { x: new Date(2020, 03, 19), y: 07 },
            { x: new Date(2020, 03, 20), y: 07 },
            { x: new Date(2020, 03, 21), y: 07 },
            { x: new Date(2020, 03, 22), y: 08 },
            { x: new Date(2020, 03, 23), y: 08 },
            { x: new Date(2020, 03, 24), y: 08 },
            { x: new Date(2020, 03, 25), y: 09 },
            { x: new Date(2020, 03, 26), y: 09 },
            { x: new Date(2020, 03, 27), y: 09 },
            { x: new Date(2020, 03, 28), y: 10 },
            { x: new Date(2020, 03, 29), y: 10 },
            { x: new Date(2020, 03, 30), y: 11 },
            { x: new Date(2020, 03, 31), y: 11 }
        ]
    },
    {
        type: "line",
        axisYType: "secondary",
        name: "Gjilan",
        showInLegend: true,
        markerSize: 0,
        yValueFormatString: "#,përsona",
        dataPoints: [
        { x: new Date(2020, 03, 01), y: 00 },
            { x: new Date(2020, 03, 02), y: 00 },
            { x: new Date(2020, 03, 03), y: 01 },
            { x: new Date(2020, 03, 04), y: 01 },
            { x: new Date(2020, 03, 05), y: 02 },
            { x: new Date(2020, 03, 06), y: 02 },
            { x: new Date(2020, 03, 07), y: 02 },
            { x: new Date(2020, 03, 08), y: 04 },
            { x: new Date(2020, 03, 09), y: 04 },
            { x: new Date(2020, 03, 10), y: 04 },
            { x: new Date(2020, 03, 11), y: 04 },
            { x: new Date(2020, 03, 12), y: 04 },
            { x: new Date(2020, 03, 13), y: 05 },
            { x: new Date(2020, 03, 14), y: 07 },
            { x: new Date(2020, 03, 15), y: 08 },
            { x: new Date(2020, 03, 16), y: 08 },
            { x: new Date(2020, 03, 17), y: 10 },
            { x: new Date(2020, 03, 18), y: 10 },
            { x: new Date(2020, 03, 19), y: 10 },
            { x: new Date(2020, 03, 20), y: 11 },
            { x: new Date(2020, 03, 21), y: 11 },
            { x: new Date(2020, 03, 22), y: 12 },
            { x: new Date(2020, 03, 23), y: 12 },
            { x: new Date(2020, 03, 24), y: 13 },
            { x: new Date(2020, 03, 25), y: 14 },
            { x: new Date(2020, 03, 26), y: 14 },
            { x: new Date(2020, 03, 27), y: 15 },
            { x: new Date(2020, 03, 28), y: 16 },
            { x: new Date(2020, 03, 29), y: 17 },
            { x: new Date(2020, 03, 30), y: 17 },
            { x: new Date(2020, 03, 31), y: 18 }

        ]
    }]
});
chart.render();

function toogleDataSeries(e){
    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
    } else{
        e.dataSeries.visible = true;
    }
    chart.render();
}

