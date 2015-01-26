if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Search) window.Spark.Shared.Redesign.Search = {};
window.Spark.Shared.Redesign.Search._TimePicker = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
function RenderViewLevel0() {
Output.Write("\n\n<div class=\"time-picker dtp-picker-selector\">\n    <a href=\"#\" data-target=\"time-filter-menu\" class=\"time-label dtp-picker-selector-link toggle-menu\">");
Output.Write(model.Display.SelectedTime);
Output.Write("</a>\n    <div id=\"time-filter-menu\" class=\"menu with-arrow\">\n        <div class=\"menu-container\">\n            <div class=\"menu-main\">\n                <div class=\"menu-section js-lionbars\">\n                    <div class=\"menu-list\">\n                        <div id=\"time-filters\" class=\"menu-with-checkboxes\">");
for (var __iter__option in model.Display.TimeOptions) {var option=model.Display.TimeOptions[__iter__option];if(typeof(option)!='function') {
Output.Write("\n                                <label for=\"Time_");
Output.Write(option.Value);
Output.Write("\" class=\"menu-list-label");
if (option.IsSelected) {
Output.Write(" highlight");
}
Output.Write("\">\n                                    <input type=\"radio\" id=\"Time_");
Output.Write(option.Value);
Output.Write("\" name=\"Time\" class=\"menu-list-input time-option\" value=\"");
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
Output.Write("/>\n                                    <span>");
Output.Write(option.Text);
Output.Write("</span>\n                                </label>");
}}
Output.Write("\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Search._TimePicker
