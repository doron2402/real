if (!window.Spark) window.Spark = {};
if (!window.Spark.Header) window.Spark.Header = {};
window.Spark.Header._Navigation = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
function RenderViewLevel0() {
Output.Write("\n\n<div id=\"hamburger_menu\" class=\"global-nav-hamburger-menu\"><i class=\"icon icon-menu\"></i></div>\n\n<nav class=\"global-nav\">\n    <a href=\"/\" class=\"global-nav-link\" title=\"Home\">");
Output.Write(Resources.Strings.GlobalHeaderLink_Home);
Output.Write("</a>\n");
if (Model.IsUserSignedIn) {
Output.Write("\n        <a href=\"/myprofile.aspx\" class=\"global-nav-link\" title=\"");
Output.Write(Resources.Strings.GlobalHeaderLink_MyProfile);
Output.Write("\">");
Output.Write(Resources.Strings.GlobalHeaderLink_MyProfile);
Output.Write("</a>\n        <a href=\"/logout.aspx\" class=\"global-nav-link\" title=\"");
Output.Write(Resources.Strings.GlobalHeaderLink_SignOut);
Output.Write("\">");
Output.Write(Resources.Strings.GlobalHeaderLink_SignOut);
Output.Write("</a>");
}
else {
Output.Write("\n        <a href=\"");
Output.Write(Model.SignInUri);
Output.Write("\" id=\"global_nav_sign_in\" class=\"global-nav-link\" title=\"");
Output.Write(Resources.Strings.GlobalHeaderLink_SignIn);
Output.Write("\">");
Output.Write(Resources.Strings.GlobalHeaderLink_SignIn);
Output.Write("</a>");
}
Output.Write("\n\n    <a href=\"");
Output.Write(Resources.Strings.GlobalHeaderLink_iPhone_Link);
Output.Write("\" data-icon=\"&#xe001\" class=\"global-nav-link global-nav-icon\" title=\"");
Output.Write(Resources.Strings.GlobalHeaderLink_iPhone_Title_Attribute);
Output.Write("\"><i>");
Output.Write(Resources.Strings.GlobalHeaderLink_iPhone_Text_Fallback);
Output.Write("</i></a>\n    <a href=\"");
Output.Write(Resources.Strings.GlobalHeaderLink_Android_Link);
Output.Write("\" data-icon=\"&#xe002\" class=\"global-nav-link global-nav-icon\" title=\"");
Output.Write(Resources.Strings.GlobalHeaderLink_Android_Title_Attribute);
Output.Write("\"><i>");
Output.Write(Resources.Strings.GlobalHeaderLink_Android_Text_Fallback);
Output.Write("</i></a>\n    <a href=\"/contactuslink.aspx\" class=\"global-nav-link global-nav-link--help last\" title=\"");
Output.Write(Resources.Strings.GlobalHeaderLink_Help);
Output.Write("\">");
Output.Write(Resources.Strings.GlobalHeaderLink_Help);
Output.Write("</a>\n</nav>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Header._Navigation
