if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Modals) window.Spark.Shared.Redesign.Modals = {};
if (!window.Spark.Shared.Redesign.Modals.SingleSearchModal) window.Spark.Shared.Redesign.Modals.SingleSearchModal = {};
window.Spark.Shared.Redesign.Modals.SingleSearchModal._DatePicker = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
function RenderViewLevel0() {
Output.Write("<div class=\"date-picker dtp-picker-selector\">\n    <a class=\"dtp-picker-selector-link\">\n        <div class=\"date-label dtp-picker-label\">Today</div>\n        <input type=\"hidden\" name=\"datepicker\" class=\"datepicker dtp-picker-select\"/>\n    </a>\n</div>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Modals.SingleSearchModal._DatePicker
