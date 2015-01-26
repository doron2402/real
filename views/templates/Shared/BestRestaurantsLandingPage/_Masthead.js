if (!window.Spark) window.Spark = {};
if (!window.Spark.Shared) window.Spark.Shared = {};
if (!window.Spark.Shared.BestRestaurantsLandingPage) window.Spark.Shared.BestRestaurantsLandingPage = {};
window.Spark.Shared.BestRestaurantsLandingPage._Masthead = {
RenderView: function(viewData) {
var StringWriter = function() {this._parts = [];this.Write = function(arg) {if(arg !== null){this._parts.push(arg.toString());}};this.toString = function() {return this._parts.join('');};};
var Output = new StringWriter();
var Content = {};
function OutputScope(arg) {if (typeof arg == 'string') {if (!Content[arg]) Content[arg] = new StringWriter(); arg = Content[arg];}OutputScope._frame = {_frame:OutputScope.Frame, _output:Output};Output = arg;};
function DisposeOutputScope() {Output = OutputScope._frame._output;OutputScope._frame = OutputScope._frame._frame;};
var mastheadModel = viewData["mastheadModel"];
var search = viewData["search"];
function RenderViewLevel0() {
Output.Write("\n\n<div id=\"content-header\" class=\"with-background\">\n    <div class=\"content-header-hero\">\n        <div class=\"content-header-hero-wrap\"></div>\n        <div class=\"content-header-hero-overlay\"></div>\n    </div>\n\n    <div class=\"content-wrap content-wrap-centered\">\n        <div class=\"row\">\n            <div class=\"column large-12\">\n                <h1>\n                    <span class=\"font-weight-medium\">\n                        ");
Output.Write(string.Format(Resources.Shared.BestRestaurantsLandingPage.Strings.HeaderTitleFormat, mastheadModel.Display.Location.Name));
Output.Write("\n                    </span>\n                </h1>\n");
{
var search = Model;
Output.Write("\n\n<div class=\"search-dtp\">\n    <div id=\"dtp-picker\" action=\"/search\">\n        <ul class=\"dtp-picker-container\">\n            <li class=\"dtp-selector\">\n                <a>\n                    <div class=\"icon-users dtp-icon\"></div>\n                    <div id=\"dtp-label-party\" data-bind=\"text: _vm.dtpPicker.partySize_label\" class=\"dtp-label\"></div>\n                    <select id=\"covers\" data-bind=\"value: _vm.dtpPicker.partySize, valueUpdate: _vm.dtpPicker.partySize\" class=\"dtp-select\">");
for (var __iter__option in search.Display.CoverOptions) {var option=search.Display.CoverOptions[__iter__option];if(typeof(option)!='function') {
Output.Write("\n                            <option value=\"");
Output.Write(option.Value);
Output.Write("\"");
{
var __just__once__ = 0;
if (option.IsSelected) {
if (__just__once__ < 1) {
Output.Write(" selected=\"");
}
__just__once__ = 1;
Output.Write("selected");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">");
Output.Write(option.Text);
Output.Write("</option>");
}}
Output.Write("\n                    </select>\n                </a>\n            </li>\n            <li class=\"dtp-selector with-seperator\">\n                <a>\n                    <div class=\"icon-calendar dtp-icon\"></div>\n                    <div id=\"dtp-label-date\" data-bind=\"text: _vm.dtpPicker.date_label\" class=\"dtp-label\"></div>\n                    <select id=\"date\" name=\"date\" data-bind=\"value: _vm.dtpPicker.date, valueUpdate: _vm.dtpPicker.date\" class=\"dtp-select\">\n                        <option value=\"0\">Today</option>\n                    </select>\n                </a>\n            </li>\n            <li class=\"dtp-selector with-seperator\">\n                <a>\n                    <div class=\"icon-clock dtp-icon\"></div>\n                    <div id=\"dtp-label-time\" class=\"dtp-label\"></div>\n                    <select id=\"time\" name=\"time\" data-bind=\"value: _vm.dtpPicker.time, valueUpdate: _vm.dtpPicker.time\" class=\"dtp-select\">");
for (var __iter__option in search.Display.TimeOptions) {var option=search.Display.TimeOptions[__iter__option];if(typeof(option)!='function') {
Output.Write("\n                            <option value=\"");
Output.Write(option.Value);
Output.Write("\"");
{
var __just__once__ = 0;
if (option.IsSelected) {
if (__just__once__ < 1) {
Output.Write(" selected=\"");
}
__just__once__ = 1;
Output.Write("selected");
}
if (__just__once__ > 0) {
Output.Write("\"");
}
}
Output.Write(">");
Output.Write(option.Text);
Output.Write("</option>");
}}
Output.Write("\n                    </select>\n                </a>\n            </li>\n            <li class=\"dtp-submit show-for-large-up hide-for-medium-only hide-for-small-only\">\n                <button id=\"findATable\">");
Output.Write(Resources.Shared.BestRestaurantsLandingPage.Strings.Label_FindATable);
Output.Write("</button>\n            </li>\n        </ul>\n    </div>\n</div>");
}
Output.Write("\n            </div>\n        </div>\n    </div>\n</div>\n");
}
RenderViewLevel0();
return Output.toString();
} // function RenderView
} // window.Spark.Shared.BestRestaurantsLandingPage._Masthead
