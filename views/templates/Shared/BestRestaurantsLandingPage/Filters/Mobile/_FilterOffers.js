if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage) window.Spark.Shared.BestRestaurantsLandingPage = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage.Filters) window.Spark.Shared.BestRestaurantsLandingPage.Filters = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage.Filters.Mobile) window.Spark.Shared.BestRestaurantsLandingPage.Filters.Mobile = {};
window.Spark.Shared.BestRestaurantsLandingPage.Filters.Mobile._FilterOffers = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var offersSearchViewModel = viewData["offersSearchViewModel"];
var title = viewData["title"];
var name = viewData["name"];
var param = viewData["param"];
var filterGroupId = viewData["filterGroupId"];
function RenderViewLevel0() {
Output.Write("\n");
var offersFilterGroup = offersSearchViewModel.Filters.OfferTypes;
var showPop = offersSearchViewModel.Display.ShowPopFilter;
var isPopSelected = showPop == true && offersSearchViewModel.Request.OnlyPopTimes != null && offersSearchViewModel.Request.OnlyPopTimes == true;
Output.Write("\n");
if (showPop || (offersFilterGroup != null && offersFilterGroup.Count() > 0)) {
Output.Write("\n<dd id=\"");
Output.Write(filterGroupId);
Output.Write("\" class=\"accordion-item\">\n    <a href=\"#");
Output.Write(name);
Output.Write("-filter-menu\" class=\"accordion-link with-arrow\">");
Output.Write(title);
Output.Write(" <span class=\"filter-count\"></span></a>\n    <div id=\"");
Output.Write(name);
Output.Write("-filter-menu\" class=\"accordion-content\">\n        <div class=\"menu-list\">\n            <ul id=\"");
Output.Write(name);
Output.Write("-mobile-filters\" class=\"menu-with-checkboxes\">");
if (showPop) {
Output.Write("\n                <li class=\"mobile-pop-item\">\n                    <label class=\"mobile-pop-option");
if (isPopSelected) {
Output.Write(" highlight");
}
Output.Write("\">\n                        <span>");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Filters.Title_PopOnly);
Output.Write("</span>\n                    </label>\n                </li>");
}
for (var __iter__filter in offersFilterGroup) {var filter=offersFilterGroup[__iter__filter];if(typeof(filter)!='function') {
{
var filterSelected = filter.IsSelected;
Output.Write("\n                        <li class=\"mobile-offertype-item\">\n                            <label class=\"mobile-offertype-option");
if (filterSelected) {
Output.Write(" highlight");
}
Output.Write("\" data-id=\"");
Output.Write(filter.Id);
Output.Write("\">\n                                <span>");
Output.Write(filter.Name);
Output.Write("</span>\n                            </label>\n                        </li>");
}
}}
Output.Write("\n            </ul>\n        </div>\n    </div>\n</dd>");
}
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.BestRestaurantsLandingPage.Filters.Mobile._FilterOffers
