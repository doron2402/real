if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Results) window.Spark.Shared.Redesign.Results = {};
window.Spark.Shared.Redesign.Results._Timeslots = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var timeslots = viewData["timeslots"];
var timeSlotsRequest = viewData["timeSlotsRequest"];
var notAvailableButtonClass = viewData["notAvailableButtonClass"];
var displayOnlyPopTimes = viewData["displayOnlyPopTimes"];
function RenderViewLevel0() {
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
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Results._Timeslots
