if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Search) window.Spark.Shared.Search = {};
if (!window.Spark.Shared.Search.Map) window.Spark.Shared.Search.Map = {};
window.Spark.Shared.Search.Map._PinHover = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var pinHover = viewData["pinHover"];
var isAvailabilityRequest = viewData["isAvailabilityRequest"];
function RenderViewLevel0() {
Output.Write("\n\n<div class=\"map-pin-hover\">\n    <strong>");
Output.Write(pinHover.Name);
Output.Write("</strong>\n    <div>");
Output.Write(pinHover.Cuisine);
Output.Write(", ");
Output.Write(pinHover.PriceBand.ShortName);
Output.Write("</div>\n");
if (isAvailabilityRequest == true) {
Output.Write("\n        <div>");
Output.Write(Resources.Shared.Search.Map.ClickToSeeAvailableTimes);
Output.Write("</div>");
}
Output.Write("\n</div>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Search.Map._PinHover
