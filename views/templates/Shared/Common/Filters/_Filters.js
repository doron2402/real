if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Common) window.Spark.Shared.Common = {};
if (!window.Spark.Shared.Common.Filters) window.Spark.Shared.Common.Filters = {};
window.Spark.Shared.Common.Filters._Filters = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var filters = viewData["filters"];
var locationGroup = viewData["locationGroup"];
var title = viewData["title"];
var name = viewData["name"];
var param = viewData["param"];
var filterGroup = viewData["filterGroup"];
var title = viewData["title"];
var name = viewData["name"];
var param = viewData["param"];
var booleanGroup = viewData["booleanGroup"];
var filter = viewData["filter"];
var filterName = viewData["filterName"];
var filterDataName = viewData["filterDataName"];
var type = viewData["type"];
var isDisabled = viewData["isDisabled"];
var filter = viewData["filter"];
var filterName = viewData["filterName"];
var filterDataName = viewData["filterDataName"];
var type = viewData["type"];
var isDisabled = viewData["isDisabled"];
function RenderViewLevel0() {
Output.Write("\n\n<div class=\"search-filters-header\">\n    <h3 class=\"title\">&#9660; ");
Output.Write(Resources.Shared.Common.Filters.Title);
Output.Write("</h3>\n</div>\n<div class=\"search-filters-inner cf\">\n    <div id=\"location_filters\" class=\"group\">");
{
var locationGroup = filters;
Output.Write("\n\n<ul>");
if (locationGroup.Request.IsGeoDistanceRequest) {
Output.Write("\n        <li class=\"title\">");
Output.Write(Resources.Shared.Common.Filters.Title_Within);
Output.Write("</li>\n        <li class=\"group-item\">\n            <select id=\"within_radius\" class=\"distance-dropdown\">");
for (var __iter__option in locationGroup.Display.DistanceOptions) {var option=locationGroup.Display.DistanceOptions[__iter__option];if(typeof(option)!='function') {
Output.Write("\n                    <option value=\"");
Output.Write(option.Value);
Output.Write("\"");
{
var __just__once__ = 0;
if (option.IsSelected) {
if (__just__once__ < 1) {
Output.Write(" selected=\"");
}
__just__once__ = 1;
Output.Write("selected");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">");
Output.Write(option.Text);
Output.Write("</option>");
}}
Output.Write("\n            </select>\n        </li>");
}
else {
Output.Write("\n        <li class=\"title\">");
Output.Write(Resources.Shared.Common.Filters.Title_Locations);
Output.Write("</li>\n");
for (var __iter__location in locationGroup.Filters.TopLocations) {var location=locationGroup.Filters.TopLocations[__iter__location];if(typeof(location)!='function') {
if (location.TypeString == "Region") {
{
var filter = location;
var filterName = "RegionIds";
var filterDataName = "RegionIds";
var type = "checkbox";
Output.Write("\n");
var disabled = isDisabled == "true";
Output.Write("\n\n<li class=\"group-item");
if (disabled) {
Output.Write(" disabled");
}
Output.Write("\">");
if (type != "") {
Output.Write("\n        <input id=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"filter ");
Output.Write(type);
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
{
var __just__once__ = 0;
if (disabled) {
if (__just__once__ < 1) {
Output.Write(" disabled=\"");
}
__just__once__ = 1;
Output.Write("disabled");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">");
}
Output.Write("\n    <label for=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"label\">");
Output.Write(filter.Name);
Output.Write("</label>\n</li>");
}
}
if (location.TypeString == "Neighborhood") {
{
var filter = location;
var filterName = "NeighborhoodIds";
var filterDataName = "NeighborhoodIds";
var type = "checkbox";
Output.Write("\n");
var disabled = isDisabled == "true";
Output.Write("\n\n<li class=\"group-item");
if (disabled) {
Output.Write(" disabled");
}
Output.Write("\">");
if (type != "") {
Output.Write("\n        <input id=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"filter ");
Output.Write(type);
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
{
var __just__once__ = 0;
if (disabled) {
if (__just__once__ < 1) {
Output.Write(" disabled=\"");
}
__just__once__ = 1;
Output.Write("disabled");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">");
}
Output.Write("\n    <label for=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"label\">");
Output.Write(filter.Name);
Output.Write("</label>\n</li>");
}
}
}}
}
Output.Write("\n");
if (locationGroup.Request.RegionIds != null || locationGroup.Request.NeighborhoodIds != null) {
Output.Write("\n        <li class=\"show-more more-link\" data-filter-name=\"Neighborhoods\" data-filter-type=\"NeighborhoodIds\" data-modal-type=\"location\">");
Output.Write(Resources.Shared.Common.Filters.MoreLink);
Output.Write(" &#8250;</li>");
}
else {
Output.Write("\n        <li class=\"show-more more-link\" data-filter-name=\"Regions\" data-filter-type=\"RegionIds\" data-modal-type=\"location\" data-change-location=\"true\">");
Output.Write(Resources.Shared.Common.Filters.MoreLink);
Output.Write(" &#8250;</li>");
}
Output.Write("\n</ul>");
}
Output.Write("\n    </div>\n\n    <div id=\"cuisine_filters\" class=\"group\">");
{
var filterGroup = filters.Filters.TopCuisines;
var title = Resources.Shared.Common.Filters.Title_Cuisines;
var name = "Cuisines";
var param = "CuisineIds";
Output.Write("\n");
if (filterGroup.Count() > 0) {
Output.Write("\n<ul>\n    <li class=\"title\">");
Output.Write(title);
Output.Write("</li>\n");
for (var __iter__data in filterGroup) {var data=filterGroup[__iter__data];if(typeof(data)!='function') {
{
var filter = data;
var filterName = param;
var filterDataName = param;
var type = "checkbox";
var isDisabled = "false";
Output.Write("\n");
var disabled = isDisabled == "true";
Output.Write("\n\n<li class=\"group-item");
if (disabled) {
Output.Write(" disabled");
}
Output.Write("\">");
if (type != "") {
Output.Write("\n        <input id=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"filter ");
Output.Write(type);
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
{
var __just__once__ = 0;
if (disabled) {
if (__just__once__ < 1) {
Output.Write(" disabled=\"");
}
__just__once__ = 1;
Output.Write("disabled");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">");
}
Output.Write("\n    <label for=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"label\">");
Output.Write(filter.Name);
Output.Write("</label>\n</li>");
}
}}
Output.Write("\n");
if (name != "PriceBands") {
Output.Write("\n    <li class=\"show-more more-link\" data-filter-name=\"");
Output.Write(name);
Output.Write("\" data-filter-type=\"");
Output.Write(param);
Output.Write("\">");
Output.Write(Resources.Shared.Common.Filters.MoreLink);
Output.Write(" &#8250;</li>");
}
Output.Write("\n</ul>");
}
}
Output.Write("\n    </div>\n\n    <div id=\"price_band_filters\" class=\"group\">");
{
var filterGroup = filters.Filters.PriceBands;
var title = Resources.Shared.Common.Filters.Title_Price;
var name = "PriceBands";
var param = "PriceBandIds";
Output.Write("\n");
if (filterGroup.Count() > 0) {
Output.Write("\n<ul>\n    <li class=\"title\">");
Output.Write(title);
Output.Write("</li>\n");
for (var __iter__data in filterGroup) {var data=filterGroup[__iter__data];if(typeof(data)!='function') {
{
var filter = data;
var filterName = param;
var filterDataName = param;
var type = "checkbox";
var isDisabled = "false";
Output.Write("\n");
var disabled = isDisabled == "true";
Output.Write("\n\n<li class=\"group-item");
if (disabled) {
Output.Write(" disabled");
}
Output.Write("\">");
if (type != "") {
Output.Write("\n        <input id=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"filter ");
Output.Write(type);
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
{
var __just__once__ = 0;
if (disabled) {
if (__just__once__ < 1) {
Output.Write(" disabled=\"");
}
__just__once__ = 1;
Output.Write("disabled");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">");
}
Output.Write("\n    <label for=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"label\">");
Output.Write(filter.Name);
Output.Write("</label>\n</li>");
}
}}
Output.Write("\n");
if (name != "PriceBands") {
Output.Write("\n    <li class=\"show-more more-link\" data-filter-name=\"");
Output.Write(name);
Output.Write("\" data-filter-type=\"");
Output.Write(param);
Output.Write("\">");
Output.Write(Resources.Shared.Common.Filters.MoreLink);
Output.Write(" &#8250;</li>");
}
Output.Write("\n</ul>");
}
}
Output.Write("\n    </div>\n\n    <div id=\"offer_type_filters\" class=\"group\">");
{
var filterGroup = filters.Filters.TopOfferTypes;
var title = Resources.Shared.Common.Filters.Title_OfferTypes;
var name = "OfferTypes";
var param = "OfferTypeIds";
Output.Write("\n");
if (filterGroup.Count() > 0) {
Output.Write("\n<ul>\n    <li class=\"title\">");
Output.Write(title);
Output.Write("</li>\n");
for (var __iter__data in filterGroup) {var data=filterGroup[__iter__data];if(typeof(data)!='function') {
{
var filter = data;
var filterName = param;
var filterDataName = param;
var type = "checkbox";
var isDisabled = "false";
Output.Write("\n");
var disabled = isDisabled == "true";
Output.Write("\n\n<li class=\"group-item");
if (disabled) {
Output.Write(" disabled");
}
Output.Write("\">");
if (type != "") {
Output.Write("\n        <input id=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"filter ");
Output.Write(type);
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
{
var __just__once__ = 0;
if (disabled) {
if (__just__once__ < 1) {
Output.Write(" disabled=\"");
}
__just__once__ = 1;
Output.Write("disabled");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">");
}
Output.Write("\n    <label for=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"label\">");
Output.Write(filter.Name);
Output.Write("</label>\n</li>");
}
}}
Output.Write("\n");
if (name != "PriceBands") {
Output.Write("\n    <li class=\"show-more more-link\" data-filter-name=\"");
Output.Write(name);
Output.Write("\" data-filter-type=\"");
Output.Write(param);
Output.Write("\">");
Output.Write(Resources.Shared.Common.Filters.MoreLink);
Output.Write(" &#8250;</li>");
}
Output.Write("\n</ul>");
}
}
Output.Write("\n    </div>\n\n    <div id=\"boolean_filters\" class=\"group boolean\">");
{
var booleanGroup = filters;
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
Output.Write("\n    </div>\n</div>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Common.Filters._Filters
