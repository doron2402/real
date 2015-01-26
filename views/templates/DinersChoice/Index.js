if (!window.Spark) window.Spark = {};
if (!window.Spark.DinersChoice) window.Spark.DinersChoice = {};
window.Spark.DinersChoice.Index = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var breadCrumbs = viewData["breadCrumbs"];
var locationBar = viewData["locationBar"];
var search = viewData["search"];
var filters = viewData["filters"];
var dinersChoiceList = viewData["dinersChoiceList"];
var resultsTable = viewData["resultsTable"];
var noResultsTable = viewData["noResultsTable"];
var seoFooter = viewData["seoFooter"];
var locationGroup = viewData["locationGroup"];
var title = viewData["title"];
var name = viewData["name"];
var param = viewData["param"];
var dinersChoiceGroup = viewData["dinersChoiceGroup"];
var bestFoodCuisines = viewData["bestFoodCuisines"];
var name = viewData["name"];
var resultsTitle = viewData["resultsTitle"];
var resultsTitle = viewData["resultsTitle"];
var result = viewData["result"];
var request = viewData["request"];
var firstRow = viewData["firstRow"];
var lastRow = viewData["lastRow"];
var onlyPopTimes = viewData["onlyPopTimes"];
var result = viewData["result"];
var request = viewData["request"];
var firstRow = viewData["firstRow"];
var lastRow = viewData["lastRow"];
var index = viewData["index"];
var availabilityLink = viewData["availabilityLink"];
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
function RenderViewLevel0() {
Output.Write("\n");
OutputScope('pageTitle'); {
Output.Write("\n  <title>");
if (string.IsNullOrEmpty( Model.Display.PageMetaData.Title)) {
Output.Write("\n      ");
Output.Write(Resources.Shared.DinersChoice.Strings.TitleFallback);
}
else {
Output.Write("\n      ");
Output.Write(string.Format(Resources.Shared.DinersChoice.Strings.PageTitleFormat, Model.Display.PageMetaData.Title, Resources.Strings.RestaurantsString, Model.Display.Location.Name, Resources.Strings.DomainName));
}
Output.Write("  \n  </title>");
} DisposeOutputScope();
Output.Write("\n");
OutputScope('metaDescription'); {
Output.Write("\n    <meta name=\"description\" content=\"");
Output.Write(string.Format("Book now at some of the {0} {1} in {2}. Read reviews, explore menus and photos and find the perfect spot for any occasion.", Model.Display.PageMetaData.Title.Split(Convert.ToChar("-"))[0].ToLower().Trim(), Resources.Strings.RestaurantsString.ToLower(), Model.Display.Location.Name));
Output.Write("\">");
} DisposeOutputScope();
Output.Write("\n");
OutputScope('cssImports'); {
Output.Write("\n    <link rel=\"stylesheet\" href=\"/s/content/css/generated/bundle_");
Output.Write(Html.CurrentTheme(Model.DomainCulture));
Output.Write("_dinerschoice.css\"/>");
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
Html.RenderAction("Header", "Srs", {pageType:SrsPageType.DINERS_CHOICE,domainCulture:Model.DomainCulture });Output.Write("\n\n<nav id=\"breadcrumbs\" class=\"breadcrumbs\">");
{
var breadCrumbs = Model;
Output.Write("\n\n<a href=\"/\" class=\"breadcrumb breadcrumbs-link\">");
Output.Write(Resources.Strings.DomainName);
Output.Write(" ");
Output.Write(Resources.Shared.Common.BreadCrumbs.HomeNode);
Output.Write("</a>\n<span>></span>\n");
if (breadCrumbs.Display.Metro != null) {
Output.Write("\n  <a href=\"");
Output.Write(breadCrumbs.Display.Metro.Url);
Output.Write("\" class=\"breadcrumb breadcrumbs-link\">");
Output.Write(breadCrumbs.Display.Metro.Name);
Output.Write(" ");
Output.Write(Resources.Shared.Common.BreadCrumbs.LocationNode);
Output.Write("</a>\n  <span>></span>");
}
Output.Write("\n\n<span class=\"breadcrumb\">");
if (string.IsNullOrEmpty(breadCrumbs.Display.PageMetaData.Title)) {
Output.Write("\n    ");
Output.Write(Resources.Shared.DinersChoice.Strings.TitleFallback);
}
else {
Output.Write("\n    ");
Output.Write(string.Format(Resources.Shared.DinersChoice.LocationBar.TitleFormat, breadCrumbs.Display.PageMetaData.Title, Resources.Strings.RestaurantsString, breadCrumbs.Display.Location.Name));
}
Output.Write("\n</span>");
if (breadCrumbs.Request.IsAvailabilityRequest == true) {
Output.Write("\n\t<span>></span>\n\t<span class=\"breadcrumb\">");
Output.Write(Resources.Shared.Common.BreadCrumbs.LastNode);
Output.Write("</span>");
}
}
Output.Write("\n</nav>\n\n<div class=\"search-container\">\n    <div id=\"change_location_bar\" class=\"change-location-bar\">");
{
var locationBar = Model;
Output.Write("\n\n<i class=\"icon icon-dinerschoice-searchbox\"></i>\n<h1 class=\"search-location\">");
if (string.IsNullOrEmpty(locationBar.Display.PageMetaData.Title)) {
Output.Write("\n    ");
Output.Write(Resources.Shared.DinersChoice.Strings.TitleFallback);
}
else {
Output.Write("\n    ");
Output.Write(string.Format(Resources.Shared.DinersChoice.LocationBar.TitleFormat, locationBar.Display.PageMetaData.Title, Resources.Strings.RestaurantsString, locationBar.Display.Location.Name));
}
Output.Write("\n</h1>");
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
Output.Write("\n    </div>\n</div>\n\n\n<div class=\"search-filters-outer\">\n    <div id=\"search_filters\" class=\"search-filters\">");
{
var filters = Model;
Output.Write("\n\n<div class=\"search-filters-header\">\n    <h3 class=\"title\">&#9660; ");
Output.Write(Resources.Shared.DinersChoice.Filters.RefineLocation);
Output.Write("</h3>\n</div>\n<div class=\"search-filters-inner cf\">\n    <div id=\"location_filters\" class=\"group links\">");
{
var locationGroup = filters;
Output.Write("\n\n<ul>");
for (var __iter__location in locationGroup.Filters.TopLocations) {var location=locationGroup.Filters.TopLocations[__iter__location];if(typeof(location)!='function') {
var filterType = location.TypeString == "Metro" ? "MetroId" : "RegionIds";
Output.Write("\n        <a href=\"");
Output.Write(location.Uri);
Output.Write("\" title=\"");
Output.Write(location.Name);
Output.Write("\">");
{
var filter = location;
var filterName = "dinerschoice_locations";
var filterDataName = filterType;
var type = "radio";
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
Output.Write("\n        </a>");
}}
Output.Write("\n\n    <li class=\"show-more more-link\" data-filter-name=\"Regions\" data-filter-type=\"RegionIds\" data-modal-type=\"location\" data-change-location=\"true\">");
Output.Write(Resources.Shared.Common.Filters.MoreLink);
Output.Write(" &#8250;</li>\n</ul>");
}
Output.Write("\n    </div>\n</div>");
}
Output.Write("\n    </div>\n\n    <div id=\"dinerschoice_list\" class=\"search-filters diners-choice-list\">");
{
var dinersChoiceList = Model;
Output.Write("\n\n<div class=\"search-filters-header\">\n    <h3 class=\"title\">&#9660; ");
Output.Write(Resources.Shared.DinersChoice.Filters.SelectAList);
Output.Write("</h3>\n</div>\n<div class=\"search-filters-inner\">");
{
var dinersChoiceGroup = dinersChoiceList.Filters.DinersChoice.Ratings;
var bestFoodCuisines = dinersChoiceList.Filters.DinersChoice.Cuisines;
var name = Resources.Shared.DinersChoice.Filters.RatingsTitle;
Output.Write("\n");
if (dinersChoiceGroup.Count() > 0) {
Output.Write("\n    <div class=\"group links dinerschoice\">\n        <b>");
Output.Write(name);
Output.Write("</b>");
for (var __iter__link in dinersChoiceGroup) {var link=dinersChoiceGroup[__iter__link];if(typeof(link)!='function') {
Output.Write("\n            <a href=\"");
Output.Write(link.Uri);
Output.Write("\" class=\"link");
if (link.IsSelected) {
Output.Write(" selected");
}
Output.Write("\" title=\"");
Output.Write(link.Name);
Output.Write("\" data-id=\"");
Output.Write(link.Id);
Output.Write("\">");
Output.Write(link.Name);
Output.Write("</a>\n");
if (link.Id == "Best Food") {
Output.Write("\n                <div class=\"sub-list\" data-list-name=\"");
Output.Write(link.Id);
Output.Write("\" data-filter-name=\"CuisineIds\">");
for (var __iter__bestFoodCuisine in bestFoodCuisines) {var bestFoodCuisine=bestFoodCuisines[__iter__bestFoodCuisine];if(typeof(bestFoodCuisine)!='function') {
Output.Write("\n                        <a href=\"");
Output.Write(bestFoodCuisine.Uri);
Output.Write("\" class=\"link");
if (bestFoodCuisine.IsSelected) {
Output.Write(" selected");
}
Output.Write("\" title=\"");
Output.Write(bestFoodCuisine.Name);
Output.Write("\" data-id=\"");
Output.Write(bestFoodCuisine.Id);
Output.Write("\">");
Output.Write(bestFoodCuisine.Name);
Output.Write("</a>");
}}
Output.Write("\n                </div>");
}
}}
Output.Write("\n    </div>");
}
}
Output.Write("\n");
{
var dinersChoiceGroup = dinersChoiceList.Filters.DinersChoice.Features;
var bestFoodCuisines = dinersChoiceList.Filters.DinersChoice.Cuisines;
var name = Resources.Shared.DinersChoice.Filters.SpecialFeaturesTitle;
Output.Write("\n");
if (dinersChoiceGroup.Count() > 0) {
Output.Write("\n    <div class=\"group links dinerschoice\">\n        <b>");
Output.Write(name);
Output.Write("</b>");
for (var __iter__link in dinersChoiceGroup) {var link=dinersChoiceGroup[__iter__link];if(typeof(link)!='function') {
Output.Write("\n            <a href=\"");
Output.Write(link.Uri);
Output.Write("\" class=\"link");
if (link.IsSelected) {
Output.Write(" selected");
}
Output.Write("\" title=\"");
Output.Write(link.Name);
Output.Write("\" data-id=\"");
Output.Write(link.Id);
Output.Write("\">");
Output.Write(link.Name);
Output.Write("</a>\n");
if (link.Id == "Best Food") {
Output.Write("\n                <div class=\"sub-list\" data-list-name=\"");
Output.Write(link.Id);
Output.Write("\" data-filter-name=\"CuisineIds\">");
for (var __iter__bestFoodCuisine in bestFoodCuisines) {var bestFoodCuisine=bestFoodCuisines[__iter__bestFoodCuisine];if(typeof(bestFoodCuisine)!='function') {
Output.Write("\n                        <a href=\"");
Output.Write(bestFoodCuisine.Uri);
Output.Write("\" class=\"link");
if (bestFoodCuisine.IsSelected) {
Output.Write(" selected");
}
Output.Write("\" title=\"");
Output.Write(bestFoodCuisine.Name);
Output.Write("\" data-id=\"");
Output.Write(bestFoodCuisine.Id);
Output.Write("\">");
Output.Write(bestFoodCuisine.Name);
Output.Write("</a>");
}}
Output.Write("\n                </div>");
}
}}
Output.Write("\n    </div>");
}
}
Output.Write("\n");
{
var dinersChoiceGroup = dinersChoiceList.Filters.DinersChoice.Bookings;
var bestFoodCuisines = dinersChoiceList.Filters.DinersChoice.Cuisines;
var name = Resources.Shared.DinersChoice.Filters.MostBookedTitle;
Output.Write("\n");
if (dinersChoiceGroup.Count() > 0) {
Output.Write("\n    <div class=\"group links dinerschoice\">\n        <b>");
Output.Write(name);
Output.Write("</b>");
for (var __iter__link in dinersChoiceGroup) {var link=dinersChoiceGroup[__iter__link];if(typeof(link)!='function') {
Output.Write("\n            <a href=\"");
Output.Write(link.Uri);
Output.Write("\" class=\"link");
if (link.IsSelected) {
Output.Write(" selected");
}
Output.Write("\" title=\"");
Output.Write(link.Name);
Output.Write("\" data-id=\"");
Output.Write(link.Id);
Output.Write("\">");
Output.Write(link.Name);
Output.Write("</a>\n");
if (link.Id == "Best Food") {
Output.Write("\n                <div class=\"sub-list\" data-list-name=\"");
Output.Write(link.Id);
Output.Write("\" data-filter-name=\"CuisineIds\">");
for (var __iter__bestFoodCuisine in bestFoodCuisines) {var bestFoodCuisine=bestFoodCuisines[__iter__bestFoodCuisine];if(typeof(bestFoodCuisine)!='function') {
Output.Write("\n                        <a href=\"");
Output.Write(bestFoodCuisine.Uri);
Output.Write("\" class=\"link");
if (bestFoodCuisine.IsSelected) {
Output.Write(" selected");
}
Output.Write("\" title=\"");
Output.Write(bestFoodCuisine.Name);
Output.Write("\" data-id=\"");
Output.Write(bestFoodCuisine.Id);
Output.Write("\">");
Output.Write(bestFoodCuisine.Name);
Output.Write("</a>");
}}
Output.Write("\n                </div>");
}
}}
Output.Write("\n    </div>");
}
}
Output.Write("\n</div>\n");
}
Output.Write("\n    </div>\n</div>\n\n<div id=\"search_results_container\" class=\"search-results-container cf\">");
if (Html.DisplayDinersChoiceAdvert(Model.DomainCulture) && Model.Request.IsAvailabilityRequest != true) {
Output.Write("\n    ");
Html.RenderAction("RenderAd", "Ad", {adPlacement:AdPlacement.BigBox,page:"diners_choice_aspx",pageType:"DINERS_CHOICE",domainCulture:Model.DomainCulture });}
Output.Write("\n\n    <div id=\"search_results\" class=\"results-table search-results\">");
if (Model.Results.Total > 0) {
{
var resultsTable = Model;
Output.Write("\n\n<div class=\"results-list-header\">\n    <h2 class=\"title\">");
if (resultsTable.Request.IsAvailabilityRequest == true) {
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
}
else {
{
var resultsTitle = resultsTable;
Output.Write("\n\n");
Output.Write(Resources.Shared.DinersChoice.Results.ResultsTitle);
}
}
Output.Write("\n    </h2>\n</div>\n\n<table id=\"search_results_table\" class=\"table\">");
if (resultsTable.Request.IsAvailabilityRequest == true) {
{
Output.Write("<thead>\n    <tr class=\"table-header\">\n        <td class=\"cell first-cell header-cell\">\n            <span>");
Output.Write(Resources.Shared.Common.Results.Header_Name);
Output.Write("</span> /\n            <span>");
Output.Write(Resources.Shared.Common.Results.Header_Area);
Output.Write("</span>\n        </td>\n        <td class=\"cell header-cell\">\n            <span>");
Output.Write(Resources.Shared.Common.Results.Header_Ratings);
Output.Write("</span>\n        </td>\n        <td class=\"cell header-cell\">\n            <span>");
Output.Write(Resources.Shared.Common.Results.Header_Price);
Output.Write("</span>\n        </td>\n        <td class=\"cell last-cell header-cell availability-header\">");
Output.Write(Resources.Shared.Common.Results.Header_Availability);
Output.Write("</td>\n    </tr>\n</thead>");
}
}
else {
{
Output.Write("<thead>\n    <tr class=\"table-header\">\n        <td class=\"cell first-cell header-cell\">");
Output.Write(Resources.Shared.Common.Results.Header_Name);
Output.Write("</td>\n        <td class=\"cell last-cell header-cell\">");
Output.Write(Resources.Shared.Common.Results.Header_Price);
Output.Write("</td>\n    </tr>\n</thead>");
}
}
Output.Write("\n\n    <tbody>");
var restaurantIndex=0;for (var __iter__restaurant in resultsTable.Results.Restaurants) {var restaurant=resultsTable.Results.Restaurants[__iter__restaurant];if(typeof(restaurant)!='function') {
if (resultsTable.Request.IsAvailabilityRequest == true) {
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
}
else {
{
var result = restaurant;
var request = resultsTable.Request;
var firstRow = restaurantIndex == 0;
var lastRow = restaurantIndex == resultsTable.Results.Restaurants.Count()-1;
var index = restaurantIndex;
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
Output.Write("\">\n  <td class=\"cell first-cell\">\n    <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("\" class=\"rest-name\">");
Output.Write(result.Name);
Output.Write("</a>\n    <div>");
Output.Write(distance);
Output.Write(result.Location);
Output.Write(" | ");
Output.Write(result.Cuisine);
Output.Write("</div>");
if (result.Offers.Count() > 0) {
Output.Write("\n      <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("\" class=\"offer\" data-id=\"");
Output.Write(result.Offers[0].Id);
Output.Write("\">");
Output.Write(result.Offers[0].Name);
Output.Write("</a>");
if (result.Offers.Count() > 1) {
Output.Write("\n        <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("\" class=\"offer\" data-id=\"see-more\">");
Output.Write(Resources.Shared.Common.Filters.SeeAllOffers);
Output.Write("</a>");
}
}
Output.Write("\n  </td>\n  <td class=\"cell last-cell price-col\">\n    <span class=\"price\">");
Output.Write(result.PriceBand.ShortName);
Output.Write("</span>\n  </td>\n</tr>");
}
}
++restaurantIndex;}}
Output.Write("\n    </tbody>\n</table>\n");
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
Output.Write("\n");
var hasMetroId = noResultsTable.Display.Metro != null && noResultsTable.Display.Metro.Id != null;
Output.Write("\n\n<div class=\"results-list-header\">\n    <h2 class=\"title\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_NoMatch_Title);
Output.Write("</h2>\n</div>\n\n<table id=\"search_results_table\" class=\"table\">\n\n    <tbody>\n        <tr class=\"last-row\">\n            <td class=\"cell full-cell\">\n                <p class=\"no-result-message\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_NoMatch_Message);
Output.Write("</p>\n");
if (hasMetroId == true) {
Output.Write("\n                    <button id=\"start_over\" class=\"btn btn-thin btn-search\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_StartOverButton);
Output.Write("</button>");
}
Output.Write("\n            </td>\n        </tr>\n    </tbody>\n\n</table>");
}
}
Output.Write("\n    </div>\n\n    <div class=\"diners-choice-tagline\">");
Output.Write(Resources.Shared.DinersChoice.Strings.Tagline);
Output.Write("</div>\n</div>\n");
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
Html.RenderAction("RenderAd", "Ad", {adPlacement:AdPlacement.Footer,page:"diners_choice_aspx",pageType:"DINERS_CHOICE",domainCulture:Model.DomainCulture });Output.Write("\n");
OutputScope('data'); {
Output.Write("\n  <script>\n    window.OTSearchData = ");
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
Output.Write("\n            },\n            DinersChoice: {\n                Filters:     ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.DinersChoice.Filters)));
Output.Write(",\n                LocationBar: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.DinersChoice.LocationBar)));
Output.Write(",\n                Results:     ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.DinersChoice.Results)));
Output.Write(",\n                Strings:     ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.DinersChoice.Strings)));
Output.Write("\n            },\n            Search: {\n                Results: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Search.Results)));
Output.Write(",\n                Strings: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Search.Strings)));
Output.Write("\n            }\n        }\n    };\n    </script>");
} DisposeOutputScope();
Output.Write("\n");
OutputScope('js_imports'); {
Output.Write("\n\n    <!-- build:js(Web) /s/Scripts/generated/bundle_dinerschoice.js -->\n    <!-- Libraries -->\n    <script src=\"Scripts/lib/backbone.js\"></script>\n    <script src=\"Scripts/lib/Timer.js\"></script>\n    <!-- Libraries -->\n\n    <!-- OT Search Helpers -->\n    <script src=\"Scripts/src/Search/Helpers/BuildSearchParameters.js\"></script>\n    <script src=\"Scripts/src/Search/Helpers/QueryString.js\"></script>\n    <script src=\"Scripts/src/Search/Helpers/ConvertDateTimeToTimestamp.js\"></script>\n    <script src=\"Scripts/src/Search/Helpers/ConvertDateToSearchDate.js\"></script>\n    <script src=\"Scripts/src/Search/Helpers/ConvertTimeTo24Hour.js\"></script>\n    <script src=\"Scripts/src/Search/Helpers/GetFormattedDate.js\"></script>\n    <script src=\"Scripts/src/Search/Helpers/GetFormattedTime.js\"></script>\n    <script src=\"Scripts/src/Search/Helpers/GetIdsFromCheckedItems.js\"></script>\n    <script src=\"Scripts/src/Search/Helpers/IsFutureDateTime.js\"></script>\n    <script src=\"Scripts/src/Search/Helpers/IsMapShowing.js\"></script>\n    <script src=\"Scripts/src/Search/Helpers/RenderTemplate.js\"></script>\n    <script src=\"Scripts/src/Search/Helpers/RoundTimeTo.js\"></script>\n    <!-- OT Search Helpers -->\n\n    <!-- OT Search Requests -->\n    <script src=\"Scripts/src/Search/Requests/BuildUrl.js\"></script>\n    <script src=\"Scripts/src/Search/Requests/Results.js\"></script>\n    <script src=\"Scripts/src/Common/Scroll.js\"></script>\n    <!-- OT Search Requests -->\n\n    <!-- Common Views -->\n    <script src=\"Scripts/src/Common/BaseView.js\"></script>\n    <script src=\"Scripts/src/Common/FilterGroupBaseView.js\"></script>\n    <script src=\"Scripts/src/Common/Views/LocationBar.js\"></script>\n    <script src=\"Scripts/src/Common/Views/Filters/Filters.js\"></script>\n    <script src=\"Scripts/src/Common/Views/Filters/Locations.js\"></script>\n    <script src=\"Scripts/src/Common/Views/Results/ResultsContainer.js\"></script>\n\n    <script src=\"Scripts/src/Common/ModalBaseView.js\"></script>\n    <script src=\"Scripts/src/Common/Views/Modals/Locations.js\"></script>\n    <script src=\"Scripts/src/Common/Views/Modals/Price.js\"></script>\n    <script src=\"Scripts/src/Common/Views/Modals/Tooltip.js\"></script>\n    <script src=\"Scripts/src/Common/Views/Modals/Restaurant.js\"></script>\n    <!-- Common Views -->\n\n    <!-- DinersChoice View -->\n    <script src=\"Scripts/src/DinersChoice/Views/LocationBar.js\"></script>\n    <script src=\"Scripts/src/Search/Views/Breadcrumbs.js\"></script>\n    <script src=\"Scripts/src/DinersChoice/Views/Breadcrumbs.js\"></script>\n    <script src=\"Scripts/src/Search/Views/SearchAnimation.js\"></script>\n    <script src=\"Scripts/src/Search/Views/SearchControl.js\"></script>\n    <script src=\"Scripts/src/DinersChoice/Views/SearchControl.js\"></script>\n\n    <script src=\"Scripts/src/DinersChoice/Views/Results/ResultsContainer.js\"></script>\n    <script src=\"Scripts/src/Common/Views/Results/Results.js\"></script>\n    <script src=\"Scripts/src/DinersChoice/Views/Results/Results.js\"></script>\n\n    <script src=\"Scripts/src/DinersChoice/Views/Filters/Filters.js\"></script>\n    <script src=\"Scripts/src/DinersChoice/Views/Filters/Locations.js\"></script>\n    <script src=\"Scripts/src/DinersChoice/Views/Modals/Locations.js\"></script>\n\n    <script src=\"Scripts/src/DinersChoice/Views/Filters/DinersChoiceList.js\"></script>\n    <!-- DinersChoice View -->\n\n    <!-- OT Search -->\n    <script src=\"Scripts/src/Search/Config.js\"></script>\n    <script src=\"Scripts/src/Search/Data.js\"></script>\n    <script src=\"Scripts/src/Search/Params.js\"></script>\n    <script src=\"Scripts/src/Search/History.js\"></script>\n    <script src=\"Scripts/src/Search/SendLogRequest.js\"></script>\n    <script src=\"Scripts/src/DinersChoice/App.js\"></script>\n    <!-- OT Search -->\n    <!-- endbuild -->\n\n\n    <script>\n    OT.Common.init();\n    OT.DinersChoice.init();\n    </script>\n");
} DisposeOutputScope();
Output.Write("\n");
OutputScope('tracking'); {
Output.Write("\n    ");
Output.Write(Html.RenderTrackingCode(Model.TrackingValues));
} DisposeOutputScope();
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.DinersChoice.Index
