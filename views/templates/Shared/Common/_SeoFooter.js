if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Common) window.Spark.Shared.Common = {};
window.Spark.Shared.Common._SeoFooter = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var seoFooter = viewData["seoFooter"];
function RenderViewLevel0() {
Output.Write("\n");
Html.RenderAction("Footer", "Srs", {domainCulture:Model.DomainCulture,metro:Model.Display.Metro });Output.Write("\n\n<div class=\"global-footer-system-info\">(Build Version:");
Output.Write(Html.BuildVersion());
Output.Write(") (Machine Name:");
Output.Write(System.Environment.MachineName);
Output.Write(") (Request ID:");
Output.Write(seoFooter.Headers.RequestId);
Output.Write(")</div>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Common._SeoFooter
