if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.CuisineLandingPage) window.Spark.Shared.CuisineLandingPage = {};
window.Spark.Shared.CuisineLandingPage._CoverImage = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var coverImage = viewData["coverImage"];
function RenderViewLevel0() {
Output.Write("\n");
if (coverImage.Display.Cuisine != null && coverImage.Display.Location != null) {
{
var coverImageFileName = string.Format("best-{0}-restaurants.jpg", coverImage.Display.Cuisine.Name.Replace(" / ", "-").Replace(", ", "-").Replace(" ", "-").ToLower());
var coverImageTitle = string.Format(Resources.Shared.CuisineLandingPage.Strings.CoverImageAlt, coverImage.Display.Location.Name, coverImage.Display.Cuisine.Name);
Output.Write("\n\n    <h1 class=\"heading\">");
Output.Write(string.Format(Resources.Shared.CuisineLandingPage.Strings.CoverImageHeadingFormat, coverImage.Display.Location.Name, coverImage.Display.Cuisine.Name));
Output.Write("</h1>\n    <img src=\"/s/content/images/1x1.gif\" data-src=\"/s/content/images/cuisines/");
Output.Write(coverImageFileName);
Output.Write("\" data-src-mobile=\"/s/content/images/cuisines/small/");
Output.Write(coverImageFileName);
Output.Write("\" data-mobile-size=\"545\" class=\"lazy\" alt=\"");
Output.Write(coverImageTitle);
Output.Write("\" title=\"");
Output.Write(coverImageTitle);
Output.Write("\">");
}
}
Output.Write("\n");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.CuisineLandingPage._CoverImage
