System.register([],(function(t){return{execute:function(){t(function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1001)}({10:function(t,e,n){"use strict";function i(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}n.d(e,"a",(function(){return i}))},1001:function(t,e,n){"use strict";function i(t,e){if(void 0!==t.one&&1===e)return t.one;var n=e%10,i=e%100;return 1===n&&11!==i?t.singularNominative.replace("{{count}}",e):n>=2&&n<=4&&(i<10||i>20)?t.singularGenitive.replace("{{count}}",e):t.pluralGenitive.replace("{{count}}",e)}function a(t){return function(e,n){return n.addSuffix?n.comparison>0?t.future?i(t.future,e):"за "+i(t.regular,e):t.past?i(t.past,e):i(t.regular,e)+" тому":i(t.regular,e)}}n.r(e);var r={lessThanXSeconds:a({regular:{one:"менше секунди",singularNominative:"менше {{count}} секунди",singularGenitive:"менше {{count}} секунд",pluralGenitive:"менше {{count}} секунд"},future:{one:"менше, ніж за секунду",singularNominative:"менше, ніж за {{count}} секунду",singularGenitive:"менше, ніж за {{count}} секунди",pluralGenitive:"менше, ніж за {{count}} секунд"}}),xSeconds:a({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунди",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду тому",singularGenitive:"{{count}} секунди тому",pluralGenitive:"{{count}} секунд тому"},future:{singularNominative:"за {{count}} секунду",singularGenitive:"за {{count}} секунди",pluralGenitive:"за {{count}} секунд"}}),halfAMinute:function(t,e){return e.addSuffix?e.comparison>0?"за півхвилини":"півхвилини тому":"півхвилини"},lessThanXMinutes:a({regular:{one:"менше хвилини",singularNominative:"менше {{count}} хвилини",singularGenitive:"менше {{count}} хвилин",pluralGenitive:"менше {{count}} хвилин"},future:{one:"менше, ніж за хвилину",singularNominative:"менше, ніж за {{count}} хвилину",singularGenitive:"менше, ніж за {{count}} хвилини",pluralGenitive:"менше, ніж за {{count}} хвилин"}}),xMinutes:a({regular:{singularNominative:"{{count}} хвилина",singularGenitive:"{{count}} хвилини",pluralGenitive:"{{count}} хвилин"},past:{singularNominative:"{{count}} хвилину тому",singularGenitive:"{{count}} хвилини тому",pluralGenitive:"{{count}} хвилин тому"},future:{singularNominative:"за {{count}} хвилину",singularGenitive:"за {{count}} хвилини",pluralGenitive:"за {{count}} хвилин"}}),aboutXHours:a({regular:{singularNominative:"близько {{count}} години",singularGenitive:"близько {{count}} годин",pluralGenitive:"близько {{count}} годин"},future:{singularNominative:"приблизно за {{count}} годину",singularGenitive:"приблизно за {{count}} години",pluralGenitive:"приблизно за {{count}} годин"}}),xHours:a({regular:{singularNominative:"{{count}} годину",singularGenitive:"{{count}} години",pluralGenitive:"{{count}} годин"}}),xDays:a({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} дня",pluralGenitive:"{{count}} днів"}}),aboutXWeeks:a({regular:{singularNominative:"близько {{count}} тижня",singularGenitive:"близько {{count}} тижнів",pluralGenitive:"близько {{count}} тижнів"},future:{singularNominative:"приблизно за {{count}} тиждень",singularGenitive:"приблизно за {{count}} тижні",pluralGenitive:"приблизно за {{count}} тижні"}}),xWeeks:a({regular:{singularNominative:"{{count}} тиждень",singularGenitive:"{{count}} тижня",pluralGenitive:"{{count}} тижні"}}),aboutXMonths:a({regular:{singularNominative:"близько {{count}} місяця",singularGenitive:"близько {{count}} місяців",pluralGenitive:"близько {{count}} місяців"},future:{singularNominative:"приблизно за {{count}} місяць",singularGenitive:"приблизно за {{count}} місяця",pluralGenitive:"приблизно за {{count}} місяців"}}),xMonths:a({regular:{singularNominative:"{{count}} місяць",singularGenitive:"{{count}} місяця",pluralGenitive:"{{count}} місяців"}}),aboutXYears:a({regular:{singularNominative:"близько {{count}} року",singularGenitive:"близько {{count}} років",pluralGenitive:"близько {{count}} років"},future:{singularNominative:"приблизно за {{count}} рік",singularGenitive:"приблизно за {{count}} роки",pluralGenitive:"приблизно за {{count}} років"}}),xYears:a({regular:{singularNominative:"{{count}} рік",singularGenitive:"{{count}} роки",pluralGenitive:"{{count}} років"}}),overXYears:a({regular:{singularNominative:"більше {{count}} року",singularGenitive:"більше {{count}} років",pluralGenitive:"більше {{count}} років"},future:{singularNominative:"більше, ніж за {{count}} рік",singularGenitive:"більше, ніж за {{count}} роки",pluralGenitive:"більше, ніж за {{count}} років"}}),almostXYears:a({regular:{singularNominative:"майже {{count}} рік",singularGenitive:"майже {{count}} роки",pluralGenitive:"майже {{count}} років"},future:{singularNominative:"майже за {{count}} рік",singularGenitive:"майже за {{count}} роки",pluralGenitive:"майже за {{count}} років"}})};var u=n(5),o={date:Object(u.a)({formats:{full:"EEEE, do MMMM y 'р.'",long:"do MMMM y 'р.'",medium:"d MMM y 'р.'",short:"dd.MM.y"},defaultWidth:"full"}),time:Object(u.a)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:Object(u.a)({formats:{full:"{{date}} 'о' {{time}}",long:"{{date}} 'о' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},l=n(26),c=["неділю","понеділок","вівторок","середу","четвер","п’ятницю","суботу"];function s(t){return"'у "+c[t]+" о' p"}var f={lastWeek:function(t,e,n){var i=t.getUTCDay();return Object(l.a)(t,e,n)?s(i):function(t){var e=c[t];switch(t){case 0:case 3:case 5:case 6:return"'у минулу "+e+" о' p";case 1:case 2:case 4:return"'у минулий "+e+" о' p"}}(i)},yesterday:"'вчора о' p",today:"'сьогодні о' p",tomorrow:"'завтра о' p",nextWeek:function(t,e,n){var i=t.getUTCDay();return Object(l.a)(t,e,n)?s(i):function(t){var e=c[t];switch(t){case 0:case 3:case 5:case 6:return"'у наступну "+e+" о' p";case 1:case 2:case 4:return"'у наступний "+e+" о' p"}}(i)},other:"P"};var d=n(3);var v={ordinalNumber:function(t,e){var n=String((e||{}).unit);return t+("date"===n?3===t||23===t?"-є":"-е":"minute"===n||"second"===n||"hour"===n?"-а":"-й")},era:Object(d.a)({values:{narrow:["до н.е.","н.е."],abbreviated:["до н. е.","н. е."],wide:["до нашої ери","нашої ери"]},defaultWidth:"wide"}),quarter:Object(d.a)({values:{narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:Object(d.a)({values:{narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"]},defaultWidth:"wide",formattingValues:{narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"]},defaultFormattingWidth:"wide"}),day:Object(d.a)({values:{narrow:["Н","П","В","С","Ч","П","С"],short:["нд","пн","вт","ср","чт","пт","сб"],abbreviated:["нед","пон","вів","сер","чтв","птн","суб"],wide:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"]},defaultWidth:"wide"}),dayPeriod:Object(d.a)({values:{narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранок",afternoon:"день",evening:"вечір",night:"ніч"}},defaultWidth:"any",formattingValues:{narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"}},defaultFormattingWidth:"wide"})},g=n(8),m=n(4),h={code:"uk",formatDistance:function(t,e,n){return n=n||{},r[t](e,n)},formatLong:o,formatRelative:function(t,e,n,i){var a=f[t];return"function"==typeof a?a(e,n,i):a},localize:v,match:{ordinalNumber:Object(g.a)({matchPattern:/^(\d+)(-?(е|й|є|а|я))?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:Object(m.a)({matchPatterns:{narrow:/^((до )?н\.?\s?е\.?)/i,abbreviated:/^((до )?н\.?\s?е\.?)/i,wide:/^(до нашої ери|нашої ери|наша ера)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^д/i,/^н/i]},defaultParseWidth:"any"}),quarter:Object(m.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?[иі]?й?)? кв.?/i,wide:/^[1234](-?[иі]?й?)? квартал/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Object(m.a)({matchPatterns:{narrow:/^[слбктчвжг]/i,abbreviated:/^(січ|лют|бер|берез|кві|трав?|чер|лип|сер|вер|жов|лис(топ)?|груд)\.?/i,wide:/^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопада?|грудень|грудня)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^с/i,/^л/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^л/i,/^с/i,/^в/i,/^ж/i,/^л/i,/^г/i],any:[/^сі/i,/^лю/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^лип/i,/^се/i,/^в/i,/^ж/i,/^лис/i,/^г/i]},defaultParseWidth:"any"}),day:Object(m.a)({matchPatterns:{narrow:/^[нпвсч]/i,short:/^(нд|пн|вт|ср|чт|пт|сб)\.?/i,abbreviated:/^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,wide:/^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^н/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[он]/i,/^в/i,/^с[ер]/i,/^ч/i,/^п\W*?[ят]/i,/^с[уб]/i]},defaultParseWidth:"any"}),dayPeriod:Object(m.a)({matchPatterns:{narrow:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,abbreviated:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,wide:/^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^дп/i,pm:/^пп/i,midnight:/^півн/i,noon:/^пол/i,morning:/^р/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}};e.default=h},17:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n(10),a=n(9),r=n(6);function u(t,e){Object(r.a)(1,arguments);var n=e||{},u=n.locale,o=u&&u.options&&u.options.weekStartsOn,l=null==o?0:Object(i.a)(o),c=null==n.weekStartsOn?l:Object(i.a)(n.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=Object(a.a)(t),f=s.getUTCDay(),d=(f<c?7:0)+f-c;return s.setUTCDate(s.getUTCDate()-d),s.setUTCHours(0,0,0,0),s}},26:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(17),a=n(6);function r(t,e,n){Object(a.a)(2,arguments);var r=Object(i.a)(t,n),u=Object(i.a)(e,n);return r.getTime()===u.getTime()}},3:function(t,e,n){"use strict";function i(t){return function(e,n){var i,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,u=a.width?String(a.width):r;i=t.formattingValues[u]||t.formattingValues[r]}else{var o=t.defaultWidth,l=a.width?String(a.width):t.defaultWidth;i=t.values[l]||t.values[o]}return i[t.argumentCallback?t.argumentCallback(e):e]}}n.d(e,"a",(function(){return i}))},4:function(t,e,n){"use strict";function i(t){return function(e,n){var i=String(e),a=n||{},r=a.width,u=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=i.match(u);if(!o)return null;var l,c=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(s)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(s,(function(t){return t.test(c)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(s,(function(t){return t.test(c)})),l=t.valueCallback?t.valueCallback(l):l,{value:l=a.valueCallback?a.valueCallback(l):l,rest:i.slice(c.length)}}}n.d(e,"a",(function(){return i}))},5:function(t,e,n){"use strict";function i(t){return function(e){var n=e||{},i=n.width?String(n.width):t.defaultWidth;return t.formats[i]||t.formats[t.defaultWidth]}}n.d(e,"a",(function(){return i}))},6:function(t,e,n){"use strict";function i(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}n.d(e,"a",(function(){return i}))},8:function(t,e,n){"use strict";function i(t){return function(e,n){var i=String(e),a=n||{},r=i.match(t.matchPattern);if(!r)return null;var u=r[0],o=i.match(t.parsePattern);if(!o)return null;var l=t.valueCallback?t.valueCallback(o[0]):o[0];return{value:l=a.valueCallback?a.valueCallback(l):l,rest:i.slice(u.length)}}}n.d(e,"a",(function(){return i}))},9:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n(6);function a(t){Object(i.a)(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}}}))}}}));