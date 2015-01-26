if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage) window.Spark.Shared.BestRestaurantsLandingPage = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage.Filters) window.Spark.Shared.BestRestaurantsLandingPage.Filters = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage.Filters.Mobile) window.Spark.Shared.BestRestaurantsLandingPage.Filters.Mobile = {};
window.Spark.Shared.BestRestaurantsLandingPage.Filters.Mobile._Filters = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var filters = viewData["filters"];
var title = viewData["title"];
var leftLink = viewData["leftLink"];
var rightLink = viewData["rightLink"];
var filters = viewData["filters"];
var request = viewData["request"];
var title = viewData["title"];
var filterGroupId = viewData["filterGroupId"];
var filterGroup = viewData["filterGroup"];
var title = viewData["title"];
var name = viewData["name"];
var param = viewData["param"];
var filterGroupId = viewData["filterGroupId"];
var filterGroup = viewData["filterGroup"];
var title = viewData["title"];
var name = viewData["name"];
var param = viewData["param"];
var filterGroupId = viewData["filterGroupId"];
var offersSearchViewModel = viewData["offersSearchViewModel"];
var title = viewData["title"];
var name = viewData["name"];
var param = viewData["param"];
var filterGroupId = viewData["filterGroupId"];
function RenderViewLevel0() {
Output.Write("\n\n<!--Refine page for mobile screen-->\n<div id=\"RefineFiltersModal\" class=\"reveal-modal\">\n");
{
var title = Resources.Shared.BestRestaurantsLandingPage.Filters.Title_RefineYourSearch;
var leftLink = Resources.Shared.BestRestaurantsLandingPage.Filters.Label_Cancel;
var rightLink = Resources.Shared.BestRestaurantsLandingPage.Filters.Label_Apply;
Output.Write("\n\n<header id=\"RefineHeader\" class=\"app-header\">\n    <div class=\"tab-bar show-for-small-only\">\n        <div class=\"row\">\n            <div class=\"small-3 columns header-link-left\">\n                <a href=\"#\" id=\"RefineCancelLink\">");
Output.Write(leftLink);
Output.Write("</a>\n            </div>\n            <div class=\"small-6 columns header-link-middle\">\n                <h4>");
Output.Write(title);
Output.Write("</h4>\n            </div>\n            <div class=\"small-3 columns header-link-right text-right\">\n                <a href=\"#\" id=\"RefineApplyLink\">");
Output.Write(rightLink);
Output.Write("</a>\n            </div>\n        </div>\n    </div>\n</header>");
}
Output.Write("\n\n    <div class=\"content-wrap content-wrap-centered\">\n       ");
{
var filterGroup = filters;
var request = filters.Request;
var title = Resources.Shared.BestRestaurantsLandingPage.Filters.Label_Sort;
var filterGroupId = "sort_mobile_filters";
Output.Write("\n<div id=\"");
Output.Write(filterGroupId);
Output.Write("\">\n    <div class=\"row\">\n        <div class=\"column medium-12 padding-top padding-bottom\">\n            <h4 class=\"left remove-bottom-margin\">");
Output.Write(title);
Output.Write("</h4>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"column medium-12\">");
{
var selectedPopularity = request.SortString == "Popularity";
var selectedName = request.SortString == "Name";
var selectedRating = request.SortString == "Rating";
Output.Write("\n                <ul id=\"sort-filters-mobile\" class=\"button-group button-group-justified\">\n                    <li id=\"SortOrder_Rating\" class=\"mobile-sort-item fixed-width\">\n                        <a href=\"#\" class=\"button toggle-button");
if (selectedRating) {
Output.Write(" highlight");
}
Output.Write("\" data-value=\"Rating\">");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Filters.Label_Sort_Rating_Mobile);
Output.Write("</a>\n                    </li>\n                    <li id=\"SortOrder_Popular\" class=\"mobile-sort-item fixed-width\">\n                        <a href=\"#\" class=\"button toggle-button");
if (selectedPopularity) {
Output.Write(" highlight");
}
Output.Write("\" data-value=\"Popularity\">");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Filters.Label_Sort_Popularity_Mobile);
Output.Write("</a>\n                    </li>\n                    <li id=\"SortOrder_Name\" class=\"mobile-sort-item fixed-width\">\n                        <a href=\"#\" class=\"button toggle-button");
if (selectedName) {
Output.Write(" highlight");
}
Output.Write("\" data-value=\"Name\">");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Filters.Label_Sort_Name);
Output.Write("</a>\n                    </li>\n                </ul>");
}
Output.Write("\n        </div>\n    </div>\n</div>");
}
Output.Write("\n");
if (filters.Filters != null) {
Output.Write("\n        <div>     \n            <div class=\"row\">\n                <div class=\"column medium-12 padding-top padding-bottom\">\n                    <h4 class=\"left remove-bottom-margin\">");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Filters.Title_Filters);
Output.Write("</h4>\n                </div>\n            </div>\n           <div class=\"content-block\">\n                <div class=\"content-block-body no-padding\">\n                    <dl class=\"accordion-menu accordion\">");
{
var filterGroup = filters.Filters.PriceBands;
var title = Resources.Shared.BestRestaurantsLandingPage.Filters.Title_Price;
var filterGroupId = "price-band-mobile-filters";
var name = "PriceBands";
var param = "PriceBandIds";
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
{
var filterGroup = filters.Filters.Cuisines;
var title = Resources.Shared.BestRestaurantsLandingPage.Filters.Title_Cuisines;
var filterGroupId = "cuisine-mobile-filters";
var name = "Cuisines";
var param = "CuisineIds";
Output.Write("\n");
if (filterGroup.Count() > 0) {
Output.Write("\n<dd id=\"");
Output.Write(filterGroupId);
Output.Write("\" class=\"accordion-item\">\n    <a href=\"#");
Output.Write(name);
Output.Write("-filter-menu\" class=\"accordion-link with-arrow\">");
Output.Write(title);
Output.Write(" <span class=\"filter-count\"></span></a>\n    <div id=\"");
Output.Write(name);
Output.Write("-filter-menu\" class=\"accordion-content\">\n        <div class=\"menu-list\">\n            <ul id=\"cuisines-mobile-filters\" class=\"menu-with-checkboxes\">");
for (var __iter__filter in filterGroup) {var filter=filterGroup[__iter__filter];if(typeof(filter)!='function') {
{
var filterSelected = filter.IsSelected;
Output.Write("\n                        <li class=\"mobile-cuisine-item\">\n                            <label class=\"mobile-cuisine-option");
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
{
var offersSearchViewModel = filters;
var title = Resources.Shared.BestRestaurantsLandingPage.Filters.Title_OfferTypes;
var filterGroupId = "offer-type-mobile-filters";
var name = "OfferTypes";
var param = "OfferTypeIds";
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
Output.Write("\n                    </dl>\n                </div>\n            </div>\n        </div>");
}
Output.Write("\n    </div>\n</div>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.BestRestaurantsLandingPage.Filters.Mobile._Filters
