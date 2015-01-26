if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Results) window.Spark.Shared.Redesign.Results = {};
window.Spark.Shared.Redesign.Results._RestaurantPromo = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var searchViewModelPromo = viewData["searchViewModelPromo"];
var restaurantPromo = viewData["restaurantPromo"];
var restaurantViewModelPromo = viewData["restaurantViewModelPromo"];
function RenderViewLevel0() {
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
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Results._RestaurantPromo
