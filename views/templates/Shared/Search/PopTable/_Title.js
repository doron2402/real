if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Search) window.Spark.Shared.Search = {};
if (!window.Spark.Shared.Search.PopTable) window.Spark.Shared.Search.PopTable = {};
window.Spark.Shared.Search.PopTable._Title = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
function RenderViewLevel0() {
if (popTable.Results.Total == 1) {
Output.Write("\n    ");
Output.Write(string.Format(Resources.Shared.Common.Results.FeaturedPopTitle, popTable.Results.Total));
}
else {
Output.Write("\n    ");
Output.Write(string.Format(Resources.Shared.Common.Results.FeaturedPopTitle_Plural, popTable.Results.Total));
}
Output.Write("\n\n<a href=\"/popups/rewardsbrief.aspx\" id=\"whats_this\" class=\"link\">what's this?</a>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Search.PopTable._Title
