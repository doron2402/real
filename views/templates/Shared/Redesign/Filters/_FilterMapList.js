if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Filters) window.Spark.Shared.Redesign.Filters = {};
window.Spark.Shared.Redesign.Filters._FilterMapList = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var filterMapList = viewData["filterMapList"];
function RenderViewLevel0() {
Output.Write("\n");
{
var icon = filterMapList.ShowMap == true ? "icon-list" : "icon-map" ;
var text = filterMapList.ShowMap == true ? Resources.Shared.Search.Tabs.List : Resources.Shared.Search.Tabs.Map;
Output.Write("\n<span id=\"map_list_button\" class=\"filter-button-toggle with-icon ");
Output.Write(icon);
Output.Write("\">\n    ");
Output.Write(text);
Output.Write("\n</span>");
}
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Filters._FilterMapList
