if (!window.Spark) window.Spark = {};
if (!window.Spark.Layouts) window.Spark.Layouts = {};
window.Spark.Layouts.Application = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
function RenderViewLevel0() {
Output.Write("\n<!DOCTYPE html>\n<html>\n<head>\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=9; IE=8; IE=7; IE=EDGE\"/>\n    <meta charset=\"utf-8\"/>\n\n    <link rel=\"icon\" href=\"");
Output.Write(Resources.Strings.FaviconURL);
Output.Write("\" type=\"image/x-icon\"/>\n    <link rel=\"shortcut icon\" href=\"");
Output.Write(Resources.Strings.FaviconURL);
Output.Write("\" type=\"image/x-icon\"/>\n");
if (Content['pageTitle']) {
Output.Write(Content['pageTitle']);}
if (Content['metaDescription']) {
Output.Write(Content['metaDescription']);}
Output.Write("\n    <meta content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\" name=\"viewport\"/>\n");
if (Content['cssComponent']) {
Output.Write(Content['cssComponent']);}
Output.Write("    ");
if (Content['cssImports']) {
Output.Write(Content['cssImports']);}
Output.Write("\n</head>\n<body class=\"");
Output.Write(Html.CurrentTheme(Model.DomainCulture));
Output.Write(" domain-");
Output.Write(Model.DomainCulture.Domain.ToString().ToLower());
Output.Write(" ");
if (Content['bodyClass']) {
Output.Write(Content['bodyClass']);}
Output.Write("\">\n\n    <div class=\"page-wrapper cf\">");
if (Content['view']) {
Output.Write(Content['view']);}
Output.Write("\n    </div>\n\n    <div id=\"tooltip\" class=\"tooltip\"></div>\n    <div id=\"results_modal\" class=\"modal results-modal\"></div>\n    <div id=\"filters_modal\" class=\"modal filters-modal\"></div>\n    <div id=\"location_modal\" class=\"modal location-modal\"></div>\n\n    <div id=\"loading_animation\" class=\"loader search-loader\">\n        <div id=\"loading_error_container\" class=\"loader-content\"></div>\n    </div>\n");
if (Content['data']) {
Output.Write(Content['data']);}
Output.Write("\n");
if (Content['resources']) {
Output.Write(Content['resources']);}
Output.Write("\n  \n    <script src=\"/s/Scripts/generated/bundle_views.js\"></script>\n");
if (Content['jsComponent']) {
Output.Write(Content['jsComponent']);}
if (Content['js_imports']) {
Output.Write(Content['js_imports']);}
Output.Write("\n\n    <script>\n    (function() {\n        var s = document.createElement('script');\n        s.src = '");
Output.Write(Html.OptimizelySnippet(Model.DomainCulture));
Output.Write("';\n        var x = document.getElementsByTagName('script')[0];\n        x.parentNode.insertBefore(s, x);\n    })();\n    </script>\n");
if (Content['tracking']) {
Output.Write(Content['tracking']);}
Output.Write("\n\n</body>\n</html>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Layouts.Application
