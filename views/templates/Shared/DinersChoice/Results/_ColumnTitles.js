if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.DinersChoice) window.Spark.Shared.DinersChoice = {};
if (!window.Spark.Shared.DinersChoice.Results) window.Spark.Shared.DinersChoice.Results = {};
window.Spark.Shared.DinersChoice.Results._ColumnTitles = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
function RenderViewLevel0() {
Output.Write("<thead>\n    <tr class=\"table-header\">\n        <td class=\"cell first-cell header-cell\">\n            <span>");
Output.Write(Resources.Shared.Common.Results.Header_Name);
Output.Write("</span> /\n            <span>");
Output.Write(Resources.Shared.Common.Results.Header_Area);
Output.Write("</span>\n        </td>\n        <td class=\"cell header-cell\">\n            <span>");
Output.Write(Resources.Shared.Common.Results.Header_Ratings);
Output.Write("</span>\n        </td>\n        <td class=\"cell header-cell\">\n            <span>");
Output.Write(Resources.Shared.Common.Results.Header_Price);
Output.Write("</span>\n        </td>\n        <td class=\"cell last-cell header-cell availability-header\">");
Output.Write(Resources.Shared.Common.Results.Header_Availability);
Output.Write("</td>\n    </tr>\n</thead>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.DinersChoice.Results._ColumnTitles
