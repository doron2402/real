if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Search) window.Spark.Shared.Search = {};
if (!window.Spark.Shared.Search.Map) window.Spark.Shared.Search.Map = {};
window.Spark.Shared.Search.Map._Navigation = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
function RenderViewLevel0() {
Output.Write("<div class=\"map-controls\">\n    <a href=\"#\" class=\"prev\">&#60;&#60; ");
Output.Write(Resources.Shared.Search.Map.Navigation_Previous);
Output.Write("</a>\n    <a href=\"#\" class=\"next\">");
Output.Write(Resources.Shared.Search.Map.Navigation_Next);
Output.Write(" &#62;&#62;</a>\n</div>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Search.Map._Navigation
