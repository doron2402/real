if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Common) window.Spark.Shared.Common = {};
window.Spark.Shared.Common._MapFooter = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
function RenderViewLevel0() {
Output.Write("\n\n<div class=\"footer-container-short\">\n  <div class=\"footer-base\">\n    <span class=\"footer-copyright\">");
Output.Write(string.Format(Resources.Shared.Redesign.Strings.CopyrightFormat, model.Display.CurrentYear));
Output.Write("</span><br/>\n    <a class=\"footer-base-link\" href=\"/info/privacypolicy.aspx\">");
Output.Write(Resources.Shared.Redesign.Strings.MapFooterLink_Privacy);
Output.Write("</a>\n    <a class=\"footer-base-link\" href=\"/info/agreement.aspx\">");
Output.Write(Resources.Shared.Redesign.Strings.MapFooterLink_Terms);
Output.Write("</a>\n  </div>\n</div>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Common._MapFooter
