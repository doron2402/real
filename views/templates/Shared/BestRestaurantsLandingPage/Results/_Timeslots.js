if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage) window.Spark.Shared.BestRestaurantsLandingPage = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage.Results) window.Spark.Shared.BestRestaurantsLandingPage.Results = {};
window.Spark.Shared.BestRestaurantsLandingPage.Results._Timeslots = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var timeslots = viewData["timeslots"];
var request = viewData["request"];
var notAvailableButtonClass = viewData["notAvailableButtonClass"];
var displayOnlyPopTimes = viewData["displayOnlyPopTimes"];
function RenderViewLevel0() {
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
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.BestRestaurantsLandingPage.Results._Timeslots
