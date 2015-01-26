if (!window.Spark) window.Spark = {};
if (!window.Spark.DinersChoiceList) window.Spark.DinersChoiceList = {};
window.Spark.DinersChoiceList._LinkSection = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var linkSection = viewData["linkSection"];
var items = viewData["items"];
var itemClass = viewData["itemClass"];
var linkClass = viewData["linkClass"];
var titleClass = viewData["titleClass"];
function RenderViewLevel0() {
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
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.DinersChoiceList._LinkSection
