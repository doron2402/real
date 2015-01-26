if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.DinersChoice) window.Spark.Shared.DinersChoice = {};
if (!window.Spark.Shared.DinersChoice.Results) window.Spark.Shared.DinersChoice.Results = {};
window.Spark.Shared.DinersChoice.Results._NoAvailabilityResult = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var result = viewData["result"];
var request = viewData["request"];
var firstRow = viewData["firstRow"];
var lastRow = viewData["lastRow"];
var index = viewData["index"];
function RenderViewLevel0() {
Output.Write("\n");
var distance = request.ParsedTests.Contains("showdistanceinresults") && request.SortString == "Distance" && request.IsGeoDistanceRequest == true ? string.Format("{0} {1} - ", result.Distance, Resources.Strings.DistanceUnit_Small) : "";
Output.Write("\n\n<tr class=\"result");
if (firstRow) {
Output.Write(" first-row");
}
if (lastRow) {
Output.Write(" last-row");
}
Output.Write("\" data-id=\"");
Output.Write(index);
Output.Write("\">\n  <td class=\"cell first-cell\">\n    <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("\" class=\"rest-name\">");
Output.Write(result.Name);
Output.Write("</a>\n    <div>");
Output.Write(distance);
Output.Write(result.Location);
Output.Write(" | ");
Output.Write(result.Cuisine);
Output.Write("</div>");
if (result.Offers.Count() > 0) {
Output.Write("\n      <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("\" class=\"offer\" data-id=\"");
Output.Write(result.Offers[0].Id);
Output.Write("\">");
Output.Write(result.Offers[0].Name);
Output.Write("</a>");
if (result.Offers.Count() > 1) {
Output.Write("\n        <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("\" class=\"offer\" data-id=\"see-more\">");
Output.Write(Resources.Shared.Common.Filters.SeeAllOffers);
Output.Write("</a>");
}
}
Output.Write("\n  </td>\n  <td class=\"cell last-cell price-col\">\n    <span class=\"price\">");
Output.Write(result.PriceBand.ShortName);
Output.Write("</span>\n  </td>\n</tr>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.DinersChoice.Results._NoAvailabilityResult
