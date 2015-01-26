if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Modals) window.Spark.Shared.Redesign.Modals = {};
window.Spark.Shared.Redesign.Modals._SingleSearchModal = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var singleSearchModalModel = viewData["singleSearchModalModel"];
function RenderViewLevel0() {
Output.Write("\n");
if (singleSearchModalModel.Display.ShowSingleSearchInResults) {
Output.Write("\n    <div id=\"single-search-modal-placeholder\" class=\"modal\" style=\"display: none\" data-pre-selected-date=\"");
Output.Write(singleSearchModalModel.Display.SingleSearchSelectedIsoDateTime);
Output.Write("\">\n        <div id=\"single-search-modal\">\n            <p>\n                ");
Output.Write(Resources.Shared.Common.Modals.SingleSearch_ReserveAt);
Output.Write(" <span id=\"restaurant-name\"></span>\n            </p>\n            <div class=\"row\">");
Html.RenderAction("DateTimePartySize", "Srs", {domainCulture:singleSearchModalModel.DomainCulture,showSearch:false,selectedCovers:singleSearchModalModel.Request.Covers,selectedDateTime:singleSearchModalModel.Display.SelectedIsoDateTime });Output.Write("\n            </div>\n        </div>\n        <i class=\"icon icon-single-search-modal top\"></i>\n        <i class=\"icon icon-single-search-modal bottom\"></i>\n    </div>");
}
Output.Write("\n");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Modals._SingleSearchModal
