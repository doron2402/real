if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Search) window.Spark.Shared.Redesign.Search = {};
window.Spark.Shared.Redesign.Search._Search = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var search = viewData["search"];
function RenderViewLevel0() {
Output.Write("\n\n<div class=\"page-header cf\">\n    <div class=\"max-width-wrapper\">\n        <div class=\"page-header-content\">\n            <div class=\"row\">\n                <div class=\"column\">\n                    <div class=\"dtp-picker-travel-time\"></div>                    ");
Html.RenderAction("DateTimePartySize", "Srs", {domainCulture:search.DomainCulture,showSearch:search.Request.PageType == PageType.TravelTimeSearch,selectedCovers:search.Request.Covers,selectedDateTime:search.Display.SelectedIsoDateTime });Output.Write("\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Search._Search
