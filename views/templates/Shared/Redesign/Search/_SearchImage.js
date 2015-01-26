if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Search) window.Spark.Shared.Redesign.Search = {};
window.Spark.Shared.Redesign.Search._SearchImage = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var searchImage = viewData["searchImage"];
function RenderViewLevel0() {
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
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Search._SearchImage
