if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Results) window.Spark.Shared.Redesign.Results = {};
window.Spark.Shared.Redesign.Results._Reviews = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var reviews = viewData["reviews"];
function RenderViewLevel0() {
Output.Write("\n");
{
var showRatings = reviews.Reviews != null && reviews.Reviews.Total > 0;
Output.Write("\n\t<div class=\"rest-row-review\">");
if (showRatings) {
var reviewRating = reviews.Reviews.Rating;
var starTitle = string.Format(reviewRating == 1 ? Resources.Strings.StarRatingText : Resources.Strings.StarRatingText_Plural, reviewRating);
Output.Write("\n\n\t\t\t<div class=\"star-cont\">\n\t\t\t\t<div class=\"stars\"></div>\n\t\t\t\t<div class=\"stars cnt-");
Output.Write(Html.GenerateRatingsStarCount(reviewRating));
Output.Write("\"></div>\n\t\t\t</div>\n\t\t\t<span class=\"star-rating-text\">(");
Output.Write(reviews.Reviews.Total);
Output.Write(")</span>");
}
else {
Output.Write("\n\t\t\t");
Output.Write(Resources.Shared.Redesign.Results.ReviewsComingSoon);
}
Output.Write("\n\t</div>");
}
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Results._Reviews
