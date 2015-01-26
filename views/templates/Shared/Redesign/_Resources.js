if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.Redesign) window.Spark.Shared.Redesign = {};
window.Spark.Shared.Redesign._Resources = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
function RenderViewLevel0() {
Output.Write("  <script>\n    window.Resources={\n        Strings: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Strings)));
Output.Write(",\n        Home: {\n            Index: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Home.Index)));
Output.Write("\n        },\n        Shared: {\n            Common: {\n                BreadCrumbs: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Common.BreadCrumbs)));
Output.Write(",\n                Filters: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Common.Filters)));
Output.Write(",\n                LocationBar: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Common.LocationBar)));
Output.Write(",\n                Modals: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Common.Modals)));
Output.Write(",\n                Results: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Common.Results)));
Output.Write(",\n                Strings: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Common.Strings)));
Output.Write("\n            },\n            Search: {\n                Map: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Search.Map)));
Output.Write(",\n                Results: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Search.Results)));
Output.Write(",\n                Strings: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Search.Strings)));
Output.Write(",\n                Tabs: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Search.Tabs)));
Output.Write("\n            },\n            Redesign: {\n                Filters: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Redesign.Filters)));
Output.Write(",\n                Strings: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Redesign.Strings)));
Output.Write(",\n                Results: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Redesign.Results)));
Output.Write(",\n                NoResults: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.Redesign.NoResults)));
Output.Write("\n            },\n            PopRestaurantList: {\n                Strings: ");
Output.Write(Html.RenderResourceToJson(typeof(Resources.Shared.PopRestaurantList.Strings)));
Output.Write("\n            }\n        }\n    };\n  </script>");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.Redesign._Resources
