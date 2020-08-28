(function () {
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
    /***/
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
    /*!*********************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/css-loader/dist/cjs.js??ref--14-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--14-3!./node_modules/sass-loader/dist/cjs.js??ref--14-4!./src/styles.scss ***!
      \*********************************************************************************************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesCssLoaderDistCjsJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsSrcStylesScss(module, exports, __webpack_require__) {
      // Imports
      var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
      /*! ../node_modules/css-loader/dist/runtime/api.js */
      "./node_modules/css-loader/dist/runtime/api.js");

      exports = ___CSS_LOADER_API_IMPORT___(true); // Module

      exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n.page-default, .narrow-container, .page-default-narrow {\n  width: 100%;\n  max-width: 100%;\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  height: 100%;\n}\n.page-default-narrow {\n  max-width: 600px;\n}\nhtml, body {\n  font-family: Arial, Helvetica, sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  max-height: 100%;\n  min-height: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n@media screen and (min-width: 600px) {\n  .narrow-container {\n    max-width: 600px;\n  }\n}\n.narrow-element {\n  max-width: 100%;\n}\n@media screen and (min-width: 600px) {\n  .narrow-element {\n    max-width: 600px;\n  }\n}\n.exit {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  padding: 0;\n  margin: 0px;\n  width: 30px;\n  height: 30px;\n  color: black;\n  border: none;\n  background-color: transparent;\n}\n.exit:hover {\n  background-color: transparent;\n}\n.exit img {\n  width: 100%;\n  max-width: 100%;\n}\nbutton:disabled:hover {\n  background-color: white;\n}\nbutton:hover {\n  color: white;\n  background-color: black;\n}\n@media (hover: none) {\n  button:disabled:hover {\n    background-color: initial;\n  }\n\n  button:hover {\n    color: initial;\n    background-color: initial;\n  }\n}\nbutton {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1.2em;\n  color: black;\n  background-color: white;\n  outline: none;\n  border: 2px solid black;\n  cursor: pointer;\n  padding: 5px;\n  margin: 5px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\nbutton.inverse {\n  border: 2px solid white;\n  background-color: black;\n  color: white;\n}\nbutton.big-button {\n  font-size: 1.8em;\n  cursor: pointer;\n  padding: 10px;\n  margin: 5px;\n  min-width: 300px;\n  width: 400px;\n  max-width: calc(100% - 2 * 5px);\n  min-height: 55px;\n  height: 55px;\n}\n.big-input {\n  min-width: 300px;\n  min-height: 55px;\n  height: 55px;\n  padding: 5px;\n  width: 400px;\n  font-family: Arial, Helvetica, sans-serif;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-radius: 0;\n  border: 2px solid black;\n  box-shadow: none;\n  font-size: 30px;\n  text-align: center;\n  outline: none;\n  box-sizing: border-box;\n  margin: 5px;\n  max-width: calc(100% - 2 * 5px);\n}\n.big-input.subtle {\n  border: none !important;\n  outline: none !important;\n  font-weight: bold;\n}\n@media (max-width: 480px) {\n  button.big-button {\n    width: 96%;\n  }\n}\nbutton:disabled {\n  cursor: default;\n  color: grey;\n  border: 2px solid grey;\n}\n.footer-proxy, .footer {\n  bottom: 0;\n  padding: 5px;\n  text-align: center;\n  box-sizing: border-box;\n  padding-bottom: calc(5px + env(safe-area-inset-bottom, 0px));\n  opacity: 0;\n  width: 100%;\n}\n.footer {\n  opacity: 1;\n  color: white;\n  background-color: black;\n  position: fixed;\n}\n.page-explanation {\n  width: 100%;\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n@media (max-width: 600px) {\n  .page-explanation {\n    font-size: 0.9em;\n  }\n}\ninput[type=checkbox] {\n  width: 20px;\n  height: 20px;\n  border-radius: 0;\n  box-shadow: none;\n  margin: 2px;\n  padding: 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border: solid 2px black;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  outline: none;\n}\ninput[type=checkbox]:checked {\n  background-color: orangered;\n}\ninput[type=checkbox] + label {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-size: 1.2em;\n}\n.page-title {\n  text-align: center;\n  font-size: 1.8em;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.flex-pad {\n  flex-grow: 1;\n}\n.spinner {\n  width: 80px;\n  height: 80px;\n  position: relative;\n  margin: 20px;\n}\n.double-bounce1, .double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #333;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-bounce 2s infinite ease-in-out;\n          animation: sk-bounce 2s infinite ease-in-out;\n}\n.double-bounce2 {\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n}\n@-webkit-keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n  }\n}\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n  }\n}", "", {
        "version": 3,
        "sources": ["styles.scss", "variables.scss"],
        "names": [],
        "mappings": "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",
        "file": "styles.scss",
        "sourcesContent": ["/* You can add global styles to this file, and also import other style files */\n\n@import \"variables.scss\";\n\nhtml, body {\n    font-family: $font;\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    max-height: 100%;\n    min-height: 100%;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    user-select: none;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n}\n\n.narrow-container {\n    @extend .page-default;\n}\n\n@media screen and (min-width: $narrow-page-width) {\n    .narrow-container{\n        max-width: $narrow-page-width;\n    }\n}\n\n.narrow-element {\n    max-width: 100%;\n}\n\n@media screen and (min-width: $narrow-page-width) {\n    .narrow-element{\n        max-width: $narrow-page-width;\n    }\n}\n\n.exit {\n    appearance: none;\n    padding: 0;\n    margin: 0px;\n    width: 30px;\n    height: 30px;\n    color: black;\n    border: none;\n    background-color: transparent;\n}\n\n.exit:hover {\n    background-color: transparent;\n}\n\n.exit img {\n    width: 100%;\n    max-width: 100%;;\n}\n\nbutton:disabled:hover {\n    // color: grey;\n    background-color: white;\n}\nbutton:hover {\n    color: white;\n    background-color: black;\n}\n\n// disable hover if not available (prevents stickyness on mobile)\n// warning - xbox reports hover: none (and pointer: coarse) for some reason\n// xbox therefore is indistinguishable from touch devices and so hover gets disabled on Xbox unfortunately\n@media (hover: none) {\n    button:disabled:hover {\n        background-color: initial;\n    }\n    button:hover {\n        color: initial;\n        background-color: initial;\n    }\n}\n\nbutton {\n    font-family: $font;\n    font-size: 1.2em;\n    color: black;\n    background-color: white;\n    outline: none;\n    border: 2px solid black;\n    cursor: pointer;\n    padding: 5px;\n    margin: 5px;\n    user-select: none;\n}\n\nbutton.inverse {\n    border: 2px solid white;\n    background-color: black;\n    color: white;\n}\n\nbutton.big-button {\n    $margin: 5px;\n    font-size: 1.8em;\n    cursor: pointer;\n    padding: 10px;\n    margin: $margin;\n    min-width: 300px;\n    width: 400px;\n    max-width: calc(100% - 2 * #{$margin});\n    min-height: 55px;\n    height: 55px;\n}\n\n.big-input {\n    min-width: 300px;\n    min-height: 55px;\n    height: 55px;\n    padding: 5px;\n    width: 400px;\n    $margin: 5px;\n    font-family: $font;\n    appearance: none;\n    border-radius: 0;\n    border: 2px solid black;\n    box-shadow: none;\n    font-size: 30px;\n    text-align: center;\n    outline: none;\n    box-sizing: border-box;\n    margin: $margin;\n    max-width: calc(100% - 2 * #{$margin});\n}\n\n.big-input.subtle {\n    border: none !important;\n    outline: none !important;\n    font-weight: bold;\n}\n\n@media (max-width: 480px) {\n    button.big-button {\n        width: 96%;\n    }\n}\n\nbutton:disabled {\n    cursor: default;\n    color: grey;\n    border: 2px solid grey;\n}\n\n// occupies the space of the footer in the flex flow\n.footer-proxy {\n    bottom: 0;\n    padding: 5px;\n    text-align: center;\n    box-sizing: border-box;\n    padding-bottom: calc(5px + env(safe-area-inset-bottom, 0px));\n    opacity: 0;\n    width: 100%;\n}\n\n.footer {\n    @extend .footer-proxy;\n    opacity: 1;\n    color: white;\n    background-color: black;\n    position: fixed;\n}\n\n.page-explanation {\n    width: 100%;\n    text-align: center;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n@media (max-width: 600px) {\n    .page-explanation {\n        font-size: 0.9em;\n    }\n}\n\ninput[type=\"checkbox\"] {\n    width: 20px;\n    height: 20px;\n    border-radius: 0;\n    box-shadow: none;\n    margin: 2px;\n    padding: 0;\n    appearance: none;\n    border: solid 2px black;\n    cursor: pointer;\n    user-select: none;\n    outline: none;\n}\n\ninput[type=\"checkbox\"]:checked {\n    background-color: orangered;\n}\n\ninput[type=\"checkbox\"] + label {\n    appearance: none;\n    font-size: 1.2em;\n}\n\n.page-title {\n    text-align: center;\n    font-size: 1.8em;\n    margin-top: 15px;\n    margin-bottom: 15px;\n}\n\n.flex-pad {\n    flex-grow: 1;\n}\n\n// spinner courtesy of https://tobiasahlin.com/spinkit/\n.spinner {\n    width: 80px;\n    height: 80px;\n    position: relative;\n    margin: 20px;\n}\n\n.double-bounce1, .double-bounce2 {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: #333;\n    opacity: 0.6;\n    position: absolute;\n    top: 0;\n    left: 0;\n    animation: sk-bounce 2.0s infinite ease-in-out;\n}\n\n.double-bounce2 {\n    animation-delay: -1.0s;\n}\n\n@keyframes sk-bounce {\n    0%, 100% {\n        transform: scale(0.0);\n    } 50% {\n        transform: scale(1.0);\n    }\n}", "$font: Arial, Helvetica, sans-serif;\n$narrow-page-width: 600px;\n\n.page-default {\n    width: 100%;\n    max-width: 100%;\n    padding: 5px;\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    height: 100%;\n}\n\n.page-default-narrow {\n    @extend .page-default;\n    max-width: $narrow-page-width;\n}"]
      }]); // Exports

      module.exports = exports;
      /***/
    },

    /***/
    "./node_modules/css-loader/dist/runtime/api.js":
    /*!*****************************************************!*\
      !*** ./node_modules/css-loader/dist/runtime/api.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function node_modulesCssLoaderDistRuntimeApiJs(module, exports, __webpack_require__) {
      "use strict";
      /*
        MIT License http://www.opensource.org/licenses/mit-license.php
        Author Tobias Koppers @sokra
      */
      // css base code, injected by the css-loader
      // eslint-disable-next-line func-names

      module.exports = function (useSourceMap) {
        var list = []; // return the list of modules as css string

        list.toString = function toString() {
          return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);

            if (item[2]) {
              return "@media ".concat(item[2], " {").concat(content, "}");
            }

            return content;
          }).join('');
        }; // import a list of modules into the list
        // eslint-disable-next-line func-names


        list.i = function (modules, mediaQuery, dedupe) {
          if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
          }

          var alreadyImportedModules = {};

          if (dedupe) {
            for (var i = 0; i < this.length; i++) {
              // eslint-disable-next-line prefer-destructuring
              var id = this[i][0];

              if (id != null) {
                alreadyImportedModules[id] = true;
              }
            }
          }

          for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);

            if (dedupe && alreadyImportedModules[item[0]]) {
              // eslint-disable-next-line no-continue
              continue;
            }

            if (mediaQuery) {
              if (!item[2]) {
                item[2] = mediaQuery;
              } else {
                item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
              }
            }

            list.push(item);
          }
        };

        return list;
      };

      function cssWithMappingToString(item, useSourceMap) {
        var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

        var cssMapping = item[3];

        if (!cssMapping) {
          return content;
        }

        if (useSourceMap && typeof btoa === 'function') {
          var sourceMapping = toComment(cssMapping);
          var sourceURLs = cssMapping.sources.map(function (source) {
            return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
          });
          return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
        }

        return [content].join('\n');
      } // Adapted from convert-source-map (MIT)


      function toComment(sourceMap) {
        // eslint-disable-next-line no-undef
        var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
        var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
        return "/*# ".concat(data, " */");
      }
      /***/

    },

    /***/
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
    /*!****************************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
      \****************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
      "use strict";

      var isOldIE = function isOldIE() {
        var memo;
        return function memorize() {
          if (typeof memo === 'undefined') {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            memo = Boolean(window && document && document.all && !window.atob);
          }

          return memo;
        };
      }();

      var getTarget = function getTarget() {
        var memo = {};
        return function memorize(target) {
          if (typeof memo[target] === 'undefined') {
            var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

            if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
              try {
                // This will throw an exception if access to iframe is blocked
                // due to cross-origin restrictions
                styleTarget = styleTarget.contentDocument.head;
              } catch (e) {
                // istanbul ignore next
                styleTarget = null;
              }
            }

            memo[target] = styleTarget;
          }

          return memo[target];
        };
      }();

      var stylesInDom = [];

      function getIndexByIdentifier(identifier) {
        var result = -1;

        for (var i = 0; i < stylesInDom.length; i++) {
          if (stylesInDom[i].identifier === identifier) {
            result = i;
            break;
          }
        }

        return result;
      }

      function modulesToDom(list, options) {
        var idCountMap = {};
        var identifiers = [];

        for (var i = 0; i < list.length; i++) {
          var item = list[i];
          var id = options.base ? item[0] + options.base : item[0];
          var count = idCountMap[id] || 0;
          var identifier = "".concat(id, " ").concat(count);
          idCountMap[id] = count + 1;
          var index = getIndexByIdentifier(identifier);
          var obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3]
          };

          if (index !== -1) {
            stylesInDom[index].references++;
            stylesInDom[index].updater(obj);
          } else {
            stylesInDom.push({
              identifier: identifier,
              updater: addStyle(obj, options),
              references: 1
            });
          }

          identifiers.push(identifier);
        }

        return identifiers;
      }

      function insertStyleElement(options) {
        var style = document.createElement('style');
        var attributes = options.attributes || {};

        if (typeof attributes.nonce === 'undefined') {
          var nonce = true ? __webpack_require__.nc : undefined;

          if (nonce) {
            attributes.nonce = nonce;
          }
        }

        Object.keys(attributes).forEach(function (key) {
          style.setAttribute(key, attributes[key]);
        });

        if (typeof options.insert === 'function') {
          options.insert(style);
        } else {
          var target = getTarget(options.insert || 'head');

          if (!target) {
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          }

          target.appendChild(style);
        }

        return style;
      }

      function removeStyleElement(style) {
        // istanbul ignore if
        if (style.parentNode === null) {
          return false;
        }

        style.parentNode.removeChild(style);
      }
      /* istanbul ignore next  */


      var replaceText = function replaceText() {
        var textStore = [];
        return function replace(index, replacement) {
          textStore[index] = replacement;
          return textStore.filter(Boolean).join('\n');
        };
      }();

      function applyToSingletonTag(style, index, remove, obj) {
        var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

        /* istanbul ignore if  */

        if (style.styleSheet) {
          style.styleSheet.cssText = replaceText(index, css);
        } else {
          var cssNode = document.createTextNode(css);
          var childNodes = style.childNodes;

          if (childNodes[index]) {
            style.removeChild(childNodes[index]);
          }

          if (childNodes.length) {
            style.insertBefore(cssNode, childNodes[index]);
          } else {
            style.appendChild(cssNode);
          }
        }
      }

      function applyToTag(style, options, obj) {
        var css = obj.css;
        var media = obj.media;
        var sourceMap = obj.sourceMap;

        if (media) {
          style.setAttribute('media', media);
        } else {
          style.removeAttribute('media');
        }

        if (sourceMap && btoa) {
          css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
        } // For old IE

        /* istanbul ignore if  */


        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          while (style.firstChild) {
            style.removeChild(style.firstChild);
          }

          style.appendChild(document.createTextNode(css));
        }
      }

      var singleton = null;
      var singletonCounter = 0;

      function addStyle(obj, options) {
        var style;
        var update;
        var remove;

        if (options.singleton) {
          var styleIndex = singletonCounter++;
          style = singleton || (singleton = insertStyleElement(options));
          update = applyToSingletonTag.bind(null, style, styleIndex, false);
          remove = applyToSingletonTag.bind(null, style, styleIndex, true);
        } else {
          style = insertStyleElement(options);
          update = applyToTag.bind(null, style, options);

          remove = function remove() {
            removeStyleElement(style);
          };
        }

        update(obj);
        return function updateStyle(newObj) {
          if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
              return;
            }

            update(obj = newObj);
          } else {
            remove();
          }
        };
      }

      module.exports = function (list, options) {
        options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
        // tags it will allow on a page

        if (!options.singleton && typeof options.singleton !== 'boolean') {
          options.singleton = isOldIE();
        }

        list = list || [];
        var lastIdentifiers = modulesToDom(list, options);
        return function update(newList) {
          newList = newList || [];

          if (Object.prototype.toString.call(newList) !== '[object Array]') {
            return;
          }

          for (var i = 0; i < lastIdentifiers.length; i++) {
            var identifier = lastIdentifiers[i];
            var index = getIndexByIdentifier(identifier);
            stylesInDom[index].references--;
          }

          var newLastIdentifiers = modulesToDom(newList, options);

          for (var _i = 0; _i < lastIdentifiers.length; _i++) {
            var _identifier = lastIdentifiers[_i];

            var _index = getIndexByIdentifier(_identifier);

            if (stylesInDom[_index].references === 0) {
              stylesInDom[_index].updater();

              stylesInDom.splice(_index, 1);
            }
          }

          lastIdentifiers = newLastIdentifiers;
        };
      };
      /***/

    },

    /***/
    "./src/styles.scss":
    /*!*************************!*\
      !*** ./src/styles.scss ***!
      \*************************/

    /*! no static exports found */

    /***/
    function srcStylesScss(module, exports, __webpack_require__) {
      var api = __webpack_require__(
      /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
      "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

      var content = __webpack_require__(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--14-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--14-3!../node_modules/sass-loader/dist/cjs.js??ref--14-4!./styles.scss */
      "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

      content = content.__esModule ? content["default"] : content;

      if (typeof content === 'string') {
        content = [[module.i, content, '']];
      }

      var options = {};
      options.insert = "head";
      options.singleton = false;
      var update = api(content, options);
      module.exports = content.locals || {};
      /***/
    },

    /***/
    3:
    /*!*******************************!*\
      !*** multi ./src/styles.scss ***!
      \*******************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/runner/work/IsoCards/IsoCards/client/src/styles.scss */
      "./src/styles.scss");
      /***/
    }
  }, [[3, "runtime"]]]);
})();
//# sourceMappingURL=styles-es5.js.map