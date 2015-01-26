if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
window.Spark.Shared.Redesign._Js = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
function RenderViewLevel0() {
Output.Write("<!-- build:js(Web) /s/Scripts/generated/bundle_common_redesign.js -->\n<!-- Libraries -->\n<script src=\"Scripts/lib/fastclick.js\"></script>\n<script src=\"Scripts/lib/jquery.scrollTo.min.js\"></script>\n<!-- Libraries -->\n\n<!-- OT Common -->\n<!-- Diff compared to SRS, can we use the ones from SRS? -->\n<script src=\"Scripts/src/Redesign/Common/Extensions.js\"></script>\n\n<script src=\"Scripts/src/Redesign/Common/Accordion.js\"></script>\n\n<script src=\"Scripts/src/Redesign/Common/Menu.js\"></script>\n<script src=\"Scripts/src/Redesign/Common/TestObject.js\"></script>\n<!-- OT Common -->\n<!-- endbuild -->");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign._Js
