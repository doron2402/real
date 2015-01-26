if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Common) window.Spark.Shared.Common = {};
window.Spark.Shared.Common._Search = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var search = viewData["search"];
function RenderViewLevel0() {
Output.Write("\n\n<i class=\"icon icon-calendar\"></i>\n<div class=\"block calendar\">\n  <label for=\"calendar\">");
Output.Write(Resources.Shared.Common.Strings.SearchLabel_Date);
Output.Write(" <span>");
Output.Write(Resources.Shared.Common.Strings.SearchLabel_DateFormat);
Output.Write("</span></label>\n  <input id=\"calendar\" class=\"search-input-field calendar\" type=\"text\" value=\"");
Output.Write(search.Display.SelectedDate);
Output.Write("\"/>\n</div>\n\n<i class=\"icon icon-clock\"></i>\n<div class=\"block time\">\n  <label for=\"time\">");
Output.Write(Resources.Shared.Common.Strings.SearchLabel_Time);
Output.Write("</label>\n  <select id=\"time\" class=\"time-dropdown\">");
for (var __iter__option in search.Display.TimeOptions) {var option=search.Display.TimeOptions[__iter__option];if(typeof(option)!='function') {
Output.Write("\n      <option value=\"");
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
Output.Write("\n  </select>\n</div>\n\n<i class=\"icon icon-person\"></i>\n<div class=\"block covers\">\n  <label for=\"covers\">");
Output.Write(Resources.Shared.Common.Strings.SearchLabel_Diners);
Output.Write("</label>\n  <select id=\"covers\">");
for (var __iter__option in search.Display.CoverOptions) {var option=search.Display.CoverOptions[__iter__option];if(typeof(option)!='function') {
Output.Write("\n      <option value=\"");
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
Output.Write("\n  </select>\n</div>\n<button id=\"find_a_table\" class=\"btn btn-search\">");
Output.Write(Resources.Shared.Common.Strings.Button_FindATable);
Output.Write("</button>\n<div class=\"validation search-control-container-validation hidden\">");
Output.Write(Resources.Shared.Common.Strings.SearchLabel_InvalidSearchMsg);
Output.Write("</div>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Common._Search
