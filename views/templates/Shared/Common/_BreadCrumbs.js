if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Common) window.Spark.Shared.Common = {};
window.Spark.Shared.Common._BreadCrumbs = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var breadCrumbs = viewData["breadCrumbs"];
function RenderViewLevel0() {
Output.Write("\n\n<a href=\"/\" class=\"breadcrumb breadcrumbs-link\">");
Output.Write(Resources.Strings.DomainName);
Output.Write(" ");
Output.Write(Resources.Shared.Common.BreadCrumbs.HomeNode);
Output.Write("</a>\n<span>></span>\n");
if (breadCrumbs.Display.Metro != null) {
Output.Write("\n    <a href=\"");
Output.Write(breadCrumbs.Display.Metro.Url);
Output.Write("\" class=\"breadcrumb breadcrumbs-link\">");
Output.Write(breadCrumbs.Display.Metro.Name);
Output.Write(" ");
Output.Write(Resources.Shared.Common.BreadCrumbs.LocationNode);
Output.Write("</a>\n\t<span>></span>");
}
Output.Write("\n<span class=\"breadcrumb\">");
Output.Write(Resources.Shared.Common.BreadCrumbs.LastNode);
Output.Write("</span>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Common._BreadCrumbs
