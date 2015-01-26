if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Search) window.Spark.Shared.Search = {};
if (!window.Spark.Shared.Search.Map) window.Spark.Shared.Search.Map = {};
window.Spark.Shared.Search.Map._NoResultsMap = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var noResultsMap = viewData["noResultsMap"];
var clearLastFilter = viewData["clearLastFilter"];
function RenderViewLevel0() {
Output.Write("\n\n<div class=\"map-no-results\">\n\n    <h2>We did not find a match for your search</h2>\n\n    <div class=\"block\">\n        <p class=\"no-result-message\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_NoMatch_Message);
Output.Write("</p>\n");
if (clearLastFilter == true) {
Output.Write("\n            <button id=\"clear_last_filter\" class=\"btn btn-thin btn-search\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_UndoLastFilterButton);
Output.Write("</button>");
}
Output.Write("\n");
if (clearLastFilter == true && noResultsMap.Display.Metro.Id != null) {
Output.Write("\n            <span class=\"or\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_Or);
Output.Write("</span>");
}
Output.Write("\n");
if (noResultsMap.Display.Metro.Id != null) {
Output.Write("\n            <button id=\"start_over\" class=\"btn btn-thin btn-search\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_StartOverButton);
Output.Write("</button>");
}
Output.Write("\n    </div>\n\n    <h2>Other suggestions</h2>\n\n    <div class=\"block\">");
if (noResultsMap.Request.IsGeoDistanceRequest != true) {
Output.Write("\n        <p class=\"no-result-message\"><a href=\"/rest_list.aspx?m=");
Output.Write(noResultsMap.Request.MetroId);
Output.Write("\" class=\"link\">");
Output.Write(string.Format(Resources.Shared.Search.Strings.NoSearchResults_MetroListLink, noResultsMap.Display.Metro.Name));
Output.Write("</a></p>");
}
Output.Write("\n        <p class=\"no-result-message\"><a href=\"/\" class=\"link\">");
Output.Write(string.Format(Resources.Shared.Search.Strings.NoSearchResults_MetroLink, noResultsMap.Display.Metro.Name));
Output.Write("</a></p>\n        <p class=\"no-result-message italic\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_OtherSuggestionsMessage);
Output.Write("</p>\n    </div>\n\n</div>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Search.Map._NoResultsMap
