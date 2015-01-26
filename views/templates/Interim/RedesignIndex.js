if (!window.Spark) window.Spark = {};
if (!window.Spark.Interim) window.Spark.Interim = {};
window.Spark.Interim.RedesignIndex = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
function RenderViewLevel0() {
Output.Write("\n\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n    <meta name=\"viewport\" content=\"user-scalable=yes\"/>\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=9; IE=8; IE=7; IE=EDGE\"/>\n\n    <link rel=\"icon\" href=\"");
Output.Write(Resources.Strings.FaviconURL);
Output.Write("\" type=\"image/x-icon\"/>\n    <link rel=\"shortcut icon\" href=\"");
Output.Write(Resources.Strings.FaviconURL);
Output.Write("\" type=\"image/x-icon\"/>\n          \n    <noscript>\n      <meta HTTP-EQUIV=\"REFRESH\" content=\"0;URL=");
Output.Write(Model.RedirectUri);
Output.Write("\"/>\n    </noscript>\n\n    ");
Output.Write( "<!--[if lte IE 9]>" );
Output.Write(" <meta HTTP-EQUIV=\"REFRESH\" content=\"0;URL=");
Output.Write(Model.RedirectUri);
Output.Write("\"> <![endif]-->\n\n    <script type=\"text/javascript\" src=\"//fonts.otstatic.com/dwh4rpg.js\"></script>\n    <script type=\"text/javascript\">try{Typekit.load();}catch(e){}</script>\n      \n    <title>");
Output.Write(Resources.Interim.Index.Strings.PageTitle);
Output.Write("</title>\n");
Html.RenderAction("Css", "Srs", {domainCulture:Model.DomainCulture });Output.Write("\n      ");
Html.RenderAction("JsHead", "Srs", {domainCulture:Model.DomainCulture });Output.Write("\n            \n    <link rel=\"stylesheet\" href=\"/s/content/css/generated/bundle_redesign_search.css\"/>\n\n  </head>\n\t<body class=\"search interim ");
Output.Write(Html.CurrentTheme(Model.DomainCulture));
Output.Write(" domain-");
Output.Write(Model.DomainCulture.Domain.ToString().ToLower());
Output.Write("\">\n\n        <div class=\"interim-loader\">\n            <div class=\"spinner\"></div>\n            <div class=\"loader-content\">\n              <p>");
Output.Write(Resources.Interim.Index.Strings.InterimLoader);
Output.Write("</p> \n           </div>\n        </div>\n\n\n    <script>\n        var ie = (function(){\n            var undef,\n            v = 3,\n            div = document.createElement('div'),\n            all = div.getElementsByTagName('i');\n\n            while (\n            div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',\n            all[0]\n            );\n\n            return v > 4 ? v : undef;\n        }());\n\n        (function() {\n            if (ie <= 9) {\n                return;\n            }\n        \n            var model = ");
Output.Write(Model.ToJson());
Output.Write(";\n\n            var url = \"");
Output.Write(Model.RedirectUri);
Output.Write("\";\n            \n            if (typeof(OT) === \"object\" && typeof(OT.ApplyOptimizelyChanges) === \"function\") {\n                url = OT.ApplyOptimizelyChanges(model);\n            }\n            \n            window.onload=function(){ window.location.href = url; };\n        })();\n    </script>\n\n    ");
Output.Write(Html.RenderTrackingCodePageNameOnly("SearchInterimLoadingGraphic", Model.DomainCulture, true));
Output.Write("\n\n  </body>\n\n</html>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Interim.RedesignIndex
