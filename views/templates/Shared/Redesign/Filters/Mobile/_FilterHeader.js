if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Filters) window.Spark.Shared.Redesign.Filters = {};
if (!window.Spark.Shared.Redesign.Filters.Mobile) window.Spark.Shared.Redesign.Filters.Mobile = {};
window.Spark.Shared.Redesign.Filters.Mobile._FilterHeader = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var title = viewData["title"];
var leftLink = viewData["leftLink"];
var rightLink = viewData["rightLink"];
function RenderViewLevel0() {
Output.Write("\n\n<header id=\"RefineHeader\" class=\"app-header\">\n    <div class=\"tab-bar show-for-small-only\">\n        <div class=\"row\">\n            <div class=\"small-3 columns header-link-left\">\n                <a href=\"#\" id=\"RefineCancelLink\">");
Output.Write(leftLink);
Output.Write("</a>\n            </div>\n            <div class=\"small-6 columns header-link-middle\">\n                <h4>");
Output.Write(title);
Output.Write("</h4>\n            </div>\n            <div class=\"small-3 columns header-link-right text-right\">\n                <a href=\"#\" id=\"RefineApplyLink\">");
Output.Write(rightLink);
Output.Write("</a>\n            </div>\n        </div>\n    </div>\n</header>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Filters.Mobile._FilterHeader
