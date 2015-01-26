if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage) window.Spark.Shared.BestRestaurantsLandingPage = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage.Results) window.Spark.Shared.BestRestaurantsLandingPage.Results = {};
window.Spark.Shared.BestRestaurantsLandingPage.Results._Reviews = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var reviews = viewData["reviews"];
var size = viewData["size"];
function RenderViewLevel0() {
Output.Write("\n");
{
var showRatings = reviews.Reviews != null && reviews.Reviews.Total > 0;
if (showRatings) {
var reviewTotal = reviews.Reviews.Rating;
var starTitle = string.Format(reviewTotal == 1 ? Resources.Strings.StarRatingText : Resources.Strings.StarRatingText_Plural, reviewTotal);
Output.Write("\n\n        <ul class=\"star-rating\" title=\"");
Output.Write(starTitle);
Output.Write("\">\n            <li class=\"star ");
Output.Write(Html.GenerateRatingsStarClasses(1, reviewTotal));
Output.Write("\"></li>\n            <li class=\"star ");
Output.Write(Html.GenerateRatingsStarClasses(2, reviewTotal));
Output.Write("\"></li>\n            <li class=\"star ");
Output.Write(Html.GenerateRatingsStarClasses(3, reviewTotal));
Output.Write("\"></li>\n            <li class=\"star ");
Output.Write(Html.GenerateRatingsStarClasses(4, reviewTotal));
Output.Write("\"></li>\n            <li class=\"star ");
Output.Write(Html.GenerateRatingsStarClasses(5, reviewTotal));
Output.Write("\"></li>\n            <li class=\"star-text\">");
Output.Write(Html.GetReviewsCountText(reviews.Reviews.Total, Resources.Shared.Common.Results.Reviews, Resources.Shared.Common.Results.Reviews_Plural));
Output.Write("</li>\n        </ul>");
}
}
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.BestRestaurantsLandingPage.Results._Reviews
