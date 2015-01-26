if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Modals) window.Spark.Shared.Redesign.Modals = {};
window.Spark.Shared.Redesign.Modals._OffersTooltip = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var offersTooltip = viewData["offersTooltip"];
function RenderViewLevel0() {
Output.Write("\n\n<div class=\"menu dn menu-opened\">\n  <div class=\"menu-container\">\n    <div class=\"menu-main\">\n      <div class=\"menu-header\">");
if (offersTooltip.Offers.Count() > 1) {
Output.Write("\n        <strong>");
Output.Write(string.Format(Resources.Shared.Common.Modals.Offers_TooltipHeaderMultiple,offersTooltip.Offers.Count()));
Output.Write("</strong>");
}
if (offersTooltip.Offers.Count() == 1) {
Output.Write("\n        <strong>");
Output.Write(string.Format(Resources.Shared.Common.Modals.Offers_TooltipHeaderSingle));
Output.Write("</strong>");
}
Output.Write("\n      </div>      \n      <div class=\"modal-list tooltip-offers\">");
for (var __iter__offer in offersTooltip.Offers) {var offer=offersTooltip.Offers[__iter__offer];if(typeof(offer)!='function') {
Output.Write("\n       <label class=\"offer menu-list-label\">");
Output.Write(offer);
Output.Write("</label>");
}}
Output.Write("\n    </div>      \n    </div><div class=\"dn-arrow\"></div>\n  </div> \n</div>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Modals._OffersTooltip
