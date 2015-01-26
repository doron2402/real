if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
window.Spark.Shared.Redesign._Search = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var search = viewData["search"];
function RenderViewLevel0() {
Output.Write("\n<div class=\"page-header\">\n\t<div class=\"max-width-wrapper\">\n\t\t<div class=\"page-header-content\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"column\">\n\t\t\t\t\t<div id=\"dtp-picker\" action=\"/search\" class=\"with-search dtp-picker\">\n\n\t\t\t\t\t\t\t\t<div class=\"dtp-picker-selector\">\n\t\t\t\t\t\t\t\t\t<a class=\"dtp-picker-selector-link js-toggle-menu\">\n\t\t\t\t\t\t\t\t\t\t<div id=\"dtp-label-party\" data-bind=\"text: _vm.dtpPicker.partySize_label\" class=\"dtp-picker-label\">2 people</div>\n\t\t\t\t\t\t\t\t\t\t<select id=\"covers\" data-bind=\"value: _vm.dtpPicker.partySize, valueUpdate: _vm.dtpPicker.partySize\" class=\"dtp-picker-select\">");
for (var __iter__option in search.Display.CoverOptions) {var option=search.Display.CoverOptions[__iter__option];if(typeof(option)!='function') {
Output.Write("\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"");
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
Output.Write("\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"dtp-picker-selector\">\n\t\t\t\t\t\t\t\t\t<a class=\"dtp-picker-selector-link\">\n\t\t\t\t\t\t\t\t\t\t<div id=\"dtp-label-date\" data-bind=\"text: _vm.dtpPicker.date_label\" class=\"dtp-picker-label\">Today</div>\n\t\t\t\t\t\t\t\t\t\t<select id=\"date\" name=\"date\" data-bind=\"value: _vm.dtpPicker.date, valueUpdate: _vm.dtpPicker.date\" class=\"dtp-select\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Today</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"dtp-picker-selector\">\n\t\t\t\t\t\t\t\t\t<a class=\"dtp-picker-selector-link js-toggle-menu\">\n\n\t\t\t\t\t\t\t\t\t\t<div id=\"dtp-label-time\" class=\"dtp-picker-label\">8:00 PM</div>\n\t\t\t\t\t\t\t\t\t\t<select id=\"time\" name=\"time\" data-bind=\"value: _vm.dtpPicker.time, valueUpdate: _vm.dtpPicker.time\" class=\"dtp-picker-select\">");
for (var __iter__option in search.Display.TimeOptions) {var option=search.Display.TimeOptions[__iter__option];if(typeof(option)!='function') {
Output.Write("\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"");
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
Output.Write("\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<button id=\"findATable\" class=\"button dtp-picker-button\">");
Output.Write(Resources.Shared.Common.Strings.Button_FindATable);
Output.Write("</button>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign._Search
