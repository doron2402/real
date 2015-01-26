if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Results) window.Spark.Shared.Redesign.Results = {};
window.Spark.Shared.Redesign.Results._TopReview = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var showMap = viewData["showMap"];
var showReview = viewData["showReview"];
var showReviewsCommingSoon = viewData["showReviewsCommingSoon"];
function RenderViewLevel0() {
Output.Write("\n");
if (showMap != true && showReview && !showReviewsCommingSoon) {
Output.Write("\n<div class=\"rest-row-topreview\">\n  <div class=\"topreview-container\">\n    <p class=\"topreview-text topreview-truncated\"></p>\n    <span class=\"topreview-show-more secondary\">");
Output.Write(Resources.Shared.Redesign.Strings.More);
Output.Write("</span>\n    <span class=\"topreview-show-less secondary\">");
Output.Write(Resources.Shared.Redesign.Strings.Less);
Output.Write("</span>\n  </div>\n  <div class=\"rest-row-meta\">\n    <span class=\"topreviewer-name\"></span> &ndash; <span class=\"topreview-date\"></span>\n  </div>\n</div>");
}
Output.Write("\n");
if (showReviewsCommingSoon) {
Output.Write("\n<div class=\"rest-row-topreview\">\n  <span class=\"topreview-text\">");
Output.Write(Resources.Shared.Common.Results.ReviewsComingSoon);
Output.Write("</span>\n</div>");
}
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Results._TopReview
