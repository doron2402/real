if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Modals) window.Spark.Shared.Redesign.Modals = {};
window.Spark.Shared.Redesign.Modals._RestaurantModal = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var restaurantModal = viewData["restaurantModal"];
function RenderViewLevel0() {
Output.Write("\n\n<div class=\"menu menu-opened\">\n    <div class=\"menu-container\">\n        <div class=\"menu-main\">\n            <div class=\"restaurant-data\">\n                <div class=\"menu-header\">");
Output.Write(Resources.Shared.Common.Modals.Restaurant_SpecialOffers);
Output.Write("</div>\n                <div class=\"modal-list offer-info\">");
for (var __iter__offer in restaurantModal) {var offer=restaurantModal[__iter__offer];if(typeof(offer)!='function') {
Output.Write("\n                    <div>\n                        <label class=\"menu-list-label\">");
Output.Write(offer.Name);
Output.Write("</label>\n                    </div>");
}}
Output.Write("\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Modals._RestaurantModal
