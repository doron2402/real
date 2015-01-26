if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Results) window.Spark.Shared.Redesign.Results = {};
window.Spark.Shared.Redesign.Results._NoResults = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var noResults = viewData["noResults"];
var clearLastFilter = viewData["clearLastFilter"];
function RenderViewLevel0() {
Output.Write("\n");
var hasMetro = noResults.Display.Metro != null;
Output.Write("\n\n<div class=\"content-section-header no-results\">");
if (noResults.Display.ShowDescriptionForZeroResults && !string.IsNullOrEmpty(noResults.Display.PageMetaData.Description)) {
Output.Write("\n       <p id=\"page-description\" class=\"page-description\">\n         ");
Output.Write(noResults.Display.PageMetaData.Description);
Output.Write("\n       </p>");
}
Output.Write("\n  \n\n    <h3 class=\"color-dark\">");
Output.Write(Resources.Shared.Redesign.NoResults.Heading);
Output.Write("</h3>\n\n    <div class=\"block\">\n        <p class=\"no-result-message\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_NoMatch_Message);
Output.Write("</p>\n");
if (clearLastFilter == true) {
Output.Write("\n            <button id=\"clear_last_filter\" class=\"button\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_UndoLastFilterButton);
Output.Write("</button>");
}
Output.Write("\n");
if (clearLastFilter == true && hasMetro) {
Output.Write("\n            <span class=\"or\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_Or);
Output.Write("</span>");
}
Output.Write("\n        ");
if (hasMetro) {
Output.Write("\n            <button id=\"start_over\" class=\"button\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_StartOverButton);
Output.Write("</button>");
}
Output.Write("\n    </div>\n\n    <h3 class=\"color-dark\">");
Output.Write(Resources.Shared.Redesign.NoResults.OtherSuggestionsHeading);
Output.Write("</h3>\n\n    <div class=\"block\">");
if (hasMetro) {
Output.Write("\n        <div>\n            <a href=\"/rest_list.aspx?m=");
Output.Write(noResults.Request.MetroId);
Output.Write("\" class=\"link\">");
Output.Write(string.Format(Resources.Shared.Search.Strings.NoSearchResults_MetroListLink, noResults.Display.Metro.Name));
Output.Write("</a>\n        </div>");
}
if (hasMetro) {
Output.Write("\n            <div>\n                <a href=\"/\" class=\"link\">");
Output.Write(string.Format(Resources.Shared.Search.Strings.NoSearchResults_MetroLink, noResults.Display.Metro.Name));
Output.Write("</a>\n            </div>");
}
Output.Write("\n        <p class=\"no-result-message italic\">");
Output.Write(Resources.Shared.Redesign.NoResults.OtherSuggestionsMessage);
Output.Write("</p>\n    </div>\n\n</div>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Results._NoResults
