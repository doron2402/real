if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Filters) window.Spark.Shared.Redesign.Filters = {};
window.Spark.Shared.Redesign.Filters._FilterTravelMode = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var filterTravelMode = viewData["filterTravelMode"];
function RenderViewLevel0() {
Output.Write("\n");
if (filterTravelMode.Request.IsTravelTimeRequest) {
Output.Write("\n<span data-target=\"travel-mode-filter-menu\" class=\"toggle-menu filters\">\n    <span class=\"filter-travel-mode\"> ");
Output.Write(filterTravelMode.Filters.SelectedTravelModeName);
Output.Write("</span>\n</span>");
}
Output.Write("\n<div id=\"travel-mode-filter-menu\" class=\"menu with-arrow\">\n    <div class=\"menu-container\">\n        <div class=\"menu-main\">\n            <div class=\"menu-header\">Transport modes</div>\n            <div class=\"menu-section js-lionbars\">\n                <div class=\"menu-list\">\n                    <div id=\"travel-mode-filters\" class=\"menu-with-checkboxes\">");
for (var __iter__option in filterTravelMode.Filters.TravelModes) {var option=filterTravelMode.Filters.TravelModes[__iter__option];if(typeof(option)!='function') {
Output.Write("\n                            <label for=\"travel_mode_");
Output.Write(option.Id);
Output.Write("\" class=\"menu-list-label");
if (option.IsSelected) {
Output.Write(" highlight");
}
Output.Write("\">\n                                <input type=\"radio\" id=\"travel_mode_");
Output.Write(option.Id);
Output.Write("\" name=\"travel_mode\" value=\"");
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
Output.Write(" data-filter-name=\"TravelMode\" data-id=\"");
Output.Write(option.Id);
Output.Write("\" class=\"filter menu-list-input\"/>\n                                <span>");
Output.Write(option.Name);
Output.Write("</span>\n                            </label>");
}}
Output.Write("\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Filters._FilterTravelMode
