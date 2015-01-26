if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.DinersChoice) window.Spark.Shared.DinersChoice = {};
if (!window.Spark.Shared.DinersChoice.Results) window.Spark.Shared.DinersChoice.Results = {};
window.Spark.Shared.DinersChoice.Results._NoResultsTable = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var noResultsTable = viewData["noResultsTable"];
function RenderViewLevel0() {
Output.Write("\n");
var hasMetroId = noResultsTable.Display.Metro != null && noResultsTable.Display.Metro.Id != null;
Output.Write("\n\n<div class=\"results-list-header\">\n    <h2 class=\"title\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_NoMatch_Title);
Output.Write("</h2>\n</div>\n\n<table id=\"search_results_table\" class=\"table\">\n\n    <tbody>\n        <tr class=\"last-row\">\n            <td class=\"cell full-cell\">\n                <p class=\"no-result-message\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_NoMatch_Message);
Output.Write("</p>\n");
if (hasMetroId == true) {
Output.Write("\n                    <button id=\"start_over\" class=\"btn btn-thin btn-search\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_StartOverButton);
Output.Write("</button>");
}
Output.Write("\n            </td>\n        </tr>\n    </tbody>\n\n</table>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.DinersChoice.Results._NoResultsTable
