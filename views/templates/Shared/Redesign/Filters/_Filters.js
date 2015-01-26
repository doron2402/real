if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Filters) window.Spark.Shared.Redesign.Filters = {};
window.Spark.Shared.Redesign.Filters._Filters = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var filters = viewData["filters"];
var filterLocationGroup = viewData["filterLocationGroup"];
var title = viewData["title"];
var name = viewData["name"];
var param = viewData["param"];
var filterCuisine = viewData["filterCuisine"];
var selectedCount = viewData["selectedCount"];
var filterOffers = viewData["filterOffers"];
var filterGroupClass = viewData["filterGroupClass"];
var filterPrice = viewData["filterPrice"];
var selectedCount = viewData["selectedCount"];
var filterExactTime = viewData["filterExactTime"];
var filterPopOnly = viewData["filterPopOnly"];
var filterMapList = viewData["filterMapList"];
var request = viewData["request"];
var filterGroup = viewData["filterGroup"];
var title = viewData["title"];
var modalTitle = viewData["modalTitle"];
var filterGroupId = viewData["filterGroupId"];
var name = viewData["name"];
var param = viewData["param"];
var filterGroupClass = viewData["filterGroupClass"];
var selectedCount = viewData["selectedCount"];
var filter = viewData["filter"];
var filterName = viewData["filterName"];
var filterDataName = viewData["filterDataName"];
var type = viewData["type"];
function RenderViewLevel0() {
Output.Write("\n\n<div id=\"search_filters\" class=\"hide-for-small-only\">\n\t<ul class=\"filters-list\">");
if (filters.Request.PageType != PageType.TravelTimeSearch) {
{
var filterLocationGroup = filters;
Output.Write("\n");
if (filterLocationGroup.Request.IsGeoDistanceRequest) {
Output.Write("\n    <li id=\"distance_filters\" class=\"filter-option filters-menu-block\">\n    <span data-target=\"distance-filter-menu\" class=\"toggle-menu filters\">\n        ");
Output.Write(Resources.Shared.Redesign.Filters.Title_Range);
Output.Write(" <span class=\"filter-distance\"> ");
Output.Write(filterLocationGroup.Request.Distance);
Output.Write("</span> ");
Output.Write(Resources.Strings.DistanceUnit_Small);
Output.Write("\n    </span>\n    <div id=\"distance-filter-menu\" class=\"menu with-arrow\">\n        <div class=\"menu-container\">\n        <div class=\"menu-main\">\n            <div class=\"menu-header\">");
Output.Write(Resources.Shared.Redesign.Filters.Label_FilterBy_Range);
Output.Write("</div>\n            <div class=\"menu-section js-lionbars\">\n            <div class=\"menu-list\">\n                <div id=\"distance-filters\" class=\"menu-with-checkboxes\">");
for (var __iter__option in filterLocationGroup.Display.DistanceOptions) {var option=filterLocationGroup.Display.DistanceOptions[__iter__option];if(typeof(option)!='function') {
Output.Write("\n                    <label for=\"within_radius_");
Output.Write(option.Value);
Output.Write("\" class=\"menu-list-label");
if (option.IsSelected) {
Output.Write(" highlight");
}
Output.Write("\">\n                    <input type=\"radio\" id=\"within_radius_");
Output.Write(option.Value);
Output.Write("\" name=\"within_radius\" value=\"");
Output.Write(option.Value);
Output.Write("\"");
{
var __just__once__ = 0;
if (option.IsSelected) {
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
Output.Write(" data-filter-name=\"Distance\" data-id=\"");
Output.Write(option.Value);
Output.Write("\" class=\"filter menu-list-input\"/>\n                    <span>");
Output.Write(option.Text);
Output.Write("</span>\n                    </label>");
}}
Output.Write("\n                </div>\n            </div>\n            </div>\n        </div>\n        </div>\n    </div>\n    </li>");
}
else {
if ((filterLocationGroup.Request.RegionIds == null && filterLocationGroup.Request.NeighborhoodIds == null) || filterLocationGroup.Request.ParsedRegionIds.Count > 1) {
{
var filterGroup = filterLocationGroup.Filters.Regions;
var title = Resources.Shared.Redesign.Filters.Title_Regions;
var modalTitle = Resources.Shared.Redesign.Filters.Title_Regions;
var filterGroupId = "location_filters";
var name = "Regions";
var param = "RegionIds";
var filterGroupClass = "filter-option filter-option-locations";
var selectedCount = filterLocationGroup.Filters.SelectedRegionCount;
Output.Write("\n\n<li id=\"");
Output.Write(filterGroupId);
Output.Write("\" class=\"");
Output.Write(filterGroupClass);
Output.Write("\">");
if (filterGroup.Count() > 0) {
Output.Write("\n    <span data-target=\"");
Output.Write(name);
Output.Write("-filter-menu\" class=\"toggle-menu filters\">\n      ");
Output.Write(title);
Output.Write(" <span class=\"filter-count\">");
if (selectedCount > 0) {
Output.Write("\n        (");
Output.Write(selectedCount);
Output.Write(")");
}
Output.Write("\n      </span>\n    </span>\n    <div id=\"");
Output.Write(name);
Output.Write("-filter-menu\" class=\"menu with-arrow\">\n      <div class=\"menu-container\">\n        <div class=\"menu-main\">\n          <div class=\"menu-header\">");
Output.Write(modalTitle);
Output.Write("</div>\n          <div class=\"menu-section js-lionbars\">\n            <div class=\"menu-list\">\n              <div id=\"");
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
Output.Write("\n\n        <label for=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"menu-list-label");
if (filterSelected) {
Output.Write(" highlight");
}
Output.Write("\">\n            <input id=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"filter menu-list-input\" type=\"");
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
Output.Write("</span>\n        </label>\n  ");
}
}
}}
Output.Write("\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>");
}
Output.Write("\n</li>");
}
}
else {
{
var filterGroup = filterLocationGroup.Filters.Neighborhoods;
var title = Resources.Shared.Redesign.Filters.Title_Neighborhoods;
var modalTitle = Resources.Shared.Redesign.Filters.Title_Neighborhoods;
var filterGroupId = "location_filters";
var name = "Neighborhoods";
var param = "NeighborhoodIds";
var filterGroupClass = "filter-option filter-option-locations";
var selectedCount = filterLocationGroup.Filters.SelectedNeighborhoodCount;
Output.Write("\n\n<li id=\"");
Output.Write(filterGroupId);
Output.Write("\" class=\"");
Output.Write(filterGroupClass);
Output.Write("\">");
if (filterGroup.Count() > 0) {
Output.Write("\n    <span data-target=\"");
Output.Write(name);
Output.Write("-filter-menu\" class=\"toggle-menu filters\">\n      ");
Output.Write(title);
Output.Write(" <span class=\"filter-count\">");
if (selectedCount > 0) {
Output.Write("\n        (");
Output.Write(selectedCount);
Output.Write(")");
}
Output.Write("\n      </span>\n    </span>\n    <div id=\"");
Output.Write(name);
Output.Write("-filter-menu\" class=\"menu with-arrow\">\n      <div class=\"menu-container\">\n        <div class=\"menu-main\">\n          <div class=\"menu-header\">");
Output.Write(modalTitle);
Output.Write("</div>\n          <div class=\"menu-section js-lionbars\">\n            <div class=\"menu-list\">\n              <div id=\"");
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
Output.Write("\n\n        <label for=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"menu-list-label");
if (filterSelected) {
Output.Write(" highlight");
}
Output.Write("\">\n            <input id=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"filter menu-list-input\" type=\"");
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
Output.Write("</span>\n        </label>\n  ");
}
}
}}
Output.Write("\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>");
}
Output.Write("\n</li>");
}
}
}
}
}
Output.Write("\n        <li id=\"cuisine_filters\" class=\"filter-option filter-option-cuisines\">");
{
var filterCuisine = filters.Filters.Cuisines;
var selectedCount = filters.Filters.SelectedCuisineCount;
Output.Write("\n");
if (filterCuisine.Count() > 0) {
Output.Write("\n<span data-target=\"Cuisines-filter-menu\" class=\"toggle-menu filters\">\n    ");
Output.Write(Resources.Shared.Redesign.Filters.Title_Cuisines);
Output.Write(" <span class=\"filter-count\">");
if (selectedCount > 0) {
Output.Write("\n    (");
Output.Write(selectedCount);
Output.Write(")");
}
Output.Write("\n    </span>\n</span>\n<div id=\"Cuisines-filter-menu\" class=\"menu with-arrow\">\n    <div class=\"menu-container\">\n    <div class=\"menu-main\">\n        <div class=\"menu-header\">");
Output.Write(Resources.Shared.Redesign.Filters.Label_FilterBy_Cuisine);
Output.Write("</div>\n        <div class=\"menu-section js-lionbars\">\n        <div class=\"menu-list\">\n            <div id=\"Cuisines-filter-items\" class=\"menu-with-checkboxes\">");
for (var __iter__data in filterCuisine) {var data=filterCuisine[__iter__data];if(typeof(data)!='function') {
{
var filter = data;
var filterName = "CuisineIds";
var filterDataName = "CuisineIds";
var type = "checkbox";
Output.Write("\n");
{
var filterSelected = filter.IsSelected;
Output.Write("\n\n        <label for=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"menu-list-label");
if (filterSelected) {
Output.Write(" highlight");
}
Output.Write("\">\n            <input id=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"filter menu-list-input\" type=\"");
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
Output.Write("</span>\n        </label>\n  ");
}
}
}}
Output.Write("\n            </div>\n        </div>\n        </div>\n    </div>\n    </div>\n</div>");
}
}
Output.Write("\n        </li>");
if (filters.Display.ShowOffersFilter) {
Output.Write("\n        <li id=\"offer_type_filters\" class=\"filter-option filter-option-offers\">");
{
var filterOffers = filters;
var filterGroupId = "offer_type_filters";
Output.Write("\n");
var offersFilterGroup = filterOffers.Filters.OfferTypes;
var showPop = filterOffers.Display.ShowPopFilter;
var isPopSelected = showPop == true && filterOffers.Request.OnlyPopTimes != null && filterOffers.Request.OnlyPopTimes == true;
var selectedOfferCount = filterOffers.Filters.SelectedOfferTypeCount + (isPopSelected ? 1 : 0);
Output.Write("\n");
if ((offersFilterGroup != null && offersFilterGroup.Count() > 0)) {
Output.Write("\n<span data-target=\"OfferTypes-filter-menu\" class=\"toggle-menu filters\">\n");
Output.Write(Resources.Shared.Redesign.Filters.Title_OfferTypes);
Output.Write("  <span class=\"filter-count\"> ");
if (selectedOfferCount > 0) {
Output.Write("(");
Output.Write(selectedOfferCount);
Output.Write(")");
}
Output.Write("\n</span>\n</span>\n<div id=\"OfferTypes-filter-menu\" class=\"menu with-arrow\">\n<div class=\"menu-container\">\n    <div class=\"menu-main\">\n    <div class=\"menu-header\">");
Output.Write(Resources.Shared.Redesign.Filters.Label_FilterBy_OfferType);
Output.Write("</div>\n    <div class=\"menu-section js-lionbars\">\n        <div class=\"menu-list\">\n        <div id=\"OfferTypes-filter-items\" class=\"menu-with-checkboxes\">\n");
if (showPop) {
Output.Write("\n            <label for=\"pop_times\" class=\"menu-with-checkboxes menu-list-label");
if (isPopSelected) {
Output.Write(" highlight");
}
Output.Write("\">\n            <input id=\"pop_times\" type=\"checkbox\" class=\"filter checkbox menu-list-input\" data-filter-name=\"OnlyPopTimes\" data-id=\"true\"");
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
Output.Write("/>\n            <span>");
Output.Write(Resources.Shared.Redesign.Filters.Title_PopOnly);
Output.Write("</span>\n            </label>");
}
Output.Write("\n");
for (var __iter__data in offersFilterGroup) {var data=offersFilterGroup[__iter__data];if(typeof(data)!='function') {
{
var filter = data;
var filterName = "OfferTypeIds";
var filterDataName = "OfferTypeIds";
var type = "checkbox";
Output.Write("\n");
{
var filterSelected = filter.IsSelected;
Output.Write("\n\n        <label for=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"menu-list-label");
if (filterSelected) {
Output.Write(" highlight");
}
Output.Write("\">\n            <input id=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"filter menu-list-input\" type=\"");
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
Output.Write("</span>\n        </label>\n  ");
}
}
}}
Output.Write("\n        </div>\n        </div>\n    </div>\n    </div>\n</div>\n</div>");
}
}
Output.Write("\n        </li>");
}
if (filters.Display.ShowPrices) {
Output.Write("\n        <li id=\"price_band_filters\" class=\"filter-option filter-option-prices\">");
{
var filterPrice = filters.Filters.PriceBands;
var selectedCount = filters.Filters.SelectedPriceBandCount;
Output.Write("\n");
if (filterPrice.Count() > 0) {
Output.Write("\n    <span data-target=\"PriceBands-filter-menu\" class=\"toggle-menu filters\">\n        ");
Output.Write(Resources.Shared.Redesign.Filters.Title_Price);
Output.Write(" <span class=\"filter-count\">");
if (selectedCount > 0) {
Output.Write("\n            (");
Output.Write(selectedCount);
Output.Write(")");
}
Output.Write("\n        </span>\n    </span>\n    <div id=\"PriceBands-filter-menu\" class=\"menu with-arrow\">\n        <div class=\"menu-container\">\n            <div class=\"menu-main\">\n                <div class=\"menu-header\">");
Output.Write(Resources.Shared.Redesign.Filters.Label_FilterBy_Price);
Output.Write("</div>\n                <div class=\"menu-section js-lionbars\">\n                    <div class=\"menu-list\">\n                        <div id=\"PriceBands-filter-items\" class=\"menu-with-checkboxes\">");
for (var __iter__data in filterPrice) {var data=filterPrice[__iter__data];if(typeof(data)!='function') {
{
var filter = data;
var filterName = "PriceBandIds";
var filterDataName = "PriceBandIds";
var type = "checkbox";
Output.Write("\n");
{
var filterSelected = filter.IsSelected;
Output.Write("\n\n        <label for=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"menu-list-label");
if (filterSelected) {
Output.Write(" highlight");
}
Output.Write("\">\n            <input id=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"filter menu-list-input\" type=\"");
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
Output.Write("</span>\n        </label>\n  ");
}
}
}}
Output.Write("\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>");
}
}
Output.Write("\n        </li>");
}
if (filters.Display.ShowExactTimeFilter) {
Output.Write("\n        <li id=\"exact_time_filter\" class=\"filter-option-time\">");
{
var filterExactTime = filters;
Output.Write("\n\n<div class=\"checkboxes");
if (filterExactTime.Request.OnlyExactDateTime == true) {
Output.Write(" checked");
}
Output.Write("\">\n\t<input id=\"exact_time\" type=\"checkbox\" class=\"filter\" data-filter-name=\"OnlyExactDateTime\" data-id=\"true\"");
{
var __just__once__ = 0;
if (filterExactTime.Request.OnlyExactDateTime == true) {
if (__just__once__ < 1) {
Output.Write(" checked=\"");
}
__just__once__ = 1;
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write("/>\n\t<label for=\"exact_time\">");
Output.Write(string.Format(Resources.Shared.Common.Filters.Title_OnlyExactDateTime, filterExactTime.Display.SelectedTime));
Output.Write("</label>\n</div>");
}
Output.Write("\n        </li>");
}
if (filters.Display.ShowOffersFilter) {
Output.Write("\n        <li id=\"only_pop_filter\" class=\"filter-option-pop\">");
{
var filterPopOnly = filters;
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
Output.Write("\n        </li>");
}
if (filters.Display.ShowMapTab) {
Output.Write("\n        <li class=\"search-tab right\" id=\"map-list-toggle\">");
{
var filterMapList = filters.Request;
Output.Write("\n");
{
var icon = filterMapList.ShowMap == true ? "icon-list" : "icon-map" ;
var text = filterMapList.ShowMap == true ? Resources.Shared.Search.Tabs.List : Resources.Shared.Search.Tabs.Map;
Output.Write("\n<span id=\"map_list_button\" class=\"filter-button-toggle with-icon ");
Output.Write(icon);
Output.Write("\">\n    ");
Output.Write(text);
Output.Write("\n</span>");
}
}
Output.Write("\n        </li>");
}
Output.Write("\n        <li id=\"sort-filters\" class=\"filter-option right filter-option-sort-orders\">");
{
var request = filters.Request;
Output.Write("\n\n<span data-target=\"sort-filter-menu\" id=\"filter-button-toggle\" class=\"toggle-menu filter-button-toggle icon-sort with-icon\">");
Output.Write(Resources.Shared.Redesign.Strings.Label_Sort);
Output.Write("</span>\n<div id=\"sort-filter-menu\" class=\"menu with-arrow\">\n    <div class=\"menu-container\">\n        <div class=\"menu-main\">\n        <div class=\"menu-section\">\n            <div class=\"menu-list\">");
{
var selectedDistance = request.SortString == "Distance";
var selectedPopularity = request.SortString == "Popularity";
var selectedName = request.SortString == "Name";
var selectedRating = request.SortString == "Rating";
var selectedTimeDistance = request.SortString == "TimeDistance";
Output.Write("\n                    <div id=\"sort-filters\" class=\"menu-with-checkboxes\">");
if (request.IsTravelTimeRequest) {
Output.Write("\n                            <label for=\"SortOrder_TimeDistance\" class=\"menu-list-label");
if (selectedTimeDistance) {
Output.Write("  highlight");
}
Output.Write("\">\n                                <input type=\"radio\" id=\"SortOrder_TimeDistance\" name=\"SortOrder\" class=\"menu-list-input sort-option\" value=\"TimeDistance\"");
{
var __just__once__ = 0;
if (selectedTimeDistance) {
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
Output.Write("/>\n                                <span>Travel Time</span>\n                            </label>");
}
if (request.IsGeoDistanceRequest) {
Output.Write("\n                            <label for=\"SortOrder_Distance\" class=\"menu-list-label");
if (selectedDistance) {
Output.Write("  highlight");
}
Output.Write("\">\n                                <input type=\"radio\" id=\"SortOrder_Distance\" name=\"SortOrder\" class=\"menu-list-input sort-option\" value=\"Distance\"");
{
var __just__once__ = 0;
if (selectedDistance) {
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
Output.Write("/>\n                                <span>");
Output.Write(Resources.Shared.Redesign.Filters.Label_Sort_Distance);
Output.Write("</span>\n                            </label>");
}
Output.Write("\n                            <label for=\"SortOrder_Popular\" class=\"menu-list-label");
if (selectedPopularity) {
Output.Write("  highlight");
}
Output.Write("\">\n                                <input type=\"radio\" id=\"SortOrder_Popular\" name=\"SortOrder\" class=\"menu-list-input sort-option\" value=\"Popularity\"");
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
Output.Write("/>\n                                <span>");
Output.Write(Resources.Shared.Redesign.Filters.Label_Sort_Popularity);
Output.Write("</span>\n                            </label>\n                            <label for=\"SortOrder_Name\" class=\"menu-list-label");
if (selectedName) {
Output.Write("  highlight");
}
Output.Write("\">\n                                <input type=\"radio\" id=\"SortOrder_Name\" name=\"SortOrder\" class=\"menu-list-input sort-option\" value=\"Name\"");
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
Output.Write("/>\n                                <span>");
Output.Write(Resources.Shared.Redesign.Filters.Label_Sort_Name);
Output.Write("</span>\n                            </label>\n                            <label for=\"SortOrder_Rating\" class=\"menu-list-label");
if (selectedRating) {
Output.Write(" highlight");
}
Output.Write("\">\n                                <input type=\"radio\" id=\"SortOrder_Rating\" name=\"SortOrder\" class=\"menu-list-input sort-option\" value=\"Rating\"");
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
Output.Write("/>\n                                <span>");
Output.Write(Resources.Shared.Redesign.Filters.Label_Sort_Rating);
Output.Write("</span>\n                            </label>\n                    </div>");
}
Output.Write("\n            </div>\n        </div>\n        </div>\n    </div>\n</div>");
}
Output.Write("\n        </li>\n    </ul>\n</div>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Filters._Filters
