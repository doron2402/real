if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage) window.Spark.Shared.BestRestaurantsLandingPage = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage.Filters) window.Spark.Shared.BestRestaurantsLandingPage.Filters = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage.Filters.Mobile) window.Spark.Shared.BestRestaurantsLandingPage.Filters.Mobile = {};
window.Spark.Shared.BestRestaurantsLandingPage.Filters.Mobile._FilterPrice = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var filterGroup = viewData["filterGroup"];
var title = viewData["title"];
var name = viewData["name"];
var param = viewData["param"];
var filterGroupId = viewData["filterGroupId"];
function RenderViewLevel0() {
Output.Write("\n");
if (filterGroup.Count() > 0) {
Output.Write("\n<dd id=\"");
Output.Write(filterGroupId);
Output.Write("\" class=\"accordion-item\">\n  <a href=\"#");
Output.Write(name);
Output.Write("-filter-menu\" class=\"accordion-link\">");
Output.Write(title);
Output.Write("</a>\n  <ul id=\"");
Output.Write(name);
Output.Write("-filters\" class=\"button-group button-group-justified padding-left padding-bottom\">");
for (var __iter__filter in filterGroup) {var filter=filterGroup[__iter__filter];if(typeof(filter)!='function') {
Output.Write("\n    <li class=\"mobile-price-option fixed-width\">");
if (filter.Id == "2") {
Output.Write("\n    <label data-value=\"2\" class=\"button toggle-button");
if (filter.IsSelected) {
Output.Write(" highlight");
}
Output.Write("\">");
Output.Write(string.Format("{0}{0}", Resources.Strings.Currency));
Output.Write("</label>");
}
if (filter.Id == "3") {
Output.Write("\n    <label data-value=\"3\" class=\"button toggle-button");
if (filter.IsSelected) {
Output.Write(" highlight");
}
Output.Write("\">");
Output.Write(string.Format("{0}{0}{0}", Resources.Strings.Currency));
Output.Write("</label>");
}
if (filter.Id == "4") {
Output.Write("\n    <label data-value=\"4\" class=\"button toggle-button");
if (filter.IsSelected) {
Output.Write(" highlight");
}
Output.Write("\">");
Output.Write(string.Format("{0}{0}{0}{0}", Resources.Strings.Currency));
Output.Write("</label>");
}
Output.Write("\n  </li>");
}}
Output.Write("\n  </ul>\n</dd>");
}
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.BestRestaurantsLandingPage.Filters.Mobile._FilterPrice
