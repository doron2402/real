if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage) window.Spark.Shared.BestRestaurantsLandingPage = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage.Filters) window.Spark.Shared.BestRestaurantsLandingPage.Filters = {};
window.Spark.Shared.BestRestaurantsLandingPage.Filters._Filters = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var filters = viewData["filters"];
var filterGroup = viewData["filterGroup"];
var title = viewData["title"];
var modalTitle = viewData["modalTitle"];
var filterGroupId = viewData["filterGroupId"];
var name = viewData["name"];
var param = viewData["param"];
var filterGroupClass = viewData["filterGroupClass"];
var offersSearchViewModel = viewData["offersSearchViewModel"];
var title = viewData["title"];
var modalTitle = viewData["modalTitle"];
var filterGroupId = viewData["filterGroupId"];
var name = viewData["name"];
var param = viewData["param"];
var filterGroupClass = viewData["filterGroupClass"];
var filters = viewData["filters"];
var request = viewData["request"];
var filterGroupId = viewData["filterGroupId"];
var filterGroupClass = viewData["filterGroupClass"];
var title = viewData["title"];
var filter = viewData["filter"];
var filterName = viewData["filterName"];
var filterDataName = viewData["filterDataName"];
var type = viewData["type"];
function RenderViewLevel0() {
Output.Write("\n\n<div id=\"search_filters\" class=\"filters-bar hide-for-small-only\">\n    <div class=\"content-wrap content-wrap-centered\">\n        <ul class=\"filters-list\">");
{
var filterGroup = filters.Filters.Cuisines;
var title = Resources.Shared.BestRestaurantsLandingPage.Filters.Title_Cuisines;
var modalTitle = Resources.Shared.BestRestaurantsLandingPage.Filters.Label_FilterBy_Cuisine;
var filterGroupId = "cuisine_filters";
var name = "Cuisines";
var param = "CuisineIds";
var filterGroupClass = "filter-option filter-option-cuisines";
Output.Write("\n");
if (filterGroup.Count() > 0) {
Output.Write("\n<li id=\"");
Output.Write(filterGroupId);
Output.Write("\" class=\"");
Output.Write(filterGroupClass);
Output.Write("\">\n    <a href=\"#\" data-target=\"");
Output.Write(name);
Output.Write("-filter-menu\" class=\"toggle-menu\">");
Output.Write(title);
Output.Write(" <span class=\"filter-count\"></span></a>\n    <div id=\"");
Output.Write(name);
Output.Write("-filter-menu\" class=\"menu with-arrow\">\n        <div class=\"menu-container\">\n            <div class=\"menu-header\">");
Output.Write(modalTitle);
Output.Write("</div>\n            <div class=\"menu-scroll swiper-container\">\n                <div class=\"swiper-scrollbar\"></div>\n                <div class=\"swiper-wrapper\">\n                    <div class=\"swiper-slide\">\n                        <div class=\"menu-section\">\n                            <div class=\"menu-list\">\n                                <ul id=\"");
Output.Write(name);
Output.Write("-filter-items\" class=\"menu-with-checkboxes\">");
for (var __iter__data in filterGroup) {var data=filterGroup[__iter__data];if(typeof(data)!='function') {
{
var filter = data;
var filterName = param;
var filterDataName = param;
var type = "checkbox";
Output.Write("\n");
{
var filterSelected = filter.IsSelected;
Output.Write("\n    <li>\n        <label for=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\"");
{
var __just__once__ = 0;
if (filterSelected) {
if (__just__once__ < 1) {
Output.Write(" class=\"");
}
__just__once__ = 1;
Output.Write("highlight");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">\n            <input id=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"filter\" type=\"");
Output.Write(type);
Output.Write("\" name=\"");
Output.Write(filterName);
Output.Write("\" data-filter-name=\"");
Output.Write(filterDataName);
Output.Write("\" data-id=\"");
Output.Write(filter.Id);
Output.Write("\"");
{
var __just__once__ = 0;
if (filterSelected) {
if (__just__once__ < 1) {
Output.Write(" checked=\"");
}
__just__once__ = 1;
Output.Write("checked");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write("/>\n            <span>");
Output.Write(filter.Name);
Output.Write("</span>\n        </label>\n    </li>");
}
}
}}
Output.Write("\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</li>");
}
}
{
var offersSearchViewModel = filters;
var title = Resources.Shared.BestRestaurantsLandingPage.Filters.Title_OfferTypes;
var modalTitle = Resources.Shared.BestRestaurantsLandingPage.Filters.Label_FilterBy_OfferType;
var filterGroupId = "offer_type_filters";
var name = "OfferTypes";
var param = "OfferTypeIds";
var filterGroupClass = "filter-option filter-option-offers";
Output.Write("\n");
var offersFilterGroup = offersSearchViewModel.Filters.OfferTypes;
var showPop = offersSearchViewModel.Display.ShowPopFilter;
var isPopSelected = showPop == true && offersSearchViewModel.Request.OnlyPopTimes != null && offersSearchViewModel.Request.OnlyPopTimes == true;
Output.Write("\n");
if (showPop || (offersFilterGroup != null && offersFilterGroup.Count() > 0)) {
Output.Write("\n<li id=\"");
Output.Write(filterGroupId);
Output.Write("\" class=\"");
Output.Write(filterGroupClass);
Output.Write("\">\n    <a href=\"#\" data-target=\"");
Output.Write(name);
Output.Write("-filter-menu\" class=\"toggle-menu\">");
Output.Write(title);
Output.Write(" <span class=\"filter-count\"></span></a>\n    <div id=\"");
Output.Write(name);
Output.Write("-filter-menu\" class=\"menu with-arrow\">\n        <div class=\"menu-container\">\n            <div class=\"menu-header\">");
Output.Write(modalTitle);
Output.Write("</div>\n            <div class=\"menu-scroll swiper-container\">\n                <div class=\"swiper-scrollbar\"></div>\n                <div class=\"swiper-wrapper\">\n                    <div class=\"swiper-slide\">\n                        <div class=\"menu-section\">\n                            <div class=\"menu-list\">\n                                <ul id=\"");
Output.Write(name);
Output.Write("-filter-items\" class=\"menu-with-checkboxes\">\n");
if (showPop) {
Output.Write("\n                                    <li>\n                                        <label for=\"pop_times\"");
{
var __just__once__ = 0;
if (isPopSelected) {
if (__just__once__ < 1) {
Output.Write(" class=\"");
}
__just__once__ = 1;
Output.Write("highlight");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">\n                                            <input id=\"pop_times\" type=\"checkbox\" class=\"filter checkbox\" data-filter-name=\"OnlyPopTimes\" data-id=\"true\"");
{
var __just__once__ = 0;
if (isPopSelected) {
if (__just__once__ < 1) {
Output.Write(" checked=\"");
}
__just__once__ = 1;
Output.Write("checked");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write("/>\n                                            <span>");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Filters.Title_PopOnly);
Output.Write("</span>\n                                        </label>\n                                    </li>");
}
Output.Write("\n");
for (var __iter__data in offersFilterGroup) {var data=offersFilterGroup[__iter__data];if(typeof(data)!='function') {
{
var filter = data;
var filterName = param;
var filterDataName = param;
var type = "checkbox";
Output.Write("\n");
{
var filterSelected = filter.IsSelected;
Output.Write("\n    <li>\n        <label for=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\"");
{
var __just__once__ = 0;
if (filterSelected) {
if (__just__once__ < 1) {
Output.Write(" class=\"");
}
__just__once__ = 1;
Output.Write("highlight");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">\n            <input id=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"filter\" type=\"");
Output.Write(type);
Output.Write("\" name=\"");
Output.Write(filterName);
Output.Write("\" data-filter-name=\"");
Output.Write(filterDataName);
Output.Write("\" data-id=\"");
Output.Write(filter.Id);
Output.Write("\"");
{
var __just__once__ = 0;
if (filterSelected) {
if (__just__once__ < 1) {
Output.Write(" checked=\"");
}
__just__once__ = 1;
Output.Write("checked");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write("/>\n            <span>");
Output.Write(filter.Name);
Output.Write("</span>\n        </label>\n    </li>");
}
}
}}
Output.Write("\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</li>");
}
}
{
var filterGroup = filters.Filters.PriceBands;
var title = Resources.Shared.BestRestaurantsLandingPage.Filters.Title_Price;
var modalTitle = Resources.Shared.BestRestaurantsLandingPage.Filters.Label_FilterBy_Price;
var filterGroupId = "price_band_filters";
var name = "PriceBands";
var param = "PriceBandIds";
var filterGroupClass = "filter-option filter-option-prices";
Output.Write("\n");
if (filterGroup.Count() > 0) {
Output.Write("\n<li id=\"");
Output.Write(filterGroupId);
Output.Write("\" class=\"");
Output.Write(filterGroupClass);
Output.Write("\">\n    <a href=\"#\" data-target=\"");
Output.Write(name);
Output.Write("-filter-menu\" class=\"toggle-menu\">");
Output.Write(title);
Output.Write(" <span class=\"filter-count\"></span></a>\n    <div id=\"");
Output.Write(name);
Output.Write("-filter-menu\" class=\"menu with-arrow\">\n        <div class=\"menu-container\">\n            <div class=\"menu-header\">");
Output.Write(modalTitle);
Output.Write("</div>\n            <div class=\"menu-scroll swiper-container\">\n                <div class=\"swiper-scrollbar\"></div>\n                <div class=\"swiper-wrapper\">\n                    <div class=\"swiper-slide\">\n                        <div class=\"menu-section\">\n                            <div class=\"menu-list\">\n                                <ul id=\"");
Output.Write(name);
Output.Write("-filter-items\" class=\"menu-with-checkboxes\">");
for (var __iter__data in filterGroup) {var data=filterGroup[__iter__data];if(typeof(data)!='function') {
{
var filter = data;
var filterName = param;
var filterDataName = param;
var type = "checkbox";
Output.Write("\n");
{
var filterSelected = filter.IsSelected;
Output.Write("\n    <li>\n        <label for=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\"");
{
var __just__once__ = 0;
if (filterSelected) {
if (__just__once__ < 1) {
Output.Write(" class=\"");
}
__just__once__ = 1;
Output.Write("highlight");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">\n            <input id=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"filter\" type=\"");
Output.Write(type);
Output.Write("\" name=\"");
Output.Write(filterName);
Output.Write("\" data-filter-name=\"");
Output.Write(filterDataName);
Output.Write("\" data-id=\"");
Output.Write(filter.Id);
Output.Write("\"");
{
var __just__once__ = 0;
if (filterSelected) {
if (__just__once__ < 1) {
Output.Write(" checked=\"");
}
__just__once__ = 1;
Output.Write("checked");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write("/>\n            <span>");
Output.Write(filter.Name);
Output.Write("</span>\n        </label>\n    </li>");
}
}
}}
Output.Write("\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</li>");
}
}
{
var request = filters.Request;
var filterGroupId = "sort_filters";
var filterGroupClass = "filter-option filter-option-sort-orders";
var title = Resources.Shared.BestRestaurantsLandingPage.Filters.Label_Sort;
Output.Write("\n\n<li id=\"");
Output.Write(filterGroupId);
Output.Write("\" class=\"");
Output.Write(filterGroupClass);
Output.Write("\">\n    <a href=\"#\" data-target=\"sort-filter-menu\" class=\"toggle-menu\">");
Output.Write(title);
Output.Write("</a>\n    <div id=\"sort-filter-menu\" class=\"menu with-arrow\">\n        <div class=\"menu-container\">\n            <div class=\"menu-section\">\n                <div class=\"menu-list\">");
{
var selectedPopularity = request.SortString == "Popularity";
var selectedName = request.SortString == "Name";
var selectedRating = request.SortString == "Rating";
Output.Write("\n                        <ul id=\"sort-filters\" class=\"menu-with-checkboxes\">\n                            <li>\n                                <label for=\"SortOrder_Popular\"");
{
var __just__once__ = 0;
if (selectedPopularity) {
if (__just__once__ < 1) {
Output.Write(" class=\"");
}
__just__once__ = 1;
Output.Write("highlight");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">\n                                    <input type=\"radio\" id=\"SortOrder_Popular\" name=\"SortOrder\" class=\"sort-option test\" value=\"Popularity\"");
{
var __just__once__ = 0;
if (selectedPopularity) {
if (__just__once__ < 1) {
Output.Write(" checked=\"");
}
__just__once__ = 1;
Output.Write("checked");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write("/>\n                                    <span>");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Filters.Label_Sort_Popularity);
Output.Write("</span>\n                                </label>\n                            </li>\n                            <li>\n                                <label for=\"SortOrder_Name\"");
{
var __just__once__ = 0;
if (selectedName) {
if (__just__once__ < 1) {
Output.Write(" class=\"");
}
__just__once__ = 1;
Output.Write("highlight");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">\n                                    <input type=\"radio\" id=\"SortOrder_Name\" name=\"SortOrder\" class=\"sort-option\" value=\"Name\"");
{
var __just__once__ = 0;
if (selectedName) {
if (__just__once__ < 1) {
Output.Write(" checked=\"");
}
__just__once__ = 1;
Output.Write("checked");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write("/>\n                                    <span>");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Filters.Label_Sort_Name);
Output.Write("</span>\n                                </label>\n                            </li>\n                            <li>\n                                <label for=\"SortOrder_Rating\"");
{
var __just__once__ = 0;
if (selectedRating) {
if (__just__once__ < 1) {
Output.Write(" class=\"");
}
__just__once__ = 1;
Output.Write("highlight");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">\n                                    <input type=\"radio\" id=\"SortOrder_Rating\" name=\"SortOrder\" class=\"sort-option\" value=\"Rating\"");
{
var __just__once__ = 0;
if (selectedRating) {
if (__just__once__ < 1) {
Output.Write(" checked=\"");
}
__just__once__ = 1;
Output.Write("checked");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write("/>\n                                    <span>");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Filters.Label_Sort_Rating);
Output.Write("</span>\n                                </label>\n                            </li>\n                        </ul>");
}
Output.Write("\n                </div>\n            </div>\n        </div>\n    </div>\n</li>");
}
Output.Write("\n        </ul>\n    </div>\n</div>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.BestRestaurantsLandingPage.Filters._Filters
