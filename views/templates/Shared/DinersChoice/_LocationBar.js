if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.DinersChoice) window.Spark.Shared.DinersChoice = {};
window.Spark.Shared.DinersChoice._LocationBar = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var locationBar = viewData["locationBar"];
function RenderViewLevel0() {
Output.Write("\n\n<i class=\"icon icon-dinerschoice-searchbox\"></i>\n<h1 class=\"search-location\">");
if (string.IsNullOrEmpty(locationBar.Display.PageMetaData.Title)) {
Output.Write("\n    ");
Output.Write(Resources.Shared.DinersChoice.Strings.TitleFallback);
}
else {
Output.Write("\n    ");
Output.Write(string.Format(Resources.Shared.DinersChoice.LocationBar.TitleFormat, locationBar.Display.PageMetaData.Title, Resources.Strings.RestaurantsString, locationBar.Display.Location.Name));
}
Output.Write("\n</h1>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.DinersChoice._LocationBar
