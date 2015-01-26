if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.TravelTimeSearch) window.Spark.Shared.Redesign.TravelTimeSearch = {};
window.Spark.Shared.Redesign.TravelTimeSearch._TravelOptions = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var travelOptions = viewData["travelOptions"];
var filterTravelTime = viewData["filterTravelTime"];
function RenderViewLevel0() {
Output.Write("\n");
{
var wakingSelected = travelOptions.Request.TravelMode == "walking";
var publicTransportSelected = travelOptions.Request.TravelMode == "public_transport";
var cyclingSelected = travelOptions.Request.TravelMode == "cycling";
var drivingSelected = travelOptions.Request.TravelMode == "driving";
}
Output.Write("\n\n\n<ul>\n\t<li class=\"dtp-travel-time-item dtp-travel-time-filter\" id=\"travel_time_filters\">");
{
var filterTravelTime = travelOptions;
Output.Write("\n\n<span data-target=\"travel-time-filter-menu\" class=\"toggle-menu filters\">\n    <span class=\"filter-travel-time text-arrow-down\">");
Output.Write(filterTravelTime.Filters.SelectedTravelTimeName);
Output.Write("</span>\n</span>\n<div id=\"travel-time-filter-menu\" class=\"menu with-arrow\">\n    <div class=\"menu-container\">\n        <div class=\"menu-main\">\n            <div class=\"menu-header\">Travel times</div>\n            <div class=\"menu-section js-lionbars\">\n                <div class=\"menu-list\">\n                    <div id=\"travel-time-filters\" class=\"menu-with-checkboxes\">");
for (var __iter__option in filterTravelTime.Filters.TravelTimes) {var option=filterTravelTime.Filters.TravelTimes[__iter__option];if(typeof(option)!='function') {
Output.Write("\n                            <label for=\"travel_time_");
Output.Write(option.Id);
Output.Write("\" class=\"menu-list-label");
if (option.IsSelected) {
Output.Write(" highlight");
}
Output.Write("\">\n                                <input type=\"radio\" id=\"travel_time_");
Output.Write(option.Id);
Output.Write("\" name=\"travel_time\" value=\"");
Output.Write(option.Id);
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
Output.Write(" data-filter-name=\"TravelTime\" data-id=\"");
Output.Write(option.Id);
Output.Write("\" class=\"filter menu-list-input\"/>\n                                <span>");
Output.Write(option.Name);
Output.Write("</span>\n                            </label>");
}}
Output.Write("\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
}
Output.Write("\n\t</li>\n\t<li class=\"dtp-travel-time-item dtp-travel-time-walk");
if (wakingSelected) {
Output.Write(" travel-highlighted");
}
Output.Write("\" data-mode=\"walking\">\n\t\t<a href=\"#\" class=\"travel-mode\"></a>\n\t</li>\n\t<li class=\"dtp-travel-time-item dtp-travel-time-public");
if (publicTransportSelected) {
Output.Write(" travel-highlighted");
}
Output.Write("\" data-mode=\"public_transport\">\n\t\t<a href=\"#\" class=\"travel-mode\"></a>\n\t</li>\n\t<li class=\"dtp-travel-time-item dtp-travel-time-car");
if (drivingSelected) {
Output.Write(" travel-highlighted");
}
Output.Write("\" data-mode=\"driving\">\n\t\t<a href=\"#\" class=\"travel-mode\" style=\"\"></a>\n\t</li>\n\t<li class=\"dtp-travel-time-item dtp-travel-time-bike");
if (cyclingSelected) {
Output.Write(" travel-highlighted");
}
Output.Write("\" data-mode=\"cycling\">\n\t\t<a href=\"#\" class=\"travel-mode\"></a>\n\t</li>\n</ul>\n");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.TravelTimeSearch._TravelOptions
