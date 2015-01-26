if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage) window.Spark.Shared.BestRestaurantsLandingPage = {};
window.Spark.Shared.BestRestaurantsLandingPage._JsCommon = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
function RenderViewLevel0() {
Output.Write("<!-- build:js(Web) /s/Scripts/generated/bundle-landing-page-common.js -->\n<!-- Libraries -->\n<script src=\"Scripts/lib/underscore.js\"></script>\n<script src=\"Scripts/lib/jquery.js\"></script>\n<script src=\"Scripts/lib/jQuery.migrate.js\"></script>\n<script src=\"Scripts/lib/jQuery.postMessage.js\"></script>\n<script src=\"Scripts/lib/moment.js\"></script>\n<script src=\"Scripts/lib/fastclick.js\"></script>\n<!-- Libraries -->\n\n<!-- OT Common -->\n<script src=\"Scripts/src/NamespaceGenerator.js\"></script>\n<script src=\"Scripts/src/OT/Extensions.js\"></script>\n<script src=\"Scripts/src/OT/Config.js\"></script>\n<script src=\"Scripts/src/OT/Cookies.js\"></script>\n<script src=\"Scripts/src/OT/EnvInfo.js\"></script>\n<script src=\"Scripts/src/OT/OpenWindow.js\"></script>\n<script src=\"Scripts/src/OT/SiteCatalyst.js\"></script>\n<script src=\"Scripts/src/OT/Accordion.js\"></script>\n<script src=\"Scripts/src/OT/Menu.js\"></script>\n<script src=\"Scripts/src/OT/LazyLoadImages.js\"></script>\n<!-- OT Common -->\n\n<!-- OT Common Helpers -->\n<script src=\"Scripts/src/OT/Helpers/GenerateGUID.js\"></script>\n<script src=\"Scripts/src/OT/Helpers/BuildBrowserProfile.js\"></script>\n<script src=\"Scripts/src/OT/Helpers/BuildObjectFromCheckedItems.js\"></script>\n<script src=\"Scripts/src/OT/Helpers/BuildPerformanceProfile.js\"></script>\n<script src=\"Scripts/src/OT/Helpers/DownloadGoogleMaps.js\"></script>\n<script src=\"Scripts/src/OT/Helpers/GetPageId.js\"></script>\n<script src=\"Scripts/src/OT/Helpers/GetSessionKey.js\"></script>\n<script src=\"Scripts/src/OT/Helpers/GetTimeFromPageLoad.js\"></script>\n<script src=\"Scripts/src/OT/Helpers/IsMobile.js\"></script>\n<script src=\"Scripts/src/OT/Helpers/QueryString.js\"></script>\n<script src=\"Scripts/src/OT/Helpers/RedirectWindow.js\"></script>\n<!-- OT Common Helpers -->\n\n<!-- OT Common -->\n<script src=\"Scripts/src/OT/Events.js\"></script>\n<script src=\"Scripts/src/OT/SendLogRequest.js\"></script>\n<script src=\"Scripts/src/OT/TestObject.js\"></script>\n<!-- OT Common -->\n<!-- endbuild -->");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.BestRestaurantsLandingPage._JsCommon
