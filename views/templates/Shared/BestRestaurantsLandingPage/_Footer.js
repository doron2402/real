if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage) window.Spark.Shared.BestRestaurantsLandingPage = {};
window.Spark.Shared.BestRestaurantsLandingPage._Footer = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
function RenderViewLevel0() {
Output.Write("<div id=\"footer\" class=\"footer-simple\">\n    <div class=\"footer-container footer-container-centered\">\n        <div class=\"row\">\n            <div class=\"column medium-12\">\n                <div class=\"footer-base\">\n                    <ul>\n                        <li class=\"copyright\">");
Output.Write(String.Format(Resources.Strings.GlobalFooter, DateTime.Now.Year));
Output.Write(" </li>\n                        <li><a href=\"/info/agreement.aspx\" class=\"global-footer-link\">");
Output.Write(Resources.Strings.GlobalFooterLink_Terms);
Output.Write("</a></li>\n                        <li><a href=\"/info/privacypolicy.aspx\" class=\"global-footer-link\">");
Output.Write(Resources.Strings.GlobalFooterLink_Privacy);
Output.Write("</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.BestRestaurantsLandingPage._Footer
