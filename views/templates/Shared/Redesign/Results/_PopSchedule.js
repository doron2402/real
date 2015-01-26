if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Results) window.Spark.Shared.Redesign.Results = {};
window.Spark.Shared.Redesign.Results._PopSchedule = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var popScheduleRestaurant = viewData["popScheduleRestaurant"];
function RenderViewLevel0() {
Output.Write("\n<div class=\"rest-row-popoffers\">\n  <span class=\"rest-row-name\">");
Output.Write(Resources.Shared.PopRestaurantList.Strings.PopScheduleHeading);
Output.Write(":</span>\n  <ul class=\"topreview-text\">");
for (var __iter__weekSchedule in popScheduleRestaurant.PopSchedule.WeekSchedules) {var weekSchedule=popScheduleRestaurant.PopSchedule.WeekSchedules[__iter__weekSchedule];if(typeof(weekSchedule)!='function') {
Output.Write("\n    <li>");
Output.Write(weekSchedule);
Output.Write("</li>");
}}
Output.Write("\n  </ul>\n</div>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Results._PopSchedule
