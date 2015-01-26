if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Common) window.Spark.Shared.Common = {};
if (!window.Spark.Shared.Common.Ads) window.Spark.Shared.Common.Ads = {};
window.Spark.Shared.Common.Ads._Ad = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
function RenderViewLevel0() {
Output.Write("\n");
if (Model.IsVisible) {
Output.Write("\n    <div id=\"");
Output.Write(Model.Identifier);
Output.Write("\" name=\"");
Output.Write(Model.Identifier);
Output.Write("\" class=\"ad-iframe\" data-src=\"");
Output.Write(Model.Src);
Output.Write("\" style=\"width:");
Output.Write(Model.Width);
Output.Write(";height:");
Output.Write(Model.Height);
Output.Write(";display:none\">\n    \t<div class=\"ad-caption\">Advertisement</div>\n    </div>");
}
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Common.Ads._Ad
