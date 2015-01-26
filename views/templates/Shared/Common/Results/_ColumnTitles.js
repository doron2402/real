if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Common) window.Spark.Shared.Common = {};
if (!window.Spark.Shared.Common.Results) window.Spark.Shared.Common.Results = {};
window.Spark.Shared.Common.Results._ColumnTitles = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
function RenderViewLevel0() {
{
var sortName = resultsTable.Request.SortString;
Output.Write("\n\n<thead>\n    <tr class=\"table-header\">\n        <td class=\"cell first-cell header-cell\">\n            <a href=\"#\" class=\"header-cell-link sort-link");
if (sortName == "Name") {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"Name\">");
Output.Write(Resources.Shared.Common.Results.Header_Name);
Output.Write("</a> /\n            <a href=\"#\" class=\"header-cell-link sort-link");
if (sortName == "Neighborhood") {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"Neighborhood\">");
Output.Write(Resources.Shared.Common.Results.Header_Area);
Output.Write("</a>\n        </td>\n        <td class=\"cell header-cell rating-header\">\n            <a href=\"#\" class=\"header-cell-link sort-link");
if (sortName == "Rating" || sortName == "BayesianAverage") {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"Rating\">");
Output.Write(Resources.Shared.Common.Results.Header_Ratings);
Output.Write("</a>\n        </td>\n        <td class=\"cell header-cell price-header\">\n            <a href=\"#\" class=\"header-cell-link sort-link");
if (sortName == "PriceBand") {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"PriceBand\">");
Output.Write(Resources.Shared.Common.Results.Header_Price);
Output.Write("</a>\n        </td>\n        <td class=\"cell last-cell header-cell availability-header\">");
Output.Write(Resources.Shared.Common.Results.Header_Availability);
Output.Write("</td>\n    </tr>\n</thead>\n");
}
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Common.Results._ColumnTitles
