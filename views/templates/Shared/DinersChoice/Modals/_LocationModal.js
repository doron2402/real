if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.DinersChoice) window.Spark.Shared.DinersChoice = {};
if (!window.Spark.Shared.DinersChoice.Modals) window.Spark.Shared.DinersChoice.Modals = {};
window.Spark.Shared.DinersChoice.Modals._LocationModal = {
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
Output.Write("\n\n<h3>");
Output.Write(Resources.Shared.DinersChoice.Filters.RefineLocation);
Output.Write("</h3>\n\n<i id=\"close\" class=\"close icon icon-close\" alt=\"close popup\" title=\"Close Popup\"></i>\n\n<ul class=\"col group\">\n    <li class=\"group-item\">\n        <input id=\"all_metro\" type=\"radio\" name=\"Location_modal\" class=\"filter radio metro\" data-name=\"Location_modal\" data-id=\"");
Output.Write(locationModal.Metro.Id);
Output.Write("\">\n        <label for=\"all_metro\" class=\"label\">");
Output.Write(string.Format(Resources.Shared.Common.Modals.Location_AllMetroName, locationModal.Metro.Name));
Output.Write("</label>\n    </li>\n\n    <ul class=\"sub-list\">");
for (var __iter__location in locationModal.Labels) {var location=locationModal.Labels[__iter__location];if(typeof(location)!='function') {
Output.Write("\n            <a href=\"");
Output.Write(location.Uri);
Output.Write("\" title=\"");
Output.Write(location.Name);
Output.Write("\">");
{
var filter = location;
var filterName = "Location_modal";
var filterDataName = "Location_modal";
var type = "radio";
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
Output.Write("\n            </a>");
}}
Output.Write("\n    </ul>\n");
if (locationModal.UnqualifyingRegions.Count() > 0) {
Output.Write("\n        <ul class=\"sub-list line dashed\">\n            <p>No current qualifying lists for:</p>");
for (var __iter__location in locationModal.UnqualifyingRegions) {var location=locationModal.UnqualifyingRegions[__iter__location];if(typeof(location)!='function') {
{
var filter = location;
var filterName = "Location_modal";
var filterDataName = "Location_modal";
var type = "radio";
var isDisabled = "true";
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
Output.Write("\n        </ul>");
}
Output.Write("\n</ul>\n\n<div class=\"footer\">\n    <button id=\"submit\" class=\"btn btn-modal submit\">");
Output.Write(Resources.Shared.Common.Modals.SubmitButton);
Output.Write("</button>\n    <button id=\"cancel\" class=\"btn btn-modal cancel\">");
Output.Write(Resources.Shared.Common.Modals.CancelButton);
Output.Write("</button>\n</div>\n");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.DinersChoice.Modals._LocationModal
