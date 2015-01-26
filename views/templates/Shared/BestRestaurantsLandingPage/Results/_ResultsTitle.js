if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage) window.Spark.Shared.BestRestaurantsLandingPage = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage.Results) window.Spark.Shared.BestRestaurantsLandingPage.Results = {};
window.Spark.Shared.BestRestaurantsLandingPage.Results._ResultsTitle = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var resultsTitle = viewData["resultsTitle"];
function RenderViewLevel0() {
Output.Write("\n");
if (resultsTitle.Results.Restaurants.Count() == 1) {
if (resultsTitle.Request.OnlyUnavailable == true) {
{
var searchTitle = Resources.Shared.Common.Results.Title_NoAvailability;
Output.Write("\n            ");
Output.Write(string.Format(searchTitle, resultsTitle.Results.TotalUnavailable));
}
}
else {
{
var searchTitle = Resources.Shared.Common.Results.Title_ResultsTotal;
Output.Write("\n            ");
Output.Write(string.Format(searchTitle, resultsTitle.Results.TotalAvailable));
}
}
}
else {
if (resultsTitle.Request.OnlyUnavailable == true) {
{
var searchTitle = Resources.Shared.Common.Results.Title_NoAvailability_Plural;
Output.Write("\n            ");
Output.Write(string.Format(searchTitle, resultsTitle.Results.TotalUnavailable));
}
}
else {
{
var searchTitle = Resources.Shared.Common.Results.Title_ResultsTotal_Plural;
Output.Write("\n            ");
Output.Write(string.Format(searchTitle, resultsTitle.Results.TotalAvailable));
}
}
}
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.BestRestaurantsLandingPage.Results._ResultsTitle
