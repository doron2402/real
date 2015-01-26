if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Filters) window.Spark.Shared.Redesign.Filters = {};
if (!window.Spark.Shared.Redesign.Filters.Mobile) window.Spark.Shared.Redesign.Filters.Mobile = {};
window.Spark.Shared.Redesign.Filters.Mobile._FilterSortOrder = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var filters = viewData["filters"];
var filterGroupClass = viewData["filterGroupClass"];
function RenderViewLevel0() {
Output.Write("\n\n<div class=\"row\">\n    <div class=\"column medium-12 padding-top padding-bottom\">\n        <h4 class=\"left remove-bottom-margin\">");
Output.Write(Resources.Shared.Redesign.Filters.Label_Sort);
Output.Write("</h4>\n    </div>\n</div>\n<div class=\"row ");
Output.Write(filterGroupClass);
Output.Write("\">\n    <div class=\"column medium-12\">\n        <ul class=\"button-group button-group-justified\">\n            <li id=\"SortOrder_Rating\">\n                <a href=\"#\" class=\"button toggle-button\">");
Output.Write(Resources.Shared.Redesign.Filters.Label_Sort_Rating);
Output.Write("</a>\n            </li>\n            <li id=\"SortOrder_Popular\">\n                <a href=\"#\" class=\"button toggle-button\">");
Output.Write(Resources.Shared.Redesign.Filters.Label_Sort_Popularity);
Output.Write("</a>\n            </li>\n            <li id=\"SortOrder_Name\">\n                <a href=\"#\" class=\"button toggle-button\">");
Output.Write(Resources.Shared.Redesign.Filters.Label_Sort_Name);
Output.Write("</a>\n            </li>\n        </ul>\n    </div>\n</div>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Filters.Mobile._FilterSortOrder
