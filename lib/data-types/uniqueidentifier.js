"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _guidParser = require("../guid-parser");

const NULL_LENGTH = Buffer.from([0x00]);
const DATA_LENGTH = Buffer.from([0x10]);
const UniqueIdentifier = {
  id: 0x24,
  type: 'GUIDN',
  name: 'UniqueIdentifier',
  declaration: function () {
    return 'uniqueidentifier';
  },
  resolveLength: function () {
    return 16;
  },

  generateTypeInfo() {
    return Buffer.from([this.id, 0x10]);
  },

  generateParameterLength(parameter, options) {
    if (parameter.value == null) {
      return NULL_LENGTH;
    }

    return DATA_LENGTH;
  },

  generateParameterData: function* (parameter, options) {
    if (parameter.value == null) {
      return;
    }

    yield Buffer.from((0, _guidParser.guidToArray)(parameter.value));
  },
  validate: function (value) {
    if (value == null) {
      return null;
    }

    if (typeof value !== 'string') {
      throw new TypeError('Invalid string.');
    }

    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value)) {
      throw new TypeError('Invalid GUID.');
    }

    return value;
  }
};
var _default = UniqueIdentifier;
exports.default = _default;
module.exports = UniqueIdentifier;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJOVUxMX0xFTkdUSCIsIkJ1ZmZlciIsImZyb20iLCJEQVRBX0xFTkdUSCIsIlVuaXF1ZUlkZW50aWZpZXIiLCJpZCIsInR5cGUiLCJuYW1lIiwiZGVjbGFyYXRpb24iLCJyZXNvbHZlTGVuZ3RoIiwiZ2VuZXJhdGVUeXBlSW5mbyIsImdlbmVyYXRlUGFyYW1ldGVyTGVuZ3RoIiwicGFyYW1ldGVyIiwib3B0aW9ucyIsInZhbHVlIiwiZ2VuZXJhdGVQYXJhbWV0ZXJEYXRhIiwidmFsaWRhdGUiLCJUeXBlRXJyb3IiLCJ0ZXN0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhLXR5cGVzL3VuaXF1ZWlkZW50aWZpZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgZ3VpZFRvQXJyYXkgfSBmcm9tICcuLi9ndWlkLXBhcnNlcic7XG5cbmNvbnN0IE5VTExfTEVOR1RIID0gQnVmZmVyLmZyb20oWzB4MDBdKTtcbmNvbnN0IERBVEFfTEVOR1RIID0gQnVmZmVyLmZyb20oWzB4MTBdKTtcblxuY29uc3QgVW5pcXVlSWRlbnRpZmllcjogRGF0YVR5cGUgPSB7XG4gIGlkOiAweDI0LFxuICB0eXBlOiAnR1VJRE4nLFxuICBuYW1lOiAnVW5pcXVlSWRlbnRpZmllcicsXG5cbiAgZGVjbGFyYXRpb246IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAndW5pcXVlaWRlbnRpZmllcic7XG4gIH0sXG5cbiAgcmVzb2x2ZUxlbmd0aDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIDE2O1xuICB9LFxuXG4gIGdlbmVyYXRlVHlwZUluZm8oKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKFt0aGlzLmlkLCAweDEwXSk7XG4gIH0sXG5cbiAgZ2VuZXJhdGVQYXJhbWV0ZXJMZW5ndGgocGFyYW1ldGVyLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhcmFtZXRlci52YWx1ZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gTlVMTF9MRU5HVEg7XG4gICAgfVxuXG4gICAgcmV0dXJuIERBVEFfTEVOR1RIO1xuICB9LFxuXG4gIGdlbmVyYXRlUGFyYW1ldGVyRGF0YTogZnVuY3Rpb24qKHBhcmFtZXRlciwgb3B0aW9ucykge1xuICAgIGlmIChwYXJhbWV0ZXIudmFsdWUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHlpZWxkIEJ1ZmZlci5mcm9tKGd1aWRUb0FycmF5KHBhcmFtZXRlci52YWx1ZSkpO1xuICB9LFxuXG4gIHZhbGlkYXRlOiBmdW5jdGlvbih2YWx1ZSk6IHN0cmluZyB8IG51bGwge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBzdHJpbmcuJyk7XG4gICAgfVxuXG4gICAgaWYgKCEvXlswLTlhLWZdezh9LVswLTlhLWZdezR9LVswLTlhLWZdezR9LVswLTlhLWZdezR9LVswLTlhLWZdezEyfSQvaS50ZXN0KHZhbHVlKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBHVUlELicpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVW5pcXVlSWRlbnRpZmllcjtcbm1vZHVsZS5leHBvcnRzID0gVW5pcXVlSWRlbnRpZmllcjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUVBLE1BQU1BLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVksQ0FBQyxJQUFELENBQVosQ0FBcEI7QUFDQSxNQUFNQyxXQUFXLEdBQUdGLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLENBQUMsSUFBRCxDQUFaLENBQXBCO0FBRUEsTUFBTUUsZ0JBQTBCLEdBQUc7RUFDakNDLEVBQUUsRUFBRSxJQUQ2QjtFQUVqQ0MsSUFBSSxFQUFFLE9BRjJCO0VBR2pDQyxJQUFJLEVBQUUsa0JBSDJCO0VBS2pDQyxXQUFXLEVBQUUsWUFBVztJQUN0QixPQUFPLGtCQUFQO0VBQ0QsQ0FQZ0M7RUFTakNDLGFBQWEsRUFBRSxZQUFXO0lBQ3hCLE9BQU8sRUFBUDtFQUNELENBWGdDOztFQWFqQ0MsZ0JBQWdCLEdBQUc7SUFDakIsT0FBT1QsTUFBTSxDQUFDQyxJQUFQLENBQVksQ0FBQyxLQUFLRyxFQUFOLEVBQVUsSUFBVixDQUFaLENBQVA7RUFDRCxDQWZnQzs7RUFpQmpDTSx1QkFBdUIsQ0FBQ0MsU0FBRCxFQUFZQyxPQUFaLEVBQXFCO0lBQzFDLElBQUlELFNBQVMsQ0FBQ0UsS0FBVixJQUFtQixJQUF2QixFQUE2QjtNQUMzQixPQUFPZCxXQUFQO0lBQ0Q7O0lBRUQsT0FBT0csV0FBUDtFQUNELENBdkJnQzs7RUF5QmpDWSxxQkFBcUIsRUFBRSxXQUFVSCxTQUFWLEVBQXFCQyxPQUFyQixFQUE4QjtJQUNuRCxJQUFJRCxTQUFTLENBQUNFLEtBQVYsSUFBbUIsSUFBdkIsRUFBNkI7TUFDM0I7SUFDRDs7SUFFRCxNQUFNYixNQUFNLENBQUNDLElBQVAsQ0FBWSw2QkFBWVUsU0FBUyxDQUFDRSxLQUF0QixDQUFaLENBQU47RUFDRCxDQS9CZ0M7RUFpQ2pDRSxRQUFRLEVBQUUsVUFBU0YsS0FBVCxFQUErQjtJQUN2QyxJQUFJQSxLQUFLLElBQUksSUFBYixFQUFtQjtNQUNqQixPQUFPLElBQVA7SUFDRDs7SUFFRCxJQUFJLE9BQU9BLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7TUFDN0IsTUFBTSxJQUFJRyxTQUFKLENBQWMsaUJBQWQsQ0FBTjtJQUNEOztJQUVELElBQUksQ0FBQyxrRUFBa0VDLElBQWxFLENBQXVFSixLQUF2RSxDQUFMLEVBQW9GO01BQ2xGLE1BQU0sSUFBSUcsU0FBSixDQUFjLGVBQWQsQ0FBTjtJQUNEOztJQUVELE9BQU9ILEtBQVA7RUFDRDtBQS9DZ0MsQ0FBbkM7ZUFrRGVWLGdCOztBQUNmZSxNQUFNLENBQUNDLE9BQVAsR0FBaUJoQixnQkFBakIifQ==