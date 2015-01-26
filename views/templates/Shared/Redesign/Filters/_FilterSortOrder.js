if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Filters) window.Spark.Shared.Redesign.Filters = {};
window.Spark.Shared.Redesign.Filters._FilterSortOrder = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var request = viewData["request"];
function RenderViewLevel0() {
Output.Write("\n\n<span data-target=\"sort-filter-menu\" id=\"filter-button-toggle\" class=\"toggle-menu filter-button-toggle icon-sort with-icon\">");
Output.Write(Resources.Shared.Redesign.Strings.Label_Sort);
Output.Write("</span>\n<div id=\"sort-filter-menu\" class=\"menu with-arrow\">\n    <div class=\"menu-container\">\n        <div class=\"menu-main\">\n        <div class=\"menu-section\">\n            <div class=\"menu-list\">");
{
var selectedDistance = request.SortString == "Distance";
var selectedPopularity = request.SortString == "Popularity";
var selectedName = request.SortString == "Name";
var selectedRating = request.SortString == "Rating";
var selectedTimeDistance = request.SortString == "TimeDistance";
Output.Write("\n                    <div id=\"sort-filters\" class=\"menu-with-checkboxes\">");
if (request.IsTravelTimeRequest) {
Output.Write("\n                            <label for=\"SortOrder_TimeDistance\" class=\"menu-list-label");
if (selectedTimeDistance) {
Output.Write("  highlight");
}
Output.Write("\">\n                                <input type=\"radio\" id=\"SortOrder_TimeDistance\" name=\"SortOrder\" class=\"menu-list-input sort-option\" value=\"TimeDistance\"");
{
var __just__once__ = 0;
if (selectedTimeDistance) {
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
Output.Write("/>\n                                <span>Travel Time</span>\n                            </label>");
}
if (request.IsGeoDistanceRequest) {
Output.Write("\n                            <label for=\"SortOrder_Distance\" class=\"menu-list-label");
if (selectedDistance) {
Output.Write("  highlight");
}
Output.Write("\">\n                                <input type=\"radio\" id=\"SortOrder_Distance\" name=\"SortOrder\" class=\"menu-list-input sort-option\" value=\"Distance\"");
{
var __just__once__ = 0;
if (selectedDistance) {
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
Output.Write("/>\n                                <span>");
Output.Write(Resources.Shared.Redesign.Filters.Label_Sort_Distance);
Output.Write("</span>\n                            </label>");
}
Output.Write("\n                            <label for=\"SortOrder_Popular\" class=\"menu-list-label");
if (selectedPopularity) {
Output.Write("  highlight");
}
Output.Write("\">\n                                <input type=\"radio\" id=\"SortOrder_Popular\" name=\"SortOrder\" class=\"menu-list-input sort-option\" value=\"Popularity\"");
{
var __just__once__ = 0;
if (selectedPopularity) {
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
Output.Write("/>\n                                <span>");
Output.Write(Resources.Shared.Redesign.Filters.Label_Sort_Popularity);
Output.Write("</span>\n                            </label>\n                            <label for=\"SortOrder_Name\" class=\"menu-list-label");
if (selectedName) {
Output.Write("  highlight");
}
Output.Write("\">\n                                <input type=\"radio\" id=\"SortOrder_Name\" name=\"SortOrder\" class=\"menu-list-input sort-option\" value=\"Name\"");
{
var __just__once__ = 0;
if (selectedName) {
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
Output.Write("/>\n                                <span>");
Output.Write(Resources.Shared.Redesign.Filters.Label_Sort_Name);
Output.Write("</span>\n                            </label>\n                            <label for=\"SortOrder_Rating\" class=\"menu-list-label");
if (selectedRating) {
Output.Write(" highlight");
}
Output.Write("\">\n                                <input type=\"radio\" id=\"SortOrder_Rating\" name=\"SortOrder\" class=\"menu-list-input sort-option\" value=\"Rating\"");
{
var __just__once__ = 0;
if (selectedRating) {
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
Output.Write("/>\n                                <span>");
Output.Write(Resources.Shared.Redesign.Filters.Label_Sort_Rating);
Output.Write("</span>\n                            </label>\n                    </div>");
}
Output.Write("\n            </div>\n        </div>\n        </div>\n    </div>\n</div>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Filters._FilterSortOrder
