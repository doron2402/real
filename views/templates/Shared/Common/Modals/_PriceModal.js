if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Common) window.Spark.Shared.Common = {};
if (!window.Spark.Shared.Common.Modals) window.Spark.Shared.Common.Modals = {};
window.Spark.Shared.Common.Modals._PriceModal = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
function RenderViewLevel0() {
Output.Write("<strong>");
Output.Write(Resources.Shared.Common.Modals.Price_Title);
Output.Write("</strong>\n\n<ul class=\"modal-list\">\n    <li>");
Output.Write(Resources.Strings.PriceList2);
Output.Write("</li>\n    <li>");
Output.Write(Resources.Strings.PriceList3);
Output.Write("</li>\n    <li>");
Output.Write(Resources.Strings.PriceList4);
Output.Write("</li>\n</ul>\n\n<div>");
Output.Write(Resources.Shared.Common.Modals.Price_Text);
Output.Write("</div>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Common.Modals._PriceModal
