if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Search) window.Spark.Shared.Redesign.Search = {};
if (!window.Spark.Shared.Redesign.Search.Map) window.Spark.Shared.Redesign.Search.Map = {};
window.Spark.Shared.Redesign.Search.Map._PinHover = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var pinHover = viewData["pinHover"];
function RenderViewLevel0() {
Output.Write("\n\n<div class=\"map-popup\">\n\t<div class=\"rest-row with-image\">\n\t\t<div class=\"rest-row-info\">\n\t\t\t<div class=\"rest-row-image\">\n\t\t\t\t<a href=\"");
Output.Write(pinHover.ProfileUrl);
Output.Write("\">\n\t\t\t\t\t<img src=\"/img/restimages/");
Output.Write(pinHover.Id);
Output.Write(".jpg\" class=\"rest-row-image-img\"/>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"rest-row-name\"><a href=\"");
Output.Write(pinHover.ProfileUrl);
Output.Write("\">");
Output.Write(pinHover.Name);
Output.Write("</a></div>\n\t\t\t<div class=\"rest-row-review\">");
Output.Write(pinHover.ReviewHtml);
Output.Write("</div>\n\t\t\t<div class=\"rest-row-meta\">");
Output.Write(pinHover.MetaDataHtml);
Output.Write("</div>\n\t\t</div>\n\t</div>\n</div>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Search.Map._PinHover
