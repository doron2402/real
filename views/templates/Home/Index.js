if (!window.Spark) window.Spark = {};
if (!window.Spark.Home) window.Spark.Home = {};
window.Spark.Home.Index = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var breadCrumbs = viewData["breadCrumbs"];
var locationBar = viewData["locationBar"];
var search = viewData["search"];
var tabs = viewData["tabs"];
var filters = viewData["filters"];
var popTable = viewData["popTable"];
var resultsMap = viewData["resultsMap"];
var clearLastFilter = viewData["clearLastFilter"];
var resultsTable = viewData["resultsTable"];
var noResultsTable = viewData["noResultsTable"];
var clearLastFilter = viewData["clearLastFilter"];
var seoFooter = viewData["seoFooter"];
var locationGroup = viewData["locationGroup"];
var title = viewData["title"];
var name = viewData["name"];
var param = viewData["param"];
var filterGroup = viewData["filterGroup"];
var title = viewData["title"];
var name = viewData["name"];
var param = viewData["param"];
var booleanGroup = viewData["booleanGroup"];
var result = viewData["result"];
var request = viewData["request"];
var firstRow = viewData["firstRow"];
var lastRow = viewData["lastRow"];
var onlyPopTimes = viewData["onlyPopTimes"];
var seeAllLink = viewData["seeAllLink"];
var resultsTitle = viewData["resultsTitle"];
var minCount = viewData["minCount"];
var maxCount = viewData["maxCount"];
var resultsList = viewData["resultsList"];
var minCount = viewData["minCount"];
var maxCount = viewData["maxCount"];
var clearLastFilter = viewData["clearLastFilter"];
var availabilityLink = viewData["availabilityLink"];
var filter = viewData["filter"];
var filterName = viewData["filterName"];
var filterDataName = viewData["filterDataName"];
var type = viewData["type"];
var isDisabled = viewData["isDisabled"];
var filter = viewData["filter"];
var filterName = viewData["filterName"];
var filterDataName = viewData["filterDataName"];
var type = viewData["type"];
var isDisabled = viewData["isDisabled"];
var reviews = viewData["reviews"];
var size = viewData["size"];
var timeslots = viewData["timeslots"];
var request = viewData["request"];
var notAvailableButtonClass = viewData["notAvailableButtonClass"];
var displayOnlyPopTimes = viewData["displayOnlyPopTimes"];
var mapResult = viewData["mapResult"];
var request = viewData["request"];
var noResultsMap = viewData["noResultsMap"];
var clearLastFilter = viewData["clearLastFilter"];
function RenderViewLevel0() {
Output.Write("\n");
OutputScope('pageTitle'); {
Output.Write("\n    <title>");
Output.Write(Resources.Home.Index.PageTitle);
Output.Write("</title>");
} DisposeOutputScope();
Output.Write("\n");
OutputScope('metaDescription'); {
Output.Write("\n    <meta name=\"description\" content=\"\"/>");
} DisposeOutputScope();
Output.Write("\n");
OutputScope('cssImports'); {
Output.Write("\n  <link rel=\"stylesheet\" href=\"/s/content/css/generated/bundle_");
Output.Write(Html.CurrentTheme(Model.DomainCulture));
Output.Write("_search.css\"/>");
} DisposeOutputScope();
Output.Write("\n");
OutputScope('cssComponent'); {
Html.RenderAction("Css", "Srs", {domainCulture:Model.DomainCulture });} DisposeOutputScope();
Output.Write("\n");
OutputScope('jsComponent'); {
Html.RenderAction("Js", "Srs", {domainCulture:Model.DomainCulture });} DisposeOutputScope();
Output.Write("\n");
OutputScope('bodyClass'); {
Output.Write(Model.Request.IsAvailabilityRequest ? "availability-search" : "");
} DisposeOutputScope();
Output.Write("\n");
Html.RenderAction("Header", "Srs", {pageType:SrsPageType.OPENTABLES,domainCulture:Model.DomainCulture });Output.Write("\n\n<nav id=\"breadcrumbs\" class=\"breadcrumbs\">");
{
var breadCrumbs = Model;
Output.Write("\n\n<a href=\"/\" class=\"breadcrumb breadcrumbs-link\">");
Output.Write(Resources.Strings.DomainName);
Output.Write(" ");
Output.Write(Resources.Shared.Common.BreadCrumbs.HomeNode);
Output.Write("</a>\n<span>></span>\n");
if (breadCrumbs.Display.Metro != null) {
Output.Write("\n    <a href=\"");
Output.Write(breadCrumbs.Display.Metro.Url);
Output.Write("\" class=\"breadcrumb breadcrumbs-link\">");
Output.Write(breadCrumbs.Display.Metro.Name);
Output.Write(" ");
Output.Write(Resources.Shared.Common.BreadCrumbs.LocationNode);
Output.Write("</a>\n\t<span>></span>");
}
Output.Write("\n<span class=\"breadcrumb\">");
Output.Write(Resources.Shared.Common.BreadCrumbs.LastNode);
Output.Write("</span>");
}
Output.Write("\n</nav>\n\n<div class=\"search-container\">\n\n    <div id=\"change_location_bar\" class=\"change-location-bar\">");
{
var locationBar = Model;
Output.Write("\n\n<h1 class=\"search-location\">");
Output.Write(locationBar.Display.PageMetaData.Title);
Output.Write("</h1>\n<span class=\"change-location-link\" data-filter-name=\"Regions\" data-filter-type=\"location\" data-change-location=\"true\">");
Output.Write(Resources.Shared.Common.LocationBar.ChangeLocation);
Output.Write(" &#8250;</span>");
}
Output.Write("\n    </div>\n\n    <div id=\"search_control\" class=\"search-control labels cf\">");
{
var search = Model;
Output.Write("\n\n<i class=\"icon icon-calendar\"></i>\n<div class=\"block calendar\">\n  <label for=\"calendar\">");
Output.Write(Resources.Shared.Common.Strings.SearchLabel_Date);
Output.Write(" <span>");
Output.Write(Resources.Shared.Common.Strings.SearchLabel_DateFormat);
Output.Write("</span></label>\n  <input id=\"calendar\" class=\"search-input-field calendar\" type=\"text\" value=\"");
Output.Write(search.Display.SelectedDate);
Output.Write("\"/>\n</div>\n\n<i class=\"icon icon-clock\"></i>\n<div class=\"block time\">\n  <label for=\"time\">");
Output.Write(Resources.Shared.Common.Strings.SearchLabel_Time);
Output.Write("</label>\n  <select id=\"time\" class=\"time-dropdown\">");
for (var __iter__option in search.Display.TimeOptions) {var option=search.Display.TimeOptions[__iter__option];if(typeof(option)!='function') {
Output.Write("\n      <option value=\"");
Output.Write(option.Value);
Output.Write("\"");
{
var __just__once__ = 0;
if (option.IsSelected) {
if (__just__once__ < 1) {
Output.Write(" selected=\"");
}
__just__once__ = 1;
Output.Write("selected");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">");
Output.Write(option.Text);
Output.Write("</option>");
}}
Output.Write("\n  </select>\n</div>\n\n<i class=\"icon icon-person\"></i>\n<div class=\"block covers\">\n  <label for=\"covers\">");
Output.Write(Resources.Shared.Common.Strings.SearchLabel_Diners);
Output.Write("</label>\n  <select id=\"covers\">");
for (var __iter__option in search.Display.CoverOptions) {var option=search.Display.CoverOptions[__iter__option];if(typeof(option)!='function') {
Output.Write("\n      <option value=\"");
Output.Write(option.Value);
Output.Write("\"");
{
var __just__once__ = 0;
if (option.IsSelected) {
if (__just__once__ < 1) {
Output.Write(" selected=\"");
}
__just__once__ = 1;
Output.Write("selected");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">");
Output.Write(option.Text);
Output.Write("</option>");
}}
Output.Write("\n  </select>\n</div>\n<button id=\"find_a_table\" class=\"btn btn-search\">");
Output.Write(Resources.Shared.Common.Strings.Button_FindATable);
Output.Write("</button>\n<div class=\"validation search-control-container-validation hidden\">");
Output.Write(Resources.Shared.Common.Strings.SearchLabel_InvalidSearchMsg);
Output.Write("</div>");
}
Output.Write("\n\n        <div id=\"search_tabs\">");
{
var tabs = Model;
Output.Write("\n\n<ul class=\"search-tabs\">\n\t<li class=\"search-tab");
if (tabs.Request.ShowMap != true) {
Output.Write(" selected");
}
Output.Write("\">\n\t  <span id=\"list_tab\" class=\"tab\">\n\t\t<i class=\"icon icon-menu\"></i>");
Output.Write(Resources.Shared.Search.Tabs.List);
Output.Write("\n\t  </span>\n\t</li>\n\t<li class=\"search-tab");
if (tabs.Request.ShowMap == true) {
Output.Write(" selected");
}
Output.Write("\">\n\t\t<span id=\"map_tab\" class=\"tab\">\n\t\t\t<i class=\"icon icon-pin\"></i>");
Output.Write(Resources.Shared.Search.Tabs.Map);
Output.Write("\n\t\t</span>\n\t</li>\n</ul>");
}
Output.Write("\n        </div>\n    </div>\n\n</div>\n\n\n<div class=\"search-filters-outer\">\n    <div id=\"search_filters\" class=\"search-filters\">");
{
var filters = Model;
Output.Write("\n\n<div class=\"search-filters-header\">\n    <h3 class=\"title\">&#9660; ");
Output.Write(Resources.Shared.Common.Filters.Title);
Output.Write("</h3>\n</div>\n<div class=\"search-filters-inner cf\">\n    <div id=\"location_filters\" class=\"group\">");
{
var locationGroup = filters;
Output.Write("\n\n<ul>");
if (locationGroup.Request.IsGeoDistanceRequest) {
Output.Write("\n        <li class=\"title\">");
Output.Write(Resources.Shared.Common.Filters.Title_Within);
Output.Write("</li>\n        <li class=\"group-item\">\n            <select id=\"within_radius\" class=\"distance-dropdown\">");
for (var __iter__option in locationGroup.Display.DistanceOptions) {var option=locationGroup.Display.DistanceOptions[__iter__option];if(typeof(option)!='function') {
Output.Write("\n                    <option value=\"");
Output.Write(option.Value);
Output.Write("\"");
{
var __just__once__ = 0;
if (option.IsSelected) {
if (__just__once__ < 1) {
Output.Write(" selected=\"");
}
__just__once__ = 1;
Output.Write("selected");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">");
Output.Write(option.Text);
Output.Write("</option>");
}}
Output.Write("\n            </select>\n        </li>");
}
else {
Output.Write("\n        <li class=\"title\">");
Output.Write(Resources.Shared.Common.Filters.Title_Locations);
Output.Write("</li>\n");
for (var __iter__location in locationGroup.Filters.TopLocations) {var location=locationGroup.Filters.TopLocations[__iter__location];if(typeof(location)!='function') {
if (location.TypeString == "Region") {
{
var filter = location;
var filterName = "RegionIds";
var filterDataName = "RegionIds";
var type = "checkbox";
Output.Write("\n");
var disabled = isDisabled == "true";
Output.Write("\n\n<li class=\"group-item");
if (disabled) {
Output.Write(" disabled");
}
Output.Write("\">");
if (type != "") {
Output.Write("\n        <input id=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"filter ");
Output.Write(type);
Output.Write("\" type=\"");
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
if (filter.IsSelected) {
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
{
var __just__once__ = 0;
if (disabled) {
if (__just__once__ < 1) {
Output.Write(" disabled=\"");
}
__just__once__ = 1;
Output.Write("disabled");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">");
}
Output.Write("\n    <label for=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"label\">");
Output.Write(filter.Name);
Output.Write("</label>\n</li>");
}
}
if (location.TypeString == "Neighborhood") {
{
var filter = location;
var filterName = "NeighborhoodIds";
var filterDataName = "NeighborhoodIds";
var type = "checkbox";
Output.Write("\n");
var disabled = isDisabled == "true";
Output.Write("\n\n<li class=\"group-item");
if (disabled) {
Output.Write(" disabled");
}
Output.Write("\">");
if (type != "") {
Output.Write("\n        <input id=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"filter ");
Output.Write(type);
Output.Write("\" type=\"");
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
if (filter.IsSelected) {
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
{
var __just__once__ = 0;
if (disabled) {
if (__just__once__ < 1) {
Output.Write(" disabled=\"");
}
__just__once__ = 1;
Output.Write("disabled");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">");
}
Output.Write("\n    <label for=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"label\">");
Output.Write(filter.Name);
Output.Write("</label>\n</li>");
}
}
}}
}
Output.Write("\n");
if (locationGroup.Request.RegionIds != null || locationGroup.Request.NeighborhoodIds != null) {
Output.Write("\n        <li class=\"show-more more-link\" data-filter-name=\"Neighborhoods\" data-filter-type=\"NeighborhoodIds\" data-modal-type=\"location\">");
Output.Write(Resources.Shared.Common.Filters.MoreLink);
Output.Write(" &#8250;</li>");
}
else {
Output.Write("\n        <li class=\"show-more more-link\" data-filter-name=\"Regions\" data-filter-type=\"RegionIds\" data-modal-type=\"location\" data-change-location=\"true\">");
Output.Write(Resources.Shared.Common.Filters.MoreLink);
Output.Write(" &#8250;</li>");
}
Output.Write("\n</ul>");
}
Output.Write("\n    </div>\n\n    <div id=\"cuisine_filters\" class=\"group\">");
{
var filterGroup = filters.Filters.TopCuisines;
var title = Resources.Shared.Common.Filters.Title_Cuisines;
var name = "Cuisines";
var param = "CuisineIds";
Output.Write("\n");
if (filterGroup.Count() > 0) {
Output.Write("\n<ul>\n    <li class=\"title\">");
Output.Write(title);
Output.Write("</li>\n");
for (var __iter__data in filterGroup) {var data=filterGroup[__iter__data];if(typeof(data)!='function') {
{
var filter = data;
var filterName = param;
var filterDataName = param;
var type = "checkbox";
var isDisabled = "false";
Output.Write("\n");
var disabled = isDisabled == "true";
Output.Write("\n\n<li class=\"group-item");
if (disabled) {
Output.Write(" disabled");
}
Output.Write("\">");
if (type != "") {
Output.Write("\n        <input id=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"filter ");
Output.Write(type);
Output.Write("\" type=\"");
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
if (filter.IsSelected) {
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
{
var __just__once__ = 0;
if (disabled) {
if (__just__once__ < 1) {
Output.Write(" disabled=\"");
}
__just__once__ = 1;
Output.Write("disabled");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">");
}
Output.Write("\n    <label for=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"label\">");
Output.Write(filter.Name);
Output.Write("</label>\n</li>");
}
}}
Output.Write("\n");
if (name != "PriceBands") {
Output.Write("\n    <li class=\"show-more more-link\" data-filter-name=\"");
Output.Write(name);
Output.Write("\" data-filter-type=\"");
Output.Write(param);
Output.Write("\">");
Output.Write(Resources.Shared.Common.Filters.MoreLink);
Output.Write(" &#8250;</li>");
}
Output.Write("\n</ul>");
}
}
Output.Write("\n    </div>\n\n    <div id=\"price_band_filters\" class=\"group\">");
{
var filterGroup = filters.Filters.PriceBands;
var title = Resources.Shared.Common.Filters.Title_Price;
var name = "PriceBands";
var param = "PriceBandIds";
Output.Write("\n");
if (filterGroup.Count() > 0) {
Output.Write("\n<ul>\n    <li class=\"title\">");
Output.Write(title);
Output.Write("</li>\n");
for (var __iter__data in filterGroup) {var data=filterGroup[__iter__data];if(typeof(data)!='function') {
{
var filter = data;
var filterName = param;
var filterDataName = param;
var type = "checkbox";
var isDisabled = "false";
Output.Write("\n");
var disabled = isDisabled == "true";
Output.Write("\n\n<li class=\"group-item");
if (disabled) {
Output.Write(" disabled");
}
Output.Write("\">");
if (type != "") {
Output.Write("\n        <input id=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"filter ");
Output.Write(type);
Output.Write("\" type=\"");
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
if (filter.IsSelected) {
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
{
var __just__once__ = 0;
if (disabled) {
if (__just__once__ < 1) {
Output.Write(" disabled=\"");
}
__just__once__ = 1;
Output.Write("disabled");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">");
}
Output.Write("\n    <label for=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"label\">");
Output.Write(filter.Name);
Output.Write("</label>\n</li>");
}
}}
Output.Write("\n");
if (name != "PriceBands") {
Output.Write("\n    <li class=\"show-more more-link\" data-filter-name=\"");
Output.Write(name);
Output.Write("\" data-filter-type=\"");
Output.Write(param);
Output.Write("\">");
Output.Write(Resources.Shared.Common.Filters.MoreLink);
Output.Write(" &#8250;</li>");
}
Output.Write("\n</ul>");
}
}
Output.Write("\n    </div>\n\n    <div id=\"offer_type_filters\" class=\"group\">");
{
var filterGroup = filters.Filters.TopOfferTypes;
var title = Resources.Shared.Common.Filters.Title_OfferTypes;
var name = "OfferTypes";
var param = "OfferTypeIds";
Output.Write("\n");
if (filterGroup.Count() > 0) {
Output.Write("\n<ul>\n    <li class=\"title\">");
Output.Write(title);
Output.Write("</li>\n");
for (var __iter__data in filterGroup) {var data=filterGroup[__iter__data];if(typeof(data)!='function') {
{
var filter = data;
var filterName = param;
var filterDataName = param;
var type = "checkbox";
var isDisabled = "false";
Output.Write("\n");
var disabled = isDisabled == "true";
Output.Write("\n\n<li class=\"group-item");
if (disabled) {
Output.Write(" disabled");
}
Output.Write("\">");
if (type != "") {
Output.Write("\n        <input id=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"filter ");
Output.Write(type);
Output.Write("\" type=\"");
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
if (filter.IsSelected) {
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
{
var __just__once__ = 0;
if (disabled) {
if (__just__once__ < 1) {
Output.Write(" disabled=\"");
}
__just__once__ = 1;
Output.Write("disabled");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">");
}
Output.Write("\n    <label for=\"");
Output.Write(filterName);
Output.Write("_");
Output.Write(filter.Id);
Output.Write("\" class=\"label\">");
Output.Write(filter.Name);
Output.Write("</label>\n</li>");
}
}}
Output.Write("\n");
if (name != "PriceBands") {
Output.Write("\n    <li class=\"show-more more-link\" data-filter-name=\"");
Output.Write(name);
Output.Write("\" data-filter-type=\"");
Output.Write(param);
Output.Write("\">");
Output.Write(Resources.Shared.Common.Filters.MoreLink);
Output.Write(" &#8250;</li>");
}
Output.Write("\n</ul>");
}
}
Output.Write("\n    </div>\n\n    <div id=\"boolean_filters\" class=\"group boolean\">");
{
var booleanGroup = filters;
Output.Write("\n");
if (booleanGroup.Display.ShowExactTimeFilter) {
Output.Write("\n<ul>\n    <li class=\"group-item\">\n        <input id=\"exact_time\" type=\"checkbox\" class=\"filter checkbox\" data-filter-name=\"OnlyExactDateTime\" data-id=\"true\"");
{
var __just__once__ = 0;
if (booleanGroup.Request.OnlyExactDateTime == true) {
if (__just__once__ < 1) {
Output.Write(" checked=\"");
}
__just__once__ = 1;
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write("/>\n        <label for=\"exact_time\" class=\"label\">");
Output.Write(string.Format(Resources.Shared.Common.Filters.Title_OnlyExactDateTime, booleanGroup.Display.SelectedTime));
Output.Write("</label>\n    </li>\n</ul>");
}
Output.Write("\n");
if (booleanGroup.Display.ShowPopFilter) {
Output.Write("\n<ul>\n    <li class=\"group-item\">\n        <input id=\"pop_times\" type=\"checkbox\" class=\"filter checkbox\" data-filter-name=\"OnlyPopTimes\" data-id=\"true\"");
{
var __just__once__ = 0;
if (booleanGroup.Request.OnlyPopTimes == true) {
if (__just__once__ < 1) {
Output.Write(" checked=\"");
}
__just__once__ = 1;
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write("/>\n        <label for=\"pop_times\" class=\"label\">");
Output.Write(Resources.Shared.Common.Filters.Title_PopOnly);
Output.Write("</label>\n    </li>\n</ul>");
}
}
Output.Write("\n    </div>\n</div>");
}
Output.Write("\n    </div>\n</div>\n\n<div id=\"search_results_container\" class=\"search-results-container cf\">\n    <div id=\"search_results_pop\" class=\"results-set results-table pop-table\" data-name=\"PopTable\">");
if (Model.Request.ShowMap != true) {
{
var popTable = Model;
Output.Write("\n");
var showSeeMoreLink = popTable.Results.TotalPop > 6;
Output.Write("\n");
if (popTable.Results.FeaturedPopRestaurants.Count() > 0 && (popTable.Request.OnlyPopTimes == null || popTable.Request.OnlyPopTimes == false) && (popTable.Request.OnlyUnavailable != true)) {
Output.Write("\n    <div class=\"results-list-header\">\n      <h2 class=\"title\">");
{
if (popTable.Results.Total == 1) {
Output.Write("\n    ");
Output.Write(string.Format(Resources.Shared.Common.Results.FeaturedPopTitle, popTable.Results.Total));
}
else {
Output.Write("\n    ");
Output.Write(string.Format(Resources.Shared.Common.Results.FeaturedPopTitle_Plural, popTable.Results.Total));
}
Output.Write("\n\n<a href=\"/popups/rewardsbrief.aspx\" id=\"whats_this\" class=\"link\">what's this?</a>");
}
Output.Write("</h2>\n    </div>\n\n    <table class=\"table\">\n        <tbody>");
var restaurantIndex=0;for (var __iter__restaurant in popTable.Results.FeaturedPopRestaurants) {var restaurant=popTable.Results.FeaturedPopRestaurants[__iter__restaurant];if(typeof(restaurant)!='function') {
{
var result = restaurant;
var request = popTable.Request;
var firstRow = restaurantIndex == 0;
var lastRow = restaurantIndex == popTable.Results.TotalPop - 1;
var index = restaurantIndex;
var onlyPopTimes = true;
Output.Write("\n");
var distance = request.ParsedTests.Contains("showdistanceinresults") && request.SortString == "Distance" && request.IsGeoDistanceRequest == true ? string.Format("{0} {1} - ", result.Distance, Resources.Strings.DistanceUnit_Small) : "";
Output.Write("\n\n<tr class=\"result");
if (firstRow) {
Output.Write(" first-row");
}
if (lastRow) {
Output.Write(" last-row");
}
Output.Write("\" data-id=\"");
Output.Write(index);
Output.Write("\" data-rid=\"");
Output.Write(result.Id);
Output.Write("\">\n  <td class=\"cell first-cell\">");
if (request.ParsedTests.Contains("showrestaurantimages")) {
Output.Write("\n      <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("\" class=\"rest-image\">\n        <img src=\"/s/content/images/1x1.gif\" data-src=\"/img/restimages/x4/");
Output.Write(result.Id);
Output.Write(".jpg\" width=\"52\" height=\"56\" class=\"lazy\">\n      </a>");
}
Output.Write("\n    <div class=\"rest-content\">\n      <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("\" class=\"rest-name\">");
Output.Write(result.Name);
Output.Write("</a>\n      <div>");
Output.Write(distance);
Output.Write(result.Location);
Output.Write(" | ");
Output.Write(result.Cuisine);
Output.Write("</div>");
if (result.Offers.Count() > 0) {
Output.Write("\n        <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("\" class=\"offer\" data-id=\"");
Output.Write(result.Offers[0].Id);
Output.Write("\">");
Output.Write(result.Offers[0].Name);
Output.Write("</a>");
if (result.Offers.Count() > 1) {
Output.Write("\n          <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("\" class=\"offer\" data-id=\"see-more\">");
Output.Write(Resources.Shared.Common.Results.SeeAllOffers);
Output.Write("</a>");
}
}
Output.Write("\n    </div>\n  </td>\n  <td class=\"cell ratings-col\">");
{
var reviews = result;
var size = "small";
Output.Write("\n");
if (reviews.Reviews.Total > 0) {
Output.Write("\n");
var reviewTotal = reviews.Reviews.Rating;
var starSize = string.Format("star-rating-{0}", size);
var starTitle = string.Format(reviewTotal == 1 ? Resources.Strings.StarRatingText : Resources.Strings.StarRatingText_Plural, reviewTotal);
Output.Write("\n\n  <a href=\"");
Output.Write(reviews.ProfileUri);
Output.Write("&tab=2\" class=\"star-rating-container ");
Output.Write(starSize);
Output.Write("\" title=\"");
Output.Write(starTitle);
Output.Write("\">\n    <span class=\"stars stars-blank\">\n      <span class=\"stars stars-filled s");
Output.Write(reviews.Reviews.RatingClass);
Output.Write("\"></span>\n    </span>\n    <span class=\"reviews\">");
if (reviews.Reviews.Total == 1) {
Output.Write("\n        ");
Output.Write(string.Format(Resources.Shared.Common.Results.Reviews, reviews.Reviews.Total));
}
else {
Output.Write("\n        ");
Output.Write(string.Format(Resources.Shared.Common.Results.Reviews_Plural, reviews.Reviews.Total));
}
Output.Write("\n    </span>\n  </a>");
}
else {
Output.Write("\n  <span class=\"star-rating-container\">");
Output.Write(Resources.Shared.Common.Results.ReviewsComingSoon);
Output.Write("</span>");
}
}
Output.Write("\n  </td>\n  <td class=\"cell price-col\">\n    <span class=\"price\">");
Output.Write(result.PriceBand.ShortName);
Output.Write("</span>\n  </td>\n  <td class=\"cell last-cell availability-col\">");
{
var timeslots = result;
var notAvailableButtonClass = "btn-thin";
var displayOnlyPopTimes = onlyPopTimes;
Output.Write("\n");
if (request.OnlyUnavailable == true) {
Output.Write("\n  <p class=\"not-available-message\">");
Output.Write(timeslots.UnAvailMsg);
Output.Write("</p>");
if (!string.IsNullOrEmpty(timeslots.NextAvailUri)) {
Output.Write("\n  <a href=\"/nextavailabletable.aspx");
Output.Write(timeslots.NextAvailUri);
Output.Write("\" class=\"btn btn-search ");
Output.Write(notAvailableButtonClass);
Output.Write("\">");
Output.Write(Resources.Shared.Common.Results.NextAvailableButton);
Output.Write("</a>");
}
}
Output.Write("\n");
if (request.IsAvailabilityRequest == true && request.OnlyUnavailable != true) {
Output.Write("\n  <div class=\"timeslots cf\">");
for (var __iter__timeSlot in timeslots.TimeSlots) {var timeSlot=timeslots.TimeSlots[__iter__timeSlot];if(typeof(timeSlot)!='function') {
Output.Write("\n    <li class=\"timeslot");
if (timeSlot.IsExact) {
Output.Write(" exact");
}
Output.Write("\" data-offers=\"");
Output.Write(timeSlot.OfferIds != null ? string.Join(",", timeSlot.OfferIds) : "");
Output.Write("\" data-rid=\"");
Output.Write(timeslots.Id);
Output.Write("\">");
var timeslotDisabled = !timeSlot.IsAvail || (displayOnlyPopTimes && !timeSlot.HasPop);
var isExact = timeSlot.IsExact;
var timeFormat = isExact ? Resources.Strings.TimeFormat : Resources.Strings.TimeFormat.Replace("tt", "");
var cultureUrlSegment = request.CultureInUrlRoute == null ? "" : "/" + request.CultureInUrlRoute;
Output.Write("\n      ");
if (timeslotDisabled) {
Output.Write("\n      <span class=\"time disabled");
if (isExact) {
Output.Write(" exact");
}
Output.Write("\"></span>");
}
if (!timeslotDisabled) {
Output.Write("\n      <a href=\"");
Output.Write(string.Format("{6}/httphandlers/ValidateReservationRequest.ashx?rid={0}&d={2}&p={1}&pt={5}&i=1&ss=0&sd={2}&pofids={3}&checksum={4}", timeslots.Id, request.Covers, timeSlot.LinkString, string.Join(",", timeSlot.OfferIds), timeSlot.CheckSum, timeSlot.HasPop ? "1000" : "100", cultureUrlSegment));
Output.Write("\" class=\"timeslot-link\">\n\n        <span class=\"time\">");
{
var time = timeSlot.TimeString;
Output.Write("\n          ");
Output.Write(time);
if (timeSlot.OfferIds.Count() > 0) {
Output.Write("\n          <span class=\"offer\"></span>");
}
}
Output.Write("\n      </span>\n");
if (timeSlot.HasPop) {
Output.Write("\n      <span class=\"pts\">");
Output.Write(Resources.Shared.Common.Results.Timeslot1000Points);
Output.Write("</span>");
}
Output.Write("\n      </a>");
}
Output.Write("\n    </li>");
}}
Output.Write("\n  </div>");
}
}
Output.Write("\n  </td>\n</tr>");
}
++restaurantIndex;}}
Output.Write("\n");
if (showSeeMoreLink) {
Output.Write("\n            <tr class=\"last-row see-all-link\">\n              <td colspan=\"4\" class=\"first-cell last-cell\">");
{
var seeAllLink = popTable.Results;
Output.Write("\n\n<a href=\"#\" id=\"pop_see_all_link\" class=\"link\">See all ");
Output.Write(seeAllLink.TotalPop);
Output.Write(" restaurants with 1,000-Point times ></a>");
}
Output.Write("</td>\n            </tr>");
}
Output.Write("\n        </tbody>\n    </table>");
}
}
}
Output.Write("\n    </div>\n\n    <div id=\"search_results_map\" class=\"results-set results-map search-results\" data-name=\"ResultsMap\">");
if (Model.Request.ShowMap == true) {
{
var resultsMap = Model;
var count = 0;
var clearLastFilter = false;
Output.Write("\n\n<div class=\"results-list-header\">\n    <h2 class=\"title\">");
{
var resultsTitle = resultsMap;
Output.Write("\n");
if (resultsTitle.Request.ParsedTests.Contains("sortbyinresultstitle") || resultsTitle.Request.ParsedTests.Contains("showpopularitysortoption")) {
{
var sortName = resultsTitle.Request.SortString;
Output.Write("\n    <div class=\"sort-buttons\">\n        <span class=\"label\">");
Output.Write(Resources.Shared.Common.Results.Header_Sorted_by);
Output.Write("</span>");
if (resultsTitle.Request.IsGeoDistanceRequest == true) {
Output.Write("\n            <span class=\"header-cell-link sort-link");
if (sortName == "Distance") {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"Distance\">");
Output.Write(Resources.Shared.Common.Results.Header_Distance);
Output.Write("</span>");
}
if (resultsTitle.Request.ParsedTests.Contains("showpopularitysortoption")) {
Output.Write("\n            <span class=\"header-cell-link sort-link");
if (sortName == "Popularity") {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"Popularity\">");
Output.Write(Resources.Shared.Common.Results.Header_Popularity);
Output.Write("</span>");
}
Output.Write("\n        <span class=\"header-cell-link sort-link");
if (sortName == "Name") {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"Name\">");
Output.Write(Resources.Shared.Common.Results.Header_Name_Short);
Output.Write("</span>\n        <span class=\"header-cell-link sort-link");
if (sortName == "Neighborhood") {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"Neighborhood\">");
Output.Write(Resources.Shared.Common.Results.Header_Area);
Output.Write("</span>\n        <span class=\"header-cell-link sort-link");
if (sortName == "Rating" || (!resultsTitle.Request.ParsedTests.Contains("showpopularitysortoption") && sortName == "BayesianAverage")) {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"Rating\">");
Output.Write(Resources.Shared.Common.Results.Header_Ratings);
Output.Write("</span>\n        <span class=\"header-cell-link sort-link");
if (sortName == "PriceBand") {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"PriceBand\">");
Output.Write(Resources.Shared.Common.Results.Header_Price);
Output.Write("</span>\n    </div>");
}
}
Output.Write("\n");
if (resultsTitle.Results.Total == 1) {
{
var searchTitle = resultsTitle.Request.OnlyPopTimes == true ? Resources.Shared.Common.Results.PopTitle : resultsTitle.Request.OnlyUnavailable == true ? Resources.Shared.Common.Results.Title_NoAvailability : Resources.Shared.Common.Results.Title_Availability;
Output.Write("\n        ");
Output.Write(string.Format(searchTitle, resultsTitle.Results.TotalAvailable));
}
}
else {
{
var searchTitle = resultsTitle.Request.OnlyPopTimes == true ? Resources.Shared.Common.Results.PopTitle_Plural : resultsTitle.Request.OnlyUnavailable == true ? Resources.Shared.Common.Results.Title_NoAvailability_Plural : Resources.Shared.Common.Results.Title_Availability_Plural;
Output.Write("\n        ");
Output.Write(string.Format(searchTitle, resultsTitle.Results.TotalAvailable));
}
}
}
Output.Write("\n    </h2>\n</div>\n\n<div class=\"map-navigation\">");
{
Output.Write("<div class=\"map-controls\">\n    <a href=\"#\" class=\"prev\">&#60;&#60; ");
Output.Write(Resources.Shared.Search.Map.Navigation_Previous);
Output.Write("</a>\n    <a href=\"#\" class=\"next\">");
Output.Write(Resources.Shared.Search.Map.Navigation_Next);
Output.Write(" &#62;&#62;</a>\n</div>");
}
Output.Write("\n    <span class=\"map-title\">");
{
var minCount = 0;
var maxCount = resultsMap.Results.Total > 30 ? 30 : resultsMap.Results.Total;
Output.Write("\n");
if (minCount == 0) {
Output.Write("\n    ");
Output.Write(string.Format(Resources.Shared.Search.Map.Title, maxCount));
}
else {
Output.Write("\n    ");
Output.Write(string.Format(Resources.Shared.Search.Map.Title_Between, minCount, maxCount));
}
}
Output.Write("\n    </span>\n</div>\n\n<div class=\"map-container cf\">\n    <div class=\"map-results\">\n        <div id=\"map_results_list\" class=\"results-list\">");
{
var resultsList = resultsMap;
var minCount = 0;
var maxCount = 30;
Output.Write("\n");
if (resultsList.Results.Total > 0) {
var restaurantIndex=0;for (var __iter__restaurant in resultsList.Results.Restaurants) {var restaurant=resultsList.Results.Restaurants[__iter__restaurant];if(typeof(restaurant)!='function') {
if (restaurantIndex >= minCount && restaurantIndex < maxCount) {
{
var mapResult = restaurant;
var request = resultsList.Request;
Output.Write("\n");
var distance = request.IsGeoDistanceRequest == true ? string.Format("{0} {1}", mapResult.Distance, Resources.Strings.DistanceUnit_Small) : "";
Output.Write("\n\n<div class=\"result\" data-id=\"");
Output.Write(restaurantIndex);
Output.Write("\">\n");
if (request.ParsedTests.Contains("showrestaurantimages")) {
Output.Write("\n      <a href=\"");
Output.Write(mapResult.ProfileUri);
Output.Write("\" class=\"rest-image\">\n        <img src=\"/s/content/images/1x1.gif\" data-src=\"/img/restimages/x4/");
Output.Write(mapResult.Id);
Output.Write(".jpg\" width=\"52\" height=\"56\" class=\"lazy\">\n      </a>");
}
Output.Write("\n    <div class=\"rest-content\">\n        <i class=\"icon icon-pin--small\"></i>\n        <a href=\"");
Output.Write(mapResult.ProfileUri);
Output.Write("\" class=\"rest-name\">");
Output.Write(mapResult.Name);
Output.Write("</a>\n        <span class=\"distance\">");
Output.Write(distance);
Output.Write("</span>");
{
var reviews = mapResult;
var size = "small";
Output.Write("\n");
if (reviews.Reviews.Total > 0) {
Output.Write("\n");
var reviewTotal = reviews.Reviews.Rating;
var starSize = string.Format("star-rating-{0}", size);
var starTitle = string.Format(reviewTotal == 1 ? Resources.Strings.StarRatingText : Resources.Strings.StarRatingText_Plural, reviewTotal);
Output.Write("\n\n  <a href=\"");
Output.Write(reviews.ProfileUri);
Output.Write("&tab=2\" class=\"star-rating-container ");
Output.Write(starSize);
Output.Write("\" title=\"");
Output.Write(starTitle);
Output.Write("\">\n    <span class=\"stars stars-blank\">\n      <span class=\"stars stars-filled s");
Output.Write(reviews.Reviews.RatingClass);
Output.Write("\"></span>\n    </span>\n    <span class=\"reviews\">");
if (reviews.Reviews.Total == 1) {
Output.Write("\n        ");
Output.Write(string.Format(Resources.Shared.Common.Results.Reviews, reviews.Reviews.Total));
}
else {
Output.Write("\n        ");
Output.Write(string.Format(Resources.Shared.Common.Results.Reviews_Plural, reviews.Reviews.Total));
}
Output.Write("\n    </span>\n  </a>");
}
else {
Output.Write("\n  <span class=\"star-rating-container\">");
Output.Write(Resources.Shared.Common.Results.ReviewsComingSoon);
Output.Write("</span>");
}
}
Output.Write("\n    </div>\n");
{
var timeslots = mapResult;
var notAvailableButtonClass = "btn-thin";
var displayOnlyPopTimes = request.OnlyPopTimes == true;
Output.Write("\n");
if (request.OnlyUnavailable == true) {
Output.Write("\n  <p class=\"not-available-message\">");
Output.Write(timeslots.UnAvailMsg);
Output.Write("</p>");
if (!string.IsNullOrEmpty(timeslots.NextAvailUri)) {
Output.Write("\n  <a href=\"/nextavailabletable.aspx");
Output.Write(timeslots.NextAvailUri);
Output.Write("\" class=\"btn btn-search ");
Output.Write(notAvailableButtonClass);
Output.Write("\">");
Output.Write(Resources.Shared.Common.Results.NextAvailableButton);
Output.Write("</a>");
}
}
Output.Write("\n");
if (request.IsAvailabilityRequest == true && request.OnlyUnavailable != true) {
Output.Write("\n  <div class=\"timeslots cf\">");
for (var __iter__timeSlot in timeslots.TimeSlots) {var timeSlot=timeslots.TimeSlots[__iter__timeSlot];if(typeof(timeSlot)!='function') {
Output.Write("\n    <li class=\"timeslot");
if (timeSlot.IsExact) {
Output.Write(" exact");
}
Output.Write("\" data-offers=\"");
Output.Write(timeSlot.OfferIds != null ? string.Join(",", timeSlot.OfferIds) : "");
Output.Write("\" data-rid=\"");
Output.Write(timeslots.Id);
Output.Write("\">");
var timeslotDisabled = !timeSlot.IsAvail || (displayOnlyPopTimes && !timeSlot.HasPop);
var isExact = timeSlot.IsExact;
var timeFormat = isExact ? Resources.Strings.TimeFormat : Resources.Strings.TimeFormat.Replace("tt", "");
var cultureUrlSegment = request.CultureInUrlRoute == null ? "" : "/" + request.CultureInUrlRoute;
Output.Write("\n      ");
if (timeslotDisabled) {
Output.Write("\n      <span class=\"time disabled");
if (isExact) {
Output.Write(" exact");
}
Output.Write("\"></span>");
}
if (!timeslotDisabled) {
Output.Write("\n      <a href=\"");
Output.Write(string.Format("{6}/httphandlers/ValidateReservationRequest.ashx?rid={0}&d={2}&p={1}&pt={5}&i=1&ss=0&sd={2}&pofids={3}&checksum={4}", timeslots.Id, request.Covers, timeSlot.LinkString, string.Join(",", timeSlot.OfferIds), timeSlot.CheckSum, timeSlot.HasPop ? "1000" : "100", cultureUrlSegment));
Output.Write("\" class=\"timeslot-link\">\n\n        <span class=\"time\">");
{
var time = timeSlot.TimeString;
Output.Write("\n          ");
Output.Write(time);
if (timeSlot.OfferIds.Count() > 0) {
Output.Write("\n          <span class=\"offer\"></span>");
}
}
Output.Write("\n      </span>\n");
if (timeSlot.HasPop) {
Output.Write("\n      <span class=\"pts\">");
Output.Write(Resources.Shared.Common.Results.Timeslot1000Points);
Output.Write("</span>");
}
Output.Write("\n      </a>");
}
Output.Write("\n    </li>");
}}
Output.Write("\n  </div>");
}
}
Output.Write("\n</div>");
}
}
++restaurantIndex;}}
{
var availabilityLink = resultsList;
Output.Write("\n");
if (availabilityLink.Request.IsAvailabilityRequest && availabilityLink.Results.TotalUnavailable > 0) {
Output.Write("\n");
if (availabilityLink.Request.OnlyUnavailable == true) {
var linkText = string.Format(availabilityLink.Results.TotalAvailable == 1 ? Resources.Shared.Common.Results.WithAvailabilityLink : Resources.Shared.Common.Results.WithAvailabilityLink_Plural, availabilityLink.Results.TotalAvailable);
Output.Write("\n\n        <a href=\"#\" id=\"availability_link\" class=\"availability-link\">");
Output.Write(linkText);
Output.Write("</a>");
}
else {
var linkText = string.Format(availabilityLink.Results.TotalUnavailable == 1 ? Resources.Shared.Common.Results.WithNoAvailabilityLink : Resources.Shared.Common.Results.WithNoAvailabilityLink_Plural, availabilityLink.Results.TotalUnavailable);
Output.Write("\n\n        <a href=\"#\" id=\"availability_link\" class=\"availability-link with-availability\">");
Output.Write(linkText);
Output.Write("</a>");
}
Output.Write("\n");
}
}
}
else {
{
var noResultsMap = resultsList;
Output.Write("\n\n<div class=\"map-no-results\">\n\n    <h2>We did not find a match for your search</h2>\n\n    <div class=\"block\">\n        <p class=\"no-result-message\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_NoMatch_Message);
Output.Write("</p>\n");
if (clearLastFilter == true) {
Output.Write("\n            <button id=\"clear_last_filter\" class=\"btn btn-thin btn-search\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_UndoLastFilterButton);
Output.Write("</button>");
}
Output.Write("\n");
if (clearLastFilter == true && noResultsMap.Display.Metro.Id != null) {
Output.Write("\n            <span class=\"or\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_Or);
Output.Write("</span>");
}
Output.Write("\n");
if (noResultsMap.Display.Metro.Id != null) {
Output.Write("\n            <button id=\"start_over\" class=\"btn btn-thin btn-search\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_StartOverButton);
Output.Write("</button>");
}
Output.Write("\n    </div>\n\n    <h2>Other suggestions</h2>\n\n    <div class=\"block\">");
if (noResultsMap.Request.IsGeoDistanceRequest != true) {
Output.Write("\n        <p class=\"no-result-message\"><a href=\"/rest_list.aspx?m=");
Output.Write(noResultsMap.Request.MetroId);
Output.Write("\" class=\"link\">");
Output.Write(string.Format(Resources.Shared.Search.Strings.NoSearchResults_MetroListLink, noResultsMap.Display.Metro.Name));
Output.Write("</a></p>");
}
Output.Write("\n        <p class=\"no-result-message\"><a href=\"/\" class=\"link\">");
Output.Write(string.Format(Resources.Shared.Search.Strings.NoSearchResults_MetroLink, noResultsMap.Display.Metro.Name));
Output.Write("</a></p>\n        <p class=\"no-result-message italic\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_OtherSuggestionsMessage);
Output.Write("</p>\n    </div>\n\n</div>");
}
}
}
Output.Write("\n        </div>\n    </div>\n    <div id=\"results_map\" class=\"map-placeholder\"></div>\n</div>\n");
{
Output.Write("<div class=\"map-controls\">\n    <a href=\"#\" class=\"prev\">&#60;&#60; ");
Output.Write(Resources.Shared.Search.Map.Navigation_Previous);
Output.Write("</a>\n    <a href=\"#\" class=\"next\">");
Output.Write(Resources.Shared.Search.Map.Navigation_Next);
Output.Write(" &#62;&#62;</a>\n</div>");
}
Output.Write("\n");
}
}
Output.Write("\n    </div>\n\n    <div id=\"search_results\" class=\"results-set results-table search-results\" data-name=\"ResultsTable\">");
if (Model.Request.ShowMap != true) {
if (Model.Results.Total > 0) {
{
var resultsTable = Model;
Output.Write("\n\n<div class=\"results-list-header\">\n    <h2 class=\"title\">");
{
var resultsTitle = resultsTable;
Output.Write("\n");
if (resultsTitle.Request.ParsedTests.Contains("sortbyinresultstitle") || resultsTitle.Request.ParsedTests.Contains("showpopularitysortoption")) {
{
var sortName = resultsTitle.Request.SortString;
Output.Write("\n    <div class=\"sort-buttons\">\n        <span class=\"label\">");
Output.Write(Resources.Shared.Common.Results.Header_Sorted_by);
Output.Write("</span>");
if (resultsTitle.Request.IsGeoDistanceRequest == true) {
Output.Write("\n            <span class=\"header-cell-link sort-link");
if (sortName == "Distance") {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"Distance\">");
Output.Write(Resources.Shared.Common.Results.Header_Distance);
Output.Write("</span>");
}
if (resultsTitle.Request.ParsedTests.Contains("showpopularitysortoption")) {
Output.Write("\n            <span class=\"header-cell-link sort-link");
if (sortName == "Popularity") {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"Popularity\">");
Output.Write(Resources.Shared.Common.Results.Header_Popularity);
Output.Write("</span>");
}
Output.Write("\n        <span class=\"header-cell-link sort-link");
if (sortName == "Name") {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"Name\">");
Output.Write(Resources.Shared.Common.Results.Header_Name_Short);
Output.Write("</span>\n        <span class=\"header-cell-link sort-link");
if (sortName == "Neighborhood") {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"Neighborhood\">");
Output.Write(Resources.Shared.Common.Results.Header_Area);
Output.Write("</span>\n        <span class=\"header-cell-link sort-link");
if (sortName == "Rating" || (!resultsTitle.Request.ParsedTests.Contains("showpopularitysortoption") && sortName == "BayesianAverage")) {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"Rating\">");
Output.Write(Resources.Shared.Common.Results.Header_Ratings);
Output.Write("</span>\n        <span class=\"header-cell-link sort-link");
if (sortName == "PriceBand") {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"PriceBand\">");
Output.Write(Resources.Shared.Common.Results.Header_Price);
Output.Write("</span>\n    </div>");
}
}
Output.Write("\n");
if (resultsTitle.Results.Total == 1) {
{
var searchTitle = resultsTitle.Request.OnlyPopTimes == true ? Resources.Shared.Common.Results.PopTitle : resultsTitle.Request.OnlyUnavailable == true ? Resources.Shared.Common.Results.Title_NoAvailability : Resources.Shared.Common.Results.Title_Availability;
Output.Write("\n        ");
Output.Write(string.Format(searchTitle, resultsTitle.Results.TotalAvailable));
}
}
else {
{
var searchTitle = resultsTitle.Request.OnlyPopTimes == true ? Resources.Shared.Common.Results.PopTitle_Plural : resultsTitle.Request.OnlyUnavailable == true ? Resources.Shared.Common.Results.Title_NoAvailability_Plural : Resources.Shared.Common.Results.Title_Availability_Plural;
Output.Write("\n        ");
Output.Write(string.Format(searchTitle, resultsTitle.Results.TotalAvailable));
}
}
}
Output.Write("\n    </h2>\n");
{
{
var filtersAreApplied = resultsTable.Request.RegionIds != null || resultsTable.Request.NeighborhoodIds != null || resultsTable.Request.IsGeoDistanceRequest || resultsTable.Request.CuisineIds != null || resultsTable.Request.PriceBandIds != null || resultsTable.Request.OfferTypeIds != null || resultsTable.Request.OnlyOffers == true || resultsTable.Request.OnlyExactDateTime == true || resultsTable.Request.OnlyPopTimes == true;
Output.Write("\n");
if (filtersAreApplied == true) {
Output.Write("\n    <div class=\"applied-filters\">\n\n        <span>");
Output.Write(Resources.Shared.Search.Results.FilteredBy);
Output.Write("</span>\n");
{
var isLocationSearch = resultsTable.Request.RegionIds != null || resultsTable.Request.NeighborhoodIds != null || resultsTable.Request.IsGeoDistanceRequest;
Output.Write("\n");
if (isLocationSearch == true) {
Output.Write("\n            <span class=\"applied-filter\">");
Output.Write(Resources.Shared.Search.Results.FilteredBy_Location);
Output.Write("<i class=\"close icon icon-close\" data-filter=\"Locations\"></i></span>");
}
if (resultsTable.Request.CuisineIds != null) {
Output.Write("\n            <span class=\"applied-filter\">");
Output.Write(Resources.Shared.Search.Results.FilteredBy_Cuisine);
Output.Write("<i class=\"close icon icon-close\" data-filter=\"CuisineIds\"></i></span>");
}
if (resultsTable.Request.PriceBandIds != null) {
Output.Write("\n            <span class=\"applied-filter\">");
Output.Write(Resources.Shared.Search.Results.FilteredBy_Price);
Output.Write("<i class=\"close icon icon-close\" data-filter=\"PriceBandIds\"></i></span>");
}
if (resultsTable.Request.OfferTypeIds != null || resultsTable.Request.OnlyOffers == true) {
Output.Write("\n            <span class=\"applied-filter\">");
Output.Write(Resources.Shared.Search.Results.FilteredBy_OfferType);
Output.Write("<i class=\"close icon icon-close\" data-filter=\"OfferTypeIds\"></i></span>");
}
if (resultsTable.Request.OnlyExactDateTime == true) {
Output.Write("\n            <span class=\"applied-filter\">");
Output.Write(string.Format(Resources.Shared.Search.Results.FilteredBy_OnlyExactDateTime, resultsTable.Display.SelectedTime));
Output.Write("<i class=\"close icon icon-close\" data-filter=\"OnlyExactDateTime\"></i></span>");
}
if (resultsTable.Request.OnlyPopTimes == true) {
Output.Write("\n            <span class=\"applied-filter\">");
Output.Write(Resources.Shared.Search.Results.FilteredBy_PopOnly);
Output.Write("<i class=\"close icon icon-close\" data-filter=\"OnlyPopTimes\"></i></span>");
}
Output.Write("\n");
}
Output.Write("\n\n    </div>");
}
Output.Write("\n");
}
}
Output.Write("\n</div>\n\n<table id=\"search_results_table\" class=\"table\">\n");
if (!resultsTable.Request.ParsedTests.Contains("sortbyinresultstitle") && !resultsTable.Request.ParsedTests.Contains("showpopularitysortoption")) {
{
{
var sortName = resultsTable.Request.SortString;
Output.Write("\n\n<thead>\n    <tr class=\"table-header\">\n        <td class=\"cell first-cell header-cell\">\n            <a href=\"#\" class=\"header-cell-link sort-link");
if (sortName == "Name") {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"Name\">");
Output.Write(Resources.Shared.Common.Results.Header_Name);
Output.Write("</a> /\n            <a href=\"#\" class=\"header-cell-link sort-link");
if (sortName == "Neighborhood") {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"Neighborhood\">");
Output.Write(Resources.Shared.Common.Results.Header_Area);
Output.Write("</a>\n        </td>\n        <td class=\"cell header-cell rating-header\">\n            <a href=\"#\" class=\"header-cell-link sort-link");
if (sortName == "Rating" || sortName == "BayesianAverage") {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"Rating\">");
Output.Write(Resources.Shared.Common.Results.Header_Ratings);
Output.Write("</a>\n        </td>\n        <td class=\"cell header-cell price-header\">\n            <a href=\"#\" class=\"header-cell-link sort-link");
if (sortName == "PriceBand") {
Output.Write(" sorted");
}
Output.Write("\" data-sort-name=\"PriceBand\">");
Output.Write(Resources.Shared.Common.Results.Header_Price);
Output.Write("</a>\n        </td>\n        <td class=\"cell last-cell header-cell availability-header\">");
Output.Write(Resources.Shared.Common.Results.Header_Availability);
Output.Write("</td>\n    </tr>\n</thead>\n");
}
}
}
else {
Output.Write("\n        <thead>\n            <tr class=\"row-fill\"><td colspan=\"4\"></td></tr>\n        </thead>");
}
Output.Write("\n\n    <tbody>");
var restaurantIndex=0;for (var __iter__restaurant in resultsTable.Results.Restaurants) {var restaurant=resultsTable.Results.Restaurants[__iter__restaurant];if(typeof(restaurant)!='function') {
{
var result = restaurant;
var request = resultsTable.Request;
var firstRow = restaurantIndex == 0;
var lastRow = restaurantIndex == resultsTable.Results.Restaurants.Count()-1;
var index = restaurantIndex;
var onlyPopTimes = resultsTable.Request.OnlyPopTimes == true;
Output.Write("\n");
var distance = request.ParsedTests.Contains("showdistanceinresults") && request.SortString == "Distance" && request.IsGeoDistanceRequest == true ? string.Format("{0} {1} - ", result.Distance, Resources.Strings.DistanceUnit_Small) : "";
Output.Write("\n\n<tr class=\"result");
if (firstRow) {
Output.Write(" first-row");
}
if (lastRow) {
Output.Write(" last-row");
}
Output.Write("\" data-id=\"");
Output.Write(index);
Output.Write("\" data-rid=\"");
Output.Write(result.Id);
Output.Write("\">\n  <td class=\"cell first-cell\">");
if (request.ParsedTests.Contains("showrestaurantimages")) {
Output.Write("\n      <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("\" class=\"rest-image\">\n        <img src=\"/s/content/images/1x1.gif\" data-src=\"/img/restimages/x4/");
Output.Write(result.Id);
Output.Write(".jpg\" width=\"52\" height=\"56\" class=\"lazy\">\n      </a>");
}
Output.Write("\n    <div class=\"rest-content\">\n      <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("\" class=\"rest-name\">");
Output.Write(result.Name);
Output.Write("</a>\n      <div>");
Output.Write(distance);
Output.Write(result.Location);
Output.Write(" | ");
Output.Write(result.Cuisine);
Output.Write("</div>");
if (result.Offers.Count() > 0) {
Output.Write("\n        <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("\" class=\"offer\" data-id=\"");
Output.Write(result.Offers[0].Id);
Output.Write("\">");
Output.Write(result.Offers[0].Name);
Output.Write("</a>");
if (result.Offers.Count() > 1) {
Output.Write("\n          <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("\" class=\"offer\" data-id=\"see-more\">");
Output.Write(Resources.Shared.Common.Results.SeeAllOffers);
Output.Write("</a>");
}
}
Output.Write("\n    </div>\n  </td>\n  <td class=\"cell ratings-col\">");
{
var reviews = result;
var size = "small";
Output.Write("\n");
if (reviews.Reviews.Total > 0) {
Output.Write("\n");
var reviewTotal = reviews.Reviews.Rating;
var starSize = string.Format("star-rating-{0}", size);
var starTitle = string.Format(reviewTotal == 1 ? Resources.Strings.StarRatingText : Resources.Strings.StarRatingText_Plural, reviewTotal);
Output.Write("\n\n  <a href=\"");
Output.Write(reviews.ProfileUri);
Output.Write("&tab=2\" class=\"star-rating-container ");
Output.Write(starSize);
Output.Write("\" title=\"");
Output.Write(starTitle);
Output.Write("\">\n    <span class=\"stars stars-blank\">\n      <span class=\"stars stars-filled s");
Output.Write(reviews.Reviews.RatingClass);
Output.Write("\"></span>\n    </span>\n    <span class=\"reviews\">");
if (reviews.Reviews.Total == 1) {
Output.Write("\n        ");
Output.Write(string.Format(Resources.Shared.Common.Results.Reviews, reviews.Reviews.Total));
}
else {
Output.Write("\n        ");
Output.Write(string.Format(Resources.Shared.Common.Results.Reviews_Plural, reviews.Reviews.Total));
}
Output.Write("\n    </span>\n  </a>");
}
else {
Output.Write("\n  <span class=\"star-rating-container\">");
Output.Write(Resources.Shared.Common.Results.ReviewsComingSoon);
Output.Write("</span>");
}
}
Output.Write("\n  </td>\n  <td class=\"cell price-col\">\n    <span class=\"price\">");
Output.Write(result.PriceBand.ShortName);
Output.Write("</span>\n  </td>\n  <td class=\"cell last-cell availability-col\">");
{
var timeslots = result;
var notAvailableButtonClass = "btn-thin";
var displayOnlyPopTimes = onlyPopTimes;
Output.Write("\n");
if (request.OnlyUnavailable == true) {
Output.Write("\n  <p class=\"not-available-message\">");
Output.Write(timeslots.UnAvailMsg);
Output.Write("</p>");
if (!string.IsNullOrEmpty(timeslots.NextAvailUri)) {
Output.Write("\n  <a href=\"/nextavailabletable.aspx");
Output.Write(timeslots.NextAvailUri);
Output.Write("\" class=\"btn btn-search ");
Output.Write(notAvailableButtonClass);
Output.Write("\">");
Output.Write(Resources.Shared.Common.Results.NextAvailableButton);
Output.Write("</a>");
}
}
Output.Write("\n");
if (request.IsAvailabilityRequest == true && request.OnlyUnavailable != true) {
Output.Write("\n  <div class=\"timeslots cf\">");
for (var __iter__timeSlot in timeslots.TimeSlots) {var timeSlot=timeslots.TimeSlots[__iter__timeSlot];if(typeof(timeSlot)!='function') {
Output.Write("\n    <li class=\"timeslot");
if (timeSlot.IsExact) {
Output.Write(" exact");
}
Output.Write("\" data-offers=\"");
Output.Write(timeSlot.OfferIds != null ? string.Join(",", timeSlot.OfferIds) : "");
Output.Write("\" data-rid=\"");
Output.Write(timeslots.Id);
Output.Write("\">");
var timeslotDisabled = !timeSlot.IsAvail || (displayOnlyPopTimes && !timeSlot.HasPop);
var isExact = timeSlot.IsExact;
var timeFormat = isExact ? Resources.Strings.TimeFormat : Resources.Strings.TimeFormat.Replace("tt", "");
var cultureUrlSegment = request.CultureInUrlRoute == null ? "" : "/" + request.CultureInUrlRoute;
Output.Write("\n      ");
if (timeslotDisabled) {
Output.Write("\n      <span class=\"time disabled");
if (isExact) {
Output.Write(" exact");
}
Output.Write("\"></span>");
}
if (!timeslotDisabled) {
Output.Write("\n      <a href=\"");
Output.Write(string.Format("{6}/httphandlers/ValidateReservationRequest.ashx?rid={0}&d={2}&p={1}&pt={5}&i=1&ss=0&sd={2}&pofids={3}&checksum={4}", timeslots.Id, request.Covers, timeSlot.LinkString, string.Join(",", timeSlot.OfferIds), timeSlot.CheckSum, timeSlot.HasPop ? "1000" : "100", cultureUrlSegment));
Output.Write("\" class=\"timeslot-link\">\n\n        <span class=\"time\">");
{
var time = timeSlot.TimeString;
Output.Write("\n          ");
Output.Write(time);
if (timeSlot.OfferIds.Count() > 0) {
Output.Write("\n          <span class=\"offer\"></span>");
}
}
Output.Write("\n      </span>\n");
if (timeSlot.HasPop) {
Output.Write("\n      <span class=\"pts\">");
Output.Write(Resources.Shared.Common.Results.Timeslot1000Points);
Output.Write("</span>");
}
Output.Write("\n      </a>");
}
Output.Write("\n    </li>");
}}
Output.Write("\n  </div>");
}
}
Output.Write("\n  </td>\n</tr>");
}
++restaurantIndex;}}
Output.Write("\n    </tbody>\n</table>\n");
{
var model = resultsTable;
{
var previousLink = (model.Display.PaginationLinks ==null) ? "#" : (!string.IsNullOrEmpty(model.Display.PaginationLinks.Previous)) ? model.Display.PaginationLinks.Previous : "";
var nextLink = (model.Display.PaginationLinks ==null) ? "#" : (!string.IsNullOrEmpty(model.Display.PaginationLinks.Next)) ? model.Display.PaginationLinks.Next : "";
Output.Write("\n");
if (model.Request.Size != null) {
Output.Write("\n        <div class=\"pagination-container\">\n            <ul id=\"results-pagination\" class=\"pagination\">\n                <li class=\"pagination-item pagination-arrow\">");
if (!string.IsNullOrEmpty(previousLink)) {
Output.Write("\n                        <a href=\"");
Output.Write(previousLink);
Output.Write("\" class=\"pagination-link pagination-prev\">\n                            &lt; ");
Output.Write(Resources.Shared.Common.Strings.Label_Previous);
Output.Write("\n                        </a>");
}
else {
Output.Write("\n                        <span class=\"pagination-link pagination-prev pagination-unavailable\">\n                            &lt; ");
Output.Write(Resources.Shared.Common.Strings.Label_Previous);
Output.Write("\n                        </span>");
}
Output.Write("\n                </li>\n                <li class=\"pagination-item pagination-arrow\">");
if (!string.IsNullOrEmpty(nextLink)) {
Output.Write("\n                        <a href=\"");
Output.Write(nextLink);
Output.Write("\" class=\"pagination-link pagination-next\">\n                            ");
Output.Write(Resources.Shared.Common.Strings.Label_Next);
Output.Write(" &gt;\n                        </a>");
}
else {
Output.Write("\n                        <span class=\"pagination-link pagination-next pagination-unavailable\">\n                            ");
Output.Write(Resources.Shared.Common.Strings.Label_Next);
Output.Write(" &gt;\n                        </span>");
}
Output.Write("\n\n                </li>\n            </ul>\n            <div class=\"clear\"></div>\n        </div>");
}
}
}
Output.Write("\n");
{
var availabilityLink = resultsTable;
Output.Write("\n");
if (availabilityLink.Request.IsAvailabilityRequest && availabilityLink.Results.TotalUnavailable > 0) {
Output.Write("\n");
if (availabilityLink.Request.OnlyUnavailable == true) {
var linkText = string.Format(availabilityLink.Results.TotalAvailable == 1 ? Resources.Shared.Common.Results.WithAvailabilityLink : Resources.Shared.Common.Results.WithAvailabilityLink_Plural, availabilityLink.Results.TotalAvailable);
Output.Write("\n\n        <a href=\"#\" id=\"availability_link\" class=\"availability-link\">");
Output.Write(linkText);
Output.Write("</a>");
}
else {
var linkText = string.Format(availabilityLink.Results.TotalUnavailable == 1 ? Resources.Shared.Common.Results.WithNoAvailabilityLink : Resources.Shared.Common.Results.WithNoAvailabilityLink_Plural, availabilityLink.Results.TotalUnavailable);
Output.Write("\n\n        <a href=\"#\" id=\"availability_link\" class=\"availability-link with-availability\">");
Output.Write(linkText);
Output.Write("</a>");
}
Output.Write("\n");
}
}
}
}
else {
{
var noResultsTable = Model;
var clearLastFilter = false;
Output.Write("\n");
var hasMetroId = noResultsTable.Display.Metro != null && noResultsTable.Display.Metro.Id != null;
Output.Write("\n\n<div class=\"results-list-header\">\n    <h2 class=\"title\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_NoMatch_Title);
Output.Write("</h2>\n</div>\n\n<table id=\"search_results_table\" class=\"table\">\n\n    <tbody>\n        <tr class=\"last-row\">\n            <td class=\"cell full-cell\">\n                <p class=\"no-result-message\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_NoMatch_Message);
Output.Write("</p>\n");
if (clearLastFilter == true) {
Output.Write("\n                    <button id=\"clear_last_filter\" class=\"btn btn-thin btn-search\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_UndoLastFilterButton);
Output.Write("</button>");
}
Output.Write("\n");
if (clearLastFilter == true && hasMetroId == true) {
Output.Write("\n                    <span class=\"or\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_Or);
Output.Write("</span>");
}
Output.Write("\n");
if (hasMetroId == true) {
Output.Write("\n                    <button id=\"start_over\" class=\"btn btn-thin btn-search\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_StartOverButton);
Output.Write("</button>");
}
Output.Write("\n            </td>\n        </tr>\n    </tbody>\n\n</table>\n\n");
if (hasMetroId == true) {
Output.Write("\n    <div class=\"results-list-header\">\n        <h2 class=\"title\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_OtherSuggestions);
Output.Write("</h2>\n    </div>\n\n    <table id=\"search_results_table\" class=\"table\">\n\n        <tbody>\n            <tr class=\"last-row\">\n                <td class=\"cell full-cell\">\n                        <p class=\"no-result-message\"><a href=\"/rest_list.aspx?m=");
Output.Write(noResultsTable.Request.MetroId);
Output.Write("\" class=\"link\">");
Output.Write(string.Format(Resources.Shared.Search.Strings.NoSearchResults_MetroListLink, noResultsTable.Display.Metro.Name));
Output.Write("</a></p>\n                        <p class=\"no-result-message\"><a href=\"/\" class=\"link\">");
Output.Write(string.Format(Resources.Shared.Search.Strings.NoSearchResults_MetroLink, noResultsTable.Display.Metro.Name));
Output.Write("</a></p>\n                        <p class=\"no-result-message italic\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_OtherSuggestionsMessage);
Output.Write("</p>\n                </td>\n            </tr>\n        </tbody>\n\n    </table>");
}
}
}
}
Output.Write("\n    </div>\n</div>\n");
{
var seoFooter = Model;
Output.Write("\n");
Html.RenderAction("Footer", "Srs", new { domainCulture = Model.DomainCulture, metro = Model.Display.Metro });Output.Write("\n\n<div class=\"global-footer-system-info\">(Build Version:");
Output.Write(Html.BuildVersion());
Output.Write(") (Machine Name:");
Output.Write(System.Environment.MachineName);
Output.Write(") (Request ID:");
Output.Write(seoFooter.Headers.RequestId);
Output.Write(")</div>");
}
Output.Write("\n");
Html.RenderAction("RenderAd", "Ad", {adPlacement:AdPlacement.Footer,page:"opentables_aspx",pageType:"OPENTABLES",domainCulture:Model.DomainCulture });Output.Write("\n");
OutputScope('data'); {
Output.Write("\n    <script>\n    window.OTSearchData = ");
Output.Write(Html.RenderObjectToJson(Model));
Output.Write(";\n  </script>");
} DisposeOutputScope();
Output.Write("\n");
OutputScope('resources'); {
Output.Write("\n    <script>\n    window.Resources = {\n        Strings: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Strings)));
Output.Write(",\n        Home: {\n            Index: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Home.Index)));
Output.Write("\n        },\n        Shared: {\n            Common: {\n                BreadCrumbs: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Common.BreadCrumbs)));
Output.Write(",\n                Filters:     ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Common.Filters)));
Output.Write(",\n                LocationBar: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Common.LocationBar)));
Output.Write(",\n                Modals:      ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Common.Modals)));
Output.Write(",\n                Results:     ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Common.Results)));
Output.Write(",\n                Strings:     ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Common.Strings)));
Output.Write("\n            },\n            Search: {\n                Map:     ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Search.Map)));
Output.Write(",\n                Results: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Search.Results)));
Output.Write(",\n                Strings: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Search.Strings)));
Output.Write(",\n                Tabs:    ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Search.Tabs)));
Output.Write("\n            }\n        }\n    };\n    </script>");
} DisposeOutputScope();
Output.Write("\n");
OutputScope('js_imports'); {
Output.Write("\n\n    <!-- build:js(Web) /s/Scripts/generated/bundle_search.js -->\n    <!-- Libraries -->\n    <script src=\"Scripts/lib/backbone.js\"></script>\n    <script src=\"Scripts/lib/Timer.js\"></script>\n    <!-- Libraries -->\n\n    <!-- OT Search Helpers -->\n    <script src=\"Scripts/src/Search/Helpers/BuildSearchParameters.js\"></script>\n    <script src=\"Scripts/src/Search/Helpers/QueryString.js\"></script>\n    <script src=\"Scripts/src/Search/Helpers/ConvertDateTimeToTimestamp.js\"></script>\n    <script src=\"Scripts/src/Search/Helpers/ConvertDateToSearchDate.js\"></script>\n    <script src=\"Scripts/src/Search/Helpers/ConvertTimeTo24Hour.js\"></script>\n    <script src=\"Scripts/src/Search/Helpers/GetFormattedDate.js\"></script>\n    <script src=\"Scripts/src/Search/Helpers/GetFormattedTime.js\"></script>\n    <script src=\"Scripts/src/Search/Helpers/GetIdsFromCheckedItems.js\"></script>\n    <script src=\"Scripts/src/Search/Helpers/IsFutureDateTime.js\"></script>\n    <script src=\"Scripts/src/Search/Helpers/IsMapShowing.js\"></script>\n    <script src=\"Scripts/src/Search/Helpers/RenderTemplate.js\"></script>\n    <script src=\"Scripts/src/Search/Helpers/RoundTimeTo.js\"></script>\n    <!-- OT Search Helpers -->\n\n    <!-- OT Search Requests -->\n    <script src=\"Scripts/src/Search/Requests/BuildUrl.js\"></script>\n    <script src=\"Scripts/src/Search/Requests/Results.js\"></script>\n    <script src=\"Scripts/src/Common/Scroll.js\"></script>\n    <!-- OT Search Requests -->\n\n    <!-- Common Views -->\n    <script src=\"Scripts/src/Common/BaseView.js\"></script>\n    <script src=\"Scripts/src/Common/FilterGroupBaseView.js\"></script>\n    <script src=\"Scripts/src/Common/Views/LocationBar.js\"></script>\n    <script src=\"Scripts/src/Common/Views/Filters/Filters.js\"></script>\n    <script src=\"Scripts/src/Common/Views/Filters/Locations.js\"></script>\n    <script src=\"Scripts/src/Common/Views/Filters/Cuisines.js\"></script>\n    <script src=\"Scripts/src/Common/Views/Filters/OfferTypes.js\"></script>\n    <script src=\"Scripts/src/Common/Views/Filters/PriceBands.js\"></script>\n    <script src=\"Scripts/src/Common/Views/Filters/Booleans.js\"></script>\n    <script src=\"Scripts/src/Common/Views/Results/ResultsContainer.js\"></script>\n\n    <script src=\"Scripts/src/Common/ModalBaseView.js\"></script>\n    <script src=\"Scripts/src/Common/Views/Modals/Locations.js\"></script>\n    <script src=\"Scripts/src/Common/Views/Modals/Filters.js\"></script>\n    <script src=\"Scripts/src/Common/Views/Modals/Tooltip.js\"></script>\n    <script src=\"Scripts/src/Common/Views/Modals/Price.js\"></script>\n    <script src=\"Scripts/src/Common/Views/Modals/Restaurant.js\"></script>\n    <!-- Common Views -->\n\n    <!-- Search View -->\n    <script src=\"Scripts/src/Common/Views/LocationBar.js\"></script>\n    <script src=\"Scripts/src/Search/Views/Breadcrumbs.js\"></script>\n    <script src=\"Scripts/src/Search/Views/SearchAnimation.js\"></script>\n    <script src=\"Scripts/src/Search/Views/SearchControl.js\"></script>\n    <script src=\"Scripts/src/Search/Views/SearchTabs.js\"></script>\n\n    <script src=\"Scripts/src/Common/Views/Results/Results.js\"></script>\n    <script src=\"Scripts/src/Search/Views/Results/PopTable.js\"></script>\n    <script src=\"Scripts/src/Search/Views/Results/MapResults.js\"></script>\n\n    <script src=\"Scripts/src/Search/Views/Results/Map/MapTitle.js\"></script>\n    <script src=\"Scripts/src/Search/Views/Results/Map/ResultsList.js\"></script>\n    <script src=\"Scripts/src/Search/Views/Results/Map/ResultsTitle.js\"></script>\n\n    <script src=\"Scripts/src/Search/Views/Filters/Filters.js\"></script>\n    <!-- Search View -->\n\n    <!-- OT Search -->\n    <script src=\"Scripts/src/Search/Config.js\"></script>\n    <script src=\"Scripts/src/Search/Data.js\"></script>\n    <script src=\"Scripts/src/Search/Params.js\"></script>\n    <script src=\"Scripts/src/Search/History.js\"></script>\n    <script src=\"Scripts/src/Search/SendLogRequest.js\"></script>\n    <script src=\"Scripts/src/Search/App.js\"></script>\n    <!-- OT Search -->\n    <!-- endbuild -->\n\n\n    <script>\n    OT.Common.init();\n    OT.Search.init();\n    </script>\n  ");
} DisposeOutputScope();
Output.Write("\n");
OutputScope('tracking'); {
Output.Write("\n    ");
Output.Write(Html.RenderTrackingCode(Model.TrackingValues));
} DisposeOutputScope();
Output.Write("\n\n");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Home.Index
