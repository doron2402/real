if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Common) window.Spark.Shared.Common = {};
if (!window.Spark.Shared.Common.Modals) window.Spark.Shared.Common.Modals = {};
window.Spark.Shared.Common.Modals._RestaurantModal = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var restaurantModal = viewData["restaurantModal"];
var request = viewData["request"];
var showTimeSlots = viewData["showTimeSlots"];
var reviews = viewData["reviews"];
var size = viewData["size"];
var timeslots = viewData["timeslots"];
var request = viewData["request"];
var notAvailableButtonClass = viewData["notAvailableButtonClass"];
var displayOnlyPopTimes = viewData["displayOnlyPopTimes"];
function RenderViewLevel0() {
Output.Write("\n\n<a href=\"");
Output.Write(restaurantModal.ProfileUri);
Output.Write("\"><img src=\"");
Output.Write(Resources.Strings.Domain);
Output.Write("/img/restimages/");
Output.Write(restaurantModal.Id);
Output.Write(".jpg\" class=\"restaurant-image\"></a>\n\n<div class=\"restaurant-data\">\n    <h2 class=\"restaurant-name\"><a href=\"");
Output.Write(restaurantModal.ProfileUri);
Output.Write("\">");
Output.Write(restaurantModal.Name);
Output.Write("</a></h2>\n    <p class=\"restaurant-address\">");
Output.Write(restaurantModal.Address);
Output.Write("</p>\n\n    <div class=\"restaurant-rating\">");
{
var reviews = restaurantModal;
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
Output.Write("\n    </div>\n\n    <ul class=\"modal-list restaurant-info\">");
if (restaurantModal.CrossStreet != null && restaurantModal.CrossStreet != "") {
Output.Write("\n        <li><strong>");
Output.Write(Resources.Shared.Common.Modals.Restaurant_CrossStreet);
Output.Write(":</strong> ");
Output.Write(restaurantModal.CrossStreet);
Output.Write("</li>");
}
Output.Write("\n        <li><strong>");
Output.Write(Resources.Shared.Common.Modals.Restaurant_Neighborhood);
Output.Write(":</strong> ");
Output.Write(restaurantModal.Location);
Output.Write("</li>\n        <li><strong>");
Output.Write(Resources.Shared.Common.Modals.Restaurant_Parking);
Output.Write(":</strong> ");
Output.Write(restaurantModal.ParkingInfo);
Output.Write("</li>\n        <li><strong>");
Output.Write(Resources.Shared.Common.Modals.Restaurant_Cuisine);
Output.Write(":</strong> ");
Output.Write(restaurantModal.Cuisine);
Output.Write("</li>\n        <li><strong>");
Output.Write(Resources.Shared.Common.Modals.Restaurant_Price);
Output.Write(":</strong> ");
Output.Write(restaurantModal.PriceBand.Name);
Output.Write("</li>\n    </ul>\n");
if (restaurantModal.Offers.Count() > 0) {
Output.Write("\n    <ul class=\"modal-list offer-info\">\n        <li><strong>");
Output.Write(Resources.Shared.Common.Modals.Restaurant_SpecialOffers);
Output.Write(":</strong></li>\n        <a href=\"");
Output.Write(restaurantModal.ProfileUri);
Output.Write("\">");
for (var __iter__offer in restaurantModal.Offers) {var offer=restaurantModal.Offers[__iter__offer];if(typeof(offer)!='function') {
Output.Write("\n            <li>");
Output.Write(offer.Name);
Output.Write("</li>");
}}
Output.Write("\n        </a>\n    </ul>");
}
Output.Write("\n\n    <strong class=\"booking-message\">");
Output.Write(Resources.Shared.Common.Modals.Restaurant_BookingMessage);
Output.Write("</strong>\n");
if (showTimeSlots) {
{
var timeslots = restaurantModal;
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
}
Output.Write("\n</div>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Common.Modals._RestaurantModal
