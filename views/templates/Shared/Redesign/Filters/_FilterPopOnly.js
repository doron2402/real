if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Filters) window.Spark.Shared.Redesign.Filters = {};
window.Spark.Shared.Redesign.Filters._FilterPopOnly = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var filterPopOnly = viewData["filterPopOnly"];
function RenderViewLevel0() {
Output.Write("\n");
var showPop = filterPopOnly.Display.ShowPopFilter;
var noOffersAvailable = (filterPopOnly.Filters.OfferTypes == null || filterPopOnly.Filters.OfferTypes.Count() == 0);
var isPopSelected = showPop == true && filterPopOnly.Request.OnlyPopTimes != null && filterPopOnly.Request.OnlyPopTimes == true;
Output.Write("\n");
if (showPop && noOffersAvailable) {
Output.Write("\n<div class=\"checkboxes");
if (isPopSelected) {
Output.Write(" checked");
}
Output.Write("\">\n\t<input id=\"only_pop\" type=\"checkbox\" class=\"filter\" data-filter-name=\"OnlyPopTimes\" data-id=\"true\"");
{
var __just__once__ = 0;
if (isPopSelected) {
if (__just__once__ < 1) {
Output.Write(" checked=\"");
}
__just__once__ = 1;
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write("/>\n\t<label for=\"only_pop\">");
Output.Write(Resources.Shared.Redesign.Filters.Title_PopOnly);
Output.Write("</label>\n</div>");
}
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Filters._FilterPopOnly
