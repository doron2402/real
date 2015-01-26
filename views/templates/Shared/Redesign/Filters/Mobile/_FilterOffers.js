if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Filters) window.Spark.Shared.Redesign.Filters = {};
if (!window.Spark.Shared.Redesign.Filters.Mobile) window.Spark.Shared.Redesign.Filters.Mobile = {};
window.Spark.Shared.Redesign.Filters.Mobile._FilterOffers = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
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
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Filters.Mobile._FilterOffers
