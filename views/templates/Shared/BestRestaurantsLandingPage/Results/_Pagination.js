if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage) window.Spark.Shared.BestRestaurantsLandingPage = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage.Results) window.Spark.Shared.BestRestaurantsLandingPage.Results = {};
window.Spark.Shared.BestRestaurantsLandingPage.Results._Pagination = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var display = viewData["display"];
function RenderViewLevel0() {
{
var previousLink = (display.PaginationLinks ==null) ? "#" : (!string.IsNullOrEmpty(display.PaginationLinks.Previous)) ? display.PaginationLinks.Previous : "";
var nextLink = (display.PaginationLinks ==null) ? "#" : (!string.IsNullOrEmpty(display.PaginationLinks.Next)) ? display.PaginationLinks.Next : "";
Output.Write("\n    \n    <div class=\"pagination-container\">\n        <ul id=\"results-pagination\" class=\"pagination\">\n            <li class=\"pagination-li pagination-arrow pagination-arrow-prev\">");
if (!string.IsNullOrEmpty(previousLink)) {
Output.Write("\n                    <a href=\"");
Output.Write(previousLink);
Output.Write("\" class=\"pagination-link pagination-prev\">");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Strings.Label_Previous);
Output.Write("</a>");
}
else {
Output.Write("\n                    <span class=\"pagination-link pagination-prev pagination-unavailable\">");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Strings.Label_Previous);
Output.Write("</span>");
}
Output.Write("\n            </li>\n            <li class=\"pagination-li pagination-arrow pagination-arrow-next\">");
if (!string.IsNullOrEmpty(nextLink)) {
Output.Write("\n                    <a href=\"");
Output.Write(nextLink);
Output.Write("\" class=\"pagination-link pagination-next\">");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Strings.Label_Next);
Output.Write("</a>");
}
else {
Output.Write("\n                    <span class=\"pagination-link pagination-next pagination-unavailable\">");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Strings.Label_Next);
Output.Write("</span>");
}
Output.Write("\n                \n            </li>\n        </ul>\n    </div>");
}
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.BestRestaurantsLandingPage.Results._Pagination
