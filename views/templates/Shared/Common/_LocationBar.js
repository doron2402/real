if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Common) window.Spark.Shared.Common = {};
window.Spark.Shared.Common._LocationBar = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var locationBar = viewData["locationBar"];
function RenderViewLevel0() {
Output.Write("\n\n<h1 class=\"search-location\">");
Output.Write(locationBar.Display.PageMetaData.Title);
Output.Write("</h1>\n<span class=\"change-location-link\" data-filter-name=\"Regions\" data-filter-type=\"location\" data-change-location=\"true\">");
Output.Write(Resources.Shared.Common.LocationBar.ChangeLocation);
Output.Write(" &#8250;</span>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Common._LocationBar
