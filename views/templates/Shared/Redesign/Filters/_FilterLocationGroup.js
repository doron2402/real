if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Filters) window.Spark.Shared.Redesign.Filters = {};
window.Spark.Shared.Redesign.Filters._FilterLocationGroup = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var filterLocationGroup = viewData["filterLocationGroup"];
var title = viewData["title"];
var name = viewData["name"];
var param = viewData["param"];
var filterGroup = viewData["filterGroup"];
var title = viewData["title"];
var modalTitle = viewData["modalTitle"];
var filterGroupId = viewData["filterGroupId"];
var name = viewData["name"];
var param = viewData["param"];
var filterGroupClass = viewData["filterGroupClass"];
var selectedCount = viewData["selectedCount"];
var filter = viewData["filter"];
var filterName = viewData["filterName"];
var filterDataName = viewData["filterDataName"];
var type = viewData["type"];
function RenderViewLevel0() {
Output.Write("\n");
if (filterLocationGroup.Request.IsGeoDistanceRequest) {
Output.Write("\n    <li id=\"distance_filters\" class=\"filter-option filters-menu-block\">\n    <span data-target=\"distance-filter-menu\" class=\"toggle-menu filters\">\n        ");
Output.Write(Resources.Shared.Redesign.Filters.Title_Range);
Output.Write(" <span class=\"filter-distance\"> ");
Output.Write(filterLocationGroup.Request.Distance);
Output.Write("</span> ");
Output.Write(Resources.Strings.DistanceUnit_Small);
Output.Write("\n    </span>\n    <div id=\"distance-filter-menu\" class=\"menu with-arrow\">\n        <div class=\"menu-container\">\n        <div class=\"menu-main\">\n            <div class=\"menu-header\">");
Output.Write(Resources.Shared.Redesign.Filters.Label_FilterBy_Range);
Output.Write("</div>\n            <div class=\"menu-section js-lionbars\">\n            <div class=\"menu-list\">\n                <div id=\"distance-filters\" class=\"menu-with-checkboxes\">");
for (var __iter__option in filterLocationGroup.Display.DistanceOptions) {var option=filterLocationGroup.Display.DistanceOptions[__iter__option];if(typeof(option)!='function') {
Output.Write("\n                    <label for=\"within_radius_");
Output.Write(option.Value);
Output.Write("\" class=\"menu-list-label");
if (option.IsSelected) {
Output.Write(" highlight");
}
Output.Write("\">\n                    <input type=\"radio\" id=\"within_radius_");
Output.Write(option.Value);
Output.Write("\" name=\"within_radius\" value=\"");
Output.Write(option.Value);
Output.Write("\"");
{
var __just__once__ = 0;
if (option.IsSelected) {
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
Output.Write(" data-filter-name=\"Distance\" data-id=\"");
Output.Write(option.Value);
Output.Write("\" class=\"filter menu-list-input\"/>\n                    <span>");
Output.Write(option.Text);
Output.Write("</span>\n                    </label>");
}}
Output.Write("\n                </div>\n            </div>\n            </div>\n        </div>\n        </div>\n    </div>\n    </li>");
}
else {
if ((filterLocationGroup.Request.RegionIds == null && filterLocationGroup.Request.NeighborhoodIds == null) || filterLocationGroup.Request.ParsedRegionIds.Count > 1) {
{
var filterGroup = filterLocationGroup.Filters.Regions;
var title = Resources.Shared.Redesign.Filters.Title_Regions;
var modalTitle = Resources.Shared.Redesign.Filters.Title_Regions;
var filterGroupId = "location_filters";
var name = "Regions";
var param = "RegionIds";
var filterGroupClass = "filter-option filter-option-locations";
var selectedCount = filterLocationGroup.Filters.SelectedRegionCount;
Output.Write("\n\n<li id=\"");
Output.Write(filterGroupId);
Output.Write("\" class=\"");
Output.Write(filterGroupClass);
Output.Write("\">");
if (filterGroup.Count() > 0) {
Output.Write("\n    <span data-target=\"");
Output.Write(name);
Output.Write("-filter-menu\" class=\"toggle-menu filters\">\n      ");
Output.Write(title);
Output.Write(" <span class=\"filter-count\">");
if (selectedCount > 0) {
Output.Write("\n        (");
Output.Write(selectedCount);
Output.Write(")");
}
Output.Write("\n      </span>\n    </span>\n    <div id=\"");
Output.Write(name);
Output.Write("-filter-menu\" class=\"menu with-arrow\">\n      <div class=\"menu-container\">\n        <div class=\"menu-main\">\n          <div class=\"menu-header\">");
Output.Write(modalTitle);
Output.Write("</div>\n          <div class=\"menu-section js-lionbars\">\n            <div class=\"menu-list\">\n              <div id=\"");
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
Output.Write("\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>");
}
Output.Write("\n</li>");
}
}
else {
{
var filterGroup = filterLocationGroup.Filters.Neighborhoods;
var title = Resources.Shared.Redesign.Filters.Title_Neighborhoods;
var modalTitle = Resources.Shared.Redesign.Filters.Title_Neighborhoods;
var filterGroupId = "location_filters";
var name = "Neighborhoods";
var param = "NeighborhoodIds";
var filterGroupClass = "filter-option filter-option-locations";
var selectedCount = filterLocationGroup.Filters.SelectedNeighborhoodCount;
Output.Write("\n\n<li id=\"");
Output.Write(filterGroupId);
Output.Write("\" class=\"");
Output.Write(filterGroupClass);
Output.Write("\">");
if (filterGroup.Count() > 0) {
Output.Write("\n    <span data-target=\"");
Output.Write(name);
Output.Write("-filter-menu\" class=\"toggle-menu filters\">\n      ");
Output.Write(title);
Output.Write(" <span class=\"filter-count\">");
if (selectedCount > 0) {
Output.Write("\n        (");
Output.Write(selectedCount);
Output.Write(")");
}
Output.Write("\n      </span>\n    </span>\n    <div id=\"");
Output.Write(name);
Output.Write("-filter-menu\" class=\"menu with-arrow\">\n      <div class=\"menu-container\">\n        <div class=\"menu-main\">\n          <div class=\"menu-header\">");
Output.Write(modalTitle);
Output.Write("</div>\n          <div class=\"menu-section js-lionbars\">\n            <div class=\"menu-list\">\n              <div id=\"");
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
Output.Write("\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>");
}
Output.Write("\n</li>");
}
}
}
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Filters._FilterLocationGroup
