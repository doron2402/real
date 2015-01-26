if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Search) window.Spark.Shared.Search = {};
if (!window.Spark.Shared.Search.Map) window.Spark.Shared.Search.Map = {};
window.Spark.Shared.Search.Map._ResultsMap = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var resultsMap = viewData["resultsMap"];
var clearLastFilter = viewData["clearLastFilter"];
var resultsTitle = viewData["resultsTitle"];
var minCount = viewData["minCount"];
var maxCount = viewData["maxCount"];
var resultsList = viewData["resultsList"];
var minCount = viewData["minCount"];
var maxCount = viewData["maxCount"];
var clearLastFilter = viewData["clearLastFilter"];
var mapResult = viewData["mapResult"];
var request = viewData["request"];
var availabilityLink = viewData["availabilityLink"];
var noResultsMap = viewData["noResultsMap"];
var clearLastFilter = viewData["clearLastFilter"];
var reviews = viewData["reviews"];
var size = viewData["size"];
var timeslots = viewData["timeslots"];
var request = viewData["request"];
var notAvailableButtonClass = viewData["notAvailableButtonClass"];
var displayOnlyPopTimes = viewData["displayOnlyPopTimes"];
function RenderViewLevel0() {
Output.Write("\n\n<div class=\"results-list-header\">\n    <h2 class=\"title\">");
{
var resultsTitle = resultsMap;
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
Output.Write("\n    </h2>\n</div>\n\n<div class=\"map-navigation\">");
{
Output.Write("<div class=\"map-controls\">\n    <a href=\"#\" class=\"prev\">&#60;&#60; ");
Output.Write(Resources.Shared.Search.Map.Navigation_Previous);
Output.Write("</a>\n    <a href=\"#\" class=\"next\">");
Output.Write(Resources.Shared.Search.Map.Navigation_Next);
Output.Write(" &#62;&#62;</a>\n</div>");
}
Output.Write("\n    <span class=\"map-title\">");
{
var minCount = 0;
var maxCount = resultsMap.Results.Total > 30 ? 30 : resultsMap.Results.Total;
Output.Write("\n");
if (minCount == 0) {
Output.Write("\n    ");
Output.Write(string.Format(Resources.Shared.Search.Map.Title, maxCount));
}
else {
Output.Write("\n    ");
Output.Write(string.Format(Resources.Shared.Search.Map.Title_Between, minCount, maxCount));
}
}
Output.Write("\n    </span>\n</div>\n\n<div class=\"map-container cf\">\n    <div class=\"map-results\">\n        <div id=\"map_results_list\" class=\"results-list\">");
{
var resultsList = resultsMap;
var minCount = 0;
var maxCount = 30;
Output.Write("\n");
if (resultsList.Results.Total > 0) {
var restaurantIndex=0;for (var __iter__restaurant in resultsList.Results.Restaurants) {var restaurant=resultsList.Results.Restaurants[__iter__restaurant];if(typeof(restaurant)!='function') {
if (restaurantIndex >= minCount && restaurantIndex < maxCount) {
{
var mapResult = restaurant;
var request = resultsList.Request;
Output.Write("\n");
var distance = request.IsGeoDistanceRequest == true ? string.Format("{0} {1}", mapResult.Distance, Resources.Strings.DistanceUnit_Small) : "";
Output.Write("\n\n<div class=\"result\" data-id=\"");
Output.Write(restaurantIndex);
Output.Write("\">\n");
if (request.ParsedTests.Contains("showrestaurantimages")) {
Output.Write("\n      <a href=\"");
Output.Write(mapResult.ProfileUri);
Output.Write("\" class=\"rest-image\">\n        <img src=\"/s/content/images/1x1.gif\" data-src=\"/img/restimages/x4/");
Output.Write(mapResult.Id);
Output.Write(".jpg\" width=\"52\" height=\"56\" class=\"lazy\">\n      </a>");
}
Output.Write("\n    <div class=\"rest-content\">\n        <i class=\"icon icon-pin--small\"></i>\n        <a href=\"");
Output.Write(mapResult.ProfileUri);
Output.Write("\" class=\"rest-name\">");
Output.Write(mapResult.Name);
Output.Write("</a>\n        <span class=\"distance\">");
Output.Write(distance);
Output.Write("</span>");
{
var reviews = mapResult;
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
Output.Write("\n    </div>\n");
{
var timeslots = mapResult;
var notAvailableButtonClass = "btn-thin";
var displayOnlyPopTimes = request.OnlyPopTimes == true;
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
Output.Write("\n</div>");
}
}
++restaurantIndex;}}
{
var availabilityLink = resultsList;
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
else {
{
var noResultsMap = resultsList;
Output.Write("\n\n<div class=\"map-no-results\">\n\n    <h2>We did not find a match for your search</h2>\n\n    <div class=\"block\">\n        <p class=\"no-result-message\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_NoMatch_Message);
Output.Write("</p>\n");
if (clearLastFilter == true) {
Output.Write("\n            <button id=\"clear_last_filter\" class=\"btn btn-thin btn-search\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_UndoLastFilterButton);
Output.Write("</button>");
}
Output.Write("\n");
if (clearLastFilter == true && noResultsMap.Display.Metro.Id != null) {
Output.Write("\n            <span class=\"or\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_Or);
Output.Write("</span>");
}
Output.Write("\n");
if (noResultsMap.Display.Metro.Id != null) {
Output.Write("\n            <button id=\"start_over\" class=\"btn btn-thin btn-search\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_StartOverButton);
Output.Write("</button>");
}
Output.Write("\n    </div>\n\n    <h2>Other suggestions</h2>\n\n    <div class=\"block\">");
if (noResultsMap.Request.IsGeoDistanceRequest != true) {
Output.Write("\n        <p class=\"no-result-message\"><a href=\"/rest_list.aspx?m=");
Output.Write(noResultsMap.Request.MetroId);
Output.Write("\" class=\"link\">");
Output.Write(string.Format(Resources.Shared.Search.Strings.NoSearchResults_MetroListLink, noResultsMap.Display.Metro.Name));
Output.Write("</a></p>");
}
Output.Write("\n        <p class=\"no-result-message\"><a href=\"/\" class=\"link\">");
Output.Write(string.Format(Resources.Shared.Search.Strings.NoSearchResults_MetroLink, noResultsMap.Display.Metro.Name));
Output.Write("</a></p>\n        <p class=\"no-result-message italic\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_OtherSuggestionsMessage);
Output.Write("</p>\n    </div>\n\n</div>");
}
}
}
Output.Write("\n        </div>\n    </div>\n    <div id=\"results_map\" class=\"map-placeholder\"></div>\n</div>\n");
{
Output.Write("<div class=\"map-controls\">\n    <a href=\"#\" class=\"prev\">&#60;&#60; ");
Output.Write(Resources.Shared.Search.Map.Navigation_Previous);
Output.Write("</a>\n    <a href=\"#\" class=\"next\">");
Output.Write(Resources.Shared.Search.Map.Navigation_Next);
Output.Write(" &#62;&#62;</a>\n</div>");
}
Output.Write("\n");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Search.Map._ResultsMap
