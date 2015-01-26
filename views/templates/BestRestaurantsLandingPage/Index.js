if (!window.Spark) window.Spark = {};
if (!window.Spark.BestRestaurantsLandingPage) window.Spark.BestRestaurantsLandingPage = {};
window.Spark.BestRestaurantsLandingPage.Index = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var mastheadModel = viewData["mastheadModel"];
var filters = viewData["filters"];
var resultsTable = viewData["resultsTable"];
var noResultsTable = viewData["noResultsTable"];
var clearLastFilter = viewData["clearLastFilter"];
var linkLists = viewData["linkLists"];
var linkTitle = viewData["linkTitle"];
var filters = viewData["filters"];
var search = viewData["search"];
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
var resultsTitle = viewData["resultsTitle"];
var result = viewData["result"];
var display = viewData["display"];
var request = viewData["request"];
var firstRow = viewData["firstRow"];
var lastRow = viewData["lastRow"];
var index = viewData["index"];
var display = viewData["display"];
var availabilityLink = viewData["availabilityLink"];
var columnLists = viewData["columnLists"];
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
var filter = viewData["filter"];
var filterName = viewData["filterName"];
var filterDataName = viewData["filterDataName"];
var type = viewData["type"];
var reviews = viewData["reviews"];
var size = viewData["size"];
var timeslots = viewData["timeslots"];
var request = viewData["request"];
var notAvailableButtonClass = viewData["notAvailableButtonClass"];
var displayOnlyPopTimes = viewData["displayOnlyPopTimes"];
function RenderViewLevel0() {
Output.Write("\n");
OutputScope('pageTitle'); {
Output.Write("\n    <title>");
Output.Write(string.Format(Resources.Shared.BestRestaurantsLandingPage.Strings.PageTitleFormat, Model.Display.Location.Name));
Output.Write("</title>");
} DisposeOutputScope();
Output.Write("\n");
OutputScope('metaDescription'); {
Output.Write("\n    <meta name=\"description\" content=\"");
Output.Write(string.Format(Resources.Shared.BestRestaurantsLandingPage.Strings.MetaDescription, Model.Display.Location.Name));
Output.Write("\"/>");
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
OutputScope('cssImports'); {
Output.Write("\n    <link rel=\"stylesheet\" href=\"/s/content/css/generated/bundle-hybrid-landing-");
Output.Write(Html.CurrentTheme(Model.DomainCulture));
Output.Write("-core.css\"/>\n    <link rel=\"stylesheet\" href=\"/s/content/css/generated/bundle-hybrid-landing-");
Output.Write(Html.CurrentTheme(Model.DomainCulture));
Output.Write("-bestrestaurantslandingpage.css\"/>");
} DisposeOutputScope();
Output.Write("\n");
OutputScope('cssComponent'); {
} DisposeOutputScope();
Output.Write("\n");
OutputScope('jsComponent'); {
{
Output.Write("<!-- build:js(Web) /s/Scripts/generated/bundle-landing-page-common.js -->\n<!-- Libraries -->\n<script src=\"Scripts/lib/underscore.js\"></script>\n<script src=\"Scripts/lib/jquery.js\"></script>\n<script src=\"Scripts/lib/jQuery.migrate.js\"></script>\n<script src=\"Scripts/lib/jQuery.postMessage.js\"></script>\n<script src=\"Scripts/lib/moment.js\"></script>\n<script src=\"Scripts/lib/fastclick.js\"></script>\n<!-- Libraries -->\n\n<!-- OT Common -->\n<script src=\"Scripts/src/NamespaceGenerator.js\"></script>\n<script src=\"Scripts/src/OT/Extensions.js\"></script>\n<script src=\"Scripts/src/OT/Config.js\"></script>\n<script src=\"Scripts/src/OT/Cookies.js\"></script>\n<script src=\"Scripts/src/OT/EnvInfo.js\"></script>\n<script src=\"Scripts/src/OT/OpenWindow.js\"></script>\n<script src=\"Scripts/src/OT/SiteCatalyst.js\"></script>\n<script src=\"Scripts/src/OT/Accordion.js\"></script>\n<script src=\"Scripts/src/OT/Menu.js\"></script>\n<script src=\"Scripts/src/OT/LazyLoadImages.js\"></script>\n<!-- OT Common -->\n\n<!-- OT Common Helpers -->\n<script src=\"Scripts/src/OT/Helpers/GenerateGUID.js\"></script>\n<script src=\"Scripts/src/OT/Helpers/BuildBrowserProfile.js\"></script>\n<script src=\"Scripts/src/OT/Helpers/BuildObjectFromCheckedItems.js\"></script>\n<script src=\"Scripts/src/OT/Helpers/BuildPerformanceProfile.js\"></script>\n<script src=\"Scripts/src/OT/Helpers/DownloadGoogleMaps.js\"></script>\n<script src=\"Scripts/src/OT/Helpers/GetPageId.js\"></script>\n<script src=\"Scripts/src/OT/Helpers/GetSessionKey.js\"></script>\n<script src=\"Scripts/src/OT/Helpers/GetTimeFromPageLoad.js\"></script>\n<script src=\"Scripts/src/OT/Helpers/IsMobile.js\"></script>\n<script src=\"Scripts/src/OT/Helpers/QueryString.js\"></script>\n<script src=\"Scripts/src/OT/Helpers/RedirectWindow.js\"></script>\n<!-- OT Common Helpers -->\n\n<!-- OT Common -->\n<script src=\"Scripts/src/OT/Events.js\"></script>\n<script src=\"Scripts/src/OT/SendLogRequest.js\"></script>\n<script src=\"Scripts/src/OT/TestObject.js\"></script>\n<!-- OT Common -->\n<!-- endbuild -->");
}
} DisposeOutputScope();
Output.Write("\n");
OutputScope('bodyClass'); {
Output.Write("search");
} DisposeOutputScope();
Output.Write("\n");
{
Output.Write("<header id=\"header\" class=\"app-header\">\n\n    <div class=\"top-bar hide-for-small-only header-for-desktop\">\n        <div class=\"top-bar-wrap\">\n            <div class=\"top-bar-logo\">\n                <a href='/' title='OpenTable' class=\"top-bar-logo-link\">\n                    <h1 class=\"top-bar-logo-name\">OpenTable</h1>\n                </a>\n            </div>\n            <section class=\"top-bar-section right show-for-medium-up\">\n              <ul>\n                <li class=\"has-button\">\n                  <a href=\"/register.aspx?ReturnUrl=");
Output.Write(Request.RawUrl);
Output.Write("\">");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Strings.HeaderLink_SignUp);
Output.Write("</a>\n                </li>\n                <li>\n                    <a href=\"/login.aspx?ReturnUrl=");
Output.Write(Request.RawUrl);
Output.Write("\">");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Strings.HeaderLink_SignIn);
Output.Write("</a>\n                </li>\n                <li>\n                  <a href=\"/contactuslink.aspx\">");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Strings.HeaderLink_Help);
Output.Write("</a>\n                </li>\n              </ul>\n            </section>\n        </div>\n    </div>\n\n    <div class=\"tab-bar show-for-small-only header-for-mobile\">\n      <div class=\"row\">\n        <div class=\"small-3 columns header-link-left\"></div>\n        <div class=\"small-6 columns\">\n            <div class=\"top-bar-logo\">\n                <a href='/' title='OpenTable' class=\"top-bar-logo-link\">\n                    <h1 class=\"top-bar-logo-name\">OpenTable</h1>\n                </a>\n            </div>\n        </div>\n        <div class=\"small-3 columns header-link-right text-right\">\n          <a id=\"refine-filters-link\" href=\"#\">");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Filters.Label_Refine);
Output.Write("</a>\n        </div>\n      </div>\n    </div>\n</header>");
}
Output.Write("\n\n<section id=\"main\" role=\"main\">\n    <div id=\"content\">");
{
var mastheadModel = Model;
Output.Write("\n\n<div id=\"content-header\" class=\"with-background\">\n    <div class=\"content-header-hero\">\n        <div class=\"content-header-hero-wrap\"></div>\n        <div class=\"content-header-hero-overlay\"></div>\n    </div>\n\n    <div class=\"content-wrap content-wrap-centered\">\n        <div class=\"row\">\n            <div class=\"column large-12\">\n                <h1>\n                    <span class=\"font-weight-medium\">\n                        ");
Output.Write(string.Format(Resources.Shared.BestRestaurantsLandingPage.Strings.HeaderTitleFormat, mastheadModel.Display.Location.Name));
Output.Write("\n                    </span>\n                </h1>\n");
{
var search = Model;
Output.Write("\n\n<div class=\"search-dtp\">\n    <div id=\"dtp-picker\" action=\"/search\">\n        <ul class=\"dtp-picker-container\">\n            <li class=\"dtp-selector\">\n                <a>\n                    <div class=\"icon-users dtp-icon\"></div>\n                    <div id=\"dtp-label-party\" data-bind=\"text: _vm.dtpPicker.partySize_label\" class=\"dtp-label\"></div>\n                    <select id=\"covers\" data-bind=\"value: _vm.dtpPicker.partySize, valueUpdate: _vm.dtpPicker.partySize\" class=\"dtp-select\">");
for (var __iter__option in search.Display.CoverOptions) {var option=search.Display.CoverOptions[__iter__option];if(typeof(option)!='function') {
Output.Write("\n                            <option value=\"");
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
Output.Write("\n                    </select>\n                </a>\n            </li>\n            <li class=\"dtp-selector with-seperator\">\n                <a>\n                    <div class=\"icon-calendar dtp-icon\"></div>\n                    <div id=\"dtp-label-date\" data-bind=\"text: _vm.dtpPicker.date_label\" class=\"dtp-label\"></div>\n                    <select id=\"date\" name=\"date\" data-bind=\"value: _vm.dtpPicker.date, valueUpdate: _vm.dtpPicker.date\" class=\"dtp-select\">\n                        <option value=\"0\">Today</option>\n                    </select>\n                </a>\n            </li>\n            <li class=\"dtp-selector with-seperator\">\n                <a>\n                    <div class=\"icon-clock dtp-icon\"></div>\n                    <div id=\"dtp-label-time\" class=\"dtp-label\"></div>\n                    <select id=\"time\" name=\"time\" data-bind=\"value: _vm.dtpPicker.time, valueUpdate: _vm.dtpPicker.time\" class=\"dtp-select\">");
for (var __iter__option in search.Display.TimeOptions) {var option=search.Display.TimeOptions[__iter__option];if(typeof(option)!='function') {
Output.Write("\n                            <option value=\"");
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
Output.Write("\n                    </select>\n                </a>\n            </li>\n            <li class=\"dtp-submit show-for-large-up hide-for-medium-only hide-for-small-only\">\n                <button id=\"findATable\">");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Strings.Label_FindATable);
Output.Write("</button>\n            </li>\n        </ul>\n    </div>\n</div>");
}
Output.Write("\n            </div>\n        </div>\n    </div>\n</div>\n");
}
{
var filters = Model;
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
Output.Write("\n      \n        <div id=\"content-body\">\n            <div class=\"overlay\">\n                <div class=\"spinner\"></div>\n            </div>\n            <div class=\"content-wrap content-wrap-centered\">\n                <div id=\"content-main\">\n                    <div class=\"row\">\n                        <div class=\"column medium-12\">\n                            <div id=\"search_results_container\">\n                                <section id=\"search_results\" class=\"content-section\" data-name=\"ResultsTable\">");
if (Model.Results.Total > 0) {
{
var resultsTable = Model;
Output.Write("\n<div class=\"content-section-header\">\n    <h3 class=\"left\">\n        <span class=\"font-weight-medium\">");
{
var resultsTitle = resultsTable;
Output.Write("\n");
if (resultsTitle.Results.Restaurants.Count() == 1) {
if (resultsTitle.Request.OnlyUnavailable == true) {
{
var searchTitle = Resources.Shared.Common.Results.Title_NoAvailability;
Output.Write("\n            ");
Output.Write(string.Format(searchTitle, resultsTitle.Results.TotalUnavailable));
}
}
else {
{
var searchTitle = Resources.Shared.Common.Results.Title_ResultsTotal;
Output.Write("\n            ");
Output.Write(string.Format(searchTitle, resultsTitle.Results.TotalAvailable));
}
}
}
else {
if (resultsTitle.Request.OnlyUnavailable == true) {
{
var searchTitle = Resources.Shared.Common.Results.Title_NoAvailability_Plural;
Output.Write("\n            ");
Output.Write(string.Format(searchTitle, resultsTitle.Results.TotalUnavailable));
}
}
else {
{
var searchTitle = Resources.Shared.Common.Results.Title_ResultsTotal_Plural;
Output.Write("\n            ");
Output.Write(string.Format(searchTitle, resultsTitle.Results.TotalAvailable));
}
}
}
}
Output.Write("\n        </span>\n    </h3>\n</div>\n\n<div class=\"content-section-list\">\n    <ul class=\"infinite-results-list\">");
var restaurantIndex=0;for (var __iter__restaurant in resultsTable.Results.Restaurants) {var restaurant=resultsTable.Results.Restaurants[__iter__restaurant];if(typeof(restaurant)!='function') {
{
var result = restaurant;
var request = resultsTable.Request;
var display = resultsTable.Display;
var firstRow = restaurantIndex == 0;
var lastRow = restaurantIndex == resultsTable.Results.Restaurants.Count()-1;
var index = restaurantIndex;
Output.Write("\n");
var distance = request.ParsedTests.Contains("showdistanceinresults") && request.SortString == "Distance" && request.IsGeoDistanceRequest == true ? string.Format("{0} {1} - ", result.Distance, Resources.Strings.DistanceUnit_Small) : "";
var showDinersChoice = result.TopRankedDinersChoiceCategory != null && !string.IsNullOrEmpty(result.TopRankedDinersChoiceCategory.Name);
Output.Write("\n\n<li class=\"result\" data-rid=\"");
Output.Write(result.Id);
Output.Write("\" data-id=\"");
Output.Write(index);
Output.Write("\">\n    <div class=\"rest-row\">\n        <div class=\"row\">\n            <div class=\"column medium-6\">\n                <div class=\"rest-row-info\">\n                    <div class=\"rest-image\">\n                        <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("\">\n                            <img src=\"/s/content/images/1x1.gif\" width=\"52\" height=\"56\" class=\"lazy\" data-src=\"/img/restimages/x4/");
Output.Write(result.Id);
Output.Write(".jpg\"/>\n                        </a>\n                    </div>\n                    <div class=\"rest-name\">\n                        <a href=\"");
Output.Write(result.ProfileUri);
Output.Write("\">");
Output.Write(result.Name);
Output.Write("</a>\n                    </div>\n");
{
var reviews = result;
var size = "small";
Output.Write("\n");
{
var showRatings = reviews.Reviews != null && reviews.Reviews.Total > 0;
if (showRatings) {
var reviewTotal = reviews.Reviews.Rating;
var starTitle = string.Format(reviewTotal == 1 ? Resources.Strings.StarRatingText : Resources.Strings.StarRatingText_Plural, reviewTotal);
Output.Write("\n\n        <ul class=\"star-rating\" title=\"");
Output.Write(starTitle);
Output.Write("\">\n            <li class=\"star ");
Output.Write(Html.GenerateRatingsStarClasses(1, reviewTotal));
Output.Write("\"></li>\n            <li class=\"star ");
Output.Write(Html.GenerateRatingsStarClasses(2, reviewTotal));
Output.Write("\"></li>\n            <li class=\"star ");
Output.Write(Html.GenerateRatingsStarClasses(3, reviewTotal));
Output.Write("\"></li>\n            <li class=\"star ");
Output.Write(Html.GenerateRatingsStarClasses(4, reviewTotal));
Output.Write("\"></li>\n            <li class=\"star ");
Output.Write(Html.GenerateRatingsStarClasses(5, reviewTotal));
Output.Write("\"></li>\n            <li class=\"star-text\">");
Output.Write(Html.GetReviewsCountText(reviews.Reviews.Total, Resources.Shared.Common.Results.Reviews, Resources.Shared.Common.Results.Reviews_Plural));
Output.Write("</li>\n        </ul>");
}
}
}
Output.Write("\n\n                    <div class=\"rest-pricing\">\n                        <span>");
Output.Write(result.PriceBand.ShortName);
Output.Write("</span>\n                    </div>\n                    <div class=\"rest-meta rest-meta-cuisine\">\n                        <span>");
Output.Write(result.Cuisine);
Output.Write("</span>\n                    </div>");
if (showDinersChoice) {
Output.Write("\n                    <div class=\"rest-meta rest-meta-diners-choice\">\n                        <span>");
Output.Write(result.TopRankedDinersChoiceCategory.Name);
Output.Write("</span>\n                    </div>");
}
Output.Write("\n                </div>\n            </div>\n");
{
var timeslots = result;
var notAvailableButtonClass = "";
var displayOnlyPopTimes = false;
Output.Write("\n");
if (request.IsAvailabilityRequest == true && request.OnlyUnavailable != true) {
Output.Write("\n    <div class=\"column medium-6\">");
if (timeslots.HasAvail) {
Output.Write("\n            <ul class=\"rest-times medium-right\">");
var timeSlotIndex=0;for (var __iter__timeSlot in timeslots.TimeSlots) {var timeSlot=timeslots.TimeSlots[__iter__timeSlot];if(typeof(timeSlot)!='function') {
{
var timeslotDisabled = !timeSlot.IsAvail || (displayOnlyPopTimes && !timeSlot.HasPop);
var isExact = timeSlotIndex == 2;
var checkSum = timeslots.Id + request.Covers + 123;
var hasPop = timeSlot.HasPop;
var hasOffers = timeSlot.OfferIds != null && timeSlot.OfferIds.Count() > 0;
var offerIds = hasOffers ? string.Join(",", timeSlot.OfferIds) : "";
var hideForMobile = timeSlot.ForMobile == false;
var cultureUrlSegment = request.CultureInUrlRoute == null ? "" : "/" + request.CultureInUrlRoute;
var slotUrl = string.Format("{6}/httphandlers/ValidateReservationRequest.ashx?rid={0}&d={2}&p={1}&pt={5}&i=1&ss=0&sd={2}&pofids={3}&checksum={4}", timeslots.Id, request.Covers, timeSlot.LinkString, string.Join(",", timeSlot.OfferIds), checkSum, timeSlot.HasPop ? "1000" : "100", cultureUrlSegment);
Output.Write("\n\n                        <li class=\"rest-time");
if (isExact) {
Output.Write(" exact");
}
if (hideForMobile) {
Output.Write(" show-for-large-up");
}
Output.Write("\" data-offers=\"");
Output.Write(offerIds);
Output.Write("\" data-rid=\"");
Output.Write(timeslots.Id);
Output.Write("\">");
if (timeslotDisabled) {
Output.Write("\n                            <span class=\"btn-time unavailable");
if (isExact) {
Output.Write(" exact");
}
Output.Write("\">&nbsp;</span>");
}
if (!timeslotDisabled) {
Output.Write("\n                            <a class=\"btn-time");
if (hasPop || hasOffers) {
Output.Write(" with-points");
}
Output.Write("\" href=\"");
Output.Write(slotUrl);
Output.Write("\">");
Output.Write(timeSlot.TimeString);
Output.Write("</a>");
}
Output.Write("\n                        </li>\n");
}
++timeSlotIndex;}}
Output.Write("\n            </ul>");
if (timeslots.TimeSlotMaxOffersWithPopCount > 0) {
Output.Write("\n            <div class=\"notifications\">");
if ((timeslots.TimeSlotMaxOffersWithPopCount == 1 && timeslots.HasPop) || displayOnlyPopTimes) {
Output.Write("\n                <span>\n                    <i class=\"with-points\"></i> ");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Strings.TimeslotLegend_1000Points);
Output.Write("\n                </span>");
}
if (timeslots.TimeSlotMaxOffersWithPopCount > 1 && !displayOnlyPopTimes) {
Output.Write("\n                <span>\n                    <i class=\"with-points\"></i>");
Output.Write(string.Format(Resources.Shared.BestRestaurantsLandingPage.Strings.TimeslotLegend_Offers, timeslots.TimeSlotMaxOffersWithPopCount));
Output.Write("\n                </span>");
}
if (timeslots.TimeSlotMaxOffersWithPopCount == 1 && !timeslots.HasPop && !displayOnlyPopTimes) {
Output.Write("\n                <span>\n                    <i class=\"with-points\"></i>");
Output.Write(string.Format(Resources.Shared.BestRestaurantsLandingPage.Strings.TimeslotLegend_Offer, timeslots.TimeSlotMaxOffersWithPopCount));
Output.Write("\n                </span>");
}
Output.Write("\n            </div>");
}
}
Output.Write("\n    </div>");
}
}
Output.Write("\n        </div>\n    </div>\n</li>");
}
++restaurantIndex;}}
Output.Write("\n    </ul> \n</div>\n");
{
{
var previousLink = (display.PaginationLinks ==null) ? "#" : (!string.IsNullOrEmpty(display.PaginationLinks.Previous)) ? display.PaginationLinks.Previous : "";
var nextLink = (display.PaginationLinks ==null) ? "#" : (!string.IsNullOrEmpty(display.PaginationLinks.Next)) ? display.PaginationLinks.Next : "";
Output.Write("\n    \n    <div class=\"pagination-container\">\n        <ul id=\"results-pagination\" class=\"pagination\">\n            <li class=\"pagination-li pagination-arrow pagination-arrow-prev\">");
if (!string.IsNullOrEmpty(previousLink)) {
Output.Write("\n                    <a href=\"");
Output.Write(previousLink);
Output.Write("\" class=\"pagination-link pagination-prev\">");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Strings.Label_Previous);
Output.Write("</a>");
}
else {
Output.Write("\n                    <span class=\"pagination-link pagination-prev pagination-unavailable\">");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Strings.Label_Previous);
Output.Write("</span>");
}
Output.Write("\n            </li>\n            <li class=\"pagination-li pagination-arrow pagination-arrow-next\">");
if (!string.IsNullOrEmpty(nextLink)) {
Output.Write("\n                    <a href=\"");
Output.Write(nextLink);
Output.Write("\" class=\"pagination-link pagination-next\">");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Strings.Label_Next);
Output.Write("</a>");
}
else {
Output.Write("\n                    <span class=\"pagination-link pagination-next pagination-unavailable\">");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Strings.Label_Next);
Output.Write("</span>");
}
Output.Write("\n                \n            </li>\n        </ul>\n    </div>");
}
}
Output.Write("\n");
{
var availabilityLink = resultsTable;
Output.Write("\n");
if (availabilityLink.Request.IsAvailabilityRequest && availabilityLink.Results.TotalUnavailable > 0) {
Output.Write("\n    <br/>");
if (availabilityLink.Request.OnlyUnavailable == true || availabilityLink.Request.IntersperseAvailability == true) {
var linkText = string.Format(availabilityLink.Results.TotalAvailable == 1 ? Resources.Shared.Common.Results.WithAvailabilityLink : Resources.Shared.Common.Results.WithAvailabilityLink_Plural, availabilityLink.Results.TotalAvailable);
Output.Write("\n        <a href=\"#\" id=\"availability_link\" class=\"availability-link\">");
Output.Write(linkText);
Output.Write("</a>");
}
else {
var linkText = string.Format(availabilityLink.Results.TotalUnavailable == 1 ? Resources.Shared.Common.Results.WithNoAvailabilityLink : Resources.Shared.Common.Results.WithNoAvailabilityLink_Plural, availabilityLink.Results.TotalUnavailable);
Output.Write("\n        <a href=\"#\" id=\"availability_link\" class=\"availability-link with-availability\">");
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
Output.Write("</h2>\n</div>\n\n<table id=\"search_results_table\" class=\"table\">\n    <tbody>\n        <tr class=\"last-row\">\n            <td class=\"cell full-cell\">\n                <p class=\"no-result-message\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_NoMatch_Message);
Output.Write("</p>\n");
if (hasMetroId == true) {
Output.Write("\n                    <h2 class=\"title\">");
Output.Write(Resources.Shared.Search.Strings.NoSearchResults_OtherSuggestions);
Output.Write("</h2>\n                    <p class=\"no-result-message\">\n                        <a href=\"/rest_list.aspx?m=");
Output.Write(noResultsTable.Request.MetroId);
Output.Write("\" class=\"link\">");
Output.Write(string.Format(Resources.Shared.Search.Strings.NoSearchResults_MetroListLink, noResultsTable.Display.Metro.Name));
Output.Write("</a>\n                    </p>\n                    <p class=\"no-result-message\">\n                        <a href=\"/\" class=\"link\">");
Output.Write(string.Format(Resources.Shared.Search.Strings.NoSearchResults_MetroLink, noResultsTable.Display.Metro.Name));
Output.Write("</a>\n                    </p>");
}
Output.Write("\n            </td>\n        </tr>\n    </tbody>\n</table>\n");
}
}
Output.Write("\n                                </section>\n                            </div>\n                        </div>\n                    </div>");
{
var linkTitle = Resources.Shared.BestRestaurantsLandingPage.Strings.Label_NeighborhoodLinks;
var linkLists = Model.Display.NeighborhoodLinks;
Output.Write("\n");
if (linkLists != null && linkLists.Count() > 0) {
Output.Write("\n    <div id=\"cross-linking\" class=\"row margin-top margin-bottom\">\n        <div class=\"column margin-top small-12\">\n            <h3>");
Output.Write(linkTitle);
Output.Write("</h3>\n        </div>\n        <div class=\"column small-12 panel-wrapper\">\n            <div class=\"column small-12 panel rounded-corner panel-lists\" id=\"neighborhoodLists\">");
{
var columnLists = linkLists[1];
Output.Write("\n\n<div class=\"column medium-4\">");
if (columnLists != null && columnLists.Count() > 0) {
Output.Write("\n    <ul>");
for (var __iter__link in columnLists) {var link=columnLists[__iter__link];if(typeof(link)!='function') {
Output.Write("\n            <li class=\"text-ellipsis\">\n                <a href=\"");
Output.Write(link.Url);
Output.Write("\" class=\"secondary-link\">");
Output.Write(link.Name);
Output.Write("</a>\n            </li>");
}}
Output.Write("\n    </ul>");
}
Output.Write("\n</div>\n");
}
{
var columnLists = linkLists[2];
Output.Write("\n\n<div class=\"column medium-4\">");
if (columnLists != null && columnLists.Count() > 0) {
Output.Write("\n    <ul>");
for (var __iter__link in columnLists) {var link=columnLists[__iter__link];if(typeof(link)!='function') {
Output.Write("\n            <li class=\"text-ellipsis\">\n                <a href=\"");
Output.Write(link.Url);
Output.Write("\" class=\"secondary-link\">");
Output.Write(link.Name);
Output.Write("</a>\n            </li>");
}}
Output.Write("\n    </ul>");
}
Output.Write("\n</div>\n");
}
{
var columnLists = linkLists[3];
Output.Write("\n\n<div class=\"column medium-4\">");
if (columnLists != null && columnLists.Count() > 0) {
Output.Write("\n    <ul>");
for (var __iter__link in columnLists) {var link=columnLists[__iter__link];if(typeof(link)!='function') {
Output.Write("\n            <li class=\"text-ellipsis\">\n                <a href=\"");
Output.Write(link.Url);
Output.Write("\" class=\"secondary-link\">");
Output.Write(link.Name);
Output.Write("</a>\n            </li>");
}}
Output.Write("\n    </ul>");
}
Output.Write("\n</div>\n");
}
Output.Write("\n            </div>\n        </div>\n        <div class=\"column small-12\">\n            <a id=\"showAllLink\" class=\"button link-button-secondary hide panel-expand-link\">\n                ");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Strings.Label_ShowAll);
Output.Write("<span class=\"icon-arrow-down down-arrow\"></span>\n            </a>\n        </div>\n    </div>");
}
}
Output.Write("\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n");
{
Output.Write("<div id=\"footer\" class=\"footer-simple\">\n    <div class=\"footer-container footer-container-centered\">\n        <div class=\"row\">\n            <div class=\"column medium-12\">\n                <div class=\"footer-base\">\n                    <ul>\n                        <li class=\"copyright\">");
Output.Write(String.Format(Resources.Strings.GlobalFooter, DateTime.Now.Year));
Output.Write(" </li>\n                        <li><a href=\"/info/agreement.aspx\" class=\"global-footer-link\">");
Output.Write(Resources.Strings.GlobalFooterLink_Terms);
Output.Write("</a></li>\n                        <li><a href=\"/info/privacypolicy.aspx\" class=\"global-footer-link\">");
Output.Write(Resources.Strings.GlobalFooterLink_Privacy);
Output.Write("</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
}
Output.Write("\n");
{
var filters = Model;
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
Output.Write("\n");
OutputScope('data'); {
Output.Write("\n  <script>\n    window.OTSearchData = ");
Output.Write(Html.RenderSearchViewModelToJson(Model));
Output.Write(";\n  </script>");
} DisposeOutputScope();
Output.Write("\n");
OutputScope('resources'); {
Output.Write("\n    <script>\n    window.Resources = {\n        Strings: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Strings)));
Output.Write(",\n        Home: {\n            Index: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Home.Index)));
Output.Write("\n        },\n        Shared: {\n            Common: {\n                Filters:     ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Common.Filters)));
Output.Write(",\n                Results:     ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Common.Results)));
Output.Write(",\n                Strings:     ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Common.Strings)));
Output.Write("\n            },\n            Search: {\n                Results: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Search.Results)));
Output.Write(",\n                Strings: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Search.Strings)));
Output.Write("\n            },\n            BestRestaurantsLandingPage: {\n                Strings: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.BestRestaurantsLandingPage.Strings)));
Output.Write(",\n                Filters: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.BestRestaurantsLandingPage.Filters)));
Output.Write(",\n            }\n        }\n    };\n    </script>");
} DisposeOutputScope();
Output.Write("\n");
OutputScope('js_imports'); {
Output.Write("\n");
{
Output.Write("<!-- build:js(Web) /s/Scripts/generated/bundle-landing-page-imports.js -->\n<!-- Libraries -->\n<script src=\"Scripts/lib/backbone.js\"></script>\n<script src=\"Scripts/lib/Timer.js\"></script>\n<!-- Libraries -->\n\n<!-- OT Common -->\n<script src=\"Scripts/src/OT/Common.js\"></script>\n<!-- OT Common -->\n\n<!-- OT Common Helpers -->\n<script src=\"Scripts/src/OT/Helpers/GetDeviceInfo.js\"></script>\n<script src=\"Scripts/src/OT/Helpers/GetPageSize.js\"></script>\n<!-- OT Common Helpers -->\n\n\n<!-- OT Search Helpers -->\n<script src=\"Scripts/src/Search/Helpers/BuildSearchParameters.js\"></script>\n<script src=\"Scripts/src/Search/Helpers/QueryString.js\"></script>\n<script src=\"Scripts/src/Search/Helpers/ConvertDateTimeToTimestamp.js\"></script>\n<script src=\"Scripts/src/Search/Helpers/ConvertDateToSearchDate.js\"></script>\n<script src=\"Scripts/src/Search/Helpers/ConvertTimeTo24Hour.js\"></script>\n<script src=\"Scripts/src/Search/Helpers/GetFormattedDate.js\"></script>\n<script src=\"Scripts/src/Search/Helpers/GetFormattedTime.js\"></script>\n<script src=\"Scripts/src/Search/Helpers/GetIdsFromCheckedItems.js\"></script>\n<script src=\"Scripts/src/Search/Helpers/IsFutureDateTime.js\"></script>\n<script src=\"Scripts/src/Search/Helpers/RenderTemplate.js\"></script>\n<script src=\"Scripts/src/Search/Helpers/RoundTimeTo.js\"></script>\n<!-- OT Search Helpers -->\n\n<!-- OT Search Requests -->\n<script src=\"Scripts/src/Search/Requests/BuildUrl.js\"></script>\n<script src=\"Scripts/src/Search/Requests/Results.js\"></script>\n<script src=\"Scripts/src/Common/Scroll.js\"></script>\n<!-- OT Search Requests -->\n\n<!-- Common Views -->\n<script src=\"Scripts/src/Common/BaseView.js\"></script>\n<script src=\"Scripts/src/Common/Views/Results/ResultsContainer.js\"></script>\n<script src=\"Scripts/src/Common/FilterGroupBaseView.js\"></script>\n<script src=\"Scripts/src/Common/ModalBaseView.js\"></script>\n<!-- Common Views -->\n\n<!-- Search View -->\n<script src=\"Scripts/src/Search/Views/SearchControl.js\"></script>\n<!-- Search View -->\n\n<!-- Best Restaurants DTP -->\n<script src=\"Scripts/src/BestRestaurantsLandingPage/Views/SearchControl.js\"></script>\n<!-- Best Restaurants DTP -->\n\n<!-- Best Restaurants Results -->\n<script src=\"Scripts/src/BestRestaurantsLandingPage/Views/Results/ResultsContainer.js\"></script>\n<script src=\"Scripts/src/BestRestaurantsLandingPage/Views/Results/Results.js\"></script>\n<script src=\"Scripts/src/BestRestaurantsLandingPage/Views/Results/Pagination.js\"></script>\n<script src=\"Scripts/src/BestRestaurantsLandingPage/Views/Results/Spinner.js\"></script>\n<!-- Best Restaurants Results -->\n\n<!-- Best Restaurants Filters -->\n<script src=\"Scripts/src/BestRestaurantsLandingPage/Views/Filters/Filters.js\"></script>\n<script src=\"Scripts/src/BestRestaurantsLandingPage/Views/Filters/Cuisines.js\"></script>\n<script src=\"Scripts/src/BestRestaurantsLandingPage/Views/Filters/PriceBands.js\"></script>\n<script src=\"Scripts/src/BestRestaurantsLandingPage/Views/Filters/OfferTypes.js\"></script>\n<script src=\"Scripts/src/BestRestaurantsLandingPage/Views/Filters/Sort.js\"></script>\n<!-- Best Restaurants Filters -->\n\n<!-- Best Restaurants Mobile Filters -->\n<script src=\"Scripts/src/BestRestaurantsLandingPage/Views/Filters/Mobile/Filters.js\"></script>\n<script src=\"Scripts/src/BestRestaurantsLandingPage/Views/Filters/Mobile/Cuisines.js\"></script>\n<script src=\"Scripts/src/BestRestaurantsLandingPage/Views/Filters/Mobile/PriceBands.js\"></script>\n<script src=\"Scripts/src/BestRestaurantsLandingPage/Views/Filters/Mobile/OfferTypes.js\"></script>\n<script src=\"Scripts/src/BestRestaurantsLandingPage/Views/Filters/Mobile/Sort.js\"></script>\n<script src=\"Scripts/src/BestRestaurantsLandingPage/Views/RefineFiltersLink.js\"></script>\n<script src=\"Scripts/src/BestRestaurantsLandingPage/Views/Modals/RefineFiltersModal.js\"></script>\n<script src=\"Scripts/src/BestRestaurantsLandingPage/Views/MobileHeaderLogoLink.js\"></script>\n<script src=\"Scripts/src/BestRestaurantsLandingPage/Views/ExpandPanelLink.js\"></script>\n<!-- Best Restaurants Mobile Filters -->\n\n<!-- OT Search -->\n<script src=\"Scripts/src/Search/Config.js\"></script>\n<script src=\"Scripts/src/Search/Data.js\"></script>\n<script src=\"Scripts/src/Search/Params.js\"></script>\n<script src=\"Scripts/src/Search/History.js\"></script>\n<script src=\"Scripts/src/Search/SendLogRequest.js\"></script>\n<!-- OT Search -->\n\n<!-- endbuild -->");
}
{
Output.Write("<!-- build:js(Web) /s/Scripts/generated/bundle-app-best-restaurants.js -->\n<script src=\"Scripts/src/BestRestaurantsLandingPage/App.js\"></script>\n<!-- endbuild -->");
}
Output.Write("\n\n    <script>\n        OT.BestRestaurantsLandingPage.init();\n    </script>\n");
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
} // window.Spark.BestRestaurantsLandingPage.Index
