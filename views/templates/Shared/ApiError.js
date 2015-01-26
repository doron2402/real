if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
window.Spark.Shared.ApiError = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
function RenderViewLevel0() {
Output.Write("\n<div class=\"error-page-content\">\n\n    <h1>");
Output.Write(Resources.Home.ApiError.Heading);
Output.Write("</h1>\n\n    <h2>");
Output.Write(string.Format(Resources.Home.ApiError.Action, Resources.Home.ApiError.HomeLink, Resources.Home.ApiError.SearchAgainLink));
Output.Write("</h2>\n\n  \n    ");
Output.Write(Html.RenderTrackingCodePageNameOnly("ApiErrorPage", Model, true));
Output.Write("\n  \n</div>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.ApiError
