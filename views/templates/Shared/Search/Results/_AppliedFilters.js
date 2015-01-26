if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Search) window.Spark.Shared.Search = {};
if (!window.Spark.Shared.Search.Results) window.Spark.Shared.Search.Results = {};
window.Spark.Shared.Search.Results._AppliedFilters = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
function RenderViewLevel0() {
{
var filtersAreApplied = resultsTable.Request.RegionIds != null || resultsTable.Request.NeighborhoodIds != null || resultsTable.Request.IsGeoDistanceRequest || resultsTable.Request.CuisineIds != null || resultsTable.Request.PriceBandIds != null || resultsTable.Request.OfferTypeIds != null || resultsTable.Request.OnlyOffers == true || resultsTable.Request.OnlyExactDateTime == true || resultsTable.Request.OnlyPopTimes == true;
Output.Write("\n");
if (filtersAreApplied == true) {
Output.Write("\n    <div class=\"applied-filters\">\n\n        <span>");
Output.Write(Resources.Shared.Search.Results.FilteredBy);
Output.Write("</span>\n");
{
var isLocationSearch = resultsTable.Request.RegionIds != null || resultsTable.Request.NeighborhoodIds != null || resultsTable.Request.IsGeoDistanceRequest;
Output.Write("\n");
if (isLocationSearch == true) {
Output.Write("\n            <span class=\"applied-filter\">");
Output.Write(Resources.Shared.Search.Results.FilteredBy_Location);
Output.Write("<i class=\"close icon icon-close\" data-filter=\"Locations\"></i></span>");
}
if (resultsTable.Request.CuisineIds != null) {
Output.Write("\n            <span class=\"applied-filter\">");
Output.Write(Resources.Shared.Search.Results.FilteredBy_Cuisine);
Output.Write("<i class=\"close icon icon-close\" data-filter=\"CuisineIds\"></i></span>");
}
if (resultsTable.Request.PriceBandIds != null) {
Output.Write("\n            <span class=\"applied-filter\">");
Output.Write(Resources.Shared.Search.Results.FilteredBy_Price);
Output.Write("<i class=\"close icon icon-close\" data-filter=\"PriceBandIds\"></i></span>");
}
if (resultsTable.Request.OfferTypeIds != null || resultsTable.Request.OnlyOffers == true) {
Output.Write("\n            <span class=\"applied-filter\">");
Output.Write(Resources.Shared.Search.Results.FilteredBy_OfferType);
Output.Write("<i class=\"close icon icon-close\" data-filter=\"OfferTypeIds\"></i></span>");
}
if (resultsTable.Request.OnlyExactDateTime == true) {
Output.Write("\n            <span class=\"applied-filter\">");
Output.Write(string.Format(Resources.Shared.Search.Results.FilteredBy_OnlyExactDateTime, resultsTable.Display.SelectedTime));
Output.Write("<i class=\"close icon icon-close\" data-filter=\"OnlyExactDateTime\"></i></span>");
}
if (resultsTable.Request.OnlyPopTimes == true) {
Output.Write("\n            <span class=\"applied-filter\">");
Output.Write(Resources.Shared.Search.Results.FilteredBy_PopOnly);
Output.Write("<i class=\"close icon icon-close\" data-filter=\"OnlyPopTimes\"></i></span>");
}
Output.Write("\n");
}
Output.Write("\n\n    </div>");
}
Output.Write("\n");
}
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Search.Results._AppliedFilters
