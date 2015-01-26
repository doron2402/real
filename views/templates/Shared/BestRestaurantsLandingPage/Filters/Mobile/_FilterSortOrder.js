if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage) window.Spark.Shared.BestRestaurantsLandingPage = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage.Filters) window.Spark.Shared.BestRestaurantsLandingPage.Filters = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage.Filters.Mobile) window.Spark.Shared.BestRestaurantsLandingPage.Filters.Mobile = {};
window.Spark.Shared.BestRestaurantsLandingPage.Filters.Mobile._FilterSortOrder = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var filters = viewData["filters"];
var request = viewData["request"];
var title = viewData["title"];
var filterGroupId = viewData["filterGroupId"];
function RenderViewLevel0() {
Output.Write("\n<div id=\"");
Output.Write(filterGroupId);
Output.Write("\">\n    <div class=\"row\">\n        <div class=\"column medium-12 padding-top padding-bottom\">\n            <h4 class=\"left remove-bottom-margin\">");
Output.Write(title);
Output.Write("</h4>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"column medium-12\">");
{
var selectedPopularity = request.SortString == "Popularity";
var selectedName = request.SortString == "Name";
var selectedRating = request.SortString == "Rating";
Output.Write("\n                <ul id=\"sort-filters-mobile\" class=\"button-group button-group-justified\">\n                    <li id=\"SortOrder_Rating\" class=\"mobile-sort-item fixed-width\">\n                        <a href=\"#\" class=\"button toggle-button");
if (selectedRating) {
Output.Write(" highlight");
}
Output.Write("\" data-value=\"Rating\">");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Filters.Label_Sort_Rating_Mobile);
Output.Write("</a>\n                    </li>\n                    <li id=\"SortOrder_Popular\" class=\"mobile-sort-item fixed-width\">\n                        <a href=\"#\" class=\"button toggle-button");
if (selectedPopularity) {
Output.Write(" highlight");
}
Output.Write("\" data-value=\"Popularity\">");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Filters.Label_Sort_Popularity_Mobile);
Output.Write("</a>\n                    </li>\n                    <li id=\"SortOrder_Name\" class=\"mobile-sort-item fixed-width\">\n                        <a href=\"#\" class=\"button toggle-button");
if (selectedName) {
Output.Write(" highlight");
}
Output.Write("\" data-value=\"Name\">");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Filters.Label_Sort_Name);
Output.Write("</a>\n                    </li>\n                </ul>");
}
Output.Write("\n        </div>\n    </div>\n</div>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.BestRestaurantsLandingPage.Filters.Mobile._FilterSortOrder
