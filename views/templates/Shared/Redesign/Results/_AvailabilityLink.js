if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
if (!window.Spark.Shared.Redesign.Results) window.Spark.Shared.Redesign.Results = {};
window.Spark.Shared.Redesign.Results._AvailabilityLink = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var availabilityLink = viewData["availabilityLink"];
function RenderViewLevel0() {
Output.Write("\n");
if (availabilityLink.Request.IsAvailabilityRequest) {
Output.Write("\n    <br/>");
if (availabilityLink.Request.OnlyUnavailable == true && availabilityLink.Results.TotalAvailable > 0) {
var linkText = string.Format(availabilityLink.Results.TotalAvailable == 1 ? Resources.Shared.Redesign.Results.WithAvailabilityLink : Resources.Shared.Redesign.Results.WithAvailabilityLink_Plural, availabilityLink.Results.TotalAvailable);
Output.Write("\n        <a href=\"#\" id=\"availability_link\" class=\"availability-link\">");
Output.Write(linkText);
Output.Write("</a>");
}
else if ((availabilityLink.Request.OnlyUnavailable == null || availabilityLink.Request.OnlyUnavailable == false) && availabilityLink.Results.TotalUnavailable > 0) {
var description = Resources.Shared.Redesign.Results.IncludeInterspercedAvailabilityText;
var linkText = Resources.Shared.Redesign.Results.IncludeInterspercedAvailabilityLink;
Output.Write("\n        <p>");
Output.Write(string.Format(description, availabilityLink.Results.TotalUnavailable));
Output.Write("</p>\n        <a href=\"#\" id=\"availability_link\" class=\"text-arrow-right with-availability\">");
Output.Write(linkText);
Output.Write("</a>");
}
}
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign.Results._AvailabilityLink
