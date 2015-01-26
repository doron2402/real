if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Filters) window.Spark.Shared.Redesign.Filters = {};
if (!window.Spark.Shared.Redesign.Filters.Mobile) window.Spark.Shared.Redesign.Filters.Mobile = {};
window.Spark.Shared.Redesign.Filters.Mobile._Filters = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var filters = viewData["filters"];
var title = viewData["title"];
var leftLink = viewData["leftLink"];
var rightLink = viewData["rightLink"];
var filters = viewData["filters"];
var filterGroupClass = viewData["filterGroupClass"];
var filterGroup = viewData["filterGroup"];
var title = viewData["title"];
var name = viewData["name"];
var param = viewData["param"];
var filterGroup = viewData["filterGroup"];
var title = viewData["title"];
var name = viewData["name"];
var param = viewData["param"];
var offersSearchViewModel = viewData["offersSearchViewModel"];
var title = viewData["title"];
var name = viewData["name"];
var param = viewData["param"];
var filterGroupClass = viewData["filterGroupClass"];
var filter = viewData["filter"];
var filterName = viewData["filterName"];
var filterDataName = viewData["filterDataName"];
var type = viewData["type"];
function RenderViewLevel0() {
Output.Write("\n\n<!--Refine page for mobile screen-->\n<div id=\"RefineFiltersModal\" class=\"reveal-modal\">\n");
{
var title = Resources.Shared.Redesign.Filters.Title_RefineYourSearch;
var leftLink = Resources.Shared.Redesign.Filters.Label_Cancel;
var rightLink = Resources.Shared.Redesign.Filters.Label_Apply;
Output.Write("\n\n<header id=\"RefineHeader\" class=\"app-header\">\n    <div class=\"tab-bar show-for-small-only\">\n        <div class=\"row\">\n            <div class=\"small-3 columns header-link-left\">\n                <a href=\"#\" id=\"RefineCancelLink\">");
Output.Write(leftLink);
Output.Write("</a>\n            </div>\n            <div class=\"small-6 columns header-link-middle\">\n                <h4>");
Output.Write(title);
Output.Write("</h4>\n            </div>\n            <div class=\"small-3 columns header-link-right text-right\">\n                <a href=\"#\" id=\"RefineApplyLink\">");
Output.Write(rightLink);
Output.Write("</a>\n            </div>\n        </div>\n    </div>\n</header>");
}
Output.Write("\n\n    <div class=\"content-wrap content-wrap-centered\">\n       ");
{
var filterGroupClass = "filter-option filter-option-sort-orders";
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
Output.Write("\n");
if (filters.Filters != null) {
Output.Write("\n        <div>     \n            <div class=\"row\">\n                <div class=\"column medium-12 padding-top padding-bottom\">\n                    <h4 class=\"left remove-bottom-margin\">");
Output.Write(Resources.Shared.Redesign.Filters.Title_Filters);
Output.Write("</h4>\n                </div>\n            </div>\n           <div class=\"content-block\">\n                <div class=\"content-block-body no-padding\">\n                    <dl class=\"accordion-menu accordion\">");
{
var filterGroup = filters.Filters.PriceBands;
var title = Resources.Shared.Redesign.Filters.Title_Price;
var name = "PriceBands";
var param = "PriceBandIds";
Output.Write("\n");
if (filterGroup.Count() > 0) {
Output.Write("\n<dd class=\"accordion-item\">\n    <a href=\"#");
Output.Write(name);
Output.Write("-filter-menu\" class=\"accordion-link\">");
Output.Write(title);
Output.Write("</a>\n    <ul id=\"");
Output.Write(name);
Output.Write("-filters\" class=\"button-group button-group-justified padding-left padding-bottom\">");
for (var __iter__filter in filterGroup) {var filter=filterGroup[__iter__filter];if(typeof(filter)!='function') {
Output.Write("\n        <li>");
if (filter.Id == "2") {
Output.Write("\n            <a href=\"#\" class=\"button toggle-button\">");
Output.Write(string.Format("{0}{0}", Resources.Strings.Currency));
Output.Write("</a>");
}
if (filter.Id == "3") {
Output.Write("\n            <a href=\"#\" class=\"button toggle-button\">");
Output.Write(string.Format("{0}{0}{0}", Resources.Strings.Currency));
Output.Write("</a>");
}
if (filter.Id == "4") {
Output.Write("\n            <a href=\"#\" class=\"button toggle-button\">");
Output.Write(string.Format("{0}{0}{0}{0}", Resources.Strings.Currency));
Output.Write("</a>");
}
Output.Write("\n        </li>");
}}
Output.Write("\n    </ul>\n</dd>");
}
}
{
var filterGroup = filters.Filters.Cuisines;
var title = Resources.Shared.Redesign.Filters.Title_Cuisines;
var name = "Cuisines";
var param = "CuisineIds";
Output.Write("\n");
if (filterGroup.Count() > 0) {
Output.Write("\n<dd class=\"accordion-item\">\n    <a href=\"#");
Output.Write(name);
Output.Write("-filter-menu\" class=\"accordion-link with-arrow\">");
Output.Write(title);
Output.Write("</a>\n    <div id=\"");
Output.Write(name);
Output.Write("-filter-menu\" class=\"accordion-content\">\n        <div class=\"menu-list\">\n            <ul id=\"");
Output.Write(name);
Output.Write("-filters\" class=\"menu-with-checkboxes\">");
for (var __iter__data in filterGroup) {var data=filterGroup[__iter__data];if(typeof(data)!='function') {
{
var filter = data;
var filterName = param;
var filterDataName = param;
var type = "checkbox";
Output.Write("\n\n<li>\n    <label for=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\">\n        <input id=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" type=\"");
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
if (filter.IsSelected) {
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
Output.Write("/>\n        <span>");
Output.Write(filter.Name);
Output.Write("</span>\n    </label>\n</li>");
}
}}
Output.Write("\n            </ul>\n        </div>\n    </div>\n</dd>");
}
}
{
var offersSearchViewModel = filters;
var title = Resources.Shared.Redesign.Filters.Title_OfferTypes;
var name = "OfferTypes";
var param = "OfferTypeIds";
var filterGroupClass = "filter-option filter-option-offers";
Output.Write("\n");
var offersFilterGroup = offersSearchViewModel.Filters.OfferTypes;
var showPop = offersSearchViewModel.Display.ShowPopFilter;
Output.Write("\n");
if (showPop || (offersFilterGroup != null && offersFilterGroup.Count() > 0)) {
Output.Write("\n<dd class=\"");
Output.Write(filterGroupClass);
Output.Write(" accordion-item\">\n    <a href=\"#");
Output.Write(name);
Output.Write("-filter-menu\" class=\"accordion-link with-arrow\">");
Output.Write(title);
Output.Write("</a>\n    <div id=\"");
Output.Write(name);
Output.Write("-filter-menu\" class=\"accordion-content\">\n        <div class=\"menu-list\">\n            <ul id=\"");
Output.Write(name);
Output.Write("-filters\" class=\"menu-with-checkboxes\">");
if (showPop) {
Output.Write("\n                <li>\n                    <label for=\"pop_times\">\n                        <input id=\"pop_times\" type=\"checkbox\" class=\"filter checkbox\" data-filter-name=\"OnlyPopTimes\" data-id=\"true\"/>\n                        <span>");
Output.Write(Resources.Shared.Redesign.Filters.Title_PopOnly);
Output.Write("</span>\n                    </label>\n                </li>");
}
for (var __iter__data in offersFilterGroup) {var data=offersFilterGroup[__iter__data];if(typeof(data)!='function') {
{
var filter = data;
var filterName = param;
var filterDataName = param;
var type = "checkbox";
Output.Write("\n\n<li>\n    <label for=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\">\n        <input id=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" type=\"");
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
if (filter.IsSelected) {
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
Output.Write("/>\n        <span>");
Output.Write(filter.Name);
Output.Write("</span>\n    </label>\n</li>");
}
}}
Output.Write("\n            </ul>\n        </div>\n    </div>\n</dd>");
}
}
Output.Write("\n                    </dl>\n                </div>\n            </div>\n        </div>");
}
Output.Write("\n    </div>\n</div>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Filters.Mobile._Filters
