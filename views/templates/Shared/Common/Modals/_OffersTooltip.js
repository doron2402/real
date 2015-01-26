if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Common) window.Spark.Shared.Common = {};
if (!window.Spark.Shared.Common.Modals) window.Spark.Shared.Common.Modals = {};
window.Spark.Shared.Common.Modals._OffersTooltip = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var offersTooltip = viewData["offersTooltip"];
function RenderViewLevel0() {
Output.Write("\n\n<ul class=\"tooltip-offers\">");
for (var __iter__offer in offersTooltip.Offers) {var offer=offersTooltip.Offers[__iter__offer];if(typeof(offer)!='function') {
Output.Write("\n    <li class=\"offer\">");
Output.Write(offer);
Output.Write("</li>");
}}
Output.Write("\n</ul>\n\n<i class=\"icon icon-tooltip-arrow\"></i>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Common.Modals._OffersTooltip
