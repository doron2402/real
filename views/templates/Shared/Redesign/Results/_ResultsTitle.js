if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Results) window.Spark.Shared.Redesign.Results = {};
window.Spark.Shared.Redesign.Results._ResultsTitle = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var resultsTitle = viewData["resultsTitle"];
function RenderViewLevel0() {
Output.Write("\n");
if (!string.IsNullOrEmpty(resultsTitle.Request.Title)) {
Output.Write("\n<h2>");
Output.Write(resultsTitle.Request.Title);
Output.Write("</h2>");
}
Output.Write("\n\n<h3 id=\"results-title\" class=\"results-title color-dark\">");
if (resultsTitle.IsPromo) {
if (resultsTitle.Results.TotalAvailable == 1) {
{
var searchTitle = Resources.Shared.Redesign.Results.Title_Promos;
Output.Write("\n        ");
Output.Write(string.Format(searchTitle, resultsTitle.Results.TotalAvailable));
Output.Write("\n        <span class=\"result-promo-title\">");
Output.Write(resultsTitle.Display.ResultsTitle);
Output.Write("</span>");
}
}
else {
{
var searchTitle = Resources.Shared.Redesign.Results.Title_Promos_Plural;
Output.Write("\n        ");
Output.Write(string.Format(searchTitle, resultsTitle.Results.TotalAvailable));
Output.Write("\n        <span class=\"result-promo-title\">");
Output.Write(resultsTitle.Display.ResultsTitle);
Output.Write("</span>");
}
}
}
else {
Output.Write("\n      ");
Output.Write(resultsTitle.Display.ResultsTitle);
}
Output.Write("\n</h3>\n");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Results._ResultsTitle
