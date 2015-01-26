if (!window.Spark) window.Spark = {};
if (!window.Spark.Home) window.Spark.Home = {};
window.Spark.Home.RedesignIndex = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var searchImage = viewData["searchImage"];
var search = viewData["search"];
var filters = viewData["filters"];
var singleSearchModalModel = viewData["singleSearchModalModel"];
var resultsTable = viewData["resultsTable"];
var noResults = viewData["noResults"];
var clearLastFilter = viewData["clearLastFilter"];
var resultsMap = viewData["resultsMap"];
var clearLastFilter = viewData["clearLastFilter"];
var linkSection = viewData["linkSection"];
var seoFooter = viewData["seoFooter"];
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
var resultsTitle = viewData["resultsTitle"];
var popTable = viewData["popTable"];
var result = viewData["result"];
var resultViewModel = viewData["resultViewModel"];
var firstRow = viewData["firstRow"];
var lastRow = viewData["lastRow"];
var index = viewData["index"];
var onlyPopTimes = viewData["onlyPopTimes"];
var includeImages = viewData["includeImages"];
var pagination = viewData["pagination"];
var showPageNumbers = viewData["showPageNumbers"];
var availabilityLink = viewData["availabilityLink"];
var resultsList = viewData["resultsList"];
var clearLastFilter = viewData["clearLastFilter"];
var items = viewData["items"];
var itemClass = viewData["itemClass"];
var linkClass = viewData["linkClass"];
var titleClass = viewData["titleClass"];
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
var reviews = viewData["reviews"];
var searchViewModel = viewData["searchViewModel"];
var restaurantViewModel = viewData["restaurantViewModel"];
var popScheduleRestaurant = viewData["popScheduleRestaurant"];
var timeslots = viewData["timeslots"];
var timeSlotsRequest = viewData["timeSlotsRequest"];
var notAvailableButtonClass = viewData["notAvailableButtonClass"];
var displayOnlyPopTimes = viewData["displayOnlyPopTimes"];
var searchViewModelPromo = viewData["searchViewModelPromo"];
var restaurantPromo = viewData["restaurantPromo"];
var restaurantViewModelPromo = viewData["restaurantViewModelPromo"];
function RenderViewLevel0() {
Output.Write("\n");
OutputScope('pageTitle'); {
Output.Write("\n  <title>");
Output.Write(Model.Display.PageMetaData.Title);
Output.Write("</title>");
} DisposeOutputScope();
Output.Write("\n");
OutputScope('metaData'); {
if (!String.IsNullOrWhiteSpace(Model.Display.PageMetaData.Description)) {
Output.Write("\n  <meta name=\"description\" content=\"");
Output.Write(Model.Display.PageMetaData.Description);
Output.Write("\"/>");
}
if (!String.IsNullOrWhiteSpace(Model.Display.PageMetaData.Keywords)) {
Output.Write("\n  <meta name=\"keywords\" content=\"");
Output.Write(Model.Display.PageMetaData.Keywords);
Output.Write("\"/>");
}
if (!String.IsNullOrWhiteSpace(Model.Display.PageMetaData.Robots)) {
Output.Write("\n  <meta name=\"robots\" content=\"");
Output.Write(Model.Display.PageMetaData.Robots);
Output.Write("\"/>");
}
{
var hasMetaDataUrls = (Model.Display.MetaDataUrls != null);
if ((hasMetaDataUrls && !string.IsNullOrWhiteSpace(Model.Display.MetaDataUrls.Canonical))) {
Output.Write("\n    <link rel=\"canonical\" href=\"");
Output.Write(Model.Display.MetaDataUrls.Canonical);
Output.Write("\"/>");
}
if ((hasMetaDataUrls && !string.IsNullOrWhiteSpace(Model.Display.MetaDataUrls.PagePrevious))) {
Output.Write("\n    <link rel=\"prev\" href=\"");
Output.Write(Model.Display.MetaDataUrls.PagePrevious);
Output.Write("\"/>");
}
if ((hasMetaDataUrls && !string.IsNullOrWhiteSpace(Model.Display.MetaDataUrls.PageNext))) {
Output.Write("\n    <link rel=\"next\" href=\"");
Output.Write(Model.Display.MetaDataUrls.PageNext);
Output.Write("\"/>");
}
}
} DisposeOutputScope();
Output.Write("\n");
OutputScope('cssComponent'); {
Html.RenderAction("Css", "Srs", {domainCulture:Model.DomainCulture });} DisposeOutputScope();
Output.Write("\n");
OutputScope('cssImports'); {
Output.Write("\n  <link rel=\"stylesheet\" href=\"/s/content/css/generated/bundle_redesign_search.css\"/>\n  <!--[if lte IE 8]><link rel=\"stylesheet\" href=\"/s/content/css/generated/bundle_redesign_search_ie8.css\" /> <![endif]-->");
} DisposeOutputScope();
Output.Write("\n");
OutputScope('jsHead'); {
Html.RenderAction("JsHead", "Srs", {domainCulture:Model.DomainCulture });} DisposeOutputScope();
Output.Write("\n");
OutputScope('jsComponent'); {
Html.RenderAction("Js", "Srs", {domainCulture:Model.DomainCulture,jqueryOnBody:false });} DisposeOutputScope();
Output.Write("\n");
OutputScope('jsComponent'); {
{
Output.Write("<!-- build:js(Web) /s/Scripts/generated/bundle_common_redesign.js -->\n<!-- Libraries -->\n<script src=\"Scripts/lib/fastclick.js\"></script>\n<script src=\"Scripts/lib/jquery.scrollTo.min.js\"></script>\n<!-- Libraries -->\n\n<!-- OT Common -->\n<!-- Diff compared to SRS, can we use the ones from SRS? -->\n<script src=\"Scripts/src/Redesign/Common/Extensions.js\"></script>\n\n<script src=\"Scripts/src/Redesign/Common/Accordion.js\"></script>\n\n<script src=\"Scripts/src/Redesign/Common/Menu.js\"></script>\n<script src=\"Scripts/src/Redesign/Common/TestObject.js\"></script>\n<!-- OT Common -->\n<!-- endbuild -->");
}
} DisposeOutputScope();
Output.Write("\n");
OutputScope('bodyClass'); {
Output.Write(Model.Request.IsAvailabilityRequest ? "availability-search" : "");
Output.Write(" ");
Output.Write(Model.Request.ShowMap == true ? "map-showing" : "");
Output.Write(" ");
Output.Write(Model.Display.IsInitialLoad == true ? "initial-load" : "");
Output.Write(" ");
Output.Write(String.Join(" ", Model.Request.ParsedTests));
} DisposeOutputScope();
Output.Write("\n");
Html.RenderAction("Header", "Srs", {pageType:Model.Display.SrsPageType,domainCulture:Model.DomainCulture,metro:Model.Display.Metro });Output.Write("\n\n<div");
{
var __just__once__ = 0;
if (Model.Display.ShowSearchImage) {
if (__just__once__ < 1) {
Output.Write(" class=\"");
}
__just__once__ = 1;
Output.Write("search-image");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">");
if (Model.Display.ShowSearchImage) {
{
var searchImage = Model;
Output.Write("\n\n<div class=\"image-container\" style=\"background-image: ");
if (!string.IsNullOrEmpty(Model.Display.SearchImageUrl)) {
Output.Write("url('");
Output.Write(Model.Display.SearchImageUrl);
Output.Write("'),");
}
if (!string.IsNullOrEmpty(Model.Display.FallbackImageUrl)) {
Output.Write("\n  url('");
Output.Write(Model.Display.FallbackImageUrl);
Output.Write("')");
}
Output.Write(";\">\n  <div class=\"max-width-wrapper\">\n    <div id=\"overlay_text\" class=\"overlay-text\">\n        <div class=\"page-header-content\">\n            <div class=\"row\">\n                <div class=\"column\">");
if (!string.IsNullOrEmpty(Model.Display.EmblemImageUrl)) {
Output.Write("\n                        <img id=\"emblem\" data-src=\"");
Output.Write(Model.Display.EmblemImageUrl);
Output.Write("\" class=\"hide\"/>");
}
if (searchImage.Request.PageType != PageType.TravelTimeSearch) {
if (!string.IsNullOrEmpty(Model.Display.SearchSmallHeading)) {
Output.Write("\n                        <h2 id=\"smallHeading\" class=\"needs-emblem-offset\">");
Output.Write(Model.Display.SearchSmallHeading);
Output.Write("</h2>");
}
}
if (!string.IsNullOrEmpty(Model.Display.SearchBigHeading)) {
Output.Write("\n                    <h1 class=\"needs-emblem-offset\">");
Output.Write(Model.Display.SearchBigHeading);
if (Model.Display.IsBeta) {
Output.Write("<sup>Beta</sup>");
}
Output.Write("\n                </h1>");
}
if (searchImage.Request.PageTypeString == "TravelTimeSearch") {
if (!string.IsNullOrEmpty(Model.Display.SearchSmallHeading)) {
Output.Write("\n                        <h2 id=\"smallHeading\" class=\"needs-emblem-offset\">");
Output.Write(Model.Display.SearchSmallHeading);
Output.Write("</h2>");
}
}
Output.Write("\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n</div>\n");
}
}
Output.Write("\n\n  <div id=\"search_control\" class=\"search-control labels cf\">");
{
var search = Model;
Output.Write("\n\n<div class=\"page-header cf\">\n    <div class=\"max-width-wrapper\">\n        <div class=\"page-header-content\">\n            <div class=\"row\">\n                <div class=\"column\">\n                    <div class=\"dtp-picker-travel-time\"></div>                    ");
Html.RenderAction("DateTimePartySize", "Srs", new { domainCulture = search.DomainCulture, showSearch = search.Request.PageType == PageType.TravelTimeSearch, selectedCovers = search.Request.Covers, selectedDateTime = search.Display.SelectedIsoDateTime });Output.Write("\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
}
Output.Write("\n  </div>\n</div>\n");
if (Model.Display.ShowFilters) {
Output.Write("\n<div id=\"filters-bar\" class=\"filters-bar\">\n  <div class=\"max-width-wrapper\">\n    <div class=\"row\">\n      <div class=\"column\">");
{
var filters = Model;
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
Output.Write("\n      </div>\n    </div>\n  </div>\n</div>");
}
Output.Write("\n\n<div id=\"search_results_container\" class=\"search-results-container page-main-content max-width-wrapper\">");
{
Output.Write("<div id=\"loading_animation\" class=\"loader\">\n  <div class=\"spinner\"></div>\n  <div id=\"loading_error_container\" class=\"loader-content\"></div>\n</div>");
}
{
var singleSearchModalModel = Model;
Output.Write("\n");
if (singleSearchModalModel.Display.ShowSingleSearchInResults) {
Output.Write("\n    <div id=\"single-search-modal-placeholder\" class=\"modal\" style=\"display: none\" data-pre-selected-date=\"");
Output.Write(singleSearchModalModel.Display.SingleSearchSelectedIsoDateTime);
Output.Write("\">\n        <div id=\"single-search-modal\">\n            <p>\n                ");
Output.Write(Resources.Shared.Common.Modals.SingleSearch_ReserveAt);
Output.Write(" <span id=\"restaurant-name\"></span>\n            </p>\n            <div class=\"row\">");
Html.RenderAction("DateTimePartySize", "Srs", new { domainCulture = singleSearchModalModel.DomainCulture, showSearch = false, selectedCovers = singleSearchModalModel.Request.Covers, selectedDateTime = singleSearchModalModel.Display.SelectedIsoDateTime });Output.Write("\n            </div>\n        </div>\n        <i class=\"icon icon-single-search-modal top\"></i>\n        <i class=\"icon icon-single-search-modal bottom\"></i>\n    </div>");
}
Output.Write("\n");
}
Output.Write("  \n  <div id=\"search_results\" class=\"results-set results-table search-results\" data-name=\"ResultsTable\">");
if (Model.Request.ShowMap != true) {
if (Model.Results.Total > 0) {
{
var resultsTable = Model;
Output.Write("\n\n<div class=\"content-section-header\">");
if (!string.IsNullOrEmpty(resultsTable.Display.Description)) {
Output.Write("\n    <div id=\"page-description\" class=\"page-description\">\n      ");
Output.Write(resultsTable.Display.Description);
Output.Write("\n    </div>");
}
{
var resultsTitle = resultsTable;
Output.Write("\n");
if (!string.IsNullOrEmpty(resultsTitle.Request.Title)) {
Output.Write("\n<h2>");
Output.Write(resultsTitle.Request.Title);
Output.Write("</h2>");
}
Output.Write("\n\n<h3 id=\"results-title\" class=\"results-title color-dark\">");
if (resultsTitle.IsPromo) {
if (resultsTitle.Results.TotalAvailable == 1) {
{
var searchTitle = Resources.Shared.Redesign.Results.Title_Promos;
Output.Write("\n        ");
Output.Write(string.Format(searchTitle, resultsTitle.Results.TotalAvailable));
Output.Write("\n        <span class=\"result-promo-title\">");
Output.Write(resultsTitle.Display.ResultsTitle);
Output.Write("</span>");
}
}
else {
{
var searchTitle = Resources.Shared.Redesign.Results.Title_Promos_Plural;
Output.Write("\n        ");
Output.Write(string.Format(searchTitle, resultsTitle.Results.TotalAvailable));
Output.Write("\n        <span class=\"result-promo-title\">");
Output.Write(resultsTitle.Display.ResultsTitle);
Output.Write("</span>");
}
}
}
else {
Output.Write("\n      ");
Output.Write(resultsTitle.Display.ResultsTitle);
}
Output.Write("\n</h3>\n");
}
Output.Write("\n</div>\n");
if (resultsTable.Display.ShowPop) {
Output.Write("\n<div id=\"search_results_pop\" class=\"results-set results-table pop-table\" data-name=\"PopTable\">");
{
var popTable = resultsTable;
Output.Write("\n");
if (popTable.Results.FeaturedPopRestaurants.Count() > 0 && (popTable.Request.OnlyPopTimes == null || popTable.Request.OnlyPopTimes == false) && (popTable.Request.OnlyUnavailable != true)) {
Output.Write("\n    <section id=\"poptable-results\" class=\"poptable-results content-block with-margin\">\n        <div class=\"content-block-header with-border\">\n            <h6 class=\"pop-title\">");
if (popTable.Results.FeaturedPopRestaurants.Count() == 1) {
Output.Write("\n                    ");
Output.Write(Resources.Shared.Common.Results.FeaturedPopTitle);
}
else {
Output.Write("\n                    ");
Output.Write(Resources.Shared.Common.Results.FeaturedPopTitle_Plural);
}
Output.Write("\n            </h6>\n            <a href=\"https://community.opentable.com/t5/FAQs-Knowledge-Base/What-are-OpenTable-points/ta-p/109\" class=\"pop-about-link\">");
Output.Write(Resources.Shared.Redesign.Results.About1000PointRestaurants);
Output.Write("</a>\n        </div>\n");
var restaurantIndex=0;for (var __iter__restaurant in popTable.Results.FeaturedPopRestaurants) {var restaurant=popTable.Results.FeaturedPopRestaurants[__iter__restaurant];if(typeof(restaurant)!='function') {
{
var result = restaurant;
var resultViewModel = popTable;
var firstRow = restaurantIndex == 0;
var lastRow = restaurantIndex == popTable.Results.TotalPop - 1;
var onlyPopTimes = true;
var includeImages = false;
Output.Write("\n\n<div class=\"result content-section-list-row cf");
if (resultViewModel.Display.ShowTimeSlotsInResults) {
Output.Write(" with-times");
}
Output.Write("\" data-id=\"");
Output.Write(restaurantIndex);
Output.Write("\" data-rid=\"");
Output.Write(result.Id);
Output.Write("\" data-offers=\"");
Output.Write(string.Join(",", result.OfferIds));
Output.Write("\" data-lat=\"");
Output.Write(result.Lat);
Output.Write("\" data-lon=\"");
Output.Write(result.Lon);
Output.Write("\">\n\n   <div class=\"rest-row");
if (includeImages) {
Output.Write(" with-image");
}
Output.Write("\">  ");
if (includeImages) {
Output.Write("\n        <div class=\"rest-row-image\">\n          <img src=\"/s/content/images/no-image.gif\" data-src=\"/img/restimages/x6/");
Output.Write(result.Id);
Output.Write(".jpg\" class=\"lazy rest-image\"/>\n        </div>");
}
Output.Write("\n     <div class=\"rest-row-info\">\n       <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("\" class=\"rest-row-name rest-name\">");
Output.Write(result.Name);
Output.Write("</a>");
{
var reviews = result;
var size = "small";
Output.Write("\n");
{
var showRatings = reviews.Reviews != null && reviews.Reviews.Total > 0;
Output.Write("\n\t<div class=\"rest-row-review\">");
if (showRatings) {
var reviewRating = reviews.Reviews.Rating;
var starTitle = string.Format(reviewRating == 1 ? Resources.Strings.StarRatingText : Resources.Strings.StarRatingText_Plural, reviewRating);
Output.Write("\n\n\t\t\t<div class=\"star-cont\">\n\t\t\t\t<div class=\"stars\"></div>\n\t\t\t\t<div class=\"stars cnt-");
Output.Write(Html.GenerateRatingsStarCount(reviewRating));
Output.Write("\"></div>\n\t\t\t</div>\n\t\t\t<span class=\"star-rating-text\">(");
Output.Write(reviews.Reviews.Total);
Output.Write(")</span>");
}
else {
Output.Write("\n\t\t\t");
Output.Write(Resources.Shared.Redesign.Results.ReviewsComingSoon);
}
Output.Write("\n\t</div>");
}
}
if (resultViewModel.Display.ShowPrices) {
Output.Write("\n         <div class=\"rest-row-pricing\">\n           <i>");
for( var i = 1; i <= result.PriceBand.Id; i++ ){Output.Write("\n             ");
Output.Write(Resources.Shared.Redesign.Strings.CurrencySymbol);
}Output.Write("\n           </i>");
for( var i = 1; i <= 4 - result.PriceBand.Id; i++ ){Output.Write("\n           ");
Output.Write(Resources.Shared.Redesign.Strings.CurrencySymbol);
}Output.Write("\n         </div>");
}
Output.Write("\n\n       <div class=\"rest-row-meta\">\n           ");
Output.Write(result.Cuisine);
Output.Write(" <i>|</i> ");
Output.Write(result.Location);
if (resultViewModel.Request.IsGeoDistanceRequest) {
Output.Write("\n               <i>|</i> ");
Output.Write(string.Format("{0} {1}", result.Distance, Resources.Strings.DistanceUnit_Small));
}
Output.Write("\n");
if (resultViewModel.Request.IsTravelTimeRequest) {
Output.Write("\n               <i>|</i> ");
Output.Write(result.TravelTime);
Output.Write(" minutes");
}
Output.Write("\n       </div>\n");
if (result.TopOffer != null && resultViewModel.Promo == null) {
Output.Write("\n         <div class=\"rest-row-offer\" data-id=\"");
Output.Write(result.TopOffer.Id);
Output.Write("\">\n           <p>");
Output.Write(Resources.Shared.Redesign.Strings.Label_TopOffer);
Output.Write(" <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("#special-offers\">");
Output.Write(result.TopOffer.Name);
Output.Write("</a></p>");
if (result.OfferIds.Count() > 1) {
Output.Write("\n             <p class=\"rest-row-offer-link\">");
Output.Write(Resources.Shared.Common.Results.SeeAllOffers);
Output.Write("</p>");
}
Output.Write("\n         </div>");
}
Output.Write("\n    </div>\n   </div>\n");
if (resultViewModel.Display.ShowSingleSearchInResults) {
{
var searchViewModel = resultViewModel;
var restaurantViewModel = result;
Output.Write("\n");
if (searchViewModel != null 
    && restaurantViewModel != null 
    && restaurantViewModel.Promo != null
    && searchViewModel.IsPromo 
    && !searchViewModel.Request.IsAvailabilityRequest) {
{
var searchViewModelPromo = searchViewModel.Promo;
var restaurantPromo = restaurantViewModel.Promo;
var restaurantViewModelPromo = restaurantViewModel;
Output.Write("\n\n<div class=\"rest-row-promo-wrapper\">");
if (!string.IsNullOrEmpty(restaurantPromo.Message)) {
Output.Write("\n\t<div class=\"rest-promo-message\">\n\t\t");
Output.Write(restaurantPromo.Message);
Output.Write("\n\t</div>");
}
if (!searchViewModelPromo.IsExpired) {
Output.Write("\n\t<div class=\"rest-promo-links\">");
if (restaurantPromo.ReserveLunch) {
Output.Write("\n\t\t<a href=\"#\" class=\"reserve-link lunch\" data-profile-url=\"");
Output.Write(restaurantViewModelPromo.ProfileUri);
Output.Write("\">");
Output.Write(Resources.Shared.Redesign.Strings.Reserve_Lunch);
Output.Write(" ></a>");
}
if (restaurantPromo.ReserveDinner) {
Output.Write("\n\t\t<a href=\"#\" class=\"reserve-link dinner\" data-profile-url=\"");
Output.Write(restaurantViewModelPromo.ProfileUri);
Output.Write("\">");
Output.Write(Resources.Shared.Redesign.Strings.Reserve_Dinner);
Output.Write(" ></a>");
}
if (restaurantPromo.ReserveNow) {
Output.Write("\n\t\t<a href=\"#\" class=\"reserve-link now\" data-profile-url=\"");
Output.Write(restaurantViewModelPromo.ProfileUri);
Output.Write("\">");
Output.Write(Resources.Shared.Redesign.Strings.Reserve_Now);
Output.Write(" ></a>");
}
Output.Write("\n\t</div>");
}
Output.Write(" \n</div>\n");
}
}
else {
Output.Write("\n\t<div class=\"rest-row-reserve-button\"><a href=\"#\" class=\"reserve-link button medium\" data-profile-url=\"");
Output.Write(restaurantViewModel.ProfileUri);
Output.Write("\">");
Output.Write(Resources.Shared.Redesign.Strings.Reserve_Now);
Output.Write("</a></div>");
}
Output.Write("\n\n");
}
}
Output.Write("\n");
if (resultViewModel.Display.ShowPopScheduleInResults) {
{
var popScheduleRestaurant = result;
Output.Write("\n<div class=\"rest-row-popoffers\">\n  <span class=\"rest-row-name\">");
Output.Write(Resources.Shared.PopRestaurantList.Strings.PopScheduleHeading);
Output.Write(":</span>\n  <ul class=\"topreview-text\">");
for (var __iter__weekSchedule in popScheduleRestaurant.PopSchedule.WeekSchedules) {var weekSchedule=popScheduleRestaurant.PopSchedule.WeekSchedules[__iter__weekSchedule];if(typeof(weekSchedule)!='function') {
Output.Write("\n    <li>");
Output.Write(weekSchedule);
Output.Write("</li>");
}}
Output.Write("\n  </ul>\n</div>");
}
}
Output.Write("\n");
if (resultViewModel.Display.ShowTimeSlotsInResults) {
{
var timeslots = result;
var timeSlotsRequest = resultViewModel.Request;
var notAvailableButtonClass = "";
var displayOnlyPopTimes = onlyPopTimes;
Output.Write("\n");
if (timeslots.HasAvail) {
Output.Write("\n    <div class=\"rest-row-times-cont\">\n        <div class=\"rest-row-times\">");
var timeSlotIndex=0;for (var __iter__timeSlot in timeslots.TimeSlots) {var timeSlot=timeslots.TimeSlots[__iter__timeSlot];if(typeof(timeSlot)!='function') {
{
var timeslotDisabled = !timeSlot.IsAvail || (displayOnlyPopTimes && !timeSlot.HasPop);
var isExact = timeSlotIndex == 2;
var checkSum = timeslots.Id + timeSlotsRequest.Covers + 123;
var hasPop = timeSlot.HasPop;
var hasOffers = timeSlot.OfferIds != null && timeSlot.OfferIds.Count() > 0;
var offerIds = hasOffers ? string.Join(",", timeSlot.OfferIds) : "";
var offersCount = timeSlot.OfferIds.Count() + (hasPop ? 1 : 0);
var cultureUrlSegment = timeSlotsRequest.CultureInUrlRoute == null ? "" : "/" + timeSlotsRequest.CultureInUrlRoute;
var slotUrl = string.Format("{6}/httphandlers/ValidateReservationRequest.ashx?rid={0}&d={2}&p={1}&pt={5}&i=1&ss=0&sd={2}&pofids={3}&checksum={4}", timeslots.Id, timeSlotsRequest.Covers, timeSlot.LinkString, string.Join(",", timeSlot.OfferIds), checkSum, timeSlot.HasPop ? "1000" : "100", cultureUrlSegment);
Output.Write("\n              ");
if (timeslotDisabled) {
Output.Write("\n                  <a class=\"rest-row-times-btn unavailable");
if (isExact) {
Output.Write(" exact");
}
Output.Write("\" data-offers=\"");
Output.Write(offerIds);
Output.Write("\" data-rid=\"");
Output.Write(timeslots.Id);
Output.Write("\">&nbsp;</a>");
}
if (!timeslotDisabled) {
Output.Write("\n                  <a class=\"timeslot rest-row-times-btn");
if (isExact) {
Output.Write(" exact");
}
Output.Write("\" href=\"");
Output.Write(slotUrl);
Output.Write("\" data-has-pop=\"");
Output.Write(hasPop);
Output.Write("\" data-offers=\"");
Output.Write(offerIds);
Output.Write("\" data-rid=\"");
Output.Write(timeslots.Id);
Output.Write("\">\n                    ");
Output.Write(timeSlot.TimeString);
if (hasOffers && !displayOnlyPopTimes) {
Output.Write("\n                    <i class=\"with-points\">");
Output.Write(offersCount);
Output.Write("</i>");
}
if ((hasPop && displayOnlyPopTimes) || (hasPop && offersCount == 1)) {
Output.Write("\n                    <i class=\"with-points\">+</i>");
}
Output.Write("\n                  </a>");
}
}
++timeSlotIndex;}}
if (timeslots.HasPop || timeslots.HasOffers) {
Output.Write("\n          <div class=\"notifications\">");
if (timeslots.HasPop && timeslots.HasOffers) {
Output.Write("\n              <span><i class=\"with-points\">");
Output.Write(timeslots.OfferCount + 1);
Output.Write("</i> ");
Output.Write(Resources.Shared.Redesign.Strings.TimeslotLegend_1000Points);
Output.Write(" / ");
Output.Write(Resources.Shared.Redesign.Strings.TimeslotLegend_Offers);
Output.Write("</span>");
}
if (timeslots.HasPop && !timeslots.HasOffers) {
Output.Write("\n              <span><i class=\"with-points\">+</i> ");
Output.Write(Resources.Shared.Redesign.Strings.TimeslotLegend_1000Points);
Output.Write("</span>");
}
if (!timeslots.HasPop && timeslots.HasOffers && timeslots.OfferCount == 1) {
Output.Write("\n              <span><i class=\"with-points\">");
Output.Write(timeslots.OfferCount);
Output.Write("</i> ");
Output.Write(Resources.Shared.Redesign.Strings.TimeslotLegend_Offer);
Output.Write("</span>");
}
if (!timeslots.HasPop && timeslots.HasOffers && timeslots.OfferCount > 1) {
Output.Write("\n              <span><i class=\"with-points\">");
Output.Write(timeslots.OfferCount);
Output.Write("</i> ");
Output.Write(Resources.Shared.Redesign.Strings.TimeslotLegend_Offers);
Output.Write("</span>");
}
Output.Write("\n          </div>");
}
Output.Write("\n        </div>\n    </div>");
}
else {
Output.Write("\n  <div class=\"rest-row-times-cont\">");
if (!string.IsNullOrEmpty(timeslots.UnAvailMsg)) {
Output.Write("\n    <p class=\"not-available-message\">");
Output.Write(timeslots.UnAvailMsg);
Output.Write("</p>");
}
Output.Write("\n    <a href=\"");
Output.Write(timeslots.ProfileUri);
Output.Write("\" class=\"button minimal\">");
Output.Write(Resources.Shared.Common.Results.NextAvailableButton);
Output.Write("</a>\n  </div>");
}
}
}
Output.Write("\n</div>");
}
++restaurantIndex;}}
Output.Write("\n");
if (popTable.Results.TotalPop > popTable.Results.FeaturedPopRestaurants.Count()) {
Output.Write("\n        <div class=\"content-block-footer\">\n            <a href=\"#\" id=\"pop_see_all_link\" class=\"text-arrow-right\">");
Output.Write(string.Format(Resources.Shared.Common.Results.SeeAllPopRestaurantsFormat, popTable.Results.TotalPop));
Output.Write("</a>\n        </div>");
}
Output.Write("\n    </section>");
}
Output.Write("\n\n");
}
Output.Write("\n</div>");
}
Output.Write("\n\n<div class=\"content-section-list infinite-results-list\">");
var restaurantIndex=0;for (var __iter__restaurant in resultsTable.Results.Restaurants) {var restaurant=resultsTable.Results.Restaurants[__iter__restaurant];if(typeof(restaurant)!='function') {
{
var result = restaurant;
var resultViewModel = resultsTable;
var firstRow = restaurantIndex == 0;
var lastRow = restaurantIndex == resultsTable.Results.Restaurants.Count()-1;
var onlyPopTimes = resultsTable.Request.OnlyPopTimes == true;
var includeImages = true;
Output.Write("\n\n<div class=\"result content-section-list-row cf");
if (resultViewModel.Display.ShowTimeSlotsInResults) {
Output.Write(" with-times");
}
Output.Write("\" data-id=\"");
Output.Write(restaurantIndex);
Output.Write("\" data-rid=\"");
Output.Write(result.Id);
Output.Write("\" data-offers=\"");
Output.Write(string.Join(",", result.OfferIds));
Output.Write("\" data-lat=\"");
Output.Write(result.Lat);
Output.Write("\" data-lon=\"");
Output.Write(result.Lon);
Output.Write("\">\n\n   <div class=\"rest-row");
if (includeImages) {
Output.Write(" with-image");
}
Output.Write("\">  ");
if (includeImages) {
Output.Write("\n        <div class=\"rest-row-image\">\n          <img src=\"/s/content/images/no-image.gif\" data-src=\"/img/restimages/x6/");
Output.Write(result.Id);
Output.Write(".jpg\" class=\"lazy rest-image\"/>\n        </div>");
}
Output.Write("\n     <div class=\"rest-row-info\">\n       <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("\" class=\"rest-row-name rest-name\">");
Output.Write(result.Name);
Output.Write("</a>");
{
var reviews = result;
var size = "small";
Output.Write("\n");
{
var showRatings = reviews.Reviews != null && reviews.Reviews.Total > 0;
Output.Write("\n\t<div class=\"rest-row-review\">");
if (showRatings) {
var reviewRating = reviews.Reviews.Rating;
var starTitle = string.Format(reviewRating == 1 ? Resources.Strings.StarRatingText : Resources.Strings.StarRatingText_Plural, reviewRating);
Output.Write("\n\n\t\t\t<div class=\"star-cont\">\n\t\t\t\t<div class=\"stars\"></div>\n\t\t\t\t<div class=\"stars cnt-");
Output.Write(Html.GenerateRatingsStarCount(reviewRating));
Output.Write("\"></div>\n\t\t\t</div>\n\t\t\t<span class=\"star-rating-text\">(");
Output.Write(reviews.Reviews.Total);
Output.Write(")</span>");
}
else {
Output.Write("\n\t\t\t");
Output.Write(Resources.Shared.Redesign.Results.ReviewsComingSoon);
}
Output.Write("\n\t</div>");
}
}
if (resultViewModel.Display.ShowPrices) {
Output.Write("\n         <div class=\"rest-row-pricing\">\n           <i>");
for( var i = 1; i <= result.PriceBand.Id; i++ ){Output.Write("\n             ");
Output.Write(Resources.Shared.Redesign.Strings.CurrencySymbol);
}Output.Write("\n           </i>");
for( var i = 1; i <= 4 - result.PriceBand.Id; i++ ){Output.Write("\n           ");
Output.Write(Resources.Shared.Redesign.Strings.CurrencySymbol);
}Output.Write("\n         </div>");
}
Output.Write("\n\n       <div class=\"rest-row-meta\">\n           ");
Output.Write(result.Cuisine);
Output.Write(" <i>|</i> ");
Output.Write(result.Location);
if (resultViewModel.Request.IsGeoDistanceRequest) {
Output.Write("\n               <i>|</i> ");
Output.Write(string.Format("{0} {1}", result.Distance, Resources.Strings.DistanceUnit_Small));
}
Output.Write("\n");
if (resultViewModel.Request.IsTravelTimeRequest) {
Output.Write("\n               <i>|</i> ");
Output.Write(result.TravelTime);
Output.Write(" minutes");
}
Output.Write("\n       </div>\n");
if (result.TopOffer != null && resultViewModel.Promo == null) {
Output.Write("\n         <div class=\"rest-row-offer\" data-id=\"");
Output.Write(result.TopOffer.Id);
Output.Write("\">\n           <p>");
Output.Write(Resources.Shared.Redesign.Strings.Label_TopOffer);
Output.Write(" <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("#special-offers\">");
Output.Write(result.TopOffer.Name);
Output.Write("</a></p>");
if (result.OfferIds.Count() > 1) {
Output.Write("\n             <p class=\"rest-row-offer-link\">");
Output.Write(Resources.Shared.Common.Results.SeeAllOffers);
Output.Write("</p>");
}
Output.Write("\n         </div>");
}
Output.Write("\n    </div>\n   </div>\n");
if (resultViewModel.Display.ShowSingleSearchInResults) {
{
var searchViewModel = resultViewModel;
var restaurantViewModel = result;
Output.Write("\n");
if (searchViewModel != null 
    && restaurantViewModel != null 
    && restaurantViewModel.Promo != null
    && searchViewModel.IsPromo 
    && !searchViewModel.Request.IsAvailabilityRequest) {
{
var searchViewModelPromo = searchViewModel.Promo;
var restaurantPromo = restaurantViewModel.Promo;
var restaurantViewModelPromo = restaurantViewModel;
Output.Write("\n\n<div class=\"rest-row-promo-wrapper\">");
if (!string.IsNullOrEmpty(restaurantPromo.Message)) {
Output.Write("\n\t<div class=\"rest-promo-message\">\n\t\t");
Output.Write(restaurantPromo.Message);
Output.Write("\n\t</div>");
}
if (!searchViewModelPromo.IsExpired) {
Output.Write("\n\t<div class=\"rest-promo-links\">");
if (restaurantPromo.ReserveLunch) {
Output.Write("\n\t\t<a href=\"#\" class=\"reserve-link lunch\" data-profile-url=\"");
Output.Write(restaurantViewModelPromo.ProfileUri);
Output.Write("\">");
Output.Write(Resources.Shared.Redesign.Strings.Reserve_Lunch);
Output.Write(" ></a>");
}
if (restaurantPromo.ReserveDinner) {
Output.Write("\n\t\t<a href=\"#\" class=\"reserve-link dinner\" data-profile-url=\"");
Output.Write(restaurantViewModelPromo.ProfileUri);
Output.Write("\">");
Output.Write(Resources.Shared.Redesign.Strings.Reserve_Dinner);
Output.Write(" ></a>");
}
if (restaurantPromo.ReserveNow) {
Output.Write("\n\t\t<a href=\"#\" class=\"reserve-link now\" data-profile-url=\"");
Output.Write(restaurantViewModelPromo.ProfileUri);
Output.Write("\">");
Output.Write(Resources.Shared.Redesign.Strings.Reserve_Now);
Output.Write(" ></a>");
}
Output.Write("\n\t</div>");
}
Output.Write(" \n</div>\n");
}
}
else {
Output.Write("\n\t<div class=\"rest-row-reserve-button\"><a href=\"#\" class=\"reserve-link button medium\" data-profile-url=\"");
Output.Write(restaurantViewModel.ProfileUri);
Output.Write("\">");
Output.Write(Resources.Shared.Redesign.Strings.Reserve_Now);
Output.Write("</a></div>");
}
Output.Write("\n\n");
}
}
Output.Write("\n");
if (resultViewModel.Display.ShowPopScheduleInResults) {
{
var popScheduleRestaurant = result;
Output.Write("\n<div class=\"rest-row-popoffers\">\n  <span class=\"rest-row-name\">");
Output.Write(Resources.Shared.PopRestaurantList.Strings.PopScheduleHeading);
Output.Write(":</span>\n  <ul class=\"topreview-text\">");
for (var __iter__weekSchedule in popScheduleRestaurant.PopSchedule.WeekSchedules) {var weekSchedule=popScheduleRestaurant.PopSchedule.WeekSchedules[__iter__weekSchedule];if(typeof(weekSchedule)!='function') {
Output.Write("\n    <li>");
Output.Write(weekSchedule);
Output.Write("</li>");
}}
Output.Write("\n  </ul>\n</div>");
}
}
Output.Write("\n");
if (resultViewModel.Display.ShowTimeSlotsInResults) {
{
var timeslots = result;
var timeSlotsRequest = resultViewModel.Request;
var notAvailableButtonClass = "";
var displayOnlyPopTimes = onlyPopTimes;
Output.Write("\n");
if (timeslots.HasAvail) {
Output.Write("\n    <div class=\"rest-row-times-cont\">\n        <div class=\"rest-row-times\">");
var timeSlotIndex=0;for (var __iter__timeSlot in timeslots.TimeSlots) {var timeSlot=timeslots.TimeSlots[__iter__timeSlot];if(typeof(timeSlot)!='function') {
{
var timeslotDisabled = !timeSlot.IsAvail || (displayOnlyPopTimes && !timeSlot.HasPop);
var isExact = timeSlotIndex == 2;
var checkSum = timeslots.Id + timeSlotsRequest.Covers + 123;
var hasPop = timeSlot.HasPop;
var hasOffers = timeSlot.OfferIds != null && timeSlot.OfferIds.Count() > 0;
var offerIds = hasOffers ? string.Join(",", timeSlot.OfferIds) : "";
var offersCount = timeSlot.OfferIds.Count() + (hasPop ? 1 : 0);
var cultureUrlSegment = timeSlotsRequest.CultureInUrlRoute == null ? "" : "/" + timeSlotsRequest.CultureInUrlRoute;
var slotUrl = string.Format("{6}/httphandlers/ValidateReservationRequest.ashx?rid={0}&d={2}&p={1}&pt={5}&i=1&ss=0&sd={2}&pofids={3}&checksum={4}", timeslots.Id, timeSlotsRequest.Covers, timeSlot.LinkString, string.Join(",", timeSlot.OfferIds), checkSum, timeSlot.HasPop ? "1000" : "100", cultureUrlSegment);
Output.Write("\n              ");
if (timeslotDisabled) {
Output.Write("\n                  <a class=\"rest-row-times-btn unavailable");
if (isExact) {
Output.Write(" exact");
}
Output.Write("\" data-offers=\"");
Output.Write(offerIds);
Output.Write("\" data-rid=\"");
Output.Write(timeslots.Id);
Output.Write("\">&nbsp;</a>");
}
if (!timeslotDisabled) {
Output.Write("\n                  <a class=\"timeslot rest-row-times-btn");
if (isExact) {
Output.Write(" exact");
}
Output.Write("\" href=\"");
Output.Write(slotUrl);
Output.Write("\" data-has-pop=\"");
Output.Write(hasPop);
Output.Write("\" data-offers=\"");
Output.Write(offerIds);
Output.Write("\" data-rid=\"");
Output.Write(timeslots.Id);
Output.Write("\">\n                    ");
Output.Write(timeSlot.TimeString);
if (hasOffers && !displayOnlyPopTimes) {
Output.Write("\n                    <i class=\"with-points\">");
Output.Write(offersCount);
Output.Write("</i>");
}
if ((hasPop && displayOnlyPopTimes) || (hasPop && offersCount == 1)) {
Output.Write("\n                    <i class=\"with-points\">+</i>");
}
Output.Write("\n                  </a>");
}
}
++timeSlotIndex;}}
if (timeslots.HasPop || timeslots.HasOffers) {
Output.Write("\n          <div class=\"notifications\">");
if (timeslots.HasPop && timeslots.HasOffers) {
Output.Write("\n              <span><i class=\"with-points\">");
Output.Write(timeslots.OfferCount + 1);
Output.Write("</i> ");
Output.Write(Resources.Shared.Redesign.Strings.TimeslotLegend_1000Points);
Output.Write(" / ");
Output.Write(Resources.Shared.Redesign.Strings.TimeslotLegend_Offers);
Output.Write("</span>");
}
if (timeslots.HasPop && !timeslots.HasOffers) {
Output.Write("\n              <span><i class=\"with-points\">+</i> ");
Output.Write(Resources.Shared.Redesign.Strings.TimeslotLegend_1000Points);
Output.Write("</span>");
}
if (!timeslots.HasPop && timeslots.HasOffers && timeslots.OfferCount == 1) {
Output.Write("\n              <span><i class=\"with-points\">");
Output.Write(timeslots.OfferCount);
Output.Write("</i> ");
Output.Write(Resources.Shared.Redesign.Strings.TimeslotLegend_Offer);
Output.Write("</span>");
}
if (!timeslots.HasPop && timeslots.HasOffers && timeslots.OfferCount > 1) {
Output.Write("\n              <span><i class=\"with-points\">");
Output.Write(timeslots.OfferCount);
Output.Write("</i> ");
Output.Write(Resources.Shared.Redesign.Strings.TimeslotLegend_Offers);
Output.Write("</span>");
}
Output.Write("\n          </div>");
}
Output.Write("\n        </div>\n    </div>");
}
else {
Output.Write("\n  <div class=\"rest-row-times-cont\">");
if (!string.IsNullOrEmpty(timeslots.UnAvailMsg)) {
Output.Write("\n    <p class=\"not-available-message\">");
Output.Write(timeslots.UnAvailMsg);
Output.Write("</p>");
}
Output.Write("\n    <a href=\"");
Output.Write(timeslots.ProfileUri);
Output.Write("\" class=\"button minimal\">");
Output.Write(Resources.Shared.Common.Results.NextAvailableButton);
Output.Write("</a>\n  </div>");
}
}
}
Output.Write("\n</div>");
}
++restaurantIndex;}}
Output.Write("\n</div>\n");
if (resultsTable.Display.ShowPagination) {
{
var pagination = resultsTable.Display;
var showPageNumbers = true;
Output.Write("\n");
{
var previousLink = (pagination.PaginationLinks ==null) ? "#" : (!string.IsNullOrEmpty(pagination.PaginationLinks.Previous)) ? pagination.PaginationLinks.Previous : "";
var nextLink = (pagination.PaginationLinks ==null) ? "#" : (!string.IsNullOrEmpty(pagination.PaginationLinks.Next)) ? pagination.PaginationLinks.Next : "";
Output.Write("\n\n    <div class=\"pagination-container\">\n        <ul id=\"results-pagination\" class=\"pagination\">\n            <li class=\"pagination-li pagination-arrow pagination-arrow-prev\">");
if (!string.IsNullOrEmpty(previousLink)) {
Output.Write("\n                    <a href=\"");
Output.Write(previousLink);
Output.Write("\" class=\"pagination-link pagination-prev\">");
Output.Write(Resources.Shared.Redesign.Strings.Label_Previous);
Output.Write("</a>");
}
else {
Output.Write("\n                    <span class=\"pagination-link pagination-prev pagination-unavailable\">");
Output.Write(Resources.Shared.Redesign.Strings.Label_Previous);
Output.Write("</span>");
}
Output.Write("\n            </li>");
if (showPageNumbers) {
for (var __iter__page in pagination.PaginationIndex.Pages) {var page=pagination.PaginationIndex.Pages[__iter__page];if(typeof(page)!='function') {
Output.Write("\n\t\t\t\t\t<li class=\"pagination-li\">\n\t\t\t\t\t\t<span class=\"js-pagination-page");
if (page.From != -1) {
Output.Write(" pagination-link");
}
if (page.From == -1) {
Output.Write(" pagination-spacer");
}
if (page.IsCurrent) {
Output.Write(" pagination-current");
}
Output.Write("\" data-from=\"");
Output.Write(page.From);
Output.Write("\">");
Output.Write(page.Name);
Output.Write("</span>\n\t\t\t\t\t</li>");
}}
Output.Write("            ");
}
Output.Write("\t\n            <li class=\"pagination-li pagination-arrow pagination-arrow-next\">");
if (!string.IsNullOrEmpty(nextLink)) {
Output.Write("\n                    <a href=\"");
Output.Write(nextLink);
Output.Write("\" class=\"pagination-link pagination-next\">");
Output.Write(Resources.Shared.Redesign.Strings.Label_Next);
Output.Write("</a>");
}
else {
Output.Write("\n                    <span class=\"pagination-link pagination-next pagination-unavailable\">");
Output.Write(Resources.Shared.Redesign.Strings.Label_Next);
Output.Write("</span>");
}
Output.Write("\n            </li>\n        </ul>\n    </div>");
}
}
}
Output.Write("\n");
{
var availabilityLink = resultsTable;
Output.Write("\n");
if (availabilityLink.Request.IsAvailabilityRequest) {
Output.Write("\n    <br/>");
if (availabilityLink.Request.OnlyUnavailable == true && availabilityLink.Results.TotalAvailable > 0) {
var linkText = string.Format(availabilityLink.Results.TotalAvailable == 1 ? Resources.Shared.Redesign.Results.WithAvailabilityLink : Resources.Shared.Redesign.Results.WithAvailabilityLink_Plural, availabilityLink.Results.TotalAvailable);
Output.Write("\n        <a href=\"#\" id=\"availability_link\" class=\"availability-link\">");
Output.Write(linkText);
Output.Write("</a>");
}
else if ((availabilityLink.Request.OnlyUnavailable == null || availabilityLink.Request.OnlyUnavailable == false) && availabilityLink.Results.TotalUnavailable > 0) {
var description = Resources.Shared.Redesign.Results.IncludeInterspercedAvailabilityText;
var linkText = Resources.Shared.Redesign.Results.IncludeInterspercedAvailabilityLink;
Output.Write("\n        <p>");
Output.Write(string.Format(description, availabilityLink.Results.TotalUnavailable));
Output.Write("</p>\n        <a href=\"#\" id=\"availability_link\" class=\"text-arrow-right with-availability\">");
Output.Write(linkText);
Output.Write("</a>");
}
}
}
Output.Write("\n");
if (!string.IsNullOrEmpty(resultsTable.Display.AdditionalDetails)) {
Output.Write("\n<div class=\"promo-more-details\">\n    ");
Output.Write(resultsTable.Display.AdditionalDetails);
Output.Write("\n</div>");
}
Output.Write("\n");
}
}
else {
{
var noResults = Model;
var clearLastFilter = false;
Output.Write("\n");
var hasMetro = noResults.Display.Metro != null;
Output.Write("\n\n<div class=\"content-section-header no-results\">");
if (noResults.Display.ShowDescriptionForZeroResults && !string.IsNullOrEmpty(noResults.Display.PageMetaData.Description)) {
Output.Write("\n       <p id=\"page-description\" class=\"page-description\">\n         ");
Output.Write(noResults.Display.PageMetaData.Description);
Output.Write("\n       </p>");
}
Output.Write("\n  \n\n    <h3 class=\"color-dark\">");
Output.Write(Resources.Shared.Redesign.NoResults.Heading);
Output.Write("</h3>\n\n    <div class=\"block\">\n        <p class=\"no-result-message\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_NoMatch_Message);
Output.Write("</p>\n");
if (clearLastFilter == true) {
Output.Write("\n            <button id=\"clear_last_filter\" class=\"button\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_UndoLastFilterButton);
Output.Write("</button>");
}
Output.Write("\n");
if (clearLastFilter == true && hasMetro) {
Output.Write("\n            <span class=\"or\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_Or);
Output.Write("</span>");
}
Output.Write("\n        ");
if (hasMetro) {
Output.Write("\n            <button id=\"start_over\" class=\"button\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_StartOverButton);
Output.Write("</button>");
}
Output.Write("\n    </div>\n\n    <h3 class=\"color-dark\">");
Output.Write(Resources.Shared.Redesign.NoResults.OtherSuggestionsHeading);
Output.Write("</h3>\n\n    <div class=\"block\">");
if (hasMetro) {
Output.Write("\n        <div>\n            <a href=\"/rest_list.aspx?m=");
Output.Write(noResults.Request.MetroId);
Output.Write("\" class=\"link\">");
Output.Write(string.Format(Resources.Shared.Search.Strings.NoSearchResults_MetroListLink, noResults.Display.Metro.Name));
Output.Write("</a>\n        </div>");
}
if (hasMetro) {
Output.Write("\n            <div>\n                <a href=\"/\" class=\"link\">");
Output.Write(string.Format(Resources.Shared.Search.Strings.NoSearchResults_MetroLink, noResults.Display.Metro.Name));
Output.Write("</a>\n            </div>");
}
Output.Write("\n        <p class=\"no-result-message italic\">");
Output.Write(Resources.Shared.Redesign.NoResults.OtherSuggestionsMessage);
Output.Write("</p>\n    </div>\n\n</div>");
}
}
}
Output.Write("\n  </div>\n\n    <div id=\"search_results_map\" class=\"results-set results-map search-results\" data-name=\"ResultsMap\">");
if (Model.Request.ShowMap == true) {
{
var resultsMap = Model;
var count = 0;
var clearLastFilter = false;
Output.Write("\n\n<div class=\"page-main cf\" style=\"display:");
if (resultsMap.Request.ShowMap == true) {
Output.Write(" block");
}
Output.Write("\">\n\t<div id=\"map\" class=\"map-container\">\n\t\t<div id=\"map-inner\" class=\"map-inner\">\n\t\t\t<div id=\"results_map\" class=\"map-placeholder \">\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div id=\"search\" class=\"search-container to-map-view\">\n\t\t<div class=\"max-width-wrapper\">\n\t\t\t<div class=\"page-main-content\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"column\">\n\n\t\t\t\t\t\t<div class=\"content-section-header with-border\">");
{
var resultsTitle = resultsMap;
Output.Write("\n");
if (!string.IsNullOrEmpty(resultsTitle.Request.Title)) {
Output.Write("\n<h2>");
Output.Write(resultsTitle.Request.Title);
Output.Write("</h2>");
}
Output.Write("\n\n<h3 id=\"results-title\" class=\"results-title color-dark\">");
if (resultsTitle.IsPromo) {
if (resultsTitle.Results.TotalAvailable == 1) {
{
var searchTitle = Resources.Shared.Redesign.Results.Title_Promos;
Output.Write("\n        ");
Output.Write(string.Format(searchTitle, resultsTitle.Results.TotalAvailable));
Output.Write("\n        <span class=\"result-promo-title\">");
Output.Write(resultsTitle.Display.ResultsTitle);
Output.Write("</span>");
}
}
else {
{
var searchTitle = Resources.Shared.Redesign.Results.Title_Promos_Plural;
Output.Write("\n        ");
Output.Write(string.Format(searchTitle, resultsTitle.Results.TotalAvailable));
Output.Write("\n        <span class=\"result-promo-title\">");
Output.Write(resultsTitle.Display.ResultsTitle);
Output.Write("</span>");
}
}
}
else {
Output.Write("\n      ");
Output.Write(resultsTitle.Display.ResultsTitle);
}
Output.Write("\n</h3>\n");
}
Output.Write("\n\t\t\t\t\t\t</div>\n");
if (resultsMap.Results.Total > 0) {
if (resultsMap.Promo != null) {
Output.Write("\n\t\t\t\t\t\t\t\t<div id=\"single-search-modal-placeholder\" class=\"modal\"></div>");
}
{
var resultsList = resultsMap;
Output.Write("\n\n<div id=\"map_results_list\" class=\"results-list content-section\">\n\t<ul class=\"content-section-list infinite-results-list\">");
var restaurantIndex=0;for (var __iter__restaurant in resultsList.Results.Restaurants) {var restaurant=resultsList.Results.Restaurants[__iter__restaurant];if(typeof(restaurant)!='function') {
{
var result = restaurant;
var resultViewModel = resultsList;
var firstRow = restaurantIndex == 0;
var lastRow = restaurantIndex == resultsList.Results.Restaurants.Count()-1;
var onlyPopTimes = false;
var includeImages = true;
Output.Write("\n\n<div class=\"result content-section-list-row cf");
if (resultViewModel.Display.ShowTimeSlotsInResults) {
Output.Write(" with-times");
}
Output.Write("\" data-id=\"");
Output.Write(restaurantIndex);
Output.Write("\" data-rid=\"");
Output.Write(result.Id);
Output.Write("\" data-offers=\"");
Output.Write(string.Join(",", result.OfferIds));
Output.Write("\" data-lat=\"");
Output.Write(result.Lat);
Output.Write("\" data-lon=\"");
Output.Write(result.Lon);
Output.Write("\">\n\n   <div class=\"rest-row");
if (includeImages) {
Output.Write(" with-image");
}
Output.Write("\">  ");
if (includeImages) {
Output.Write("\n        <div class=\"rest-row-image\">\n          <img src=\"/s/content/images/no-image.gif\" data-src=\"/img/restimages/x6/");
Output.Write(result.Id);
Output.Write(".jpg\" class=\"lazy rest-image\"/>\n        </div>");
}
Output.Write("\n     <div class=\"rest-row-info\">\n       <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("\" class=\"rest-row-name rest-name\">");
Output.Write(result.Name);
Output.Write("</a>");
{
var reviews = result;
var size = "small";
Output.Write("\n");
{
var showRatings = reviews.Reviews != null && reviews.Reviews.Total > 0;
Output.Write("\n\t<div class=\"rest-row-review\">");
if (showRatings) {
var reviewRating = reviews.Reviews.Rating;
var starTitle = string.Format(reviewRating == 1 ? Resources.Strings.StarRatingText : Resources.Strings.StarRatingText_Plural, reviewRating);
Output.Write("\n\n\t\t\t<div class=\"star-cont\">\n\t\t\t\t<div class=\"stars\"></div>\n\t\t\t\t<div class=\"stars cnt-");
Output.Write(Html.GenerateRatingsStarCount(reviewRating));
Output.Write("\"></div>\n\t\t\t</div>\n\t\t\t<span class=\"star-rating-text\">(");
Output.Write(reviews.Reviews.Total);
Output.Write(")</span>");
}
else {
Output.Write("\n\t\t\t");
Output.Write(Resources.Shared.Redesign.Results.ReviewsComingSoon);
}
Output.Write("\n\t</div>");
}
}
if (resultViewModel.Display.ShowPrices) {
Output.Write("\n         <div class=\"rest-row-pricing\">\n           <i>");
for( var i = 1; i <= result.PriceBand.Id; i++ ){Output.Write("\n             ");
Output.Write(Resources.Shared.Redesign.Strings.CurrencySymbol);
}Output.Write("\n           </i>");
for( var i = 1; i <= 4 - result.PriceBand.Id; i++ ){Output.Write("\n           ");
Output.Write(Resources.Shared.Redesign.Strings.CurrencySymbol);
}Output.Write("\n         </div>");
}
Output.Write("\n\n       <div class=\"rest-row-meta\">\n           ");
Output.Write(result.Cuisine);
Output.Write(" <i>|</i> ");
Output.Write(result.Location);
if (resultViewModel.Request.IsGeoDistanceRequest) {
Output.Write("\n               <i>|</i> ");
Output.Write(string.Format("{0} {1}", result.Distance, Resources.Strings.DistanceUnit_Small));
}
Output.Write("\n");
if (resultViewModel.Request.IsTravelTimeRequest) {
Output.Write("\n               <i>|</i> ");
Output.Write(result.TravelTime);
Output.Write(" minutes");
}
Output.Write("\n       </div>\n");
if (result.TopOffer != null && resultViewModel.Promo == null) {
Output.Write("\n         <div class=\"rest-row-offer\" data-id=\"");
Output.Write(result.TopOffer.Id);
Output.Write("\">\n           <p>");
Output.Write(Resources.Shared.Redesign.Strings.Label_TopOffer);
Output.Write(" <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("#special-offers\">");
Output.Write(result.TopOffer.Name);
Output.Write("</a></p>");
if (result.OfferIds.Count() > 1) {
Output.Write("\n             <p class=\"rest-row-offer-link\">");
Output.Write(Resources.Shared.Common.Results.SeeAllOffers);
Output.Write("</p>");
}
Output.Write("\n         </div>");
}
Output.Write("\n    </div>\n   </div>\n");
if (resultViewModel.Display.ShowSingleSearchInResults) {
{
var searchViewModel = resultViewModel;
var restaurantViewModel = result;
Output.Write("\n");
if (searchViewModel != null 
    && restaurantViewModel != null 
    && restaurantViewModel.Promo != null
    && searchViewModel.IsPromo 
    && !searchViewModel.Request.IsAvailabilityRequest) {
{
var searchViewModelPromo = searchViewModel.Promo;
var restaurantPromo = restaurantViewModel.Promo;
var restaurantViewModelPromo = restaurantViewModel;
Output.Write("\n\n<div class=\"rest-row-promo-wrapper\">");
if (!string.IsNullOrEmpty(restaurantPromo.Message)) {
Output.Write("\n\t<div class=\"rest-promo-message\">\n\t\t");
Output.Write(restaurantPromo.Message);
Output.Write("\n\t</div>");
}
if (!searchViewModelPromo.IsExpired) {
Output.Write("\n\t<div class=\"rest-promo-links\">");
if (restaurantPromo.ReserveLunch) {
Output.Write("\n\t\t<a href=\"#\" class=\"reserve-link lunch\" data-profile-url=\"");
Output.Write(restaurantViewModelPromo.ProfileUri);
Output.Write("\">");
Output.Write(Resources.Shared.Redesign.Strings.Reserve_Lunch);
Output.Write(" ></a>");
}
if (restaurantPromo.ReserveDinner) {
Output.Write("\n\t\t<a href=\"#\" class=\"reserve-link dinner\" data-profile-url=\"");
Output.Write(restaurantViewModelPromo.ProfileUri);
Output.Write("\">");
Output.Write(Resources.Shared.Redesign.Strings.Reserve_Dinner);
Output.Write(" ></a>");
}
if (restaurantPromo.ReserveNow) {
Output.Write("\n\t\t<a href=\"#\" class=\"reserve-link now\" data-profile-url=\"");
Output.Write(restaurantViewModelPromo.ProfileUri);
Output.Write("\">");
Output.Write(Resources.Shared.Redesign.Strings.Reserve_Now);
Output.Write(" ></a>");
}
Output.Write("\n\t</div>");
}
Output.Write(" \n</div>\n");
}
}
else {
Output.Write("\n\t<div class=\"rest-row-reserve-button\"><a href=\"#\" class=\"reserve-link button medium\" data-profile-url=\"");
Output.Write(restaurantViewModel.ProfileUri);
Output.Write("\">");
Output.Write(Resources.Shared.Redesign.Strings.Reserve_Now);
Output.Write("</a></div>");
}
Output.Write("\n\n");
}
}
Output.Write("\n");
if (resultViewModel.Display.ShowPopScheduleInResults) {
{
var popScheduleRestaurant = result;
Output.Write("\n<div class=\"rest-row-popoffers\">\n  <span class=\"rest-row-name\">");
Output.Write(Resources.Shared.PopRestaurantList.Strings.PopScheduleHeading);
Output.Write(":</span>\n  <ul class=\"topreview-text\">");
for (var __iter__weekSchedule in popScheduleRestaurant.PopSchedule.WeekSchedules) {var weekSchedule=popScheduleRestaurant.PopSchedule.WeekSchedules[__iter__weekSchedule];if(typeof(weekSchedule)!='function') {
Output.Write("\n    <li>");
Output.Write(weekSchedule);
Output.Write("</li>");
}}
Output.Write("\n  </ul>\n</div>");
}
}
Output.Write("\n");
if (resultViewModel.Display.ShowTimeSlotsInResults) {
{
var timeslots = result;
var timeSlotsRequest = resultViewModel.Request;
var notAvailableButtonClass = "";
var displayOnlyPopTimes = onlyPopTimes;
Output.Write("\n");
if (timeslots.HasAvail) {
Output.Write("\n    <div class=\"rest-row-times-cont\">\n        <div class=\"rest-row-times\">");
var timeSlotIndex=0;for (var __iter__timeSlot in timeslots.TimeSlots) {var timeSlot=timeslots.TimeSlots[__iter__timeSlot];if(typeof(timeSlot)!='function') {
{
var timeslotDisabled = !timeSlot.IsAvail || (displayOnlyPopTimes && !timeSlot.HasPop);
var isExact = timeSlotIndex == 2;
var checkSum = timeslots.Id + timeSlotsRequest.Covers + 123;
var hasPop = timeSlot.HasPop;
var hasOffers = timeSlot.OfferIds != null && timeSlot.OfferIds.Count() > 0;
var offerIds = hasOffers ? string.Join(",", timeSlot.OfferIds) : "";
var offersCount = timeSlot.OfferIds.Count() + (hasPop ? 1 : 0);
var cultureUrlSegment = timeSlotsRequest.CultureInUrlRoute == null ? "" : "/" + timeSlotsRequest.CultureInUrlRoute;
var slotUrl = string.Format("{6}/httphandlers/ValidateReservationRequest.ashx?rid={0}&d={2}&p={1}&pt={5}&i=1&ss=0&sd={2}&pofids={3}&checksum={4}", timeslots.Id, timeSlotsRequest.Covers, timeSlot.LinkString, string.Join(",", timeSlot.OfferIds), checkSum, timeSlot.HasPop ? "1000" : "100", cultureUrlSegment);
Output.Write("\n              ");
if (timeslotDisabled) {
Output.Write("\n                  <a class=\"rest-row-times-btn unavailable");
if (isExact) {
Output.Write(" exact");
}
Output.Write("\" data-offers=\"");
Output.Write(offerIds);
Output.Write("\" data-rid=\"");
Output.Write(timeslots.Id);
Output.Write("\">&nbsp;</a>");
}
if (!timeslotDisabled) {
Output.Write("\n                  <a class=\"timeslot rest-row-times-btn");
if (isExact) {
Output.Write(" exact");
}
Output.Write("\" href=\"");
Output.Write(slotUrl);
Output.Write("\" data-has-pop=\"");
Output.Write(hasPop);
Output.Write("\" data-offers=\"");
Output.Write(offerIds);
Output.Write("\" data-rid=\"");
Output.Write(timeslots.Id);
Output.Write("\">\n                    ");
Output.Write(timeSlot.TimeString);
if (hasOffers && !displayOnlyPopTimes) {
Output.Write("\n                    <i class=\"with-points\">");
Output.Write(offersCount);
Output.Write("</i>");
}
if ((hasPop && displayOnlyPopTimes) || (hasPop && offersCount == 1)) {
Output.Write("\n                    <i class=\"with-points\">+</i>");
}
Output.Write("\n                  </a>");
}
}
++timeSlotIndex;}}
if (timeslots.HasPop || timeslots.HasOffers) {
Output.Write("\n          <div class=\"notifications\">");
if (timeslots.HasPop && timeslots.HasOffers) {
Output.Write("\n              <span><i class=\"with-points\">");
Output.Write(timeslots.OfferCount + 1);
Output.Write("</i> ");
Output.Write(Resources.Shared.Redesign.Strings.TimeslotLegend_1000Points);
Output.Write(" / ");
Output.Write(Resources.Shared.Redesign.Strings.TimeslotLegend_Offers);
Output.Write("</span>");
}
if (timeslots.HasPop && !timeslots.HasOffers) {
Output.Write("\n              <span><i class=\"with-points\">+</i> ");
Output.Write(Resources.Shared.Redesign.Strings.TimeslotLegend_1000Points);
Output.Write("</span>");
}
if (!timeslots.HasPop && timeslots.HasOffers && timeslots.OfferCount == 1) {
Output.Write("\n              <span><i class=\"with-points\">");
Output.Write(timeslots.OfferCount);
Output.Write("</i> ");
Output.Write(Resources.Shared.Redesign.Strings.TimeslotLegend_Offer);
Output.Write("</span>");
}
if (!timeslots.HasPop && timeslots.HasOffers && timeslots.OfferCount > 1) {
Output.Write("\n              <span><i class=\"with-points\">");
Output.Write(timeslots.OfferCount);
Output.Write("</i> ");
Output.Write(Resources.Shared.Redesign.Strings.TimeslotLegend_Offers);
Output.Write("</span>");
}
Output.Write("\n          </div>");
}
Output.Write("\n        </div>\n    </div>");
}
else {
Output.Write("\n  <div class=\"rest-row-times-cont\">");
if (!string.IsNullOrEmpty(timeslots.UnAvailMsg)) {
Output.Write("\n    <p class=\"not-available-message\">");
Output.Write(timeslots.UnAvailMsg);
Output.Write("</p>");
}
Output.Write("\n    <a href=\"");
Output.Write(timeslots.ProfileUri);
Output.Write("\" class=\"button minimal\">");
Output.Write(Resources.Shared.Common.Results.NextAvailableButton);
Output.Write("</a>\n  </div>");
}
}
}
Output.Write("\n</div>");
}
++restaurantIndex;}}
Output.Write("\n\t</ul>\n</div>\n");
}
if (resultsMap.Display.ShowPagination) {
{
var pagination = resultsMap.Display;
var showPageNumbers = false;
Output.Write("\n");
{
var previousLink = (pagination.PaginationLinks ==null) ? "#" : (!string.IsNullOrEmpty(pagination.PaginationLinks.Previous)) ? pagination.PaginationLinks.Previous : "";
var nextLink = (pagination.PaginationLinks ==null) ? "#" : (!string.IsNullOrEmpty(pagination.PaginationLinks.Next)) ? pagination.PaginationLinks.Next : "";
Output.Write("\n\n    <div class=\"pagination-container\">\n        <ul id=\"results-pagination\" class=\"pagination\">\n            <li class=\"pagination-li pagination-arrow pagination-arrow-prev\">");
if (!string.IsNullOrEmpty(previousLink)) {
Output.Write("\n                    <a href=\"");
Output.Write(previousLink);
Output.Write("\" class=\"pagination-link pagination-prev\">");
Output.Write(Resources.Shared.Redesign.Strings.Label_Previous);
Output.Write("</a>");
}
else {
Output.Write("\n                    <span class=\"pagination-link pagination-prev pagination-unavailable\">");
Output.Write(Resources.Shared.Redesign.Strings.Label_Previous);
Output.Write("</span>");
}
Output.Write("\n            </li>");
if (showPageNumbers) {
for (var __iter__page in pagination.PaginationIndex.Pages) {var page=pagination.PaginationIndex.Pages[__iter__page];if(typeof(page)!='function') {
Output.Write("\n\t\t\t\t\t<li class=\"pagination-li\">\n\t\t\t\t\t\t<span class=\"js-pagination-page");
if (page.From != -1) {
Output.Write(" pagination-link");
}
if (page.From == -1) {
Output.Write(" pagination-spacer");
}
if (page.IsCurrent) {
Output.Write(" pagination-current");
}
Output.Write("\" data-from=\"");
Output.Write(page.From);
Output.Write("\">");
Output.Write(page.Name);
Output.Write("</span>\n\t\t\t\t\t</li>");
}}
Output.Write("            ");
}
Output.Write("\t\n            <li class=\"pagination-li pagination-arrow pagination-arrow-next\">");
if (!string.IsNullOrEmpty(nextLink)) {
Output.Write("\n                    <a href=\"");
Output.Write(nextLink);
Output.Write("\" class=\"pagination-link pagination-next\">");
Output.Write(Resources.Shared.Redesign.Strings.Label_Next);
Output.Write("</a>");
}
else {
Output.Write("\n                    <span class=\"pagination-link pagination-next pagination-unavailable\">");
Output.Write(Resources.Shared.Redesign.Strings.Label_Next);
Output.Write("</span>");
}
Output.Write("\n            </li>\n        </ul>\n    </div>");
}
}
}
{
var availabilityLink = resultsMap;
Output.Write("\n");
if (availabilityLink.Request.IsAvailabilityRequest) {
Output.Write("\n    <br/>");
if (availabilityLink.Request.OnlyUnavailable == true && availabilityLink.Results.TotalAvailable > 0) {
var linkText = string.Format(availabilityLink.Results.TotalAvailable == 1 ? Resources.Shared.Redesign.Results.WithAvailabilityLink : Resources.Shared.Redesign.Results.WithAvailabilityLink_Plural, availabilityLink.Results.TotalAvailable);
Output.Write("\n        <a href=\"#\" id=\"availability_link\" class=\"availability-link\">");
Output.Write(linkText);
Output.Write("</a>");
}
else if ((availabilityLink.Request.OnlyUnavailable == null || availabilityLink.Request.OnlyUnavailable == false) && availabilityLink.Results.TotalUnavailable > 0) {
var description = Resources.Shared.Redesign.Results.IncludeInterspercedAvailabilityText;
var linkText = Resources.Shared.Redesign.Results.IncludeInterspercedAvailabilityLink;
Output.Write("\n        <p>");
Output.Write(string.Format(description, availabilityLink.Results.TotalUnavailable));
Output.Write("</p>\n        <a href=\"#\" id=\"availability_link\" class=\"text-arrow-right with-availability\">");
Output.Write(linkText);
Output.Write("</a>");
}
}
}
}
else if (resultsMap.Request.PageTypeString == "TravelTimeSearch" && !resultsMap.Request.IsTravelTimeRequest) {
Output.Write("\n    ");
}
else {
{
var noResults = resultsMap;
Output.Write("\n");
var hasMetro = noResults.Display.Metro != null;
Output.Write("\n\n<div class=\"content-section-header no-results\">");
if (noResults.Display.ShowDescriptionForZeroResults && !string.IsNullOrEmpty(noResults.Display.PageMetaData.Description)) {
Output.Write("\n       <p id=\"page-description\" class=\"page-description\">\n         ");
Output.Write(noResults.Display.PageMetaData.Description);
Output.Write("\n       </p>");
}
Output.Write("\n  \n\n    <h3 class=\"color-dark\">");
Output.Write(Resources.Shared.Redesign.NoResults.Heading);
Output.Write("</h3>\n\n    <div class=\"block\">\n        <p class=\"no-result-message\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_NoMatch_Message);
Output.Write("</p>\n");
if (clearLastFilter == true) {
Output.Write("\n            <button id=\"clear_last_filter\" class=\"button\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_UndoLastFilterButton);
Output.Write("</button>");
}
Output.Write("\n");
if (clearLastFilter == true && hasMetro) {
Output.Write("\n            <span class=\"or\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_Or);
Output.Write("</span>");
}
Output.Write("\n        ");
if (hasMetro) {
Output.Write("\n            <button id=\"start_over\" class=\"button\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_StartOverButton);
Output.Write("</button>");
}
Output.Write("\n    </div>\n\n    <h3 class=\"color-dark\">");
Output.Write(Resources.Shared.Redesign.NoResults.OtherSuggestionsHeading);
Output.Write("</h3>\n\n    <div class=\"block\">");
if (hasMetro) {
Output.Write("\n        <div>\n            <a href=\"/rest_list.aspx?m=");
Output.Write(noResults.Request.MetroId);
Output.Write("\" class=\"link\">");
Output.Write(string.Format(Resources.Shared.Search.Strings.NoSearchResults_MetroListLink, noResults.Display.Metro.Name));
Output.Write("</a>\n        </div>");
}
if (hasMetro) {
Output.Write("\n            <div>\n                <a href=\"/\" class=\"link\">");
Output.Write(string.Format(Resources.Shared.Search.Strings.NoSearchResults_MetroLink, noResults.Display.Metro.Name));
Output.Write("</a>\n            </div>");
}
Output.Write("\n        <p class=\"no-result-message italic\">");
Output.Write(Resources.Shared.Redesign.NoResults.OtherSuggestionsMessage);
Output.Write("</p>\n    </div>\n\n</div>");
}
}
Output.Write("\n\t\t\t\t\t</div>\n\t\t\t\t</div>");
{
var model = resultsMap;
Output.Write("\n\n<div class=\"footer-container-short\">\n  <div class=\"footer-base\">\n    <span class=\"footer-copyright\">");
Output.Write(string.Format(Resources.Shared.Redesign.Strings.CopyrightFormat, model.Display.CurrentYear));
Output.Write("</span><br/>\n    <a class=\"footer-base-link\" href=\"/info/privacypolicy.aspx\">");
Output.Write(Resources.Shared.Redesign.Strings.MapFooterLink_Privacy);
Output.Write("</a>\n    <a class=\"footer-base-link\" href=\"/info/agreement.aspx\">");
Output.Write(Resources.Shared.Redesign.Strings.MapFooterLink_Terms);
Output.Write("</a>\n  </div>\n</div>");
}
Output.Write("\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>");
}
}
Output.Write("\n    </div>");
if (Model.Request.PageType == PageType.DinersChoiceList) {
{
var linkSection = Model;
Output.Write("\n");
var showRatings = linkSection.Filters.DinersChoiceList.Ratings.Count() > 0;
var showCuisines = linkSection.Filters.DinersChoiceList.Cuisines.Count() > 0;
var showOtherFeatures = linkSection.Filters.DinersChoiceList.OtherFeatures.Count() > 0;
var showLinkSection = showRatings || showCuisines || showOtherFeatures;
Output.Write("\n");
if (showLinkSection) {
Output.Write("\n<div class=\"link-section max-width-wrapper\">\n  <h3 class=\"content-block-header with-border\">");
if (linkSection.Display.Location != null) {
Output.Write("<span>");
Output.Write(string.Format(Resources.Shared.DinersChoiceList.Strings.LinkSectionLocationTitleFormat, linkSection.Display.Location.Name));
Output.Write("</span>");
}
Output.Write("</h3>\n  ");
{
var items = linkSection.Filters.DinersChoiceList.Ratings;
var itemClass = "link rating button tag-button with-icon";
var titleClass = "dc-links-buttons";
Output.Write("\n");
if (items.Count() > 0) {
Output.Write("\n<div class=\"content-section-link-lists\">\n    <ul class=\"");
Output.Write(titleClass);
Output.Write("\">                ");
for (var __iter__item in items) {var item=items[__iter__item];if(typeof(item)!='function') {
Output.Write("\n        <li");
{
var __just__once__ = 0;
if (itemClass != null) {
if (__just__once__ < 1) {
Output.Write(" class=\"");
}
__just__once__ = 1;
Output.Write(itemClass);
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">\n            <a href=\"");
Output.Write(item.Uri);
Output.Write("\" class=\"secondary\">");
Output.Write(item.Name);
Output.Write("</a>\n        </li>");
}}
Output.Write("\n    </ul>\n</div>");
}
}
Output.Write("\n        ");
if (showCuisines) {
Output.Write("\n  <h6>");
Output.Write(Resources.Shared.DinersChoiceList.Strings.LinkSectionCuisinesTitle);
Output.Write("</h6>");
}
{
var items = linkSection.Filters.DinersChoiceList.Cuisines;
var itemClass = "link link-list";
var titleClass = "dc-links-buttons";
Output.Write("\n");
if (items.Count() > 0) {
Output.Write("\n<div class=\"content-section-link-lists\">\n    <ul class=\"");
Output.Write(titleClass);
Output.Write("\">                ");
for (var __iter__item in items) {var item=items[__iter__item];if(typeof(item)!='function') {
Output.Write("\n        <li");
{
var __just__once__ = 0;
if (itemClass != null) {
if (__just__once__ < 1) {
Output.Write(" class=\"");
}
__just__once__ = 1;
Output.Write(itemClass);
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">\n            <a href=\"");
Output.Write(item.Uri);
Output.Write("\" class=\"secondary\">");
Output.Write(item.Name);
Output.Write("</a>\n        </li>");
}}
Output.Write("\n    </ul>\n</div>");
}
}
Output.Write("\n        ");
if (showOtherFeatures) {
Output.Write("\n  <h6>");
Output.Write(Resources.Shared.DinersChoiceList.Strings.LinkSectionFeaturesTitle);
Output.Write("</h6>");
}
{
var items = linkSection.Filters.DinersChoiceList.OtherFeatures;
Output.Write("\n");
if (items.Count() > 0) {
Output.Write("\n<div class=\"content-section-link-lists\">\n    <ul class=\"");
Output.Write(titleClass);
Output.Write("\">                ");
for (var __iter__item in items) {var item=items[__iter__item];if(typeof(item)!='function') {
Output.Write("\n        <li");
{
var __just__once__ = 0;
if (itemClass != null) {
if (__just__once__ < 1) {
Output.Write(" class=\"");
}
__just__once__ = 1;
Output.Write(itemClass);
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">\n            <a href=\"");
Output.Write(item.Uri);
Output.Write("\" class=\"secondary\">");
Output.Write(item.Name);
Output.Write("</a>\n        </li>");
}}
Output.Write("\n    </ul>\n</div>");
}
}
Output.Write("\n</div>");
}
Output.Write("\n");
if (linkSection.Filters.DinersChoiceList.Locations.Count() > 0) {
Output.Write("\n<div class=\"link-section max-width-wrapper\">\n  <h3 class=\"content-block-header with-border\">");
if (linkSection.Display.Metro != null) {
Output.Write("<span>");
Output.Write(string.Format(Resources.Shared.DinersChoiceList.Strings.LinkSectionRegionsTitleFormat, linkSection.Display.Metro.Name));
Output.Write("</span>");
}
Output.Write("</h3>");
{
var items = linkSection.Filters.DinersChoiceList.Locations;
Output.Write("\n");
if (items.Count() > 0) {
Output.Write("\n<div class=\"content-section-link-lists\">\n    <ul class=\"");
Output.Write(titleClass);
Output.Write("\">                ");
for (var __iter__item in items) {var item=items[__iter__item];if(typeof(item)!='function') {
Output.Write("\n        <li");
{
var __just__once__ = 0;
if (itemClass != null) {
if (__just__once__ < 1) {
Output.Write(" class=\"");
}
__just__once__ = 1;
Output.Write(itemClass);
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">\n            <a href=\"");
Output.Write(item.Uri);
Output.Write("\" class=\"secondary\">");
Output.Write(item.Name);
Output.Write("</a>\n        </li>");
}}
Output.Write("\n    </ul>\n</div>");
}
}
Output.Write("\n</div>");
}
}
}
Output.Write("\n");
Html.RenderAction("Advert", "Srs", {advertType:AdvertType.BigBox,pageType:Model.Display.SrsPageType,domainCulture:Model.DomainCulture,metro:Model.Display.Metro });Output.Write("\n\n</div>\n");
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
Html.RenderAction("Advert", "Srs", {advertType:AdvertType.FloatingFooter,pageType:Model.Display.SrsPageType,domainCulture:Model.DomainCulture,metro:Model.Display.Metro });Output.Write("\n");
OutputScope('data'); {
Output.Write("\n  <script>\n      window.OTSearchData = {\n      DomainCulture: ");
Output.Write(Html.RenderObjectToJson(Model.DomainCulture));
Output.Write(",\n      Headers: ");
Output.Write(Html.RenderObjectToJson(Model.Headers));
Output.Write(",\n      Request: ");
Output.Write(Html.RenderObjectToJson(Model.Request));
Output.Write(",\n      Display: ");
Output.Write(Html.RenderObjectToJson(Model.Display));
Output.Write(",\n      Offers: ");
Output.Write(Html.RenderObjectToJson(Model.Offers));
Output.Write(", \n      Filters: ");
Output.Write(Html.RenderObjectToJson(Model.Filters));
Output.Write(",\n      TravelTimePolygons: ");
Output.Write(Html.RenderObjectToJson(Model.TravelTimePolygons));
Output.Write(",\n      Results: {\n          Total: ");
Output.Write(Model.Results.Total);
Output.Write(",\n          TotalAvailable: ");
Output.Write(Model.Results.TotalAvailable);
Output.Write(",\n          TotalUnavailable: ");
Output.Write(Model.Results.TotalUnavailable);
Output.Write(",\n          Lat: parseFloat(");
Output.Write(Model.Results.Lat+"");
Output.Write("),\n          Long: parseFloat(");
Output.Write(Model.Results.Long+"");
Output.Write("),\n          Zoom: ");
Output.Write(Model.Results.Zoom);
Output.Write("\n      }\n      };\n  </script>");
} DisposeOutputScope();
Output.Write("\n");
OutputScope('resources'); {
{
Output.Write("  <script>\n    window.Resources={\n        Strings: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Strings)));
Output.Write(",\n        Home: {\n            Index: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Home.Index)));
Output.Write("\n        },\n        Shared: {\n            Common: {\n                BreadCrumbs: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Common.BreadCrumbs)));
Output.Write(",\n                Filters: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Common.Filters)));
Output.Write(",\n                LocationBar: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Common.LocationBar)));
Output.Write(",\n                Modals: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Common.Modals)));
Output.Write(",\n                Results: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Common.Results)));
Output.Write(",\n                Strings: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Common.Strings)));
Output.Write("\n            },\n            Search: {\n                Map: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Search.Map)));
Output.Write(",\n                Results: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Search.Results)));
Output.Write(",\n                Strings: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Search.Strings)));
Output.Write(",\n                Tabs: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Search.Tabs)));
Output.Write("\n            },\n            Redesign: {\n                Filters: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Redesign.Filters)));
Output.Write(",\n                Strings: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Redesign.Strings)));
Output.Write(",\n                Results: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Redesign.Results)));
Output.Write(",\n                NoResults: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Redesign.NoResults)));
Output.Write("\n            },\n            PopRestaurantList: {\n                Strings: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.PopRestaurantList.Strings)));
Output.Write("\n            }\n        }\n    };\n  </script>");
}
} DisposeOutputScope();
Output.Write("\n");
OutputScope('js_imports'); {
Output.Write("\n\n  <!-- build:js(Web) /s/Scripts/generated/bundle_redesign.js -->\n  <!-- Libraries -->\n  <script src=\"Scripts/lib/backbone.js\"></script>\n  <script src=\"Scripts/lib/Timer.js\"></script>\n  <script src=\"Scripts/lib/jquery.sticky.js\"></script>\n  <!-- Libraries -->\n\n  <script src=\"Scripts/src/Redesign/Common/Lionbars.js\"></script>\n  <!-- OT Search Helpers -->\n  <script src=\"Scripts/src/Search/Helpers/BuildSearchParameters.js\"></script>\n  <script src=\"Scripts/src/Search/Helpers/QueryString.js\"></script>\n  <script src=\"Scripts/src/Search/Helpers/ConvertDateTimeToTimestamp.js\"></script>\n  <script src=\"Scripts/src/Search/Helpers/ConvertIsoDateTimeToTimestamp.js\"></script>\n  <script src=\"Scripts/src/Search/Helpers/ConvertDateToSearchDate.js\"></script>\n  <script src=\"Scripts/src/Search/Helpers/ConvertTimeTo24Hour.js\"></script>\n  <script src=\"Scripts/src/Search/Helpers/DateUtilities.js\"></script>\n  <script src=\"Scripts/src/Search/Helpers/GetFormattedDate.js\"></script>\n  <script src=\"Scripts/src/Search/Helpers/GetFormattedTime.js\"></script>\n  <script src=\"Scripts/src/Search/Helpers/GetIdsFromCheckedItems.js\"></script>\n  <script src=\"Scripts/src/Search/Helpers/IsFutureDateTime.js\"></script>\n  <script src=\"Scripts/src/Search/Helpers/IsMapShowing.js\"></script>\n  <script src=\"Scripts/src/Search/Helpers/RenderTemplate.js\"></script>\n  <script src=\"Scripts/src/Search/Helpers/RoundTimeTo.js\"></script>\n  <!-- OT Search Helpers -->\n\n  <!-- OT Search Requests -->\n  <script src=\"Scripts/src/Search/Requests/BuildUrl.js\"></script>\n  <script src=\"Scripts/src/Search/Requests/Results.js\"></script>\n  <!-- OT Search Requests -->\n\n  <!-- Common Views -->\n  <script src=\"Scripts/src/Common/BaseView.js\"></script>\n  <script src=\"Scripts/src/Common/FilterGroupBaseView.js\"></script>\n  <script src=\"Scripts/src/Common/Views/Results/ResultsContainer.js\"></script>\n  <script src=\"Scripts/src/Common/Scroll.js\"></script>\n  <script src=\"Scripts/src/Redesign/Common/ModalBaseView.js\"></script>\n  <script src=\"Scripts/src/Redesign/Views/Modals/Restaurant.js\"></script>\n  <script src=\"Scripts/src/Redesign/Views/Modals/Tooltip.js\"></script>\n  <!-- Common Views -->\n\n  <!-- OT Common Helpers -->\n  <script src=\"Scripts/src/Redesign/Common/Helpers/GetDeviceInfo.js\"></script>\n  <script src=\"Scripts/src/Redesign/Common/Helpers/GetPageSize.js\"></script>\n  <script src=\"Scripts/src/Redesign/Common/Helpers/DownloadGoogleMaps.js\"></script>\n  <!-- OT Common Helpers -->\n\n  <!-- OT Common -->\n  <script src=\"Scripts/src/Redesign/Common/Common.js\"></script>\n  <script src=\"Scripts/src/Redesign/Common/StickyFilterBar.js\"></script>\n  <script src=\"Scripts/src/Redesign/Common/LazyLoadImages.js\"></script>\n  <script src=\"Scripts/src/Redesign/Common/LazyLoadTopReviews.js\"></script>\n  <script src=\"Scripts/src/Redesign/Common/LazyLoadBlockDayMessages.js\"></script>\n  <script src=\"Scripts/src/Redesign/Common/TopReviewMore.js\"></script>\n  <script src=\"Scripts/src/Redesign/Common/App.js\"></script>\n  <script src=\"Scripts/src/Redesign/Common/LoadBannerEmblem.js\"></script>\n  <script src=\"Scripts/src/Redesign/Common/SendLogRequest.js\"></script>\n  <script src=\"Scripts/src/Redesign/Common/Helpers/GetRequestId.js\"></script>\n  <!-- OT Common -->\n\n  <!-- Search View -->\n  <script src=\"Scripts/src/Search/Views/SearchControl.js\"></script>\n  <script src=\"Scripts/src/Redesign/Views/SearchAnimation.js\"></script>\n  <script src=\"Scripts/src/Redesign/Views/SearchControl.js\"></script>\n  <script src=\"Scripts/src/Redesign/Views/Modals/SingleSearchModal.js\"></script>\n  <!-- Search View -->\n\n  <!-- Best Restaurants Results -->\n  <script src=\"Scripts/src/Redesign/Views/Results/ResultsContainer.js\"></script>\n  <script src=\"Scripts/src/Redesign/Views/Results/Results.js\"></script>\n  <script src=\"Scripts/src/Redesign/Views/Results/Pagination.js\"></script>\n  <!-- Best Restaurants Results -->\n\n  <!-- Best Restaurants Filters -->\n  <script src=\"Scripts/src/Redesign/Views/Filters/Filters.js\"></script>\n  <script src=\"Scripts/src/Redesign/Views/Filters/Cuisines.js\"></script>\n  <script src=\"Scripts/src/Redesign/Views/Filters/ExactTime.js\"></script>\n  <script src=\"Scripts/src/Redesign/Views/Filters/OnlyPopStandalone.js\"></script>\n  <script src=\"Scripts/src/Redesign/Views/Filters/OfferTypes.js\"></script>\n  <script src=\"Scripts/src/Redesign/Views/Filters/PriceBands.js\"></script>\n  <script src=\"Scripts/src/Redesign/Views/Filters/Sort.js\"></script>\n  <script src=\"Scripts/src/Redesign/Views/Filters/TravelModes.js\"></script>\n  <script src=\"Scripts/src/Redesign/Views/Filters/TravelTimes.js\"></script>\n\n  <script src=\"Scripts/src/Redesign/Views/TravelTimeSearch/TravelOptions.js\"></script>\n\n    <!-- Best Restaurants Filters -->\n\n  <!-- Best Restaurants Mobile Refine Filters -->\n  <script src=\"Scripts/src/Redesign/Views/RefineFiltersLink.js\"></script>\n  <script src=\"Scripts/src/Redesign/Views/Modals/RefineFiltersModal.js\"></script>\n  <!-- Best Restaurants Mobile Refine Filters -->\n\n  <!-- Map -->\n  <script src=\"Scripts/src/Redesign/Views/SearchTabs.js\"></script>\n  <script src=\"Scripts/src/Redesign/Views/Results/PopTable.js\"></script>\n  <script src=\"Scripts/src/Redesign/Views/Results/MapResults.js\"></script>\n  <script src=\"Scripts/src/Redesign/Views/Results/Map/ResultsList.js\"></script>\n  <script src=\"Scripts/src/Redesign/Views/Results/Map/ResultsTitle.js\"></script>\n  <!-- Map -->\n\n  <!-- OT Search -->\n  <script src=\"Scripts/src/Search/Config.js\"></script>\n  <script src=\"Scripts/src/Search/Data.js\"></script>\n  <script src=\"Scripts/src/Search/Params.js\"></script>\n  <script src=\"Scripts/src/Search/History.js\"></script>\n  <script src=\"Scripts/src/Search/SendLogRequest.js\"></script>\n  <script src=\"Scripts/src/Redesign/App.js\"></script>\n  <!-- OT Search -->\n  <!-- endbuild -->\n\n\n  <script>\n    OT.Common.init();\n    OT.Redesign.init();\n  </script>\n");
} DisposeOutputScope();
Output.Write("\n");
OutputScope('tracking'); {
Output.Write("\n  ");
Output.Write(Html.RenderTrackingCode(Model.TrackingValues));
} DisposeOutputScope();
Output.Write("\n\n");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Home.RedesignIndex
