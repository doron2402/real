if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage) window.Spark.Shared.BestRestaurantsLandingPage = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage.Filters) window.Spark.Shared.BestRestaurantsLandingPage.Filters = {};
window.Spark.Shared.BestRestaurantsLandingPage.Filters._FilterSortOrder = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var filters = viewData["filters"];
var request = viewData["request"];
var filterGroupId = viewData["filterGroupId"];
var filterGroupClass = viewData["filterGroupClass"];
var title = viewData["title"];
function RenderViewLevel0() {
Output.Write("\n\n<li id=\"");
Output.Write(filterGroupId);
Output.Write("\" class=\"");
Output.Write(filterGroupClass);
Output.Write("\">\n    <a href=\"#\" data-target=\"sort-filter-menu\" class=\"toggle-menu\">");
Output.Write(title);
Output.Write("</a>\n    <div id=\"sort-filter-menu\" class=\"menu with-arrow\">\n        <div class=\"menu-container\">\n            <div class=\"menu-section\">\n                <div class=\"menu-list\">");
{
var selectedPopularity = request.SortString == "Popularity";
var selectedName = request.SortString == "Name";
var selectedRating = request.SortString == "Rating";
Output.Write("\n                        <ul id=\"sort-filters\" class=\"menu-with-checkboxes\">\n                            <li>\n                                <label for=\"SortOrder_Popular\"");
{
var __just__once__ = 0;
if (selectedPopularity) {
if (__just__once__ < 1) {
Output.Write(" class=\"");
}
__just__once__ = 1;
Output.Write("highlight");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">\n                                    <input type=\"radio\" id=\"SortOrder_Popular\" name=\"SortOrder\" class=\"sort-option test\" value=\"Popularity\"");
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
Output.Write("/>\n                                    <span>");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Filters.Label_Sort_Popularity);
Output.Write("</span>\n                                </label>\n                            </li>\n                            <li>\n                                <label for=\"SortOrder_Name\"");
{
var __just__once__ = 0;
if (selectedName) {
if (__just__once__ < 1) {
Output.Write(" class=\"");
}
__just__once__ = 1;
Output.Write("highlight");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">\n                                    <input type=\"radio\" id=\"SortOrder_Name\" name=\"SortOrder\" class=\"sort-option\" value=\"Name\"");
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
Output.Write("/>\n                                    <span>");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Filters.Label_Sort_Name);
Output.Write("</span>\n                                </label>\n                            </li>\n                            <li>\n                                <label for=\"SortOrder_Rating\"");
{
var __just__once__ = 0;
if (selectedRating) {
if (__just__once__ < 1) {
Output.Write(" class=\"");
}
__just__once__ = 1;
Output.Write("highlight");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">\n                                    <input type=\"radio\" id=\"SortOrder_Rating\" name=\"SortOrder\" class=\"sort-option\" value=\"Rating\"");
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
Output.Write("/>\n                                    <span>");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Filters.Label_Sort_Rating);
Output.Write("</span>\n                                </label>\n                            </li>\n                        </ul>");
}
Output.Write("\n                </div>\n            </div>\n        </div>\n    </div>\n</li>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.BestRestaurantsLandingPage.Filters._FilterSortOrder
