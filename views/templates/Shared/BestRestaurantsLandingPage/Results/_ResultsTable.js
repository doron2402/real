if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage) window.Spark.Shared.BestRestaurantsLandingPage = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage.Results) window.Spark.Shared.BestRestaurantsLandingPage.Results = {};
window.Spark.Shared.BestRestaurantsLandingPage.Results._ResultsTable = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var resultsTable = viewData["resultsTable"];
var resultsTitle = viewData["resultsTitle"];
var result = viewData["result"];
var display = viewData["display"];
var request = viewData["request"];
var firstRow = viewData["firstRow"];
var lastRow = viewData["lastRow"];
var index = viewData["index"];
var display = viewData["display"];
var availabilityLink = viewData["availabilityLink"];
var reviews = viewData["reviews"];
var size = viewData["size"];
var timeslots = viewData["timeslots"];
var request = viewData["request"];
var notAvailableButtonClass = viewData["notAvailableButtonClass"];
var displayOnlyPopTimes = viewData["displayOnlyPopTimes"];
function RenderViewLevel0() {
Output.Write("\n<div class=\"content-section-header\">\n    <h3 class=\"left\">\n        <span class=\"font-weight-medium\">");
{
var resultsTitle = resultsTable;
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
Output.Write("\n        </span>\n    </h3>\n</div>\n\n<div class=\"content-section-list\">\n    <ul class=\"infinite-results-list\">");
var restaurantIndex=0;for (var __iter__restaurant in resultsTable.Results.Restaurants) {var restaurant=resultsTable.Results.Restaurants[__iter__restaurant];if(typeof(restaurant)!='function') {
{
var result = restaurant;
var request = resultsTable.Request;
var display = resultsTable.Display;
var firstRow = restaurantIndex == 0;
var lastRow = restaurantIndex == resultsTable.Results.Restaurants.Count()-1;
var index = restaurantIndex;
Output.Write("\n");
var distance = request.ParsedTests.Contains("showdistanceinresults") && request.SortString == "Distance" && request.IsGeoDistanceRequest == true ? string.Format("{0} {1} - ", result.Distance, Resources.Strings.DistanceUnit_Small) : "";
var showDinersChoice = result.TopRankedDinersChoiceCategory != null && !string.IsNullOrEmpty(result.TopRankedDinersChoiceCategory.Name);
Output.Write("\n\n<li class=\"result\" data-rid=\"");
Output.Write(result.Id);
Output.Write("\" data-id=\"");
Output.Write(index);
Output.Write("\">\n    <div class=\"rest-row\">\n        <div class=\"row\">\n            <div class=\"column medium-6\">\n                <div class=\"rest-row-info\">\n                    <div class=\"rest-image\">\n                        <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("\">\n                            <img src=\"/s/content/images/1x1.gif\" width=\"52\" height=\"56\" class=\"lazy\" data-src=\"/img/restimages/x4/");
Output.Write(result.Id);
Output.Write(".jpg\"/>\n                        </a>\n                    </div>\n                    <div class=\"rest-name\">\n                        <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("\">");
Output.Write(result.Name);
Output.Write("</a>\n                    </div>\n");
{
var reviews = result;
var size = "small";
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
Output.Write("\n\n                    <div class=\"rest-pricing\">\n                        <span>");
Output.Write(result.PriceBand.ShortName);
Output.Write("</span>\n                    </div>\n                    <div class=\"rest-meta rest-meta-cuisine\">\n                        <span>");
Output.Write(result.Cuisine);
Output.Write("</span>\n                    </div>");
if (showDinersChoice) {
Output.Write("\n                    <div class=\"rest-meta rest-meta-diners-choice\">\n                        <span>");
Output.Write(result.TopRankedDinersChoiceCategory.Name);
Output.Write("</span>\n                    </div>");
}
Output.Write("\n                </div>\n            </div>\n");
{
var timeslots = result;
var notAvailableButtonClass = "";
var displayOnlyPopTimes = false;
Output.Write("\n");
if (request.IsAvailabilityRequest == true && request.OnlyUnavailable != true) {
Output.Write("\n    <div class=\"column medium-6\">");
if (timeslots.HasAvail) {
Output.Write("\n            <ul class=\"rest-times medium-right\">");
var timeSlotIndex=0;for (var __iter__timeSlot in timeslots.TimeSlots) {var timeSlot=timeslots.TimeSlots[__iter__timeSlot];if(typeof(timeSlot)!='function') {
{
var timeslotDisabled = !timeSlot.IsAvail || (displayOnlyPopTimes && !timeSlot.HasPop);
var isExact = timeSlotIndex == 2;
var checkSum = timeslots.Id + request.Covers + 123;
var hasPop = timeSlot.HasPop;
var hasOffers = timeSlot.OfferIds != null && timeSlot.OfferIds.Count() > 0;
var offerIds = hasOffers ? string.Join(",", timeSlot.OfferIds) : "";
var hideForMobile = timeSlot.ForMobile == false;
var cultureUrlSegment = request.CultureInUrlRoute == null ? "" : "/" + request.CultureInUrlRoute;
var slotUrl = string.Format("{6}/httphandlers/ValidateReservationRequest.ashx?rid={0}&d={2}&p={1}&pt={5}&i=1&ss=0&sd={2}&pofids={3}&checksum={4}", timeslots.Id, request.Covers, timeSlot.LinkString, string.Join(",", timeSlot.OfferIds), checkSum, timeSlot.HasPop ? "1000" : "100", cultureUrlSegment);
Output.Write("\n\n                        <li class=\"rest-time");
if (isExact) {
Output.Write(" exact");
}
if (hideForMobile) {
Output.Write(" show-for-large-up");
}
Output.Write("\" data-offers=\"");
Output.Write(offerIds);
Output.Write("\" data-rid=\"");
Output.Write(timeslots.Id);
Output.Write("\">");
if (timeslotDisabled) {
Output.Write("\n                            <span class=\"btn-time unavailable");
if (isExact) {
Output.Write(" exact");
}
Output.Write("\">&nbsp;</span>");
}
if (!timeslotDisabled) {
Output.Write("\n                            <a class=\"btn-time");
if (hasPop || hasOffers) {
Output.Write(" with-points");
}
Output.Write("\" href=\"");
Output.Write(slotUrl);
Output.Write("\">");
Output.Write(timeSlot.TimeString);
Output.Write("</a>");
}
Output.Write("\n                        </li>\n");
}
++timeSlotIndex;}}
Output.Write("\n            </ul>");
if (timeslots.TimeSlotMaxOffersWithPopCount > 0) {
Output.Write("\n            <div class=\"notifications\">");
if ((timeslots.TimeSlotMaxOffersWithPopCount == 1 && timeslots.HasPop) || displayOnlyPopTimes) {
Output.Write("\n                <span>\n                    <i class=\"with-points\"></i> ");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Strings.TimeslotLegend_1000Points);
Output.Write("\n                </span>");
}
if (timeslots.TimeSlotMaxOffersWithPopCount > 1 && !displayOnlyPopTimes) {
Output.Write("\n                <span>\n                    <i class=\"with-points\"></i>");
Output.Write(string.Format(Resources.Shared.BestRestaurantsLandingPage.Strings.TimeslotLegend_Offers, timeslots.TimeSlotMaxOffersWithPopCount));
Output.Write("\n                </span>");
}
if (timeslots.TimeSlotMaxOffersWithPopCount == 1 && !timeslots.HasPop && !displayOnlyPopTimes) {
Output.Write("\n                <span>\n                    <i class=\"with-points\"></i>");
Output.Write(string.Format(Resources.Shared.BestRestaurantsLandingPage.Strings.TimeslotLegend_Offer, timeslots.TimeSlotMaxOffersWithPopCount));
Output.Write("\n                </span>");
}
Output.Write("\n            </div>");
}
}
Output.Write("\n    </div>");
}
}
Output.Write("\n        </div>\n    </div>\n</li>");
}
++restaurantIndex;}}
Output.Write("\n    </ul> \n</div>\n");
{
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
Output.Write("\n");
{
var availabilityLink = resultsTable;
Output.Write("\n");
if (availabilityLink.Request.IsAvailabilityRequest && availabilityLink.Results.TotalUnavailable > 0) {
Output.Write("\n    <br/>");
if (availabilityLink.Request.OnlyUnavailable == true || availabilityLink.Request.IntersperseAvailability == true) {
var linkText = string.Format(availabilityLink.Results.TotalAvailable == 1 ? Resources.Shared.Common.Results.WithAvailabilityLink : Resources.Shared.Common.Results.WithAvailabilityLink_Plural, availabilityLink.Results.TotalAvailable);
Output.Write("\n        <a href=\"#\" id=\"availability_link\" class=\"availability-link\">");
Output.Write(linkText);
Output.Write("</a>");
}
else {
var linkText = string.Format(availabilityLink.Results.TotalUnavailable == 1 ? Resources.Shared.Common.Results.WithNoAvailabilityLink : Resources.Shared.Common.Results.WithNoAvailabilityLink_Plural, availabilityLink.Results.TotalUnavailable);
Output.Write("\n        <a href=\"#\" id=\"availability_link\" class=\"availability-link with-availability\">");
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
} // window.Spark.Shared.BestRestaurantsLandingPage.Results._ResultsTable
