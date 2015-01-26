if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.DinersChoice) window.Spark.Shared.DinersChoice = {};
if (!window.Spark.Shared.DinersChoice.Filters) window.Spark.Shared.DinersChoice.Filters = {};
window.Spark.Shared.DinersChoice.Filters._DinersChoiceGroup = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var dinersChoiceGroup = viewData["dinersChoiceGroup"];
var bestFoodCuisines = viewData["bestFoodCuisines"];
var name = viewData["name"];
function RenderViewLevel0() {
Output.Write("\n");
if (dinersChoiceGroup.Count() > 0) {
Output.Write("\n    <div class=\"group links dinerschoice\">\n        <b>");
Output.Write(name);
Output.Write("</b>");
for (var __iter__link in dinersChoiceGroup) {var link=dinersChoiceGroup[__iter__link];if(typeof(link)!='function') {
Output.Write("\n            <a href=\"");
Output.Write(link.Uri);
Output.Write("\" class=\"link");
if (link.IsSelected) {
Output.Write(" selected");
}
Output.Write("\" title=\"");
Output.Write(link.Name);
Output.Write("\" data-id=\"");
Output.Write(link.Id);
Output.Write("\">");
Output.Write(link.Name);
Output.Write("</a>\n");
if (link.Id == "Best Food") {
Output.Write("\n                <div class=\"sub-list\" data-list-name=\"");
Output.Write(link.Id);
Output.Write("\" data-filter-name=\"CuisineIds\">");
for (var __iter__bestFoodCuisine in bestFoodCuisines) {var bestFoodCuisine=bestFoodCuisines[__iter__bestFoodCuisine];if(typeof(bestFoodCuisine)!='function') {
Output.Write("\n                        <a href=\"");
Output.Write(bestFoodCuisine.Uri);
Output.Write("\" class=\"link");
if (bestFoodCuisine.IsSelected) {
Output.Write(" selected");
}
Output.Write("\" title=\"");
Output.Write(bestFoodCuisine.Name);
Output.Write("\" data-id=\"");
Output.Write(bestFoodCuisine.Id);
Output.Write("\">");
Output.Write(bestFoodCuisine.Name);
Output.Write("</a>");
}}
Output.Write("\n                </div>");
}
}}
Output.Write("\n    </div>");
}
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.DinersChoice.Filters._DinersChoiceGroup
