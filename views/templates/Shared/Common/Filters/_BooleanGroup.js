if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Common) window.Spark.Shared.Common = {};
if (!window.Spark.Shared.Common.Filters) window.Spark.Shared.Common.Filters = {};
window.Spark.Shared.Common.Filters._BooleanGroup = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var booleanGroup = viewData["booleanGroup"];
function RenderViewLevel0() {
Output.Write("\n");
if (booleanGroup.Display.ShowExactTimeFilter) {
Output.Write("\n<ul>\n    <li class=\"group-item\">\n        <input id=\"exact_time\" type=\"checkbox\" class=\"filter checkbox\" data-filter-name=\"OnlyExactDateTime\" data-id=\"true\"");
{
var __just__once__ = 0;
if (booleanGroup.Request.OnlyExactDateTime == true) {
if (__just__once__ < 1) {
Output.Write(" checked=\"");
}
__just__once__ = 1;
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write("/>\n        <label for=\"exact_time\" class=\"label\">");
Output.Write(string.Format(Resources.Shared.Common.Filters.Title_OnlyExactDateTime, booleanGroup.Display.SelectedTime));
Output.Write("</label>\n    </li>\n</ul>");
}
Output.Write("\n");
if (booleanGroup.Display.ShowPopFilter) {
Output.Write("\n<ul>\n    <li class=\"group-item\">\n        <input id=\"pop_times\" type=\"checkbox\" class=\"filter checkbox\" data-filter-name=\"OnlyPopTimes\" data-id=\"true\"");
{
var __just__once__ = 0;
if (booleanGroup.Request.OnlyPopTimes == true) {
if (__just__once__ < 1) {
Output.Write(" checked=\"");
}
__just__once__ = 1;
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write("/>\n        <label for=\"pop_times\" class=\"label\">");
Output.Write(Resources.Shared.Common.Filters.Title_PopOnly);
Output.Write("</label>\n    </li>\n</ul>");
}
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Common.Filters._BooleanGroup
