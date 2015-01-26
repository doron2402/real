if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage) window.Spark.Shared.BestRestaurantsLandingPage = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage.Filters) window.Spark.Shared.BestRestaurantsLandingPage.Filters = {};
window.Spark.Shared.BestRestaurantsLandingPage.Filters._FilterGroup = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var filterGroup = viewData["filterGroup"];
var title = viewData["title"];
var modalTitle = viewData["modalTitle"];
var filterGroupId = viewData["filterGroupId"];
var name = viewData["name"];
var param = viewData["param"];
var filterGroupClass = viewData["filterGroupClass"];
var filter = viewData["filter"];
var filterName = viewData["filterName"];
var filterDataName = viewData["filterDataName"];
var type = viewData["type"];
function RenderViewLevel0() {
Output.Write("\n");
if (filterGroup.Count() > 0) {
Output.Write("\n<li id=\"");
Output.Write(filterGroupId);
Output.Write("\" class=\"");
Output.Write(filterGroupClass);
Output.Write("\">\n    <a href=\"#\" data-target=\"");
Output.Write(name);
Output.Write("-filter-menu\" class=\"toggle-menu\">");
Output.Write(title);
Output.Write(" <span class=\"filter-count\"></span></a>\n    <div id=\"");
Output.Write(name);
Output.Write("-filter-menu\" class=\"menu with-arrow\">\n        <div class=\"menu-container\">\n            <div class=\"menu-header\">");
Output.Write(modalTitle);
Output.Write("</div>\n            <div class=\"menu-scroll swiper-container\">\n                <div class=\"swiper-scrollbar\"></div>\n                <div class=\"swiper-wrapper\">\n                    <div class=\"swiper-slide\">\n                        <div class=\"menu-section\">\n                            <div class=\"menu-list\">\n                                <ul id=\"");
Output.Write(name);
Output.Write("-filter-items\" class=\"menu-with-checkboxes\">");
for (var __iter__data in filterGroup) {var data=filterGroup[__iter__data];if(typeof(data)!='function') {
{
var filter = data;
var filterName = param;
var filterDataName = param;
var type = "checkbox";
Output.Write("\n");
{
var filterSelected = filter.IsSelected;
Output.Write("\n    <li>\n        <label for=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\"");
{
var __just__once__ = 0;
if (filterSelected) {
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
Output.Write(">\n            <input id=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"filter\" type=\"");
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
Output.Write("</span>\n        </label>\n    </li>");
}
}
}}
Output.Write("\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</li>");
}
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.BestRestaurantsLandingPage.Filters._FilterGroup
