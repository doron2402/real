if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Search) window.Spark.Shared.Search = {};
if (!window.Spark.Shared.Search.Results) window.Spark.Shared.Search.Results = {};
window.Spark.Shared.Search.Results._ResultsTable = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var resultsTable = viewData["resultsTable"];
var resultsTitle = viewData["resultsTitle"];
var result = viewData["result"];
var request = viewData["request"];
var firstRow = viewData["firstRow"];
var lastRow = viewData["lastRow"];
var onlyPopTimes = viewData["onlyPopTimes"];
var availabilityLink = viewData["availabilityLink"];
var reviews = viewData["reviews"];
var size = viewData["size"];
var timeslots = viewData["timeslots"];
var request = viewData["request"];
var notAvailableButtonClass = viewData["notAvailableButtonClass"];
var displayOnlyPopTimes = viewData["displayOnlyPopTimes"];
function RenderViewLevel0() {
Output.Write("\n\n<div class=\"results-list-header\">\n    <h2 class=\"title\">");
{
var resultsTitle = resultsTable;
Output.Write("\n");
if (resultsTitle.Request.ParsedTests.Contains("sortbyinresultstitle") || resultsTitle.Request.ParsedTests.Contains("showpopularitysortoption")) {
{
var sortName = resultsTitle.Request.SortString;
Output.Write("\n    <div class=\"sort-buttons\">\n        <span class=\"label\">");
Output.Write(Resources.Shared.Common.Results.Header_Sorted_by);
Output.Write("</span>");
if (resultsTitle.Request.IsGeoDistanceRequest == true) {
Output.Write("\n            <span class=\"header-cell-link sort-link");
if (sortName == "Distance") {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"Distance\">");
Output.Write(Resources.Shared.Common.Results.Header_Distance);
Output.Write("</span>");
}
if (resultsTitle.Request.ParsedTests.Contains("showpopularitysortoption")) {
Output.Write("\n            <span class=\"header-cell-link sort-link");
if (sortName == "Popularity") {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"Popularity\">");
Output.Write(Resources.Shared.Common.Results.Header_Popularity);
Output.Write("</span>");
}
Output.Write("\n        <span class=\"header-cell-link sort-link");
if (sortName == "Name") {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"Name\">");
Output.Write(Resources.Shared.Common.Results.Header_Name_Short);
Output.Write("</span>\n        <span class=\"header-cell-link sort-link");
if (sortName == "Neighborhood") {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"Neighborhood\">");
Output.Write(Resources.Shared.Common.Results.Header_Area);
Output.Write("</span>\n        <span class=\"header-cell-link sort-link");
if (sortName == "Rating" || (!resultsTitle.Request.ParsedTests.Contains("showpopularitysortoption") && sortName == "BayesianAverage")) {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"Rating\">");
Output.Write(Resources.Shared.Common.Results.Header_Ratings);
Output.Write("</span>\n        <span class=\"header-cell-link sort-link");
if (sortName == "PriceBand") {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"PriceBand\">");
Output.Write(Resources.Shared.Common.Results.Header_Price);
Output.Write("</span>\n    </div>");
}
}
Output.Write("\n");
if (resultsTitle.Results.Total == 1) {
{
var searchTitle = resultsTitle.Request.OnlyPopTimes == true ? Resources.Shared.Common.Results.PopTitle : resultsTitle.Request.OnlyUnavailable == true ? Resources.Shared.Common.Results.Title_NoAvailability : Resources.Shared.Common.Results.Title_Availability;
Output.Write("\n        ");
Output.Write(string.Format(searchTitle, resultsTitle.Results.TotalAvailable));
}
}
else {
{
var searchTitle = resultsTitle.Request.OnlyPopTimes == true ? Resources.Shared.Common.Results.PopTitle_Plural : resultsTitle.Request.OnlyUnavailable == true ? Resources.Shared.Common.Results.Title_NoAvailability_Plural : Resources.Shared.Common.Results.Title_Availability_Plural;
Output.Write("\n        ");
Output.Write(string.Format(searchTitle, resultsTitle.Results.TotalAvailable));
}
}
}
Output.Write("\n    </h2>\n");
{
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
Output.Write("\n</div>\n\n<table id=\"search_results_table\" class=\"table\">\n");
if (!resultsTable.Request.ParsedTests.Contains("sortbyinresultstitle") && !resultsTable.Request.ParsedTests.Contains("showpopularitysortoption")) {
{
{
var sortName = resultsTable.Request.SortString;
Output.Write("\n\n<thead>\n    <tr class=\"table-header\">\n        <td class=\"cell first-cell header-cell\">\n            <a href=\"#\" class=\"header-cell-link sort-link");
if (sortName == "Name") {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"Name\">");
Output.Write(Resources.Shared.Common.Results.Header_Name);
Output.Write("</a> /\n            <a href=\"#\" class=\"header-cell-link sort-link");
if (sortName == "Neighborhood") {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"Neighborhood\">");
Output.Write(Resources.Shared.Common.Results.Header_Area);
Output.Write("</a>\n        </td>\n        <td class=\"cell header-cell rating-header\">\n            <a href=\"#\" class=\"header-cell-link sort-link");
if (sortName == "Rating" || sortName == "BayesianAverage") {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"Rating\">");
Output.Write(Resources.Shared.Common.Results.Header_Ratings);
Output.Write("</a>\n        </td>\n        <td class=\"cell header-cell price-header\">\n            <a href=\"#\" class=\"header-cell-link sort-link");
if (sortName == "PriceBand") {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"PriceBand\">");
Output.Write(Resources.Shared.Common.Results.Header_Price);
Output.Write("</a>\n        </td>\n        <td class=\"cell last-cell header-cell availability-header\">");
Output.Write(Resources.Shared.Common.Results.Header_Availability);
Output.Write("</td>\n    </tr>\n</thead>\n");
}
}
}
else {
Output.Write("\n        <thead>\n            <tr class=\"row-fill\"><td colspan=\"4\"></td></tr>\n        </thead>");
}
Output.Write("\n\n    <tbody>");
var restaurantIndex=0;for (var __iter__restaurant in resultsTable.Results.Restaurants) {var restaurant=resultsTable.Results.Restaurants[__iter__restaurant];if(typeof(restaurant)!='function') {
{
var result = restaurant;
var request = resultsTable.Request;
var firstRow = restaurantIndex == 0;
var lastRow = restaurantIndex == resultsTable.Results.Restaurants.Count()-1;
var index = restaurantIndex;
var onlyPopTimes = resultsTable.Request.OnlyPopTimes == true;
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
Output.Write("\" data-rid=\"");
Output.Write(result.Id);
Output.Write("\">\n  <td class=\"cell first-cell\">");
if (request.ParsedTests.Contains("showrestaurantimages")) {
Output.Write("\n      <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("\" class=\"rest-image\">\n        <img src=\"/s/content/images/1x1.gif\" data-src=\"/img/restimages/x4/");
Output.Write(result.Id);
Output.Write(".jpg\" width=\"52\" height=\"56\" class=\"lazy\">\n      </a>");
}
Output.Write("\n    <div class=\"rest-content\">\n      <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("\" class=\"rest-name\">");
Output.Write(result.Name);
Output.Write("</a>\n      <div>");
Output.Write(distance);
Output.Write(result.Location);
Output.Write(" | ");
Output.Write(result.Cuisine);
Output.Write("</div>");
if (result.Offers.Count() > 0) {
Output.Write("\n        <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("\" class=\"offer\" data-id=\"");
Output.Write(result.Offers[0].Id);
Output.Write("\">");
Output.Write(result.Offers[0].Name);
Output.Write("</a>");
if (result.Offers.Count() > 1) {
Output.Write("\n          <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("\" class=\"offer\" data-id=\"see-more\">");
Output.Write(Resources.Shared.Common.Results.SeeAllOffers);
Output.Write("</a>");
}
}
Output.Write("\n    </div>\n  </td>\n  <td class=\"cell ratings-col\">");
{
var reviews = result;
var size = "small";
Output.Write("\n");
if (reviews.Reviews.Total > 0) {
Output.Write("\n");
var reviewTotal = reviews.Reviews.Rating;
var starSize = string.Format("star-rating-{0}", size);
var starTitle = string.Format(reviewTotal == 1 ? Resources.Strings.StarRatingText : Resources.Strings.StarRatingText_Plural, reviewTotal);
Output.Write("\n\n  <a href=\"");
Output.Write(reviews.ProfileUri);
Output.Write("&tab=2\" class=\"star-rating-container ");
Output.Write(starSize);
Output.Write("\" title=\"");
Output.Write(starTitle);
Output.Write("\">\n    <span class=\"stars stars-blank\">\n      <span class=\"stars stars-filled s");
Output.Write(reviews.Reviews.RatingClass);
Output.Write("\"></span>\n    </span>\n    <span class=\"reviews\">");
if (reviews.Reviews.Total == 1) {
Output.Write("\n        ");
Output.Write(string.Format(Resources.Shared.Common.Results.Reviews, reviews.Reviews.Total));
}
else {
Output.Write("\n        ");
Output.Write(string.Format(Resources.Shared.Common.Results.Reviews_Plural, reviews.Reviews.Total));
}
Output.Write("\n    </span>\n  </a>");
}
else {
Output.Write("\n  <span class=\"star-rating-container\">");
Output.Write(Resources.Shared.Common.Results.ReviewsComingSoon);
Output.Write("</span>");
}
}
Output.Write("\n  </td>\n  <td class=\"cell price-col\">\n    <span class=\"price\">");
Output.Write(result.PriceBand.ShortName);
Output.Write("</span>\n  </td>\n  <td class=\"cell last-cell availability-col\">");
{
var timeslots = result;
var notAvailableButtonClass = "btn-thin";
var displayOnlyPopTimes = onlyPopTimes;
Output.Write("\n");
if (request.OnlyUnavailable == true) {
Output.Write("\n  <p class=\"not-available-message\">");
Output.Write(timeslots.UnAvailMsg);
Output.Write("</p>");
if (!string.IsNullOrEmpty(timeslots.NextAvailUri)) {
Output.Write("\n  <a href=\"/nextavailabletable.aspx");
Output.Write(timeslots.NextAvailUri);
Output.Write("\" class=\"btn btn-search ");
Output.Write(notAvailableButtonClass);
Output.Write("\">");
Output.Write(Resources.Shared.Common.Results.NextAvailableButton);
Output.Write("</a>");
}
}
Output.Write("\n");
if (request.IsAvailabilityRequest == true && request.OnlyUnavailable != true) {
Output.Write("\n  <div class=\"timeslots cf\">");
for (var __iter__timeSlot in timeslots.TimeSlots) {var timeSlot=timeslots.TimeSlots[__iter__timeSlot];if(typeof(timeSlot)!='function') {
Output.Write("\n    <li class=\"timeslot");
if (timeSlot.IsExact) {
Output.Write(" exact");
}
Output.Write("\" data-offers=\"");
Output.Write(timeSlot.OfferIds != null ? string.Join(",", timeSlot.OfferIds) : "");
Output.Write("\" data-rid=\"");
Output.Write(timeslots.Id);
Output.Write("\">");
var timeslotDisabled = !timeSlot.IsAvail || (displayOnlyPopTimes && !timeSlot.HasPop);
var isExact = timeSlot.IsExact;
var timeFormat = isExact ? Resources.Strings.TimeFormat : Resources.Strings.TimeFormat.Replace("tt", "");
var cultureUrlSegment = request.CultureInUrlRoute == null ? "" : "/" + request.CultureInUrlRoute;
Output.Write("\n      ");
if (timeslotDisabled) {
Output.Write("\n      <span class=\"time disabled");
if (isExact) {
Output.Write(" exact");
}
Output.Write("\"></span>");
}
if (!timeslotDisabled) {
Output.Write("\n      <a href=\"");
Output.Write(string.Format("{6}/httphandlers/ValidateReservationRequest.ashx?rid={0}&d={2}&p={1}&pt={5}&i=1&ss=0&sd={2}&pofids={3}&checksum={4}", timeslots.Id, request.Covers, timeSlot.LinkString, string.Join(",", timeSlot.OfferIds), timeSlot.CheckSum, timeSlot.HasPop ? "1000" : "100", cultureUrlSegment));
Output.Write("\" class=\"timeslot-link\">\n\n        <span class=\"time\">");
{
var time = timeSlot.TimeString;
Output.Write("\n          ");
Output.Write(time);
if (timeSlot.OfferIds.Count() > 0) {
Output.Write("\n          <span class=\"offer\"></span>");
}
}
Output.Write("\n      </span>\n");
if (timeSlot.HasPop) {
Output.Write("\n      <span class=\"pts\">");
Output.Write(Resources.Shared.Common.Results.Timeslot1000Points);
Output.Write("</span>");
}
Output.Write("\n      </a>");
}
Output.Write("\n    </li>");
}}
Output.Write("\n  </div>");
}
}
Output.Write("\n  </td>\n</tr>");
}
++restaurantIndex;}}
Output.Write("\n    </tbody>\n</table>\n");
{
var model = resultsTable;
{
var previousLink = (model.Display.PaginationLinks ==null) ? "#" : (!string.IsNullOrEmpty(model.Display.PaginationLinks.Previous)) ? model.Display.PaginationLinks.Previous : "";
var nextLink = (model.Display.PaginationLinks ==null) ? "#" : (!string.IsNullOrEmpty(model.Display.PaginationLinks.Next)) ? model.Display.PaginationLinks.Next : "";
Output.Write("\n");
if (model.Request.Size != null) {
Output.Write("\n        <div class=\"pagination-container\">\n            <ul id=\"results-pagination\" class=\"pagination\">\n                <li class=\"pagination-item pagination-arrow\">");
if (!string.IsNullOrEmpty(previousLink)) {
Output.Write("\n                        <a href=\"");
Output.Write(previousLink);
Output.Write("\" class=\"pagination-link pagination-prev\">\n                            &lt; ");
Output.Write(Resources.Shared.Common.Strings.Label_Previous);
Output.Write("\n                        </a>");
}
else {
Output.Write("\n                        <span class=\"pagination-link pagination-prev pagination-unavailable\">\n                            &lt; ");
Output.Write(Resources.Shared.Common.Strings.Label_Previous);
Output.Write("\n                        </span>");
}
Output.Write("\n                </li>\n                <li class=\"pagination-item pagination-arrow\">");
if (!string.IsNullOrEmpty(nextLink)) {
Output.Write("\n                        <a href=\"");
Output.Write(nextLink);
Output.Write("\" class=\"pagination-link pagination-next\">\n                            ");
Output.Write(Resources.Shared.Common.Strings.Label_Next);
Output.Write(" &gt;\n                        </a>");
}
else {
Output.Write("\n                        <span class=\"pagination-link pagination-next pagination-unavailable\">\n                            ");
Output.Write(Resources.Shared.Common.Strings.Label_Next);
Output.Write(" &gt;\n                        </span>");
}
Output.Write("\n\n                </li>\n            </ul>\n            <div class=\"clear\"></div>\n        </div>");
}
}
}
Output.Write("\n");
{
var availabilityLink = resultsTable;
Output.Write("\n");
if (availabilityLink.Request.IsAvailabilityRequest && availabilityLink.Results.TotalUnavailable > 0) {
Output.Write("\n");
if (availabilityLink.Request.OnlyUnavailable == true) {
var linkText = string.Format(availabilityLink.Results.TotalAvailable == 1 ? Resources.Shared.Common.Results.WithAvailabilityLink : Resources.Shared.Common.Results.WithAvailabilityLink_Plural, availabilityLink.Results.TotalAvailable);
Output.Write("\n\n        <a href=\"#\" id=\"availability_link\" class=\"availability-link\">");
Output.Write(linkText);
Output.Write("</a>");
}
else {
var linkText = string.Format(availabilityLink.Results.TotalUnavailable == 1 ? Resources.Shared.Common.Results.WithNoAvailabilityLink : Resources.Shared.Common.Results.WithNoAvailabilityLink_Plural, availabilityLink.Results.TotalUnavailable);
Output.Write("\n\n        <a href=\"#\" id=\"availability_link\" class=\"availability-link with-availability\">");
Output.Write(linkText);
Output.Write("</a>");
}
Output.Write("\n");
}
}
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Search.Results._ResultsTable
