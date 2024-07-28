import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Chart = ({type, data, title, size, nameItem, horizontal}) => {

    if(type === 'bar') {

        const attributes =  {

            series: [{
                name: nameItem ?? 'Vendas',
                data: data
            }],
            options: {
                annotations: {
                    points: [{
                        x: 'Bananas',
                        seriesIndex: 0,
                        label: {
                            borderColor: '#775DD0',
                            offsetY: 0,
                            style: {
                                color: '#fff',
                                background: '#775DD0',
                            },
                            text: 'Bananas are good',
                        }
                    }]
                },
                chart: {
                    type: 'bar',
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    bar: {
                        borderRadius: 5,
                        columnWidth: '25%',
                        horizontal: horizontal
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 2
                },

                grid: {
                    row: {
                        colors: ['#fff', '#f2f2f2']
                    }
                },
                xaxis: {
                    labels: {
                        rotate: -45
                    },
                    categories: title,
                    tickPlacement: 'on'
                },
                yaxis: {
                    title: {
                        text: '',
                    },
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        type: "horizontal",
                        shadeIntensity: 0.25,
                        gradientToColors: undefined,
                        inverseColors: true,
                        opacityFrom: 0.85,
                        opacityTo: 0.85,
                        stops: [50, 0, 100]
                    },
                }
            },

        };

        return (
            <div id="chart">
                <ReactApexChart options={attributes.options} series={attributes.series} type="bar" height={size ? size * 187 : 187} />
            </div>
        );

    } else if(type === 'polar') {

        const attributes = {

            series: data,
            options: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: title,
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },


        };


        return(
            <div id="chart">
                <ReactApexChart options={attributes.options} series={attributes.series} type="pie" height={200} />
            </div>
        );


    }

}


export default Chart;
