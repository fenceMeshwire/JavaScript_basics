// 02_for_loop_table.js

// Create a table with 4 rows and 6 columns.
// Previously set the attribute in the HTML document: 
// <style>="table,td {border:1px solid black}"</style>

document.write("<table>")
for (let row=1; row<=4; row++) {
    document.write("<tr>");
    for (let column=1; column<=6; column++) {
        document.write("<td>Cells(" + row + "," + column + ")</td>");
    }
    document.write("</tr>");
}
document.write("</table>")
