if (!window.Spark) window.Spark = {};
if (!window.Spark.DinersChoiceList) window.Spark.DinersChoiceList = {};
window.Spark.DinersChoiceList._LinkList = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var items = viewData["items"];
var itemClass = viewData["itemClass"];
var linkClass = viewData["linkClass"];
var titleClass = viewData["titleClass"];
function RenderViewLevel0() {
Output.Write("\n");
if (items.Count() > 0) {
Output.Write("\n<div class=\"content-section-link-lists\">\n    <ul class=\"");
Output.Write(titleClass);
Output.Write("\">                ");
for (var __iter__item in items) {var item=items[__iter__item];if(typeof(item)!='function') {
Output.Write("\n        <li");
{
var __just__once__ = 0;
if (itemClass != null) {
if (__just__once__ < 1) {
Output.Write(" class=\"");
}
__just__once__ = 1;
Output.Write(itemClass);
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">\n            <a href=\"");
Output.Write(item.Uri);
Output.Write("\" class=\"secondary\">");
Output.Write(item.Name);
Output.Write("</a>\n        </li>");
}}
Output.Write("\n    </ul>\n</div>");
}
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.DinersChoiceList._LinkList
