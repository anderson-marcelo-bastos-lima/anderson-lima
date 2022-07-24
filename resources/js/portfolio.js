/**

1. Function draw a graph.

2. Chart - Colmar Academy.

3. Chart - Task Planner.

4. Chart - Gryffindors Portfolio.

5. Chart - Flexblog.

6. Chart - Todofy.

7. Chart - Tarefa.

8. Chart - Shopping Cart.

*/




/*
 ************************************************************
 * 1. Function draw a graph.
 ************************************************************
 */
function drawChart(pDataArray, pTagDivId) {

    // Load google charts
    google.charts.load('current', { packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(drawBasic);

    // Draw the chart and set the chart values
    function drawBasic() {

        // Feed google charts
        const data = google.visualization.arrayToDataTable(pDataArray);

        // Optional: add a title and set the width and height of the chart.
        const options = {
            legend: 'none',
            chartArea: { width: '50%' },
            hAxis: {
                format: '#,###%'
            },
            vAxis: {
                title: 'Skills'
            }
        };

        // Display the chart inside the <div> element with id=pTagDivId
        let elmDiv = document.getElementById(pTagDivId)
        if (document.getElementById(pTagDivId)) {
            const chart = new google.visualization.BarChart(elmDiv);

            chart.draw(data, options);
        };

    }

};




/*
 ************************************************************
 * 2. Chart - Colmar Academy.
 ************************************************************
 */
// Array with the values to feed the graph.
const chartColmarAcademy = [['Skills', 'Percentage', { role: 'style' }],
['Organization', 1.0, 'fill-color: #008fba; fill-opacity: 0.7'],
['Research', 0.75, 'fill-color: #00ABC2; fill-opacity: 0.7'],
['Problem-solving', 0.5, 'fill-color: #00C5B8; fill-opacity: 0.7'],
['Time management', 1.0, 'fill-color: #55DCA0; fill-opacity: 0.7'],
['HTML', 0.5, 'fill-color: #A8ED84; fill-opacity: 0.7'],
['CSS', 1.0, 'fill-color: #F9F871; fill-opacity: 0.7'],
['Bootstrap', 0.75, 'fill-color: #008fba; fill-opacity: 0.7']
];
// Name of the property "Id" of the "DIV" tag to place the graph.
const divColmarAcademy = 'colmar_academy_div';
// Load the chart when all elements of the DOM are loaded.
document.addEventListener('DOMContentLoaded', function () {
    drawChart(chartColmarAcademy, divColmarAcademy);
});
// Load the chart when the window is resized for responsiveness.
window.addEventListener('resize', function () {
    drawChart(chartColmarAcademy, divColmarAcademy);
});




/*
 ************************************************************
 * 3. Chart - Task Planner.
 ************************************************************
 */
// Array with the values to feed the graph.
const chartTaskPlanner = [
    ['Skills', 'Percentage', { role: 'style' }],
    ['Project Management', 1.0, 'fill-color: #008fba; fill-opacity: 0.7'],
    ['Research', 0.5, 'fill-color: #00ABC2; fill-opacity: 0.7'],
    ['Problem-solving', 0.5, 'fill-color: #00C5B8; fill-opacity: 0.7'],
    ['Communication', 1.0, 'fill-color: #55DCA0; fill-opacity: 0.7'],
    ['Scrum', 0.75, 'fill-color: #A8ED84; fill-opacity: 0.7'],
    ['Wireframe', 1.0, 'fill-color: #F9F871; fill-opacity: 0.7'],
    ['Bootstrap', 0.75, 'fill-color: #008fba; fill-opacity: 0.7']
];
// Name of the property "Id" of the "DIV" tag to place the graph.
const divTaskPlanner = 'task_planner_div';
// Load the chart when all elements of the DOM are loaded.
document.addEventListener('DOMContentLoaded', function () {
    drawChart(chartTaskPlanner, divTaskPlanner);
});
// Load the chart when the window is resized for responsiveness.
window.addEventListener('resize', function () {
    drawChart(chartTaskPlanner, divTaskPlanner);
});




/*
 ************************************************************
 * 4. Chart - Gryffindors Portfolio.
 ************************************************************
 */
// Array with the values to feed the graph.
const chartGryffindors = [
    ['Skills', 'Percentage', { role: 'style' }],
    ['Time Management', 1.0, 'fill-color: #008fba; fill-opacity: 0.7'],
    ['Problem-solving', 0.5, 'fill-color: #00ABC2; fill-opacity: 0.7'],
    ['CLI', 0.5, 'fill-color: #00C5B8; fill-opacity: 0.7'],
    ['Git', 0.5, 'fill-color: #55DCA0; fill-opacity: 0.7'],
    ['GitHub', 0.75, 'fill-color: #A8ED84; fill-opacity: 0.7'],
    ['Wireframe', 1.0, 'fill-color: #F9F871; fill-opacity: 0.7'],
    ['Bootstrap', 1.0, 'fill-color: #008fba; fill-opacity: 0.7']
];
// Name of the property "Id" of the "DIV" tag to place the graph.
const divGryffindors = 'gryffindors_portfolio_div';
// Load the chart when all elements of the DOM are loaded.
document.addEventListener('DOMContentLoaded', function () {
    drawChart(chartGryffindors, divGryffindors);
});
// Load the chart when the window is resized for responsiveness.
window.addEventListener('resize', function () {
    drawChart(chartGryffindors, divGryffindors);
});




/*
 ************************************************************
 * 5. Chart - Flexblog.
 ************************************************************
 */
// Array with the values to feed the graph.
const chartFlexblog = [
    ['Skills', 'Percentage', { role: 'style' }],
    ['Organization', 0.5, 'fill-color: #008fba; fill-opacity: 0.7'],
    ['Research', 1.0, 'fill-color: #00ABC2; fill-opacity: 0.7'],
    ['Time Management', 0.75, 'fill-color: #00C5B8; fill-opacity: 0.7'],
    ['Problem-solving', 0.5, 'fill-color: #55DCA0; fill-opacity: 0.7'],
    ['Semantic HTML', 1.0, 'fill-color: #A8ED84; fill-opacity: 0.7'],
    ['CSS', 0.5, 'fill-color: #F9F871; fill-opacity: 0.7'],
    ['Flexbox', 1.0, 'fill-color: #008fba; fill-opacity: 0.7']
];
// Name of the property "Id" of the "DIV" tag to place the graph.
const divFlexblog = 'flexblog_div';
// Load the chart when all elements of the DOM are loaded.
document.addEventListener('DOMContentLoaded', function () {
    drawChart(chartFlexblog, divFlexblog);
});
// Load the chart when the window is resized for responsiveness.
window.addEventListener('resize', function () {
    drawChart(chartFlexblog, divFlexblog);
});




/*
 ************************************************************
 * 6. Chart - Todofy.
 ************************************************************
 */
// Array with the values to feed the graph.
const chartTodofy = [
    ['Skills', 'Percentage', { role: 'style' }],
    ['Project management', 1, 'fill-color: #008fba; fill-opacity: 0.7'],
    ['Problem-solving', 0.75, 'fill-color: #00ABC2; fill-opacity: 0.7'],
    ['Manipulation of the DOM', 1, 'fill-color: #00C5B8; fill-opacity: 0.7'],
    ['localStorage', 0.5, 'fill-color: #55DCA0; fill-opacity: 0.7'],
    ['JavaScript', 1.0, 'fill-color: #A8ED84; fill-opacity: 0.7'],
    ['CSS', 0.5, 'fill-color: #F9F871; fill-opacity: 0.7'],
    ['HTML', 0.5, 'fill-color: #008fba; fill-opacity: 0.7']
];
// Name of the property "Id" of the "DIV" tag to place the graph.
const divTodofy = 'todofy_div';
// Load the chart when all elements of the DOM are loaded.
document.addEventListener('DOMContentLoaded', function () {
    drawChart(chartTodofy, divTodofy);
});
// Load the chart when the window is resized for responsiveness.
window.addEventListener('resize', function () {
    drawChart(chartTodofy, divTodofy);
});




/*
 ************************************************************
 * 7. Chart - Tarefa.
 ************************************************************
 */
// Array with the values to feed the graph.
const chartTarefa = [
    ['Skills', 'Percentage', { role: 'style' }],
    ['Project management', 1, 'fill-color: #008fba; fill-opacity: 0.7'],
    ['Problem-solving', 0.75, 'fill-color: #00ABC2; fill-opacity: 0.7'],
    ['Object-oriented programming', 1, 'fill-color: #00C5B8; fill-opacity: 0.7'],
    ['Manipulation of the DOM', 0.5, 'fill-color: #55DCA0; fill-opacity: 0.7'],
    ['JavaScript', 1.0, 'fill-color: #A8ED84; fill-opacity: 0.7'],
    ['CSS', 0.5, 'fill-color: #F9F871; fill-opacity: 0.7'],
    ['HTML', 0.5, 'fill-color: #008fba; fill-opacity: 0.7']
];
// Name of the property "Id" of the "DIV" tag to place the graph.
const divTarefa = 'tarefa_div';
// Load the chart when all elements of the DOM are loaded.
document.addEventListener('DOMContentLoaded', function () {
    drawChart(chartTarefa, divTarefa);
});
// Load the chart when the window is resized for responsiveness.
window.addEventListener('resize', function () {
    drawChart(chartTarefa, divTarefa);
});




/*
 ************************************************************
 * 8. Chart - Shopping Cart.
 ************************************************************
 */
// Array with the values to feed the graph.
const chartShoppingCart = [
    ['Skills', 'Percentage', { role: 'style' }],
    ['Project management', 1, 'fill-color: #008fba; fill-opacity: 0.7'],
    ['Time management', 0.75, 'fill-color: #00ABC2; fill-opacity: 0.7'],
    ['Problem-solving', 0.75, 'fill-color: #00C5B8; fill-opacity: 0.7'],
    ['React', 1, 'fill-color: #55DCA0; fill-opacity: 0.7'],
    ['Bootstrap', 0.5, 'fill-color: #A8ED84; fill-opacity: 0.7'],
    ['JavaScript', 1, 'fill-color: #F9F871; fill-opacity: 0.7'],
    ['HTML', 0.5, 'fill-color: #008fba; fill-opacity: 0.7']
];
// Name of the property "Id" of the "DIV" tag to place the graph.
const divShoppingCart = 'shopping_cart_div';
// Load the chart when all elements of the DOM are loaded.
document.addEventListener('DOMContentLoaded', function () {
    drawChart(chartShoppingCart, divShoppingCart);
});
// Load the chart when the window is resized for responsiveness.
window.addEventListener('resize', function () {
    drawChart(chartShoppingCart, divShoppingCart);
});