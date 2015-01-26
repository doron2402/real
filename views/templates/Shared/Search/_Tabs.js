if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Search) window.Spark.Shared.Search = {};
window.Spark.Shared.Search._Tabs = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var tabs = viewData["tabs"];
function RenderViewLevel0() {
Output.Write("\n\n<ul class=\"search-tabs\">\n\t<li class=\"search-tab");
if (tabs.Request.ShowMap != true) {
Output.Write(" selected");
}
Output.Write("\">\n\t  <span id=\"list_tab\" class=\"tab\">\n\t\t<i class=\"icon icon-menu\"></i>");
Output.Write(Resources.Shared.Search.Tabs.List);
Output.Write("\n\t  </span>\n\t</li>\n\t<li class=\"search-tab");
if (tabs.Request.ShowMap == true) {
Output.Write(" selected");
}
Output.Write("\">\n\t\t<span id=\"map_tab\" class=\"tab\">\n\t\t\t<i class=\"icon icon-pin\"></i>");
Output.Write(Resources.Shared.Search.Tabs.Map);
Output.Write("\n\t\t</span>\n\t</li>\n</ul>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Search._Tabs
