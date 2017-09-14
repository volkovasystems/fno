"use strict";

/*;
              	@test-license:
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "fno",
              			"path": "fno/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/fno.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should/as-function",
              			"fno": "fno"
              		}
              	@end-include
              */var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should/as-function");



//: @client:
var fno = require("./fno.support.js");
//: @end-client







//: @client:

describe("fno", function () {

	describe("`fno( function hello( ){ } )`", function () {
		it("should return Procedure instance", function () {
			var method = function hello() {};

			var data = fno(method);

			assert.equal(typeof data === "undefined" ? "undefined" : (0, _typeof3.default)(data), "object");

			assert.equal(data.constructor.name, "Procedure");

			assert.equal(data.valueOf(), method);
		});
	});

	describe("`fno( function hello( ){ } ).toString( )`", function () {
		it("should return string type", function () {
			assert.equal((0, _typeof3.default)(fno(function hello() {}).toString()), "string");
		});
	});

	describe("`fno( function hello( ){ } ).toNumber( )`", function () {
		it("should return NaN", function () {
			assert.equal(fno(function hello() {}).toNumber().toString(), "NaN");
		});
	});

	describe("`fno( function hello( ){ } ).toBoolean( )`", function () {
		it("should return boolean type", function () {
			assert.equal((0, _typeof3.default)(fno(function hello() {}).toBoolean()), "boolean");
		});
	});

	describe("`fno( function hello( ){ } ).toObject( )`", function () {
		it("should return object type", function () {
			var descriptor = fno(function hello() {}).toObject();

			assert.equal(typeof descriptor === "undefined" ? "undefined" : (0, _typeof3.default)(descriptor), "object");

			assert.equal("type" in descriptor, true);

			assert.equal("name" in descriptor, true);

			assert.equal("value" in descriptor, true);

			assert.equal("format" in descriptor, true);

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZm5vIiwiZGVzY3JpYmUiLCJpdCIsIm1ldGhvZCIsImhlbGxvIiwiZGF0YSIsImVxdWFsIiwiY29uc3RydWN0b3IiLCJuYW1lIiwidmFsdWVPZiIsInRvU3RyaW5nIiwidG9OdW1iZXIiLCJ0b0Jvb2xlYW4iLCJkZXNjcmlwdG9yIiwidG9PYmplY3QiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREEsSUFBTUEsU0FBU0MsUUFBUyxvQkFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxNQUFNRCxRQUFTLGtCQUFULENBQVo7QUFDQTs7Ozs7Ozs7QUFRQTs7QUFFQUUsU0FBVSxLQUFWLEVBQWlCLFlBQU87O0FBRXZCQSxVQUFVLCtCQUFWLEVBQTJDLFlBQU87QUFDakRDLEtBQUksa0NBQUosRUFBd0MsWUFBTztBQUM5QyxPQUFJQyxTQUFTLFNBQVNDLEtBQVQsR0FBaUIsQ0FBRyxDQUFqQzs7QUFFQSxPQUFJQyxPQUFPTCxJQUFLRyxNQUFMLENBQVg7O0FBRUFMLFVBQU9RLEtBQVAsUUFBcUJELElBQXJCLHVEQUFxQkEsSUFBckIsR0FBMkIsUUFBM0I7O0FBRUFQLFVBQU9RLEtBQVAsQ0FBY0QsS0FBS0UsV0FBTCxDQUFpQkMsSUFBL0IsRUFBcUMsV0FBckM7O0FBRUFWLFVBQU9RLEtBQVAsQ0FBY0QsS0FBS0ksT0FBTCxFQUFkLEVBQStCTixNQUEvQjtBQUNBLEdBVkQ7QUFXQSxFQVpEOztBQWNBRixVQUFVLDJDQUFWLEVBQXVELFlBQU87QUFDN0RDLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2Q0osVUFBT1EsS0FBUCx1QkFBcUJOLElBQUssU0FBU0ksS0FBVCxHQUFpQixDQUFHLENBQXpCLEVBQTRCTSxRQUE1QixFQUFyQixHQUE4RCxRQUE5RDtBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BVCxVQUFVLDJDQUFWLEVBQXVELFlBQU87QUFDN0RDLEtBQUksbUJBQUosRUFBeUIsWUFBTztBQUMvQkosVUFBT1EsS0FBUCxDQUFjTixJQUFLLFNBQVNJLEtBQVQsR0FBaUIsQ0FBRyxDQUF6QixFQUE0Qk8sUUFBNUIsR0FBd0NELFFBQXhDLEVBQWQsRUFBbUUsS0FBbkU7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQVQsVUFBVSw0Q0FBVixFQUF3RCxZQUFPO0FBQzlEQyxLQUFJLDRCQUFKLEVBQWtDLFlBQU87QUFDeENKLFVBQU9RLEtBQVAsdUJBQXFCTixJQUFLLFNBQVNJLEtBQVQsR0FBaUIsQ0FBRyxDQUF6QixFQUE0QlEsU0FBNUIsRUFBckIsR0FBK0QsU0FBL0Q7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQVgsVUFBVSwyQ0FBVixFQUF1RCxZQUFPO0FBQzdEQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkMsT0FBSVcsYUFBYWIsSUFBSyxTQUFTSSxLQUFULEdBQWlCLENBQUcsQ0FBekIsRUFBNEJVLFFBQTVCLEVBQWpCOztBQUVBaEIsVUFBT1EsS0FBUCxRQUFxQk8sVUFBckIsdURBQXFCQSxVQUFyQixHQUFpQyxRQUFqQzs7QUFFQWYsVUFBT1EsS0FBUCxDQUFjLFVBQVVPLFVBQXhCLEVBQW9DLElBQXBDOztBQUVBZixVQUFPUSxLQUFQLENBQWMsVUFBVU8sVUFBeEIsRUFBb0MsSUFBcEM7O0FBRUFmLFVBQU9RLEtBQVAsQ0FBYyxXQUFXTyxVQUF6QixFQUFxQyxJQUFyQzs7QUFFQWYsVUFBT1EsS0FBUCxDQUFjLFlBQVlPLFVBQTFCLEVBQXNDLElBQXRDOztBQUVBLEdBYkQ7QUFjQSxFQWZEOztBQWlCQSxDQW5ERDs7QUFxREEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJmbm9cIixcblx0XHRcdFwicGF0aFwiOiBcImZuby90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZm5vLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZC9hcy1mdW5jdGlvblwiLFxuXHRcdFx0XCJmbm9cIjogXCJmbm9cIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZC9hcy1mdW5jdGlvblwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IGZubyA9IHJlcXVpcmUoIFwiLi9mbm8uc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5cbmRlc2NyaWJlKCBcImZub1wiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImBmbm8oIGZ1bmN0aW9uIGhlbGxvKCApeyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBQcm9jZWR1cmUgaW5zdGFuY2VcIiwgKCApID0+IHtcblx0XHRcdGxldCBtZXRob2QgPSBmdW5jdGlvbiBoZWxsbyggKXsgfTtcblxuXHRcdFx0bGV0IGRhdGEgPSBmbm8oIG1ldGhvZCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBkYXRhLCBcIm9iamVjdFwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGF0YS5jb25zdHJ1Y3Rvci5uYW1lLCBcIlByb2NlZHVyZVwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGF0YS52YWx1ZU9mKCApLCBtZXRob2QgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZm5vKCBmdW5jdGlvbiBoZWxsbyggKXsgfSApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIGZubyggZnVuY3Rpb24gaGVsbG8oICl7IH0gKS50b1N0cmluZyggKSwgXCJzdHJpbmdcIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBmbm8oIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICkudG9OdW1iZXIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBOYU5cIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggZm5vKCBmdW5jdGlvbiBoZWxsbyggKXsgfSApLnRvTnVtYmVyKCApLnRvU3RyaW5nKCApLCBcIk5hTlwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGZubyggZnVuY3Rpb24gaGVsbG8oICl7IH0gKS50b0Jvb2xlYW4oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBib29sZWFuIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIGZubyggZnVuY3Rpb24gaGVsbG8oICl7IH0gKS50b0Jvb2xlYW4oICksIFwiYm9vbGVhblwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGZubyggZnVuY3Rpb24gaGVsbG8oICl7IH0gKS50b09iamVjdCggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgZGVzY3JpcHRvciA9IGZubyggZnVuY3Rpb24gaGVsbG8oICl7IH0gKS50b09iamVjdCggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGVzY3JpcHRvciwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidHlwZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcIm5hbWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuIl19
//# sourceMappingURL=test.support.js.map
