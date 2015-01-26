if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage) window.Spark.Shared.BestRestaurantsLandingPage = {};
window.Spark.Shared.BestRestaurantsLandingPage._Header = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
function RenderViewLevel0() {
Output.Write("<header id=\"header\" class=\"app-header\">\n\n    <div class=\"top-bar hide-for-small-only header-for-desktop\">\n        <div class=\"top-bar-wrap\">\n            <div class=\"top-bar-logo\">\n                <a href='/' title='OpenTable' class=\"top-bar-logo-link\">\n                    <h1 class=\"top-bar-logo-name\">OpenTable</h1>\n                </a>\n            </div>\n            <section class=\"top-bar-section right show-for-medium-up\">\n              <ul>\n                <li class=\"has-button\">\n                  <a href=\"/register.aspx?ReturnUrl=");
Output.Write(Request.RawUrl);
Output.Write("\">");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Strings.HeaderLink_SignUp);
Output.Write("</a>\n                </li>\n                <li>\n                    <a href=\"/login.aspx?ReturnUrl=");
Output.Write(Request.RawUrl);
Output.Write("\">");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Strings.HeaderLink_SignIn);
Output.Write("</a>\n                </li>\n                <li>\n                  <a href=\"/contactuslink.aspx\">");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Strings.HeaderLink_Help);
Output.Write("</a>\n                </li>\n              </ul>\n            </section>\n        </div>\n    </div>\n\n    <div class=\"tab-bar show-for-small-only header-for-mobile\">\n      <div class=\"row\">\n        <div class=\"small-3 columns header-link-left\"></div>\n        <div class=\"small-6 columns\">\n            <div class=\"top-bar-logo\">\n                <a href='/' title='OpenTable' class=\"top-bar-logo-link\">\n                    <h1 class=\"top-bar-logo-name\">OpenTable</h1>\n                </a>\n            </div>\n        </div>\n        <div class=\"small-3 columns header-link-right text-right\">\n          <a id=\"refine-filters-link\" href=\"#\">");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Filters.Label_Refine);
Output.Write("</a>\n        </div>\n      </div>\n    </div>\n</header>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.BestRestaurantsLandingPage._Header
