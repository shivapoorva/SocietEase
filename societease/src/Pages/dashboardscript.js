import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
import "../styles/dashboardScript.css"

const ModernDashboard = () => {
    const chartContainer1 = useRef(null);
    const chartContainer2 = useRef(null);
    const barChartContainer = useRef(null);
    const pieChartContainer = useRef(null);

    useEffect(() => {
        // Sample data for the charts
        const chartData1 = {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            series: [
                {
                    name: 'Member Added',
                    data: [30, 40, 35, 50, 49]
                },
                {
                    name: 'Member Validated',
                    data: [20, 25, 20, 30, 35]
                }
            ]
        };

        const chartData2 = {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            series: [
                {
                    name: 'Maintance Paid',
                    data: [10, 15, 20, 25, 30]
                }
            ]
        };

        // Initialize ApexCharts for Chart 1
        const options1 = {
            chart: {
                type: 'bar',
                height: 350,
                foreColor: '#9aa0ac'
            },
            xaxis: {
                categories: chartData1.categories
            },
            series: chartData1.series,
            title: {
                text: 'New Members Trend',
                align: 'center',
                style: {
                    color: '#333'
                }
            }
        };

        const chart1 = new ApexCharts(chartContainer1.current, options1);

        chart1.render();

        // Initialize ApexCharts for Chart 2
        const options2 = {
            chart: {
                type: 'line',
                height: 350,
                foreColor: '#9aa0ac'
            },
            xaxis: {
                categories: chartData2.categories
            },
            series: chartData2.series,
            title: {
                text: 'Maintanance Trend',
                align: 'center',
                style: {
                    color: '#333'
                }
            }
        };

        const chart2 = new ApexCharts(chartContainer2.current, options2);
        chart2.render();

        // Initialize ApexCharts for Bar Chart
        const barChartOptions = {
            chart: {
                type: 'bar',
                height: 350,
                width: '100%',
                foreColor: '#9aa0ac'
            },
            xaxis: {
                categories: ['Issue 1', 'Issue 2', 'Issue 3', 'Issue 4', 'Issue 5']
            },
            series: [{
                name: 'Bar Chart Series',
                data: [40, 50, 35, 55, 45]
            }],
            title: {
                text: 'Issue Report Types',
                align: 'left',
                style: {
                    color: '#333'
                }
            }
        };

        const barChart = new ApexCharts(barChartContainer.current, barChartOptions);
        barChart.render();

        // Initialize ApexCharts for Pie Chart
        const pieChartOptions = {
            chart: {
                type: 'pie',
                height: 350,
                width: '100%',
                foreColor: '#9aa0ac'
            },
            series: [30, 40, 45, 55, 70],
            labels: ['Donation1', 'Donation2', 'Donation3', 'Donation4', 'Donation5'],
            title: {
                text: 'Pie Chart',
                align: 'right',
                style: {
                    color: '#333'
                }
            }
        };

        const pieChart = new ApexCharts(pieChartContainer.current, pieChartOptions);
        pieChart.render();

        // Clean up on unmount
        return () => {
            chart1.destroy();
            chart2.destroy();
            barChart.destroy();
            pieChart.destroy();
        };
    }, []);

    return (
        <>
            <div className="row">
                <div className="chart-container">
                    <div className="card">
                        <div className="card-body">
                            <div ref={chartContainer1}></div>
                        </div>
                    </div>
                </div>
                <div className="chart-container">
                    <div className="card">
                        <div className="card-body">
                            <div ref={chartContainer2}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="chart-container">
                    <div className="card">
                        <div className="card-body">
                          
                            <div ref={barChartContainer}></div>
                        </div>
                    </div>
                </div>
                <div className="chart-container">
                    <div className="card">
                        <div className="card-body">
                           
                            <div ref={pieChartContainer}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default ModernDashboard;
