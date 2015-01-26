if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Common) window.Spark.Shared.Common = {};
if (!window.Spark.Shared.Common.Modals) window.Spark.Shared.Common.Modals = {};
window.Spark.Shared.Common.Modals._LocationModal = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var locationModal = viewData["locationModal"];
var filter = viewData["filter"];
var filterName = viewData["filterName"];
var filterDataName = viewData["filterDataName"];
var type = viewData["type"];
var isDisabled = viewData["isDisabled"];
function RenderViewLevel0() {
Output.Write("\n");
if (locationModal.IsChangeLocationModal) {
Output.Write("\n    <a href=\"/home.aspx\" class=\"change-location-link\">");
Output.Write(Resources.Shared.Common.Modals.Location_SeeAllLocationsLink);
Output.Write(" &#8250;</a>");
}
else {
Output.Write("\n    <span class=\"change-location-link\" data-filter-name=\"Regions\" data-filter-type=\"location\" data-change-location=\"true\">");
Output.Write(Resources.Shared.Common.Modals.Location_ChangeLocationLink);
Output.Write(" &#8250;</span>");
}
Output.Write("\n");
if (locationModal.IsChangeLocationModal) {
Output.Write("\n    <h3>");
Output.Write(Resources.Shared.Common.Modals.Location_Title_ChangeLocation);
Output.Write("</h3>");
}
else {
Output.Write("\n    <h3>");
Output.Write(Resources.Shared.Common.Modals.Location_Title_Area);
Output.Write("</h3>");
}
Output.Write("\n\n<i id=\"close\" class=\"close icon icon-close\" alt=\"close popup\" title=\"Close Popup\"></i>\n<div class=\"change-location-options\">\n    <b class=\"sub-title\">");
Output.Write(Resources.Shared.Common.Modals.Location_SearchLabel);
Output.Write("</b>\n    <input type=\"text\" id=\"address_field\" class=\"address-field\" value=\"");
Output.Write(Resources.Shared.Common.Modals.Location_AddressPlaceholderText);
Output.Write("\"/>\n    <label for=\"within_radius\">");
Output.Write(Resources.Shared.Common.Modals.Location_RadiusLabel);
Output.Write("</label>\n    <select id=\"within_radius\" class=\"distance-dropdown\">");
for (var __iter__option in locationModal.DistanceOptions) {var option=locationModal.DistanceOptions[__iter__option];if(typeof(option)!='function') {
Output.Write("\n        <option value=\"");
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
Output.Write("\n    </select>\n</div>\n\n<div id=\"address_options\" class=\"list-wrapper address-options\">\n    <p>");
Output.Write(Resources.Shared.Common.Modals.Location_DidYouMean);
Output.Write(":</p>\n    <ul id=\"address_list\" class=\"address-list\"></ul>\n</div>\n\n<div id=\"location_error_container\" class=\"location-error-container list-wrapper\"></div>\n");
if (locationModal.Labels.Count() > 0) {
{
var totalLabels = locationModal.Labels.Count();
var cols = totalLabels <= 30 ? totalLabels <= 15 ? 1 : 2 : 3;
var itemsPerColumn = Math.ceil(totalLabels/cols);
Output.Write("\n        <div class=\"columns col-");
Output.Write(cols);
Output.Write("\">\n            <b class=\"sub-title\">");
Output.Write(Resources.Shared.Common.Modals.Location_SelectCity);
Output.Write("</b>\n\n            <ul class=\"col\">");
var locationIndex=0;for (var __iter__location in locationModal.Labels) {var location=locationModal.Labels[__iter__location];if(typeof(location)!='function') {
if (locationIndex % itemsPerColumn == 0 && locationIndex != 0) {
Output.Write("\n                    </ul><ul class=\"col\">");
}
Output.Write("\n");
if (location.TypeString == "Region") {
{
var filter = location;
var filterName = "RegionIds_modal";
var filterDataName = "RegionIds_modal";
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
}
if (location.TypeString == "Neighborhood") {
{
var filter = location;
var filterName = "NeighborhoodIds_modal";
var filterDataName = "NeighborhoodIds_modal";
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
}
++locationIndex;}}
if (locationModal.IsChangeLocationModal) {
Output.Write("\n                    <li class=\"group-item\">\n                        <input id=\"check_all\" type=\"checkbox\" class=\"select-all\">\n                        <label for=\"check_all\" class=\"label\">");
Output.Write(string.Format(Resources.Shared.Common.Modals.Location_AllMetroName, locationModal.MetroName));
Output.Write("</label>\n                    </li>");
}
Output.Write("\n            </ul>\n        </div>");
}
}
Output.Write("\n\n<div class=\"footer\">\n    <button id=\"submit\" class=\"btn btn-modal submit\">");
Output.Write(Resources.Shared.Common.Modals.SubmitButton);
Output.Write("</button>\n    <button id=\"cancel\" class=\"btn btn-modal cancel\">");
Output.Write(Resources.Shared.Common.Modals.CancelButton);
Output.Write("</button>\n</div>\n");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Common.Modals._LocationModal
