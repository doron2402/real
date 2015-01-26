if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Results) window.Spark.Shared.Redesign.Results = {};
window.Spark.Shared.Redesign.Results._Pagination = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var pagination = viewData["pagination"];
var showPageNumbers = viewData["showPageNumbers"];
function RenderViewLevel0() {
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
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Results._Pagination
