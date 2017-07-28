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
              		Function class wrapper.
              	@end-submodule-documentation
              
              	@include:
              		{
              			"ehm": "ehm"
              		}
              	@end-include
              */var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _hasInstance = require("babel-runtime/core-js/symbol/has-instance");var _hasInstance2 = _interopRequireDefault(_hasInstance);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Meta = require("ehm")();

var EMPTY_STRING = "";
var PROCEDURE = procedure;
var SERIALIZE_PROCEDURE_TAG = "[object Procedure:procedure]";
var META_SERIALIZE_PROCEDURE_TAG = Meta.create(PROCEDURE).serialize();var

Procedure = function (_Meta) {(0, _inherits3.default)(Procedure, _Meta);(0, _createClass3.default)(Procedure, null, [{ key: _hasInstance2.default, value: function value(
		instance) {
			return (
				instance === PROCEDURE ||
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

			return Meta.create(this, PROCEDURE);
		} }]);

	function Procedure() {(0, _classCallCheck3.default)(this, Procedure);return (0, _possibleConstructorReturn3.default)(this, (Procedure.__proto__ || (0, _getPrototypeOf2.default)(Procedure)).call(this,
		PROCEDURE, "Procedure"));
	}(0, _createClass3.default)(Procedure, [{ key: "serialize", value: function serialize(

















		parser) {
			/*;
           	@meta-configuration:
           		{
           			"parser": "function"
           		}
           	@end-meta-configuration
           */

			return SERIALIZE_procedure_TAG;
		} }, { key: "isCompatible", value: function isCompatible(

		tag) {
			return (
				tag === SERIALIZE_PROCEDURE_TAG ||
				tag === META_SERIALIZE_PROCEDURE_TAG);

		} }, { key: Meta.OBJECT, get: function get() {return EMPTY_STRING;} }, { key: Meta.BOOLEAN, get: function get() {return false;} }, { key: Meta.STRING, get: function get() {return EMPTY_STRING;} }, { key: Meta.NUMBER, get: function get() {return 0;} }]);return Procedure;}(Meta);


module.exports = procedure;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2NlZHVyZS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbIk1ldGEiLCJyZXF1aXJlIiwiRU1QVFlfU1RSSU5HIiwiUFJPQ0VEVVJFIiwicHJvY2VkdXJlIiwiU0VSSUFMSVpFX1BST0NFRFVSRV9UQUciLCJNRVRBX1NFUklBTElaRV9QUk9DRURVUkVfVEFHIiwiY3JlYXRlIiwic2VyaWFsaXplIiwiUHJvY2VkdXJlIiwiaW5zdGFuY2UiLCJpbnN0YW5jZU9mIiwiZGF0YSIsInBhcnNlciIsImJsdWVwcmludCIsIlNFUklBTElaRV9wcm9jZWR1cmVfVEFHIiwidGFnIiwiT0JKRUNUIiwiQk9PTEVBTiIsIlNUUklORyIsIk5VTUJFUiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMERBLElBQU1BLE9BQU9DLFFBQVMsS0FBVCxHQUFiOztBQUVBLElBQU1DLGVBQWUsRUFBckI7QUFDQSxJQUFNQyxZQUFZQyxTQUFsQjtBQUNBLElBQU1DLDBCQUEwQiw4QkFBaEM7QUFDQSxJQUFNQywrQkFBK0JOLEtBQUtPLE1BQUwsQ0FBYUosU0FBYixFQUF5QkssU0FBekIsRUFBckMsQzs7QUFFTUMsUztBQUMwQkMsVSxFQUFVO0FBQ3hDO0FBQ0NBLGlCQUFhUCxTQUFiO0FBQ0FILFNBQUtXLFVBQUwsQ0FBaUJELFFBQWpCLEVBQTJCLElBQTNCLENBRkQ7O0FBSUEsRzs7QUFFbUJFLE0sRUFBTUMsTSxFQUFRQyxTLEVBQVc7QUFDNUM7Ozs7Ozs7Ozs7QUFVQSxVQUFPZCxLQUFLTyxNQUFMLENBQWEsSUFBYixFQUFtQkosU0FBbkIsQ0FBUDtBQUNBLEc7O0FBRUQsc0JBQWM7QUFDTkEsV0FETSxFQUNLLFdBREw7QUFFYixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQlVVLFEsRUFBUTtBQUNsQjs7Ozs7Ozs7QUFRQSxVQUFPRSx1QkFBUDtBQUNBLEc7O0FBRWFDLEssRUFBSztBQUNsQjtBQUNDQSxZQUFRWCx1QkFBUjtBQUNHVyxZQUFRViw0QkFGWjs7QUFJQSxHLFdBakNLTixLQUFLaUIsTSxzQkFBVyxDQUNyQixPQUFPZixZQUFQLENBQ0EsQyxXQUVLRixLQUFLa0IsTyxzQkFBWSxDQUN0QixPQUFPLEtBQVAsQ0FDQSxDLFdBRUtsQixLQUFLbUIsTSxzQkFBVyxDQUNyQixPQUFPakIsWUFBUCxDQUNBLEMsV0FFS0YsS0FBS29CLE0sc0JBQVcsQ0FDckIsT0FBTyxDQUFQLENBQ0EsQyx3QkF4Q3NCcEIsSTs7O0FBOER4QnFCLE9BQU9DLE9BQVAsR0FBaUJsQixTQUFqQiIsImZpbGUiOiJwcm9jZWR1cmUuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHN1Ym1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtc3VibW9kdWxlLWxpY2Vuc2VcblxuXHRAc3VibW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZm5vXCIsXG5cdFx0XHRcInBhdGhcIjogXCJmbm8vcHJvY2VkdXJlLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwicHJvY2VkdXJlLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJmbm9cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2Zuby5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImZuby10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiBmYWxzZSxcblx0XHRcdFwiaW50ZXJuYWxcIjogdHJ1ZSxcblx0XHRcdFwiY2xhc3NcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1zdWJtb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBzdWJtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRGdW5jdGlvbiBjbGFzcyB3cmFwcGVyLlxuXHRAZW5kLXN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJlaG1cIjogXCJlaG1cIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBNZXRhID0gcmVxdWlyZSggXCJlaG1cIiApKCApO1xuXG5jb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuY29uc3QgUFJPQ0VEVVJFID0gcHJvY2VkdXJlO1xuY29uc3QgU0VSSUFMSVpFX1BST0NFRFVSRV9UQUcgPSBcIltvYmplY3QgUHJvY2VkdXJlOnByb2NlZHVyZV1cIjtcbmNvbnN0IE1FVEFfU0VSSUFMSVpFX1BST0NFRFVSRV9UQUcgPSBNZXRhLmNyZWF0ZSggUFJPQ0VEVVJFICkuc2VyaWFsaXplKCApO1xuXG5jbGFzcyBQcm9jZWR1cmUgZXh0ZW5kcyBNZXRhIHtcblx0c3RhdGljIFsgU3ltYm9sLmhhc0luc3RhbmNlIF0oIGluc3RhbmNlICl7XG5cdFx0cmV0dXJuIChcblx0XHRcdGluc3RhbmNlID09PSBQUk9DRURVUkUgfHxcblx0XHRcdE1ldGEuaW5zdGFuY2VPZiggaW5zdGFuY2UsIHRoaXMgKVxuXHRcdCk7XG5cdH1cblxuXHRzdGF0aWMgZGVzZXJpYWxpemUoIGRhdGEsIHBhcnNlciwgYmx1ZXByaW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJkYXRhXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwicGFyc2VyXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcImJsdWVwcmludFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCB0aGlzLCBQUk9DRURVUkUgKTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCApe1xuXHRcdHN1cGVyKCBQUk9DRURVUkUsIFwiUHJvY2VkdXJlXCIgKTtcblx0fVxuXG5cdGdldCBbIE1ldGEuT0JKRUNUIF0oICl7XG5cdFx0cmV0dXJuIEVNUFRZX1NUUklORztcblx0fVxuXG5cdGdldCBbIE1ldGEuQk9PTEVBTiBdKCApe1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGdldCBbIE1ldGEuU1RSSU5HIF0oICl7XG5cdFx0cmV0dXJuIEVNUFRZX1NUUklORztcblx0fVxuXG5cdGdldCBbIE1ldGEuTlVNQkVSIF0oICl7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRzZXJpYWxpemUoIHBhcnNlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwicGFyc2VyXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRyZXR1cm4gU0VSSUFMSVpFX3Byb2NlZHVyZV9UQUc7XG5cdH1cblxuXHRpc0NvbXBhdGlibGUoIHRhZyApe1xuXHRcdHJldHVybiAoXG5cdFx0XHR0YWcgPT09IFNFUklBTElaRV9QUk9DRURVUkVfVEFHXG5cdFx0XHR8fCB0YWcgPT09IE1FVEFfU0VSSUFMSVpFX1BST0NFRFVSRV9UQUdcblx0XHQpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJvY2VkdXJlO1xuIl19
//# sourceMappingURL=procedure.support.js.map
