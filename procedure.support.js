"use strict";

/*;
              	@submodule-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-submodule-license
              
              	@submodule-configuration:
              		{
              			"package": "fno",
              			"path": "fno/procedure.module.js",
              			"file": "procedure.module.js",
              			"module": "fno",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/fno.git",
              			"test": "fno-test.js",
              			"global": false,
              			"internal": true,
              			"class": true
              		}
              	@end-submodule-configuration
              
              	@submodule-documentation:
              		Procedure class wrapper.
              	@end-submodule-documentation
              
              	@include:
              		{
              			"ehm": "ehm"
              		}
              	@end-include
              */var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _hasInstance = require("babel-runtime/core-js/symbol/has-instance");var _hasInstance2 = _interopRequireDefault(_hasInstance);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Meta = require("ehm")();

var FUNCTION_NAME = "Function";
var FUNCTION_TYPE = "function";

var SERIALIZE_FUNCTION_TAG_PATTERN = /^\[function Function(?:\:(.+?))?\]$/;var

Procedure = function (_Meta) {(0, _inherits3.default)(Procedure, _Meta);(0, _createClass3.default)(Procedure, null, [{ key: _hasInstance2.default, value: function value(
		instance) {
			return (
				typeof instance == "function" ||
				instance instanceof Function ||
				typeof instance == "function" && instance.name === FUNCTION_NAME ||
				Meta.instanceOf(instance, this));

		} }, { key: "deserialize", value: function deserialize(

		data, parser, blueprint) {
			/*;
                            	@meta-configuration:
                            		{
                            			"data": "*",
                            			"parser": "function",
                            			"blueprint": "function"
                            		}
                            	@end-meta-configuration
                            */

			var entity = Meta.deserialize(data, parser, this);

			if (entity.isCorrupted()) {
				return entity.revert();
			}

			return entity;
		} }, { key: "isCompatible", value: function isCompatible(

		tag) {
			/*;
        	@meta-configuration:
        		{
        			"tag": "string"
        		}
        	@end-meta-configuration
        */

			if (typeof tag != "string") {
				return false;
			}

			return SERIALIZE_FUNCTION_TAG_PATTERN.test(tag);
		} }]);

	function Procedure(entity) {(0, _classCallCheck3.default)(this, Procedure);return (0, _possibleConstructorReturn3.default)(this, (Procedure.__proto__ || (0, _getPrototypeOf2.default)(Procedure)).call(this,
		entity, "Function"));
	}(0, _createClass3.default)(Procedure, [{ key: "check", value: function check(

		entity) {
			return (
				(typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity)) == FUNCTION_TYPE ||
				entity instanceof Function);

		} }, { key: "serialize", value: function serialize(













		parser) {
			/*;
           	@meta-configuration:
           		{
           			"parser": "function"
           		}
           	@end-meta-configuration
           */

			return Meta.create(this.valueOf()).serialize();
		} }, { key: "isEqual", value: function isEqual(

		procedure) {
			if (
			procedure instanceof Function ||
			(typeof procedure === "undefined" ? "undefined" : (0, _typeof3.default)(procedure)) == FUNCTION_TYPE)
			{
				return this.toString() == procedure.toString();
			}

			return false;
		} }, { key: Meta.BOOLEAN, get: function get() {return true;} }, { key: Meta.STRING, get: function get() {return this.valueOf().toString();} }, { key: Meta.NUMBER, get: function get() {return NaN;} }]);return Procedure;}(Meta);


module.exports = Procedure;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2NlZHVyZS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbIk1ldGEiLCJyZXF1aXJlIiwiRlVOQ1RJT05fTkFNRSIsIkZVTkNUSU9OX1RZUEUiLCJTRVJJQUxJWkVfRlVOQ1RJT05fVEFHX1BBVFRFUk4iLCJQcm9jZWR1cmUiLCJpbnN0YW5jZSIsIkZ1bmN0aW9uIiwibmFtZSIsImluc3RhbmNlT2YiLCJkYXRhIiwicGFyc2VyIiwiYmx1ZXByaW50IiwiZW50aXR5IiwiZGVzZXJpYWxpemUiLCJpc0NvcnJ1cHRlZCIsInJldmVydCIsInRhZyIsInRlc3QiLCJjcmVhdGUiLCJ2YWx1ZU9mIiwic2VyaWFsaXplIiwicHJvY2VkdXJlIiwidG9TdHJpbmciLCJCT09MRUFOIiwiU1RSSU5HIiwiTlVNQkVSIiwiTmFOIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBTUEsT0FBT0MsUUFBUyxLQUFULEdBQWI7O0FBRUEsSUFBTUMsZ0JBQWdCLFVBQXRCO0FBQ0EsSUFBTUMsZ0JBQWdCLFVBQXRCOztBQUVBLElBQU1DLGlDQUFpQyxxQ0FBdkMsQzs7QUFFTUMsUztBQUMwQkMsVSxFQUFVO0FBQ3hDO0FBQ0MsV0FBT0EsUUFBUCxJQUFtQixVQUFuQjtBQUNHQSx3QkFBb0JDLFFBRHZCO0FBRUcsV0FBT0QsUUFBUCxJQUFtQixVQUFuQixJQUFpQ0EsU0FBU0UsSUFBVCxLQUFrQk4sYUFGdEQ7QUFHR0YsU0FBS1MsVUFBTCxDQUFpQkgsUUFBakIsRUFBMkIsSUFBM0IsQ0FKSjs7QUFNQSxHOztBQUVtQkksTSxFQUFNQyxNLEVBQVFDLFMsRUFBVztBQUM1Qzs7Ozs7Ozs7OztBQVVBLE9BQUlDLFNBQVNiLEtBQUtjLFdBQUwsQ0FBa0JKLElBQWxCLEVBQXdCQyxNQUF4QixFQUFnQyxJQUFoQyxDQUFiOztBQUVBLE9BQUlFLE9BQU9FLFdBQVAsRUFBSixFQUEyQjtBQUMxQixXQUFPRixPQUFPRyxNQUFQLEVBQVA7QUFDQTs7QUFFRCxVQUFPSCxNQUFQO0FBQ0EsRzs7QUFFb0JJLEssRUFBSztBQUN6Qjs7Ozs7Ozs7QUFRQSxPQUFJLE9BQU9BLEdBQVAsSUFBYyxRQUFsQixFQUE0QjtBQUMzQixXQUFPLEtBQVA7QUFDQTs7QUFFRCxVQUFPYiwrQkFBK0JjLElBQS9CLENBQXFDRCxHQUFyQyxDQUFQO0FBQ0EsRzs7QUFFRCxvQkFBYUosTUFBYixFQUFxQjtBQUNiQSxRQURhLEVBQ0wsVUFESztBQUVwQixFOztBQUVNQSxRLEVBQVE7QUFDZDtBQUNDLFlBQU9BLE1BQVAsdURBQU9BLE1BQVAsTUFBaUJWLGFBQWpCO0FBQ0dVLHNCQUFrQk4sUUFGdEI7O0FBSUEsRzs7Ozs7Ozs7Ozs7Ozs7QUFjVUksUSxFQUFRO0FBQ2xCOzs7Ozs7OztBQVFBLFVBQU9YLEtBQUttQixNQUFMLENBQWEsS0FBS0MsT0FBTCxFQUFiLEVBQStCQyxTQUEvQixFQUFQO0FBQ0EsRzs7QUFFUUMsVyxFQUFXO0FBQ25CO0FBQ0NBLHdCQUFxQmYsUUFBckI7QUFDRyxXQUFPZSxTQUFQLHVEQUFPQSxTQUFQLE1BQW9CbkIsYUFGeEI7QUFHQztBQUNBLFdBQU8sS0FBS29CLFFBQUwsTUFBb0JELFVBQVVDLFFBQVYsRUFBM0I7QUFDQTs7QUFFRCxVQUFPLEtBQVA7QUFDQSxHLFdBakNLdkIsS0FBS3dCLE8sc0JBQVksQ0FDdEIsT0FBTyxJQUFQLENBQ0EsQyxXQUVLeEIsS0FBS3lCLE0sc0JBQVcsQ0FDckIsT0FBTyxLQUFLTCxPQUFMLEdBQWdCRyxRQUFoQixFQUFQLENBQ0EsQyxXQUVLdkIsS0FBSzBCLE0sc0JBQVcsQ0FDckIsT0FBT0MsR0FBUCxDQUNBLEMsd0JBbkVzQjNCLEk7OztBQTZGeEI0QixPQUFPQyxPQUFQLEdBQWlCeEIsU0FBakIiLCJmaWxlIjoicHJvY2VkdXJlLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBzdWJtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXN1Ym1vZHVsZS1saWNlbnNlXG5cblx0QHN1Ym1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImZub1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZm5vL3Byb2NlZHVyZS5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInByb2NlZHVyZS5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiZm5vXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9mbm8uZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJmbm8tdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogZmFsc2UsXG5cdFx0XHRcImludGVybmFsXCI6IHRydWUsXG5cdFx0XHRcImNsYXNzXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtc3VibW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAc3VibW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0UHJvY2VkdXJlIGNsYXNzIHdyYXBwZXIuXG5cdEBlbmQtc3VibW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImVobVwiOiBcImVobVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IE1ldGEgPSByZXF1aXJlKCBcImVobVwiICkoICk7XG5cbmNvbnN0IEZVTkNUSU9OX05BTUUgPSBcIkZ1bmN0aW9uXCI7XG5jb25zdCBGVU5DVElPTl9UWVBFID0gXCJmdW5jdGlvblwiO1xuXG5jb25zdCBTRVJJQUxJWkVfRlVOQ1RJT05fVEFHX1BBVFRFUk4gPSAvXlxcW2Z1bmN0aW9uIEZ1bmN0aW9uKD86XFw6KC4rPykpP1xcXSQvO1xuXG5jbGFzcyBQcm9jZWR1cmUgZXh0ZW5kcyBNZXRhIHtcblx0c3RhdGljIFsgU3ltYm9sLmhhc0luc3RhbmNlIF0oIGluc3RhbmNlICl7XG5cdFx0cmV0dXJuIChcblx0XHRcdHR5cGVvZiBpbnN0YW5jZSA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdHx8IGluc3RhbmNlIGluc3RhbmNlb2YgRnVuY3Rpb25cblx0XHRcdHx8IHR5cGVvZiBpbnN0YW5jZSA9PSBcImZ1bmN0aW9uXCIgJiYgaW5zdGFuY2UubmFtZSA9PT0gRlVOQ1RJT05fTkFNRVxuXHRcdFx0fHwgTWV0YS5pbnN0YW5jZU9mKCBpbnN0YW5jZSwgdGhpcyApXG5cdFx0KTtcblx0fVxuXG5cdHN0YXRpYyBkZXNlcmlhbGl6ZSggZGF0YSwgcGFyc2VyLCBibHVlcHJpbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImRhdGFcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwiYmx1ZXByaW50XCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRsZXQgZW50aXR5ID0gTWV0YS5kZXNlcmlhbGl6ZSggZGF0YSwgcGFyc2VyLCB0aGlzICk7XG5cblx0XHRpZiggZW50aXR5LmlzQ29ycnVwdGVkKCApICl7XG5cdFx0XHRyZXR1cm4gZW50aXR5LnJldmVydCggKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZW50aXR5O1xuXHR9XG5cblx0c3RhdGljIGlzQ29tcGF0aWJsZSggdGFnICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0YWdcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggdHlwZW9mIHRhZyAhPSBcInN0cmluZ1wiICl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFNFUklBTElaRV9GVU5DVElPTl9UQUdfUEFUVEVSTi50ZXN0KCB0YWcgKTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCBlbnRpdHkgKXtcblx0XHRzdXBlciggZW50aXR5LCBcIkZ1bmN0aW9uXCIgKTtcblx0fVxuXG5cdGNoZWNrKCBlbnRpdHkgKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dHlwZW9mIGVudGl0eSA9PSBGVU5DVElPTl9UWVBFXG5cdFx0XHR8fCBlbnRpdHkgaW5zdGFuY2VvZiBGdW5jdGlvblxuXHRcdCk7XG5cdH1cblxuXHRnZXQgWyBNZXRhLkJPT0xFQU4gXSggKXtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGdldCBbIE1ldGEuU1RSSU5HIF0oICl7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVPZiggKS50b1N0cmluZyggKTtcblx0fVxuXG5cdGdldCBbIE1ldGEuTlVNQkVSIF0oICl7XG5cdFx0cmV0dXJuIE5hTjtcblx0fVxuXG5cdHNlcmlhbGl6ZSggcGFyc2VyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHJldHVybiBNZXRhLmNyZWF0ZSggdGhpcy52YWx1ZU9mKCApICkuc2VyaWFsaXplKCApO1xuXHR9XG5cblx0aXNFcXVhbCggcHJvY2VkdXJlICl7XG5cdFx0aWYoXG5cdFx0XHRwcm9jZWR1cmUgaW5zdGFuY2VvZiBGdW5jdGlvblxuXHRcdFx0fHwgdHlwZW9mIHByb2NlZHVyZSA9PSBGVU5DVElPTl9UWVBFXG5cdFx0KXtcblx0XHRcdHJldHVybiB0aGlzLnRvU3RyaW5nKCApID09IHByb2NlZHVyZS50b1N0cmluZyggKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9jZWR1cmU7XG4iXX0=
//# sourceMappingURL=procedure.support.js.map
