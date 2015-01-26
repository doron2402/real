if (!window.Spark) window.Spark = {};
if (!window.Spark.Interim) window.Spark.Interim = {};
window.Spark.Interim.Index = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
function RenderViewLevel0() {
Output.Write("\n\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n      <meta name=\"viewport\" content=\"user-scalable=yes\"/>\n      <meta http-equiv=\"X-UA-Compatible\" content=\"IE=9; IE=8; IE=7; IE=EDGE\"/>\n\n      <link rel=\"icon\" href=\"");
Output.Write(Resources.Strings.FaviconURL);
Output.Write("\" type=\"image/x-icon\"/>\n      <link rel=\"shortcut icon\" href=\"");
Output.Write(Resources.Strings.FaviconURL);
Output.Write("\" type=\"image/x-icon\"/>\n\n      <script src=\"");
Output.Write(Html.OptimizelySnippet(Model.DomainCulture));
Output.Write("\"></script>\n\n      <noscript>\n        <meta HTTP-EQUIV=\"REFRESH\" content=\"0;URL=");
Output.Write(Model.RedirectUri);
Output.Write("\">\n    </noscript>\n\n      <title>");
Output.Write(Resources.Interim.Index.Strings.PageTitle);
Output.Write("</title>\n\n      <link rel=\"stylesheet\" href=\"/s/content/css/srs-min/bundle_");
Output.Write(Html.CurrentTheme(Model.DomainCulture));
Output.Write("_core.css\">\n        <link rel=\"stylesheet\" href=\"/s/content/css/generated/bundle_");
Output.Write(Html.CurrentTheme(Model.DomainCulture));
Output.Write("_search.css\">\n\n          <!--[if lte IE 8]> <script src=\"/s/scripts/generated/ie_compat.js\"></script> <![endif]-->\n\n          ");
Output.Write( "<!--[if IE 9]>" );
Output.Write(" <link rel=\"stylesheet\" href=\"/s/content/css/generated/bundle_");
Output.Write(Html.CurrentTheme(Model.DomainCulture));
Output.Write("_ie9.css\"> <![endif]-->\n\n          ");
Output.Write( "<!--[if IE 8]>" );
Output.Write(" <link rel=\"stylesheet\" href=\"/s/content/css/generated/bundle_");
Output.Write(Html.CurrentTheme(Model.DomainCulture));
Output.Write("_ie8.css\"> <![endif]-->\n\n        </head>\n  <body class=\"");
Output.Write(Html.CurrentTheme(Model.DomainCulture));
Output.Write(" domain-");
Output.Write(Model.DomainCulture.Domain.ToString().ToLower());
Output.Write("\"");
if (Content['bodyClass']) {
Output.Write(Content['bodyClass']);}
Output.Write("\">\n    <div class=\"loader interim-loader\">\n      <div class=\"loader-content\">");
Output.Write(Resources.Interim.Index.Strings.InterimLoader);
Output.Write("</div>\n    </div>\n\n    <script>\n      (function() {\n      var model = ");
Output.Write(Model.ToJson());
Output.Write(";\n\n      var url = \"");
Output.Write(Model.RedirectUri);
Output.Write("\";\n      if (typeof(OT) === \"object\" && typeof(OT.ApplyOptimizelyChanges) === \"function\") {\n      url = OT.ApplyOptimizelyChanges(model);\n      }\n      window.onload=function(){ window.location.href = url; };\n      })();\n    </script>\n\n    ");
Output.Write(Html.RenderTrackingCodePageNameOnly("SearchInterimLoadingGraphic", Model.DomainCulture, false));
Output.Write("\n    \n  </body>\n</html>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Interim.Index
