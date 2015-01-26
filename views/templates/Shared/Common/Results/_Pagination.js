if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Common) window.Spark.Shared.Common = {};
if (!window.Spark.Shared.Common.Results) window.Spark.Shared.Common.Results = {};
window.Spark.Shared.Common.Results._Pagination = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
function RenderViewLevel0() {
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
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Common.Results._Pagination
