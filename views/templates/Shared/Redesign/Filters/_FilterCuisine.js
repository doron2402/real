if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Filters) window.Spark.Shared.Redesign.Filters = {};
window.Spark.Shared.Redesign.Filters._FilterCuisine = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var filterCuisine = viewData["filterCuisine"];
var selectedCount = viewData["selectedCount"];
var filter = viewData["filter"];
var filterName = viewData["filterName"];
var filterDataName = viewData["filterDataName"];
var type = viewData["type"];
function RenderViewLevel0() {
Output.Write("\n");
if (filterCuisine.Count() > 0) {
Output.Write("\n<span data-target=\"Cuisines-filter-menu\" class=\"toggle-menu filters\">\n    ");
Output.Write(Resources.Shared.Redesign.Filters.Title_Cuisines);
Output.Write(" <span class=\"filter-count\">");
if (selectedCount > 0) {
Output.Write("\n    (");
Output.Write(selectedCount);
Output.Write(")");
}
Output.Write("\n    </span>\n</span>\n<div id=\"Cuisines-filter-menu\" class=\"menu with-arrow\">\n    <div class=\"menu-container\">\n    <div class=\"menu-main\">\n        <div class=\"menu-header\">");
Output.Write(Resources.Shared.Redesign.Filters.Label_FilterBy_Cuisine);
Output.Write("</div>\n        <div class=\"menu-section js-lionbars\">\n        <div class=\"menu-list\">\n            <div id=\"Cuisines-filter-items\" class=\"menu-with-checkboxes\">");
for (var __iter__data in filterCuisine) {var data=filterCuisine[__iter__data];if(typeof(data)!='function') {
{
var filter = data;
var filterName = "CuisineIds";
var filterDataName = "CuisineIds";
var type = "checkbox";
Output.Write("\n");
{
var filterSelected = filter.IsSelected;
Output.Write("\n\n        <label for=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"menu-list-label");
if (filterSelected) {
Output.Write(" highlight");
}
Output.Write("\">\n            <input id=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"filter menu-list-input\" type=\"");
Output.Write(type);
Output.Write("\" name=\"");
Output.Write(filterName);
Output.Write("\" data-filter-name=\"");
Output.Write(filterDataName);
Output.Write("\" data-id=\"");
Output.Write(filter.Id);
Output.Write("\"");
{
var __just__once__ = 0;
if (filterSelected) {
if (__just__once__ < 1) {
Output.Write(" checked=\"");
}
__just__once__ = 1;
Output.Write("checked");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write("/>\n            <span>");
Output.Write(filter.Name);
Output.Write("</span>\n        </label>\n  ");
}
}
}}
Output.Write("\n            </div>\n        </div>\n        </div>\n    </div>\n    </div>\n</div>");
}
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Filters._FilterCuisine
