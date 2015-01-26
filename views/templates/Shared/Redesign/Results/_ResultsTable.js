if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Results) window.Spark.Shared.Redesign.Results = {};
window.Spark.Shared.Redesign.Results._ResultsTable = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var resultsTable = viewData["resultsTable"];
var resultsTitle = viewData["resultsTitle"];
var popTable = viewData["popTable"];
var result = viewData["result"];
var resultViewModel = viewData["resultViewModel"];
var firstRow = viewData["firstRow"];
var lastRow = viewData["lastRow"];
var index = viewData["index"];
var onlyPopTimes = viewData["onlyPopTimes"];
var includeImages = viewData["includeImages"];
var pagination = viewData["pagination"];
var showPageNumbers = viewData["showPageNumbers"];
var availabilityLink = viewData["availabilityLink"];
var reviews = viewData["reviews"];
var searchViewModel = viewData["searchViewModel"];
var restaurantViewModel = viewData["restaurantViewModel"];
var popScheduleRestaurant = viewData["popScheduleRestaurant"];
var timeslots = viewData["timeslots"];
var timeSlotsRequest = viewData["timeSlotsRequest"];
var notAvailableButtonClass = viewData["notAvailableButtonClass"];
var displayOnlyPopTimes = viewData["displayOnlyPopTimes"];
var searchViewModelPromo = viewData["searchViewModelPromo"];
var restaurantPromo = viewData["restaurantPromo"];
var restaurantViewModelPromo = viewData["restaurantViewModelPromo"];
function RenderViewLevel0() {
Output.Write("\n\n<div class=\"content-section-header\">");
if (!string.IsNullOrEmpty(resultsTable.Display.Description)) {
Output.Write("\n    <div id=\"page-description\" class=\"page-description\">\n      ");
Output.Write(resultsTable.Display.Description);
Output.Write("\n    </div>");
}
{
var resultsTitle = resultsTable;
Output.Write("\n");
if (!string.IsNullOrEmpty(resultsTitle.Request.Title)) {
Output.Write("\n<h2>");
Output.Write(resultsTitle.Request.Title);
Output.Write("</h2>");
}
Output.Write("\n\n<h3 id=\"results-title\" class=\"results-title color-dark\">");
if (resultsTitle.IsPromo) {
if (resultsTitle.Results.TotalAvailable == 1) {
{
var searchTitle = Resources.Shared.Redesign.Results.Title_Promos;
Output.Write("\n        ");
Output.Write(string.Format(searchTitle, resultsTitle.Results.TotalAvailable));
Output.Write("\n        <span class=\"result-promo-title\">");
Output.Write(resultsTitle.Display.ResultsTitle);
Output.Write("</span>");
}
}
else {
{
var searchTitle = Resources.Shared.Redesign.Results.Title_Promos_Plural;
Output.Write("\n        ");
Output.Write(string.Format(searchTitle, resultsTitle.Results.TotalAvailable));
Output.Write("\n        <span class=\"result-promo-title\">");
Output.Write(resultsTitle.Display.ResultsTitle);
Output.Write("</span>");
}
}
}
else {
Output.Write("\n      ");
Output.Write(resultsTitle.Display.ResultsTitle);
}
Output.Write("\n</h3>\n");
}
Output.Write("\n</div>\n");
if (resultsTable.Display.ShowPop) {
Output.Write("\n<div id=\"search_results_pop\" class=\"results-set results-table pop-table\" data-name=\"PopTable\">");
{
var popTable = resultsTable;
Output.Write("\n");
if (popTable.Results.FeaturedPopRestaurants.Count() > 0 && (popTable.Request.OnlyPopTimes == null || popTable.Request.OnlyPopTimes == false) && (popTable.Request.OnlyUnavailable != true)) {
Output.Write("\n    <section id=\"poptable-results\" class=\"poptable-results content-block with-margin\">\n        <div class=\"content-block-header with-border\">\n            <h6 class=\"pop-title\">");
if (popTable.Results.FeaturedPopRestaurants.Count() == 1) {
Output.Write("\n                    ");
Output.Write(Resources.Shared.Common.Results.FeaturedPopTitle);
}
else {
Output.Write("\n                    ");
Output.Write(Resources.Shared.Common.Results.FeaturedPopTitle_Plural);
}
Output.Write("\n            </h6>\n            <a href=\"https://community.opentable.com/t5/FAQs-Knowledge-Base/What-are-OpenTable-points/ta-p/109\" class=\"pop-about-link\">");
Output.Write(Resources.Shared.Redesign.Results.About1000PointRestaurants);
Output.Write("</a>\n        </div>\n");
var restaurantIndex=0;for (var __iter__restaurant in popTable.Results.FeaturedPopRestaurants) {var restaurant=popTable.Results.FeaturedPopRestaurants[__iter__restaurant];if(typeof(restaurant)!='function') {
{
var result = restaurant;
var resultViewModel = popTable;
var firstRow = restaurantIndex == 0;
var lastRow = restaurantIndex == popTable.Results.TotalPop - 1;
var onlyPopTimes = true;
var includeImages = false;
Output.Write("\n\n<div class=\"result content-section-list-row cf");
if (resultViewModel.Display.ShowTimeSlotsInResults) {
Output.Write(" with-times");
}
Output.Write("\" data-id=\"");
Output.Write(restaurantIndex);
Output.Write("\" data-rid=\"");
Output.Write(result.Id);
Output.Write("\" data-offers=\"");
Output.Write(string.Join(",", result.OfferIds));
Output.Write("\" data-lat=\"");
Output.Write(result.Lat);
Output.Write("\" data-lon=\"");
Output.Write(result.Lon);
Output.Write("\">\n\n   <div class=\"rest-row");
if (includeImages) {
Output.Write(" with-image");
}
Output.Write("\">  ");
if (includeImages) {
Output.Write("\n        <div class=\"rest-row-image\">\n          <img src=\"/s/content/images/no-image.gif\" data-src=\"/img/restimages/x6/");
Output.Write(result.Id);
Output.Write(".jpg\" class=\"lazy rest-image\"/>\n        </div>");
}
Output.Write("\n     <div class=\"rest-row-info\">\n       <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("\" class=\"rest-row-name rest-name\">");
Output.Write(result.Name);
Output.Write("</a>");
{
var reviews = result;
var size = "small";
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
if (resultViewModel.Display.ShowPrices) {
Output.Write("\n         <div class=\"rest-row-pricing\">\n           <i>");
for( var i = 1; i <= result.PriceBand.Id; i++ ){Output.Write("\n             ");
Output.Write(Resources.Shared.Redesign.Strings.CurrencySymbol);
}Output.Write("\n           </i>");
for( var i = 1; i <= 4 - result.PriceBand.Id; i++ ){Output.Write("\n           ");
Output.Write(Resources.Shared.Redesign.Strings.CurrencySymbol);
}Output.Write("\n         </div>");
}
Output.Write("\n\n       <div class=\"rest-row-meta\">\n           ");
Output.Write(result.Cuisine);
Output.Write(" <i>|</i> ");
Output.Write(result.Location);
if (resultViewModel.Request.IsGeoDistanceRequest) {
Output.Write("\n               <i>|</i> ");
Output.Write(string.Format("{0} {1}", result.Distance, Resources.Strings.DistanceUnit_Small));
}
Output.Write("\n");
if (resultViewModel.Request.IsTravelTimeRequest) {
Output.Write("\n               <i>|</i> ");
Output.Write(result.TravelTime);
Output.Write(" minutes");
}
Output.Write("\n       </div>\n");
if (result.TopOffer != null && resultViewModel.Promo == null) {
Output.Write("\n         <div class=\"rest-row-offer\" data-id=\"");
Output.Write(result.TopOffer.Id);
Output.Write("\">\n           <p>");
Output.Write(Resources.Shared.Redesign.Strings.Label_TopOffer);
Output.Write(" <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("#special-offers\">");
Output.Write(result.TopOffer.Name);
Output.Write("</a></p>");
if (result.OfferIds.Count() > 1) {
Output.Write("\n             <p class=\"rest-row-offer-link\">");
Output.Write(Resources.Shared.Common.Results.SeeAllOffers);
Output.Write("</p>");
}
Output.Write("\n         </div>");
}
Output.Write("\n    </div>\n   </div>\n");
if (resultViewModel.Display.ShowSingleSearchInResults) {
{
var searchViewModel = resultViewModel;
var restaurantViewModel = result;
Output.Write("\n");
if (searchViewModel != null 
    && restaurantViewModel != null 
    && restaurantViewModel.Promo != null
    && searchViewModel.IsPromo 
    && !searchViewModel.Request.IsAvailabilityRequest) {
{
var searchViewModelPromo = searchViewModel.Promo;
var restaurantPromo = restaurantViewModel.Promo;
var restaurantViewModelPromo = restaurantViewModel;
Output.Write("\n\n<div class=\"rest-row-promo-wrapper\">");
if (!string.IsNullOrEmpty(restaurantPromo.Message)) {
Output.Write("\n\t<div class=\"rest-promo-message\">\n\t\t");
Output.Write(restaurantPromo.Message);
Output.Write("\n\t</div>");
}
if (!searchViewModelPromo.IsExpired) {
Output.Write("\n\t<div class=\"rest-promo-links\">");
if (restaurantPromo.ReserveLunch) {
Output.Write("\n\t\t<a href=\"#\" class=\"reserve-link lunch\" data-profile-url=\"");
Output.Write(restaurantViewModelPromo.ProfileUri);
Output.Write("\">");
Output.Write(Resources.Shared.Redesign.Strings.Reserve_Lunch);
Output.Write(" ></a>");
}
if (restaurantPromo.ReserveDinner) {
Output.Write("\n\t\t<a href=\"#\" class=\"reserve-link dinner\" data-profile-url=\"");
Output.Write(restaurantViewModelPromo.ProfileUri);
Output.Write("\">");
Output.Write(Resources.Shared.Redesign.Strings.Reserve_Dinner);
Output.Write(" ></a>");
}
if (restaurantPromo.ReserveNow) {
Output.Write("\n\t\t<a href=\"#\" class=\"reserve-link now\" data-profile-url=\"");
Output.Write(restaurantViewModelPromo.ProfileUri);
Output.Write("\">");
Output.Write(Resources.Shared.Redesign.Strings.Reserve_Now);
Output.Write(" ></a>");
}
Output.Write("\n\t</div>");
}
Output.Write(" \n</div>\n");
}
}
else {
Output.Write("\n\t<div class=\"rest-row-reserve-button\"><a href=\"#\" class=\"reserve-link button medium\" data-profile-url=\"");
Output.Write(restaurantViewModel.ProfileUri);
Output.Write("\">");
Output.Write(Resources.Shared.Redesign.Strings.Reserve_Now);
Output.Write("</a></div>");
}
Output.Write("\n\n");
}
}
Output.Write("\n");
if (resultViewModel.Display.ShowPopScheduleInResults) {
{
var popScheduleRestaurant = result;
Output.Write("\n<div class=\"rest-row-popoffers\">\n  <span class=\"rest-row-name\">");
Output.Write(Resources.Shared.PopRestaurantList.Strings.PopScheduleHeading);
Output.Write(":</span>\n  <ul class=\"topreview-text\">");
for (var __iter__weekSchedule in popScheduleRestaurant.PopSchedule.WeekSchedules) {var weekSchedule=popScheduleRestaurant.PopSchedule.WeekSchedules[__iter__weekSchedule];if(typeof(weekSchedule)!='function') {
Output.Write("\n    <li>");
Output.Write(weekSchedule);
Output.Write("</li>");
}}
Output.Write("\n  </ul>\n</div>");
}
}
Output.Write("\n");
if (resultViewModel.Display.ShowTimeSlotsInResults) {
{
var timeslots = result;
var timeSlotsRequest = resultViewModel.Request;
var notAvailableButtonClass = "";
var displayOnlyPopTimes = onlyPopTimes;
Output.Write("\n");
if (timeslots.HasAvail) {
Output.Write("\n    <div class=\"rest-row-times-cont\">\n        <div class=\"rest-row-times\">");
var timeSlotIndex=0;for (var __iter__timeSlot in timeslots.TimeSlots) {var timeSlot=timeslots.TimeSlots[__iter__timeSlot];if(typeof(timeSlot)!='function') {
{
var timeslotDisabled = !timeSlot.IsAvail || (displayOnlyPopTimes && !timeSlot.HasPop);
var isExact = timeSlotIndex == 2;
var checkSum = timeslots.Id + timeSlotsRequest.Covers + 123;
var hasPop = timeSlot.HasPop;
var hasOffers = timeSlot.OfferIds != null && timeSlot.OfferIds.Count() > 0;
var offerIds = hasOffers ? string.Join(",", timeSlot.OfferIds) : "";
var offersCount = timeSlot.OfferIds.Count() + (hasPop ? 1 : 0);
var cultureUrlSegment = timeSlotsRequest.CultureInUrlRoute == null ? "" : "/" + timeSlotsRequest.CultureInUrlRoute;
var slotUrl = string.Format("{6}/httphandlers/ValidateReservationRequest.ashx?rid={0}&d={2}&p={1}&pt={5}&i=1&ss=0&sd={2}&pofids={3}&checksum={4}", timeslots.Id, timeSlotsRequest.Covers, timeSlot.LinkString, string.Join(",", timeSlot.OfferIds), checkSum, timeSlot.HasPop ? "1000" : "100", cultureUrlSegment);
Output.Write("\n              ");
if (timeslotDisabled) {
Output.Write("\n                  <a class=\"rest-row-times-btn unavailable");
if (isExact) {
Output.Write(" exact");
}
Output.Write("\" data-offers=\"");
Output.Write(offerIds);
Output.Write("\" data-rid=\"");
Output.Write(timeslots.Id);
Output.Write("\">&nbsp;</a>");
}
if (!timeslotDisabled) {
Output.Write("\n                  <a class=\"timeslot rest-row-times-btn");
if (isExact) {
Output.Write(" exact");
}
Output.Write("\" href=\"");
Output.Write(slotUrl);
Output.Write("\" data-has-pop=\"");
Output.Write(hasPop);
Output.Write("\" data-offers=\"");
Output.Write(offerIds);
Output.Write("\" data-rid=\"");
Output.Write(timeslots.Id);
Output.Write("\">\n                    ");
Output.Write(timeSlot.TimeString);
if (hasOffers && !displayOnlyPopTimes) {
Output.Write("\n                    <i class=\"with-points\">");
Output.Write(offersCount);
Output.Write("</i>");
}
if ((hasPop && displayOnlyPopTimes) || (hasPop && offersCount == 1)) {
Output.Write("\n                    <i class=\"with-points\">+</i>");
}
Output.Write("\n                  </a>");
}
}
++timeSlotIndex;}}
if (timeslots.HasPop || timeslots.HasOffers) {
Output.Write("\n          <div class=\"notifications\">");
if (timeslots.HasPop && timeslots.HasOffers) {
Output.Write("\n              <span><i class=\"with-points\">");
Output.Write(timeslots.OfferCount + 1);
Output.Write("</i> ");
Output.Write(Resources.Shared.Redesign.Strings.TimeslotLegend_1000Points);
Output.Write(" / ");
Output.Write(Resources.Shared.Redesign.Strings.TimeslotLegend_Offers);
Output.Write("</span>");
}
if (timeslots.HasPop && !timeslots.HasOffers) {
Output.Write("\n              <span><i class=\"with-points\">+</i> ");
Output.Write(Resources.Shared.Redesign.Strings.TimeslotLegend_1000Points);
Output.Write("</span>");
}
if (!timeslots.HasPop && timeslots.HasOffers && timeslots.OfferCount == 1) {
Output.Write("\n              <span><i class=\"with-points\">");
Output.Write(timeslots.OfferCount);
Output.Write("</i> ");
Output.Write(Resources.Shared.Redesign.Strings.TimeslotLegend_Offer);
Output.Write("</span>");
}
if (!timeslots.HasPop && timeslots.HasOffers && timeslots.OfferCount > 1) {
Output.Write("\n              <span><i class=\"with-points\">");
Output.Write(timeslots.OfferCount);
Output.Write("</i> ");
Output.Write(Resources.Shared.Redesign.Strings.TimeslotLegend_Offers);
Output.Write("</span>");
}
Output.Write("\n          </div>");
}
Output.Write("\n        </div>\n    </div>");
}
else {
Output.Write("\n  <div class=\"rest-row-times-cont\">");
if (!string.IsNullOrEmpty(timeslots.UnAvailMsg)) {
Output.Write("\n    <p class=\"not-available-message\">");
Output.Write(timeslots.UnAvailMsg);
Output.Write("</p>");
}
Output.Write("\n    <a href=\"");
Output.Write(timeslots.ProfileUri);
Output.Write("\" class=\"button minimal\">");
Output.Write(Resources.Shared.Common.Results.NextAvailableButton);
Output.Write("</a>\n  </div>");
}
}
}
Output.Write("\n</div>");
}
++restaurantIndex;}}
Output.Write("\n");
if (popTable.Results.TotalPop > popTable.Results.FeaturedPopRestaurants.Count()) {
Output.Write("\n        <div class=\"content-block-footer\">\n            <a href=\"#\" id=\"pop_see_all_link\" class=\"text-arrow-right\">");
Output.Write(string.Format(Resources.Shared.Common.Results.SeeAllPopRestaurantsFormat, popTable.Results.TotalPop));
Output.Write("</a>\n        </div>");
}
Output.Write("\n    </section>");
}
Output.Write("\n\n");
}
Output.Write("\n</div>");
}
Output.Write("\n\n<div class=\"content-section-list infinite-results-list\">");
var restaurantIndex=0;for (var __iter__restaurant in resultsTable.Results.Restaurants) {var restaurant=resultsTable.Results.Restaurants[__iter__restaurant];if(typeof(restaurant)!='function') {
{
var result = restaurant;
var resultViewModel = resultsTable;
var firstRow = restaurantIndex == 0;
var lastRow = restaurantIndex == resultsTable.Results.Restaurants.Count()-1;
var onlyPopTimes = resultsTable.Request.OnlyPopTimes == true;
var includeImages = true;
Output.Write("\n\n<div class=\"result content-section-list-row cf");
if (resultViewModel.Display.ShowTimeSlotsInResults) {
Output.Write(" with-times");
}
Output.Write("\" data-id=\"");
Output.Write(restaurantIndex);
Output.Write("\" data-rid=\"");
Output.Write(result.Id);
Output.Write("\" data-offers=\"");
Output.Write(string.Join(",", result.OfferIds));
Output.Write("\" data-lat=\"");
Output.Write(result.Lat);
Output.Write("\" data-lon=\"");
Output.Write(result.Lon);
Output.Write("\">\n\n   <div class=\"rest-row");
if (includeImages) {
Output.Write(" with-image");
}
Output.Write("\">  ");
if (includeImages) {
Output.Write("\n        <div class=\"rest-row-image\">\n          <img src=\"/s/content/images/no-image.gif\" data-src=\"/img/restimages/x6/");
Output.Write(result.Id);
Output.Write(".jpg\" class=\"lazy rest-image\"/>\n        </div>");
}
Output.Write("\n     <div class=\"rest-row-info\">\n       <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("\" class=\"rest-row-name rest-name\">");
Output.Write(result.Name);
Output.Write("</a>");
{
var reviews = result;
var size = "small";
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
if (resultViewModel.Display.ShowPrices) {
Output.Write("\n         <div class=\"rest-row-pricing\">\n           <i>");
for( var i = 1; i <= result.PriceBand.Id; i++ ){Output.Write("\n             ");
Output.Write(Resources.Shared.Redesign.Strings.CurrencySymbol);
}Output.Write("\n           </i>");
for( var i = 1; i <= 4 - result.PriceBand.Id; i++ ){Output.Write("\n           ");
Output.Write(Resources.Shared.Redesign.Strings.CurrencySymbol);
}Output.Write("\n         </div>");
}
Output.Write("\n\n       <div class=\"rest-row-meta\">\n           ");
Output.Write(result.Cuisine);
Output.Write(" <i>|</i> ");
Output.Write(result.Location);
if (resultViewModel.Request.IsGeoDistanceRequest) {
Output.Write("\n               <i>|</i> ");
Output.Write(string.Format("{0} {1}", result.Distance, Resources.Strings.DistanceUnit_Small));
}
Output.Write("\n");
if (resultViewModel.Request.IsTravelTimeRequest) {
Output.Write("\n               <i>|</i> ");
Output.Write(result.TravelTime);
Output.Write(" minutes");
}
Output.Write("\n       </div>\n");
if (result.TopOffer != null && resultViewModel.Promo == null) {
Output.Write("\n         <div class=\"rest-row-offer\" data-id=\"");
Output.Write(result.TopOffer.Id);
Output.Write("\">\n           <p>");
Output.Write(Resources.Shared.Redesign.Strings.Label_TopOffer);
Output.Write(" <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("#special-offers\">");
Output.Write(result.TopOffer.Name);
Output.Write("</a></p>");
if (result.OfferIds.Count() > 1) {
Output.Write("\n             <p class=\"rest-row-offer-link\">");
Output.Write(Resources.Shared.Common.Results.SeeAllOffers);
Output.Write("</p>");
}
Output.Write("\n         </div>");
}
Output.Write("\n    </div>\n   </div>\n");
if (resultViewModel.Display.ShowSingleSearchInResults) {
{
var searchViewModel = resultViewModel;
var restaurantViewModel = result;
Output.Write("\n");
if (searchViewModel != null 
    && restaurantViewModel != null 
    && restaurantViewModel.Promo != null
    && searchViewModel.IsPromo 
    && !searchViewModel.Request.IsAvailabilityRequest) {
{
var searchViewModelPromo = searchViewModel.Promo;
var restaurantPromo = restaurantViewModel.Promo;
var restaurantViewModelPromo = restaurantViewModel;
Output.Write("\n\n<div class=\"rest-row-promo-wrapper\">");
if (!string.IsNullOrEmpty(restaurantPromo.Message)) {
Output.Write("\n\t<div class=\"rest-promo-message\">\n\t\t");
Output.Write(restaurantPromo.Message);
Output.Write("\n\t</div>");
}
if (!searchViewModelPromo.IsExpired) {
Output.Write("\n\t<div class=\"rest-promo-links\">");
if (restaurantPromo.ReserveLunch) {
Output.Write("\n\t\t<a href=\"#\" class=\"reserve-link lunch\" data-profile-url=\"");
Output.Write(restaurantViewModelPromo.ProfileUri);
Output.Write("\">");
Output.Write(Resources.Shared.Redesign.Strings.Reserve_Lunch);
Output.Write(" ></a>");
}
if (restaurantPromo.ReserveDinner) {
Output.Write("\n\t\t<a href=\"#\" class=\"reserve-link dinner\" data-profile-url=\"");
Output.Write(restaurantViewModelPromo.ProfileUri);
Output.Write("\">");
Output.Write(Resources.Shared.Redesign.Strings.Reserve_Dinner);
Output.Write(" ></a>");
}
if (restaurantPromo.ReserveNow) {
Output.Write("\n\t\t<a href=\"#\" class=\"reserve-link now\" data-profile-url=\"");
Output.Write(restaurantViewModelPromo.ProfileUri);
Output.Write("\">");
Output.Write(Resources.Shared.Redesign.Strings.Reserve_Now);
Output.Write(" ></a>");
}
Output.Write("\n\t</div>");
}
Output.Write(" \n</div>\n");
}
}
else {
Output.Write("\n\t<div class=\"rest-row-reserve-button\"><a href=\"#\" class=\"reserve-link button medium\" data-profile-url=\"");
Output.Write(restaurantViewModel.ProfileUri);
Output.Write("\">");
Output.Write(Resources.Shared.Redesign.Strings.Reserve_Now);
Output.Write("</a></div>");
}
Output.Write("\n\n");
}
}
Output.Write("\n");
if (resultViewModel.Display.ShowPopScheduleInResults) {
{
var popScheduleRestaurant = result;
Output.Write("\n<div class=\"rest-row-popoffers\">\n  <span class=\"rest-row-name\">");
Output.Write(Resources.Shared.PopRestaurantList.Strings.PopScheduleHeading);
Output.Write(":</span>\n  <ul class=\"topreview-text\">");
for (var __iter__weekSchedule in popScheduleRestaurant.PopSchedule.WeekSchedules) {var weekSchedule=popScheduleRestaurant.PopSchedule.WeekSchedules[__iter__weekSchedule];if(typeof(weekSchedule)!='function') {
Output.Write("\n    <li>");
Output.Write(weekSchedule);
Output.Write("</li>");
}}
Output.Write("\n  </ul>\n</div>");
}
}
Output.Write("\n");
if (resultViewModel.Display.ShowTimeSlotsInResults) {
{
var timeslots = result;
var timeSlotsRequest = resultViewModel.Request;
var notAvailableButtonClass = "";
var displayOnlyPopTimes = onlyPopTimes;
Output.Write("\n");
if (timeslots.HasAvail) {
Output.Write("\n    <div class=\"rest-row-times-cont\">\n        <div class=\"rest-row-times\">");
var timeSlotIndex=0;for (var __iter__timeSlot in timeslots.TimeSlots) {var timeSlot=timeslots.TimeSlots[__iter__timeSlot];if(typeof(timeSlot)!='function') {
{
var timeslotDisabled = !timeSlot.IsAvail || (displayOnlyPopTimes && !timeSlot.HasPop);
var isExact = timeSlotIndex == 2;
var checkSum = timeslots.Id + timeSlotsRequest.Covers + 123;
var hasPop = timeSlot.HasPop;
var hasOffers = timeSlot.OfferIds != null && timeSlot.OfferIds.Count() > 0;
var offerIds = hasOffers ? string.Join(",", timeSlot.OfferIds) : "";
var offersCount = timeSlot.OfferIds.Count() + (hasPop ? 1 : 0);
var cultureUrlSegment = timeSlotsRequest.CultureInUrlRoute == null ? "" : "/" + timeSlotsRequest.CultureInUrlRoute;
var slotUrl = string.Format("{6}/httphandlers/ValidateReservationRequest.ashx?rid={0}&d={2}&p={1}&pt={5}&i=1&ss=0&sd={2}&pofids={3}&checksum={4}", timeslots.Id, timeSlotsRequest.Covers, timeSlot.LinkString, string.Join(",", timeSlot.OfferIds), checkSum, timeSlot.HasPop ? "1000" : "100", cultureUrlSegment);
Output.Write("\n              ");
if (timeslotDisabled) {
Output.Write("\n                  <a class=\"rest-row-times-btn unavailable");
if (isExact) {
Output.Write(" exact");
}
Output.Write("\" data-offers=\"");
Output.Write(offerIds);
Output.Write("\" data-rid=\"");
Output.Write(timeslots.Id);
Output.Write("\">&nbsp;</a>");
}
if (!timeslotDisabled) {
Output.Write("\n                  <a class=\"timeslot rest-row-times-btn");
if (isExact) {
Output.Write(" exact");
}
Output.Write("\" href=\"");
Output.Write(slotUrl);
Output.Write("\" data-has-pop=\"");
Output.Write(hasPop);
Output.Write("\" data-offers=\"");
Output.Write(offerIds);
Output.Write("\" data-rid=\"");
Output.Write(timeslots.Id);
Output.Write("\">\n                    ");
Output.Write(timeSlot.TimeString);
if (hasOffers && !displayOnlyPopTimes) {
Output.Write("\n                    <i class=\"with-points\">");
Output.Write(offersCount);
Output.Write("</i>");
}
if ((hasPop && displayOnlyPopTimes) || (hasPop && offersCount == 1)) {
Output.Write("\n                    <i class=\"with-points\">+</i>");
}
Output.Write("\n                  </a>");
}
}
++timeSlotIndex;}}
if (timeslots.HasPop || timeslots.HasOffers) {
Output.Write("\n          <div class=\"notifications\">");
if (timeslots.HasPop && timeslots.HasOffers) {
Output.Write("\n              <span><i class=\"with-points\">");
Output.Write(timeslots.OfferCount + 1);
Output.Write("</i> ");
Output.Write(Resources.Shared.Redesign.Strings.TimeslotLegend_1000Points);
Output.Write(" / ");
Output.Write(Resources.Shared.Redesign.Strings.TimeslotLegend_Offers);
Output.Write("</span>");
}
if (timeslots.HasPop && !timeslots.HasOffers) {
Output.Write("\n              <span><i class=\"with-points\">+</i> ");
Output.Write(Resources.Shared.Redesign.Strings.TimeslotLegend_1000Points);
Output.Write("</span>");
}
if (!timeslots.HasPop && timeslots.HasOffers && timeslots.OfferCount == 1) {
Output.Write("\n              <span><i class=\"with-points\">");
Output.Write(timeslots.OfferCount);
Output.Write("</i> ");
Output.Write(Resources.Shared.Redesign.Strings.TimeslotLegend_Offer);
Output.Write("</span>");
}
if (!timeslots.HasPop && timeslots.HasOffers && timeslots.OfferCount > 1) {
Output.Write("\n              <span><i class=\"with-points\">");
Output.Write(timeslots.OfferCount);
Output.Write("</i> ");
Output.Write(Resources.Shared.Redesign.Strings.TimeslotLegend_Offers);
Output.Write("</span>");
}
Output.Write("\n          </div>");
}
Output.Write("\n        </div>\n    </div>");
}
else {
Output.Write("\n  <div class=\"rest-row-times-cont\">");
if (!string.IsNullOrEmpty(timeslots.UnAvailMsg)) {
Output.Write("\n    <p class=\"not-available-message\">");
Output.Write(timeslots.UnAvailMsg);
Output.Write("</p>");
}
Output.Write("\n    <a href=\"");
Output.Write(timeslots.ProfileUri);
Output.Write("\" class=\"button minimal\">");
Output.Write(Resources.Shared.Common.Results.NextAvailableButton);
Output.Write("</a>\n  </div>");
}
}
}
Output.Write("\n</div>");
}
++restaurantIndex;}}
Output.Write("\n</div>\n");
if (resultsTable.Display.ShowPagination) {
{
var pagination = resultsTable.Display;
var showPageNumbers = true;
Output.Write("\n");
{
var previousLink = (pagination.PaginationLinks ==null) ? "#" : (!string.IsNullOrEmpty(pagination.PaginationLinks.Previous)) ? pagination.PaginationLinks.Previous : "";
var nextLink = (pagination.PaginationLinks ==null) ? "#" : (!string.IsNullOrEmpty(pagination.PaginationLinks.Next)) ? pagination.PaginationLinks.Next : "";
Output.Write("\n\n    <div class=\"pagination-container\">\n        <ul id=\"results-pagination\" class=\"pagination\">\n            <li class=\"pagination-li pagination-arrow pagination-arrow-prev\">");
if (!string.IsNullOrEmpty(previousLink)) {
Output.Write("\n                    <a href=\"");
Output.Write(previousLink);
Output.Write("\" class=\"pagination-link pagination-prev\">");
Output.Write(Resources.Shared.Redesign.Strings.Label_Previous);
Output.Write("</a>");
}
else {
Output.Write("\n                    <span class=\"pagination-link pagination-prev pagination-unavailable\">");
Output.Write(Resources.Shared.Redesign.Strings.Label_Previous);
Output.Write("</span>");
}
Output.Write("\n            </li>");
if (showPageNumbers) {
for (var __iter__page in pagination.PaginationIndex.Pages) {var page=pagination.PaginationIndex.Pages[__iter__page];if(typeof(page)!='function') {
Output.Write("\n\t\t\t\t\t<li class=\"pagination-li\">\n\t\t\t\t\t\t<span class=\"js-pagination-page");
if (page.From != -1) {
Output.Write(" pagination-link");
}
if (page.From == -1) {
Output.Write(" pagination-spacer");
}
if (page.IsCurrent) {
Output.Write(" pagination-current");
}
Output.Write("\" data-from=\"");
Output.Write(page.From);
Output.Write("\">");
Output.Write(page.Name);
Output.Write("</span>\n\t\t\t\t\t</li>");
}}
Output.Write("            ");
}
Output.Write("\t\n            <li class=\"pagination-li pagination-arrow pagination-arrow-next\">");
if (!string.IsNullOrEmpty(nextLink)) {
Output.Write("\n                    <a href=\"");
Output.Write(nextLink);
Output.Write("\" class=\"pagination-link pagination-next\">");
Output.Write(Resources.Shared.Redesign.Strings.Label_Next);
Output.Write("</a>");
}
else {
Output.Write("\n                    <span class=\"pagination-link pagination-next pagination-unavailable\">");
Output.Write(Resources.Shared.Redesign.Strings.Label_Next);
Output.Write("</span>");
}
Output.Write("\n            </li>\n        </ul>\n    </div>");
}
}
}
Output.Write("\n");
{
var availabilityLink = resultsTable;
Output.Write("\n");
if (availabilityLink.Request.IsAvailabilityRequest) {
Output.Write("\n    <br/>");
if (availabilityLink.Request.OnlyUnavailable == true && availabilityLink.Results.TotalAvailable > 0) {
var linkText = string.Format(availabilityLink.Results.TotalAvailable == 1 ? Resources.Shared.Redesign.Results.WithAvailabilityLink : Resources.Shared.Redesign.Results.WithAvailabilityLink_Plural, availabilityLink.Results.TotalAvailable);
Output.Write("\n        <a href=\"#\" id=\"availability_link\" class=\"availability-link\">");
Output.Write(linkText);
Output.Write("</a>");
}
else if ((availabilityLink.Request.OnlyUnavailable == null || availabilityLink.Request.OnlyUnavailable == false) && availabilityLink.Results.TotalUnavailable > 0) {
var description = Resources.Shared.Redesign.Results.IncludeInterspercedAvailabilityText;
var linkText = Resources.Shared.Redesign.Results.IncludeInterspercedAvailabilityLink;
Output.Write("\n        <p>");
Output.Write(string.Format(description, availabilityLink.Results.TotalUnavailable));
Output.Write("</p>\n        <a href=\"#\" id=\"availability_link\" class=\"text-arrow-right with-availability\">");
Output.Write(linkText);
Output.Write("</a>");
}
}
}
Output.Write("\n");
if (!string.IsNullOrEmpty(resultsTable.Display.AdditionalDetails)) {
Output.Write("\n<div class=\"promo-more-details\">\n    ");
Output.Write(resultsTable.Display.AdditionalDetails);
Output.Write("\n</div>");
}
Output.Write("\n");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Results._ResultsTable
