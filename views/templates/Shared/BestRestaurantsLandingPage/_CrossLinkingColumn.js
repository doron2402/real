if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage) window.Spark.Shared.BestRestaurantsLandingPage = {};
window.Spark.Shared.BestRestaurantsLandingPage._CrossLinkingColumn = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var columnLists = viewData["columnLists"];
function RenderViewLevel0() {
Output.Write("\n\n<div class=\"column medium-4\">");
if (columnLists != null && columnLists.Count() > 0) {
Output.Write("\n    <ul>");
for (var __iter__link in columnLists) {var link=columnLists[__iter__link];if(typeof(link)!='function') {
Output.Write("\n            <li class=\"text-ellipsis\">\n                <a href=\"");
Output.Write(link.Url);
Output.Write("\" class=\"secondary-link\">");
Output.Write(link.Name);
Output.Write("</a>\n            </li>");
}}
Output.Write("\n    </ul>");
}
Output.Write("\n</div>\n");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.BestRestaurantsLandingPage._CrossLinkingColumn
