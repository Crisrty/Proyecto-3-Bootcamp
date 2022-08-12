const ctx = document.getElementById('myChart').getContext('2d');

let myChart;

export const makeChart = (labels, dataCelsius) => {
    if (myChart) {
        myChart.destroy();
    }
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            //labels: ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00"],
            labels: labels, // EJE X
            datasets: [{
                label: 'CLIMA',
                data: dataCelsius, //EJE Y
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 2
            }]
        }
    });

}