if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Common) window.Spark.Shared.Common = {};
if (!window.Spark.Shared.Common.Modals) window.Spark.Shared.Common.Modals = {};
window.Spark.Shared.Common.Modals._FilterModal = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var filterModal = viewData["filterModal"];
var filter = viewData["filter"];
var filterName = viewData["filterName"];
var filterDataName = viewData["filterDataName"];
var type = viewData["type"];
var isDisabled = viewData["isDisabled"];
function RenderViewLevel0() {
Output.Write("\n");
{
var totalLabels = filterModal.Labels.Count();
var cols = totalLabels <= 30 ? 2 : 3;
var itemsPerColumn = Math.ceil(totalLabels/cols);
Output.Write("\n\n    <div class=\"columns col-");
Output.Write(cols);
Output.Write("\">\n        <h3>");
Output.Write(Resources.Shared.Common.Filters["Title_"+filterModal.FilterName]);
Output.Write("</h3>\n        <i id=\"close\" class=\"close icon icon-close\" alt=\"close popup\" title=\"Close Popup\"></i>\n\n        <ul class=\"col\">");
{
var name = filterModal.Filter+"_modal";
var labelIndex=0;for (var __iter__label in filterModal.Labels) {var label=filterModal.Labels[__iter__label];if(typeof(label)!='function') {
if (labelIndex % itemsPerColumn == 0 && labelIndex != 0) {
Output.Write("\n                    </ul><ul class=\"col\">");
}
{
var filter = label;
var filterName = name;
var filterDataName = name;
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
++labelIndex;}}
}
Output.Write("\n        </ul>\n\n        <div class=\"footer\">\n            <button id=\"submit\" class=\"btn btn-modal submit\">");
Output.Write(Resources.Shared.Common.Modals.SubmitButton);
Output.Write("</button>\n            <button id=\"cancel\" class=\"btn btn-modal cancel\">");
Output.Write(Resources.Shared.Common.Modals.CancelButton);
Output.Write("</button>\n        </div>\n    </div>\n");
}
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Common.Modals._FilterModal
