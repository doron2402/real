if (!window.Spark) window.Spark = {};
if (!window.Spark.Srs) window.Spark.Srs = {};
window.Spark.Srs._Advert = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
function RenderViewLevel0() {
Output.Write("\n\n<div class=\"page-ad-section hide-for-small-only hide-for-medium-only\">\n    <a href=\"#\" class=\"page-ad-link\">\n        ");
Output.Write(Model);
Output.Write("\n    </a>\n</div>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Srs._Advert
