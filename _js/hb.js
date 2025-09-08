"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\gohugoio\hugo-mod-jslibs-dist\popperjs\v2@v2.21100.20000\package\dist\cjs\popper.js
  var require_popper = __commonJS({
    "ns-hugo-imp:C:\\Users\\hi\\AppData\\Local\\hugo_cache\\modules\\filecache\\modules\\pkg\\mod\\github.com\\gohugoio\\hugo-mod-jslibs-dist\\popperjs\\v2@v2.21100.20000\\package\\dist\\cjs\\popper.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function getWindow(node) {
        if (node == null) {
          return window;
        }
        if (node.toString() !== "[object Window]") {
          var ownerDocument = node.ownerDocument;
          return ownerDocument ? ownerDocument.defaultView || window : window;
        }
        return node;
      }
      function isElement2(node) {
        var OwnElement = getWindow(node).Element;
        return node instanceof OwnElement || node instanceof Element;
      }
      function isHTMLElement(node) {
        var OwnElement = getWindow(node).HTMLElement;
        return node instanceof OwnElement || node instanceof HTMLElement;
      }
      function isShadowRoot(node) {
        if (typeof ShadowRoot === "undefined") {
          return false;
        }
        var OwnElement = getWindow(node).ShadowRoot;
        return node instanceof OwnElement || node instanceof ShadowRoot;
      }
      var max = Math.max;
      var min = Math.min;
      var round = Math.round;
      function getBoundingClientRect(element, includeScale) {
        if (includeScale === void 0) {
          includeScale = false;
        }
        var rect = element.getBoundingClientRect();
        var scaleX = 1;
        var scaleY = 1;
        if (isHTMLElement(element) && includeScale) {
          var offsetHeight = element.offsetHeight;
          var offsetWidth = element.offsetWidth;
          if (offsetWidth > 0) {
            scaleX = round(rect.width) / offsetWidth || 1;
          }
          if (offsetHeight > 0) {
            scaleY = round(rect.height) / offsetHeight || 1;
          }
        }
        return {
          width: rect.width / scaleX,
          height: rect.height / scaleY,
          top: rect.top / scaleY,
          right: rect.right / scaleX,
          bottom: rect.bottom / scaleY,
          left: rect.left / scaleX,
          x: rect.left / scaleX,
          y: rect.top / scaleY
        };
      }
      function getWindowScroll(node) {
        var win = getWindow(node);
        var scrollLeft = win.pageXOffset;
        var scrollTop = win.pageYOffset;
        return {
          scrollLeft,
          scrollTop
        };
      }
      function getHTMLElementScroll(element) {
        return {
          scrollLeft: element.scrollLeft,
          scrollTop: element.scrollTop
        };
      }
      function getNodeScroll(node) {
        if (node === getWindow(node) || !isHTMLElement(node)) {
          return getWindowScroll(node);
        } else {
          return getHTMLElementScroll(node);
        }
      }
      function getNodeName(element) {
        return element ? (element.nodeName || "").toLowerCase() : null;
      }
      function getDocumentElement(element) {
        return ((isElement2(element) ? element.ownerDocument : (
          // $FlowFixMe[prop-missing]
          element.document
        )) || window.document).documentElement;
      }
      function getWindowScrollBarX(element) {
        return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
      }
      function getComputedStyle2(element) {
        return getWindow(element).getComputedStyle(element);
      }
      function isScrollParent(element) {
        var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
        return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
      }
      function isElementScaled(element) {
        var rect = element.getBoundingClientRect();
        var scaleX = round(rect.width) / element.offsetWidth || 1;
        var scaleY = round(rect.height) / element.offsetHeight || 1;
        return scaleX !== 1 || scaleY !== 1;
      }
      function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
        if (isFixed === void 0) {
          isFixed = false;
        }
        var isOffsetParentAnElement = isHTMLElement(offsetParent);
        var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
        var documentElement = getDocumentElement(offsetParent);
        var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
        var scroll = {
          scrollLeft: 0,
          scrollTop: 0
        };
        var offsets = {
          x: 0,
          y: 0
        };
        if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
          if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
          isScrollParent(documentElement)) {
            scroll = getNodeScroll(offsetParent);
          }
          if (isHTMLElement(offsetParent)) {
            offsets = getBoundingClientRect(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
          } else if (documentElement) {
            offsets.x = getWindowScrollBarX(documentElement);
          }
        }
        return {
          x: rect.left + scroll.scrollLeft - offsets.x,
          y: rect.top + scroll.scrollTop - offsets.y,
          width: rect.width,
          height: rect.height
        };
      }
      function getLayoutRect(element) {
        var clientRect = getBoundingClientRect(element);
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        if (Math.abs(clientRect.width - width) <= 1) {
          width = clientRect.width;
        }
        if (Math.abs(clientRect.height - height) <= 1) {
          height = clientRect.height;
        }
        return {
          x: element.offsetLeft,
          y: element.offsetTop,
          width,
          height
        };
      }
      function getParentNode(element) {
        if (getNodeName(element) === "html") {
          return element;
        }
        return (
          // this is a quicker (but less type safe) way to save quite some bytes from the bundle
          // $FlowFixMe[incompatible-return]
          // $FlowFixMe[prop-missing]
          element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
          element.parentNode || // DOM Element detected
          (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
          // $FlowFixMe[incompatible-call]: HTMLElement is a Node
          getDocumentElement(element)
        );
      }
      function getScrollParent(node) {
        if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
          return node.ownerDocument.body;
        }
        if (isHTMLElement(node) && isScrollParent(node)) {
          return node;
        }
        return getScrollParent(getParentNode(node));
      }
      function listScrollParents(element, list) {
        var _element$ownerDocumen;
        if (list === void 0) {
          list = [];
        }
        var scrollParent = getScrollParent(element);
        var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
        var win = getWindow(scrollParent);
        var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
        var updatedList = list.concat(target);
        return isBody ? updatedList : (
          // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
          updatedList.concat(listScrollParents(getParentNode(target)))
        );
      }
      function isTableElement(element) {
        return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
      }
      function getTrueOffsetParent(element) {
        if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
        getComputedStyle2(element).position === "fixed") {
          return null;
        }
        return element.offsetParent;
      }
      function getContainingBlock(element) {
        var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
        var isIE = navigator.userAgent.indexOf("Trident") !== -1;
        if (isIE && isHTMLElement(element)) {
          var elementCss = getComputedStyle2(element);
          if (elementCss.position === "fixed") {
            return null;
          }
        }
        var currentNode = getParentNode(element);
        while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
          var css = getComputedStyle2(currentNode);
          if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
            return currentNode;
          } else {
            currentNode = currentNode.parentNode;
          }
        }
        return null;
      }
      function getOffsetParent(element) {
        var window2 = getWindow(element);
        var offsetParent = getTrueOffsetParent(element);
        while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
          offsetParent = getTrueOffsetParent(offsetParent);
        }
        if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
          return window2;
        }
        return offsetParent || getContainingBlock(element) || window2;
      }
      var top = "top";
      var bottom = "bottom";
      var right = "right";
      var left = "left";
      var auto = "auto";
      var basePlacements = [top, bottom, right, left];
      var start = "start";
      var end = "end";
      var clippingParents = "clippingParents";
      var viewport = "viewport";
      var popper = "popper";
      var reference = "reference";
      var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
        return acc.concat([placement + "-" + start, placement + "-" + end]);
      }, []);
      var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
        return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
      }, []);
      var beforeRead = "beforeRead";
      var read = "read";
      var afterRead = "afterRead";
      var beforeMain = "beforeMain";
      var main = "main";
      var afterMain = "afterMain";
      var beforeWrite = "beforeWrite";
      var write = "write";
      var afterWrite = "afterWrite";
      var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
      function order(modifiers) {
        var map = /* @__PURE__ */ new Map();
        var visited = /* @__PURE__ */ new Set();
        var result = [];
        modifiers.forEach(function(modifier) {
          map.set(modifier.name, modifier);
        });
        function sort(modifier) {
          visited.add(modifier.name);
          var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
          requires.forEach(function(dep) {
            if (!visited.has(dep)) {
              var depModifier = map.get(dep);
              if (depModifier) {
                sort(depModifier);
              }
            }
          });
          result.push(modifier);
        }
        modifiers.forEach(function(modifier) {
          if (!visited.has(modifier.name)) {
            sort(modifier);
          }
        });
        return result;
      }
      function orderModifiers(modifiers) {
        var orderedModifiers = order(modifiers);
        return modifierPhases.reduce(function(acc, phase) {
          return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
          }));
        }, []);
      }
      function debounce(fn) {
        var pending;
        return function() {
          if (!pending) {
            pending = new Promise(function(resolve) {
              Promise.resolve().then(function() {
                pending = void 0;
                resolve(fn());
              });
            });
          }
          return pending;
        };
      }
      function format(str) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        return [].concat(args).reduce(function(p, c) {
          return p.replace(/%s/, c);
        }, str);
      }
      var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
      var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
      var VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
      function validateModifiers(modifiers) {
        modifiers.forEach(function(modifier) {
          [].concat(Object.keys(modifier), VALID_PROPERTIES).filter(function(value, index, self) {
            return self.indexOf(value) === index;
          }).forEach(function(key) {
            switch (key) {
              case "name":
                if (typeof modifier.name !== "string") {
                  console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
                }
                break;
              case "enabled":
                if (typeof modifier.enabled !== "boolean") {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
                }
                break;
              case "phase":
                if (modifierPhases.indexOf(modifier.phase) < 0) {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(", "), '"' + String(modifier.phase) + '"'));
                }
                break;
              case "fn":
                if (typeof modifier.fn !== "function") {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
                }
                break;
              case "effect":
                if (modifier.effect != null && typeof modifier.effect !== "function") {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
                }
                break;
              case "requires":
                if (modifier.requires != null && !Array.isArray(modifier.requires)) {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
                }
                break;
              case "requiresIfExists":
                if (!Array.isArray(modifier.requiresIfExists)) {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
                }
                break;
              case "options":
              case "data":
                break;
              default:
                console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
                  return '"' + s + '"';
                }).join(", ") + '; but "' + key + '" was provided.');
            }
            modifier.requires && modifier.requires.forEach(function(requirement) {
              if (modifiers.find(function(mod) {
                return mod.name === requirement;
              }) == null) {
                console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
              }
            });
          });
        });
      }
      function uniqueBy(arr, fn) {
        var identifiers = /* @__PURE__ */ new Set();
        return arr.filter(function(item) {
          var identifier = fn(item);
          if (!identifiers.has(identifier)) {
            identifiers.add(identifier);
            return true;
          }
        });
      }
      function getBasePlacement(placement) {
        return placement.split("-")[0];
      }
      function mergeByName(modifiers) {
        var merged = modifiers.reduce(function(merged2, current) {
          var existing = merged2[current.name];
          merged2[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
          }) : current;
          return merged2;
        }, {});
        return Object.keys(merged).map(function(key) {
          return merged[key];
        });
      }
      function getViewportRect(element) {
        var win = getWindow(element);
        var html = getDocumentElement(element);
        var visualViewport = win.visualViewport;
        var width = html.clientWidth;
        var height = html.clientHeight;
        var x = 0;
        var y = 0;
        if (visualViewport) {
          width = visualViewport.width;
          height = visualViewport.height;
          if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
          }
        }
        return {
          width,
          height,
          x: x + getWindowScrollBarX(element),
          y
        };
      }
      function getDocumentRect(element) {
        var _element$ownerDocumen;
        var html = getDocumentElement(element);
        var winScroll = getWindowScroll(element);
        var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
        var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
        var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
        var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
        var y = -winScroll.scrollTop;
        if (getComputedStyle2(body || html).direction === "rtl") {
          x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
        }
        return {
          width,
          height,
          x,
          y
        };
      }
      function contains(parent, child) {
        var rootNode = child.getRootNode && child.getRootNode();
        if (parent.contains(child)) {
          return true;
        } else if (rootNode && isShadowRoot(rootNode)) {
          var next = child;
          do {
            if (next && parent.isSameNode(next)) {
              return true;
            }
            next = next.parentNode || next.host;
          } while (next);
        }
        return false;
      }
      function rectToClientRect(rect) {
        return Object.assign({}, rect, {
          left: rect.x,
          top: rect.y,
          right: rect.x + rect.width,
          bottom: rect.y + rect.height
        });
      }
      function getInnerBoundingClientRect(element) {
        var rect = getBoundingClientRect(element);
        rect.top = rect.top + element.clientTop;
        rect.left = rect.left + element.clientLeft;
        rect.bottom = rect.top + element.clientHeight;
        rect.right = rect.left + element.clientWidth;
        rect.width = element.clientWidth;
        rect.height = element.clientHeight;
        rect.x = rect.left;
        rect.y = rect.top;
        return rect;
      }
      function getClientRectFromMixedType(element, clippingParent) {
        return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement2(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
      }
      function getClippingParents(element) {
        var clippingParents2 = listScrollParents(getParentNode(element));
        var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
        var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
        if (!isElement2(clipperElement)) {
          return [];
        }
        return clippingParents2.filter(function(clippingParent) {
          return isElement2(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body" && (canEscapeClipping ? getComputedStyle2(clippingParent).position !== "static" : true);
        });
      }
      function getClippingRect(element, boundary, rootBoundary) {
        var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
        var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
        var firstClippingParent = clippingParents2[0];
        var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
          var rect = getClientRectFromMixedType(element, clippingParent);
          accRect.top = max(rect.top, accRect.top);
          accRect.right = min(rect.right, accRect.right);
          accRect.bottom = min(rect.bottom, accRect.bottom);
          accRect.left = max(rect.left, accRect.left);
          return accRect;
        }, getClientRectFromMixedType(element, firstClippingParent));
        clippingRect.width = clippingRect.right - clippingRect.left;
        clippingRect.height = clippingRect.bottom - clippingRect.top;
        clippingRect.x = clippingRect.left;
        clippingRect.y = clippingRect.top;
        return clippingRect;
      }
      function getVariation(placement) {
        return placement.split("-")[1];
      }
      function getMainAxisFromPlacement(placement) {
        return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
      }
      function computeOffsets(_ref) {
        var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
        var basePlacement = placement ? getBasePlacement(placement) : null;
        var variation = placement ? getVariation(placement) : null;
        var commonX = reference2.x + reference2.width / 2 - element.width / 2;
        var commonY = reference2.y + reference2.height / 2 - element.height / 2;
        var offsets;
        switch (basePlacement) {
          case top:
            offsets = {
              x: commonX,
              y: reference2.y - element.height
            };
            break;
          case bottom:
            offsets = {
              x: commonX,
              y: reference2.y + reference2.height
            };
            break;
          case right:
            offsets = {
              x: reference2.x + reference2.width,
              y: commonY
            };
            break;
          case left:
            offsets = {
              x: reference2.x - element.width,
              y: commonY
            };
            break;
          default:
            offsets = {
              x: reference2.x,
              y: reference2.y
            };
        }
        var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
        if (mainAxis != null) {
          var len = mainAxis === "y" ? "height" : "width";
          switch (variation) {
            case start:
              offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
              break;
            case end:
              offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
              break;
          }
        }
        return offsets;
      }
      function getFreshSideObject() {
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        };
      }
      function mergePaddingObject(paddingObject) {
        return Object.assign({}, getFreshSideObject(), paddingObject);
      }
      function expandToHashMap(value, keys) {
        return keys.reduce(function(hashMap, key) {
          hashMap[key] = value;
          return hashMap;
        }, {});
      }
      function detectOverflow(state, options) {
        if (options === void 0) {
          options = {};
        }
        var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
        var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
        var altContext = elementContext === popper ? reference : popper;
        var popperRect = state.rects.popper;
        var element = state.elements[altBoundary ? altContext : elementContext];
        var clippingClientRect = getClippingRect(isElement2(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
        var referenceClientRect = getBoundingClientRect(state.elements.reference);
        var popperOffsets2 = computeOffsets({
          reference: referenceClientRect,
          element: popperRect,
          strategy: "absolute",
          placement
        });
        var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
        var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
        var overflowOffsets = {
          top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
          bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
          left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
          right: elementClientRect.right - clippingClientRect.right + paddingObject.right
        };
        var offsetData = state.modifiersData.offset;
        if (elementContext === popper && offsetData) {
          var offset2 = offsetData[placement];
          Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
            var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
            overflowOffsets[key] += offset2[axis] * multiply;
          });
        }
        return overflowOffsets;
      }
      var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
      var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
      var DEFAULT_OPTIONS = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
      };
      function areValidElements() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return !args.some(function(element) {
          return !(element && typeof element.getBoundingClientRect === "function");
        });
      }
      function popperGenerator(generatorOptions) {
        if (generatorOptions === void 0) {
          generatorOptions = {};
        }
        var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
        return function createPopper3(reference2, popper2, options) {
          if (options === void 0) {
            options = defaultOptions;
          }
          var state = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
              reference: reference2,
              popper: popper2
            },
            attributes: {},
            styles: {}
          };
          var effectCleanupFns = [];
          var isDestroyed = false;
          var instance = {
            state,
            setOptions: function setOptions(setOptionsAction) {
              var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
              cleanupModifierEffects();
              state.options = Object.assign({}, defaultOptions, state.options, options2);
              state.scrollParents = {
                reference: isElement2(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
                popper: listScrollParents(popper2)
              };
              var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
              state.orderedModifiers = orderedModifiers.filter(function(m) {
                return m.enabled;
              });
              if (true) {
                var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
                  var name = _ref.name;
                  return name;
                });
                validateModifiers(modifiers);
                if (getBasePlacement(state.options.placement) === auto) {
                  var flipModifier = state.orderedModifiers.find(function(_ref2) {
                    var name = _ref2.name;
                    return name === "flip";
                  });
                  if (!flipModifier) {
                    console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
                  }
                }
                var _getComputedStyle = getComputedStyle2(popper2), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
                if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
                  return parseFloat(margin);
                })) {
                  console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
                }
              }
              runModifierEffects();
              return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
              if (isDestroyed) {
                return;
              }
              var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
              if (!areValidElements(reference3, popper3)) {
                if (true) {
                  console.error(INVALID_ELEMENT_ERROR);
                }
                return;
              }
              state.rects = {
                reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
                popper: getLayoutRect(popper3)
              };
              state.reset = false;
              state.placement = state.options.placement;
              state.orderedModifiers.forEach(function(modifier) {
                return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
              });
              var __debug_loops__ = 0;
              for (var index = 0; index < state.orderedModifiers.length; index++) {
                if (true) {
                  __debug_loops__ += 1;
                  if (__debug_loops__ > 100) {
                    console.error(INFINITE_LOOP_ERROR);
                    break;
                  }
                }
                if (state.reset === true) {
                  state.reset = false;
                  index = -1;
                  continue;
                }
                var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                if (typeof fn === "function") {
                  state = fn({
                    state,
                    options: _options,
                    name,
                    instance
                  }) || state;
                }
              }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: debounce(function() {
              return new Promise(function(resolve) {
                instance.forceUpdate();
                resolve(state);
              });
            }),
            destroy: function destroy() {
              cleanupModifierEffects();
              isDestroyed = true;
            }
          };
          if (!areValidElements(reference2, popper2)) {
            if (true) {
              console.error(INVALID_ELEMENT_ERROR);
            }
            return instance;
          }
          instance.setOptions(options).then(function(state2) {
            if (!isDestroyed && options.onFirstUpdate) {
              options.onFirstUpdate(state2);
            }
          });
          function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref3) {
              var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect2 = _ref3.effect;
              if (typeof effect2 === "function") {
                var cleanupFn = effect2({
                  state,
                  name,
                  instance,
                  options: options2
                });
                var noopFn = function noopFn2() {
                };
                effectCleanupFns.push(cleanupFn || noopFn);
              }
            });
          }
          function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
              return fn();
            });
            effectCleanupFns = [];
          }
          return instance;
        };
      }
      var passive = {
        passive: true
      };
      function effect$2(_ref) {
        var state = _ref.state, instance = _ref.instance, options = _ref.options;
        var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
        var window2 = getWindow(state.elements.popper);
        var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
        if (scroll) {
          scrollParents.forEach(function(scrollParent) {
            scrollParent.addEventListener("scroll", instance.update, passive);
          });
        }
        if (resize) {
          window2.addEventListener("resize", instance.update, passive);
        }
        return function() {
          if (scroll) {
            scrollParents.forEach(function(scrollParent) {
              scrollParent.removeEventListener("scroll", instance.update, passive);
            });
          }
          if (resize) {
            window2.removeEventListener("resize", instance.update, passive);
          }
        };
      }
      var eventListeners = {
        name: "eventListeners",
        enabled: true,
        phase: "write",
        fn: function fn() {
        },
        effect: effect$2,
        data: {}
      };
      function popperOffsets(_ref) {
        var state = _ref.state, name = _ref.name;
        state.modifiersData[name] = computeOffsets({
          reference: state.rects.reference,
          element: state.rects.popper,
          strategy: "absolute",
          placement: state.placement
        });
      }
      var popperOffsets$1 = {
        name: "popperOffsets",
        enabled: true,
        phase: "read",
        fn: popperOffsets,
        data: {}
      };
      var unsetSides = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
      };
      function roundOffsetsByDPR(_ref) {
        var x = _ref.x, y = _ref.y;
        var win = window;
        var dpr = win.devicePixelRatio || 1;
        return {
          x: round(x * dpr) / dpr || 0,
          y: round(y * dpr) / dpr || 0
        };
      }
      function mapToStyles(_ref2) {
        var _Object$assign2;
        var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
        var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === "function" ? roundOffsets(offsets) : offsets, _ref3$x = _ref3.x, x = _ref3$x === void 0 ? 0 : _ref3$x, _ref3$y = _ref3.y, y = _ref3$y === void 0 ? 0 : _ref3$y;
        var hasX = offsets.hasOwnProperty("x");
        var hasY = offsets.hasOwnProperty("y");
        var sideX = left;
        var sideY = top;
        var win = window;
        if (adaptive) {
          var offsetParent = getOffsetParent(popper2);
          var heightProp = "clientHeight";
          var widthProp = "clientWidth";
          if (offsetParent === getWindow(popper2)) {
            offsetParent = getDocumentElement(popper2);
            if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
              heightProp = "scrollHeight";
              widthProp = "scrollWidth";
            }
          }
          offsetParent = offsetParent;
          if (placement === top || (placement === left || placement === right) && variation === end) {
            sideY = bottom;
            var offsetY = isFixed && win.visualViewport ? win.visualViewport.height : (
              // $FlowFixMe[prop-missing]
              offsetParent[heightProp]
            );
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
          }
          if (placement === left || (placement === top || placement === bottom) && variation === end) {
            sideX = right;
            var offsetX = isFixed && win.visualViewport ? win.visualViewport.width : (
              // $FlowFixMe[prop-missing]
              offsetParent[widthProp]
            );
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
          }
        }
        var commonStyles = Object.assign({
          position
        }, adaptive && unsetSides);
        if (gpuAcceleration) {
          var _Object$assign;
          return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
        }
        return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
      }
      function computeStyles(_ref4) {
        var state = _ref4.state, options = _ref4.options;
        var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
        if (true) {
          var transitionProperty = getComputedStyle2(state.elements.popper).transitionProperty || "";
          if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
            return transitionProperty.indexOf(property) >= 0;
          })) {
            console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
          }
        }
        var commonStyles = {
          placement: getBasePlacement(state.placement),
          variation: getVariation(state.placement),
          popper: state.elements.popper,
          popperRect: state.rects.popper,
          gpuAcceleration,
          isFixed: state.options.strategy === "fixed"
        };
        if (state.modifiersData.popperOffsets != null) {
          state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.popperOffsets,
            position: state.options.strategy,
            adaptive,
            roundOffsets
          })));
        }
        if (state.modifiersData.arrow != null) {
          state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.arrow,
            position: "absolute",
            adaptive: false,
            roundOffsets
          })));
        }
        state.attributes.popper = Object.assign({}, state.attributes.popper, {
          "data-popper-placement": state.placement
        });
      }
      var computeStyles$1 = {
        name: "computeStyles",
        enabled: true,
        phase: "beforeWrite",
        fn: computeStyles,
        data: {}
      };
      function applyStyles(_ref) {
        var state = _ref.state;
        Object.keys(state.elements).forEach(function(name) {
          var style = state.styles[name] || {};
          var attributes = state.attributes[name] || {};
          var element = state.elements[name];
          if (!isHTMLElement(element) || !getNodeName(element)) {
            return;
          }
          Object.assign(element.style, style);
          Object.keys(attributes).forEach(function(name2) {
            var value = attributes[name2];
            if (value === false) {
              element.removeAttribute(name2);
            } else {
              element.setAttribute(name2, value === true ? "" : value);
            }
          });
        });
      }
      function effect$1(_ref2) {
        var state = _ref2.state;
        var initialStyles = {
          popper: {
            position: state.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
          },
          arrow: {
            position: "absolute"
          },
          reference: {}
        };
        Object.assign(state.elements.popper.style, initialStyles.popper);
        state.styles = initialStyles;
        if (state.elements.arrow) {
          Object.assign(state.elements.arrow.style, initialStyles.arrow);
        }
        return function() {
          Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
            var style = styleProperties.reduce(function(style2, property) {
              style2[property] = "";
              return style2;
            }, {});
            if (!isHTMLElement(element) || !getNodeName(element)) {
              return;
            }
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
              element.removeAttribute(attribute);
            });
          });
        };
      }
      var applyStyles$1 = {
        name: "applyStyles",
        enabled: true,
        phase: "write",
        fn: applyStyles,
        effect: effect$1,
        requires: ["computeStyles"]
      };
      function distanceAndSkiddingToXY(placement, rects, offset2) {
        var basePlacement = getBasePlacement(placement);
        var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
        var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
          placement
        })) : offset2, skidding = _ref[0], distance = _ref[1];
        skidding = skidding || 0;
        distance = (distance || 0) * invertDistance;
        return [left, right].indexOf(basePlacement) >= 0 ? {
          x: distance,
          y: skidding
        } : {
          x: skidding,
          y: distance
        };
      }
      function offset(_ref2) {
        var state = _ref2.state, options = _ref2.options, name = _ref2.name;
        var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
        var data = placements.reduce(function(acc, placement) {
          acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
          return acc;
        }, {});
        var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
        if (state.modifiersData.popperOffsets != null) {
          state.modifiersData.popperOffsets.x += x;
          state.modifiersData.popperOffsets.y += y;
        }
        state.modifiersData[name] = data;
      }
      var offset$1 = {
        name: "offset",
        enabled: true,
        phase: "main",
        requires: ["popperOffsets"],
        fn: offset
      };
      var hash$1 = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };
      function getOppositePlacement(placement) {
        return placement.replace(/left|right|bottom|top/g, function(matched) {
          return hash$1[matched];
        });
      }
      var hash = {
        start: "end",
        end: "start"
      };
      function getOppositeVariationPlacement(placement) {
        return placement.replace(/start|end/g, function(matched) {
          return hash[matched];
        });
      }
      function computeAutoPlacement(state, options) {
        if (options === void 0) {
          options = {};
        }
        var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
        var variation = getVariation(placement);
        var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
          return getVariation(placement2) === variation;
        }) : basePlacements;
        var allowedPlacements = placements$1.filter(function(placement2) {
          return allowedAutoPlacements.indexOf(placement2) >= 0;
        });
        if (allowedPlacements.length === 0) {
          allowedPlacements = placements$1;
          if (true) {
            console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "));
          }
        }
        var overflows = allowedPlacements.reduce(function(acc, placement2) {
          acc[placement2] = detectOverflow(state, {
            placement: placement2,
            boundary,
            rootBoundary,
            padding
          })[getBasePlacement(placement2)];
          return acc;
        }, {});
        return Object.keys(overflows).sort(function(a, b) {
          return overflows[a] - overflows[b];
        });
      }
      function getExpandedFallbackPlacements(placement) {
        if (getBasePlacement(placement) === auto) {
          return [];
        }
        var oppositePlacement = getOppositePlacement(placement);
        return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
      }
      function flip(_ref) {
        var state = _ref.state, options = _ref.options, name = _ref.name;
        if (state.modifiersData[name]._skip) {
          return;
        }
        var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
        var preferredPlacement = state.options.placement;
        var basePlacement = getBasePlacement(preferredPlacement);
        var isBasePlacement = basePlacement === preferredPlacement;
        var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
        var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
          return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
            placement: placement2,
            boundary,
            rootBoundary,
            padding,
            flipVariations,
            allowedAutoPlacements
          }) : placement2);
        }, []);
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var checksMap = /* @__PURE__ */ new Map();
        var makeFallbackChecks = true;
        var firstFittingPlacement = placements2[0];
        for (var i = 0; i < placements2.length; i++) {
          var placement = placements2[i];
          var _basePlacement = getBasePlacement(placement);
          var isStartVariation = getVariation(placement) === start;
          var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
          var len = isVertical ? "width" : "height";
          var overflow = detectOverflow(state, {
            placement,
            boundary,
            rootBoundary,
            altBoundary,
            padding
          });
          var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
          if (referenceRect[len] > popperRect[len]) {
            mainVariationSide = getOppositePlacement(mainVariationSide);
          }
          var altVariationSide = getOppositePlacement(mainVariationSide);
          var checks = [];
          if (checkMainAxis) {
            checks.push(overflow[_basePlacement] <= 0);
          }
          if (checkAltAxis) {
            checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
          }
          if (checks.every(function(check) {
            return check;
          })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
          }
          checksMap.set(placement, checks);
        }
        if (makeFallbackChecks) {
          var numberOfChecks = flipVariations ? 3 : 1;
          var _loop = function _loop2(_i2) {
            var fittingPlacement = placements2.find(function(placement2) {
              var checks2 = checksMap.get(placement2);
              if (checks2) {
                return checks2.slice(0, _i2).every(function(check) {
                  return check;
                });
              }
            });
            if (fittingPlacement) {
              firstFittingPlacement = fittingPlacement;
              return "break";
            }
          };
          for (var _i = numberOfChecks; _i > 0; _i--) {
            var _ret = _loop(_i);
            if (_ret === "break") break;
          }
        }
        if (state.placement !== firstFittingPlacement) {
          state.modifiersData[name]._skip = true;
          state.placement = firstFittingPlacement;
          state.reset = true;
        }
      }
      var flip$1 = {
        name: "flip",
        enabled: true,
        phase: "main",
        fn: flip,
        requiresIfExists: ["offset"],
        data: {
          _skip: false
        }
      };
      function getAltAxis(axis) {
        return axis === "x" ? "y" : "x";
      }
      function within(min$1, value, max$1) {
        return max(min$1, min(value, max$1));
      }
      function withinMaxClamp(min2, value, max2) {
        var v = within(min2, value, max2);
        return v > max2 ? max2 : v;
      }
      function preventOverflow(_ref) {
        var state = _ref.state, options = _ref.options, name = _ref.name;
        var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
        var overflow = detectOverflow(state, {
          boundary,
          rootBoundary,
          padding,
          altBoundary
        });
        var basePlacement = getBasePlacement(state.placement);
        var variation = getVariation(state.placement);
        var isBasePlacement = !variation;
        var mainAxis = getMainAxisFromPlacement(basePlacement);
        var altAxis = getAltAxis(mainAxis);
        var popperOffsets2 = state.modifiersData.popperOffsets;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
          placement: state.placement
        })) : tetherOffset;
        var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
          mainAxis: tetherOffsetValue,
          altAxis: tetherOffsetValue
        } : Object.assign({
          mainAxis: 0,
          altAxis: 0
        }, tetherOffsetValue);
        var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
        var data = {
          x: 0,
          y: 0
        };
        if (!popperOffsets2) {
          return;
        }
        if (checkMainAxis) {
          var _offsetModifierState$;
          var mainSide = mainAxis === "y" ? top : left;
          var altSide = mainAxis === "y" ? bottom : right;
          var len = mainAxis === "y" ? "height" : "width";
          var offset2 = popperOffsets2[mainAxis];
          var min$1 = offset2 + overflow[mainSide];
          var max$1 = offset2 - overflow[altSide];
          var additive = tether ? -popperRect[len] / 2 : 0;
          var minLen = variation === start ? referenceRect[len] : popperRect[len];
          var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
          var arrowElement = state.elements.arrow;
          var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
            width: 0,
            height: 0
          };
          var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
          var arrowPaddingMin = arrowPaddingObject[mainSide];
          var arrowPaddingMax = arrowPaddingObject[altSide];
          var arrowLen = within(0, referenceRect[len], arrowRect[len]);
          var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
          var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
          var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
          var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
          var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
          var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
          var tetherMax = offset2 + maxOffset - offsetModifierValue;
          var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
          popperOffsets2[mainAxis] = preventedOffset;
          data[mainAxis] = preventedOffset - offset2;
        }
        if (checkAltAxis) {
          var _offsetModifierState$2;
          var _mainSide = mainAxis === "x" ? top : left;
          var _altSide = mainAxis === "x" ? bottom : right;
          var _offset = popperOffsets2[altAxis];
          var _len = altAxis === "y" ? "height" : "width";
          var _min = _offset + overflow[_mainSide];
          var _max = _offset - overflow[_altSide];
          var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
          var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
          var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
          var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
          var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
          popperOffsets2[altAxis] = _preventedOffset;
          data[altAxis] = _preventedOffset - _offset;
        }
        state.modifiersData[name] = data;
      }
      var preventOverflow$1 = {
        name: "preventOverflow",
        enabled: true,
        phase: "main",
        fn: preventOverflow,
        requiresIfExists: ["offset"]
      };
      var toPaddingObject = function toPaddingObject2(padding, state) {
        padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
          placement: state.placement
        })) : padding;
        return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
      };
      function arrow(_ref) {
        var _state$modifiersData$;
        var state = _ref.state, name = _ref.name, options = _ref.options;
        var arrowElement = state.elements.arrow;
        var popperOffsets2 = state.modifiersData.popperOffsets;
        var basePlacement = getBasePlacement(state.placement);
        var axis = getMainAxisFromPlacement(basePlacement);
        var isVertical = [left, right].indexOf(basePlacement) >= 0;
        var len = isVertical ? "height" : "width";
        if (!arrowElement || !popperOffsets2) {
          return;
        }
        var paddingObject = toPaddingObject(options.padding, state);
        var arrowRect = getLayoutRect(arrowElement);
        var minProp = axis === "y" ? top : left;
        var maxProp = axis === "y" ? bottom : right;
        var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
        var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
        var arrowOffsetParent = getOffsetParent(arrowElement);
        var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
        var centerToReference = endDiff / 2 - startDiff / 2;
        var min2 = paddingObject[minProp];
        var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
        var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
        var offset2 = within(min2, center, max2);
        var axisProp = axis;
        state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
      }
      function effect(_ref2) {
        var state = _ref2.state, options = _ref2.options;
        var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
        if (arrowElement == null) {
          return;
        }
        if (typeof arrowElement === "string") {
          arrowElement = state.elements.popper.querySelector(arrowElement);
          if (!arrowElement) {
            return;
          }
        }
        if (true) {
          if (!isHTMLElement(arrowElement)) {
            console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "));
          }
        }
        if (!contains(state.elements.popper, arrowElement)) {
          if (true) {
            console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
          }
          return;
        }
        state.elements.arrow = arrowElement;
      }
      var arrow$1 = {
        name: "arrow",
        enabled: true,
        phase: "main",
        fn: arrow,
        effect,
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
      };
      function getSideOffsets(overflow, rect, preventedOffsets) {
        if (preventedOffsets === void 0) {
          preventedOffsets = {
            x: 0,
            y: 0
          };
        }
        return {
          top: overflow.top - rect.height - preventedOffsets.y,
          right: overflow.right - rect.width + preventedOffsets.x,
          bottom: overflow.bottom - rect.height + preventedOffsets.y,
          left: overflow.left - rect.width - preventedOffsets.x
        };
      }
      function isAnySideFullyClipped(overflow) {
        return [top, right, bottom, left].some(function(side) {
          return overflow[side] >= 0;
        });
      }
      function hide(_ref) {
        var state = _ref.state, name = _ref.name;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var preventedOffsets = state.modifiersData.preventOverflow;
        var referenceOverflow = detectOverflow(state, {
          elementContext: "reference"
        });
        var popperAltOverflow = detectOverflow(state, {
          altBoundary: true
        });
        var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
        var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
        var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
        var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
        state.modifiersData[name] = {
          referenceClippingOffsets,
          popperEscapeOffsets,
          isReferenceHidden,
          hasPopperEscaped
        };
        state.attributes.popper = Object.assign({}, state.attributes.popper, {
          "data-popper-reference-hidden": isReferenceHidden,
          "data-popper-escaped": hasPopperEscaped
        });
      }
      var hide$1 = {
        name: "hide",
        enabled: true,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: hide
      };
      var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
      var createPopper$1 = /* @__PURE__ */ popperGenerator({
        defaultModifiers: defaultModifiers$1
      });
      var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
      var createPopper2 = /* @__PURE__ */ popperGenerator({
        defaultModifiers
      });
      exports.applyStyles = applyStyles$1;
      exports.arrow = arrow$1;
      exports.computeStyles = computeStyles$1;
      exports.createPopper = createPopper2;
      exports.createPopperLite = createPopper$1;
      exports.defaultModifiers = defaultModifiers;
      exports.detectOverflow = detectOverflow;
      exports.eventListeners = eventListeners;
      exports.flip = flip$1;
      exports.hide = hide$1;
      exports.offset = offset$1;
      exports.popperGenerator = popperGenerator;
      exports.popperOffsets = popperOffsets$1;
      exports.preventOverflow = preventOverflow$1;
    }
  });

  // ns-hugo-imp:C:\workspace\repo\hugo\assets\hb\modules\custom\js\index.ts
  document.addEventListener("DOMContentLoaded", function() {
    const scrollPos = parseInt(sessionStorage.getItem("scrollPos") ?? "");
    const scrollUrl = sessionStorage.getItem("scrollUrl") ?? "";
    if (scrollPos > 0 && scrollUrl == location.href) {
      window.scroll({ top: scrollPos, left: 0, behavior: "smooth" });
    }
    sessionStorage.removeItem("scrollPos");
    sessionStorage.removeItem("scrollUrl");
  });
  window.addEventListener("beforeunload", function() {
    const scrollPos = window.scrollY > 0 ? window.scrollY : 0;
    sessionStorage.setItem("scrollPos", scrollPos.toString());
    sessionStorage.setItem("scrollUrl", location.href);
  });
  document.addEventListener("DOMContentLoaded", function() {
    const tempTextArea = document.createElement("textarea");
    const fnRefs = document.querySelectorAll(".footnote-ref");
    fnRefs.forEach(function(ref) {
      const fnID = (ref.getAttribute("href")?.substring(1) ?? "").replace(/:/g, "\\:");
      let fnContent = document.querySelector("#" + fnID + " p")?.innerHTML ?? "";
      tempTextArea.innerHTML = fnContent;
      fnContent = tempTextArea.value;
      fnContent = fnContent.replace(/<[^>]+>/g, "").replace(/↩︎/g, "").trim();
      console.log(fnContent);
      ref.setAttribute("title", fnContent);
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.getElementsByClassName("hb-blog-post-content")[0].getElementsByTagName("input");
    Array.from(checkboxes).forEach(function(cb) {
      cb.removeAttribute("disabled");
      cb.addEventListener("click", function(e) {
        e.preventDefault();
      });
    });
  });
  var LinkPreviewElem = class extends HTMLElement {
    static observedAttributes = ["url", "title", "desc", "image"];
    constructor() {
      super();
    }
    attributeChangedCallback(name, _oldValue, newValue) {
      if (name == "url") {
        this.renderSkeleton(newValue);
        this.checkAndFetchOpenGraphData(newValue);
      } else if (name === "title" || name === "desc" || name === "image") {
        this.renderFromAttributes();
      }
    }
    checkAndFetchOpenGraphData(url) {
      if (this.hasAttribute("title") && this.hasAttribute("desc") && this.hasAttribute("image")) {
        this.renderFromAttributes();
      } else {
        this.fetchOpenGraphData(url);
      }
    }
    renderSkeleton(url) {
      this.innerHTML = `
    <figure class="link-preview">
      <a class="lp-link" href="${url}" target="_blank" rel="noopener">
        <div class="lp-image lp-placeholder">&nbsp;</div>
        <div class="lp-text">
          <p class="lp-title lp-placeholder">Loading title...</p>
          <p class="lp-desc lp-placeholder">Loading description...</p>
          <p class="lp-host">${new URL(url).host}</p>
        </div>
      </a>
    </figure>
    `;
    }
    renderFromAttributes() {
      const url = this.getAttribute("url");
      if (!url) return;
      const title = this.getAttribute("title") || "";
      const desc = this.getAttribute("desc") || "";
      const image = this.getAttribute("image") || "";
      this.render({ title, desc, image }, url);
    }
    // @ts-ignore
    async fetchOpenGraphData(url) {
      const cachedData = localStorage.getItem(`LinkPreview: ${url}`);
      if (cachedData) {
        this.render(JSON.parse(cachedData), url);
        return;
      }
      try {
        const response = await fetch(
          `https://open-graph-api-coral.vercel.app/api/opengraph?url=${encodeURIComponent(url)}`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        const title = data.title?.trim() || this.getAttribute("title") || "";
        const desc = data.desc?.trim() || this.getAttribute("desc") || "";
        const image = data.image?.trim() || this.getAttribute("image") || "";
        const storedData = { title, desc, image };
        localStorage.setItem(`LinkPreview: ${url}`, JSON.stringify(storedData));
        this.render(storedData, url);
      } catch (e) {
        console.error("Fetch error: ", e);
      }
    }
    render(data, url) {
      const { title, desc, image } = data;
      this.innerHTML = `
    <figure class="link-preview">
      <a class="lp-link" href="${url}" target="_blank" rel="noopener">
        ${image ? `<div class="lp-image" style="background-image: url('${image}');">&nbsp;</div>` : ""}
        <div class="lp-text">
          <p class="lp-title">${title}</p>
          <p class="lp-desc">${desc}</p>
          <p class="lp-host">${new URL(url).host}</p>
        </div>
      </a>
    </figure>
    `;
    }
  };
  window.customElements.define("link-preview", LinkPreviewElem);

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\twbs\bootstrap@v5.3.7+incompatible\js\src\dropdown.js
  var Popper = __toESM(require_popper());

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\twbs\bootstrap@v5.3.7+incompatible\js\src\dom\data.js
  var elementMap = /* @__PURE__ */ new Map();
  var data_default = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, /* @__PURE__ */ new Map());
      }
      const instanceMap = elementMap.get(element);
      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }
      instanceMap.set(key, instance);
    },
    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }
      return null;
    },
    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }
      const instanceMap = elementMap.get(element);
      instanceMap.delete(key);
      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }
  };

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\twbs\bootstrap@v5.3.7+incompatible\js\src\util\index.js
  var MILLISECONDS_MULTIPLIER = 1e3;
  var TRANSITION_END = "transitionend";
  var parseSelector = (selector) => {
    if (selector && window.CSS && window.CSS.escape) {
      selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
    }
    return selector;
  };
  var toType = (object) => {
    if (object === null || object === void 0) {
      return `${object}`;
    }
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  var getTransitionDurationFromElement = (element) => {
    if (!element) {
      return 0;
    }
    let { transitionDuration, transitionDelay } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }
    transitionDuration = transitionDuration.split(",")[0];
    transitionDelay = transitionDelay.split(",")[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  var triggerTransitionEnd = (element) => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  var isElement = (object) => {
    if (!object || typeof object !== "object") {
      return false;
    }
    if (typeof object.jquery !== "undefined") {
      object = object[0];
    }
    return typeof object.nodeType !== "undefined";
  };
  var getElement = (object) => {
    if (isElement(object)) {
      return object.jquery ? object[0] : object;
    }
    if (typeof object === "string" && object.length > 0) {
      return document.querySelector(parseSelector(object));
    }
    return null;
  };
  var isVisible = (element) => {
    if (!isElement(element) || element.getClientRects().length === 0) {
      return false;
    }
    const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
    const closedDetails = element.closest("details:not([open])");
    if (!closedDetails) {
      return elementIsVisible;
    }
    if (closedDetails !== element) {
      const summary = element.closest("summary");
      if (summary && summary.parentNode !== closedDetails) {
        return false;
      }
      if (summary === null) {
        return false;
      }
    }
    return elementIsVisible;
  };
  var isDisabled = (element) => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }
    if (element.classList.contains("disabled")) {
      return true;
    }
    if (typeof element.disabled !== "undefined") {
      return element.disabled;
    }
    return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
  };
  var noop = () => {
  };
  var reflow = (element) => {
    element.offsetHeight;
  };
  var getjQuery = () => {
    if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
      return window.jQuery;
    }
    return null;
  };
  var DOMContentLoadedCallbacks = [];
  var onDOMContentLoaded = (callback) => {
    if (document.readyState === "loading") {
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener("DOMContentLoaded", () => {
          for (const callback2 of DOMContentLoadedCallbacks) {
            callback2();
          }
        });
      }
      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };
  var isRTL = () => document.documentElement.dir === "rtl";
  var defineJQueryPlugin = (plugin) => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      if ($) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  var execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
    return typeof possibleCallback === "function" ? possibleCallback.call(...args) : defaultValue;
  };
  var executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return;
    }
    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;
    const handler = ({ target }) => {
      if (target !== transitionElement) {
        return;
      }
      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };
  var getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    const listLength = list.length;
    let index = list.indexOf(activeElement);
    if (index === -1) {
      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }
    return list[Math.max(0, Math.min(index, listLength - 1))];
  };

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\twbs\bootstrap@v5.3.7+incompatible\js\src\dom\event-handler.js
  var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  var stripNameRegex = /\..*/;
  var stripUidRegex = /::\d+$/;
  var eventRegistry = {};
  var uidEvent = 1;
  var customEvents = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  };
  var nativeEvents = /* @__PURE__ */ new Set([
    "click",
    "dblclick",
    "mouseup",
    "mousedown",
    "contextmenu",
    "mousewheel",
    "DOMMouseScroll",
    "mouseover",
    "mouseout",
    "mousemove",
    "selectstart",
    "selectend",
    "keydown",
    "keypress",
    "keyup",
    "orientationchange",
    "touchstart",
    "touchmove",
    "touchend",
    "touchcancel",
    "pointerdown",
    "pointermove",
    "pointerup",
    "pointerleave",
    "pointercancel",
    "gesturestart",
    "gesturechange",
    "gestureend",
    "focus",
    "blur",
    "change",
    "reset",
    "select",
    "submit",
    "focusin",
    "focusout",
    "load",
    "unload",
    "beforeunload",
    "resize",
    "move",
    "DOMContentLoaded",
    "readystatechange",
    "error",
    "abort",
    "scroll"
  ]);
  function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }
  function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }
  function bootstrapHandler(element, fn) {
    return function handler(event) {
      hydrateObj(event, { delegateTarget: element });
      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }
      return fn.apply(element, [event]);
    };
  }
  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);
      for (let { target } = event; target && target !== this; target = target.parentNode) {
        for (const domElement of domElements) {
          if (domElement !== target) {
            continue;
          }
          hydrateObj(event, { delegateTarget: target });
          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn);
          }
          return fn.apply(target, [event]);
        }
      }
    };
  }
  function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find((event) => event.callable === callable && event.delegationSelector === delegationSelector);
  }
  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === "string";
    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);
    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }
    return [isDelegated, callable, typeEvent];
  }
  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== "string" || !element) {
      return;
    }
    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
    if (originalTypeEvent in customEvents) {
      const wrapFunction = (fn2) => {
        return function(event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn2.call(this, event);
          }
        };
      };
      callable = wrapFunction(callable);
    }
    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }
    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
    const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, isDelegated);
  }
  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) {
      return;
    }
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }
  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
      if (handlerKey.includes(namespace)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  }
  function getTypeEvent(event) {
    event = event.replace(stripNameRegex, "");
    return customEvents[event] || event;
  }
  var EventHandler = {
    on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
    },
    one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },
    off(element, originalTypeEvent, handler, delegationFunction) {
      if (typeof originalTypeEvent !== "string" || !element) {
        return;
      }
      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getElementEvents(element);
      const storeElementEvent = events[typeEvent] || {};
      const isNamespace = originalTypeEvent.startsWith(".");
      if (typeof callable !== "undefined") {
        if (!Object.keys(storeElementEvent).length) {
          return;
        }
        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
        return;
      }
      if (isNamespace) {
        for (const elementEvent of Object.keys(events)) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }
      for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
        const handlerKey = keyHandlers.replace(stripUidRegex, "");
        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
      }
    },
    trigger(element, event, args) {
      if (typeof event !== "string" || !element) {
        return null;
      }
      const $ = getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      let jQueryEvent = null;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }
      const evt = hydrateObj(new Event(event, { bubbles, cancelable: true }), args);
      if (defaultPrevented) {
        evt.preventDefault();
      }
      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }
      if (evt.defaultPrevented && jQueryEvent) {
        jQueryEvent.preventDefault();
      }
      return evt;
    }
  };
  function hydrateObj(obj, meta = {}) {
    for (const [key, value] of Object.entries(meta)) {
      try {
        obj[key] = value;
      } catch {
        Object.defineProperty(obj, key, {
          configurable: true,
          get() {
            return value;
          }
        });
      }
    }
    return obj;
  }
  var event_handler_default = EventHandler;

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\twbs\bootstrap@v5.3.7+incompatible\js\src\dom\manipulator.js
  function normalizeData(value) {
    if (value === "true") {
      return true;
    }
    if (value === "false") {
      return false;
    }
    if (value === Number(value).toString()) {
      return Number(value);
    }
    if (value === "" || value === "null") {
      return null;
    }
    if (typeof value !== "string") {
      return value;
    }
    try {
      return JSON.parse(decodeURIComponent(value));
    } catch {
      return value;
    }
  }
  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
  }
  var Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },
    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },
    getDataAttributes(element) {
      if (!element) {
        return {};
      }
      const attributes = {};
      const bsKeys = Object.keys(element.dataset).filter((key) => key.startsWith("bs") && !key.startsWith("bsConfig"));
      for (const key of bsKeys) {
        let pureKey = key.replace(/^bs/, "");
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }
      return attributes;
    },
    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    }
  };
  var manipulator_default = Manipulator;

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\twbs\bootstrap@v5.3.7+incompatible\js\src\util\config.js
  var Config = class {
    // Getters
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      return config;
    }
    _mergeConfigObj(config, element) {
      const jsonConfig = isElement(element) ? manipulator_default.getDataAttribute(element, "config") : {};
      return {
        ...this.constructor.Default,
        ...typeof jsonConfig === "object" ? jsonConfig : {},
        ...isElement(element) ? manipulator_default.getDataAttributes(element) : {},
        ...typeof config === "object" ? config : {}
      };
    }
    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
      for (const [property, expectedTypes] of Object.entries(configTypes)) {
        const value = config[property];
        const valueType = isElement(value) ? "element" : toType(value);
        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(
            `${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`
          );
        }
      }
    }
  };
  var config_default = Config;

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\twbs\bootstrap@v5.3.7+incompatible\js\src\base-component.js
  var VERSION = "5.3.7";
  var BaseComponent = class extends config_default {
    constructor(element, config) {
      super();
      element = getElement(element);
      if (!element) {
        return;
      }
      this._element = element;
      this._config = this._getConfig(config);
      data_default.set(this._element, this.constructor.DATA_KEY, this);
    }
    // Public
    dispose() {
      data_default.remove(this._element, this.constructor.DATA_KEY);
      event_handler_default.off(this._element, this.constructor.EVENT_KEY);
      for (const propertyName of Object.getOwnPropertyNames(this)) {
        this[propertyName] = null;
      }
    }
    // Private
    _queueCallback(callback, element, isAnimated = true) {
      executeAfterTransition(callback, element, isAnimated);
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    // Static
    static getInstance(element) {
      return data_default.get(getElement(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
    }
    static get VERSION() {
      return VERSION;
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(name) {
      return `${name}${this.EVENT_KEY}`;
    }
  };
  var base_component_default = BaseComponent;

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\twbs\bootstrap@v5.3.7+incompatible\js\src\dom\selector-engine.js
  var getSelector = (element) => {
    let selector = element.getAttribute("data-bs-target");
    if (!selector || selector === "#") {
      let hrefAttribute = element.getAttribute("href");
      if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) {
        return null;
      }
      if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
        hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
      }
      selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
    }
    return selector ? selector.split(",").map((sel) => parseSelector(sel)).join(",") : null;
  };
  var SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },
    children(element, selector) {
      return [].concat(...element.children).filter((child) => child.matches(selector));
    },
    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode.closest(selector);
      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }
      return parents;
    },
    prev(element, selector) {
      let previous = element.previousElementSibling;
      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }
        previous = previous.previousElementSibling;
      }
      return [];
    },
    // TODO: this is now unused; remove later along with prev()
    next(element, selector) {
      let next = element.nextElementSibling;
      while (next) {
        if (next.matches(selector)) {
          return [next];
        }
        next = next.nextElementSibling;
      }
      return [];
    },
    focusableChildren(element) {
      const focusables = [
        "a",
        "button",
        "input",
        "textarea",
        "select",
        "details",
        "[tabindex]",
        '[contenteditable="true"]'
      ].map((selector) => `${selector}:not([tabindex^="-"])`).join(",");
      return this.find(focusables, element).filter((el) => !isDisabled(el) && isVisible(el));
    },
    getSelectorFromElement(element) {
      const selector = getSelector(element);
      if (selector) {
        return SelectorEngine.findOne(selector) ? selector : null;
      }
      return null;
    },
    getElementFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.findOne(selector) : null;
    },
    getMultipleElementsFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.find(selector) : [];
    }
  };
  var selector_engine_default = SelectorEngine;

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\twbs\bootstrap@v5.3.7+incompatible\js\src\dropdown.js
  var NAME = "dropdown";
  var DATA_KEY = "bs.dropdown";
  var EVENT_KEY = `.${DATA_KEY}`;
  var DATA_API_KEY = ".data-api";
  var ESCAPE_KEY = "Escape";
  var TAB_KEY = "Tab";
  var ARROW_UP_KEY = "ArrowUp";
  var ARROW_DOWN_KEY = "ArrowDown";
  var RIGHT_MOUSE_BUTTON = 2;
  var EVENT_HIDE = `hide${EVENT_KEY}`;
  var EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  var EVENT_SHOW = `show${EVENT_KEY}`;
  var EVENT_SHOWN = `shown${EVENT_KEY}`;
  var EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  var EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY}${DATA_API_KEY}`;
  var EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY}${DATA_API_KEY}`;
  var CLASS_NAME_SHOW = "show";
  var CLASS_NAME_DROPUP = "dropup";
  var CLASS_NAME_DROPEND = "dropend";
  var CLASS_NAME_DROPSTART = "dropstart";
  var CLASS_NAME_DROPUP_CENTER = "dropup-center";
  var CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
  var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
  var SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE}.${CLASS_NAME_SHOW}`;
  var SELECTOR_MENU = ".dropdown-menu";
  var SELECTOR_NAVBAR = ".navbar";
  var SELECTOR_NAVBAR_NAV = ".navbar-nav";
  var SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
  var PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
  var PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
  var PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
  var PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
  var PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
  var PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
  var PLACEMENT_TOPCENTER = "top";
  var PLACEMENT_BOTTOMCENTER = "bottom";
  var Default = {
    autoClose: true,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle"
  };
  var DefaultType = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
  };
  var Dropdown = class _Dropdown extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._popper = null;
      this._parent = this._element.parentNode;
      this._menu = selector_engine_default.next(this._element, SELECTOR_MENU)[0] || selector_engine_default.prev(this._element, SELECTOR_MENU)[0] || selector_engine_default.findOne(SELECTOR_MENU, this._parent);
      this._inNavbar = this._detectNavbar();
    }
    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }
    // Public
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (isDisabled(this._element) || this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = event_handler_default.trigger(this._element, EVENT_SHOW, relatedTarget);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._createPopper();
      if ("ontouchstart" in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
        for (const element of [].concat(...document.body.children)) {
          event_handler_default.on(element, "mouseover", noop);
        }
      }
      this._element.focus();
      this._element.setAttribute("aria-expanded", true);
      this._menu.classList.add(CLASS_NAME_SHOW);
      this._element.classList.add(CLASS_NAME_SHOW);
      event_handler_default.trigger(this._element, EVENT_SHOWN, relatedTarget);
    }
    hide() {
      if (isDisabled(this._element) || !this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      this._completeHide(relatedTarget);
    }
    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }
      super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar();
      if (this._popper) {
        this._popper.update();
      }
    }
    // Private
    _completeHide(relatedTarget) {
      const hideEvent = event_handler_default.trigger(this._element, EVENT_HIDE, relatedTarget);
      if (hideEvent.defaultPrevented) {
        return;
      }
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          event_handler_default.off(element, "mouseover", noop);
        }
      }
      if (this._popper) {
        this._popper.destroy();
      }
      this._menu.classList.remove(CLASS_NAME_SHOW);
      this._element.classList.remove(CLASS_NAME_SHOW);
      this._element.setAttribute("aria-expanded", "false");
      manipulator_default.removeDataAttribute(this._menu, "popper");
      event_handler_default.trigger(this._element, EVENT_HIDDEN, relatedTarget);
      this._element.focus();
    }
    _getConfig(config) {
      config = super._getConfig(config);
      if (typeof config.reference === "object" && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== "function") {
        throw new TypeError(`${NAME.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      }
      return config;
    }
    _createPopper() {
      if (typeof Popper === "undefined") {
        throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
      }
      let referenceElement = this._element;
      if (this._config.reference === "parent") {
        referenceElement = this._parent;
      } else if (isElement(this._config.reference)) {
        referenceElement = getElement(this._config.reference);
      } else if (typeof this._config.reference === "object") {
        referenceElement = this._config.reference;
      }
      const popperConfig = this._getPopperConfig();
      this._popper = Popper.createPopper(referenceElement, this._menu, popperConfig);
    }
    _isShown() {
      return this._menu.classList.contains(CLASS_NAME_SHOW);
    }
    _getPlacement() {
      const parentDropdown = this._parent;
      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
        return PLACEMENT_TOPCENTER;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
        return PLACEMENT_BOTTOMCENTER;
      }
      const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }
      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
    _detectNavbar() {
      return this._element.closest(SELECTOR_NAVBAR) !== null;
    }
    _getOffset() {
      const { offset } = this._config;
      if (typeof offset === "string") {
        return offset.split(",").map((value) => Number.parseInt(value, 10));
      }
      if (typeof offset === "function") {
        return (popperData) => offset(popperData, this._element);
      }
      return offset;
    }
    _getPopperConfig() {
      const defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          },
          {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }
        ]
      };
      if (this._inNavbar || this._config.display === "static") {
        manipulator_default.setDataAttribute(this._menu, "popper", "static");
        defaultBsPopperConfig.modifiers = [{
          name: "applyStyles",
          enabled: false
        }];
      }
      return {
        ...defaultBsPopperConfig,
        ...execute(this._config.popperConfig, [void 0, defaultBsPopperConfig])
      };
    }
    _selectMenuItem({ key, target }) {
      const items = selector_engine_default.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter((element) => isVisible(element));
      if (!items.length) {
        return;
      }
      getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Dropdown.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
    static clearMenus(event) {
      if (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY) {
        return;
      }
      const openToggles = selector_engine_default.find(SELECTOR_DATA_TOGGLE_SHOWN);
      for (const toggle of openToggles) {
        const context = _Dropdown.getInstance(toggle);
        if (!context || context._config.autoClose === false) {
          continue;
        }
        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);
        if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) {
          continue;
        }
        if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === TAB_KEY || /input|select|option|textarea|form/i.test(event.target.tagName))) {
          continue;
        }
        const relatedTarget = { relatedTarget: context._element };
        if (event.type === "click") {
          relatedTarget.clickEvent = event;
        }
        context._completeHide(relatedTarget);
      }
    }
    static dataApiKeydownHandler(event) {
      const isInput = /input|textarea/i.test(event.target.tagName);
      const isEscapeEvent = event.key === ESCAPE_KEY;
      const isUpOrDownEvent = [ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key);
      if (!isUpOrDownEvent && !isEscapeEvent) {
        return;
      }
      if (isInput && !isEscapeEvent) {
        return;
      }
      event.preventDefault();
      const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE) ? this : selector_engine_default.prev(this, SELECTOR_DATA_TOGGLE)[0] || selector_engine_default.next(this, SELECTOR_DATA_TOGGLE)[0] || selector_engine_default.findOne(SELECTOR_DATA_TOGGLE, event.delegateTarget.parentNode);
      const instance = _Dropdown.getOrCreateInstance(getToggleButton);
      if (isUpOrDownEvent) {
        event.stopPropagation();
        instance.show();
        instance._selectMenuItem(event);
        return;
      }
      if (instance._isShown()) {
        event.stopPropagation();
        instance.hide();
        getToggleButton.focus();
      }
    }
  };
  event_handler_default.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE, Dropdown.dataApiKeydownHandler);
  event_handler_default.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  event_handler_default.on(document, EVENT_CLICK_DATA_API, Dropdown.clearMenus);
  event_handler_default.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  event_handler_default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });
  defineJQueryPlugin(Dropdown);

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\twbs\bootstrap@v5.3.7+incompatible\js\src\util\backdrop.js
  var NAME2 = "backdrop";
  var CLASS_NAME_FADE = "fade";
  var CLASS_NAME_SHOW2 = "show";
  var EVENT_MOUSEDOWN = `mousedown.bs.${NAME2}`;
  var Default2 = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: "body"
    // give the choice to place backdrop under different elements
  };
  var DefaultType2 = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
  };
  var Backdrop = class extends config_default {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }
    // Getters
    static get Default() {
      return Default2;
    }
    static get DefaultType() {
      return DefaultType2;
    }
    static get NAME() {
      return NAME2;
    }
    // Public
    show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._append();
      const element = this._getElement();
      if (this._config.isAnimated) {
        reflow(element);
      }
      element.classList.add(CLASS_NAME_SHOW2);
      this._emulateAnimation(() => {
        execute(callback);
      });
    }
    hide(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._getElement().classList.remove(CLASS_NAME_SHOW2);
      this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
      });
    }
    dispose() {
      if (!this._isAppended) {
        return;
      }
      event_handler_default.off(this._element, EVENT_MOUSEDOWN);
      this._element.remove();
      this._isAppended = false;
    }
    // Private
    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement("div");
        backdrop.className = this._config.className;
        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE);
        }
        this._element = backdrop;
      }
      return this._element;
    }
    _configAfterMerge(config) {
      config.rootElement = getElement(config.rootElement);
      return config;
    }
    _append() {
      if (this._isAppended) {
        return;
      }
      const element = this._getElement();
      this._config.rootElement.append(element);
      event_handler_default.on(element, EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }
    _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
  };
  var backdrop_default = Backdrop;

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\twbs\bootstrap@v5.3.7+incompatible\js\src\util\component-functions.js
  var enableDismissTrigger = (component, method = "hide") => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    event_handler_default.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
      if (["A", "AREA"].includes(this.tagName)) {
        event.preventDefault();
      }
      if (isDisabled(this)) {
        return;
      }
      const target = selector_engine_default.getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target);
      instance[method]();
    });
  };

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\twbs\bootstrap@v5.3.7+incompatible\js\src\util\focustrap.js
  var NAME3 = "focustrap";
  var DATA_KEY2 = "bs.focustrap";
  var EVENT_KEY2 = `.${DATA_KEY2}`;
  var EVENT_FOCUSIN = `focusin${EVENT_KEY2}`;
  var EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY2}`;
  var TAB_KEY2 = "Tab";
  var TAB_NAV_FORWARD = "forward";
  var TAB_NAV_BACKWARD = "backward";
  var Default3 = {
    autofocus: true,
    trapElement: null
    // The element to trap focus inside of
  };
  var DefaultType3 = {
    autofocus: "boolean",
    trapElement: "element"
  };
  var FocusTrap = class extends config_default {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    }
    // Getters
    static get Default() {
      return Default3;
    }
    static get DefaultType() {
      return DefaultType3;
    }
    static get NAME() {
      return NAME3;
    }
    // Public
    activate() {
      if (this._isActive) {
        return;
      }
      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }
      event_handler_default.off(document, EVENT_KEY2);
      event_handler_default.on(document, EVENT_FOCUSIN, (event) => this._handleFocusin(event));
      event_handler_default.on(document, EVENT_KEYDOWN_TAB, (event) => this._handleKeydown(event));
      this._isActive = true;
    }
    deactivate() {
      if (!this._isActive) {
        return;
      }
      this._isActive = false;
      event_handler_default.off(document, EVENT_KEY2);
    }
    // Private
    _handleFocusin(event) {
      const { trapElement } = this._config;
      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }
      const elements = selector_engine_default.focusableChildren(trapElement);
      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }
    _handleKeydown(event) {
      if (event.key !== TAB_KEY2) {
        return;
      }
      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
  };
  var focustrap_default = FocusTrap;

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\twbs\bootstrap@v5.3.7+incompatible\js\src\util\scrollbar.js
  var SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
  var SELECTOR_STICKY_CONTENT = ".sticky-top";
  var PROPERTY_PADDING = "padding-right";
  var PROPERTY_MARGIN = "margin-right";
  var ScrollBarHelper = class {
    constructor() {
      this._element = document.body;
    }
    // Public
    getWidth() {
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
      const width = this.getWidth();
      this._disableOverFlow();
      this._setElementAttributes(this._element, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, (calculatedValue) => calculatedValue - width);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow");
      this._resetElementAttributes(this._element, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    // Private
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow");
      this._element.style.overflow = "hidden";
    }
    _setElementAttributes(selector, styleProperty, callback) {
      const scrollbarWidth = this.getWidth();
      const manipulationCallBack = (element) => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }
        this._saveInitialAttribute(element, styleProperty);
        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _saveInitialAttribute(element, styleProperty) {
      const actualValue = element.style.getPropertyValue(styleProperty);
      if (actualValue) {
        manipulator_default.setDataAttribute(element, styleProperty, actualValue);
      }
    }
    _resetElementAttributes(selector, styleProperty) {
      const manipulationCallBack = (element) => {
        const value = manipulator_default.getDataAttribute(element, styleProperty);
        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }
        manipulator_default.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
      if (isElement(selector)) {
        callBack(selector);
        return;
      }
      for (const sel of selector_engine_default.find(selector, this._element)) {
        callBack(sel);
      }
    }
  };
  var scrollbar_default = ScrollBarHelper;

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\twbs\bootstrap@v5.3.7+incompatible\js\src\offcanvas.js
  var NAME4 = "offcanvas";
  var DATA_KEY3 = "bs.offcanvas";
  var EVENT_KEY3 = `.${DATA_KEY3}`;
  var DATA_API_KEY2 = ".data-api";
  var EVENT_LOAD_DATA_API = `load${EVENT_KEY3}${DATA_API_KEY2}`;
  var ESCAPE_KEY2 = "Escape";
  var CLASS_NAME_SHOW3 = "show";
  var CLASS_NAME_SHOWING = "showing";
  var CLASS_NAME_HIDING = "hiding";
  var CLASS_NAME_BACKDROP = "offcanvas-backdrop";
  var OPEN_SELECTOR = ".offcanvas.show";
  var EVENT_SHOW2 = `show${EVENT_KEY3}`;
  var EVENT_SHOWN2 = `shown${EVENT_KEY3}`;
  var EVENT_HIDE2 = `hide${EVENT_KEY3}`;
  var EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY3}`;
  var EVENT_HIDDEN2 = `hidden${EVENT_KEY3}`;
  var EVENT_RESIZE = `resize${EVENT_KEY3}`;
  var EVENT_CLICK_DATA_API2 = `click${EVENT_KEY3}${DATA_API_KEY2}`;
  var EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY3}`;
  var SELECTOR_DATA_TOGGLE2 = '[data-bs-toggle="offcanvas"]';
  var Default4 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  var DefaultType4 = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
  };
  var Offcanvas = class _Offcanvas extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._addEventListeners();
    }
    // Getters
    static get Default() {
      return Default4;
    }
    static get DefaultType() {
      return DefaultType4;
    }
    static get NAME() {
      return NAME4;
    }
    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown) {
        return;
      }
      const showEvent = event_handler_default.trigger(this._element, EVENT_SHOW2, { relatedTarget });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._backdrop.show();
      if (!this._config.scroll) {
        new scrollbar_default().hide();
      }
      this._element.setAttribute("aria-modal", true);
      this._element.setAttribute("role", "dialog");
      this._element.classList.add(CLASS_NAME_SHOWING);
      const completeCallBack = () => {
        if (!this._config.scroll || this._config.backdrop) {
          this._focustrap.activate();
        }
        this._element.classList.add(CLASS_NAME_SHOW3);
        this._element.classList.remove(CLASS_NAME_SHOWING);
        event_handler_default.trigger(this._element, EVENT_SHOWN2, { relatedTarget });
      };
      this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
      if (!this._isShown) {
        return;
      }
      const hideEvent = event_handler_default.trigger(this._element, EVENT_HIDE2);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._focustrap.deactivate();
      this._element.blur();
      this._isShown = false;
      this._element.classList.add(CLASS_NAME_HIDING);
      this._backdrop.hide();
      const completeCallback = () => {
        this._element.classList.remove(CLASS_NAME_SHOW3, CLASS_NAME_HIDING);
        this._element.removeAttribute("aria-modal");
        this._element.removeAttribute("role");
        if (!this._config.scroll) {
          new scrollbar_default().reset();
        }
        event_handler_default.trigger(this._element, EVENT_HIDDEN2);
      };
      this._queueCallback(completeCallback, this._element, true);
    }
    dispose() {
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    // Private
    _initializeBackDrop() {
      const clickCallback = () => {
        if (this._config.backdrop === "static") {
          event_handler_default.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }
        this.hide();
      };
      const isVisible2 = Boolean(this._config.backdrop);
      return new backdrop_default({
        className: CLASS_NAME_BACKDROP,
        isVisible: isVisible2,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: isVisible2 ? clickCallback : null
      });
    }
    _initializeFocusTrap() {
      return new focustrap_default({
        trapElement: this._element
      });
    }
    _addEventListeners() {
      event_handler_default.on(this._element, EVENT_KEYDOWN_DISMISS, (event) => {
        if (event.key !== ESCAPE_KEY2) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        event_handler_default.trigger(this._element, EVENT_HIDE_PREVENTED);
      });
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Offcanvas.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  };
  event_handler_default.on(document, EVENT_CLICK_DATA_API2, SELECTOR_DATA_TOGGLE2, function(event) {
    const target = selector_engine_default.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    event_handler_default.one(target, EVENT_HIDDEN2, () => {
      if (isVisible(this)) {
        this.focus();
      }
    });
    const alreadyOpen = selector_engine_default.findOne(OPEN_SELECTOR);
    if (alreadyOpen && alreadyOpen !== target) {
      Offcanvas.getInstance(alreadyOpen).hide();
    }
    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  event_handler_default.on(window, EVENT_LOAD_DATA_API, () => {
    for (const selector of selector_engine_default.find(OPEN_SELECTOR)) {
      Offcanvas.getOrCreateInstance(selector).show();
    }
  });
  event_handler_default.on(window, EVENT_RESIZE, () => {
    for (const element of selector_engine_default.find("[aria-modal][class*=show][class*=offcanvas-]")) {
      if (getComputedStyle(element).position !== "fixed") {
        Offcanvas.getOrCreateInstance(element).hide();
      }
    }
  });
  enableDismissTrigger(Offcanvas);
  defineJQueryPlugin(Offcanvas);

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\hbstack\header@v0.16.6\assets\hb\modules\header\js\index.ts
  (() => {
    document.addEventListener("DOMContentLoaded", () => {
      const header4 = document.querySelector(".hb-header");
      const nav = header4.querySelector(".hb-header-nav");
      if (!header4) {
        return;
      }
      const activeMenu = (menu) => {
        menu.classList.add("active");
        menu.setAttribute("aria-current", "page");
        menu.parentElement?.classList.add("active");
        if (menu.classList.contains("dropdown-item-child")) {
          menu.closest(".dropdown-item")?.classList.add("active");
        }
        const parent = menu.closest(".hb-header-menu");
        parent?.classList.add("active");
        parent?.querySelector(".nav-link:first-child")?.classList.add("active");
      };
      const isMenuParent = (parent) => {
        const href = parent.getAttribute("href");
        if (!href) {
          return false;
        }
        return window.location.href.indexOf(href) !== -1 || window.location.pathname.indexOf(href) !== -1;
      };
      const menus = nav.querySelectorAll(`.hb-header-menus a[href="${window.location.href}"],.hb-header-menus a[href="${window.location.pathname}"]`);
      if (menus.length > 0) {
        menus.forEach((menu) => {
          activeMenu(menu);
        });
      } else {
        let foundParent = false;
        const submenus = Array.from(document.querySelectorAll("a.hb-header-submenu"));
        for (let menu of submenus) {
          if (isMenuParent(menu)) {
            activeMenu(menu);
            foundParent = true;
            break;
          }
        }
        if (!foundParent) {
          for (let menu of Array.from(nav.querySelectorAll("a.nav-link"))) {
            if (isMenuParent(menu)) {
              activeMenu(menu);
              break;
            }
          }
        }
      }
      const shadow = () => {
        nav.classList.add("shadow-sm");
      };
      const removeShadow = () => {
        nav.classList.contains("shadow-sm") && nav.classList.remove("shadow-sm");
      };
      const show = () => {
        nav.style.removeProperty("opacity");
        nav.style.removeProperty("z-index");
      };
      const hide = () => {
        nav.style.opacity = "0";
        nav.style.zIndex = "0";
      };
      let h = 0;
      const threshold = 20;
      if (document.documentElement.scrollTop !== 0) {
        header4.classList.add("scrolling");
      }
      const isMobile = () => {
        return window.innerWidth < 576;
      };
      window.addEventListener("resize", () => {
        if (!isMobile()) {
          show();
        }
      });
      window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop === 0) {
          header4.classList.remove("scrolling");
          removeShadow();
        } else {
          header4.classList.add("scrolling");
          shadow();
        }
        if (isMobile() && Math.abs(document.documentElement.scrollTop - h) > threshold) {
          document.documentElement.scrollTop > h ? hide() : show();
          h = document.documentElement.scrollTop;
        }
      });
    });
  })();

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\twbs\bootstrap@v5.3.7+incompatible\js\src\util\swipe.js
  var NAME5 = "swipe";
  var EVENT_KEY4 = ".bs.swipe";
  var EVENT_TOUCHSTART = `touchstart${EVENT_KEY4}`;
  var EVENT_TOUCHMOVE = `touchmove${EVENT_KEY4}`;
  var EVENT_TOUCHEND = `touchend${EVENT_KEY4}`;
  var EVENT_POINTERDOWN = `pointerdown${EVENT_KEY4}`;
  var EVENT_POINTERUP = `pointerup${EVENT_KEY4}`;
  var POINTER_TYPE_TOUCH = "touch";
  var POINTER_TYPE_PEN = "pen";
  var CLASS_NAME_POINTER_EVENT = "pointer-event";
  var SWIPE_THRESHOLD = 40;
  var Default5 = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  };
  var DefaultType5 = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
  };
  var Swipe = class _Swipe extends config_default {
    constructor(element, config) {
      super();
      this._element = element;
      if (!element || !_Swipe.isSupported()) {
        return;
      }
      this._config = this._getConfig(config);
      this._deltaX = 0;
      this._supportPointerEvents = Boolean(window.PointerEvent);
      this._initEvents();
    }
    // Getters
    static get Default() {
      return Default5;
    }
    static get DefaultType() {
      return DefaultType5;
    }
    static get NAME() {
      return NAME5;
    }
    // Public
    dispose() {
      event_handler_default.off(this._element, EVENT_KEY4);
    }
    // Private
    _start(event) {
      if (!this._supportPointerEvents) {
        this._deltaX = event.touches[0].clientX;
        return;
      }
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX;
      }
    }
    _end(event) {
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX - this._deltaX;
      }
      this._handleSwipe();
      execute(this._config.endCallback);
    }
    _move(event) {
      this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const absDeltaX = Math.abs(this._deltaX);
      if (absDeltaX <= SWIPE_THRESHOLD) {
        return;
      }
      const direction = absDeltaX / this._deltaX;
      this._deltaX = 0;
      if (!direction) {
        return;
      }
      execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      if (this._supportPointerEvents) {
        event_handler_default.on(this._element, EVENT_POINTERDOWN, (event) => this._start(event));
        event_handler_default.on(this._element, EVENT_POINTERUP, (event) => this._end(event));
        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        event_handler_default.on(this._element, EVENT_TOUCHSTART, (event) => this._start(event));
        event_handler_default.on(this._element, EVENT_TOUCHMOVE, (event) => this._move(event));
        event_handler_default.on(this._element, EVENT_TOUCHEND, (event) => this._end(event));
      }
    }
    _eventIsPointerPenTouch(event) {
      return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    }
    // Static
    static isSupported() {
      return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
  };
  var swipe_default = Swipe;

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\twbs\bootstrap@v5.3.7+incompatible\js\src\carousel.js
  var NAME6 = "carousel";
  var DATA_KEY4 = "bs.carousel";
  var EVENT_KEY5 = `.${DATA_KEY4}`;
  var DATA_API_KEY3 = ".data-api";
  var ARROW_LEFT_KEY = "ArrowLeft";
  var ARROW_RIGHT_KEY = "ArrowRight";
  var TOUCHEVENT_COMPAT_WAIT = 500;
  var ORDER_NEXT = "next";
  var ORDER_PREV = "prev";
  var DIRECTION_LEFT = "left";
  var DIRECTION_RIGHT = "right";
  var EVENT_SLIDE = `slide${EVENT_KEY5}`;
  var EVENT_SLID = `slid${EVENT_KEY5}`;
  var EVENT_KEYDOWN = `keydown${EVENT_KEY5}`;
  var EVENT_MOUSEENTER = `mouseenter${EVENT_KEY5}`;
  var EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY5}`;
  var EVENT_DRAG_START = `dragstart${EVENT_KEY5}`;
  var EVENT_LOAD_DATA_API2 = `load${EVENT_KEY5}${DATA_API_KEY3}`;
  var EVENT_CLICK_DATA_API3 = `click${EVENT_KEY5}${DATA_API_KEY3}`;
  var CLASS_NAME_CAROUSEL = "carousel";
  var CLASS_NAME_ACTIVE = "active";
  var CLASS_NAME_SLIDE = "slide";
  var CLASS_NAME_END = "carousel-item-end";
  var CLASS_NAME_START = "carousel-item-start";
  var CLASS_NAME_NEXT = "carousel-item-next";
  var CLASS_NAME_PREV = "carousel-item-prev";
  var SELECTOR_ACTIVE = ".active";
  var SELECTOR_ITEM = ".carousel-item";
  var SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
  var SELECTOR_ITEM_IMG = ".carousel-item img";
  var SELECTOR_INDICATORS = ".carousel-indicators";
  var SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
  var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  var KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY]: DIRECTION_LEFT
  };
  var Default6 = {
    interval: 5e3,
    keyboard: true,
    pause: "hover",
    ride: false,
    touch: true,
    wrap: true
  };
  var DefaultType6 = {
    interval: "(number|boolean)",
    // TODO:v6 remove boolean support
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
  };
  var Carousel = class _Carousel extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._interval = null;
      this._activeElement = null;
      this._isSliding = false;
      this.touchTimeout = null;
      this._swipeHelper = null;
      this._indicatorsElement = selector_engine_default.findOne(SELECTOR_INDICATORS, this._element);
      this._addEventListeners();
      if (this._config.ride === CLASS_NAME_CAROUSEL) {
        this.cycle();
      }
    }
    // Getters
    static get Default() {
      return Default6;
    }
    static get DefaultType() {
      return DefaultType6;
    }
    static get NAME() {
      return NAME6;
    }
    // Public
    next() {
      this._slide(ORDER_NEXT);
    }
    nextWhenVisible() {
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    }
    prev() {
      this._slide(ORDER_PREV);
    }
    pause() {
      if (this._isSliding) {
        triggerTransitionEnd(this._element);
      }
      this._clearInterval();
    }
    cycle() {
      this._clearInterval();
      this._updateInterval();
      this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
      if (!this._config.ride) {
        return;
      }
      if (this._isSliding) {
        event_handler_default.one(this._element, EVENT_SLID, () => this.cycle());
        return;
      }
      this.cycle();
    }
    to(index) {
      const items = this._getItems();
      if (index > items.length - 1 || index < 0) {
        return;
      }
      if (this._isSliding) {
        event_handler_default.one(this._element, EVENT_SLID, () => this.to(index));
        return;
      }
      const activeIndex = this._getItemIndex(this._getActive());
      if (activeIndex === index) {
        return;
      }
      const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
      this._slide(order, items[index]);
    }
    dispose() {
      if (this._swipeHelper) {
        this._swipeHelper.dispose();
      }
      super.dispose();
    }
    // Private
    _configAfterMerge(config) {
      config.defaultInterval = config.interval;
      return config;
    }
    _addEventListeners() {
      if (this._config.keyboard) {
        event_handler_default.on(this._element, EVENT_KEYDOWN, (event) => this._keydown(event));
      }
      if (this._config.pause === "hover") {
        event_handler_default.on(this._element, EVENT_MOUSEENTER, () => this.pause());
        event_handler_default.on(this._element, EVENT_MOUSELEAVE, () => this._maybeEnableCycle());
      }
      if (this._config.touch && swipe_default.isSupported()) {
        this._addTouchEventListeners();
      }
    }
    _addTouchEventListeners() {
      for (const img of selector_engine_default.find(SELECTOR_ITEM_IMG, this._element)) {
        event_handler_default.on(img, EVENT_DRAG_START, (event) => event.preventDefault());
      }
      const endCallBack = () => {
        if (this._config.pause !== "hover") {
          return;
        }
        this.pause();
        if (this.touchTimeout) {
          clearTimeout(this.touchTimeout);
        }
        this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
      };
      const swipeConfig = {
        leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
        rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
        endCallback: endCallBack
      };
      this._swipeHelper = new swipe_default(this._element, swipeConfig);
    }
    _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }
      const direction = KEY_TO_DIRECTION[event.key];
      if (direction) {
        event.preventDefault();
        this._slide(this._directionToOrder(direction));
      }
    }
    _getItemIndex(element) {
      return this._getItems().indexOf(element);
    }
    _setActiveIndicatorElement(index) {
      if (!this._indicatorsElement) {
        return;
      }
      const activeIndicator = selector_engine_default.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE);
      activeIndicator.removeAttribute("aria-current");
      const newActiveIndicator = selector_engine_default.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
      if (newActiveIndicator) {
        newActiveIndicator.classList.add(CLASS_NAME_ACTIVE);
        newActiveIndicator.setAttribute("aria-current", "true");
      }
    }
    _updateInterval() {
      const element = this._activeElement || this._getActive();
      if (!element) {
        return;
      }
      const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
      this._config.interval = elementInterval || this._config.defaultInterval;
    }
    _slide(order, element = null) {
      if (this._isSliding) {
        return;
      }
      const activeElement = this._getActive();
      const isNext = order === ORDER_NEXT;
      const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
      if (nextElement === activeElement) {
        return;
      }
      const nextElementIndex = this._getItemIndex(nextElement);
      const triggerEvent = (eventName) => {
        return event_handler_default.trigger(this._element, eventName, {
          relatedTarget: nextElement,
          direction: this._orderToDirection(order),
          from: this._getItemIndex(activeElement),
          to: nextElementIndex
        });
      };
      const slideEvent = triggerEvent(EVENT_SLIDE);
      if (slideEvent.defaultPrevented) {
        return;
      }
      if (!activeElement || !nextElement) {
        return;
      }
      const isCycling = Boolean(this._interval);
      this.pause();
      this._isSliding = true;
      this._setActiveIndicatorElement(nextElementIndex);
      this._activeElement = nextElement;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);
      const completeCallBack = () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE);
        activeElement.classList.remove(CLASS_NAME_ACTIVE, orderClassName, directionalClassName);
        this._isSliding = false;
        triggerEvent(EVENT_SLID);
      };
      this._queueCallback(completeCallBack, activeElement, this._isAnimated());
      if (isCycling) {
        this.cycle();
      }
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_SLIDE);
    }
    _getActive() {
      return selector_engine_default.findOne(SELECTOR_ACTIVE_ITEM, this._element);
    }
    _getItems() {
      return selector_engine_default.find(SELECTOR_ITEM, this._element);
    }
    _clearInterval() {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
    }
    _directionToOrder(direction) {
      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }
      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
    _orderToDirection(order) {
      if (isRTL()) {
        return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }
      return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Carousel.getOrCreateInstance(this, config);
        if (typeof config === "number") {
          data.to(config);
          return;
        }
        if (typeof config === "string") {
          if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  event_handler_default.on(document, EVENT_CLICK_DATA_API3, SELECTOR_DATA_SLIDE, function(event) {
    const target = selector_engine_default.getElementFromSelector(this);
    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }
    event.preventDefault();
    const carousel = Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute("data-bs-slide-to");
    if (slideIndex) {
      carousel.to(slideIndex);
      carousel._maybeEnableCycle();
      return;
    }
    if (manipulator_default.getDataAttribute(this, "slide") === "next") {
      carousel.next();
      carousel._maybeEnableCycle();
      return;
    }
    carousel.prev();
    carousel._maybeEnableCycle();
  });
  event_handler_default.on(window, EVENT_LOAD_DATA_API2, () => {
    const carousels = selector_engine_default.find(SELECTOR_DATA_RIDE);
    for (const carousel of carousels) {
      Carousel.getOrCreateInstance(carousel);
    }
  });
  defineJQueryPlugin(Carousel);
  var carousel_default = Carousel;

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\hbstack\carousel@v0.2.7\assets\hb\modules\carousel\js\index.ts
  (() => {
    document.querySelectorAll(".carousel").forEach((el) => {
      new carousel_default(el);
    });
  })();

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\hbstack\socials@v0.19.0\assets\hb\modules\socials\js\index.ts
  var isSafari = () => {
    const ua = navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") !== -1 && ua.indexOf("chrome") === -1;
  };
  (() => {
    if (isSafari()) {
      document.querySelectorAll("a[data-rss-feed]").forEach((link) => {
        link.href = "feed:" + link.href;
      });
    }
  })();

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\twbs\bootstrap@v5.3.7+incompatible\js\src\scrollspy.js
  var NAME7 = "scrollspy";
  var DATA_KEY5 = "bs.scrollspy";
  var EVENT_KEY6 = `.${DATA_KEY5}`;
  var DATA_API_KEY4 = ".data-api";
  var EVENT_ACTIVATE = `activate${EVENT_KEY6}`;
  var EVENT_CLICK = `click${EVENT_KEY6}`;
  var EVENT_LOAD_DATA_API3 = `load${EVENT_KEY6}${DATA_API_KEY4}`;
  var CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
  var CLASS_NAME_ACTIVE2 = "active";
  var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  var SELECTOR_TARGET_LINKS = "[href]";
  var SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
  var SELECTOR_NAV_LINKS = ".nav-link";
  var SELECTOR_NAV_ITEMS = ".nav-item";
  var SELECTOR_LIST_ITEMS = ".list-group-item";
  var SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
  var SELECTOR_DROPDOWN = ".dropdown";
  var SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
  var Default7 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "0px 0px -25%",
    smoothScroll: false,
    target: null,
    threshold: [0.1, 0.5, 1]
  };
  var DefaultType7 = {
    offset: "(number|null)",
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
  };
  var ScrollSpy = class _ScrollSpy extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._targetLinks = /* @__PURE__ */ new Map();
      this._observableSections = /* @__PURE__ */ new Map();
      this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element;
      this._activeTarget = null;
      this._observer = null;
      this._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      };
      this.refresh();
    }
    // Getters
    static get Default() {
      return Default7;
    }
    static get DefaultType() {
      return DefaultType7;
    }
    static get NAME() {
      return NAME7;
    }
    // Public
    refresh() {
      this._initializeTargetsAndObservables();
      this._maybeEnableSmoothScroll();
      if (this._observer) {
        this._observer.disconnect();
      } else {
        this._observer = this._getNewObserver();
      }
      for (const section of this._observableSections.values()) {
        this._observer.observe(section);
      }
    }
    dispose() {
      this._observer.disconnect();
      super.dispose();
    }
    // Private
    _configAfterMerge(config) {
      config.target = getElement(config.target) || document.body;
      config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
      if (typeof config.threshold === "string") {
        config.threshold = config.threshold.split(",").map((value) => Number.parseFloat(value));
      }
      return config;
    }
    _maybeEnableSmoothScroll() {
      if (!this._config.smoothScroll) {
        return;
      }
      event_handler_default.off(this._config.target, EVENT_CLICK);
      event_handler_default.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, (event) => {
        const observableSection = this._observableSections.get(event.target.hash);
        if (observableSection) {
          event.preventDefault();
          const root = this._rootElement || window;
          const height = observableSection.offsetTop - this._element.offsetTop;
          if (root.scrollTo) {
            root.scrollTo({ top: height, behavior: "smooth" });
            return;
          }
          root.scrollTop = height;
        }
      });
    }
    _getNewObserver() {
      const options = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin
      };
      return new IntersectionObserver((entries) => this._observerCallback(entries), options);
    }
    // The logic of selection
    _observerCallback(entries) {
      const targetElement = (entry) => this._targetLinks.get(`#${entry.target.id}`);
      const activate = (entry) => {
        this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
        this._process(targetElement(entry));
      };
      const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
      const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = parentScrollTop;
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          this._activeTarget = null;
          this._clearActiveClass(targetElement(entry));
          continue;
        }
        const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (userScrollsDown && entryIsLowerThanPrevious) {
          activate(entry);
          if (!parentScrollTop) {
            return;
          }
          continue;
        }
        if (!userScrollsDown && !entryIsLowerThanPrevious) {
          activate(entry);
        }
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = /* @__PURE__ */ new Map();
      this._observableSections = /* @__PURE__ */ new Map();
      const targetLinks = selector_engine_default.find(SELECTOR_TARGET_LINKS, this._config.target);
      for (const anchor of targetLinks) {
        if (!anchor.hash || isDisabled(anchor)) {
          continue;
        }
        const observableSection = selector_engine_default.findOne(decodeURI(anchor.hash), this._element);
        if (isVisible(observableSection)) {
          this._targetLinks.set(decodeURI(anchor.hash), anchor);
          this._observableSections.set(anchor.hash, observableSection);
        }
      }
    }
    _process(target) {
      if (this._activeTarget === target) {
        return;
      }
      this._clearActiveClass(this._config.target);
      this._activeTarget = target;
      target.classList.add(CLASS_NAME_ACTIVE2);
      this._activateParents(target);
      event_handler_default.trigger(this._element, EVENT_ACTIVATE, { relatedTarget: target });
    }
    _activateParents(target) {
      if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        selector_engine_default.findOne(SELECTOR_DROPDOWN_TOGGLE, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE2);
        return;
      }
      for (const listGroup of selector_engine_default.parents(target, SELECTOR_NAV_LIST_GROUP)) {
        for (const item of selector_engine_default.prev(listGroup, SELECTOR_LINK_ITEMS)) {
          item.classList.add(CLASS_NAME_ACTIVE2);
        }
      }
    }
    _clearActiveClass(parent) {
      parent.classList.remove(CLASS_NAME_ACTIVE2);
      const activeNodes = selector_engine_default.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE2}`, parent);
      for (const node of activeNodes) {
        node.classList.remove(CLASS_NAME_ACTIVE2);
      }
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _ScrollSpy.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  event_handler_default.on(window, EVENT_LOAD_DATA_API3, () => {
    for (const spy of selector_engine_default.find(SELECTOR_DATA_SPY)) {
      ScrollSpy.getOrCreateInstance(spy);
    }
  });
  defineJQueryPlugin(ScrollSpy);

  // ns-hugo-params:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\hbstack\heading-sign@v0.2.0\assets\hb\modules\heading-sign\js\index.ts
  var js_exports = {};
  __export(js_exports, {
    back_to_top: () => back_to_top,
    blockquotes: () => blockquotes,
    blog: () => blog,
    breadcrumb: () => breadcrumb,
    color: () => color,
    content_panel: () => content_panel,
    css_bundle_name: () => css_bundle_name,
    default: () => js_default,
    docs: () => docs,
    footer: () => footer,
    full_width: () => full_width,
    header: () => header,
    heading_sign: () => heading_sign,
    js_bundle_name: () => js_bundle_name,
    logo: () => logo,
    modules: () => modules,
    pagination: () => pagination,
    progress_bar: () => progress_bar,
    sass_transpiler: () => sass_transpiler,
    styles: () => styles,
    tables: () => tables,
    terms: () => terms,
    toc_scrollspy: () => toc_scrollspy
  });
  var back_to_top = { animation: true, icon_height: "2em", icon_name: "arrow-up-circle", icon_width: "2em", position_bottom: "1rem", position_end: "1rem" };
  var blockquotes = { border_style: "primary", border_width: 4, bordered: true };
  var blog = { archives: { paginate: 30 }, full_width: false, home: { featured_posts: 3, pinned_posts_position: "" }, list_cols_lg: 3, list_cols_md: 2, list_pinned_posts: 1, list_style: "", paginate: 12, post_date_format: ":date_long", post_read_more: false, post_thumbnail: true, post_thumbnail_default: "images/thumbnail.png", post_thumbnail_height: "160px", post_thumbnail_placeholder: "", post_thumbnail_position: "top", post_thumbnail_resize_height: 360, related_posts: { list_style: "slide" }, sidebar: { max_width: "320px", position: "end", posts: { recent_posts: 10 }, sticky: false, taxonomies: { authors: { disable: true }, separate: true }, width: 0.35 }, terms: { paginate: 12 }, toc: { position: "end" } };
  var breadcrumb = { disabled: false };
  var color = "dark";
  var content_panel = { bottom: "20px", comments: true };
  var css_bundle_name = "hb";
  var docs = { meta: { authors: false } };
  var footer = { socials: { _color: true, github: "TetraTheta", rss: true } };
  var full_width = false;
  var header = { breakpoint: "lg", full_width: true, logo_bg: "#00000000", sticky: true };
  var heading_sign = { containers: { ".hb-blog-post-content": {} }, symbol: "\xB6" };
  var js_bundle_name = "hb";
  var logo = "/images/logo.png";
  var modules = { "code-block-panel": { js_resources: [{ partial: "code-block-panel/assets/js-resource" }] } };
  var pagination = { alignment: "center", siblings: 3, size: "" };
  var progress_bar = { height: "4px", initial_width: 20, interval: 50, time: 2 };
  var sass_transpiler = "dartsass";
  var styles = { hb_top_offset: "24px", prefix: "hb-" };
  var tables = { align: "middle", border_style: "", bordered: true, group_divider: false, hover: true, striped: true, striped_columns: false, style: "", thead_style: "" };
  var terms = { list_style: "", paginate: 12, profile: false, profile_metrics: true };
  var toc_scrollspy = { border: true };
  var js_default = { back_to_top, blockquotes, blog, breadcrumb, color, content_panel, css_bundle_name, docs, footer, full_width, header, heading_sign, js_bundle_name, logo, modules, pagination, progress_bar, sass_transpiler, styles, tables, terms, toc_scrollspy };

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\hbstack\heading-sign@v0.2.0\assets\hb\modules\heading-sign\js\index.ts
  (() => {
    document.addEventListener("DOMContentLoaded", () => {
      const containers = js_exports?.heading_sign?.containers;
      if (!containers) {
        return;
      }
      const symbol = js_exports?.heading_sign?.symbol ?? "\xA7";
      for (const selector in containers) {
        const container = document.querySelector(selector);
        if (!container) {
          continue;
        }
        container.querySelectorAll("h2, h3, h4, h5, h6").forEach((heading) => {
          const id = heading.getAttribute("id");
          if (!id) {
            return;
          }
          const anchor = document.createElement("a");
          anchor.className = "anchor ms-1";
          anchor.href = `#${id}`;
          anchor.innerText = symbol;
          heading.appendChild(anchor);
        });
      }
    });
  })();

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\twbs\bootstrap@v5.3.7+incompatible\js\src\collapse.js
  var NAME8 = "collapse";
  var DATA_KEY6 = "bs.collapse";
  var EVENT_KEY7 = `.${DATA_KEY6}`;
  var DATA_API_KEY5 = ".data-api";
  var EVENT_SHOW3 = `show${EVENT_KEY7}`;
  var EVENT_SHOWN3 = `shown${EVENT_KEY7}`;
  var EVENT_HIDE3 = `hide${EVENT_KEY7}`;
  var EVENT_HIDDEN3 = `hidden${EVENT_KEY7}`;
  var EVENT_CLICK_DATA_API4 = `click${EVENT_KEY7}${DATA_API_KEY5}`;
  var CLASS_NAME_SHOW4 = "show";
  var CLASS_NAME_COLLAPSE = "collapse";
  var CLASS_NAME_COLLAPSING = "collapsing";
  var CLASS_NAME_COLLAPSED = "collapsed";
  var CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
  var CLASS_NAME_HORIZONTAL = "collapse-horizontal";
  var WIDTH = "width";
  var HEIGHT = "height";
  var SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
  var SELECTOR_DATA_TOGGLE3 = '[data-bs-toggle="collapse"]';
  var Default8 = {
    parent: null,
    toggle: true
  };
  var DefaultType8 = {
    parent: "(null|element)",
    toggle: "boolean"
  };
  var Collapse = class _Collapse extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._isTransitioning = false;
      this._triggerArray = [];
      const toggleList = selector_engine_default.find(SELECTOR_DATA_TOGGLE3);
      for (const elem of toggleList) {
        const selector = selector_engine_default.getSelectorFromElement(elem);
        const filterElement = selector_engine_default.find(selector).filter((foundElement) => foundElement === this._element);
        if (selector !== null && filterElement.length) {
          this._triggerArray.push(elem);
        }
      }
      this._initializeChildren();
      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
      }
      if (this._config.toggle) {
        this.toggle();
      }
    }
    // Getters
    static get Default() {
      return Default8;
    }
    static get DefaultType() {
      return DefaultType8;
    }
    static get NAME() {
      return NAME8;
    }
    // Public
    toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }
    show() {
      if (this._isTransitioning || this._isShown()) {
        return;
      }
      let activeChildren = [];
      if (this._config.parent) {
        activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element) => element !== this._element).map((element) => _Collapse.getOrCreateInstance(element, { toggle: false }));
      }
      if (activeChildren.length && activeChildren[0]._isTransitioning) {
        return;
      }
      const startEvent = event_handler_default.trigger(this._element, EVENT_SHOW3);
      if (startEvent.defaultPrevented) {
        return;
      }
      for (const activeInstance of activeChildren) {
        activeInstance.hide();
      }
      const dimension = this._getDimension();
      this._element.classList.remove(CLASS_NAME_COLLAPSE);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;
      this._addAriaAndCollapsedClass(this._triggerArray, true);
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW4);
        this._element.style[dimension] = "";
        event_handler_default.trigger(this._element, EVENT_SHOWN3);
      };
      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;
      this._queueCallback(complete, this._element, true);
      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) {
        return;
      }
      const startEvent = event_handler_default.trigger(this._element, EVENT_HIDE3);
      if (startEvent.defaultPrevented) {
        return;
      }
      const dimension = this._getDimension();
      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW4);
      for (const trigger of this._triggerArray) {
        const element = selector_engine_default.getElementFromSelector(trigger);
        if (element && !this._isShown(element)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE);
        event_handler_default.trigger(this._element, EVENT_HIDDEN3);
      };
      this._element.style[dimension] = "";
      this._queueCallback(complete, this._element, true);
    }
    // Private
    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW4);
    }
    _configAfterMerge(config) {
      config.toggle = Boolean(config.toggle);
      config.parent = getElement(config.parent);
      return config;
    }
    _getDimension() {
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
    _initializeChildren() {
      if (!this._config.parent) {
        return;
      }
      const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE3);
      for (const element of children) {
        const selected = selector_engine_default.getElementFromSelector(element);
        if (selected) {
          this._addAriaAndCollapsedClass([element], this._isShown(selected));
        }
      }
    }
    _getFirstLevelChildren(selector) {
      const children = selector_engine_default.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
      return selector_engine_default.find(selector, this._config.parent).filter((element) => !children.includes(element));
    }
    _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }
      for (const element of triggerArray) {
        element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
        element.setAttribute("aria-expanded", isOpen);
      }
    }
    // Static
    static jQueryInterface(config) {
      const _config = {};
      if (typeof config === "string" && /show|hide/.test(config)) {
        _config.toggle = false;
      }
      return this.each(function() {
        const data = _Collapse.getOrCreateInstance(this, _config);
        if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  event_handler_default.on(document, EVENT_CLICK_DATA_API4, SELECTOR_DATA_TOGGLE3, function(event) {
    if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") {
      event.preventDefault();
    }
    for (const element of selector_engine_default.getMultipleElementsFromSelector(this)) {
      Collapse.getOrCreateInstance(element, { toggle: false }).toggle();
    }
  });
  defineJQueryPlugin(Collapse);

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\twbs\bootstrap@v5.3.7+incompatible\js\src\tab.js
  var NAME9 = "tab";
  var DATA_KEY7 = "bs.tab";
  var EVENT_KEY8 = `.${DATA_KEY7}`;
  var EVENT_HIDE4 = `hide${EVENT_KEY8}`;
  var EVENT_HIDDEN4 = `hidden${EVENT_KEY8}`;
  var EVENT_SHOW4 = `show${EVENT_KEY8}`;
  var EVENT_SHOWN4 = `shown${EVENT_KEY8}`;
  var EVENT_CLICK_DATA_API5 = `click${EVENT_KEY8}`;
  var EVENT_KEYDOWN2 = `keydown${EVENT_KEY8}`;
  var EVENT_LOAD_DATA_API4 = `load${EVENT_KEY8}`;
  var ARROW_LEFT_KEY2 = "ArrowLeft";
  var ARROW_RIGHT_KEY2 = "ArrowRight";
  var ARROW_UP_KEY2 = "ArrowUp";
  var ARROW_DOWN_KEY2 = "ArrowDown";
  var HOME_KEY = "Home";
  var END_KEY = "End";
  var CLASS_NAME_ACTIVE3 = "active";
  var CLASS_NAME_FADE2 = "fade";
  var CLASS_NAME_SHOW5 = "show";
  var CLASS_DROPDOWN = "dropdown";
  var SELECTOR_DROPDOWN_TOGGLE2 = ".dropdown-toggle";
  var SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
  var NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE2})`;
  var SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
  var SELECTOR_OUTER = ".nav-item, .list-group-item";
  var SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
  var SELECTOR_DATA_TOGGLE4 = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  var SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE4}`;
  var SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE3}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE3}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE3}[data-bs-toggle="list"]`;
  var Tab = class _Tab extends base_component_default {
    constructor(element) {
      super(element);
      this._parent = this._element.closest(SELECTOR_TAB_PANEL);
      if (!this._parent) {
        return;
      }
      this._setInitialAttributes(this._parent, this._getChildren());
      event_handler_default.on(this._element, EVENT_KEYDOWN2, (event) => this._keydown(event));
    }
    // Getters
    static get NAME() {
      return NAME9;
    }
    // Public
    show() {
      const innerElem = this._element;
      if (this._elemIsActive(innerElem)) {
        return;
      }
      const active = this._getActiveElem();
      const hideEvent = active ? event_handler_default.trigger(active, EVENT_HIDE4, { relatedTarget: innerElem }) : null;
      const showEvent = event_handler_default.trigger(innerElem, EVENT_SHOW4, { relatedTarget: active });
      if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
        return;
      }
      this._deactivate(active, innerElem);
      this._activate(innerElem, active);
    }
    // Private
    _activate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.add(CLASS_NAME_ACTIVE3);
      this._activate(selector_engine_default.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.add(CLASS_NAME_SHOW5);
          return;
        }
        element.removeAttribute("tabindex");
        element.setAttribute("aria-selected", true);
        this._toggleDropDown(element, true);
        event_handler_default.trigger(element, EVENT_SHOWN4, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE2));
    }
    _deactivate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.remove(CLASS_NAME_ACTIVE3);
      element.blur();
      this._deactivate(selector_engine_default.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.remove(CLASS_NAME_SHOW5);
          return;
        }
        element.setAttribute("aria-selected", false);
        element.setAttribute("tabindex", "-1");
        this._toggleDropDown(element, false);
        event_handler_default.trigger(element, EVENT_HIDDEN4, { relatedTarget: relatedElem });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE2));
    }
    _keydown(event) {
      if (![ARROW_LEFT_KEY2, ARROW_RIGHT_KEY2, ARROW_UP_KEY2, ARROW_DOWN_KEY2, HOME_KEY, END_KEY].includes(event.key)) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      const children = this._getChildren().filter((element) => !isDisabled(element));
      let nextActiveElement;
      if ([HOME_KEY, END_KEY].includes(event.key)) {
        nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
      } else {
        const isNext = [ARROW_RIGHT_KEY2, ARROW_DOWN_KEY2].includes(event.key);
        nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
      }
      if (nextActiveElement) {
        nextActiveElement.focus({ preventScroll: true });
        _Tab.getOrCreateInstance(nextActiveElement).show();
      }
    }
    _getChildren() {
      return selector_engine_default.find(SELECTOR_INNER_ELEM, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((child) => this._elemIsActive(child)) || null;
    }
    _setInitialAttributes(parent, children) {
      this._setAttributeIfNotExists(parent, "role", "tablist");
      for (const child of children) {
        this._setInitialAttributesOnChild(child);
      }
    }
    _setInitialAttributesOnChild(child) {
      child = this._getInnerElement(child);
      const isActive = this._elemIsActive(child);
      const outerElem = this._getOuterElement(child);
      child.setAttribute("aria-selected", isActive);
      if (outerElem !== child) {
        this._setAttributeIfNotExists(outerElem, "role", "presentation");
      }
      if (!isActive) {
        child.setAttribute("tabindex", "-1");
      }
      this._setAttributeIfNotExists(child, "role", "tab");
      this._setInitialAttributesOnTargetPanel(child);
    }
    _setInitialAttributesOnTargetPanel(child) {
      const target = selector_engine_default.getElementFromSelector(child);
      if (!target) {
        return;
      }
      this._setAttributeIfNotExists(target, "role", "tabpanel");
      if (child.id) {
        this._setAttributeIfNotExists(target, "aria-labelledby", `${child.id}`);
      }
    }
    _toggleDropDown(element, open) {
      const outerElem = this._getOuterElement(element);
      if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
        return;
      }
      const toggle = (selector, className) => {
        const element2 = selector_engine_default.findOne(selector, outerElem);
        if (element2) {
          element2.classList.toggle(className, open);
        }
      };
      toggle(SELECTOR_DROPDOWN_TOGGLE2, CLASS_NAME_ACTIVE3);
      toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW5);
      outerElem.setAttribute("aria-expanded", open);
    }
    _setAttributeIfNotExists(element, attribute, value) {
      if (!element.hasAttribute(attribute)) {
        element.setAttribute(attribute, value);
      }
    }
    _elemIsActive(elem) {
      return elem.classList.contains(CLASS_NAME_ACTIVE3);
    }
    // Try to get the inner element (usually the .nav-link)
    _getInnerElement(elem) {
      return elem.matches(SELECTOR_INNER_ELEM) ? elem : selector_engine_default.findOne(SELECTOR_INNER_ELEM, elem);
    }
    // Try to get the outer element (usually the .nav-item)
    _getOuterElement(elem) {
      return elem.closest(SELECTOR_OUTER) || elem;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Tab.getOrCreateInstance(this);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  event_handler_default.on(document, EVENT_CLICK_DATA_API5, SELECTOR_DATA_TOGGLE4, function(event) {
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    Tab.getOrCreateInstance(this).show();
  });
  event_handler_default.on(window, EVENT_LOAD_DATA_API4, () => {
    for (const element of selector_engine_default.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
      Tab.getOrCreateInstance(element);
    }
  });
  defineJQueryPlugin(Tab);

  // ns-hugo-params:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\hbstack\progress-bar@v0.1.1\assets\hb\modules\progress-bar\js\progress.ts
  var progress_exports = {};
  __export(progress_exports, {
    back_to_top: () => back_to_top2,
    blockquotes: () => blockquotes2,
    blog: () => blog2,
    breadcrumb: () => breadcrumb2,
    color: () => color2,
    content_panel: () => content_panel2,
    css_bundle_name: () => css_bundle_name2,
    default: () => progress_default,
    docs: () => docs2,
    footer: () => footer2,
    full_width: () => full_width2,
    header: () => header2,
    heading_sign: () => heading_sign2,
    js_bundle_name: () => js_bundle_name2,
    logo: () => logo2,
    modules: () => modules2,
    pagination: () => pagination2,
    progress_bar: () => progress_bar2,
    sass_transpiler: () => sass_transpiler2,
    styles: () => styles2,
    tables: () => tables2,
    terms: () => terms2,
    toc_scrollspy: () => toc_scrollspy2
  });
  var back_to_top2 = { animation: true, icon_height: "2em", icon_name: "arrow-up-circle", icon_width: "2em", position_bottom: "1rem", position_end: "1rem" };
  var blockquotes2 = { border_style: "primary", border_width: 4, bordered: true };
  var blog2 = { archives: { paginate: 30 }, full_width: false, home: { featured_posts: 3, pinned_posts_position: "" }, list_cols_lg: 3, list_cols_md: 2, list_pinned_posts: 1, list_style: "", paginate: 12, post_date_format: ":date_long", post_read_more: false, post_thumbnail: true, post_thumbnail_default: "images/thumbnail.png", post_thumbnail_height: "160px", post_thumbnail_placeholder: "", post_thumbnail_position: "top", post_thumbnail_resize_height: 360, related_posts: { list_style: "slide" }, sidebar: { max_width: "320px", position: "end", posts: { recent_posts: 10 }, sticky: false, taxonomies: { authors: { disable: true }, separate: true }, width: 0.35 }, terms: { paginate: 12 }, toc: { position: "end" } };
  var breadcrumb2 = { disabled: false };
  var color2 = "dark";
  var content_panel2 = { bottom: "20px", comments: true };
  var css_bundle_name2 = "hb";
  var docs2 = { meta: { authors: false } };
  var footer2 = { socials: { _color: true, github: "TetraTheta", rss: true } };
  var full_width2 = false;
  var header2 = { breakpoint: "lg", full_width: true, logo_bg: "#00000000", sticky: true };
  var heading_sign2 = { containers: { ".hb-blog-post-content": {} }, symbol: "\xB6" };
  var js_bundle_name2 = "hb";
  var logo2 = "/images/logo.png";
  var modules2 = { "code-block-panel": { js_resources: [{ partial: "code-block-panel/assets/js-resource" }] } };
  var pagination2 = { alignment: "center", siblings: 3, size: "" };
  var progress_bar2 = { height: "4px", initial_width: 20, interval: 50, time: 2 };
  var sass_transpiler2 = "dartsass";
  var styles2 = { hb_top_offset: "24px", prefix: "hb-" };
  var tables2 = { align: "middle", border_style: "", bordered: true, group_divider: false, hover: true, striped: true, striped_columns: false, style: "", thead_style: "" };
  var terms2 = { list_style: "", paginate: 12, profile: false, profile_metrics: true };
  var toc_scrollspy2 = { border: true };
  var progress_default = { back_to_top: back_to_top2, blockquotes: blockquotes2, blog: blog2, breadcrumb: breadcrumb2, color: color2, content_panel: content_panel2, css_bundle_name: css_bundle_name2, docs: docs2, footer: footer2, full_width: full_width2, header: header2, heading_sign: heading_sign2, js_bundle_name: js_bundle_name2, logo: logo2, modules: modules2, pagination: pagination2, progress_bar: progress_bar2, sass_transpiler: sass_transpiler2, styles: styles2, tables: tables2, terms: terms2, toc_scrollspy: toc_scrollspy2 };

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\hbstack\progress-bar@v0.1.1\assets\hb\modules\progress-bar\js\progress.ts
  var Progress = class {
    ele;
    bar;
    width;
    interval;
    step;
    constructor() {
      this.width = progress_exports?.progress_bar?.width ?? 20;
      this.interval = progress_exports?.progress_bar?.interval ?? 50;
      const time = progress_exports?.progress_bar?.time ?? 2;
      this.step = (100 - this.width) / time / 1e3 * this.interval;
      this.initBar();
      this.initProgress();
    }
    initProgress() {
      const progress = document.createElement("div");
      progress.className = "hb-progress progress position-fixed top-0 w-100 rounded-0 d-none";
      progress.role = "progressbar";
      progress.appendChild(this.bar);
      document.body.appendChild(progress);
      this.ele = progress;
    }
    initBar() {
      const bar = document.createElement("div");
      bar.className = "progress-bar progress-bar-striped progress-bar-animated";
      bar.style.width = this.width + "%";
      this.bar = bar;
    }
    timer = 0;
    show() {
      this.ele.classList.remove("d-none");
      this.timer = setInterval(() => {
        this.width += this.step;
        this.bar.style.width = `${this.width}%`;
      }, this.interval);
    }
    hide() {
      this.ele.classList.add("d-none");
      clearInterval(this.timer);
    }
  };

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\hbstack\progress-bar@v0.1.1\assets\hb\modules\progress-bar\js\index.ts
  (() => {
    const progress = new Progress();
    window.addEventListener("pagehide", () => {
      progress.hide();
    });
    window.addEventListener("beforeunload", () => {
      progress.show();
    });
  })();

  // ns-hugo-params:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\hbstack\back-to-top@v0.2.0\assets\hb\modules\back-to-top\js\button.ts
  var button_exports = {};
  __export(button_exports, {
    back_to_top: () => back_to_top3,
    blockquotes: () => blockquotes3,
    blog: () => blog3,
    breadcrumb: () => breadcrumb3,
    color: () => color3,
    content_panel: () => content_panel3,
    css_bundle_name: () => css_bundle_name3,
    default: () => button_default,
    docs: () => docs3,
    footer: () => footer3,
    full_width: () => full_width3,
    header: () => header3,
    heading_sign: () => heading_sign3,
    js_bundle_name: () => js_bundle_name3,
    logo: () => logo3,
    modules: () => modules3,
    pagination: () => pagination3,
    progress_bar: () => progress_bar3,
    sass_transpiler: () => sass_transpiler3,
    styles: () => styles3,
    tables: () => tables3,
    terms: () => terms3,
    toc_scrollspy: () => toc_scrollspy3
  });
  var back_to_top3 = { animation: true, icon_height: "2em", icon_name: "arrow-up-circle", icon_width: "2em", position_bottom: "1rem", position_end: "1rem" };
  var blockquotes3 = { border_style: "primary", border_width: 4, bordered: true };
  var blog3 = { archives: { paginate: 30 }, full_width: false, home: { featured_posts: 3, pinned_posts_position: "" }, list_cols_lg: 3, list_cols_md: 2, list_pinned_posts: 1, list_style: "", paginate: 12, post_date_format: ":date_long", post_read_more: false, post_thumbnail: true, post_thumbnail_default: "images/thumbnail.png", post_thumbnail_height: "160px", post_thumbnail_placeholder: "", post_thumbnail_position: "top", post_thumbnail_resize_height: 360, related_posts: { list_style: "slide" }, sidebar: { max_width: "320px", position: "end", posts: { recent_posts: 10 }, sticky: false, taxonomies: { authors: { disable: true }, separate: true }, width: 0.35 }, terms: { paginate: 12 }, toc: { position: "end" } };
  var breadcrumb3 = { disabled: false };
  var color3 = "dark";
  var content_panel3 = { bottom: "20px", comments: true };
  var css_bundle_name3 = "hb";
  var docs3 = { meta: { authors: false } };
  var footer3 = { socials: { _color: true, github: "TetraTheta", rss: true } };
  var full_width3 = false;
  var header3 = { breakpoint: "lg", full_width: true, logo_bg: "#00000000", sticky: true };
  var heading_sign3 = { containers: { ".hb-blog-post-content": {} }, symbol: "\xB6" };
  var js_bundle_name3 = "hb";
  var logo3 = "/images/logo.png";
  var modules3 = { "code-block-panel": { js_resources: [{ partial: "code-block-panel/assets/js-resource" }] } };
  var pagination3 = { alignment: "center", siblings: 3, size: "" };
  var progress_bar3 = { height: "4px", initial_width: 20, interval: 50, time: 2 };
  var sass_transpiler3 = "dartsass";
  var styles3 = { hb_top_offset: "24px", prefix: "hb-" };
  var tables3 = { align: "middle", border_style: "", bordered: true, group_divider: false, hover: true, striped: true, striped_columns: false, style: "", thead_style: "" };
  var terms3 = { list_style: "", paginate: 12, profile: false, profile_metrics: true };
  var toc_scrollspy3 = { border: true };
  var button_default = { back_to_top: back_to_top3, blockquotes: blockquotes3, blog: blog3, breadcrumb: breadcrumb3, color: color3, content_panel: content_panel3, css_bundle_name: css_bundle_name3, docs: docs3, footer: footer3, full_width: full_width3, header: header3, heading_sign: heading_sign3, js_bundle_name: js_bundle_name3, logo: logo3, modules: modules3, pagination: pagination3, progress_bar: progress_bar3, sass_transpiler: sass_transpiler3, styles: styles3, tables: tables3, terms: terms3, toc_scrollspy: toc_scrollspy3 };

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\hbstack\back-to-top@v0.2.0\assets\hb\modules\back-to-top\js\button.ts
  var Button = class {
    btn;
    constructor(icon) {
      const btn = document.createElement("button");
      btn.className = "hb-back-to-top";
      btn.ariaLabel = "Back to top";
      btn.innerHTML = this.transformIcon(icon);
      document.body.appendChild(btn);
      this.btn = btn;
      let y = 0;
      window.addEventListener("scroll", () => {
        const top = document.documentElement.scrollTop;
        if (document.body.scrollTop > 20 || top > 20) {
          this.show();
        } else {
          this.hide();
        }
        if (this.animation() && top > y) {
          btn.classList.remove("scrolling");
        }
        y = top;
        this.updatePos();
      });
      this.btn.addEventListener("click", () => {
        this.animation() && btn.classList.add("scrolling");
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      });
    }
    transformIcon(icon) {
      return icon.replace(/<svg(.*)>((.|\n)*)<\/svg>/, `<svg$1>
  <defs><clipPath id="icon">$2</clipPath></defs>
  <rect x="0" y="0" fill="currentColor" width="100%" height="100%" clip-path="url(#icon)" />
  <rect x="0" y="100%" width="100%" height="100%" clip-path="url(#icon)" />
</svg>`);
    }
    posIcon;
    updatePos() {
      if (!this.posIcon) {
        this.posIcon = this.btn.querySelectorAll("rect")[1];
      }
      const pos = document.documentElement.scrollTop / (document.documentElement.offsetHeight - document.documentElement.clientHeight);
      this.posIcon.setAttribute("y", (1 - pos) * 100 + "%");
    }
    show() {
      this.btn.classList.add("show");
    }
    hide() {
      this.btn.classList.remove("show");
    }
    animation() {
      return button_exports?.back_to_top?.animation !== false;
    }
  };

  // <stdin>
  (() => {
    "use strict";
    window.addEventListener("DOMContentLoaded", () => {
      const btn = new Button(`<svg aria-hidden="true" class="bi bi-arrow-up-circle hi-svg-inline hb-back-to-top-icon" fill="currentColor" height="2em" viewBox="0 0 16 16" width="2em" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
</svg>`);
    });
  })();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibnMtaHVnby1pbXA6QzpcXFVzZXJzXFxoaVxcQXBwRGF0YVxcTG9jYWxcXGh1Z29fY2FjaGVcXG1vZHVsZXNcXGZpbGVjYWNoZVxcbW9kdWxlc1xccGtnXFxtb2RcXGdpdGh1Yi5jb21cXGdvaHVnb2lvXFxodWdvLW1vZC1qc2xpYnMtZGlzdFxccG9wcGVyanNcXHYyQHYyLjIxMTAwLjIwMDAwXFxwYWNrYWdlXFxkaXN0XFxjanNcXHBvcHBlci5qcyIsICJucy1odWdvLWltcDpDOlxcd29ya3NwYWNlXFxyZXBvXFxodWdvXFxhc3NldHNcXGhiXFxtb2R1bGVzXFxjdXN0b21cXGpzXFxpbmRleC50cyIsICJucy1odWdvLWltcDpDOlxcVXNlcnNcXGhpXFxBcHBEYXRhXFxMb2NhbFxcaHVnb19jYWNoZVxcbW9kdWxlc1xcZmlsZWNhY2hlXFxtb2R1bGVzXFxwa2dcXG1vZFxcZ2l0aHViLmNvbVxcdHdic1xcYm9vdHN0cmFwQHY1LjMuNytpbmNvbXBhdGlibGVcXGpzXFxzcmNcXGRyb3Bkb3duLmpzIiwgIm5zLWh1Z28taW1wOkM6XFxVc2Vyc1xcaGlcXEFwcERhdGFcXExvY2FsXFxodWdvX2NhY2hlXFxtb2R1bGVzXFxmaWxlY2FjaGVcXG1vZHVsZXNcXHBrZ1xcbW9kXFxnaXRodWIuY29tXFx0d2JzXFxib290c3RyYXBAdjUuMy43K2luY29tcGF0aWJsZVxcanNcXHNyY1xcZG9tXFxkYXRhLmpzIiwgIm5zLWh1Z28taW1wOkM6XFxVc2Vyc1xcaGlcXEFwcERhdGFcXExvY2FsXFxodWdvX2NhY2hlXFxtb2R1bGVzXFxmaWxlY2FjaGVcXG1vZHVsZXNcXHBrZ1xcbW9kXFxnaXRodWIuY29tXFx0d2JzXFxib290c3RyYXBAdjUuMy43K2luY29tcGF0aWJsZVxcanNcXHNyY1xcdXRpbFxcaW5kZXguanMiLCAibnMtaHVnby1pbXA6QzpcXFVzZXJzXFxoaVxcQXBwRGF0YVxcTG9jYWxcXGh1Z29fY2FjaGVcXG1vZHVsZXNcXGZpbGVjYWNoZVxcbW9kdWxlc1xccGtnXFxtb2RcXGdpdGh1Yi5jb21cXHR3YnNcXGJvb3RzdHJhcEB2NS4zLjcraW5jb21wYXRpYmxlXFxqc1xcc3JjXFxkb21cXGV2ZW50LWhhbmRsZXIuanMiLCAibnMtaHVnby1pbXA6QzpcXFVzZXJzXFxoaVxcQXBwRGF0YVxcTG9jYWxcXGh1Z29fY2FjaGVcXG1vZHVsZXNcXGZpbGVjYWNoZVxcbW9kdWxlc1xccGtnXFxtb2RcXGdpdGh1Yi5jb21cXHR3YnNcXGJvb3RzdHJhcEB2NS4zLjcraW5jb21wYXRpYmxlXFxqc1xcc3JjXFxkb21cXG1hbmlwdWxhdG9yLmpzIiwgIm5zLWh1Z28taW1wOkM6XFxVc2Vyc1xcaGlcXEFwcERhdGFcXExvY2FsXFxodWdvX2NhY2hlXFxtb2R1bGVzXFxmaWxlY2FjaGVcXG1vZHVsZXNcXHBrZ1xcbW9kXFxnaXRodWIuY29tXFx0d2JzXFxib290c3RyYXBAdjUuMy43K2luY29tcGF0aWJsZVxcanNcXHNyY1xcdXRpbFxcY29uZmlnLmpzIiwgIm5zLWh1Z28taW1wOkM6XFxVc2Vyc1xcaGlcXEFwcERhdGFcXExvY2FsXFxodWdvX2NhY2hlXFxtb2R1bGVzXFxmaWxlY2FjaGVcXG1vZHVsZXNcXHBrZ1xcbW9kXFxnaXRodWIuY29tXFx0d2JzXFxib290c3RyYXBAdjUuMy43K2luY29tcGF0aWJsZVxcanNcXHNyY1xcYmFzZS1jb21wb25lbnQuanMiLCAibnMtaHVnby1pbXA6QzpcXFVzZXJzXFxoaVxcQXBwRGF0YVxcTG9jYWxcXGh1Z29fY2FjaGVcXG1vZHVsZXNcXGZpbGVjYWNoZVxcbW9kdWxlc1xccGtnXFxtb2RcXGdpdGh1Yi5jb21cXHR3YnNcXGJvb3RzdHJhcEB2NS4zLjcraW5jb21wYXRpYmxlXFxqc1xcc3JjXFxkb21cXHNlbGVjdG9yLWVuZ2luZS5qcyIsICJucy1odWdvLWltcDpDOlxcVXNlcnNcXGhpXFxBcHBEYXRhXFxMb2NhbFxcaHVnb19jYWNoZVxcbW9kdWxlc1xcZmlsZWNhY2hlXFxtb2R1bGVzXFxwa2dcXG1vZFxcZ2l0aHViLmNvbVxcdHdic1xcYm9vdHN0cmFwQHY1LjMuNytpbmNvbXBhdGlibGVcXGpzXFxzcmNcXHV0aWxcXGJhY2tkcm9wLmpzIiwgIm5zLWh1Z28taW1wOkM6XFxVc2Vyc1xcaGlcXEFwcERhdGFcXExvY2FsXFxodWdvX2NhY2hlXFxtb2R1bGVzXFxmaWxlY2FjaGVcXG1vZHVsZXNcXHBrZ1xcbW9kXFxnaXRodWIuY29tXFx0d2JzXFxib290c3RyYXBAdjUuMy43K2luY29tcGF0aWJsZVxcanNcXHNyY1xcdXRpbFxcY29tcG9uZW50LWZ1bmN0aW9ucy5qcyIsICJucy1odWdvLWltcDpDOlxcVXNlcnNcXGhpXFxBcHBEYXRhXFxMb2NhbFxcaHVnb19jYWNoZVxcbW9kdWxlc1xcZmlsZWNhY2hlXFxtb2R1bGVzXFxwa2dcXG1vZFxcZ2l0aHViLmNvbVxcdHdic1xcYm9vdHN0cmFwQHY1LjMuNytpbmNvbXBhdGlibGVcXGpzXFxzcmNcXHV0aWxcXGZvY3VzdHJhcC5qcyIsICJucy1odWdvLWltcDpDOlxcVXNlcnNcXGhpXFxBcHBEYXRhXFxMb2NhbFxcaHVnb19jYWNoZVxcbW9kdWxlc1xcZmlsZWNhY2hlXFxtb2R1bGVzXFxwa2dcXG1vZFxcZ2l0aHViLmNvbVxcdHdic1xcYm9vdHN0cmFwQHY1LjMuNytpbmNvbXBhdGlibGVcXGpzXFxzcmNcXHV0aWxcXHNjcm9sbGJhci5qcyIsICJucy1odWdvLWltcDpDOlxcVXNlcnNcXGhpXFxBcHBEYXRhXFxMb2NhbFxcaHVnb19jYWNoZVxcbW9kdWxlc1xcZmlsZWNhY2hlXFxtb2R1bGVzXFxwa2dcXG1vZFxcZ2l0aHViLmNvbVxcdHdic1xcYm9vdHN0cmFwQHY1LjMuNytpbmNvbXBhdGlibGVcXGpzXFxzcmNcXG9mZmNhbnZhcy5qcyIsICJucy1odWdvLWltcDpDOlxcVXNlcnNcXGhpXFxBcHBEYXRhXFxMb2NhbFxcaHVnb19jYWNoZVxcbW9kdWxlc1xcZmlsZWNhY2hlXFxtb2R1bGVzXFxwa2dcXG1vZFxcZ2l0aHViLmNvbVxcaGJzdGFja1xcaGVhZGVyQHYwLjE2LjZcXGFzc2V0c1xcaGJcXG1vZHVsZXNcXGhlYWRlclxcanNcXGluZGV4LnRzIiwgIm5zLWh1Z28taW1wOkM6XFxVc2Vyc1xcaGlcXEFwcERhdGFcXExvY2FsXFxodWdvX2NhY2hlXFxtb2R1bGVzXFxmaWxlY2FjaGVcXG1vZHVsZXNcXHBrZ1xcbW9kXFxnaXRodWIuY29tXFx0d2JzXFxib290c3RyYXBAdjUuMy43K2luY29tcGF0aWJsZVxcanNcXHNyY1xcdXRpbFxcc3dpcGUuanMiLCAibnMtaHVnby1pbXA6QzpcXFVzZXJzXFxoaVxcQXBwRGF0YVxcTG9jYWxcXGh1Z29fY2FjaGVcXG1vZHVsZXNcXGZpbGVjYWNoZVxcbW9kdWxlc1xccGtnXFxtb2RcXGdpdGh1Yi5jb21cXHR3YnNcXGJvb3RzdHJhcEB2NS4zLjcraW5jb21wYXRpYmxlXFxqc1xcc3JjXFxjYXJvdXNlbC5qcyIsICJucy1odWdvLWltcDpDOlxcVXNlcnNcXGhpXFxBcHBEYXRhXFxMb2NhbFxcaHVnb19jYWNoZVxcbW9kdWxlc1xcZmlsZWNhY2hlXFxtb2R1bGVzXFxwa2dcXG1vZFxcZ2l0aHViLmNvbVxcaGJzdGFja1xcY2Fyb3VzZWxAdjAuMi43XFxhc3NldHNcXGhiXFxtb2R1bGVzXFxjYXJvdXNlbFxcanNcXGluZGV4LnRzIiwgIm5zLWh1Z28taW1wOkM6XFxVc2Vyc1xcaGlcXEFwcERhdGFcXExvY2FsXFxodWdvX2NhY2hlXFxtb2R1bGVzXFxmaWxlY2FjaGVcXG1vZHVsZXNcXHBrZ1xcbW9kXFxnaXRodWIuY29tXFxoYnN0YWNrXFxzb2NpYWxzQHYwLjE5LjBcXGFzc2V0c1xcaGJcXG1vZHVsZXNcXHNvY2lhbHNcXGpzXFxpbmRleC50cyIsICJucy1odWdvLWltcDpDOlxcVXNlcnNcXGhpXFxBcHBEYXRhXFxMb2NhbFxcaHVnb19jYWNoZVxcbW9kdWxlc1xcZmlsZWNhY2hlXFxtb2R1bGVzXFxwa2dcXG1vZFxcZ2l0aHViLmNvbVxcdHdic1xcYm9vdHN0cmFwQHY1LjMuNytpbmNvbXBhdGlibGVcXGpzXFxzcmNcXHNjcm9sbHNweS5qcyIsICJucy1odWdvLXBhcmFtczpDOlxcVXNlcnNcXGhpXFxBcHBEYXRhXFxMb2NhbFxcaHVnb19jYWNoZVxcbW9kdWxlc1xcZmlsZWNhY2hlXFxtb2R1bGVzXFxwa2dcXG1vZFxcZ2l0aHViLmNvbVxcaGJzdGFja1xcaGVhZGluZy1zaWduQHYwLjIuMFxcYXNzZXRzXFxoYlxcbW9kdWxlc1xcaGVhZGluZy1zaWduXFxqc1xcaW5kZXgudHMiLCAibnMtaHVnby1pbXA6QzpcXFVzZXJzXFxoaVxcQXBwRGF0YVxcTG9jYWxcXGh1Z29fY2FjaGVcXG1vZHVsZXNcXGZpbGVjYWNoZVxcbW9kdWxlc1xccGtnXFxtb2RcXGdpdGh1Yi5jb21cXGhic3RhY2tcXGhlYWRpbmctc2lnbkB2MC4yLjBcXGFzc2V0c1xcaGJcXG1vZHVsZXNcXGhlYWRpbmctc2lnblxcanNcXGluZGV4LnRzIiwgIm5zLWh1Z28taW1wOkM6XFxVc2Vyc1xcaGlcXEFwcERhdGFcXExvY2FsXFxodWdvX2NhY2hlXFxtb2R1bGVzXFxmaWxlY2FjaGVcXG1vZHVsZXNcXHBrZ1xcbW9kXFxnaXRodWIuY29tXFx0d2JzXFxib290c3RyYXBAdjUuMy43K2luY29tcGF0aWJsZVxcanNcXHNyY1xcY29sbGFwc2UuanMiLCAibnMtaHVnby1pbXA6QzpcXFVzZXJzXFxoaVxcQXBwRGF0YVxcTG9jYWxcXGh1Z29fY2FjaGVcXG1vZHVsZXNcXGZpbGVjYWNoZVxcbW9kdWxlc1xccGtnXFxtb2RcXGdpdGh1Yi5jb21cXHR3YnNcXGJvb3RzdHJhcEB2NS4zLjcraW5jb21wYXRpYmxlXFxqc1xcc3JjXFx0YWIuanMiLCAibnMtaHVnby1wYXJhbXM6QzpcXFVzZXJzXFxoaVxcQXBwRGF0YVxcTG9jYWxcXGh1Z29fY2FjaGVcXG1vZHVsZXNcXGZpbGVjYWNoZVxcbW9kdWxlc1xccGtnXFxtb2RcXGdpdGh1Yi5jb21cXGhic3RhY2tcXHByb2dyZXNzLWJhckB2MC4xLjFcXGFzc2V0c1xcaGJcXG1vZHVsZXNcXHByb2dyZXNzLWJhclxcanNcXHByb2dyZXNzLnRzIiwgIm5zLWh1Z28taW1wOkM6XFxVc2Vyc1xcaGlcXEFwcERhdGFcXExvY2FsXFxodWdvX2NhY2hlXFxtb2R1bGVzXFxmaWxlY2FjaGVcXG1vZHVsZXNcXHBrZ1xcbW9kXFxnaXRodWIuY29tXFxoYnN0YWNrXFxwcm9ncmVzcy1iYXJAdjAuMS4xXFxhc3NldHNcXGhiXFxtb2R1bGVzXFxwcm9ncmVzcy1iYXJcXGpzXFxwcm9ncmVzcy50cyIsICJucy1odWdvLWltcDpDOlxcVXNlcnNcXGhpXFxBcHBEYXRhXFxMb2NhbFxcaHVnb19jYWNoZVxcbW9kdWxlc1xcZmlsZWNhY2hlXFxtb2R1bGVzXFxwa2dcXG1vZFxcZ2l0aHViLmNvbVxcaGJzdGFja1xccHJvZ3Jlc3MtYmFyQHYwLjEuMVxcYXNzZXRzXFxoYlxcbW9kdWxlc1xccHJvZ3Jlc3MtYmFyXFxqc1xcaW5kZXgudHMiLCAibnMtaHVnby1wYXJhbXM6QzpcXFVzZXJzXFxoaVxcQXBwRGF0YVxcTG9jYWxcXGh1Z29fY2FjaGVcXG1vZHVsZXNcXGZpbGVjYWNoZVxcbW9kdWxlc1xccGtnXFxtb2RcXGdpdGh1Yi5jb21cXGhic3RhY2tcXGJhY2stdG8tdG9wQHYwLjIuMFxcYXNzZXRzXFxoYlxcbW9kdWxlc1xcYmFjay10by10b3BcXGpzXFxidXR0b24udHMiLCAibnMtaHVnby1pbXA6QzpcXFVzZXJzXFxoaVxcQXBwRGF0YVxcTG9jYWxcXGh1Z29fY2FjaGVcXG1vZHVsZXNcXGZpbGVjYWNoZVxcbW9kdWxlc1xccGtnXFxtb2RcXGdpdGh1Yi5jb21cXGhic3RhY2tcXGJhY2stdG8tdG9wQHYwLjIuMFxcYXNzZXRzXFxoYlxcbW9kdWxlc1xcYmFjay10by10b3BcXGpzXFxidXR0b24udHMiLCAiPHN0ZGluPiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBAcG9wcGVyanMvY29yZSB2Mi4xMS4wIC0gTUlUIExpY2Vuc2VcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gIGlmIChub2RlID09IG51bGwpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgaWYgKG5vZGUudG9TdHJpbmcoKSAhPT0gJ1tvYmplY3QgV2luZG93XScpIHtcbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICByZXR1cm4gb3duZXJEb2N1bWVudCA/IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93IDogd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIGlzRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNIVE1MRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkhUTUxFbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc1NoYWRvd1Jvb3Qobm9kZSkge1xuICAvLyBJRSAxMSBoYXMgbm8gU2hhZG93Um9vdFxuICBpZiAodHlwZW9mIFNoYWRvd1Jvb3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuU2hhZG93Um9vdDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xufVxuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG52YXIgcm91bmQgPSBNYXRoLnJvdW5kO1xuXG5mdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgaW5jbHVkZVNjYWxlKSB7XG4gIGlmIChpbmNsdWRlU2NhbGUgPT09IHZvaWQgMCkge1xuICAgIGluY2x1ZGVTY2FsZSA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgc2NhbGVYID0gMTtcbiAgdmFyIHNjYWxlWSA9IDE7XG5cbiAgaWYgKGlzSFRNTEVsZW1lbnQoZWxlbWVudCkgJiYgaW5jbHVkZVNjYWxlKSB7XG4gICAgdmFyIG9mZnNldEhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIHZhciBvZmZzZXRXaWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7IC8vIERvIG5vdCBhdHRlbXB0IHRvIGRpdmlkZSBieSAwLCBvdGhlcndpc2Ugd2UgZ2V0IGBJbmZpbml0eWAgYXMgc2NhbGVcbiAgICAvLyBGYWxsYmFjayB0byAxIGluIGNhc2UgYm90aCB2YWx1ZXMgYXJlIGAwYFxuXG4gICAgaWYgKG9mZnNldFdpZHRoID4gMCkge1xuICAgICAgc2NhbGVYID0gcm91bmQocmVjdC53aWR0aCkgLyBvZmZzZXRXaWR0aCB8fCAxO1xuICAgIH1cblxuICAgIGlmIChvZmZzZXRIZWlnaHQgPiAwKSB7XG4gICAgICBzY2FsZVkgPSByb3VuZChyZWN0LmhlaWdodCkgLyBvZmZzZXRIZWlnaHQgfHwgMTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiByZWN0LndpZHRoIC8gc2NhbGVYLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHQgLyBzY2FsZVksXG4gICAgdG9wOiByZWN0LnRvcCAvIHNjYWxlWSxcbiAgICByaWdodDogcmVjdC5yaWdodCAvIHNjYWxlWCxcbiAgICBib3R0b206IHJlY3QuYm90dG9tIC8gc2NhbGVZLFxuICAgIGxlZnQ6IHJlY3QubGVmdCAvIHNjYWxlWCxcbiAgICB4OiByZWN0LmxlZnQgLyBzY2FsZVgsXG4gICAgeTogcmVjdC50b3AgLyBzY2FsZVlcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsKG5vZGUpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhub2RlKTtcbiAgdmFyIHNjcm9sbExlZnQgPSB3aW4ucGFnZVhPZmZzZXQ7XG4gIHZhciBzY3JvbGxUb3AgPSB3aW4ucGFnZVlPZmZzZXQ7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IHNjcm9sbFRvcFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRIVE1MRWxlbWVudFNjcm9sbChlbGVtZW50KSB7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogZWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcDogZWxlbWVudC5zY3JvbGxUb3BcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9kZVNjcm9sbChub2RlKSB7XG4gIGlmIChub2RlID09PSBnZXRXaW5kb3cobm9kZSkgfHwgIWlzSFRNTEVsZW1lbnQobm9kZSkpIHtcbiAgICByZXR1cm4gZ2V0V2luZG93U2Nyb2xsKG5vZGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBnZXRIVE1MRWxlbWVudFNjcm9sbChub2RlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXROb2RlTmFtZShlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50ID8gKGVsZW1lbnQubm9kZU5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkge1xuICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gIHJldHVybiAoKGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQub3duZXJEb2N1bWVudCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICBlbGVtZW50LmRvY3VtZW50KSB8fCB3aW5kb3cuZG9jdW1lbnQpLmRvY3VtZW50RWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSB7XG4gIC8vIElmIDxodG1sPiBoYXMgYSBDU1Mgd2lkdGggZ3JlYXRlciB0aGFuIHRoZSB2aWV3cG9ydCwgdGhlbiB0aGlzIHdpbGwgYmVcbiAgLy8gaW5jb3JyZWN0IGZvciBSVEwuXG4gIC8vIFBvcHBlciAxIGlzIGJyb2tlbiBpbiB0aGlzIGNhc2UgYW5kIG5ldmVyIGhhZCBhIGJ1ZyByZXBvcnQgc28gbGV0J3MgYXNzdW1lXG4gIC8vIGl0J3Mgbm90IGFuIGlzc3VlLiBJIGRvbid0IHRoaW5rIGFueW9uZSBldmVyIHNwZWNpZmllcyB3aWR0aCBvbiA8aHRtbD5cbiAgLy8gYW55d2F5LlxuICAvLyBCcm93c2VycyB3aGVyZSB0aGUgbGVmdCBzY3JvbGxiYXIgZG9lc24ndCBjYXVzZSBhbiBpc3N1ZSByZXBvcnQgYDBgIGZvclxuICAvLyB0aGlzIChlLmcuIEVkZ2UgMjAxOSwgSUUxMSwgU2FmYXJpKVxuICByZXR1cm4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkubGVmdCArIGdldFdpbmRvd1Njcm9sbChlbGVtZW50KS5zY3JvbGxMZWZ0O1xufVxuXG5mdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGdldFdpbmRvdyhlbGVtZW50KS5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBpc1Njcm9sbFBhcmVudChlbGVtZW50KSB7XG4gIC8vIEZpcmVmb3ggd2FudHMgdXMgdG8gY2hlY2sgYC14YCBhbmQgYC15YCB2YXJpYXRpb25zIGFzIHdlbGxcbiAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSxcbiAgICAgIG92ZXJmbG93ID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3csXG4gICAgICBvdmVyZmxvd1ggPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1gsXG4gICAgICBvdmVyZmxvd1kgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1k7XG5cbiAgcmV0dXJuIC9hdXRvfHNjcm9sbHxvdmVybGF5fGhpZGRlbi8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCk7XG59XG5cbmZ1bmN0aW9uIGlzRWxlbWVudFNjYWxlZChlbGVtZW50KSB7XG4gIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIHNjYWxlWCA9IHJvdW5kKHJlY3Qud2lkdGgpIC8gZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAxO1xuICB2YXIgc2NhbGVZID0gcm91bmQocmVjdC5oZWlnaHQpIC8gZWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgMTtcbiAgcmV0dXJuIHNjYWxlWCAhPT0gMSB8fCBzY2FsZVkgIT09IDE7XG59IC8vIFJldHVybnMgdGhlIGNvbXBvc2l0ZSByZWN0IG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gaXRzIG9mZnNldFBhcmVudC5cbi8vIENvbXBvc2l0ZSBtZWFucyBpdCB0YWtlcyBpbnRvIGFjY291bnQgdHJhbnNmb3JtcyBhcyB3ZWxsIGFzIGxheW91dC5cblxuXG5mdW5jdGlvbiBnZXRDb21wb3NpdGVSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50LCBvZmZzZXRQYXJlbnQsIGlzRml4ZWQpIHtcbiAgaWYgKGlzRml4ZWQgPT09IHZvaWQgMCkge1xuICAgIGlzRml4ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBpc09mZnNldFBhcmVudEFuRWxlbWVudCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIG9mZnNldFBhcmVudElzU2NhbGVkID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGlzRWxlbWVudFNjYWxlZChvZmZzZXRQYXJlbnQpO1xuICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50LCBvZmZzZXRQYXJlbnRJc1NjYWxlZCk7XG4gIHZhciBzY3JvbGwgPSB7XG4gICAgc2Nyb2xsTGVmdDogMCxcbiAgICBzY3JvbGxUb3A6IDBcbiAgfTtcbiAgdmFyIG9mZnNldHMgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgaWYgKGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50IHx8ICFpc09mZnNldFBhcmVudEFuRWxlbWVudCAmJiAhaXNGaXhlZCkge1xuICAgIGlmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpICE9PSAnYm9keScgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMDc4XG4gICAgaXNTY3JvbGxQYXJlbnQoZG9jdW1lbnRFbGVtZW50KSkge1xuICAgICAgc2Nyb2xsID0gZ2V0Tm9kZVNjcm9sbChvZmZzZXRQYXJlbnQpO1xuICAgIH1cblxuICAgIGlmIChpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkpIHtcbiAgICAgIG9mZnNldHMgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50LCB0cnVlKTtcbiAgICAgIG9mZnNldHMueCArPSBvZmZzZXRQYXJlbnQuY2xpZW50TGVmdDtcbiAgICAgIG9mZnNldHMueSArPSBvZmZzZXRQYXJlbnQuY2xpZW50VG9wO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBvZmZzZXRzLnggPSBnZXRXaW5kb3dTY3JvbGxCYXJYKGRvY3VtZW50RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiByZWN0LmxlZnQgKyBzY3JvbGwuc2Nyb2xsTGVmdCAtIG9mZnNldHMueCxcbiAgICB5OiByZWN0LnRvcCArIHNjcm9sbC5zY3JvbGxUb3AgLSBvZmZzZXRzLnksXG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodFxuICB9O1xufVxuXG4vLyBtZWFucyBpdCBkb2Vzbid0IHRha2UgaW50byBhY2NvdW50IHRyYW5zZm9ybXMuXG5cbmZ1bmN0aW9uIGdldExheW91dFJlY3QoZWxlbWVudCkge1xuICB2YXIgY2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTsgLy8gVXNlIHRoZSBjbGllbnRSZWN0IHNpemVzIGlmIGl0J3Mgbm90IGJlZW4gdHJhbnNmb3JtZWQuXG4gIC8vIEZpeGVzIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTIyM1xuXG4gIHZhciB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIHZhciBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC53aWR0aCAtIHdpZHRoKSA8PSAxKSB7XG4gICAgd2lkdGggPSBjbGllbnRSZWN0LndpZHRoO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3QuaGVpZ2h0IC0gaGVpZ2h0KSA8PSAxKSB7XG4gICAgaGVpZ2h0ID0gY2xpZW50UmVjdC5oZWlnaHQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IGVsZW1lbnQub2Zmc2V0TGVmdCxcbiAgICB5OiBlbGVtZW50Lm9mZnNldFRvcCxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHRcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSB7XG4gIGlmIChnZXROb2RlTmFtZShlbGVtZW50KSA9PT0gJ2h0bWwnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gKC8vIHRoaXMgaXMgYSBxdWlja2VyIChidXQgbGVzcyB0eXBlIHNhZmUpIHdheSB0byBzYXZlIHF1aXRlIHNvbWUgYnl0ZXMgZnJvbSB0aGUgYnVuZGxlXG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXVxuICAgIC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgIGVsZW1lbnQuYXNzaWduZWRTbG90IHx8IC8vIHN0ZXAgaW50byB0aGUgc2hhZG93IERPTSBvZiB0aGUgcGFyZW50IG9mIGEgc2xvdHRlZCBub2RlXG4gICAgZWxlbWVudC5wYXJlbnROb2RlIHx8ICggLy8gRE9NIEVsZW1lbnQgZGV0ZWN0ZWRcbiAgICBpc1NoYWRvd1Jvb3QoZWxlbWVudCkgPyBlbGVtZW50Lmhvc3QgOiBudWxsKSB8fCAvLyBTaGFkb3dSb290IGRldGVjdGVkXG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IEhUTUxFbGVtZW50IGlzIGEgTm9kZVxuICAgIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSAvLyBmYWxsYmFja1xuXG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChub2RlKSB7XG4gIGlmIChbJ2h0bWwnLCAnYm9keScsICcjZG9jdW1lbnQnXS5pbmRleE9mKGdldE5vZGVOYW1lKG5vZGUpKSA+PSAwKSB7XG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICAgIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQuYm9keTtcbiAgfVxuXG4gIGlmIChpc0hUTUxFbGVtZW50KG5vZGUpICYmIGlzU2Nyb2xsUGFyZW50KG5vZGUpKSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICByZXR1cm4gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUobm9kZSkpO1xufVxuXG4vKlxuZ2l2ZW4gYSBET00gZWxlbWVudCwgcmV0dXJuIHRoZSBsaXN0IG9mIGFsbCBzY3JvbGwgcGFyZW50cywgdXAgdGhlIGxpc3Qgb2YgYW5jZXNvcnNcbnVudGlsIHdlIGdldCB0byB0aGUgdG9wIHdpbmRvdyBvYmplY3QuIFRoaXMgbGlzdCBpcyB3aGF0IHdlIGF0dGFjaCBzY3JvbGwgbGlzdGVuZXJzXG50bywgYmVjYXVzZSBpZiBhbnkgb2YgdGhlc2UgcGFyZW50IGVsZW1lbnRzIHNjcm9sbCwgd2UnbGwgbmVlZCB0byByZS1jYWxjdWxhdGUgdGhlXG5yZWZlcmVuY2UgZWxlbWVudCdzIHBvc2l0aW9uLlxuKi9cblxuZnVuY3Rpb24gbGlzdFNjcm9sbFBhcmVudHMoZWxlbWVudCwgbGlzdCkge1xuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gIGlmIChsaXN0ID09PSB2b2lkIDApIHtcbiAgICBsaXN0ID0gW107XG4gIH1cblxuICB2YXIgc2Nyb2xsUGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpO1xuICB2YXIgaXNCb2R5ID0gc2Nyb2xsUGFyZW50ID09PSAoKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5KTtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhzY3JvbGxQYXJlbnQpO1xuICB2YXIgdGFyZ2V0ID0gaXNCb2R5ID8gW3dpbl0uY29uY2F0KHdpbi52aXN1YWxWaWV3cG9ydCB8fCBbXSwgaXNTY3JvbGxQYXJlbnQoc2Nyb2xsUGFyZW50KSA/IHNjcm9sbFBhcmVudCA6IFtdKSA6IHNjcm9sbFBhcmVudDtcbiAgdmFyIHVwZGF0ZWRMaXN0ID0gbGlzdC5jb25jYXQodGFyZ2V0KTtcbiAgcmV0dXJuIGlzQm9keSA/IHVwZGF0ZWRMaXN0IDogLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IGlzQm9keSB0ZWxscyB1cyB0YXJnZXQgd2lsbCBiZSBhbiBIVE1MRWxlbWVudCBoZXJlXG4gIHVwZGF0ZWRMaXN0LmNvbmNhdChsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKHRhcmdldCkpKTtcbn1cblxuZnVuY3Rpb24gaXNUYWJsZUVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gWyd0YWJsZScsICd0ZCcsICd0aCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoZWxlbWVudCkpID49IDA7XG59XG5cbmZ1bmN0aW9uIGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy84MzdcbiAgZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xufSAvLyBgLm9mZnNldFBhcmVudGAgcmVwb3J0cyBgbnVsbGAgZm9yIGZpeGVkIGVsZW1lbnRzLCB3aGlsZSBhYnNvbHV0ZSBlbGVtZW50c1xuLy8gcmV0dXJuIHRoZSBjb250YWluaW5nIGJsb2NrXG5cblxuZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHtcbiAgdmFyIGlzRmlyZWZveCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgIT09IC0xO1xuICB2YXIgaXNJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignVHJpZGVudCcpICE9PSAtMTtcblxuICBpZiAoaXNJRSAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgLy8gSW4gSUUgOSwgMTAgYW5kIDExIGZpeGVkIGVsZW1lbnRzIGNvbnRhaW5pbmcgYmxvY2sgaXMgYWx3YXlzIGVzdGFibGlzaGVkIGJ5IHRoZSB2aWV3cG9ydFxuICAgIHZhciBlbGVtZW50Q3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcblxuICAgIGlmIChlbGVtZW50Q3NzLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICB2YXIgY3VycmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuXG4gIHdoaWxlIChpc0hUTUxFbGVtZW50KGN1cnJlbnROb2RlKSAmJiBbJ2h0bWwnLCAnYm9keSddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoY3VycmVudE5vZGUpKSA8IDApIHtcbiAgICB2YXIgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50Tm9kZSk7IC8vIFRoaXMgaXMgbm9uLWV4aGF1c3RpdmUgYnV0IGNvdmVycyB0aGUgbW9zdCBjb21tb24gQ1NTIHByb3BlcnRpZXMgdGhhdFxuICAgIC8vIGNyZWF0ZSBhIGNvbnRhaW5pbmcgYmxvY2suXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NvbnRhaW5pbmdfYmxvY2sjaWRlbnRpZnlpbmdfdGhlX2NvbnRhaW5pbmdfYmxvY2tcblxuICAgIGlmIChjc3MudHJhbnNmb3JtICE9PSAnbm9uZScgfHwgY3NzLnBlcnNwZWN0aXZlICE9PSAnbm9uZScgfHwgY3NzLmNvbnRhaW4gPT09ICdwYWludCcgfHwgWyd0cmFuc2Zvcm0nLCAncGVyc3BlY3RpdmUnXS5pbmRleE9mKGNzcy53aWxsQ2hhbmdlKSAhPT0gLTEgfHwgaXNGaXJlZm94ICYmIGNzcy53aWxsQ2hhbmdlID09PSAnZmlsdGVyJyB8fCBpc0ZpcmVmb3ggJiYgY3NzLmZpbHRlciAmJiBjc3MuZmlsdGVyICE9PSAnbm9uZScpIHtcbiAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufSAvLyBHZXRzIHRoZSBjbG9zZXN0IGFuY2VzdG9yIHBvc2l0aW9uZWQgZWxlbWVudC4gSGFuZGxlcyBzb21lIGVkZ2UgY2FzZXMsXG4vLyBzdWNoIGFzIHRhYmxlIGFuY2VzdG9ycyBhbmQgY3Jvc3MgYnJvd3NlciBidWdzLlxuXG5cbmZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xuXG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgaXNUYWJsZUVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQpO1xuICB9XG5cbiAgaWYgKG9mZnNldFBhcmVudCAmJiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2h0bWwnIHx8IGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdib2R5JyAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB8fCB3aW5kb3c7XG59XG5cbnZhciB0b3AgPSAndG9wJztcbnZhciBib3R0b20gPSAnYm90dG9tJztcbnZhciByaWdodCA9ICdyaWdodCc7XG52YXIgbGVmdCA9ICdsZWZ0JztcbnZhciBhdXRvID0gJ2F1dG8nO1xudmFyIGJhc2VQbGFjZW1lbnRzID0gW3RvcCwgYm90dG9tLCByaWdodCwgbGVmdF07XG52YXIgc3RhcnQgPSAnc3RhcnQnO1xudmFyIGVuZCA9ICdlbmQnO1xudmFyIGNsaXBwaW5nUGFyZW50cyA9ICdjbGlwcGluZ1BhcmVudHMnO1xudmFyIHZpZXdwb3J0ID0gJ3ZpZXdwb3J0JztcbnZhciBwb3BwZXIgPSAncG9wcGVyJztcbnZhciByZWZlcmVuY2UgPSAncmVmZXJlbmNlJztcbnZhciB2YXJpYXRpb25QbGFjZW1lbnRzID0gLyojX19QVVJFX18qL2Jhc2VQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIGFjYy5jb25jYXQoW3BsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG59LCBbXSk7XG52YXIgcGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9bXS5jb25jYXQoYmFzZVBsYWNlbWVudHMsIFthdXRvXSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50LCBwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pOyAvLyBtb2RpZmllcnMgdGhhdCBuZWVkIHRvIHJlYWQgdGhlIERPTVxuXG52YXIgYmVmb3JlUmVhZCA9ICdiZWZvcmVSZWFkJztcbnZhciByZWFkID0gJ3JlYWQnO1xudmFyIGFmdGVyUmVhZCA9ICdhZnRlclJlYWQnOyAvLyBwdXJlLWxvZ2ljIG1vZGlmaWVyc1xuXG52YXIgYmVmb3JlTWFpbiA9ICdiZWZvcmVNYWluJztcbnZhciBtYWluID0gJ21haW4nO1xudmFyIGFmdGVyTWFpbiA9ICdhZnRlck1haW4nOyAvLyBtb2RpZmllciB3aXRoIHRoZSBwdXJwb3NlIHRvIHdyaXRlIHRvIHRoZSBET00gKG9yIHdyaXRlIGludG8gYSBmcmFtZXdvcmsgc3RhdGUpXG5cbnZhciBiZWZvcmVXcml0ZSA9ICdiZWZvcmVXcml0ZSc7XG52YXIgd3JpdGUgPSAnd3JpdGUnO1xudmFyIGFmdGVyV3JpdGUgPSAnYWZ0ZXJXcml0ZSc7XG52YXIgbW9kaWZpZXJQaGFzZXMgPSBbYmVmb3JlUmVhZCwgcmVhZCwgYWZ0ZXJSZWFkLCBiZWZvcmVNYWluLCBtYWluLCBhZnRlck1haW4sIGJlZm9yZVdyaXRlLCB3cml0ZSwgYWZ0ZXJXcml0ZV07XG5cbmZ1bmN0aW9uIG9yZGVyKG1vZGlmaWVycykge1xuICB2YXIgbWFwID0gbmV3IE1hcCgpO1xuICB2YXIgdmlzaXRlZCA9IG5ldyBTZXQoKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBtYXAuc2V0KG1vZGlmaWVyLm5hbWUsIG1vZGlmaWVyKTtcbiAgfSk7IC8vIE9uIHZpc2l0aW5nIG9iamVjdCwgY2hlY2sgZm9yIGl0cyBkZXBlbmRlbmNpZXMgYW5kIHZpc2l0IHRoZW0gcmVjdXJzaXZlbHlcblxuICBmdW5jdGlvbiBzb3J0KG1vZGlmaWVyKSB7XG4gICAgdmlzaXRlZC5hZGQobW9kaWZpZXIubmFtZSk7XG4gICAgdmFyIHJlcXVpcmVzID0gW10uY29uY2F0KG1vZGlmaWVyLnJlcXVpcmVzIHx8IFtdLCBtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzIHx8IFtdKTtcbiAgICByZXF1aXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChkZXApIHtcbiAgICAgIGlmICghdmlzaXRlZC5oYXMoZGVwKSkge1xuICAgICAgICB2YXIgZGVwTW9kaWZpZXIgPSBtYXAuZ2V0KGRlcCk7XG5cbiAgICAgICAgaWYgKGRlcE1vZGlmaWVyKSB7XG4gICAgICAgICAgc29ydChkZXBNb2RpZmllcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXN1bHQucHVzaChtb2RpZmllcik7XG4gIH1cblxuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBpZiAoIXZpc2l0ZWQuaGFzKG1vZGlmaWVyLm5hbWUpKSB7XG4gICAgICAvLyBjaGVjayBmb3IgdmlzaXRlZCBvYmplY3RcbiAgICAgIHNvcnQobW9kaWZpZXIpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG9yZGVyTW9kaWZpZXJzKG1vZGlmaWVycykge1xuICAvLyBvcmRlciBiYXNlZCBvbiBkZXBlbmRlbmNpZXNcbiAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcihtb2RpZmllcnMpOyAvLyBvcmRlciBiYXNlZCBvbiBwaGFzZVxuXG4gIHJldHVybiBtb2RpZmllclBoYXNlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGhhc2UpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgIHJldHVybiBtb2RpZmllci5waGFzZSA9PT0gcGhhc2U7XG4gICAgfSkpO1xuICB9LCBbXSk7XG59XG5cbmZ1bmN0aW9uIGRlYm91bmNlKGZuKSB7XG4gIHZhciBwZW5kaW5nO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghcGVuZGluZykge1xuICAgICAgcGVuZGluZyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBlbmRpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgcmVzb2x2ZShmbigpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGVuZGluZztcbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0KHN0cikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gW10uY29uY2F0KGFyZ3MpLnJlZHVjZShmdW5jdGlvbiAocCwgYykge1xuICAgIHJldHVybiBwLnJlcGxhY2UoLyVzLywgYyk7XG4gIH0sIHN0cik7XG59XG5cbnZhciBJTlZBTElEX01PRElGSUVSX0VSUk9SID0gJ1BvcHBlcjogbW9kaWZpZXIgXCIlc1wiIHByb3ZpZGVkIGFuIGludmFsaWQgJXMgcHJvcGVydHksIGV4cGVjdGVkICVzIGJ1dCBnb3QgJXMnO1xudmFyIE1JU1NJTkdfREVQRU5ERU5DWV9FUlJPUiA9ICdQb3BwZXI6IG1vZGlmaWVyIFwiJXNcIiByZXF1aXJlcyBcIiVzXCIsIGJ1dCBcIiVzXCIgbW9kaWZpZXIgaXMgbm90IGF2YWlsYWJsZSc7XG52YXIgVkFMSURfUFJPUEVSVElFUyA9IFsnbmFtZScsICdlbmFibGVkJywgJ3BoYXNlJywgJ2ZuJywgJ2VmZmVjdCcsICdyZXF1aXJlcycsICdvcHRpb25zJ107XG5mdW5jdGlvbiB2YWxpZGF0ZU1vZGlmaWVycyhtb2RpZmllcnMpIHtcbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgW10uY29uY2F0KE9iamVjdC5rZXlzKG1vZGlmaWVyKSwgVkFMSURfUFJPUEVSVElFUykgLy8gSUUxMS1jb21wYXRpYmxlIHJlcGxhY2VtZW50IGZvciBgbmV3IFNldChpdGVyYWJsZSlgXG4gICAgLmZpbHRlcihmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBzZWxmKSB7XG4gICAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICduYW1lJzpcbiAgICAgICAgICBpZiAodHlwZW9mIG1vZGlmaWVyLm5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBTdHJpbmcobW9kaWZpZXIubmFtZSksICdcIm5hbWVcIicsICdcInN0cmluZ1wiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIubmFtZSkgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2VuYWJsZWQnOlxuICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXIuZW5hYmxlZCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJlbmFibGVkXCInLCAnXCJib29sZWFuXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5lbmFibGVkKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncGhhc2UnOlxuICAgICAgICAgIGlmIChtb2RpZmllclBoYXNlcy5pbmRleE9mKG1vZGlmaWVyLnBoYXNlKSA8IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcInBoYXNlXCInLCBcImVpdGhlciBcIiArIG1vZGlmaWVyUGhhc2VzLmpvaW4oJywgJyksIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLnBoYXNlKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZm4nOlxuICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXIuZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcImZuXCInLCAnXCJmdW5jdGlvblwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIuZm4pICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdlZmZlY3QnOlxuICAgICAgICAgIGlmIChtb2RpZmllci5lZmZlY3QgIT0gbnVsbCAmJiB0eXBlb2YgbW9kaWZpZXIuZWZmZWN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJlZmZlY3RcIicsICdcImZ1bmN0aW9uXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5mbikgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JlcXVpcmVzJzpcbiAgICAgICAgICBpZiAobW9kaWZpZXIucmVxdWlyZXMgIT0gbnVsbCAmJiAhQXJyYXkuaXNBcnJheShtb2RpZmllci5yZXF1aXJlcykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcInJlcXVpcmVzXCInLCAnXCJhcnJheVwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIucmVxdWlyZXMpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdyZXF1aXJlc0lmRXhpc3RzJzpcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcInJlcXVpcmVzSWZFeGlzdHNcIicsICdcImFycmF5XCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnb3B0aW9ucyc6XG4gICAgICAgIGNhc2UgJ2RhdGEnOlxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIlBvcHBlckpTOiBhbiBpbnZhbGlkIHByb3BlcnR5IGhhcyBiZWVuIHByb3ZpZGVkIHRvIHRoZSBcXFwiXCIgKyBtb2RpZmllci5uYW1lICsgXCJcXFwiIG1vZGlmaWVyLCB2YWxpZCBwcm9wZXJ0aWVzIGFyZSBcIiArIFZBTElEX1BST1BFUlRJRVMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcXFwiXCIgKyBzICsgXCJcXFwiXCI7XG4gICAgICAgICAgfSkuam9pbignLCAnKSArIFwiOyBidXQgXFxcIlwiICsga2V5ICsgXCJcXFwiIHdhcyBwcm92aWRlZC5cIik7XG4gICAgICB9XG5cbiAgICAgIG1vZGlmaWVyLnJlcXVpcmVzICYmIG1vZGlmaWVyLnJlcXVpcmVzLmZvckVhY2goZnVuY3Rpb24gKHJlcXVpcmVtZW50KSB7XG4gICAgICAgIGlmIChtb2RpZmllcnMuZmluZChmdW5jdGlvbiAobW9kKSB7XG4gICAgICAgICAgcmV0dXJuIG1vZC5uYW1lID09PSByZXF1aXJlbWVudDtcbiAgICAgICAgfSkgPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KE1JU1NJTkdfREVQRU5ERU5DWV9FUlJPUiwgU3RyaW5nKG1vZGlmaWVyLm5hbWUpLCByZXF1aXJlbWVudCwgcmVxdWlyZW1lbnQpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1bmlxdWVCeShhcnIsIGZuKSB7XG4gIHZhciBpZGVudGlmaWVycyA9IG5ldyBTZXQoKTtcbiAgcmV0dXJuIGFyci5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB2YXIgaWRlbnRpZmllciA9IGZuKGl0ZW0pO1xuXG4gICAgaWYgKCFpZGVudGlmaWVycy5oYXMoaWRlbnRpZmllcikpIHtcbiAgICAgIGlkZW50aWZpZXJzLmFkZChpZGVudGlmaWVyKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VCeU5hbWUobW9kaWZpZXJzKSB7XG4gIHZhciBtZXJnZWQgPSBtb2RpZmllcnMucmVkdWNlKGZ1bmN0aW9uIChtZXJnZWQsIGN1cnJlbnQpIHtcbiAgICB2YXIgZXhpc3RpbmcgPSBtZXJnZWRbY3VycmVudC5uYW1lXTtcbiAgICBtZXJnZWRbY3VycmVudC5uYW1lXSA9IGV4aXN0aW5nID8gT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcsIGN1cnJlbnQsIHtcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLm9wdGlvbnMsIGN1cnJlbnQub3B0aW9ucyksXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5kYXRhLCBjdXJyZW50LmRhdGEpXG4gICAgfSkgOiBjdXJyZW50O1xuICAgIHJldHVybiBtZXJnZWQ7XG4gIH0sIHt9KTsgLy8gSUUxMSBkb2VzIG5vdCBzdXBwb3J0IE9iamVjdC52YWx1ZXNcblxuICByZXR1cm4gT2JqZWN0LmtleXMobWVyZ2VkKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBtZXJnZWRba2V5XTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFZpZXdwb3J0UmVjdChlbGVtZW50KSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgdmlzdWFsVmlld3BvcnQgPSB3aW4udmlzdWFsVmlld3BvcnQ7XG4gIHZhciB3aWR0aCA9IGh0bWwuY2xpZW50V2lkdGg7XG4gIHZhciBoZWlnaHQgPSBodG1sLmNsaWVudEhlaWdodDtcbiAgdmFyIHggPSAwO1xuICB2YXIgeSA9IDA7IC8vIE5COiBUaGlzIGlzbid0IHN1cHBvcnRlZCBvbiBpT1MgPD0gMTIuIElmIHRoZSBrZXlib2FyZCBpcyBvcGVuLCB0aGUgcG9wcGVyXG4gIC8vIGNhbiBiZSBvYnNjdXJlZCB1bmRlcm5lYXRoIGl0LlxuICAvLyBBbHNvLCBgaHRtbC5jbGllbnRIZWlnaHRgIGFkZHMgdGhlIGJvdHRvbSBiYXIgaGVpZ2h0IGluIFNhZmFyaSBpT1MsIGV2ZW5cbiAgLy8gaWYgaXQgaXNuJ3Qgb3Blbiwgc28gaWYgdGhpcyBpc24ndCBhdmFpbGFibGUsIHRoZSBwb3BwZXIgd2lsbCBiZSBkZXRlY3RlZFxuICAvLyB0byBvdmVyZmxvdyB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4gdG9vIGVhcmx5LlxuXG4gIGlmICh2aXN1YWxWaWV3cG9ydCkge1xuICAgIHdpZHRoID0gdmlzdWFsVmlld3BvcnQud2lkdGg7XG4gICAgaGVpZ2h0ID0gdmlzdWFsVmlld3BvcnQuaGVpZ2h0OyAvLyBVc2VzIExheW91dCBWaWV3cG9ydCAobGlrZSBDaHJvbWU7IFNhZmFyaSBkb2VzIG5vdCBjdXJyZW50bHkpXG4gICAgLy8gSW4gQ2hyb21lLCBpdCByZXR1cm5zIGEgdmFsdWUgdmVyeSBjbG9zZSB0byAwICgrLy0pIGJ1dCBjb250YWlucyByb3VuZGluZ1xuICAgIC8vIGVycm9ycyBkdWUgdG8gZmxvYXRpbmcgcG9pbnQgbnVtYmVycywgc28gd2UgbmVlZCB0byBjaGVjayBwcmVjaXNpb24uXG4gICAgLy8gU2FmYXJpIHJldHVybnMgYSBudW1iZXIgPD0gMCwgdXN1YWxseSA8IC0xIHdoZW4gcGluY2gtem9vbWVkXG4gICAgLy8gRmVhdHVyZSBkZXRlY3Rpb24gZmFpbHMgaW4gbW9iaWxlIGVtdWxhdGlvbiBtb2RlIGluIENocm9tZS5cbiAgICAvLyBNYXRoLmFicyh3aW4uaW5uZXJXaWR0aCAvIHZpc3VhbFZpZXdwb3J0LnNjYWxlIC0gdmlzdWFsVmlld3BvcnQud2lkdGgpIDxcbiAgICAvLyAwLjAwMVxuICAgIC8vIEZhbGxiYWNrIGhlcmU6IFwiTm90IFNhZmFyaVwiIHVzZXJBZ2VudFxuXG4gICAgaWYgKCEvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICB4ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdDtcbiAgICAgIHkgPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3A7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgeDogeCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCksXG4gICAgeTogeVxuICB9O1xufVxuXG4vLyBvZiB0aGUgYDxodG1sPmAgYW5kIGA8Ym9keT5gIHJlY3QgYm91bmRzIGlmIGhvcml6b250YWxseSBzY3JvbGxhYmxlXG5cbmZ1bmN0aW9uIGdldERvY3VtZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciB3aW5TY3JvbGwgPSBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCk7XG4gIHZhciBib2R5ID0gKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5O1xuICB2YXIgd2lkdGggPSBtYXgoaHRtbC5zY3JvbGxXaWR0aCwgaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuc2Nyb2xsV2lkdGggOiAwLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApO1xuICB2YXIgaGVpZ2h0ID0gbWF4KGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLmNsaWVudEhlaWdodCwgYm9keSA/IGJvZHkuc2Nyb2xsSGVpZ2h0IDogMCwgYm9keSA/IGJvZHkuY2xpZW50SGVpZ2h0IDogMCk7XG4gIHZhciB4ID0gLXdpblNjcm9sbC5zY3JvbGxMZWZ0ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KTtcbiAgdmFyIHkgPSAtd2luU2Nyb2xsLnNjcm9sbFRvcDtcblxuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShib2R5IHx8IGh0bWwpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICB4ICs9IG1heChodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApIC0gd2lkdGg7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29udGFpbnMocGFyZW50LCBjaGlsZCkge1xuICB2YXIgcm9vdE5vZGUgPSBjaGlsZC5nZXRSb290Tm9kZSAmJiBjaGlsZC5nZXRSb290Tm9kZSgpOyAvLyBGaXJzdCwgYXR0ZW1wdCB3aXRoIGZhc3RlciBuYXRpdmUgbWV0aG9kXG5cbiAgaWYgKHBhcmVudC5jb250YWlucyhjaGlsZCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyB0aGVuIGZhbGxiYWNrIHRvIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiB3aXRoIFNoYWRvdyBET00gc3VwcG9ydFxuICBlbHNlIGlmIChyb290Tm9kZSAmJiBpc1NoYWRvd1Jvb3Qocm9vdE5vZGUpKSB7XG4gICAgICB2YXIgbmV4dCA9IGNoaWxkO1xuXG4gICAgICBkbyB7XG4gICAgICAgIGlmIChuZXh0ICYmIHBhcmVudC5pc1NhbWVOb2RlKG5leHQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddOiBuZWVkIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhpcy4uLlxuXG5cbiAgICAgICAgbmV4dCA9IG5leHQucGFyZW50Tm9kZSB8fCBuZXh0Lmhvc3Q7XG4gICAgICB9IHdoaWxlIChuZXh0KTtcbiAgICB9IC8vIEdpdmUgdXAsIHRoZSByZXN1bHQgaXMgZmFsc2VcblxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcmVjdFRvQ2xpZW50UmVjdChyZWN0KSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByZWN0LCB7XG4gICAgbGVmdDogcmVjdC54LFxuICAgIHRvcDogcmVjdC55LFxuICAgIHJpZ2h0OiByZWN0LnggKyByZWN0LndpZHRoLFxuICAgIGJvdHRvbTogcmVjdC55ICsgcmVjdC5oZWlnaHRcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCk7XG4gIHJlY3QudG9wID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudFRvcDtcbiAgcmVjdC5sZWZ0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRMZWZ0O1xuICByZWN0LmJvdHRvbSA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIHJlY3QucmlnaHQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LndpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgcmVjdC5oZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC54ID0gcmVjdC5sZWZ0O1xuICByZWN0LnkgPSByZWN0LnRvcDtcbiAgcmV0dXJuIHJlY3Q7XG59XG5cbmZ1bmN0aW9uIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50KSB7XG4gIHJldHVybiBjbGlwcGluZ1BhcmVudCA9PT0gdmlld3BvcnQgPyByZWN0VG9DbGllbnRSZWN0KGdldFZpZXdwb3J0UmVjdChlbGVtZW50KSkgOiBpc0VsZW1lbnQoY2xpcHBpbmdQYXJlbnQpID8gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoY2xpcHBpbmdQYXJlbnQpIDogcmVjdFRvQ2xpZW50UmVjdChnZXREb2N1bWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKSk7XG59IC8vIEEgXCJjbGlwcGluZyBwYXJlbnRcIiBpcyBhbiBvdmVyZmxvd2FibGUgY29udGFpbmVyIHdpdGggdGhlIGNoYXJhY3RlcmlzdGljIG9mXG4vLyBjbGlwcGluZyAob3IgaGlkaW5nKSBvdmVyZmxvd2luZyBlbGVtZW50cyB3aXRoIGEgcG9zaXRpb24gZGlmZmVyZW50IGZyb21cbi8vIGBpbml0aWFsYFxuXG5cbmZ1bmN0aW9uIGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSB7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSBsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKGVsZW1lbnQpKTtcbiAgdmFyIGNhbkVzY2FwZUNsaXBwaW5nID0gWydhYnNvbHV0ZScsICdmaXhlZCddLmluZGV4T2YoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbikgPj0gMDtcbiAgdmFyIGNsaXBwZXJFbGVtZW50ID0gY2FuRXNjYXBlQ2xpcHBpbmcgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSA/IGdldE9mZnNldFBhcmVudChlbGVtZW50KSA6IGVsZW1lbnQ7XG5cbiAgaWYgKCFpc0VsZW1lbnQoY2xpcHBlckVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy8xNDE0XG5cblxuICByZXR1cm4gY2xpcHBpbmdQYXJlbnRzLmZpbHRlcihmdW5jdGlvbiAoY2xpcHBpbmdQYXJlbnQpIHtcbiAgICByZXR1cm4gaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSAmJiBjb250YWlucyhjbGlwcGluZ1BhcmVudCwgY2xpcHBlckVsZW1lbnQpICYmIGdldE5vZGVOYW1lKGNsaXBwaW5nUGFyZW50KSAhPT0gJ2JvZHknICYmIChjYW5Fc2NhcGVDbGlwcGluZyA/IGdldENvbXB1dGVkU3R5bGUoY2xpcHBpbmdQYXJlbnQpLnBvc2l0aW9uICE9PSAnc3RhdGljJyA6IHRydWUpO1xuICB9KTtcbn0gLy8gR2V0cyB0aGUgbWF4aW11bSBhcmVhIHRoYXQgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZSBpbiBkdWUgdG8gYW55IG51bWJlciBvZlxuLy8gY2xpcHBpbmcgcGFyZW50c1xuXG5cbmZ1bmN0aW9uIGdldENsaXBwaW5nUmVjdChlbGVtZW50LCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5KSB7XG4gIHZhciBtYWluQ2xpcHBpbmdQYXJlbnRzID0gYm91bmRhcnkgPT09ICdjbGlwcGluZ1BhcmVudHMnID8gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIDogW10uY29uY2F0KGJvdW5kYXJ5KTtcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IFtdLmNvbmNhdChtYWluQ2xpcHBpbmdQYXJlbnRzLCBbcm9vdEJvdW5kYXJ5XSk7XG4gIHZhciBmaXJzdENsaXBwaW5nUGFyZW50ID0gY2xpcHBpbmdQYXJlbnRzWzBdO1xuICB2YXIgY2xpcHBpbmdSZWN0ID0gY2xpcHBpbmdQYXJlbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjUmVjdCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgICB2YXIgcmVjdCA9IGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50KTtcbiAgICBhY2NSZWN0LnRvcCA9IG1heChyZWN0LnRvcCwgYWNjUmVjdC50b3ApO1xuICAgIGFjY1JlY3QucmlnaHQgPSBtaW4ocmVjdC5yaWdodCwgYWNjUmVjdC5yaWdodCk7XG4gICAgYWNjUmVjdC5ib3R0b20gPSBtaW4ocmVjdC5ib3R0b20sIGFjY1JlY3QuYm90dG9tKTtcbiAgICBhY2NSZWN0LmxlZnQgPSBtYXgocmVjdC5sZWZ0LCBhY2NSZWN0LmxlZnQpO1xuICAgIHJldHVybiBhY2NSZWN0O1xuICB9LCBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBmaXJzdENsaXBwaW5nUGFyZW50KSk7XG4gIGNsaXBwaW5nUmVjdC53aWR0aCA9IGNsaXBwaW5nUmVjdC5yaWdodCAtIGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QuaGVpZ2h0ID0gY2xpcHBpbmdSZWN0LmJvdHRvbSAtIGNsaXBwaW5nUmVjdC50b3A7XG4gIGNsaXBwaW5nUmVjdC54ID0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC55ID0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgcmV0dXJuIGNsaXBwaW5nUmVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG59XG5cbmZ1bmN0aW9uIGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSA+PSAwID8gJ3gnIDogJ3knO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciByZWZlcmVuY2UgPSBfcmVmLnJlZmVyZW5jZSxcbiAgICAgIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQgPyBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgdmFyaWF0aW9uID0gcGxhY2VtZW50ID8gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgY29tbW9uWCA9IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoIC8gMiAtIGVsZW1lbnQud2lkdGggLyAyO1xuICB2YXIgY29tbW9uWSA9IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodCAvIDIgLSBlbGVtZW50LmhlaWdodCAvIDI7XG4gIHZhciBvZmZzZXRzO1xuXG4gIHN3aXRjaCAoYmFzZVBsYWNlbWVudCkge1xuICAgIGNhc2UgdG9wOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgLSBlbGVtZW50LmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBib3R0b206XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcmlnaHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBsZWZ0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggLSBlbGVtZW50LndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLngsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55XG4gICAgICB9O1xuICB9XG5cbiAgdmFyIG1haW5BeGlzID0gYmFzZVBsYWNlbWVudCA/IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KSA6IG51bGw7XG5cbiAgaWYgKG1haW5BeGlzICE9IG51bGwpIHtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHN3aXRjaCAodmFyaWF0aW9uKSB7XG4gICAgICBjYXNlIHN0YXJ0OlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdIC0gKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBlbmQ6XG4gICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gKyAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvZmZzZXRzO1xufVxuXG5mdW5jdGlvbiBnZXRGcmVzaFNpZGVPYmplY3QoKSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1lcmdlUGFkZGluZ09iamVjdChwYWRkaW5nT2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBnZXRGcmVzaFNpZGVPYmplY3QoKSwgcGFkZGluZ09iamVjdCk7XG59XG5cbmZ1bmN0aW9uIGV4cGFuZFRvSGFzaE1hcCh2YWx1ZSwga2V5cykge1xuICByZXR1cm4ga2V5cy5yZWR1Y2UoZnVuY3Rpb24gKGhhc2hNYXAsIGtleSkge1xuICAgIGhhc2hNYXBba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiBoYXNoTWFwO1xuICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIGRldGVjdE92ZXJmbG93KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgX29wdGlvbnMkcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMkcGxhY2VtZW50ID09PSB2b2lkIDAgPyBzdGF0ZS5wbGFjZW1lbnQgOiBfb3B0aW9ucyRwbGFjZW1lbnQsXG4gICAgICBfb3B0aW9ucyRib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucyRib3VuZGFyeSA9PT0gdm9pZCAwID8gY2xpcHBpbmdQYXJlbnRzIDogX29wdGlvbnMkYm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRyb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucyRyb290Qm91bmRhcnkgPT09IHZvaWQgMCA/IHZpZXdwb3J0IDogX29wdGlvbnMkcm9vdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZWxlbWVudENvbnRlID0gX29wdGlvbnMuZWxlbWVudENvbnRleHQsXG4gICAgICBlbGVtZW50Q29udGV4dCA9IF9vcHRpb25zJGVsZW1lbnRDb250ZSA9PT0gdm9pZCAwID8gcG9wcGVyIDogX29wdGlvbnMkZWxlbWVudENvbnRlLFxuICAgICAgX29wdGlvbnMkYWx0Qm91bmRhcnkgPSBfb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMkYWx0Qm91bmRhcnkgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucyRwYWRkaW5nID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkcGFkZGluZztcbiAgdmFyIHBhZGRpbmdPYmplY3QgPSBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xuICB2YXIgYWx0Q29udGV4dCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyByZWZlcmVuY2UgOiBwb3BwZXI7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW2FsdEJvdW5kYXJ5ID8gYWx0Q29udGV4dCA6IGVsZW1lbnRDb250ZXh0XTtcbiAgdmFyIGNsaXBwaW5nQ2xpZW50UmVjdCA9IGdldENsaXBwaW5nUmVjdChpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50IDogZWxlbWVudC5jb250ZXh0RWxlbWVudCB8fCBnZXREb2N1bWVudEVsZW1lbnQoc3RhdGUuZWxlbWVudHMucG9wcGVyKSwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSk7XG4gIHZhciByZWZlcmVuY2VDbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHN0YXRlLmVsZW1lbnRzLnJlZmVyZW5jZSk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlQ2xpZW50UmVjdCxcbiAgICBlbGVtZW50OiBwb3BwZXJSZWN0LFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pO1xuICB2YXIgcG9wcGVyQ2xpZW50UmVjdCA9IHJlY3RUb0NsaWVudFJlY3QoT2JqZWN0LmFzc2lnbih7fSwgcG9wcGVyUmVjdCwgcG9wcGVyT2Zmc2V0cykpO1xuICB2YXIgZWxlbWVudENsaWVudFJlY3QgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcG9wcGVyQ2xpZW50UmVjdCA6IHJlZmVyZW5jZUNsaWVudFJlY3Q7IC8vIHBvc2l0aXZlID0gb3ZlcmZsb3dpbmcgdGhlIGNsaXBwaW5nIHJlY3RcbiAgLy8gMCBvciBuZWdhdGl2ZSA9IHdpdGhpbiB0aGUgY2xpcHBpbmcgcmVjdFxuXG4gIHZhciBvdmVyZmxvd09mZnNldHMgPSB7XG4gICAgdG9wOiBjbGlwcGluZ0NsaWVudFJlY3QudG9wIC0gZWxlbWVudENsaWVudFJlY3QudG9wICsgcGFkZGluZ09iamVjdC50b3AsXG4gICAgYm90dG9tOiBlbGVtZW50Q2xpZW50UmVjdC5ib3R0b20gLSBjbGlwcGluZ0NsaWVudFJlY3QuYm90dG9tICsgcGFkZGluZ09iamVjdC5ib3R0b20sXG4gICAgbGVmdDogY2xpcHBpbmdDbGllbnRSZWN0LmxlZnQgLSBlbGVtZW50Q2xpZW50UmVjdC5sZWZ0ICsgcGFkZGluZ09iamVjdC5sZWZ0LFxuICAgIHJpZ2h0OiBlbGVtZW50Q2xpZW50UmVjdC5yaWdodCAtIGNsaXBwaW5nQ2xpZW50UmVjdC5yaWdodCArIHBhZGRpbmdPYmplY3QucmlnaHRcbiAgfTtcbiAgdmFyIG9mZnNldERhdGEgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldDsgLy8gT2Zmc2V0cyBjYW4gYmUgYXBwbGllZCBvbmx5IHRvIHRoZSBwb3BwZXIgZWxlbWVudFxuXG4gIGlmIChlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyICYmIG9mZnNldERhdGEpIHtcbiAgICB2YXIgb2Zmc2V0ID0gb2Zmc2V0RGF0YVtwbGFjZW1lbnRdO1xuICAgIE9iamVjdC5rZXlzKG92ZXJmbG93T2Zmc2V0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbXVsdGlwbHkgPSBbcmlnaHQsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAxIDogLTE7XG4gICAgICB2YXIgYXhpcyA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAneScgOiAneCc7XG4gICAgICBvdmVyZmxvd09mZnNldHNba2V5XSArPSBvZmZzZXRbYXhpc10gKiBtdWx0aXBseTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBvdmVyZmxvd09mZnNldHM7XG59XG5cbnZhciBJTlZBTElEX0VMRU1FTlRfRVJST1IgPSAnUG9wcGVyOiBJbnZhbGlkIHJlZmVyZW5jZSBvciBwb3BwZXIgYXJndW1lbnQgcHJvdmlkZWQuIFRoZXkgbXVzdCBiZSBlaXRoZXIgYSBET00gZWxlbWVudCBvciB2aXJ0dWFsIGVsZW1lbnQuJztcbnZhciBJTkZJTklURV9MT09QX0VSUk9SID0gJ1BvcHBlcjogQW4gaW5maW5pdGUgbG9vcCBpbiB0aGUgbW9kaWZpZXJzIGN5Y2xlIGhhcyBiZWVuIGRldGVjdGVkISBUaGUgY3ljbGUgaGFzIGJlZW4gaW50ZXJydXB0ZWQgdG8gcHJldmVudCBhIGJyb3dzZXIgY3Jhc2guJztcbnZhciBERUZBVUxUX09QVElPTlMgPSB7XG4gIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gIG1vZGlmaWVyczogW10sXG4gIHN0cmF0ZWd5OiAnYWJzb2x1dGUnXG59O1xuXG5mdW5jdGlvbiBhcmVWYWxpZEVsZW1lbnRzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuICFhcmdzLnNvbWUoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gIShlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9PT0gJ2Z1bmN0aW9uJyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwb3BwZXJHZW5lcmF0b3IoZ2VuZXJhdG9yT3B0aW9ucykge1xuICBpZiAoZ2VuZXJhdG9yT3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgZ2VuZXJhdG9yT3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9nZW5lcmF0b3JPcHRpb25zID0gZ2VuZXJhdG9yT3B0aW9ucyxcbiAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRNb2RpZmllcnMsXG4gICAgICBkZWZhdWx0TW9kaWZpZXJzID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmID09PSB2b2lkIDAgPyBbXSA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZixcbiAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0T3B0aW9ucyxcbiAgICAgIGRlZmF1bHRPcHRpb25zID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9PT0gdm9pZCAwID8gREVGQVVMVF9PUFRJT05TIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmMjtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZVBvcHBlcihyZWZlcmVuY2UsIHBvcHBlciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcbiAgICB9XG5cbiAgICB2YXIgc3RhdGUgPSB7XG4gICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgb3JkZXJlZE1vZGlmaWVyczogW10sXG4gICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMsIGRlZmF1bHRPcHRpb25zKSxcbiAgICAgIG1vZGlmaWVyc0RhdGE6IHt9LFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgcmVmZXJlbmNlOiByZWZlcmVuY2UsXG4gICAgICAgIHBvcHBlcjogcG9wcGVyXG4gICAgICB9LFxuICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfTtcbiAgICB2YXIgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgIHZhciBpc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHZhciBpbnN0YW5jZSA9IHtcbiAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgIHNldE9wdGlvbnM6IGZ1bmN0aW9uIHNldE9wdGlvbnMoc2V0T3B0aW9uc0FjdGlvbikge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzZXRPcHRpb25zQWN0aW9uID09PSAnZnVuY3Rpb24nID8gc2V0T3B0aW9uc0FjdGlvbihzdGF0ZS5vcHRpb25zKSA6IHNldE9wdGlvbnNBY3Rpb247XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgc3RhdGUub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBzdGF0ZS5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgc3RhdGUuc2Nyb2xsUGFyZW50cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGlzRWxlbWVudChyZWZlcmVuY2UpID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlKSA6IHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCkgOiBbXSxcbiAgICAgICAgICBwb3BwZXI6IGxpc3RTY3JvbGxQYXJlbnRzKHBvcHBlcilcbiAgICAgICAgfTsgLy8gT3JkZXJzIHRoZSBtb2RpZmllcnMgYmFzZWQgb24gdGhlaXIgZGVwZW5kZW5jaWVzIGFuZCBgcGhhc2VgXG4gICAgICAgIC8vIHByb3BlcnRpZXNcblxuICAgICAgICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyTW9kaWZpZXJzKG1lcmdlQnlOYW1lKFtdLmNvbmNhdChkZWZhdWx0TW9kaWZpZXJzLCBzdGF0ZS5vcHRpb25zLm1vZGlmaWVycykpKTsgLy8gU3RyaXAgb3V0IGRpc2FibGVkIG1vZGlmaWVyc1xuXG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobSkge1xuICAgICAgICAgIHJldHVybiBtLmVuYWJsZWQ7XG4gICAgICAgIH0pOyAvLyBWYWxpZGF0ZSB0aGUgcHJvdmlkZWQgbW9kaWZpZXJzIHNvIHRoYXQgdGhlIGNvbnN1bWVyIHdpbGwgZ2V0IHdhcm5lZFxuICAgICAgICAvLyBpZiBvbmUgb2YgdGhlIG1vZGlmaWVycyBpcyBpbnZhbGlkIGZvciBhbnkgcmVhc29uXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgIHZhciBtb2RpZmllcnMgPSB1bmlxdWVCeShbXS5jb25jYXQob3JkZXJlZE1vZGlmaWVycywgc3RhdGUub3B0aW9ucy5tb2RpZmllcnMpLCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBfcmVmLm5hbWU7XG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YWxpZGF0ZU1vZGlmaWVycyhtb2RpZmllcnMpO1xuXG4gICAgICAgICAgaWYgKGdldEJhc2VQbGFjZW1lbnQoc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgICAgICAgICB2YXIgZmxpcE1vZGlmaWVyID0gc3RhdGUub3JkZXJlZE1vZGlmaWVycy5maW5kKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICAgICAgICB2YXIgbmFtZSA9IF9yZWYyLm5hbWU7XG4gICAgICAgICAgICAgIHJldHVybiBuYW1lID09PSAnZmxpcCc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFmbGlwTW9kaWZpZXIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhdXRvXCIgcGxhY2VtZW50cyByZXF1aXJlIHRoZSBcImZsaXBcIiBtb2RpZmllciBiZScsICdwcmVzZW50IGFuZCBlbmFibGVkIHRvIHdvcmsuJ10uam9pbignICcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHBvcHBlciksXG4gICAgICAgICAgICAgIG1hcmdpblRvcCA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpblRvcCxcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5SaWdodCxcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luQm90dG9tLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0ID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luTGVmdDsgLy8gV2Ugbm8gbG9uZ2VyIHRha2UgaW50byBhY2NvdW50IGBtYXJnaW5zYCBvbiB0aGUgcG9wcGVyLCBhbmQgaXQgY2FuXG4gICAgICAgICAgLy8gY2F1c2UgYnVncyB3aXRoIHBvc2l0aW9uaW5nLCBzbyB3ZSdsbCB3YXJuIHRoZSBjb25zdW1lclxuXG5cbiAgICAgICAgICBpZiAoW21hcmdpblRvcCwgbWFyZ2luUmlnaHQsIG1hcmdpbkJvdHRvbSwgbWFyZ2luTGVmdF0uc29tZShmdW5jdGlvbiAobWFyZ2luKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChtYXJnaW4pO1xuICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oWydQb3BwZXI6IENTUyBcIm1hcmdpblwiIHN0eWxlcyBjYW5ub3QgYmUgdXNlZCB0byBhcHBseSBwYWRkaW5nJywgJ2JldHdlZW4gdGhlIHBvcHBlciBhbmQgaXRzIHJlZmVyZW5jZSBlbGVtZW50IG9yIGJvdW5kYXJ5LicsICdUbyByZXBsaWNhdGUgbWFyZ2luLCB1c2UgdGhlIGBvZmZzZXRgIG1vZGlmaWVyLCBhcyB3ZWxsIGFzJywgJ3RoZSBgcGFkZGluZ2Agb3B0aW9uIGluIHRoZSBgcHJldmVudE92ZXJmbG93YCBhbmQgYGZsaXBgJywgJ21vZGlmaWVycy4nXS5qb2luKCcgJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJ1bk1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2UudXBkYXRlKCk7XG4gICAgICB9LFxuICAgICAgLy8gU3luYyB1cGRhdGUgXHUyMDEzIGl0IHdpbGwgYWx3YXlzIGJlIGV4ZWN1dGVkLCBldmVuIGlmIG5vdCBuZWNlc3NhcnkuIFRoaXNcbiAgICAgIC8vIGlzIHVzZWZ1bCBmb3IgbG93IGZyZXF1ZW5jeSB1cGRhdGVzIHdoZXJlIHN5bmMgYmVoYXZpb3Igc2ltcGxpZmllcyB0aGVcbiAgICAgIC8vIGxvZ2ljLlxuICAgICAgLy8gRm9yIGhpZ2ggZnJlcXVlbmN5IHVwZGF0ZXMgKGUuZy4gYHJlc2l6ZWAgYW5kIGBzY3JvbGxgIGV2ZW50cyksIGFsd2F5c1xuICAgICAgLy8gcHJlZmVyIHRoZSBhc3luYyBQb3BwZXIjdXBkYXRlIG1ldGhvZFxuICAgICAgZm9yY2VVcGRhdGU6IGZ1bmN0aW9uIGZvcmNlVXBkYXRlKCkge1xuICAgICAgICBpZiAoaXNEZXN0cm95ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3N0YXRlJGVsZW1lbnRzID0gc3RhdGUuZWxlbWVudHMsXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBfc3RhdGUkZWxlbWVudHMucmVmZXJlbmNlLFxuICAgICAgICAgICAgcG9wcGVyID0gX3N0YXRlJGVsZW1lbnRzLnBvcHBlcjsgLy8gRG9uJ3QgcHJvY2VlZCBpZiBgcmVmZXJlbmNlYCBvciBgcG9wcGVyYCBhcmUgbm90IHZhbGlkIGVsZW1lbnRzXG4gICAgICAgIC8vIGFueW1vcmVcblxuICAgICAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihJTlZBTElEX0VMRU1FTlRfRVJST1IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBTdG9yZSB0aGUgcmVmZXJlbmNlIGFuZCBwb3BwZXIgcmVjdHMgdG8gYmUgcmVhZCBieSBtb2RpZmllcnNcblxuXG4gICAgICAgIHN0YXRlLnJlY3RzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogZ2V0Q29tcG9zaXRlUmVjdChyZWZlcmVuY2UsIGdldE9mZnNldFBhcmVudChwb3BwZXIpLCBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnKSxcbiAgICAgICAgICBwb3BwZXI6IGdldExheW91dFJlY3QocG9wcGVyKVxuICAgICAgICB9OyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byByZXNldCB0aGUgY3VycmVudCB1cGRhdGUgY3ljbGUuIFRoZVxuICAgICAgICAvLyBtb3N0IGNvbW1vbiB1c2UgY2FzZSBmb3IgdGhpcyBpcyB0aGUgYGZsaXBgIG1vZGlmaWVyIGNoYW5naW5nIHRoZVxuICAgICAgICAvLyBwbGFjZW1lbnQsIHdoaWNoIHRoZW4gbmVlZHMgdG8gcmUtcnVuIGFsbCB0aGUgbW9kaWZpZXJzLCBiZWNhdXNlIHRoZVxuICAgICAgICAvLyBsb2dpYyB3YXMgcHJldmlvdXNseSByYW4gZm9yIHRoZSBwcmV2aW91cyBwbGFjZW1lbnQgYW5kIGlzIHRoZXJlZm9yZVxuICAgICAgICAvLyBzdGFsZS9pbmNvcnJlY3RcblxuICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5wbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDsgLy8gT24gZWFjaCB1cGRhdGUgY3ljbGUsIHRoZSBgbW9kaWZpZXJzRGF0YWAgcHJvcGVydHkgZm9yIGVhY2ggbW9kaWZpZXJcbiAgICAgICAgLy8gaXMgZmlsbGVkIHdpdGggdGhlIGluaXRpYWwgZGF0YSBzcGVjaWZpZWQgYnkgdGhlIG1vZGlmaWVyLiBUaGlzIG1lYW5zXG4gICAgICAgIC8vIGl0IGRvZXNuJ3QgcGVyc2lzdCBhbmQgaXMgZnJlc2ggb24gZWFjaCB1cGRhdGUuXG4gICAgICAgIC8vIFRvIGVuc3VyZSBwZXJzaXN0ZW50IGRhdGEsIHVzZSBgJHtuYW1lfSNwZXJzaXN0ZW50YFxuXG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGUubW9kaWZpZXJzRGF0YVttb2RpZmllci5uYW1lXSA9IE9iamVjdC5hc3NpZ24oe30sIG1vZGlmaWVyLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIF9fZGVidWdfbG9vcHNfXyA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHN0YXRlLm9yZGVyZWRNb2RpZmllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgX19kZWJ1Z19sb29wc19fICs9IDE7XG5cbiAgICAgICAgICAgIGlmIChfX2RlYnVnX2xvb3BzX18gPiAxMDApIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihJTkZJTklURV9MT09QX0VSUk9SKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHN0YXRlLnJlc2V0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICAgICAgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBfc3RhdGUkb3JkZXJlZE1vZGlmaWUgPSBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzW2luZGV4XSxcbiAgICAgICAgICAgICAgZm4gPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUuZm4sXG4gICAgICAgICAgICAgIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUub3B0aW9ucyxcbiAgICAgICAgICAgICAgX29wdGlvbnMgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID09PSB2b2lkIDAgPyB7fSA6IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIsXG4gICAgICAgICAgICAgIG5hbWUgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUubmFtZTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHN0YXRlID0gZm4oe1xuICAgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IF9vcHRpb25zLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2VcbiAgICAgICAgICAgIH0pIHx8IHN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIEFzeW5jIGFuZCBvcHRpbWlzdGljYWxseSBvcHRpbWl6ZWQgdXBkYXRlIFx1MjAxMyBpdCB3aWxsIG5vdCBiZSBleGVjdXRlZCBpZlxuICAgICAgLy8gbm90IG5lY2Vzc2FyeSAoZGVib3VuY2VkIHRvIHJ1biBhdCBtb3N0IG9uY2UtcGVyLXRpY2spXG4gICAgICB1cGRhdGU6IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICByZXNvbHZlKHN0YXRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgaXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoSU5WQUxJRF9FTEVNRU5UX0VSUk9SKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIGluc3RhbmNlLnNldE9wdGlvbnMob3B0aW9ucykudGhlbihmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIGlmICghaXNEZXN0cm95ZWQgJiYgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKSB7XG4gICAgICAgIG9wdGlvbnMub25GaXJzdFVwZGF0ZShzdGF0ZSk7XG4gICAgICB9XG4gICAgfSk7IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvZGUgYmVmb3JlIHRoZSBmaXJzdFxuICAgIC8vIHVwZGF0ZSBjeWNsZSBydW5zLiBUaGV5IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIHVwZGF0ZVxuICAgIC8vIGN5Y2xlLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGEgbW9kaWZpZXIgYWRkcyBzb21lIHBlcnNpc3RlbnQgZGF0YSB0aGF0XG4gICAgLy8gb3RoZXIgbW9kaWZpZXJzIG5lZWQgdG8gdXNlLCBidXQgdGhlIG1vZGlmaWVyIGlzIHJ1biBhZnRlciB0aGUgZGVwZW5kZW50XG4gICAgLy8gb25lLlxuXG4gICAgZnVuY3Rpb24gcnVuTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgICB2YXIgbmFtZSA9IF9yZWYzLm5hbWUsXG4gICAgICAgICAgICBfcmVmMyRvcHRpb25zID0gX3JlZjMub3B0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvbnMgPSBfcmVmMyRvcHRpb25zID09PSB2b2lkIDAgPyB7fSA6IF9yZWYzJG9wdGlvbnMsXG4gICAgICAgICAgICBlZmZlY3QgPSBfcmVmMy5lZmZlY3Q7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBlZmZlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YXIgY2xlYW51cEZuID0gZWZmZWN0KHtcbiAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgbm9vcEZuID0gZnVuY3Rpb24gbm9vcEZuKCkge307XG5cbiAgICAgICAgICBlZmZlY3RDbGVhbnVwRm5zLnB1c2goY2xlYW51cEZuIHx8IG5vb3BGbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJldHVybiBmbigpO1xuICAgICAgfSk7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xufVxuXG52YXIgcGFzc2l2ZSA9IHtcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gZWZmZWN0JDIoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJHNjcm9sbCA9IG9wdGlvbnMuc2Nyb2xsLFxuICAgICAgc2Nyb2xsID0gX29wdGlvbnMkc2Nyb2xsID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkc2Nyb2xsLFxuICAgICAgX29wdGlvbnMkcmVzaXplID0gb3B0aW9ucy5yZXNpemUsXG4gICAgICByZXNpemUgPSBfb3B0aW9ucyRyZXNpemUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyZXNpemU7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coc3RhdGUuZWxlbWVudHMucG9wcGVyKTtcbiAgdmFyIHNjcm9sbFBhcmVudHMgPSBbXS5jb25jYXQoc3RhdGUuc2Nyb2xsUGFyZW50cy5yZWZlcmVuY2UsIHN0YXRlLnNjcm9sbFBhcmVudHMucG9wcGVyKTtcblxuICBpZiAoc2Nyb2xsKSB7XG4gICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgIHNjcm9sbFBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHJlc2l6ZSkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgICBzY3JvbGxQYXJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXNpemUpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH1cbiAgfTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBldmVudExpc3RlbmVycyA9IHtcbiAgbmFtZTogJ2V2ZW50TGlzdGVuZXJzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICd3cml0ZScsXG4gIGZuOiBmdW5jdGlvbiBmbigpIHt9LFxuICBlZmZlY3Q6IGVmZmVjdCQyLFxuICBkYXRhOiB7fVxufTtcblxuZnVuY3Rpb24gcG9wcGVyT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICAvLyBPZmZzZXRzIGFyZSB0aGUgYWN0dWFsIHBvc2l0aW9uIHRoZSBwb3BwZXIgbmVlZHMgdG8gaGF2ZSB0byBiZVxuICAvLyBwcm9wZXJseSBwb3NpdGlvbmVkIG5lYXIgaXRzIHJlZmVyZW5jZSBlbGVtZW50XG4gIC8vIFRoaXMgaXMgdGhlIG1vc3QgYmFzaWMgcGxhY2VtZW50LCBhbmQgd2lsbCBiZSBhZGp1c3RlZCBieVxuICAvLyB0aGUgbW9kaWZpZXJzIGluIHRoZSBuZXh0IHN0ZXBcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICByZWZlcmVuY2U6IHN0YXRlLnJlY3RzLnJlZmVyZW5jZSxcbiAgICBlbGVtZW50OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgcG9wcGVyT2Zmc2V0cyQxID0ge1xuICBuYW1lOiAncG9wcGVyT2Zmc2V0cycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAncmVhZCcsXG4gIGZuOiBwb3BwZXJPZmZzZXRzLFxuICBkYXRhOiB7fVxufTtcblxudmFyIHVuc2V0U2lkZXMgPSB7XG4gIHRvcDogJ2F1dG8nLFxuICByaWdodDogJ2F1dG8nLFxuICBib3R0b206ICdhdXRvJyxcbiAgbGVmdDogJ2F1dG8nXG59OyAvLyBSb3VuZCB0aGUgb2Zmc2V0cyB0byB0aGUgbmVhcmVzdCBzdWl0YWJsZSBzdWJwaXhlbCBiYXNlZCBvbiB0aGUgRFBSLlxuLy8gWm9vbWluZyBjYW4gY2hhbmdlIHRoZSBEUFIsIGJ1dCBpdCBzZWVtcyB0byByZXBvcnQgYSB2YWx1ZSB0aGF0IHdpbGxcbi8vIGNsZWFubHkgZGl2aWRlIHRoZSB2YWx1ZXMgaW50byB0aGUgYXBwcm9wcmlhdGUgc3VicGl4ZWxzLlxuXG5mdW5jdGlvbiByb3VuZE9mZnNldHNCeURQUihfcmVmKSB7XG4gIHZhciB4ID0gX3JlZi54LFxuICAgICAgeSA9IF9yZWYueTtcbiAgdmFyIHdpbiA9IHdpbmRvdztcbiAgdmFyIGRwciA9IHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gIHJldHVybiB7XG4gICAgeDogcm91bmQoeCAqIGRwcikgLyBkcHIgfHwgMCxcbiAgICB5OiByb3VuZCh5ICogZHByKSAvIGRwciB8fCAwXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcFRvU3R5bGVzKF9yZWYyKSB7XG4gIHZhciBfT2JqZWN0JGFzc2lnbjI7XG5cbiAgdmFyIHBvcHBlciA9IF9yZWYyLnBvcHBlcixcbiAgICAgIHBvcHBlclJlY3QgPSBfcmVmMi5wb3BwZXJSZWN0LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZjIucGxhY2VtZW50LFxuICAgICAgdmFyaWF0aW9uID0gX3JlZjIudmFyaWF0aW9uLFxuICAgICAgb2Zmc2V0cyA9IF9yZWYyLm9mZnNldHMsXG4gICAgICBwb3NpdGlvbiA9IF9yZWYyLnBvc2l0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX3JlZjIuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgYWRhcHRpdmUgPSBfcmVmMi5hZGFwdGl2ZSxcbiAgICAgIHJvdW5kT2Zmc2V0cyA9IF9yZWYyLnJvdW5kT2Zmc2V0cyxcbiAgICAgIGlzRml4ZWQgPSBfcmVmMi5pc0ZpeGVkO1xuXG4gIHZhciBfcmVmMyA9IHJvdW5kT2Zmc2V0cyA9PT0gdHJ1ZSA/IHJvdW5kT2Zmc2V0c0J5RFBSKG9mZnNldHMpIDogdHlwZW9mIHJvdW5kT2Zmc2V0cyA9PT0gJ2Z1bmN0aW9uJyA/IHJvdW5kT2Zmc2V0cyhvZmZzZXRzKSA6IG9mZnNldHMsXG4gICAgICBfcmVmMyR4ID0gX3JlZjMueCxcbiAgICAgIHggPSBfcmVmMyR4ID09PSB2b2lkIDAgPyAwIDogX3JlZjMkeCxcbiAgICAgIF9yZWYzJHkgPSBfcmVmMy55LFxuICAgICAgeSA9IF9yZWYzJHkgPT09IHZvaWQgMCA/IDAgOiBfcmVmMyR5O1xuXG4gIHZhciBoYXNYID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneCcpO1xuICB2YXIgaGFzWSA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3knKTtcbiAgdmFyIHNpZGVYID0gbGVmdDtcbiAgdmFyIHNpZGVZID0gdG9wO1xuICB2YXIgd2luID0gd2luZG93O1xuXG4gIGlmIChhZGFwdGl2ZSkge1xuICAgIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKTtcbiAgICB2YXIgaGVpZ2h0UHJvcCA9ICdjbGllbnRIZWlnaHQnO1xuICAgIHZhciB3aWR0aFByb3AgPSAnY2xpZW50V2lkdGgnO1xuXG4gICAgaWYgKG9mZnNldFBhcmVudCA9PT0gZ2V0V2luZG93KHBvcHBlcikpIHtcbiAgICAgIG9mZnNldFBhcmVudCA9IGdldERvY3VtZW50RWxlbWVudChwb3BwZXIpO1xuXG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uICE9PSAnc3RhdGljJyAmJiBwb3NpdGlvbiA9PT0gJ2Fic29sdXRlJykge1xuICAgICAgICBoZWlnaHRQcm9wID0gJ3Njcm9sbEhlaWdodCc7XG4gICAgICAgIHdpZHRoUHJvcCA9ICdzY3JvbGxXaWR0aCc7XG4gICAgICB9XG4gICAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYXN0XTogZm9yY2UgdHlwZSByZWZpbmVtZW50LCB3ZSBjb21wYXJlIG9mZnNldFBhcmVudCB3aXRoIHdpbmRvdyBhYm92ZSwgYnV0IEZsb3cgZG9lc24ndCBkZXRlY3QgaXRcblxuXG4gICAgb2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50O1xuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gdG9wIHx8IChwbGFjZW1lbnQgPT09IGxlZnQgfHwgcGxhY2VtZW50ID09PSByaWdodCkgJiYgdmFyaWF0aW9uID09PSBlbmQpIHtcbiAgICAgIHNpZGVZID0gYm90dG9tO1xuICAgICAgdmFyIG9mZnNldFkgPSBpc0ZpeGVkICYmIHdpbi52aXN1YWxWaWV3cG9ydCA/IHdpbi52aXN1YWxWaWV3cG9ydC5oZWlnaHQgOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICAgIG9mZnNldFBhcmVudFtoZWlnaHRQcm9wXTtcbiAgICAgIHkgLT0gb2Zmc2V0WSAtIHBvcHBlclJlY3QuaGVpZ2h0O1xuICAgICAgeSAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gbGVmdCB8fCAocGxhY2VtZW50ID09PSB0b3AgfHwgcGxhY2VtZW50ID09PSBib3R0b20pICYmIHZhcmlhdGlvbiA9PT0gZW5kKSB7XG4gICAgICBzaWRlWCA9IHJpZ2h0O1xuICAgICAgdmFyIG9mZnNldFggPSBpc0ZpeGVkICYmIHdpbi52aXN1YWxWaWV3cG9ydCA/IHdpbi52aXN1YWxWaWV3cG9ydC53aWR0aCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgICAgb2Zmc2V0UGFyZW50W3dpZHRoUHJvcF07XG4gICAgICB4IC09IG9mZnNldFggLSBwb3BwZXJSZWN0LndpZHRoO1xuICAgICAgeCAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbW1vblN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHBvc2l0aW9uOiBwb3NpdGlvblxuICB9LCBhZGFwdGl2ZSAmJiB1bnNldFNpZGVzKTtcblxuICBpZiAoZ3B1QWNjZWxlcmF0aW9uKSB7XG4gICAgdmFyIF9PYmplY3QkYXNzaWduO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduID0ge30sIF9PYmplY3QkYXNzaWduW3NpZGVZXSA9IGhhc1kgPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ25bc2lkZVhdID0gaGFzWCA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbi50cmFuc2Zvcm0gPSAod2luLmRldmljZVBpeGVsUmF0aW8gfHwgMSkgPD0gMSA/IFwidHJhbnNsYXRlKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgpXCIgOiBcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgsIDApXCIsIF9PYmplY3QkYXNzaWduKSk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24yID0ge30sIF9PYmplY3QkYXNzaWduMltzaWRlWV0gPSBoYXNZID8geSArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjJbc2lkZVhdID0gaGFzWCA/IHggKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yLnRyYW5zZm9ybSA9ICcnLCBfT2JqZWN0JGFzc2lnbjIpKTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZVN0eWxlcyhfcmVmNCkge1xuICB2YXIgc3RhdGUgPSBfcmVmNC5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmNC5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID0gb3B0aW9ucy5ncHVBY2NlbGVyYXRpb24sXG4gICAgICBncHVBY2NlbGVyYXRpb24gPSBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRncHVBY2NlbGVyYXQsXG4gICAgICBfb3B0aW9ucyRhZGFwdGl2ZSA9IG9wdGlvbnMuYWRhcHRpdmUsXG4gICAgICBhZGFwdGl2ZSA9IF9vcHRpb25zJGFkYXB0aXZlID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWRhcHRpdmUsXG4gICAgICBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPSBvcHRpb25zLnJvdW5kT2Zmc2V0cyxcbiAgICAgIHJvdW5kT2Zmc2V0cyA9IF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJvdW5kT2Zmc2V0cztcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdmFyIHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldENvbXB1dGVkU3R5bGUoc3RhdGUuZWxlbWVudHMucG9wcGVyKS50cmFuc2l0aW9uUHJvcGVydHkgfHwgJyc7XG5cbiAgICBpZiAoYWRhcHRpdmUgJiYgWyd0cmFuc2Zvcm0nLCAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10uc29tZShmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgIHJldHVybiB0cmFuc2l0aW9uUHJvcGVydHkuaW5kZXhPZihwcm9wZXJ0eSkgPj0gMDtcbiAgICB9KSkge1xuICAgICAgY29uc29sZS53YXJuKFsnUG9wcGVyOiBEZXRlY3RlZCBDU1MgdHJhbnNpdGlvbnMgb24gYXQgbGVhc3Qgb25lIG9mIHRoZSBmb2xsb3dpbmcnLCAnQ1NTIHByb3BlcnRpZXM6IFwidHJhbnNmb3JtXCIsIFwidG9wXCIsIFwicmlnaHRcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIuJywgJ1xcblxcbicsICdEaXNhYmxlIHRoZSBcImNvbXB1dGVTdHlsZXNcIiBtb2RpZmllclxcJ3MgYGFkYXB0aXZlYCBvcHRpb24gdG8gYWxsb3cnLCAnZm9yIHNtb290aCB0cmFuc2l0aW9ucywgb3IgcmVtb3ZlIHRoZXNlIHByb3BlcnRpZXMgZnJvbSB0aGUgQ1NTJywgJ3RyYW5zaXRpb24gZGVjbGFyYXRpb24gb24gdGhlIHBvcHBlciBlbGVtZW50IGlmIG9ubHkgdHJhbnNpdGlvbmluZycsICdvcGFjaXR5IG9yIGJhY2tncm91bmQtY29sb3IgZm9yIGV4YW1wbGUuJywgJ1xcblxcbicsICdXZSByZWNvbW1lbmQgdXNpbmcgdGhlIHBvcHBlciBlbGVtZW50IGFzIGEgd3JhcHBlciBhcm91bmQgYW4gaW5uZXInLCAnZWxlbWVudCB0aGF0IGNhbiBoYXZlIGFueSBDU1MgcHJvcGVydHkgdHJhbnNpdGlvbmVkIGZvciBhbmltYXRpb25zLiddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbW1vblN0eWxlcyA9IHtcbiAgICBwbGFjZW1lbnQ6IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KSxcbiAgICB2YXJpYXRpb246IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpLFxuICAgIHBvcHBlcjogc3RhdGUuZWxlbWVudHMucG9wcGVyLFxuICAgIHBvcHBlclJlY3Q6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBncHVBY2NlbGVyYXRpb246IGdwdUFjY2VsZXJhdGlvbixcbiAgICBpc0ZpeGVkOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnXG4gIH07XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5wb3BwZXIsIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLFxuICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICBhZGFwdGl2ZTogYWRhcHRpdmUsXG4gICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgIH0pKSk7XG4gIH1cblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLmFycm93ID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLmFycm93LCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3csXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGFkYXB0aXZlOiBmYWxzZSxcbiAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgfSkpKTtcbiAgfVxuXG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAnZGF0YS1wb3BwZXItcGxhY2VtZW50Jzogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIGNvbXB1dGVTdHlsZXMkMSA9IHtcbiAgbmFtZTogJ2NvbXB1dGVTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ2JlZm9yZVdyaXRlJyxcbiAgZm46IGNvbXB1dGVTdHlsZXMsXG4gIGRhdGE6IHt9XG59O1xuXG4vLyBhbmQgYXBwbGllcyB0aGVtIHRvIHRoZSBIVE1MRWxlbWVudHMgc3VjaCBhcyBwb3BwZXIgYW5kIGFycm93XG5cbmZ1bmN0aW9uIGFwcGx5U3R5bGVzKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZTtcbiAgT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgc3R5bGUgPSBzdGF0ZS5zdHlsZXNbbmFtZV0gfHwge307XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbbmFtZV07IC8vIGFycm93IGlzIG9wdGlvbmFsICsgdmlydHVhbCBlbGVtZW50c1xuXG4gICAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8ICFnZXROb2RlTmFtZShlbGVtZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gRmxvdyBkb2Vzbid0IHN1cHBvcnQgdG8gZXh0ZW5kIHRoaXMgcHJvcGVydHksIGJ1dCBpdCdzIHRoZSBtb3N0XG4gICAgLy8gZWZmZWN0aXZlIHdheSB0byBhcHBseSBzdHlsZXMgdG8gYW4gSFRNTEVsZW1lbnRcbiAgICAvLyAkRmxvd0ZpeE1lW2Nhbm5vdC13cml0ZV1cblxuXG4gICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIHZhbHVlID0gYXR0cmlidXRlc1tuYW1lXTtcblxuICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlID09PSB0cnVlID8gJycgOiB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlZmZlY3QkMShfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZTtcbiAgdmFyIGluaXRpYWxTdHlsZXMgPSB7XG4gICAgcG9wcGVyOiB7XG4gICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgIGxlZnQ6ICcwJyxcbiAgICAgIHRvcDogJzAnLFxuICAgICAgbWFyZ2luOiAnMCdcbiAgICB9LFxuICAgIGFycm93OiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgIH0sXG4gICAgcmVmZXJlbmNlOiB7fVxuICB9O1xuICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLnBvcHBlci5zdHlsZSwgaW5pdGlhbFN0eWxlcy5wb3BwZXIpO1xuICBzdGF0ZS5zdHlsZXMgPSBpbml0aWFsU3R5bGVzO1xuXG4gIGlmIChzdGF0ZS5lbGVtZW50cy5hcnJvdykge1xuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMuYXJyb3cuc3R5bGUsIGluaXRpYWxTdHlsZXMuYXJyb3cpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTtcbiAgICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICAgIHZhciBzdHlsZVByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhzdGF0ZS5zdHlsZXMuaGFzT3duUHJvcGVydHkobmFtZSkgPyBzdGF0ZS5zdHlsZXNbbmFtZV0gOiBpbml0aWFsU3R5bGVzW25hbWVdKTsgLy8gU2V0IGFsbCB2YWx1ZXMgdG8gYW4gZW1wdHkgc3RyaW5nIHRvIHVuc2V0IHRoZW1cblxuICAgICAgdmFyIHN0eWxlID0gc3R5bGVQcm9wZXJ0aWVzLnJlZHVjZShmdW5jdGlvbiAoc3R5bGUsIHByb3BlcnR5KSB7XG4gICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9ICcnO1xuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICB9LCB7fSk7IC8vIGFycm93IGlzIG9wdGlvbmFsICsgdmlydHVhbCBlbGVtZW50c1xuXG4gICAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XG4gICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIGFwcGx5U3R5bGVzJDEgPSB7XG4gIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogYXBwbHlTdHlsZXMsXG4gIGVmZmVjdDogZWZmZWN0JDEsXG4gIHJlcXVpcmVzOiBbJ2NvbXB1dGVTdHlsZXMnXVxufTtcblxuZnVuY3Rpb24gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCByZWN0cywgb2Zmc2V0KSB7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICB2YXIgaW52ZXJ0RGlzdGFuY2UgPSBbbGVmdCwgdG9wXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyAtMSA6IDE7XG5cbiAgdmFyIF9yZWYgPSB0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gb2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgfSkpIDogb2Zmc2V0LFxuICAgICAgc2tpZGRpbmcgPSBfcmVmWzBdLFxuICAgICAgZGlzdGFuY2UgPSBfcmVmWzFdO1xuXG4gIHNraWRkaW5nID0gc2tpZGRpbmcgfHwgMDtcbiAgZGlzdGFuY2UgPSAoZGlzdGFuY2UgfHwgMCkgKiBpbnZlcnREaXN0YW5jZTtcbiAgcmV0dXJuIFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8ge1xuICAgIHg6IGRpc3RhbmNlLFxuICAgIHk6IHNraWRkaW5nXG4gIH0gOiB7XG4gICAgeDogc2tpZGRpbmcsXG4gICAgeTogZGlzdGFuY2VcbiAgfTtcbn1cblxuZnVuY3Rpb24gb2Zmc2V0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZjIubmFtZTtcbiAgdmFyIF9vcHRpb25zJG9mZnNldCA9IG9wdGlvbnMub2Zmc2V0LFxuICAgICAgb2Zmc2V0ID0gX29wdGlvbnMkb2Zmc2V0ID09PSB2b2lkIDAgPyBbMCwgMF0gOiBfb3B0aW9ucyRvZmZzZXQ7XG4gIHZhciBkYXRhID0gcGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgYWNjW3BsYWNlbWVudF0gPSBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHN0YXRlLnJlY3RzLCBvZmZzZXQpO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgdmFyIF9kYXRhJHN0YXRlJHBsYWNlbWVudCA9IGRhdGFbc3RhdGUucGxhY2VtZW50XSxcbiAgICAgIHggPSBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQueCxcbiAgICAgIHkgPSBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQueTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzICE9IG51bGwpIHtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueCArPSB4O1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy55ICs9IHk7XG4gIH1cblxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBvZmZzZXQkMSA9IHtcbiAgbmFtZTogJ29mZnNldCcsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgZm46IG9mZnNldFxufTtcblxudmFyIGhhc2gkMSA9IHtcbiAgbGVmdDogJ3JpZ2h0JyxcbiAgcmlnaHQ6ICdsZWZ0JyxcbiAgYm90dG9tOiAndG9wJyxcbiAgdG9wOiAnYm90dG9tJ1xufTtcbmZ1bmN0aW9uIGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoJDFbbWF0Y2hlZF07XG4gIH0pO1xufVxuXG52YXIgaGFzaCA9IHtcbiAgc3RhcnQ6ICdlbmQnLFxuICBlbmQ6ICdzdGFydCdcbn07XG5mdW5jdGlvbiBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9zdGFydHxlbmQvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVBdXRvUGxhY2VtZW50KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9IF9vcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50cyA9IF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9PT0gdm9pZCAwID8gcGxhY2VtZW50cyA6IF9vcHRpb25zJGFsbG93ZWRBdXRvUDtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpO1xuICB2YXIgcGxhY2VtZW50cyQxID0gdmFyaWF0aW9uID8gZmxpcFZhcmlhdGlvbnMgPyB2YXJpYXRpb25QbGFjZW1lbnRzIDogdmFyaWF0aW9uUGxhY2VtZW50cy5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHJldHVybiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gdmFyaWF0aW9uO1xuICB9KSA6IGJhc2VQbGFjZW1lbnRzO1xuICB2YXIgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzJDEuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWxsb3dlZEF1dG9QbGFjZW1lbnRzLmluZGV4T2YocGxhY2VtZW50KSA+PSAwO1xuICB9KTtcblxuICBpZiAoYWxsb3dlZFBsYWNlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzJDE7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBUaGUgYGFsbG93ZWRBdXRvUGxhY2VtZW50c2Agb3B0aW9uIGRpZCBub3QgYWxsb3cgYW55JywgJ3BsYWNlbWVudHMuIEVuc3VyZSB0aGUgYHBsYWNlbWVudGAgb3B0aW9uIG1hdGNoZXMgdGhlIHZhcmlhdGlvbicsICdvZiB0aGUgYWxsb3dlZCBwbGFjZW1lbnRzLicsICdGb3IgZXhhbXBsZSwgXCJhdXRvXCIgY2Fubm90IGJlIHVzZWQgdG8gYWxsb3cgXCJib3R0b20tc3RhcnRcIi4nLCAnVXNlIFwiYXV0by1zdGFydFwiIGluc3RlYWQuJ10uam9pbignICcpKTtcbiAgICB9XG4gIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtdHlwZV06IEZsb3cgc2VlbXMgdG8gaGF2ZSBwcm9ibGVtcyB3aXRoIHR3byBhcnJheSB1bmlvbnMuLi5cblxuXG4gIHZhciBvdmVyZmxvd3MgPSBhbGxvd2VkUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgYWNjW3BsYWNlbWVudF0gPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KVtnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCldO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG92ZXJmbG93cykuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBvdmVyZmxvd3NbYV0gLSBvdmVyZmxvd3NbYl07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwbGFjZW1lbnQpIHtcbiAgaWYgKGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA9PT0gYXV0bykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBvcHBvc2l0ZVBsYWNlbWVudCA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHJldHVybiBbZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQocGxhY2VtZW50KSwgb3Bwb3NpdGVQbGFjZW1lbnQsIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KG9wcG9zaXRlUGxhY2VtZW50KV07XG59XG5cbmZ1bmN0aW9uIGZsaXAoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFsdEF4aXMsXG4gICAgICBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgPSBvcHRpb25zLmZhbGxiYWNrUGxhY2VtZW50cyxcbiAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcsXG4gICAgICBib3VuZGFyeSA9IG9wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBvcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJGZsaXBWYXJpYXRpbyA9IG9wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zJGZsaXBWYXJpYXRpbyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGZsaXBWYXJpYXRpbyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50cyA9IG9wdGlvbnMuYWxsb3dlZEF1dG9QbGFjZW1lbnRzO1xuICB2YXIgcHJlZmVycmVkUGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpO1xuICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gYmFzZVBsYWNlbWVudCA9PT0gcHJlZmVycmVkUGxhY2VtZW50O1xuICB2YXIgZmFsbGJhY2tQbGFjZW1lbnRzID0gc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzIHx8IChpc0Jhc2VQbGFjZW1lbnQgfHwgIWZsaXBWYXJpYXRpb25zID8gW2dldE9wcG9zaXRlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCldIDogZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocHJlZmVycmVkUGxhY2VtZW50KSk7XG4gIHZhciBwbGFjZW1lbnRzID0gW3ByZWZlcnJlZFBsYWNlbWVudF0uY29uY2F0KGZhbGxiYWNrUGxhY2VtZW50cykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIHJldHVybiBhY2MuY29uY2F0KGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA9PT0gYXV0byA/IGNvbXB1dGVBdXRvUGxhY2VtZW50KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZyxcbiAgICAgIGZsaXBWYXJpYXRpb25zOiBmbGlwVmFyaWF0aW9ucyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50czogYWxsb3dlZEF1dG9QbGFjZW1lbnRzXG4gICAgfSkgOiBwbGFjZW1lbnQpO1xuICB9LCBbXSk7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIGNoZWNrc01hcCA9IG5ldyBNYXAoKTtcbiAgdmFyIG1ha2VGYWxsYmFja0NoZWNrcyA9IHRydWU7XG4gIHZhciBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzWzBdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGxhY2VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwbGFjZW1lbnQgPSBwbGFjZW1lbnRzW2ldO1xuXG4gICAgdmFyIF9iYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuXG4gICAgdmFyIGlzU3RhcnRWYXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gc3RhcnQ7XG4gICAgdmFyIGlzVmVydGljYWwgPSBbdG9wLCBib3R0b21dLmluZGV4T2YoX2Jhc2VQbGFjZW1lbnQpID49IDA7XG4gICAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG4gICAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeTogYWx0Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgfSk7XG4gICAgdmFyIG1haW5WYXJpYXRpb25TaWRlID0gaXNWZXJ0aWNhbCA/IGlzU3RhcnRWYXJpYXRpb24gPyByaWdodCA6IGxlZnQgOiBpc1N0YXJ0VmFyaWF0aW9uID8gYm90dG9tIDogdG9wO1xuXG4gICAgaWYgKHJlZmVyZW5jZVJlY3RbbGVuXSA+IHBvcHBlclJlY3RbbGVuXSkge1xuICAgICAgbWFpblZhcmlhdGlvblNpZGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluVmFyaWF0aW9uU2lkZSk7XG4gICAgfVxuXG4gICAgdmFyIGFsdFZhcmlhdGlvblNpZGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluVmFyaWF0aW9uU2lkZSk7XG4gICAgdmFyIGNoZWNrcyA9IFtdO1xuXG4gICAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W19iYXNlUGxhY2VtZW50XSA8PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1ttYWluVmFyaWF0aW9uU2lkZV0gPD0gMCwgb3ZlcmZsb3dbYWx0VmFyaWF0aW9uU2lkZV0gPD0gMCk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrcy5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgIHJldHVybiBjaGVjaztcbiAgICB9KSkge1xuICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgICAgbWFrZUZhbGxiYWNrQ2hlY2tzID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjaGVja3NNYXAuc2V0KHBsYWNlbWVudCwgY2hlY2tzKTtcbiAgfVxuXG4gIGlmIChtYWtlRmFsbGJhY2tDaGVja3MpIHtcbiAgICAvLyBgMmAgbWF5IGJlIGRlc2lyZWQgaW4gc29tZSBjYXNlcyBcdTIwMTMgcmVzZWFyY2ggbGF0ZXJcbiAgICB2YXIgbnVtYmVyT2ZDaGVja3MgPSBmbGlwVmFyaWF0aW9ucyA/IDMgOiAxO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoX2kpIHtcbiAgICAgIHZhciBmaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50cy5maW5kKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICAgICAgdmFyIGNoZWNrcyA9IGNoZWNrc01hcC5nZXQocGxhY2VtZW50KTtcblxuICAgICAgICBpZiAoY2hlY2tzKSB7XG4gICAgICAgICAgcmV0dXJuIGNoZWNrcy5zbGljZSgwLCBfaSkuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZml0dGluZ1BsYWNlbWVudCkge1xuICAgICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBmaXR0aW5nUGxhY2VtZW50O1xuICAgICAgICByZXR1cm4gXCJicmVha1wiO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmb3IgKHZhciBfaSA9IG51bWJlck9mQ2hlY2tzOyBfaSA+IDA7IF9pLS0pIHtcbiAgICAgIHZhciBfcmV0ID0gX2xvb3AoX2kpO1xuXG4gICAgICBpZiAoX3JldCA9PT0gXCJicmVha1wiKSBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhdGUucGxhY2VtZW50ICE9PSBmaXJzdEZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwID0gdHJ1ZTtcbiAgICBzdGF0ZS5wbGFjZW1lbnQgPSBmaXJzdEZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgc3RhdGUucmVzZXQgPSB0cnVlO1xuICB9XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgZmxpcCQxID0ge1xuICBuYW1lOiAnZmxpcCcsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBmbGlwLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddLFxuICBkYXRhOiB7XG4gICAgX3NraXA6IGZhbHNlXG4gIH1cbn07XG5cbmZ1bmN0aW9uIGdldEFsdEF4aXMoYXhpcykge1xuICByZXR1cm4gYXhpcyA9PT0gJ3gnID8gJ3knIDogJ3gnO1xufVxuXG5mdW5jdGlvbiB3aXRoaW4obWluJDEsIHZhbHVlLCBtYXgkMSkge1xuICByZXR1cm4gbWF4KG1pbiQxLCBtaW4odmFsdWUsIG1heCQxKSk7XG59XG5mdW5jdGlvbiB3aXRoaW5NYXhDbGFtcChtaW4sIHZhbHVlLCBtYXgpIHtcbiAgdmFyIHYgPSB3aXRoaW4obWluLCB2YWx1ZSwgbWF4KTtcbiAgcmV0dXJuIHYgPiBtYXggPyBtYXggOiB2O1xufVxuXG5mdW5jdGlvbiBwcmV2ZW50T3ZlcmZsb3coX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGFsdEF4aXMsXG4gICAgICBib3VuZGFyeSA9IG9wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBvcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcsXG4gICAgICBfb3B0aW9ucyR0ZXRoZXIgPSBvcHRpb25zLnRldGhlcixcbiAgICAgIHRldGhlciA9IF9vcHRpb25zJHRldGhlciA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHRldGhlcixcbiAgICAgIF9vcHRpb25zJHRldGhlck9mZnNldCA9IG9wdGlvbnMudGV0aGVyT2Zmc2V0LFxuICAgICAgdGV0aGVyT2Zmc2V0ID0gX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkdGV0aGVyT2Zmc2V0O1xuICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeVxuICB9KTtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24oc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIGlzQmFzZVBsYWNlbWVudCA9ICF2YXJpYXRpb247XG4gIHZhciBtYWluQXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgdmFyIGFsdEF4aXMgPSBnZXRBbHRBeGlzKG1haW5BeGlzKTtcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIHRldGhlck9mZnNldFZhbHVlID0gdHlwZW9mIHRldGhlck9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IHRldGhlck9mZnNldChPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pKSA6IHRldGhlck9mZnNldDtcbiAgdmFyIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZSA9IHR5cGVvZiB0ZXRoZXJPZmZzZXRWYWx1ZSA9PT0gJ251bWJlcicgPyB7XG4gICAgbWFpbkF4aXM6IHRldGhlck9mZnNldFZhbHVlLFxuICAgIGFsdEF4aXM6IHRldGhlck9mZnNldFZhbHVlXG4gIH0gOiBPYmplY3QuYXNzaWduKHtcbiAgICBtYWluQXhpczogMCxcbiAgICBhbHRBeGlzOiAwXG4gIH0sIHRldGhlck9mZnNldFZhbHVlKTtcbiAgdmFyIG9mZnNldE1vZGlmaWVyU3RhdGUgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldCA/IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0W3N0YXRlLnBsYWNlbWVudF0gOiBudWxsO1xuICB2YXIgZGF0YSA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgIHZhciBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQ7XG5cbiAgICB2YXIgbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgICB2YXIgYWx0U2lkZSA9IG1haW5BeGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICB2YXIgb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc107XG4gICAgdmFyIG1pbiQxID0gb2Zmc2V0ICsgb3ZlcmZsb3dbbWFpblNpZGVdO1xuICAgIHZhciBtYXgkMSA9IG9mZnNldCAtIG92ZXJmbG93W2FsdFNpZGVdO1xuICAgIHZhciBhZGRpdGl2ZSA9IHRldGhlciA/IC1wb3BwZXJSZWN0W2xlbl0gLyAyIDogMDtcbiAgICB2YXIgbWluTGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IHJlZmVyZW5jZVJlY3RbbGVuXSA6IHBvcHBlclJlY3RbbGVuXTtcbiAgICB2YXIgbWF4TGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IC1wb3BwZXJSZWN0W2xlbl0gOiAtcmVmZXJlbmNlUmVjdFtsZW5dOyAvLyBXZSBuZWVkIHRvIGluY2x1ZGUgdGhlIGFycm93IGluIHRoZSBjYWxjdWxhdGlvbiBzbyB0aGUgYXJyb3cgZG9lc24ndCBnb1xuICAgIC8vIG91dHNpZGUgdGhlIHJlZmVyZW5jZSBib3VuZHNcblxuICAgIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgICB2YXIgYXJyb3dSZWN0ID0gdGV0aGVyICYmIGFycm93RWxlbWVudCA/IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KSA6IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwXG4gICAgfTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nT2JqZWN0ID0gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddID8gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddLnBhZGRpbmcgOiBnZXRGcmVzaFNpZGVPYmplY3QoKTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWluID0gYXJyb3dQYWRkaW5nT2JqZWN0W21haW5TaWRlXTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWF4ID0gYXJyb3dQYWRkaW5nT2JqZWN0W2FsdFNpZGVdOyAvLyBJZiB0aGUgcmVmZXJlbmNlIGxlbmd0aCBpcyBzbWFsbGVyIHRoYW4gdGhlIGFycm93IGxlbmd0aCwgd2UgZG9uJ3Qgd2FudFxuICAgIC8vIHRvIGluY2x1ZGUgaXRzIGZ1bGwgc2l6ZSBpbiB0aGUgY2FsY3VsYXRpb24uIElmIHRoZSByZWZlcmVuY2UgaXMgc21hbGxcbiAgICAvLyBhbmQgbmVhciB0aGUgZWRnZSBvZiBhIGJvdW5kYXJ5LCB0aGUgcG9wcGVyIGNhbiBvdmVyZmxvdyBldmVuIGlmIHRoZVxuICAgIC8vIHJlZmVyZW5jZSBpcyBub3Qgb3ZlcmZsb3dpbmcgYXMgd2VsbCAoZS5nLiB2aXJ0dWFsIGVsZW1lbnRzIHdpdGggbm9cbiAgICAvLyB3aWR0aCBvciBoZWlnaHQpXG5cbiAgICB2YXIgYXJyb3dMZW4gPSB3aXRoaW4oMCwgcmVmZXJlbmNlUmVjdFtsZW5dLCBhcnJvd1JlY3RbbGVuXSk7XG4gICAgdmFyIG1pbk9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IHJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgLSBhZGRpdGl2ZSAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzIDogbWluTGVuIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXM7XG4gICAgdmFyIG1heE9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IC1yZWZlcmVuY2VSZWN0W2xlbl0gLyAyICsgYWRkaXRpdmUgKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcyA6IG1heExlbiArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzO1xuICAgIHZhciBhcnJvd09mZnNldFBhcmVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93ICYmIGdldE9mZnNldFBhcmVudChzdGF0ZS5lbGVtZW50cy5hcnJvdyk7XG4gICAgdmFyIGNsaWVudE9mZnNldCA9IGFycm93T2Zmc2V0UGFyZW50ID8gbWFpbkF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFRvcCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50TGVmdCB8fCAwIDogMDtcbiAgICB2YXIgb2Zmc2V0TW9kaWZpZXJWYWx1ZSA9IChfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQgPSBvZmZzZXRNb2RpZmllclN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBvZmZzZXRNb2RpZmllclN0YXRlW21haW5BeGlzXSkgIT0gbnVsbCA/IF9vZmZzZXRNb2RpZmllclN0YXRlJCA6IDA7XG4gICAgdmFyIHRldGhlck1pbiA9IG9mZnNldCArIG1pbk9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWUgLSBjbGllbnRPZmZzZXQ7XG4gICAgdmFyIHRldGhlck1heCA9IG9mZnNldCArIG1heE9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWU7XG4gICAgdmFyIHByZXZlbnRlZE9mZnNldCA9IHdpdGhpbih0ZXRoZXIgPyBtaW4obWluJDEsIHRldGhlck1pbikgOiBtaW4kMSwgb2Zmc2V0LCB0ZXRoZXIgPyBtYXgobWF4JDEsIHRldGhlck1heCkgOiBtYXgkMSk7XG4gICAgcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQ7XG4gICAgZGF0YVttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQgLSBvZmZzZXQ7XG4gIH1cblxuICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgdmFyIF9vZmZzZXRNb2RpZmllclN0YXRlJDI7XG5cbiAgICB2YXIgX21haW5TaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IHRvcCA6IGxlZnQ7XG5cbiAgICB2YXIgX2FsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gYm90dG9tIDogcmlnaHQ7XG5cbiAgICB2YXIgX29mZnNldCA9IHBvcHBlck9mZnNldHNbYWx0QXhpc107XG5cbiAgICB2YXIgX2xlbiA9IGFsdEF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHZhciBfbWluID0gX29mZnNldCArIG92ZXJmbG93W19tYWluU2lkZV07XG5cbiAgICB2YXIgX21heCA9IF9vZmZzZXQgLSBvdmVyZmxvd1tfYWx0U2lkZV07XG5cbiAgICB2YXIgaXNPcmlnaW5TaWRlID0gW3RvcCwgbGVmdF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgICB2YXIgX29mZnNldE1vZGlmaWVyVmFsdWUgPSAoX29mZnNldE1vZGlmaWVyU3RhdGUkMiA9IG9mZnNldE1vZGlmaWVyU3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IG9mZnNldE1vZGlmaWVyU3RhdGVbYWx0QXhpc10pICE9IG51bGwgPyBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyIDogMDtcblxuICAgIHZhciBfdGV0aGVyTWluID0gaXNPcmlnaW5TaWRlID8gX21pbiA6IF9vZmZzZXQgLSByZWZlcmVuY2VSZWN0W19sZW5dIC0gcG9wcGVyUmVjdFtfbGVuXSAtIF9vZmZzZXRNb2RpZmllclZhbHVlICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLmFsdEF4aXM7XG5cbiAgICB2YXIgX3RldGhlck1heCA9IGlzT3JpZ2luU2lkZSA/IF9vZmZzZXQgKyByZWZlcmVuY2VSZWN0W19sZW5dICsgcG9wcGVyUmVjdFtfbGVuXSAtIF9vZmZzZXRNb2RpZmllclZhbHVlIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLmFsdEF4aXMgOiBfbWF4O1xuXG4gICAgdmFyIF9wcmV2ZW50ZWRPZmZzZXQgPSB0ZXRoZXIgJiYgaXNPcmlnaW5TaWRlID8gd2l0aGluTWF4Q2xhbXAoX3RldGhlck1pbiwgX29mZnNldCwgX3RldGhlck1heCkgOiB3aXRoaW4odGV0aGVyID8gX3RldGhlck1pbiA6IF9taW4sIF9vZmZzZXQsIHRldGhlciA/IF90ZXRoZXJNYXggOiBfbWF4KTtcblxuICAgIHBvcHBlck9mZnNldHNbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0O1xuICAgIGRhdGFbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0IC0gX29mZnNldDtcbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIHByZXZlbnRPdmVyZmxvdyQxID0ge1xuICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IHByZXZlbnRPdmVyZmxvdyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXVxufTtcblxudmFyIHRvUGFkZGluZ09iamVjdCA9IGZ1bmN0aW9uIHRvUGFkZGluZ09iamVjdChwYWRkaW5nLCBzdGF0ZSkge1xuICBwYWRkaW5nID0gdHlwZW9mIHBhZGRpbmcgPT09ICdmdW5jdGlvbicgPyBwYWRkaW5nKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogcGFkZGluZztcbiAgcmV0dXJuIG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG59O1xuXG5mdW5jdGlvbiBhcnJvdyhfcmVmKSB7XG4gIHZhciBfc3RhdGUkbW9kaWZpZXJzRGF0YSQ7XG5cbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIGF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBpc1ZlcnRpY2FsID0gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDA7XG4gIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gIGlmICghYXJyb3dFbGVtZW50IHx8ICFwb3BwZXJPZmZzZXRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHBhZGRpbmdPYmplY3QgPSB0b1BhZGRpbmdPYmplY3Qob3B0aW9ucy5wYWRkaW5nLCBzdGF0ZSk7XG4gIHZhciBhcnJvd1JlY3QgPSBnZXRMYXlvdXRSZWN0KGFycm93RWxlbWVudCk7XG4gIHZhciBtaW5Qcm9wID0gYXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgdmFyIG1heFByb3AgPSBheGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgdmFyIGVuZERpZmYgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbbGVuXSArIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXSAtIHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5wb3BwZXJbbGVuXTtcbiAgdmFyIHN0YXJ0RGlmZiA9IHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc107XG4gIHZhciBhcnJvd09mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChhcnJvd0VsZW1lbnQpO1xuICB2YXIgY2xpZW50U2l6ZSA9IGFycm93T2Zmc2V0UGFyZW50ID8gYXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50SGVpZ2h0IHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRXaWR0aCB8fCAwIDogMDtcbiAgdmFyIGNlbnRlclRvUmVmZXJlbmNlID0gZW5kRGlmZiAvIDIgLSBzdGFydERpZmYgLyAyOyAvLyBNYWtlIHN1cmUgdGhlIGFycm93IGRvZXNuJ3Qgb3ZlcmZsb3cgdGhlIHBvcHBlciBpZiB0aGUgY2VudGVyIHBvaW50IGlzXG4gIC8vIG91dHNpZGUgb2YgdGhlIHBvcHBlciBib3VuZHNcblxuICB2YXIgbWluID0gcGFkZGluZ09iamVjdFttaW5Qcm9wXTtcbiAgdmFyIG1heCA9IGNsaWVudFNpemUgLSBhcnJvd1JlY3RbbGVuXSAtIHBhZGRpbmdPYmplY3RbbWF4UHJvcF07XG4gIHZhciBjZW50ZXIgPSBjbGllbnRTaXplIC8gMiAtIGFycm93UmVjdFtsZW5dIC8gMiArIGNlbnRlclRvUmVmZXJlbmNlO1xuICB2YXIgb2Zmc2V0ID0gd2l0aGluKG1pbiwgY2VudGVyLCBtYXgpOyAvLyBQcmV2ZW50cyBicmVha2luZyBzeW50YXggaGlnaGxpZ2h0aW5nLi4uXG5cbiAgdmFyIGF4aXNQcm9wID0gYXhpcztcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IChfc3RhdGUkbW9kaWZpZXJzRGF0YSQgPSB7fSwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkW2F4aXNQcm9wXSA9IG9mZnNldCwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkLmNlbnRlck9mZnNldCA9IG9mZnNldCAtIGNlbnRlciwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkKTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRlbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50LFxuICAgICAgYXJyb3dFbGVtZW50ID0gX29wdGlvbnMkZWxlbWVudCA9PT0gdm9pZCAwID8gJ1tkYXRhLXBvcHBlci1hcnJvd10nIDogX29wdGlvbnMkZWxlbWVudDtcblxuICBpZiAoYXJyb3dFbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gQ1NTIHNlbGVjdG9yXG5cblxuICBpZiAodHlwZW9mIGFycm93RWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5wb3BwZXIucXVlcnlTZWxlY3RvcihhcnJvd0VsZW1lbnQpO1xuXG4gICAgaWYgKCFhcnJvd0VsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKCFpc0hUTUxFbGVtZW50KGFycm93RWxlbWVudCkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFwiYXJyb3dcIiBlbGVtZW50IG11c3QgYmUgYW4gSFRNTEVsZW1lbnQgKG5vdCBhbiBTVkdFbGVtZW50KS4nLCAnVG8gdXNlIGFuIFNWRyBhcnJvdywgd3JhcCBpdCBpbiBhbiBIVE1MRWxlbWVudCB0aGF0IHdpbGwgYmUgdXNlZCBhcycsICd0aGUgYXJyb3cuJ10uam9pbignICcpKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbnRhaW5zKHN0YXRlLmVsZW1lbnRzLnBvcHBlciwgYXJyb3dFbGVtZW50KSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFwiYXJyb3dcIiBtb2RpZmllclxcJ3MgYGVsZW1lbnRgIG11c3QgYmUgYSBjaGlsZCBvZiB0aGUgcG9wcGVyJywgJ2VsZW1lbnQuJ10uam9pbignICcpKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBzdGF0ZS5lbGVtZW50cy5hcnJvdyA9IGFycm93RWxlbWVudDtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBhcnJvdyQxID0ge1xuICBuYW1lOiAnYXJyb3cnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogYXJyb3csXG4gIGVmZmVjdDogZWZmZWN0LFxuICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J11cbn07XG5cbmZ1bmN0aW9uIGdldFNpZGVPZmZzZXRzKG92ZXJmbG93LCByZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKSB7XG4gIGlmIChwcmV2ZW50ZWRPZmZzZXRzID09PSB2b2lkIDApIHtcbiAgICBwcmV2ZW50ZWRPZmZzZXRzID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0b3A6IG92ZXJmbG93LnRvcCAtIHJlY3QuaGVpZ2h0IC0gcHJldmVudGVkT2Zmc2V0cy55LFxuICAgIHJpZ2h0OiBvdmVyZmxvdy5yaWdodCAtIHJlY3Qud2lkdGggKyBwcmV2ZW50ZWRPZmZzZXRzLngsXG4gICAgYm90dG9tOiBvdmVyZmxvdy5ib3R0b20gLSByZWN0LmhlaWdodCArIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICBsZWZ0OiBvdmVyZmxvdy5sZWZ0IC0gcmVjdC53aWR0aCAtIHByZXZlbnRlZE9mZnNldHMueFxuICB9O1xufVxuXG5mdW5jdGlvbiBpc0FueVNpZGVGdWxseUNsaXBwZWQob3ZlcmZsb3cpIHtcbiAgcmV0dXJuIFt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRdLnNvbWUoZnVuY3Rpb24gKHNpZGUpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dbc2lkZV0gPj0gMDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhpZGUoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgcHJldmVudGVkT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucHJldmVudE92ZXJmbG93O1xuICB2YXIgcmVmZXJlbmNlT3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGVsZW1lbnRDb250ZXh0OiAncmVmZXJlbmNlJ1xuICB9KTtcbiAgdmFyIHBvcHBlckFsdE92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBhbHRCb3VuZGFyeTogdHJ1ZVxuICB9KTtcbiAgdmFyIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHJlZmVyZW5jZU92ZXJmbG93LCByZWZlcmVuY2VSZWN0KTtcbiAgdmFyIHBvcHBlckVzY2FwZU9mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhwb3BwZXJBbHRPdmVyZmxvdywgcG9wcGVyUmVjdCwgcHJldmVudGVkT2Zmc2V0cyk7XG4gIHZhciBpc1JlZmVyZW5jZUhpZGRlbiA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChyZWZlcmVuY2VDbGlwcGluZ09mZnNldHMpO1xuICB2YXIgaGFzUG9wcGVyRXNjYXBlZCA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChwb3BwZXJFc2NhcGVPZmZzZXRzKTtcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IHtcbiAgICByZWZlcmVuY2VDbGlwcGluZ09mZnNldHM6IHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyxcbiAgICBwb3BwZXJFc2NhcGVPZmZzZXRzOiBwb3BwZXJFc2NhcGVPZmZzZXRzLFxuICAgIGlzUmVmZXJlbmNlSGlkZGVuOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICBoYXNQb3BwZXJFc2NhcGVkOiBoYXNQb3BwZXJFc2NhcGVkXG4gIH07XG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAnZGF0YS1wb3BwZXItcmVmZXJlbmNlLWhpZGRlbic6IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgICdkYXRhLXBvcHBlci1lc2NhcGVkJzogaGFzUG9wcGVyRXNjYXBlZFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBoaWRlJDEgPSB7XG4gIG5hbWU6ICdoaWRlJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXSxcbiAgZm46IGhpZGVcbn07XG5cbnZhciBkZWZhdWx0TW9kaWZpZXJzJDEgPSBbZXZlbnRMaXN0ZW5lcnMsIHBvcHBlck9mZnNldHMkMSwgY29tcHV0ZVN0eWxlcyQxLCBhcHBseVN0eWxlcyQxXTtcbnZhciBjcmVhdGVQb3BwZXIkMSA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3Ioe1xuICBkZWZhdWx0TW9kaWZpZXJzOiBkZWZhdWx0TW9kaWZpZXJzJDFcbn0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciBkZWZhdWx0TW9kaWZpZXJzID0gW2V2ZW50TGlzdGVuZXJzLCBwb3BwZXJPZmZzZXRzJDEsIGNvbXB1dGVTdHlsZXMkMSwgYXBwbHlTdHlsZXMkMSwgb2Zmc2V0JDEsIGZsaXAkMSwgcHJldmVudE92ZXJmbG93JDEsIGFycm93JDEsIGhpZGUkMV07XG52YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XG4gIGRlZmF1bHRNb2RpZmllcnM6IGRlZmF1bHRNb2RpZmllcnNcbn0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydHMuYXBwbHlTdHlsZXMgPSBhcHBseVN0eWxlcyQxO1xuZXhwb3J0cy5hcnJvdyA9IGFycm93JDE7XG5leHBvcnRzLmNvbXB1dGVTdHlsZXMgPSBjb21wdXRlU3R5bGVzJDE7XG5leHBvcnRzLmNyZWF0ZVBvcHBlciA9IGNyZWF0ZVBvcHBlcjtcbmV4cG9ydHMuY3JlYXRlUG9wcGVyTGl0ZSA9IGNyZWF0ZVBvcHBlciQxO1xuZXhwb3J0cy5kZWZhdWx0TW9kaWZpZXJzID0gZGVmYXVsdE1vZGlmaWVycztcbmV4cG9ydHMuZGV0ZWN0T3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdztcbmV4cG9ydHMuZXZlbnRMaXN0ZW5lcnMgPSBldmVudExpc3RlbmVycztcbmV4cG9ydHMuZmxpcCA9IGZsaXAkMTtcbmV4cG9ydHMuaGlkZSA9IGhpZGUkMTtcbmV4cG9ydHMub2Zmc2V0ID0gb2Zmc2V0JDE7XG5leHBvcnRzLnBvcHBlckdlbmVyYXRvciA9IHBvcHBlckdlbmVyYXRvcjtcbmV4cG9ydHMucG9wcGVyT2Zmc2V0cyA9IHBvcHBlck9mZnNldHMkMTtcbmV4cG9ydHMucHJldmVudE92ZXJmbG93ID0gcHJldmVudE92ZXJmbG93JDE7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb3BwZXIuanMubWFwXG4iLCAiLy8gVGhpcyBzY3JpcHQgd2lsbCBiZSBjb21waWxlZCBpbnRvIHRoZSBKUyBidW5kbGUgYXV0b21hdGljYWxseS5cclxuLy8gU2Nyb2xsIHRvIHByZXZpb3VzIHBvc2l0aW9uIHdoZW4gcmVsb2FkaW5nXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3Qgc2Nyb2xsUG9zID0gcGFyc2VJbnQoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc2Nyb2xsUG9zJykgPz8gJycpO1xyXG4gIGNvbnN0IHNjcm9sbFVybCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Njcm9sbFVybCcpID8/ICcnO1xyXG4gIGlmIChzY3JvbGxQb3MgPiAwICYmIHNjcm9sbFVybCA9PSBsb2NhdGlvbi5ocmVmKSB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsKHsgdG9wOiBzY3JvbGxQb3MsIGxlZnQ6IDAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTsgLy8gJ2luc3RhbnQnXHJcbiAgfVxyXG4gIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3Njcm9sbFBvcycpO1xyXG4gIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3Njcm9sbFVybCcpO1xyXG59KTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBzY3JvbGxQb3MgPSB3aW5kb3cuc2Nyb2xsWSA+IDAgPyB3aW5kb3cuc2Nyb2xsWSA6IDA7XHJcbiAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnc2Nyb2xsUG9zJywgc2Nyb2xsUG9zLnRvU3RyaW5nKCkpO1xyXG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3Njcm9sbFVybCcsIGxvY2F0aW9uLmhyZWYpO1xyXG59KTtcclxuLy8gQWRkIHRpdGxlIHRvIGZvb3Rub3RlIGxpbmtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCB0ZW1wVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gIGNvbnN0IGZuUmVmcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb290bm90ZS1yZWYnKTtcclxuICBmblJlZnMuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XHJcbiAgICBjb25zdCBmbklEID0gKHJlZi5nZXRBdHRyaWJ1dGUoJ2hyZWYnKT8uc3Vic3RyaW5nKDEpID8/ICcnKS5yZXBsYWNlKC86L2csICdcXFxcOicpO1xyXG4gICAgbGV0IGZuQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgZm5JRCArICcgcCcpPy5pbm5lckhUTUwgPz8gJyc7XHJcbiAgICB0ZW1wVGV4dEFyZWEuaW5uZXJIVE1MID0gZm5Db250ZW50O1xyXG4gICAgZm5Db250ZW50ID0gdGVtcFRleHRBcmVhLnZhbHVlO1xyXG4gICAgZm5Db250ZW50ID0gZm5Db250ZW50XHJcbiAgICAgIC5yZXBsYWNlKC88W14+XSs+L2csICcnKVxyXG4gICAgICAucmVwbGFjZSgvXHUyMUE5XHVGRTBFL2csICcnKVxyXG4gICAgICAudHJpbSgpO1xyXG4gICAgY29uc29sZS5sb2coZm5Db250ZW50KTtcclxuICAgIHJlZi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgZm5Db250ZW50KTtcclxuICB9KTtcclxufSk7XHJcbi8vIFJlbW92ZSAnZGlzYWJsZWQnIHByb3BlcnR5IGZyb20gJzxpbnB1dCB0eXBlPWNoZWNrYm94PicgYW5kIHByZXZlbnQgdG9nZ2xlXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hiLWJsb2ctcG9zdC1jb250ZW50JylbMF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XHJcbiAgQXJyYXkuZnJvbShjaGVja2JveGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xyXG4gICAgY2IucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgY2IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufSk7XHJcbi8vXHJcbi8vIDxsaW5rLXByZXZpZXc+IEhUTUwgVGFnXHJcbi8vIEB0cy1pZ25vcmVcclxuY2xhc3MgTGlua1ByZXZpZXdFbGVtIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBbJ3VybCcsICd0aXRsZScsICdkZXNjJywgJ2ltYWdlJ107XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lOiBzdHJpbmcsIF9vbGRWYWx1ZTogc3RyaW5nLCBuZXdWYWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAobmFtZSA9PSAndXJsJykge1xyXG4gICAgICB0aGlzLnJlbmRlclNrZWxldG9uKG5ld1ZhbHVlKTtcclxuICAgICAgdGhpcy5jaGVja0FuZEZldGNoT3BlbkdyYXBoRGF0YShuZXdWYWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICd0aXRsZScgfHwgbmFtZSA9PT0gJ2Rlc2MnIHx8IG5hbWUgPT09ICdpbWFnZScpIHtcclxuICAgICAgdGhpcy5yZW5kZXJGcm9tQXR0cmlidXRlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tBbmRGZXRjaE9wZW5HcmFwaERhdGEodXJsOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSAmJiB0aGlzLmhhc0F0dHJpYnV0ZSgnZGVzYycpICYmIHRoaXMuaGFzQXR0cmlidXRlKCdpbWFnZScpKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyRnJvbUF0dHJpYnV0ZXMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZmV0Y2hPcGVuR3JhcGhEYXRhKHVybCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJTa2VsZXRvbih1cmw6IHN0cmluZykge1xyXG4gICAgdGhpcy5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZmlndXJlIGNsYXNzPVwibGluay1wcmV2aWV3XCI+XHJcbiAgICAgIDxhIGNsYXNzPVwibHAtbGlua1wiIGhyZWY9XCIke3VybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJscC1pbWFnZSBscC1wbGFjZWhvbGRlclwiPiZuYnNwOzwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJscC10ZXh0XCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImxwLXRpdGxlIGxwLXBsYWNlaG9sZGVyXCI+TG9hZGluZyB0aXRsZS4uLjwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwibHAtZGVzYyBscC1wbGFjZWhvbGRlclwiPkxvYWRpbmcgZGVzY3JpcHRpb24uLi48L3A+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImxwLWhvc3RcIj4ke25ldyBVUkwodXJsKS5ob3N0fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9hPlxyXG4gICAgPC9maWd1cmU+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyRnJvbUF0dHJpYnV0ZXMoKSB7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldEF0dHJpYnV0ZSgndXJsJyk7XHJcbiAgICBpZiAoIXVybCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHwgJyc7XHJcbiAgICBjb25zdCBkZXNjID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2Rlc2MnKSB8fCAnJztcclxuICAgIGNvbnN0IGltYWdlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2ltYWdlJykgfHwgJyc7XHJcblxyXG4gICAgdGhpcy5yZW5kZXIoeyB0aXRsZSwgZGVzYywgaW1hZ2UgfSwgdXJsKTtcclxuICB9XHJcblxyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBhc3luYyBmZXRjaE9wZW5HcmFwaERhdGEodXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IGNhY2hlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgTGlua1ByZXZpZXc6ICR7dXJsfWApO1xyXG4gICAgaWYgKGNhY2hlZERhdGEpIHtcclxuICAgICAgdGhpcy5yZW5kZXIoSlNPTi5wYXJzZShjYWNoZWREYXRhKSwgdXJsKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vb3Blbi1ncmFwaC1hcGktY29yYWwudmVyY2VsLmFwcC9hcGkvb3BlbmdyYXBoP3VybD0ke2VuY29kZVVSSUNvbXBvbmVudCh1cmwpfWAsXHJcbiAgICAgICk7XHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICBjb25zdCB0aXRsZSA9IGRhdGEudGl0bGU/LnRyaW0oKSB8fCB0aGlzLmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCAnJztcclxuICAgICAgY29uc3QgZGVzYyA9IGRhdGEuZGVzYz8udHJpbSgpIHx8IHRoaXMuZ2V0QXR0cmlidXRlKCdkZXNjJykgfHwgJyc7XHJcbiAgICAgIGNvbnN0IGltYWdlID0gZGF0YS5pbWFnZT8udHJpbSgpIHx8IHRoaXMuZ2V0QXR0cmlidXRlKCdpbWFnZScpIHx8ICcnO1xyXG5cclxuICAgICAgY29uc3Qgc3RvcmVkRGF0YSA9IHsgdGl0bGUsIGRlc2MsIGltYWdlIH07XHJcblxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgTGlua1ByZXZpZXc6ICR7dXJsfWAsIEpTT04uc3RyaW5naWZ5KHN0b3JlZERhdGEpKTtcclxuICAgICAgdGhpcy5yZW5kZXIoc3RvcmVkRGF0YSwgdXJsKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRmV0Y2ggZXJyb3I6ICcsIGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKGRhdGE6IG9iamVjdCwgdXJsOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2MsIGltYWdlIH0gPSBkYXRhIGFzIHsgdGl0bGU/OiBzdHJpbmc7IGRlc2M/OiBzdHJpbmc7IGltYWdlPzogc3RyaW5nIH07XHJcbiAgICB0aGlzLmlubmVySFRNTCA9IGBcclxuICAgIDxmaWd1cmUgY2xhc3M9XCJsaW5rLXByZXZpZXdcIj5cclxuICAgICAgPGEgY2xhc3M9XCJscC1saW5rXCIgaHJlZj1cIiR7dXJsfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+XHJcbiAgICAgICAgJHtpbWFnZSA/IGA8ZGl2IGNsYXNzPVwibHAtaW1hZ2VcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHtpbWFnZX0nKTtcIj4mbmJzcDs8L2Rpdj5gIDogJyd9XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxwLXRleHRcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwibHAtdGl0bGVcIj4ke3RpdGxlfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwibHAtZGVzY1wiPiR7ZGVzY308L3A+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImxwLWhvc3RcIj4ke25ldyBVUkwodXJsKS5ob3N0fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9hPlxyXG4gICAgPC9maWd1cmU+XHJcbiAgICBgO1xyXG4gIH1cclxufVxyXG5cclxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbGluay1wcmV2aWV3JywgTGlua1ByZXZpZXdFbGVtKTtcclxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBkcm9wZG93bi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAqIGFzIFBvcHBlciBmcm9tICdAcG9wcGVyanMvY29yZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3IuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBleGVjdXRlLFxuICBnZXRFbGVtZW50LFxuICBnZXROZXh0QWN0aXZlRWxlbWVudCxcbiAgaXNEaXNhYmxlZCxcbiAgaXNFbGVtZW50LFxuICBpc1JUTCxcbiAgaXNWaXNpYmxlLFxuICBub29wXG59IGZyb20gJy4vdXRpbC9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ2Ryb3Bkb3duJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuZHJvcGRvd24nXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnXG5jb25zdCBUQUJfS0VZID0gJ1RhYidcbmNvbnN0IEFSUk9XX1VQX0tFWSA9ICdBcnJvd1VwJ1xuY29uc3QgQVJST1dfRE9XTl9LRVkgPSAnQXJyb3dEb3duJ1xuY29uc3QgUklHSFRfTU9VU0VfQlVUVE9OID0gMiAvLyBNb3VzZUV2ZW50LmJ1dHRvbiB2YWx1ZSBmb3IgdGhlIHNlY29uZGFyeSBidXR0b24sIHVzdWFsbHkgdGhlIHJpZ2h0IGJ1dHRvblxuXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fREFUQV9BUEkgPSBga2V5ZG93biR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWVVQX0RBVEFfQVBJID0gYGtleXVwJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfRFJPUFVQID0gJ2Ryb3B1cCdcbmNvbnN0IENMQVNTX05BTUVfRFJPUEVORCA9ICdkcm9wZW5kJ1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QU1RBUlQgPSAnZHJvcHN0YXJ0J1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QVVBfQ0VOVEVSID0gJ2Ryb3B1cC1jZW50ZXInXG5jb25zdCBDTEFTU19OQU1FX0RST1BET1dOX0NFTlRFUiA9ICdkcm9wZG93bi1jZW50ZXInXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCJdOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEVfU0hPV04gPSBgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRX0uJHtDTEFTU19OQU1FX1NIT1d9YFxuY29uc3QgU0VMRUNUT1JfTUVOVSA9ICcuZHJvcGRvd24tbWVudSdcbmNvbnN0IFNFTEVDVE9SX05BVkJBUiA9ICcubmF2YmFyJ1xuY29uc3QgU0VMRUNUT1JfTkFWQkFSX05BViA9ICcubmF2YmFyLW5hdidcbmNvbnN0IFNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMgPSAnLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCknXG5cbmNvbnN0IFBMQUNFTUVOVF9UT1AgPSBpc1JUTCgpID8gJ3RvcC1lbmQnIDogJ3RvcC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9UT1BFTkQgPSBpc1JUTCgpID8gJ3RvcC1zdGFydCcgOiAndG9wLWVuZCdcbmNvbnN0IFBMQUNFTUVOVF9CT1RUT00gPSBpc1JUTCgpID8gJ2JvdHRvbS1lbmQnIDogJ2JvdHRvbS1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9CT1RUT01FTkQgPSBpc1JUTCgpID8gJ2JvdHRvbS1zdGFydCcgOiAnYm90dG9tLWVuZCdcbmNvbnN0IFBMQUNFTUVOVF9SSUdIVCA9IGlzUlRMKCkgPyAnbGVmdC1zdGFydCcgOiAncmlnaHQtc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfTEVGVCA9IGlzUlRMKCkgPyAncmlnaHQtc3RhcnQnIDogJ2xlZnQtc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfVE9QQ0VOVEVSID0gJ3RvcCdcbmNvbnN0IFBMQUNFTUVOVF9CT1RUT01DRU5URVIgPSAnYm90dG9tJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhdXRvQ2xvc2U6IHRydWUsXG4gIGJvdW5kYXJ5OiAnY2xpcHBpbmdQYXJlbnRzJyxcbiAgZGlzcGxheTogJ2R5bmFtaWMnLFxuICBvZmZzZXQ6IFswLCAyXSxcbiAgcG9wcGVyQ29uZmlnOiBudWxsLFxuICByZWZlcmVuY2U6ICd0b2dnbGUnXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhdXRvQ2xvc2U6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgZGlzcGxheTogJ3N0cmluZycsXG4gIG9mZnNldDogJyhhcnJheXxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgcG9wcGVyQ29uZmlnOiAnKG51bGx8b2JqZWN0fGZ1bmN0aW9uKScsXG4gIHJlZmVyZW5jZTogJyhzdHJpbmd8ZWxlbWVudHxvYmplY3QpJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBEcm9wZG93biBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb25maWcpXG5cbiAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG4gICAgdGhpcy5fcGFyZW50ID0gdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlIC8vIGRyb3Bkb3duIHdyYXBwZXJcbiAgICAvLyBUT0RPOiB2NiByZXZlcnQgIzM3MDExICYgY2hhbmdlIG1hcmt1cCBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy81LjMvZm9ybXMvaW5wdXQtZ3JvdXAvXG4gICAgdGhpcy5fbWVudSA9IFNlbGVjdG9yRW5naW5lLm5leHQodGhpcy5fZWxlbWVudCwgU0VMRUNUT1JfTUVOVSlbMF0gfHxcbiAgICAgIFNlbGVjdG9yRW5naW5lLnByZXYodGhpcy5fZWxlbWVudCwgU0VMRUNUT1JfTUVOVSlbMF0gfHxcbiAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfTUVOVSwgdGhpcy5fcGFyZW50KVxuICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgdG9nZ2xlKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duKCkgPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdygpXG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmIChpc0Rpc2FibGVkKHRoaXMuX2VsZW1lbnQpIHx8IHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XLCByZWxhdGVkVGFyZ2V0KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9jcmVhdGVQb3BwZXIoKVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmICF0aGlzLl9wYXJlbnQuY2xvc2VzdChTRUxFQ1RPUl9OQVZCQVJfTkFWKSkge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuICAgICAgICBFdmVudEhhbmRsZXIub24oZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuXG4gICAgdGhpcy5fbWVudS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOLCByZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzLl9lbGVtZW50KSB8fCAhdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cblxuICAgIHRoaXMuX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKVxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci51cGRhdGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSwgcmVsYXRlZFRhcmdldClcbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIHRoaXMuX21lbnUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXG4gICAgTWFuaXB1bGF0b3IucmVtb3ZlRGF0YUF0dHJpYnV0ZSh0aGlzLl9tZW51LCAncG9wcGVyJylcbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4sIHJlbGF0ZWRUYXJnZXQpXG5cbiAgICAvLyBFeHBsaWNpdGx5IHJldHVybiBmb2N1cyB0byB0aGUgdHJpZ2dlciBlbGVtZW50XG4gICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHN1cGVyLl9nZXRDb25maWcoY29uZmlnKVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmZXJlbmNlID09PSAnb2JqZWN0JyAmJiAhaXNFbGVtZW50KGNvbmZpZy5yZWZlcmVuY2UpICYmXG4gICAgICB0eXBlb2YgY29uZmlnLnJlZmVyZW5jZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09ICdmdW5jdGlvbidcbiAgICApIHtcbiAgICAgIC8vIFBvcHBlciB2aXJ0dWFsIGVsZW1lbnRzIHJlcXVpcmUgYSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgbWV0aG9kXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAke05BTUUudG9VcHBlckNhc2UoKX06IE9wdGlvbiBcInJlZmVyZW5jZVwiIHByb3ZpZGVkIHR5cGUgXCJvYmplY3RcIiB3aXRob3V0IGEgcmVxdWlyZWQgXCJnZXRCb3VuZGluZ0NsaWVudFJlY3RcIiBtZXRob2QuYClcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfY3JlYXRlUG9wcGVyKCkge1xuICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBkcm9wZG93bnMgcmVxdWlyZSBQb3BwZXIgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZy9kb2NzL3YyLyknKVxuICAgIH1cblxuICAgIGxldCByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fZWxlbWVudFxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdwYXJlbnQnKSB7XG4gICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fcGFyZW50XG4gICAgfSBlbHNlIGlmIChpc0VsZW1lbnQodGhpcy5fY29uZmlnLnJlZmVyZW5jZSkpIHtcbiAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBnZXRFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9jb25maWcucmVmZXJlbmNlXG4gICAgfVxuXG4gICAgY29uc3QgcG9wcGVyQ29uZmlnID0gdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKClcbiAgICB0aGlzLl9wb3BwZXIgPSBQb3BwZXIuY3JlYXRlUG9wcGVyKHJlZmVyZW5jZUVsZW1lbnQsIHRoaXMuX21lbnUsIHBvcHBlckNvbmZpZylcbiAgfVxuXG4gIF9pc1Nob3duKCkge1xuICAgIHJldHVybiB0aGlzLl9tZW51LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG4gIH1cblxuICBfZ2V0UGxhY2VtZW50KCkge1xuICAgIGNvbnN0IHBhcmVudERyb3Bkb3duID0gdGhpcy5fcGFyZW50XG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUEVORCkpIHtcbiAgICAgIHJldHVybiBQTEFDRU1FTlRfUklHSFRcbiAgICB9XG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUFNUQVJUKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9MRUZUXG4gICAgfVxuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BVUF9DRU5URVIpKSB7XG4gICAgICByZXR1cm4gUExBQ0VNRU5UX1RPUENFTlRFUlxuICAgIH1cblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRE9XTl9DRU5URVIpKSB7XG4gICAgICByZXR1cm4gUExBQ0VNRU5UX0JPVFRPTUNFTlRFUlxuICAgIH1cblxuICAgIC8vIFdlIG5lZWQgdG8gdHJpbSB0aGUgdmFsdWUgYmVjYXVzZSBjdXN0b20gcHJvcGVydGllcyBjYW4gYWxzbyBpbmNsdWRlIHNwYWNlc1xuICAgIGNvbnN0IGlzRW5kID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9tZW51KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWJzLXBvc2l0aW9uJykudHJpbSgpID09PSAnZW5kJ1xuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BVUCkpIHtcbiAgICAgIHJldHVybiBpc0VuZCA/IFBMQUNFTUVOVF9UT1BFTkQgOiBQTEFDRU1FTlRfVE9QXG4gICAgfVxuXG4gICAgcmV0dXJuIGlzRW5kID8gUExBQ0VNRU5UX0JPVFRPTUVORCA6IFBMQUNFTUVOVF9CT1RUT01cbiAgfVxuXG4gIF9kZXRlY3ROYXZiYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9OQVZCQVIpICE9PSBudWxsXG4gIH1cblxuICBfZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHsgb2Zmc2V0IH0gPSB0aGlzLl9jb25maWdcblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG9mZnNldC5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiBOdW1iZXIucGFyc2VJbnQodmFsdWUsIDEwKSlcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHBvcHBlckRhdGEgPT4gb2Zmc2V0KHBvcHBlckRhdGEsIHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldFxuICB9XG5cbiAgX2dldFBvcHBlckNvbmZpZygpIHtcbiAgICBjb25zdCBkZWZhdWx0QnNQb3BwZXJDb25maWcgPSB7XG4gICAgICBwbGFjZW1lbnQ6IHRoaXMuX2dldFBsYWNlbWVudCgpLFxuICAgICAgbW9kaWZpZXJzOiBbe1xuICAgICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIGJvdW5kYXJ5OiB0aGlzLl9jb25maWcuYm91bmRhcnlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpXG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSBQb3BwZXIgaWYgd2UgaGF2ZSBhIHN0YXRpYyBkaXNwbGF5IG9yIERyb3Bkb3duIGlzIGluIE5hdmJhclxuICAgIGlmICh0aGlzLl9pbk5hdmJhciB8fCB0aGlzLl9jb25maWcuZGlzcGxheSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIE1hbmlwdWxhdG9yLnNldERhdGFBdHRyaWJ1dGUodGhpcy5fbWVudSwgJ3BvcHBlcicsICdzdGF0aWMnKSAvLyBUT0RPOiB2NiByZW1vdmVcbiAgICAgIGRlZmF1bHRCc1BvcHBlckNvbmZpZy5tb2RpZmllcnMgPSBbe1xuICAgICAgICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgfV1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZGVmYXVsdEJzUG9wcGVyQ29uZmlnLFxuICAgICAgLi4uZXhlY3V0ZSh0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnLCBbdW5kZWZpbmVkLCBkZWZhdWx0QnNQb3BwZXJDb25maWddKVxuICAgIH1cbiAgfVxuXG4gIF9zZWxlY3RNZW51SXRlbSh7IGtleSwgdGFyZ2V0IH0pIHtcbiAgICBjb25zdCBpdGVtcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfVklTSUJMRV9JVEVNUywgdGhpcy5fbWVudSkuZmlsdGVyKGVsZW1lbnQgPT4gaXNWaXNpYmxlKGVsZW1lbnQpKVxuXG4gICAgaWYgKCFpdGVtcy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIGlmIHRhcmdldCBpc24ndCBpbmNsdWRlZCBpbiBpdGVtcyAoZS5nLiB3aGVuIGV4cGFuZGluZyB0aGUgZHJvcGRvd24pXG4gICAgLy8gYWxsb3cgY3ljbGluZyB0byBnZXQgdGhlIGxhc3QgaXRlbSBpbiBjYXNlIGtleSBlcXVhbHMgQVJST1dfVVBfS0VZXG4gICAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQoaXRlbXMsIHRhcmdldCwga2V5ID09PSBBUlJPV19ET1dOX0tFWSwgIWl0ZW1zLmluY2x1ZGVzKHRhcmdldCkpLmZvY3VzKClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBjbGVhck1lbnVzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gUklHSFRfTU9VU0VfQlVUVE9OIHx8IChldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LmtleSAhPT0gVEFCX0tFWSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG9wZW5Ub2dnbGVzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TSE9XTilcblxuICAgIGZvciAoY29uc3QgdG9nZ2xlIG9mIG9wZW5Ub2dnbGVzKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gRHJvcGRvd24uZ2V0SW5zdGFuY2UodG9nZ2xlKVxuICAgICAgaWYgKCFjb250ZXh0IHx8IGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpXG4gICAgICBjb25zdCBpc01lbnVUYXJnZXQgPSBjb21wb3NlZFBhdGguaW5jbHVkZXMoY29udGV4dC5fbWVudSlcbiAgICAgIGlmIChcbiAgICAgICAgY29tcG9zZWRQYXRoLmluY2x1ZGVzKGNvbnRleHQuX2VsZW1lbnQpIHx8XG4gICAgICAgIChjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSAnaW5zaWRlJyAmJiAhaXNNZW51VGFyZ2V0KSB8fFxuICAgICAgICAoY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gJ291dHNpZGUnICYmIGlzTWVudVRhcmdldClcbiAgICAgICkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyBUYWIgbmF2aWdhdGlvbiB0aHJvdWdoIHRoZSBkcm9wZG93biBtZW51IG9yIGV2ZW50cyBmcm9tIGNvbnRhaW5lZCBpbnB1dHMgc2hvdWxkbid0IGNsb3NlIHRoZSBtZW51XG4gICAgICBpZiAoY29udGV4dC5fbWVudS5jb250YWlucyhldmVudC50YXJnZXQpICYmICgoZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC5rZXkgPT09IFRBQl9LRVkpIHx8IC9pbnB1dHxzZWxlY3R8b3B0aW9ufHRleHRhcmVhfGZvcm0vaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHsgcmVsYXRlZFRhcmdldDogY29udGV4dC5fZWxlbWVudCB9XG5cbiAgICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQuY2xpY2tFdmVudCA9IGV2ZW50XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBkYXRhQXBpS2V5ZG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICAvLyBJZiBub3QgYW4gVVAgfCBET1dOIHwgRVNDQVBFIGtleSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gSWYgaW5wdXQvdGV4dGFyZWEgJiYgaWYga2V5IGlzIG90aGVyIHRoYW4gRVNDQVBFID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcblxuICAgIGNvbnN0IGlzSW5wdXQgPSAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKVxuICAgIGNvbnN0IGlzRXNjYXBlRXZlbnQgPSBldmVudC5rZXkgPT09IEVTQ0FQRV9LRVlcbiAgICBjb25zdCBpc1VwT3JEb3duRXZlbnQgPSBbQVJST1dfVVBfS0VZLCBBUlJPV19ET1dOX0tFWV0uaW5jbHVkZXMoZXZlbnQua2V5KVxuXG4gICAgaWYgKCFpc1VwT3JEb3duRXZlbnQgJiYgIWlzRXNjYXBlRXZlbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc0lucHV0ICYmICFpc0VzY2FwZUV2ZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyBUT0RPOiB2NiByZXZlcnQgIzM3MDExICYgY2hhbmdlIG1hcmt1cCBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy81LjMvZm9ybXMvaW5wdXQtZ3JvdXAvXG4gICAgY29uc3QgZ2V0VG9nZ2xlQnV0dG9uID0gdGhpcy5tYXRjaGVzKFNFTEVDVE9SX0RBVEFfVE9HR0xFKSA/XG4gICAgICB0aGlzIDpcbiAgICAgIChTZWxlY3RvckVuZ2luZS5wcmV2KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFKVswXSB8fFxuICAgICAgICBTZWxlY3RvckVuZ2luZS5uZXh0KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFKVswXSB8fFxuICAgICAgICBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBldmVudC5kZWxlZ2F0ZVRhcmdldC5wYXJlbnROb2RlKSlcblxuICAgIGNvbnN0IGluc3RhbmNlID0gRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZShnZXRUb2dnbGVCdXR0b24pXG5cbiAgICBpZiAoaXNVcE9yRG93bkV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgaW5zdGFuY2Uuc2hvdygpXG4gICAgICBpbnN0YW5jZS5fc2VsZWN0TWVudUl0ZW0oZXZlbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2UuX2lzU2hvd24oKSkgeyAvLyBlbHNlIGlzIGVzY2FwZSBhbmQgd2UgY2hlY2sgaWYgaXQgaXMgc2hvd25cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBpbnN0YW5jZS5oaWRlKClcbiAgICAgIGdldFRvZ2dsZUJ1dHRvbi5mb2N1cygpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBEcm9wZG93bi5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX01FTlUsIERyb3Bkb3duLmRhdGFBcGlLZXlkb3duSGFuZGxlcilcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIERyb3Bkb3duLmNsZWFyTWVudXMpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWVVQX0RBVEFfQVBJLCBEcm9wZG93bi5jbGVhck1lbnVzKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcykudG9nZ2xlKClcbn0pXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKERyb3Bkb3duKVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBkb20vZGF0YS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgZWxlbWVudE1hcCA9IG5ldyBNYXAoKVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNldChlbGVtZW50LCBrZXksIGluc3RhbmNlKSB7XG4gICAgaWYgKCFlbGVtZW50TWFwLmhhcyhlbGVtZW50KSkge1xuICAgICAgZWxlbWVudE1hcC5zZXQoZWxlbWVudCwgbmV3IE1hcCgpKVxuICAgIH1cblxuICAgIGNvbnN0IGluc3RhbmNlTWFwID0gZWxlbWVudE1hcC5nZXQoZWxlbWVudClcblxuICAgIC8vIG1ha2UgaXQgY2xlYXIgd2Ugb25seSB3YW50IG9uZSBpbnN0YW5jZSBwZXIgZWxlbWVudFxuICAgIC8vIGNhbiBiZSByZW1vdmVkIGxhdGVyIHdoZW4gbXVsdGlwbGUga2V5L2luc3RhbmNlcyBhcmUgZmluZSB0byBiZSB1c2VkXG4gICAgaWYgKCFpbnN0YW5jZU1hcC5oYXMoa2V5KSAmJiBpbnN0YW5jZU1hcC5zaXplICE9PSAwKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcihgQm9vdHN0cmFwIGRvZXNuJ3QgYWxsb3cgbW9yZSB0aGFuIG9uZSBpbnN0YW5jZSBwZXIgZWxlbWVudC4gQm91bmQgaW5zdGFuY2U6ICR7QXJyYXkuZnJvbShpbnN0YW5jZU1hcC5rZXlzKCkpWzBdfS5gKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaW5zdGFuY2VNYXAuc2V0KGtleSwgaW5zdGFuY2UpXG4gIH0sXG5cbiAgZ2V0KGVsZW1lbnQsIGtleSkge1xuICAgIGlmIChlbGVtZW50TWFwLmhhcyhlbGVtZW50KSkge1xuICAgICAgcmV0dXJuIGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpLmdldChrZXkpIHx8IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9LFxuXG4gIHJlbW92ZShlbGVtZW50LCBrZXkpIHtcbiAgICBpZiAoIWVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpbnN0YW5jZU1hcCA9IGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpXG5cbiAgICBpbnN0YW5jZU1hcC5kZWxldGUoa2V5KVxuXG4gICAgLy8gZnJlZSB1cCBlbGVtZW50IHJlZmVyZW5jZXMgaWYgdGhlcmUgYXJlIG5vIGluc3RhbmNlcyBsZWZ0IGZvciBhbiBlbGVtZW50XG4gICAgaWYgKGluc3RhbmNlTWFwLnNpemUgPT09IDApIHtcbiAgICAgIGVsZW1lbnRNYXAuZGVsZXRlKGVsZW1lbnQpXG4gICAgfVxuICB9XG59XG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvaW5kZXguanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBNQVhfVUlEID0gMV8wMDBfMDAwXG5jb25zdCBNSUxMSVNFQ09ORFNfTVVMVElQTElFUiA9IDEwMDBcbmNvbnN0IFRSQU5TSVRJT05fRU5EID0gJ3RyYW5zaXRpb25lbmQnXG5cbi8qKlxuICogUHJvcGVybHkgZXNjYXBlIElEcyBzZWxlY3RvcnMgdG8gaGFuZGxlIHdlaXJkIElEc1xuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5jb25zdCBwYXJzZVNlbGVjdG9yID0gc2VsZWN0b3IgPT4ge1xuICBpZiAoc2VsZWN0b3IgJiYgd2luZG93LkNTUyAmJiB3aW5kb3cuQ1NTLmVzY2FwZSkge1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgbmVlZHMgZXNjYXBpbmcgdG8gaGFuZGxlIElEcyAoaHRtbDUrKSBjb250YWluaW5nIGZvciBpbnN0YW5jZSAvXG4gICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5yZXBsYWNlKC8jKFteXFxzXCIjJ10rKS9nLCAobWF0Y2gsIGlkKSA9PiBgIyR7Q1NTLmVzY2FwZShpZCl9YClcbiAgfVxuXG4gIHJldHVybiBzZWxlY3RvclxufVxuXG4vLyBTaG91dC1vdXQgQW5ndXMgQ3JvbGwgKGh0dHBzOi8vZ29vLmdsL3B4d1FHcClcbmNvbnN0IHRvVHlwZSA9IG9iamVjdCA9PiB7XG4gIGlmIChvYmplY3QgPT09IG51bGwgfHwgb2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYCR7b2JqZWN0fWBcbiAgfVxuXG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KS5tYXRjaCgvXFxzKFthLXpdKykvaSlbMV0udG9Mb3dlckNhc2UoKVxufVxuXG4vKipcbiAqIFB1YmxpYyBVdGlsIEFQSVxuICovXG5cbmNvbnN0IGdldFVJRCA9IHByZWZpeCA9PiB7XG4gIGRvIHtcbiAgICBwcmVmaXggKz0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTUFYX1VJRClcbiAgfSB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4KSlcblxuICByZXR1cm4gcHJlZml4XG59XG5cbmNvbnN0IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50ID0gZWxlbWVudCA9PiB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICAvLyBHZXQgdHJhbnNpdGlvbi1kdXJhdGlvbiBvZiB0aGUgZWxlbWVudFxuICBsZXQgeyB0cmFuc2l0aW9uRHVyYXRpb24sIHRyYW5zaXRpb25EZWxheSB9ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClcblxuICBjb25zdCBmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiA9IE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbilcbiAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRGVsYXkgPSBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpXG5cbiAgLy8gUmV0dXJuIDAgaWYgZWxlbWVudCBvciB0cmFuc2l0aW9uIGR1cmF0aW9uIGlzIG5vdCBmb3VuZFxuICBpZiAoIWZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uICYmICFmbG9hdFRyYW5zaXRpb25EZWxheSkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICAvLyBJZiBtdWx0aXBsZSBkdXJhdGlvbnMgYXJlIGRlZmluZWQsIHRha2UgdGhlIGZpcnN0XG4gIHRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbi5zcGxpdCgnLCcpWzBdXG4gIHRyYW5zaXRpb25EZWxheSA9IHRyYW5zaXRpb25EZWxheS5zcGxpdCgnLCcpWzBdXG5cbiAgcmV0dXJuIChOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pICsgTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KSkgKiBNSUxMSVNFQ09ORFNfTVVMVElQTElFUlxufVxuXG5jb25zdCB0cmlnZ2VyVHJhbnNpdGlvbkVuZCA9IGVsZW1lbnQgPT4ge1xuICBlbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFRSQU5TSVRJT05fRU5EKSlcbn1cblxuY29uc3QgaXNFbGVtZW50ID0gb2JqZWN0ID0+IHtcbiAgaWYgKCFvYmplY3QgfHwgdHlwZW9mIG9iamVjdCAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqZWN0LmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBvYmplY3QgPSBvYmplY3RbMF1cbiAgfVxuXG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0Lm5vZGVUeXBlICE9PSAndW5kZWZpbmVkJ1xufVxuXG5jb25zdCBnZXRFbGVtZW50ID0gb2JqZWN0ID0+IHtcbiAgLy8gaXQncyBhIGpRdWVyeSBvYmplY3Qgb3IgYSBub2RlIGVsZW1lbnRcbiAgaWYgKGlzRWxlbWVudChvYmplY3QpKSB7XG4gICAgcmV0dXJuIG9iamVjdC5qcXVlcnkgPyBvYmplY3RbMF0gOiBvYmplY3RcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnc3RyaW5nJyAmJiBvYmplY3QubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcnNlU2VsZWN0b3Iob2JqZWN0KSlcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmNvbnN0IGlzVmlzaWJsZSA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWlzRWxlbWVudChlbGVtZW50KSB8fCBlbGVtZW50LmdldENsaWVudFJlY3RzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50SXNWaXNpYmxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCd2aXNpYmlsaXR5JykgPT09ICd2aXNpYmxlJ1xuICAvLyBIYW5kbGUgYGRldGFpbHNgIGVsZW1lbnQgYXMgaXRzIGNvbnRlbnQgbWF5IGZhbHNpZSBhcHBlYXIgdmlzaWJsZSB3aGVuIGl0IGlzIGNsb3NlZFxuICBjb25zdCBjbG9zZWREZXRhaWxzID0gZWxlbWVudC5jbG9zZXN0KCdkZXRhaWxzOm5vdChbb3Blbl0pJylcblxuICBpZiAoIWNsb3NlZERldGFpbHMpIHtcbiAgICByZXR1cm4gZWxlbWVudElzVmlzaWJsZVxuICB9XG5cbiAgaWYgKGNsb3NlZERldGFpbHMgIT09IGVsZW1lbnQpIHtcbiAgICBjb25zdCBzdW1tYXJ5ID0gZWxlbWVudC5jbG9zZXN0KCdzdW1tYXJ5JylcbiAgICBpZiAoc3VtbWFyeSAmJiBzdW1tYXJ5LnBhcmVudE5vZGUgIT09IGNsb3NlZERldGFpbHMpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmIChzdW1tYXJ5ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudElzVmlzaWJsZVxufVxuXG5jb25zdCBpc0Rpc2FibGVkID0gZWxlbWVudCA9PiB7XG4gIGlmICghZWxlbWVudCB8fCBlbGVtZW50Lm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50LmRpc2FibGVkICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBlbGVtZW50LmRpc2FibGVkXG4gIH1cblxuICByZXR1cm4gZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgIT09ICdmYWxzZSdcbn1cblxuY29uc3QgZmluZFNoYWRvd1Jvb3QgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0YWNoU2hhZG93KSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIENhbiBmaW5kIHRoZSBzaGFkb3cgcm9vdCBvdGhlcndpc2UgaXQnbGwgcmV0dXJuIHRoZSBkb2N1bWVudFxuICBpZiAodHlwZW9mIGVsZW1lbnQuZ2V0Um9vdE5vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCByb290ID0gZWxlbWVudC5nZXRSb290Tm9kZSgpXG4gICAgcmV0dXJuIHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gcm9vdCA6IG51bGxcbiAgfVxuXG4gIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xuICAgIHJldHVybiBlbGVtZW50XG4gIH1cblxuICAvLyB3aGVuIHdlIGRvbid0IGZpbmQgYSBzaGFkb3cgcm9vdFxuICBpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gZmluZFNoYWRvd1Jvb3QoZWxlbWVudC5wYXJlbnROb2RlKVxufVxuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuLyoqXG4gKiBUcmljayB0byByZXN0YXJ0IGFuIGVsZW1lbnQncyBhbmltYXRpb25cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJuIHZvaWRcbiAqXG4gKiBAc2VlIGh0dHBzOi8vd3d3LmhhcnJ5dGhlby5jb20vYmxvZy8yMDIxLzAyL3Jlc3RhcnQtYS1jc3MtYW5pbWF0aW9uLXdpdGgtamF2YXNjcmlwdC8jcmVzdGFydGluZy1hLWNzcy1hbmltYXRpb25cbiAqL1xuY29uc3QgcmVmbG93ID0gZWxlbWVudCA9PiB7XG4gIGVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG59XG5cbmNvbnN0IGdldGpRdWVyeSA9ICgpID0+IHtcbiAgaWYgKHdpbmRvdy5qUXVlcnkgJiYgIWRvY3VtZW50LmJvZHkuaGFzQXR0cmlidXRlKCdkYXRhLWJzLW5vLWpxdWVyeScpKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5qUXVlcnlcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmNvbnN0IERPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MgPSBbXVxuXG5jb25zdCBvbkRPTUNvbnRlbnRMb2FkZWQgPSBjYWxsYmFjayA9PiB7XG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAvLyBhZGQgbGlzdGVuZXIgb24gdGhlIGZpcnN0IGNhbGwgd2hlbiB0aGUgZG9jdW1lbnQgaXMgaW4gbG9hZGluZyBzdGF0ZVxuICAgIGlmICghRE9NQ29udGVudExvYWRlZENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgRE9NQ29udGVudExvYWRlZENhbGxiYWNrcykge1xuICAgICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spXG4gIH0gZWxzZSB7XG4gICAgY2FsbGJhY2soKVxuICB9XG59XG5cbmNvbnN0IGlzUlRMID0gKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpciA9PT0gJ3J0bCdcblxuY29uc3QgZGVmaW5lSlF1ZXJ5UGx1Z2luID0gcGx1Z2luID0+IHtcbiAgb25ET01Db250ZW50TG9hZGVkKCgpID0+IHtcbiAgICBjb25zdCAkID0gZ2V0alF1ZXJ5KClcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoJCkge1xuICAgICAgY29uc3QgbmFtZSA9IHBsdWdpbi5OQU1FXG4gICAgICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW25hbWVdXG4gICAgICAkLmZuW25hbWVdID0gcGx1Z2luLmpRdWVyeUludGVyZmFjZVxuICAgICAgJC5mbltuYW1lXS5Db25zdHJ1Y3RvciA9IHBsdWdpblxuICAgICAgJC5mbltuYW1lXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAgICAgICAkLmZuW25hbWVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgICAgIHJldHVybiBwbHVnaW4ualF1ZXJ5SW50ZXJmYWNlXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBleGVjdXRlID0gKHBvc3NpYmxlQ2FsbGJhY2ssIGFyZ3MgPSBbXSwgZGVmYXVsdFZhbHVlID0gcG9zc2libGVDYWxsYmFjaykgPT4ge1xuICByZXR1cm4gdHlwZW9mIHBvc3NpYmxlQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicgPyBwb3NzaWJsZUNhbGxiYWNrLmNhbGwoLi4uYXJncykgOiBkZWZhdWx0VmFsdWVcbn1cblxuY29uc3QgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiA9IChjYWxsYmFjaywgdHJhbnNpdGlvbkVsZW1lbnQsIHdhaXRGb3JUcmFuc2l0aW9uID0gdHJ1ZSkgPT4ge1xuICBpZiAoIXdhaXRGb3JUcmFuc2l0aW9uKSB7XG4gICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGR1cmF0aW9uUGFkZGluZyA9IDVcbiAgY29uc3QgZW11bGF0ZWREdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRyYW5zaXRpb25FbGVtZW50KSArIGR1cmF0aW9uUGFkZGluZ1xuXG4gIGxldCBjYWxsZWQgPSBmYWxzZVxuXG4gIGNvbnN0IGhhbmRsZXIgPSAoeyB0YXJnZXQgfSkgPT4ge1xuICAgIGlmICh0YXJnZXQgIT09IHRyYW5zaXRpb25FbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjYWxsZWQgPSB0cnVlXG4gICAgdHJhbnNpdGlvbkVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgaGFuZGxlcilcbiAgICBleGVjdXRlKGNhbGxiYWNrKVxuICB9XG5cbiAgdHJhbnNpdGlvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgaGFuZGxlcilcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25FbGVtZW50KVxuICAgIH1cbiAgfSwgZW11bGF0ZWREdXJhdGlvbilcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHByZXZpb3VzL25leHQgZWxlbWVudCBvZiBhIGxpc3QuXG4gKlxuICogQHBhcmFtIHthcnJheX0gbGlzdCAgICBUaGUgbGlzdCBvZiBlbGVtZW50c1xuICogQHBhcmFtIGFjdGl2ZUVsZW1lbnQgICBUaGUgYWN0aXZlIGVsZW1lbnRcbiAqIEBwYXJhbSBzaG91bGRHZXROZXh0ICAgQ2hvb3NlIHRvIGdldCBuZXh0IG9yIHByZXZpb3VzIGVsZW1lbnRcbiAqIEBwYXJhbSBpc0N5Y2xlQWxsb3dlZFxuICogQHJldHVybiB7RWxlbWVudHxlbGVtfSBUaGUgcHJvcGVyIGVsZW1lbnRcbiAqL1xuY29uc3QgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQgPSAobGlzdCwgYWN0aXZlRWxlbWVudCwgc2hvdWxkR2V0TmV4dCwgaXNDeWNsZUFsbG93ZWQpID0+IHtcbiAgY29uc3QgbGlzdExlbmd0aCA9IGxpc3QubGVuZ3RoXG4gIGxldCBpbmRleCA9IGxpc3QuaW5kZXhPZihhY3RpdmVFbGVtZW50KVxuXG4gIC8vIGlmIHRoZSBlbGVtZW50IGRvZXMgbm90IGV4aXN0IGluIHRoZSBsaXN0IHJldHVybiBhbiBlbGVtZW50XG4gIC8vIGRlcGVuZGluZyBvbiB0aGUgZGlyZWN0aW9uIGFuZCBpZiBjeWNsZSBpcyBhbGxvd2VkXG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm4gIXNob3VsZEdldE5leHQgJiYgaXNDeWNsZUFsbG93ZWQgPyBsaXN0W2xpc3RMZW5ndGggLSAxXSA6IGxpc3RbMF1cbiAgfVxuXG4gIGluZGV4ICs9IHNob3VsZEdldE5leHQgPyAxIDogLTFcblxuICBpZiAoaXNDeWNsZUFsbG93ZWQpIHtcbiAgICBpbmRleCA9IChpbmRleCArIGxpc3RMZW5ndGgpICUgbGlzdExlbmd0aFxuICB9XG5cbiAgcmV0dXJuIGxpc3RbTWF0aC5tYXgoMCwgTWF0aC5taW4oaW5kZXgsIGxpc3RMZW5ndGggLSAxKSldXG59XG5cbmV4cG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZXhlY3V0ZSxcbiAgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbixcbiAgZmluZFNoYWRvd1Jvb3QsXG4gIGdldEVsZW1lbnQsXG4gIGdldGpRdWVyeSxcbiAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQsXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50LFxuICBnZXRVSUQsXG4gIGlzRGlzYWJsZWQsXG4gIGlzRWxlbWVudCxcbiAgaXNSVEwsXG4gIGlzVmlzaWJsZSxcbiAgbm9vcCxcbiAgb25ET01Db250ZW50TG9hZGVkLFxuICBwYXJzZVNlbGVjdG9yLFxuICByZWZsb3csXG4gIHRyaWdnZXJUcmFuc2l0aW9uRW5kLFxuICB0b1R5cGVcbn1cbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgZG9tL2V2ZW50LWhhbmRsZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBnZXRqUXVlcnkgfSBmcm9tICcuLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IG5hbWVzcGFjZVJlZ2V4ID0gL1teLl0qKD89XFwuLiopXFwufC4qL1xuY29uc3Qgc3RyaXBOYW1lUmVnZXggPSAvXFwuLiovXG5jb25zdCBzdHJpcFVpZFJlZ2V4ID0gLzo6XFxkKyQvXG5jb25zdCBldmVudFJlZ2lzdHJ5ID0ge30gLy8gRXZlbnRzIHN0b3JhZ2VcbmxldCB1aWRFdmVudCA9IDFcbmNvbnN0IGN1c3RvbUV2ZW50cyA9IHtcbiAgbW91c2VlbnRlcjogJ21vdXNlb3ZlcicsXG4gIG1vdXNlbGVhdmU6ICdtb3VzZW91dCdcbn1cblxuY29uc3QgbmF0aXZlRXZlbnRzID0gbmV3IFNldChbXG4gICdjbGljaycsXG4gICdkYmxjbGljaycsXG4gICdtb3VzZXVwJyxcbiAgJ21vdXNlZG93bicsXG4gICdjb250ZXh0bWVudScsXG4gICdtb3VzZXdoZWVsJyxcbiAgJ0RPTU1vdXNlU2Nyb2xsJyxcbiAgJ21vdXNlb3ZlcicsXG4gICdtb3VzZW91dCcsXG4gICdtb3VzZW1vdmUnLFxuICAnc2VsZWN0c3RhcnQnLFxuICAnc2VsZWN0ZW5kJyxcbiAgJ2tleWRvd24nLFxuICAna2V5cHJlc3MnLFxuICAna2V5dXAnLFxuICAnb3JpZW50YXRpb25jaGFuZ2UnLFxuICAndG91Y2hzdGFydCcsXG4gICd0b3VjaG1vdmUnLFxuICAndG91Y2hlbmQnLFxuICAndG91Y2hjYW5jZWwnLFxuICAncG9pbnRlcmRvd24nLFxuICAncG9pbnRlcm1vdmUnLFxuICAncG9pbnRlcnVwJyxcbiAgJ3BvaW50ZXJsZWF2ZScsXG4gICdwb2ludGVyY2FuY2VsJyxcbiAgJ2dlc3R1cmVzdGFydCcsXG4gICdnZXN0dXJlY2hhbmdlJyxcbiAgJ2dlc3R1cmVlbmQnLFxuICAnZm9jdXMnLFxuICAnYmx1cicsXG4gICdjaGFuZ2UnLFxuICAncmVzZXQnLFxuICAnc2VsZWN0JyxcbiAgJ3N1Ym1pdCcsXG4gICdmb2N1c2luJyxcbiAgJ2ZvY3Vzb3V0JyxcbiAgJ2xvYWQnLFxuICAndW5sb2FkJyxcbiAgJ2JlZm9yZXVubG9hZCcsXG4gICdyZXNpemUnLFxuICAnbW92ZScsXG4gICdET01Db250ZW50TG9hZGVkJyxcbiAgJ3JlYWR5c3RhdGVjaGFuZ2UnLFxuICAnZXJyb3InLFxuICAnYWJvcnQnLFxuICAnc2Nyb2xsJ1xuXSlcblxuLyoqXG4gKiBQcml2YXRlIG1ldGhvZHNcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRXZlbnRVaWQoZWxlbWVudCwgdWlkKSB7XG4gIHJldHVybiAodWlkICYmIGAke3VpZH06OiR7dWlkRXZlbnQrK31gKSB8fCBlbGVtZW50LnVpZEV2ZW50IHx8IHVpZEV2ZW50Kytcbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudEV2ZW50cyhlbGVtZW50KSB7XG4gIGNvbnN0IHVpZCA9IG1ha2VFdmVudFVpZChlbGVtZW50KVxuXG4gIGVsZW1lbnQudWlkRXZlbnQgPSB1aWRcbiAgZXZlbnRSZWdpc3RyeVt1aWRdID0gZXZlbnRSZWdpc3RyeVt1aWRdIHx8IHt9XG5cbiAgcmV0dXJuIGV2ZW50UmVnaXN0cnlbdWlkXVxufVxuXG5mdW5jdGlvbiBib290c3RyYXBIYW5kbGVyKGVsZW1lbnQsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgaHlkcmF0ZU9iaihldmVudCwgeyBkZWxlZ2F0ZVRhcmdldDogZWxlbWVudCB9KVxuXG4gICAgaWYgKGhhbmRsZXIub25lT2ZmKSB7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsIGV2ZW50LnR5cGUsIGZuKVxuICAgIH1cblxuICAgIHJldHVybiBmbi5hcHBseShlbGVtZW50LCBbZXZlbnRdKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyKGVsZW1lbnQsIHNlbGVjdG9yLCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnRzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuXG4gICAgZm9yIChsZXQgeyB0YXJnZXQgfSA9IGV2ZW50OyB0YXJnZXQgJiYgdGFyZ2V0ICE9PSB0aGlzOyB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZSkge1xuICAgICAgZm9yIChjb25zdCBkb21FbGVtZW50IG9mIGRvbUVsZW1lbnRzKSB7XG4gICAgICAgIGlmIChkb21FbGVtZW50ICE9PSB0YXJnZXQpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaHlkcmF0ZU9iaihldmVudCwgeyBkZWxlZ2F0ZVRhcmdldDogdGFyZ2V0IH0pXG5cbiAgICAgICAgaWYgKGhhbmRsZXIub25lT2ZmKSB7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCBldmVudC50eXBlLCBzZWxlY3RvciwgZm4pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm4uYXBwbHkodGFyZ2V0LCBbZXZlbnRdKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kSGFuZGxlcihldmVudHMsIGNhbGxhYmxlLCBkZWxlZ2F0aW9uU2VsZWN0b3IgPSBudWxsKSB7XG4gIHJldHVybiBPYmplY3QudmFsdWVzKGV2ZW50cylcbiAgICAuZmluZChldmVudCA9PiBldmVudC5jYWxsYWJsZSA9PT0gY2FsbGFibGUgJiYgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yID09PSBkZWxlZ2F0aW9uU2VsZWN0b3IpXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBhcmFtZXRlcnMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICBjb25zdCBpc0RlbGVnYXRlZCA9IHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJ1xuICAvLyBUT0RPOiB0b29sdGlwIHBhc3NlcyBgZmFsc2VgIGluc3RlYWQgb2Ygc2VsZWN0b3IsIHNvIHdlIG5lZWQgdG8gY2hlY2tcbiAgY29uc3QgY2FsbGFibGUgPSBpc0RlbGVnYXRlZCA/IGRlbGVnYXRpb25GdW5jdGlvbiA6IChoYW5kbGVyIHx8IGRlbGVnYXRpb25GdW5jdGlvbilcbiAgbGV0IHR5cGVFdmVudCA9IGdldFR5cGVFdmVudChvcmlnaW5hbFR5cGVFdmVudClcblxuICBpZiAoIW5hdGl2ZUV2ZW50cy5oYXModHlwZUV2ZW50KSkge1xuICAgIHR5cGVFdmVudCA9IG9yaWdpbmFsVHlwZUV2ZW50XG4gIH1cblxuICByZXR1cm4gW2lzRGVsZWdhdGVkLCBjYWxsYWJsZSwgdHlwZUV2ZW50XVxufVxuXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIG9uZU9mZikge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsVHlwZUV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgbGV0IFtpc0RlbGVnYXRlZCwgY2FsbGFibGUsIHR5cGVFdmVudF0gPSBub3JtYWxpemVQYXJhbWV0ZXJzKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pXG5cbiAgLy8gaW4gY2FzZSBvZiBtb3VzZWVudGVyIG9yIG1vdXNlbGVhdmUgd3JhcCB0aGUgaGFuZGxlciB3aXRoaW4gYSBmdW5jdGlvbiB0aGF0IGNoZWNrcyBmb3IgaXRzIERPTSBwb3NpdGlvblxuICAvLyB0aGlzIHByZXZlbnRzIHRoZSBoYW5kbGVyIGZyb20gYmVpbmcgZGlzcGF0Y2hlZCB0aGUgc2FtZSB3YXkgYXMgbW91c2VvdmVyIG9yIG1vdXNlb3V0IGRvZXNcbiAgaWYgKG9yaWdpbmFsVHlwZUV2ZW50IGluIGN1c3RvbUV2ZW50cykge1xuICAgIGNvbnN0IHdyYXBGdW5jdGlvbiA9IGZuID0+IHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKCFldmVudC5yZWxhdGVkVGFyZ2V0IHx8IChldmVudC5yZWxhdGVkVGFyZ2V0ICE9PSBldmVudC5kZWxlZ2F0ZVRhcmdldCAmJiAhZXZlbnQuZGVsZWdhdGVUYXJnZXQuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCkpKSB7XG4gICAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYWxsYWJsZSA9IHdyYXBGdW5jdGlvbihjYWxsYWJsZSlcbiAgfVxuXG4gIGNvbnN0IGV2ZW50cyA9IGdldEVsZW1lbnRFdmVudHMoZWxlbWVudClcbiAgY29uc3QgaGFuZGxlcnMgPSBldmVudHNbdHlwZUV2ZW50XSB8fCAoZXZlbnRzW3R5cGVFdmVudF0gPSB7fSlcbiAgY29uc3QgcHJldmlvdXNGdW5jdGlvbiA9IGZpbmRIYW5kbGVyKGhhbmRsZXJzLCBjYWxsYWJsZSwgaXNEZWxlZ2F0ZWQgPyBoYW5kbGVyIDogbnVsbClcblxuICBpZiAocHJldmlvdXNGdW5jdGlvbikge1xuICAgIHByZXZpb3VzRnVuY3Rpb24ub25lT2ZmID0gcHJldmlvdXNGdW5jdGlvbi5vbmVPZmYgJiYgb25lT2ZmXG5cbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHVpZCA9IG1ha2VFdmVudFVpZChjYWxsYWJsZSwgb3JpZ2luYWxUeXBlRXZlbnQucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpKVxuICBjb25zdCBmbiA9IGlzRGVsZWdhdGVkID9cbiAgICBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBjYWxsYWJsZSkgOlxuICAgIGJvb3RzdHJhcEhhbmRsZXIoZWxlbWVudCwgY2FsbGFibGUpXG5cbiAgZm4uZGVsZWdhdGlvblNlbGVjdG9yID0gaXNEZWxlZ2F0ZWQgPyBoYW5kbGVyIDogbnVsbFxuICBmbi5jYWxsYWJsZSA9IGNhbGxhYmxlXG4gIGZuLm9uZU9mZiA9IG9uZU9mZlxuICBmbi51aWRFdmVudCA9IHVpZFxuICBoYW5kbGVyc1t1aWRdID0gZm5cblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgaXNEZWxlZ2F0ZWQpXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3Rvcikge1xuICBjb25zdCBmbiA9IGZpbmRIYW5kbGVyKGV2ZW50c1t0eXBlRXZlbnRdLCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IpXG5cbiAgaWYgKCFmbikge1xuICAgIHJldHVyblxuICB9XG5cbiAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIEJvb2xlYW4oZGVsZWdhdGlvblNlbGVjdG9yKSlcbiAgZGVsZXRlIGV2ZW50c1t0eXBlRXZlbnRdW2ZuLnVpZEV2ZW50XVxufVxuXG5mdW5jdGlvbiByZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIG5hbWVzcGFjZSkge1xuICBjb25zdCBzdG9yZUVsZW1lbnRFdmVudCA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IHt9XG5cbiAgZm9yIChjb25zdCBbaGFuZGxlcktleSwgZXZlbnRdIG9mIE9iamVjdC5lbnRyaWVzKHN0b3JlRWxlbWVudEV2ZW50KSkge1xuICAgIGlmIChoYW5kbGVyS2V5LmluY2x1ZGVzKG5hbWVzcGFjZSkpIHtcbiAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50LmNhbGxhYmxlLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFR5cGVFdmVudChldmVudCkge1xuICAvLyBhbGxvdyB0byBnZXQgdGhlIG5hdGl2ZSBldmVudHMgZnJvbSBuYW1lc3BhY2VkIGV2ZW50cyAoJ2NsaWNrLmJzLmJ1dHRvbicgLS0+ICdjbGljaycpXG4gIGV2ZW50ID0gZXZlbnQucmVwbGFjZShzdHJpcE5hbWVSZWdleCwgJycpXG4gIHJldHVybiBjdXN0b21FdmVudHNbZXZlbnRdIHx8IGV2ZW50XG59XG5cbmNvbnN0IEV2ZW50SGFuZGxlciA9IHtcbiAgb24oZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbiwgZmFsc2UpXG4gIH0sXG5cbiAgb25lKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIHRydWUpXG4gIH0sXG5cbiAgb2ZmKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICBpZiAodHlwZW9mIG9yaWdpbmFsVHlwZUV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgW2lzRGVsZWdhdGVkLCBjYWxsYWJsZSwgdHlwZUV2ZW50XSA9IG5vcm1hbGl6ZVBhcmFtZXRlcnMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbilcbiAgICBjb25zdCBpbk5hbWVzcGFjZSA9IHR5cGVFdmVudCAhPT0gb3JpZ2luYWxUeXBlRXZlbnRcbiAgICBjb25zdCBldmVudHMgPSBnZXRFbGVtZW50RXZlbnRzKGVsZW1lbnQpXG4gICAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fVxuICAgIGNvbnN0IGlzTmFtZXNwYWNlID0gb3JpZ2luYWxUeXBlRXZlbnQuc3RhcnRzV2l0aCgnLicpXG5cbiAgICBpZiAodHlwZW9mIGNhbGxhYmxlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gU2ltcGxlc3QgY2FzZTogaGFuZGxlciBpcyBwYXNzZWQsIHJlbW92ZSB0aGF0IGxpc3RlbmVyIE9OTFkuXG4gICAgICBpZiAoIU9iamVjdC5rZXlzKHN0b3JlRWxlbWVudEV2ZW50KS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGNhbGxhYmxlLCBpc0RlbGVnYXRlZCA/IGhhbmRsZXIgOiBudWxsKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzTmFtZXNwYWNlKSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnRFdmVudCBvZiBPYmplY3Qua2V5cyhldmVudHMpKSB7XG4gICAgICAgIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIGVsZW1lbnRFdmVudCwgb3JpZ2luYWxUeXBlRXZlbnQuc2xpY2UoMSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBba2V5SGFuZGxlcnMsIGV2ZW50XSBvZiBPYmplY3QuZW50cmllcyhzdG9yZUVsZW1lbnRFdmVudCkpIHtcbiAgICAgIGNvbnN0IGhhbmRsZXJLZXkgPSBrZXlIYW5kbGVycy5yZXBsYWNlKHN0cmlwVWlkUmVnZXgsICcnKVxuXG4gICAgICBpZiAoIWluTmFtZXNwYWNlIHx8IG9yaWdpbmFsVHlwZUV2ZW50LmluY2x1ZGVzKGhhbmRsZXJLZXkpKSB7XG4gICAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50LmNhbGxhYmxlLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHRyaWdnZXIoZWxlbWVudCwgZXZlbnQsIGFyZ3MpIHtcbiAgICBpZiAodHlwZW9mIGV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCAkID0gZ2V0alF1ZXJ5KClcbiAgICBjb25zdCB0eXBlRXZlbnQgPSBnZXRUeXBlRXZlbnQoZXZlbnQpXG4gICAgY29uc3QgaW5OYW1lc3BhY2UgPSBldmVudCAhPT0gdHlwZUV2ZW50XG5cbiAgICBsZXQgalF1ZXJ5RXZlbnQgPSBudWxsXG4gICAgbGV0IGJ1YmJsZXMgPSB0cnVlXG4gICAgbGV0IG5hdGl2ZURpc3BhdGNoID0gdHJ1ZVxuICAgIGxldCBkZWZhdWx0UHJldmVudGVkID0gZmFsc2VcblxuICAgIGlmIChpbk5hbWVzcGFjZSAmJiAkKSB7XG4gICAgICBqUXVlcnlFdmVudCA9ICQuRXZlbnQoZXZlbnQsIGFyZ3MpXG5cbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcihqUXVlcnlFdmVudClcbiAgICAgIGJ1YmJsZXMgPSAhalF1ZXJ5RXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKVxuICAgICAgbmF0aXZlRGlzcGF0Y2ggPSAhalF1ZXJ5RXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKVxuICAgICAgZGVmYXVsdFByZXZlbnRlZCA9IGpRdWVyeUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpXG4gICAgfVxuXG4gICAgY29uc3QgZXZ0ID0gaHlkcmF0ZU9iaihuZXcgRXZlbnQoZXZlbnQsIHsgYnViYmxlcywgY2FuY2VsYWJsZTogdHJ1ZSB9KSwgYXJncylcblxuICAgIGlmIChkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmIChuYXRpdmVEaXNwYXRjaCkge1xuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICB9XG5cbiAgICBpZiAoZXZ0LmRlZmF1bHRQcmV2ZW50ZWQgJiYgalF1ZXJ5RXZlbnQpIHtcbiAgICAgIGpRdWVyeUV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICByZXR1cm4gZXZ0XG4gIH1cbn1cblxuZnVuY3Rpb24gaHlkcmF0ZU9iaihvYmosIG1ldGEgPSB7fSkge1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhtZXRhKSkge1xuICAgIHRyeSB7XG4gICAgICBvYmpba2V5XSA9IHZhbHVlXG4gICAgfSBjYXRjaCB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9ialxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEhhbmRsZXJcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgZG9tL21hbmlwdWxhdG9yLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplRGF0YSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09ICd0cnVlJykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAodmFsdWUgPT09ICdmYWxzZScpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gTnVtYmVyKHZhbHVlKS50b1N0cmluZygpKSB7XG4gICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09ICdudWxsJykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVEYXRhS2V5KGtleSkge1xuICByZXR1cm4ga2V5LnJlcGxhY2UoL1tBLVpdL2csIGNociA9PiBgLSR7Y2hyLnRvTG93ZXJDYXNlKCl9YClcbn1cblxuY29uc3QgTWFuaXB1bGF0b3IgPSB7XG4gIHNldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWAsIHZhbHVlKVxuICB9LFxuXG4gIHJlbW92ZURhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5KSB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YClcbiAgfSxcblxuICBnZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9XG5cbiAgICBjb25zdCBhdHRyaWJ1dGVzID0ge31cbiAgICBjb25zdCBic0tleXMgPSBPYmplY3Qua2V5cyhlbGVtZW50LmRhdGFzZXQpLmZpbHRlcihrZXkgPT4ga2V5LnN0YXJ0c1dpdGgoJ2JzJykgJiYgIWtleS5zdGFydHNXaXRoKCdic0NvbmZpZycpKVxuXG4gICAgZm9yIChjb25zdCBrZXkgb2YgYnNLZXlzKSB7XG4gICAgICBsZXQgcHVyZUtleSA9IGtleS5yZXBsYWNlKC9eYnMvLCAnJylcbiAgICAgIHB1cmVLZXkgPSBwdXJlS2V5LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgcHVyZUtleS5zbGljZSgxKVxuICAgICAgYXR0cmlidXRlc1twdXJlS2V5XSA9IG5vcm1hbGl6ZURhdGEoZWxlbWVudC5kYXRhc2V0W2tleV0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZXNcbiAgfSxcblxuICBnZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSkge1xuICAgIHJldHVybiBub3JtYWxpemVEYXRhKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWApKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmlwdWxhdG9yXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvY29uZmlnLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4uL2RvbS9tYW5pcHVsYXRvci5qcydcbmltcG9ydCB7IGlzRWxlbWVudCwgdG9UeXBlIH0gZnJvbSAnLi9pbmRleC5qcydcblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQ29uZmlnIHtcbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiB7fVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignWW91IGhhdmUgdG8gaW1wbGVtZW50IHRoZSBzdGF0aWMgbWV0aG9kIFwiTkFNRVwiLCBmb3IgZWFjaCBjb21wb25lbnQhJylcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0gdGhpcy5fbWVyZ2VDb25maWdPYmooY29uZmlnKVxuICAgIGNvbmZpZyA9IHRoaXMuX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKVxuICAgIHRoaXMuX3R5cGVDaGVja0NvbmZpZyhjb25maWcpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX21lcmdlQ29uZmlnT2JqKGNvbmZpZywgZWxlbWVudCkge1xuICAgIGNvbnN0IGpzb25Db25maWcgPSBpc0VsZW1lbnQoZWxlbWVudCkgPyBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsICdjb25maWcnKSA6IHt9IC8vIHRyeSB0byBwYXJzZVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCxcbiAgICAgIC4uLih0eXBlb2YganNvbkNvbmZpZyA9PT0gJ29iamVjdCcgPyBqc29uQ29uZmlnIDoge30pLFxuICAgICAgLi4uKGlzRWxlbWVudChlbGVtZW50KSA/IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKGVsZW1lbnQpIDoge30pLFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDoge30pXG4gICAgfVxuICB9XG5cbiAgX3R5cGVDaGVja0NvbmZpZyhjb25maWcsIGNvbmZpZ1R5cGVzID0gdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZSkge1xuICAgIGZvciAoY29uc3QgW3Byb3BlcnR5LCBleHBlY3RlZFR5cGVzXSBvZiBPYmplY3QuZW50cmllcyhjb25maWdUeXBlcykpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gY29uZmlnW3Byb3BlcnR5XVxuICAgICAgY29uc3QgdmFsdWVUeXBlID0gaXNFbGVtZW50KHZhbHVlKSA/ICdlbGVtZW50JyA6IHRvVHlwZSh2YWx1ZSlcblxuICAgICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIGAke3RoaXMuY29uc3RydWN0b3IuTkFNRS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwiJHtwcm9wZXJ0eX1cIiBwcm92aWRlZCB0eXBlIFwiJHt2YWx1ZVR5cGV9XCIgYnV0IGV4cGVjdGVkIHR5cGUgXCIke2V4cGVjdGVkVHlwZXN9XCIuYFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZ1xuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBiYXNlLWNvbXBvbmVudC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vdXRpbC9jb25maWcuanMnXG5pbXBvcnQgeyBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uLCBnZXRFbGVtZW50IH0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IFZFUlNJT04gPSAnNS4zLjcnXG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIEJhc2VDb21wb25lbnQgZXh0ZW5kcyBDb25maWcge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcigpXG5cbiAgICBlbGVtZW50ID0gZ2V0RWxlbWVudChlbGVtZW50KVxuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuXG4gICAgRGF0YS5zZXQodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSwgdGhpcylcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBkaXNwb3NlKCkge1xuICAgIERhdGEucmVtb3ZlKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVkpXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkVWRU5UX0tFWSlcblxuICAgIGZvciAoY29uc3QgcHJvcGVydHlOYW1lIG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKSB7XG4gICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBudWxsXG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfcXVldWVDYWxsYmFjayhjYWxsYmFjaywgZWxlbWVudCwgaXNBbmltYXRlZCA9IHRydWUpIHtcbiAgICBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uKGNhbGxiYWNrLCBlbGVtZW50LCBpc0FuaW1hdGVkKVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB0aGlzLl9tZXJnZUNvbmZpZ09iaihjb25maWcsIHRoaXMuX2VsZW1lbnQpXG4gICAgY29uZmlnID0gdGhpcy5fY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpXG4gICAgdGhpcy5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZylcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGdldEluc3RhbmNlKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRGF0YS5nZXQoZ2V0RWxlbWVudChlbGVtZW50KSwgdGhpcy5EQVRBX0tFWSlcbiAgfVxuXG4gIHN0YXRpYyBnZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIGNvbmZpZyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2UoZWxlbWVudCkgfHwgbmV3IHRoaXMoZWxlbWVudCwgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBudWxsKVxuICB9XG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgIHJldHVybiBgYnMuJHt0aGlzLk5BTUV9YFxuICB9XG5cbiAgc3RhdGljIGdldCBFVkVOVF9LRVkoKSB7XG4gICAgcmV0dXJuIGAuJHt0aGlzLkRBVEFfS0VZfWBcbiAgfVxuXG4gIHN0YXRpYyBldmVudE5hbWUobmFtZSkge1xuICAgIHJldHVybiBgJHtuYW1lfSR7dGhpcy5FVkVOVF9LRVl9YFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VDb21wb25lbnRcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgZG9tL3NlbGVjdG9yLWVuZ2luZS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGlzRGlzYWJsZWQsIGlzVmlzaWJsZSwgcGFyc2VTZWxlY3RvciB9IGZyb20gJy4uL3V0aWwvaW5kZXguanMnXG5cbmNvbnN0IGdldFNlbGVjdG9yID0gZWxlbWVudCA9PiB7XG4gIGxldCBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXRhcmdldCcpXG5cbiAgaWYgKCFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gJyMnKSB7XG4gICAgbGV0IGhyZWZBdHRyaWJ1dGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpXG5cbiAgICAvLyBUaGUgb25seSB2YWxpZCBjb250ZW50IHRoYXQgY291bGQgZG91YmxlIGFzIGEgc2VsZWN0b3IgYXJlIElEcyBvciBjbGFzc2VzLFxuICAgIC8vIHNvIGV2ZXJ5dGhpbmcgc3RhcnRpbmcgd2l0aCBgI2Agb3IgYC5gLiBJZiBhIFwicmVhbFwiIFVSTCBpcyB1c2VkIGFzIHRoZSBzZWxlY3RvcixcbiAgICAvLyBgZG9jdW1lbnQucXVlcnlTZWxlY3RvcmAgd2lsbCByaWdodGZ1bGx5IGNvbXBsYWluIGl0IGlzIGludmFsaWQuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMzIyNzNcbiAgICBpZiAoIWhyZWZBdHRyaWJ1dGUgfHwgKCFocmVmQXR0cmlidXRlLmluY2x1ZGVzKCcjJykgJiYgIWhyZWZBdHRyaWJ1dGUuc3RhcnRzV2l0aCgnLicpKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBKdXN0IGluIGNhc2Ugc29tZSBDTVMgcHV0cyBvdXQgYSBmdWxsIFVSTCB3aXRoIHRoZSBhbmNob3IgYXBwZW5kZWRcbiAgICBpZiAoaHJlZkF0dHJpYnV0ZS5pbmNsdWRlcygnIycpICYmICFocmVmQXR0cmlidXRlLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgaHJlZkF0dHJpYnV0ZSA9IGAjJHtocmVmQXR0cmlidXRlLnNwbGl0KCcjJylbMV19YFxuICAgIH1cblxuICAgIHNlbGVjdG9yID0gaHJlZkF0dHJpYnV0ZSAmJiBocmVmQXR0cmlidXRlICE9PSAnIycgPyBocmVmQXR0cmlidXRlLnRyaW0oKSA6IG51bGxcbiAgfVxuXG4gIHJldHVybiBzZWxlY3RvciA/IHNlbGVjdG9yLnNwbGl0KCcsJykubWFwKHNlbCA9PiBwYXJzZVNlbGVjdG9yKHNlbCkpLmpvaW4oJywnKSA6IG51bGxcbn1cblxuY29uc3QgU2VsZWN0b3JFbmdpbmUgPSB7XG4gIGZpbmQoc2VsZWN0b3IsIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLkVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGwuY2FsbChlbGVtZW50LCBzZWxlY3RvcikpXG4gIH0sXG5cbiAgZmluZE9uZShzZWxlY3RvciwgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIHJldHVybiBFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpXG4gIH0sXG5cbiAgY2hpbGRyZW4oZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLmVsZW1lbnQuY2hpbGRyZW4pLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5tYXRjaGVzKHNlbGVjdG9yKSlcbiAgfSxcblxuICBwYXJlbnRzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgY29uc3QgcGFyZW50cyA9IFtdXG4gICAgbGV0IGFuY2VzdG9yID0gZWxlbWVudC5wYXJlbnROb2RlLmNsb3Nlc3Qoc2VsZWN0b3IpXG5cbiAgICB3aGlsZSAoYW5jZXN0b3IpIHtcbiAgICAgIHBhcmVudHMucHVzaChhbmNlc3RvcilcbiAgICAgIGFuY2VzdG9yID0gYW5jZXN0b3IucGFyZW50Tm9kZS5jbG9zZXN0KHNlbGVjdG9yKVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRzXG4gIH0sXG5cbiAgcHJldihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGxldCBwcmV2aW91cyA9IGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZ1xuXG4gICAgd2hpbGUgKHByZXZpb3VzKSB7XG4gICAgICBpZiAocHJldmlvdXMubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIFtwcmV2aW91c11cbiAgICAgIH1cblxuICAgICAgcHJldmlvdXMgPSBwcmV2aW91cy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH0sXG4gIC8vIFRPRE86IHRoaXMgaXMgbm93IHVudXNlZDsgcmVtb3ZlIGxhdGVyIGFsb25nIHdpdGggcHJldigpXG4gIG5leHQoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBsZXQgbmV4dCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nXG5cbiAgICB3aGlsZSAobmV4dCkge1xuICAgICAgaWYgKG5leHQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIFtuZXh0XVxuICAgICAgfVxuXG4gICAgICBuZXh0ID0gbmV4dC5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfSxcblxuICBmb2N1c2FibGVDaGlsZHJlbihlbGVtZW50KSB7XG4gICAgY29uc3QgZm9jdXNhYmxlcyA9IFtcbiAgICAgICdhJyxcbiAgICAgICdidXR0b24nLFxuICAgICAgJ2lucHV0JyxcbiAgICAgICd0ZXh0YXJlYScsXG4gICAgICAnc2VsZWN0JyxcbiAgICAgICdkZXRhaWxzJyxcbiAgICAgICdbdGFiaW5kZXhdJyxcbiAgICAgICdbY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiXSdcbiAgICBdLm1hcChzZWxlY3RvciA9PiBgJHtzZWxlY3Rvcn06bm90KFt0YWJpbmRleF49XCItXCJdKWApLmpvaW4oJywnKVxuXG4gICAgcmV0dXJuIHRoaXMuZmluZChmb2N1c2FibGVzLCBlbGVtZW50KS5maWx0ZXIoZWwgPT4gIWlzRGlzYWJsZWQoZWwpICYmIGlzVmlzaWJsZShlbCkpXG4gIH0sXG5cbiAgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KVxuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShzZWxlY3RvcikgPyBzZWxlY3RvciA6IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9LFxuXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudClcblxuICAgIHJldHVybiBzZWxlY3RvciA/IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoc2VsZWN0b3IpIDogbnVsbFxuICB9LFxuXG4gIGdldE11bHRpcGxlRWxlbWVudHNGcm9tU2VsZWN0b3IoZWxlbWVudCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudClcblxuICAgIHJldHVybiBzZWxlY3RvciA/IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpIDogW11cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RvckVuZ2luZVxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL2JhY2tkcm9wLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBDb25maWcgZnJvbSAnLi9jb25maWcuanMnXG5pbXBvcnQge1xuICBleGVjdXRlLCBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uLCBnZXRFbGVtZW50LCByZWZsb3dcbn0gZnJvbSAnLi9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ2JhY2tkcm9wJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IEVWRU5UX01PVVNFRE9XTiA9IGBtb3VzZWRvd24uYnMuJHtOQU1FfWBcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgY2xhc3NOYW1lOiAnbW9kYWwtYmFja2Ryb3AnLFxuICBjbGlja0NhbGxiYWNrOiBudWxsLFxuICBpc0FuaW1hdGVkOiBmYWxzZSxcbiAgaXNWaXNpYmxlOiB0cnVlLCAvLyBpZiBmYWxzZSwgd2UgdXNlIHRoZSBiYWNrZHJvcCBoZWxwZXIgd2l0aG91dCBhZGRpbmcgYW55IGVsZW1lbnQgdG8gdGhlIGRvbVxuICByb290RWxlbWVudDogJ2JvZHknIC8vIGdpdmUgdGhlIGNob2ljZSB0byBwbGFjZSBiYWNrZHJvcCB1bmRlciBkaWZmZXJlbnQgZWxlbWVudHNcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gIGNsaWNrQ2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknLFxuICBpc0FuaW1hdGVkOiAnYm9vbGVhbicsXG4gIGlzVmlzaWJsZTogJ2Jvb2xlYW4nLFxuICByb290RWxlbWVudDogJyhlbGVtZW50fHN0cmluZyknXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIEJhY2tkcm9wIGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5faXNBcHBlbmRlZCA9IGZhbHNlXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgc2hvdyhjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5fY29uZmlnLmlzVmlzaWJsZSkge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2FwcGVuZCgpXG5cbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fZ2V0RWxlbWVudCgpXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XG4gICAgICByZWZsb3coZWxlbWVudClcbiAgICB9XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgdGhpcy5fZW11bGF0ZUFuaW1hdGlvbigoKSA9PiB7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgIH0pXG4gIH1cblxuICBoaWRlKGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuaXNWaXNpYmxlKSB7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZ2V0RWxlbWVudCgpLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgdGhpcy5fZW11bGF0ZUFuaW1hdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLmRpc3Bvc2UoKVxuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICB9KVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzQXBwZW5kZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VET1dOKVxuXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKVxuICAgIHRoaXMuX2lzQXBwZW5kZWQgPSBmYWxzZVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfZ2V0RWxlbWVudCgpIHtcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGJhY2tkcm9wLmNsYXNzTmFtZSA9IHRoaXMuX2NvbmZpZy5jbGFzc05hbWVcbiAgICAgIGlmICh0aGlzLl9jb25maWcuaXNBbmltYXRlZCkge1xuICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudCA9IGJhY2tkcm9wXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRcbiAgfVxuXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIC8vIHVzZSBnZXRFbGVtZW50KCkgd2l0aCB0aGUgZGVmYXVsdCBcImJvZHlcIiB0byBnZXQgYSBmcmVzaCBFbGVtZW50IG9uIGVhY2ggaW5zdGFudGlhdGlvblxuICAgIGNvbmZpZy5yb290RWxlbWVudCA9IGdldEVsZW1lbnQoY29uZmlnLnJvb3RFbGVtZW50KVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9hcHBlbmQoKSB7XG4gICAgaWYgKHRoaXMuX2lzQXBwZW5kZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9nZXRFbGVtZW50KClcbiAgICB0aGlzLl9jb25maWcucm9vdEVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpXG5cbiAgICBFdmVudEhhbmRsZXIub24oZWxlbWVudCwgRVZFTlRfTU9VU0VET1dOLCAoKSA9PiB7XG4gICAgICBleGVjdXRlKHRoaXMuX2NvbmZpZy5jbGlja0NhbGxiYWNrKVxuICAgIH0pXG5cbiAgICB0aGlzLl9pc0FwcGVuZGVkID0gdHJ1ZVxuICB9XG5cbiAgX2VtdWxhdGVBbmltYXRpb24oY2FsbGJhY2spIHtcbiAgICBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uKGNhbGxiYWNrLCB0aGlzLl9nZXRFbGVtZW50KCksIHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tkcm9wXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvY29tcG9uZW50LWZ1bmN0aW9ucy5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCB7IGlzRGlzYWJsZWQgfSBmcm9tICcuL2luZGV4LmpzJ1xuXG5jb25zdCBlbmFibGVEaXNtaXNzVHJpZ2dlciA9IChjb21wb25lbnQsIG1ldGhvZCA9ICdoaWRlJykgPT4ge1xuICBjb25zdCBjbGlja0V2ZW50ID0gYGNsaWNrLmRpc21pc3Mke2NvbXBvbmVudC5FVkVOVF9LRVl9YFxuICBjb25zdCBuYW1lID0gY29tcG9uZW50Lk5BTUVcblxuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIGNsaWNrRXZlbnQsIGBbZGF0YS1icy1kaXNtaXNzPVwiJHtuYW1lfVwiXWAsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKSB8fCB0aGlzLmNsb3Nlc3QoYC4ke25hbWV9YClcbiAgICBjb25zdCBpbnN0YW5jZSA9IGNvbXBvbmVudC5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldClcblxuICAgIC8vIE1ldGhvZCBhcmd1bWVudCBpcyBsZWZ0LCBmb3IgQWxlcnQgYW5kIG9ubHksIGFzIGl0IGRvZXNuJ3QgaW1wbGVtZW50IHRoZSAnaGlkZScgbWV0aG9kXG4gICAgaW5zdGFuY2VbbWV0aG9kXSgpXG4gIH0pXG59XG5cbmV4cG9ydCB7XG4gIGVuYWJsZURpc21pc3NUcmlnZ2VyXG59XG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvZm9jdXN0cmFwLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL2NvbmZpZy5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ2ZvY3VzdHJhcCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmZvY3VzdHJhcCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBFVkVOVF9GT0NVU0lOID0gYGZvY3VzaW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX1RBQiA9IGBrZXlkb3duLnRhYiR7RVZFTlRfS0VZfWBcblxuY29uc3QgVEFCX0tFWSA9ICdUYWInXG5jb25zdCBUQUJfTkFWX0ZPUldBUkQgPSAnZm9yd2FyZCdcbmNvbnN0IFRBQl9OQVZfQkFDS1dBUkQgPSAnYmFja3dhcmQnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGF1dG9mb2N1czogdHJ1ZSxcbiAgdHJhcEVsZW1lbnQ6IG51bGwgLy8gVGhlIGVsZW1lbnQgdG8gdHJhcCBmb2N1cyBpbnNpZGUgb2Zcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGF1dG9mb2N1czogJ2Jvb2xlYW4nLFxuICB0cmFwRWxlbWVudDogJ2VsZW1lbnQnXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIEZvY3VzVHJhcCBleHRlbmRzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2VcbiAgICB0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uID0gbnVsbFxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBhY3RpdmF0ZSgpIHtcbiAgICBpZiAodGhpcy5faXNBY3RpdmUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcuYXV0b2ZvY3VzKSB7XG4gICAgICB0aGlzLl9jb25maWcudHJhcEVsZW1lbnQuZm9jdXMoKVxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0tFWSkgLy8gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBmb2N1cyBsb29wXG4gICAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOLCBldmVudCA9PiB0aGlzLl9oYW5kbGVGb2N1c2luKGV2ZW50KSlcbiAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fVEFCLCBldmVudCA9PiB0aGlzLl9oYW5kbGVLZXlkb3duKGV2ZW50KSlcblxuICAgIHRoaXMuX2lzQWN0aXZlID0gdHJ1ZVxuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzQWN0aXZlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfS0VZKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfaGFuZGxlRm9jdXNpbihldmVudCkge1xuICAgIGNvbnN0IHsgdHJhcEVsZW1lbnQgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gZG9jdW1lbnQgfHwgZXZlbnQudGFyZ2V0ID09PSB0cmFwRWxlbWVudCB8fCB0cmFwRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50cyA9IFNlbGVjdG9yRW5naW5lLmZvY3VzYWJsZUNoaWxkcmVuKHRyYXBFbGVtZW50KVxuXG4gICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdHJhcEVsZW1lbnQuZm9jdXMoKVxuICAgIH0gZWxzZSBpZiAodGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbiA9PT0gVEFCX05BVl9CQUNLV0FSRCkge1xuICAgICAgZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoIC0gMV0uZm9jdXMoKVxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50c1swXS5mb2N1cygpXG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUtleWRvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ICE9PSBUQUJfS0VZKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uID0gZXZlbnQuc2hpZnRLZXkgPyBUQUJfTkFWX0JBQ0tXQVJEIDogVEFCX05BVl9GT1JXQVJEXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9jdXNUcmFwXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvc2Nyb2xsQmFyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4uL2RvbS9tYW5pcHVsYXRvci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSAnLi9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBTRUxFQ1RPUl9GSVhFRF9DT05URU5UID0gJy5maXhlZC10b3AsIC5maXhlZC1ib3R0b20sIC5pcy1maXhlZCwgLnN0aWNreS10b3AnXG5jb25zdCBTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCA9ICcuc3RpY2t5LXRvcCdcbmNvbnN0IFBST1BFUlRZX1BBRERJTkcgPSAncGFkZGluZy1yaWdodCdcbmNvbnN0IFBST1BFUlRZX01BUkdJTiA9ICdtYXJnaW4tcmlnaHQnXG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFNjcm9sbEJhckhlbHBlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5ib2R5XG4gIH1cblxuICAvLyBQdWJsaWNcbiAgZ2V0V2lkdGgoKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9pbm5lcldpZHRoI3VzYWdlX25vdGVzXG4gICAgY29uc3QgZG9jdW1lbnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgIHJldHVybiBNYXRoLmFicyh3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50V2lkdGgpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpXG4gICAgdGhpcy5fZGlzYWJsZU92ZXJGbG93KClcbiAgICAvLyBnaXZlIHBhZGRpbmcgdG8gZWxlbWVudCB0byBiYWxhbmNlIHRoZSBoaWRkZW4gc2Nyb2xsYmFyIHdpZHRoXG4gICAgdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCwgUFJPUEVSVFlfUEFERElORywgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSArIHdpZHRoKVxuICAgIC8vIHRyaWNrOiBXZSBhZGp1c3QgcG9zaXRpdmUgcGFkZGluZ1JpZ2h0IGFuZCBuZWdhdGl2ZSBtYXJnaW5SaWdodCB0byBzdGlja3ktdG9wIGVsZW1lbnRzIHRvIGtlZXAgc2hvd2luZyBmdWxsd2lkdGhcbiAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9GSVhFRF9DT05URU5ULCBQUk9QRVJUWV9QQURESU5HLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlICsgd2lkdGgpXG4gICAgdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQsIFBST1BFUlRZX01BUkdJTiwgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSAtIHdpZHRoKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLl9lbGVtZW50LCAnb3ZlcmZsb3cnKVxuICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCwgUFJPUEVSVFlfUEFERElORylcbiAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQsIFBST1BFUlRZX1BBRERJTkcpXG4gICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCwgUFJPUEVSVFlfTUFSR0lOKVxuICB9XG5cbiAgaXNPdmVyZmxvd2luZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRXaWR0aCgpID4gMFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfZGlzYWJsZU92ZXJGbG93KCkge1xuICAgIHRoaXMuX3NhdmVJbml0aWFsQXR0cmlidXRlKHRoaXMuX2VsZW1lbnQsICdvdmVyZmxvdycpXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gIH1cblxuICBfc2V0RWxlbWVudEF0dHJpYnV0ZXMoc2VsZWN0b3IsIHN0eWxlUHJvcGVydHksIGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSB0aGlzLmdldFdpZHRoKClcbiAgICBjb25zdCBtYW5pcHVsYXRpb25DYWxsQmFjayA9IGVsZW1lbnQgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQgIT09IHRoaXMuX2VsZW1lbnQgJiYgd2luZG93LmlubmVyV2lkdGggPiBlbGVtZW50LmNsaWVudFdpZHRoICsgc2Nyb2xsYmFyV2lkdGgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NhdmVJbml0aWFsQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpXG4gICAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKHN0eWxlUHJvcGVydHkpXG4gICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHN0eWxlUHJvcGVydHksIGAke2NhbGxiYWNrKE51bWJlci5wYXJzZUZsb2F0KGNhbGN1bGF0ZWRWYWx1ZSkpfXB4YClcbiAgICB9XG5cbiAgICB0aGlzLl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHNlbGVjdG9yLCBtYW5pcHVsYXRpb25DYWxsQmFjaylcbiAgfVxuXG4gIF9zYXZlSW5pdGlhbEF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KSB7XG4gICAgY29uc3QgYWN0dWFsVmFsdWUgPSBlbGVtZW50LnN0eWxlLmdldFByb3BlcnR5VmFsdWUoc3R5bGVQcm9wZXJ0eSlcbiAgICBpZiAoYWN0dWFsVmFsdWUpIHtcbiAgICAgIE1hbmlwdWxhdG9yLnNldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSwgYWN0dWFsVmFsdWUpXG4gICAgfVxuICB9XG5cbiAgX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoc2VsZWN0b3IsIHN0eWxlUHJvcGVydHkpIHtcbiAgICBjb25zdCBtYW5pcHVsYXRpb25DYWxsQmFjayA9IGVsZW1lbnQgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpXG4gICAgICAvLyBXZSBvbmx5IHdhbnQgdG8gcmVtb3ZlIHRoZSBwcm9wZXJ0eSBpZiB0aGUgdmFsdWUgaXMgYG51bGxgOyB0aGUgdmFsdWUgY2FuIGFsc28gYmUgemVyb1xuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoc3R5bGVQcm9wZXJ0eSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIE1hbmlwdWxhdG9yLnJlbW92ZURhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSlcbiAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoc3R5bGVQcm9wZXJ0eSwgdmFsdWUpXG4gICAgfVxuXG4gICAgdGhpcy5fYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayhzZWxlY3RvciwgbWFuaXB1bGF0aW9uQ2FsbEJhY2spXG4gIH1cblxuICBfYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayhzZWxlY3RvciwgY2FsbEJhY2spIHtcbiAgICBpZiAoaXNFbGVtZW50KHNlbGVjdG9yKSkge1xuICAgICAgY2FsbEJhY2soc2VsZWN0b3IpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHNlbCBvZiBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yLCB0aGlzLl9lbGVtZW50KSkge1xuICAgICAgY2FsbEJhY2soc2VsKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxCYXJIZWxwZXJcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgb2ZmY2FudmFzLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnLi91dGlsL2JhY2tkcm9wLmpzJ1xuaW1wb3J0IHsgZW5hYmxlRGlzbWlzc1RyaWdnZXIgfSBmcm9tICcuL3V0aWwvY29tcG9uZW50LWZ1bmN0aW9ucy5qcydcbmltcG9ydCBGb2N1c1RyYXAgZnJvbSAnLi91dGlsL2ZvY3VzdHJhcC5qcydcbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgaXNEaXNhYmxlZCxcbiAgaXNWaXNpYmxlXG59IGZyb20gJy4vdXRpbC9pbmRleC5qcydcbmltcG9ydCBTY3JvbGxCYXJIZWxwZXIgZnJvbSAnLi91dGlsL3Njcm9sbGJhci5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ29mZmNhbnZhcydcbmNvbnN0IERBVEFfS0VZID0gJ2JzLm9mZmNhbnZhcydcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnXG5cbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XSU5HID0gJ3Nob3dpbmcnXG5jb25zdCBDTEFTU19OQU1FX0hJRElORyA9ICdoaWRpbmcnXG5jb25zdCBDTEFTU19OQU1FX0JBQ0tEUk9QID0gJ29mZmNhbnZhcy1iYWNrZHJvcCdcbmNvbnN0IE9QRU5fU0VMRUNUT1IgPSAnLm9mZmNhbnZhcy5zaG93J1xuXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREVfUFJFVkVOVEVEID0gYGhpZGVQcmV2ZW50ZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUkVTSVpFID0gYHJlc2l6ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTl9ESVNNSVNTID0gYGtleWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWBcblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwib2ZmY2FudmFzXCJdJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBiYWNrZHJvcDogdHJ1ZSxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIHNjcm9sbDogZmFsc2Vcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGJhY2tkcm9wOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gIHNjcm9sbDogJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIE9mZmNhbnZhcyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb25maWcpXG5cbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICB0aGlzLl9iYWNrZHJvcCA9IHRoaXMuX2luaXRpYWxpemVCYWNrRHJvcCgpXG4gICAgdGhpcy5fZm9jdXN0cmFwID0gdGhpcy5faW5pdGlhbGl6ZUZvY3VzVHJhcCgpXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XLCB7IHJlbGF0ZWRUYXJnZXQgfSlcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IHRydWVcbiAgICB0aGlzLl9iYWNrZHJvcC5zaG93KClcblxuICAgIGlmICghdGhpcy5fY29uZmlnLnNjcm9sbCkge1xuICAgICAgbmV3IFNjcm9sbEJhckhlbHBlcigpLmhpZGUoKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1dJTkcpXG5cbiAgICBjb25zdCBjb21wbGV0ZUNhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsIHx8IHRoaXMuX2NvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgICB0aGlzLl9mb2N1c3RyYXAuYWN0aXZhdGUoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPV0lORylcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOLCB7IHJlbGF0ZWRUYXJnZXQgfSlcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbEJhY2ssIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5faXNTaG93bikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcblxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKVxuICAgIHRoaXMuX2VsZW1lbnQuYmx1cigpXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfSElESU5HKVxuICAgIHRoaXMuX2JhY2tkcm9wLmhpZGUoKVxuXG4gICAgY29uc3QgY29tcGxldGVDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1csIENMQVNTX05BTUVfSElESU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnKVxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKVxuXG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwpIHtcbiAgICAgICAgbmV3IFNjcm9sbEJhckhlbHBlcigpLnJlc2V0KClcbiAgICAgIH1cblxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGVDYWxsYmFjaywgdGhpcy5fZWxlbWVudCwgdHJ1ZSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgdGhpcy5fYmFja2Ryb3AuZGlzcG9zZSgpXG4gICAgdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKVxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfaW5pdGlhbGl6ZUJhY2tEcm9wKCkge1xuICAgIGNvbnN0IGNsaWNrQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFX1BSRVZFTlRFRClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfVxuXG4gICAgLy8gJ3N0YXRpYycgb3B0aW9uIHdpbGwgYmUgdHJhbnNsYXRlZCB0byB0cnVlLCBhbmQgYm9vbGVhbnMgd2lsbCBrZWVwIHRoZWlyIHZhbHVlXG4gICAgY29uc3QgaXNWaXNpYmxlID0gQm9vbGVhbih0aGlzLl9jb25maWcuYmFja2Ryb3ApXG5cbiAgICByZXR1cm4gbmV3IEJhY2tkcm9wKHtcbiAgICAgIGNsYXNzTmFtZTogQ0xBU1NfTkFNRV9CQUNLRFJPUCxcbiAgICAgIGlzVmlzaWJsZSxcbiAgICAgIGlzQW5pbWF0ZWQ6IHRydWUsXG4gICAgICByb290RWxlbWVudDogdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgY2xpY2tDYWxsYmFjazogaXNWaXNpYmxlID8gY2xpY2tDYWxsYmFjayA6IG51bGxcbiAgICB9KVxuICB9XG5cbiAgX2luaXRpYWxpemVGb2N1c1RyYXAoKSB7XG4gICAgcmV0dXJuIG5ldyBGb2N1c1RyYXAoe1xuICAgICAgdHJhcEVsZW1lbnQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9KVxuICB9XG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOX0RJU01JU1MsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgIT09IEVTQ0FQRV9LRVkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREVfUFJFVkVOVEVEKVxuICAgIH0pXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBPZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKHRoaXMpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBjb25zdCB0YXJnZXQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpXG5cbiAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGlmIChpc0Rpc2FibGVkKHRoaXMpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBFdmVudEhhbmRsZXIub25lKHRhcmdldCwgRVZFTlRfSElEREVOLCAoKSA9PiB7XG4gICAgLy8gZm9jdXMgb24gdHJpZ2dlciB3aGVuIGl0IGlzIGNsb3NlZFxuICAgIGlmIChpc1Zpc2libGUodGhpcykpIHtcbiAgICAgIHRoaXMuZm9jdXMoKVxuICAgIH1cbiAgfSlcblxuICAvLyBhdm9pZCBjb25mbGljdCB3aGVuIGNsaWNraW5nIGEgdG9nZ2xlciBvZiBhbiBvZmZjYW52YXMsIHdoaWxlIGFub3RoZXIgaXMgb3BlblxuICBjb25zdCBhbHJlYWR5T3BlbiA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoT1BFTl9TRUxFQ1RPUilcbiAgaWYgKGFscmVhZHlPcGVuICYmIGFscmVhZHlPcGVuICE9PSB0YXJnZXQpIHtcbiAgICBPZmZjYW52YXMuZ2V0SW5zdGFuY2UoYWxyZWFkeU9wZW4pLmhpZGUoKVxuICB9XG5cbiAgY29uc3QgZGF0YSA9IE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldClcbiAgZGF0YS50b2dnbGUodGhpcylcbn0pXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgZm9yIChjb25zdCBzZWxlY3RvciBvZiBTZWxlY3RvckVuZ2luZS5maW5kKE9QRU5fU0VMRUNUT1IpKSB7XG4gICAgT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2Uoc2VsZWN0b3IpLnNob3coKVxuICB9XG59KVxuXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9SRVNJWkUsICgpID0+IHtcbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoJ1thcmlhLW1vZGFsXVtjbGFzcyo9c2hvd11bY2xhc3MqPW9mZmNhbnZhcy1dJykpIHtcbiAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiAhPT0gJ2ZpeGVkJykge1xuICAgICAgT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCkuaGlkZSgpXG4gICAgfVxuICB9XG59KVxuXG5lbmFibGVEaXNtaXNzVHJpZ2dlcihPZmZjYW52YXMpXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKE9mZmNhbnZhcylcblxuZXhwb3J0IGRlZmF1bHQgT2ZmY2FudmFzXG4iLCAiaW1wb3J0IFwianMvYm9vdHN0cmFwL3NyYy9kcm9wZG93blwiO1xuaW1wb3J0IFwianMvYm9vdHN0cmFwL3NyYy9vZmZjYW52YXNcIjtcblxuKCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGItaGVhZGVyJykgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgY29uc3QgbmF2ID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5oYi1oZWFkZXItbmF2JykgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgaWYgKCFoZWFkZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFjdGl2ZU1lbnUgPSAobWVudTogRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcsICdwYWdlJylcbiAgICAgICAgICAgIG1lbnUucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIC8vIGFjdGl2ZSB0aGUgMm5kIGxldmVsIG1lbnUgaWYgY3VycmVudCBhY3RpdmF0ZWQgbWVudSBpcyAzcmQgbGV2ZWwgbWVudS5cbiAgICAgICAgICAgIGlmIChtZW51LmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd24taXRlbS1jaGlsZCcpKSB7XG4gICAgICAgICAgICAgICAgbWVudS5jbG9zZXN0KCcuZHJvcGRvd24taXRlbScpPy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gbWVudS5jbG9zZXN0KCcuaGItaGVhZGVyLW1lbnUnKVxuICAgICAgICAgICAgcGFyZW50Py5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgcGFyZW50Py5xdWVyeVNlbGVjdG9yKCcubmF2LWxpbms6Zmlyc3QtY2hpbGQnKT8uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzTWVudVBhcmVudCA9IChwYXJlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBwYXJlbnQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgIGlmICghaHJlZikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZihocmVmKSAhPT0gLTEgfHwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoaHJlZikgIT09IC0xXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtZW51cyA9IG5hdi5xdWVyeVNlbGVjdG9yQWxsKGAuaGItaGVhZGVyLW1lbnVzIGFbaHJlZj1cIiR7d2luZG93LmxvY2F0aW9uLmhyZWZ9XCJdLC5oYi1oZWFkZXItbWVudXMgYVtocmVmPVwiJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9XCJdYClcbiAgICAgICAgaWYgKG1lbnVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG1lbnVzLmZvckVhY2gobWVudSA9PiB7XG4gICAgICAgICAgICAgICAgYWN0aXZlTWVudShtZW51KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBmb3VuZFBhcmVudCA9IGZhbHNlXG4gICAgICAgICAgICBjb25zdCBzdWJtZW51cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYS5oYi1oZWFkZXItc3VibWVudScpKVxuICAgICAgICAgICAgLy8gZmluZCBwYXJlbnQgbWVudSBmcm9tIHNlY29uZC1sZXZlbCBhbmQgdGhpcmQtbGV2ZWwgbWVudXMuXG4gICAgICAgICAgICBmb3IgKGxldCBtZW51IG9mIHN1Ym1lbnVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTWVudVBhcmVudChtZW51KSkge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVNZW51KG1lbnUpXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kUGFyZW50ID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZm91bmRQYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBmaW5kIHBhcmVudCBtZW51IGZyb20gdG9wLWxldmVsIG1lbnVzLlxuICAgICAgICAgICAgICAgIGZvciAobGV0IG1lbnUgb2YgQXJyYXkuZnJvbShuYXYucXVlcnlTZWxlY3RvckFsbCgnYS5uYXYtbGluaycpKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNNZW51UGFyZW50KG1lbnUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVNZW51KG1lbnUpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hhZG93ID0gKCkgPT4ge1xuICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ3NoYWRvdy1zbScpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZW1vdmVTaGFkb3cgPSAoKSA9PiB7XG4gICAgICAgICAgICBuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGFkb3ctc20nKSAmJiBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnc2hhZG93LXNtJylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNob3cgPSAoKSA9PiB7XG4gICAgICAgICAgICBuYXYuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ29wYWNpdHknKTtcbiAgICAgICAgICAgIG5hdi5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnei1pbmRleCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGlkZSA9ICgpID0+IHtcbiAgICAgICAgICAgIG5hdi5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICAgICAgbmF2LnN0eWxlLnpJbmRleCA9ICcwJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBoID0gMDtcbiAgICAgICAgY29uc3QgdGhyZXNob2xkID0gMjA7XG4gICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wICE9PSAwKSB7XG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsaW5nJylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzTW9iaWxlID0gKCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIDwgNTc2XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpc01vYmlsZSgpKSB7XG4gICAgICAgICAgICAgICAgc2hvdygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbGluZycpXG4gICAgICAgICAgICAgICAgcmVtb3ZlU2hhZG93KClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGluZycpXG4gICAgICAgICAgICAgICAgc2hhZG93KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc01vYmlsZSgpICYmIE1hdGguYWJzKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgLSBoKSA+IHRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiBoID8gaGlkZSgpIDogc2hvdygpO1xuICAgICAgICAgICAgICAgIGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59KSgpXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvc3dpcGUuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL2NvbmZpZy5qcydcbmltcG9ydCB7IGV4ZWN1dGUgfSBmcm9tICcuL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnc3dpcGUnXG5jb25zdCBFVkVOVF9LRVkgPSAnLmJzLnN3aXBlJ1xuY29uc3QgRVZFTlRfVE9VQ0hTVEFSVCA9IGB0b3VjaHN0YXJ0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfVE9VQ0hNT1ZFID0gYHRvdWNobW92ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNIRU5EID0gYHRvdWNoZW5kJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUE9JTlRFUkRPV04gPSBgcG9pbnRlcmRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9QT0lOVEVSVVAgPSBgcG9pbnRlcnVwJHtFVkVOVF9LRVl9YFxuY29uc3QgUE9JTlRFUl9UWVBFX1RPVUNIID0gJ3RvdWNoJ1xuY29uc3QgUE9JTlRFUl9UWVBFX1BFTiA9ICdwZW4nXG5jb25zdCBDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQgPSAncG9pbnRlci1ldmVudCdcbmNvbnN0IFNXSVBFX1RIUkVTSE9MRCA9IDQwXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGVuZENhbGxiYWNrOiBudWxsLFxuICBsZWZ0Q2FsbGJhY2s6IG51bGwsXG4gIHJpZ2h0Q2FsbGJhY2s6IG51bGxcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGVuZENhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJyxcbiAgbGVmdENhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJyxcbiAgcmlnaHRDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKSdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgU3dpcGUgZXh0ZW5kcyBDb25maWcge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcblxuICAgIGlmICghZWxlbWVudCB8fCAhU3dpcGUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9kZWx0YVggPSAwXG4gICAgdGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMgPSBCb29sZWFuKHdpbmRvdy5Qb2ludGVyRXZlbnQpXG4gICAgdGhpcy5faW5pdEV2ZW50cygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGRpc3Bvc2UoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVkpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9zdGFydChldmVudCkge1xuICAgIGlmICghdGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMpIHtcbiAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WFxuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaChldmVudCkpIHtcbiAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LmNsaWVudFhcbiAgICB9XG4gIH1cblxuICBfZW5kKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX2V2ZW50SXNQb2ludGVyUGVuVG91Y2goZXZlbnQpKSB7XG4gICAgICB0aGlzLl9kZWx0YVggPSBldmVudC5jbGllbnRYIC0gdGhpcy5fZGVsdGFYXG4gICAgfVxuXG4gICAgdGhpcy5faGFuZGxlU3dpcGUoKVxuICAgIGV4ZWN1dGUodGhpcy5fY29uZmlnLmVuZENhbGxiYWNrKVxuICB9XG5cbiAgX21vdmUoZXZlbnQpIHtcbiAgICB0aGlzLl9kZWx0YVggPSBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSA/XG4gICAgICAwIDpcbiAgICAgIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMuX2RlbHRhWFxuICB9XG5cbiAgX2hhbmRsZVN3aXBlKCkge1xuICAgIGNvbnN0IGFic0RlbHRhWCA9IE1hdGguYWJzKHRoaXMuX2RlbHRhWClcblxuICAgIGlmIChhYnNEZWx0YVggPD0gU1dJUEVfVEhSRVNIT0xEKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBhYnNEZWx0YVggLyB0aGlzLl9kZWx0YVhcblxuICAgIHRoaXMuX2RlbHRhWCA9IDBcblxuICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBleGVjdXRlKGRpcmVjdGlvbiA+IDAgPyB0aGlzLl9jb25maWcucmlnaHRDYWxsYmFjayA6IHRoaXMuX2NvbmZpZy5sZWZ0Q2FsbGJhY2spXG4gIH1cblxuICBfaW5pdEV2ZW50cygpIHtcbiAgICBpZiAodGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9QT0lOVEVSRE9XTiwgZXZlbnQgPT4gdGhpcy5fc3RhcnQoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1BPSU5URVJVUCwgZXZlbnQgPT4gdGhpcy5fZW5kKGV2ZW50KSlcblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfUE9JTlRFUl9FVkVOVClcbiAgICB9IGVsc2Uge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNIU1RBUlQsIGV2ZW50ID0+IHRoaXMuX3N0YXJ0KGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSE1PVkUsIGV2ZW50ID0+IHRoaXMuX21vdmUoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNIRU5ELCBldmVudCA9PiB0aGlzLl9lbmQoZXZlbnQpKVxuICAgIH1cbiAgfVxuXG4gIF9ldmVudElzUG9pbnRlclBlblRvdWNoKGV2ZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzICYmIChldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1BFTiB8fCBldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1RPVUNIKVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBpc1N1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTd2lwZVxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBjYXJvdXNlbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3IuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXROZXh0QWN0aXZlRWxlbWVudCxcbiAgaXNSVEwsXG4gIGlzVmlzaWJsZSxcbiAgcmVmbG93LFxuICB0cmlnZ2VyVHJhbnNpdGlvbkVuZFxufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5pbXBvcnQgU3dpcGUgZnJvbSAnLi91dGlsL3N3aXBlLmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnY2Fyb3VzZWwnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5jYXJvdXNlbCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBBUlJPV19MRUZUX0tFWSA9ICdBcnJvd0xlZnQnXG5jb25zdCBBUlJPV19SSUdIVF9LRVkgPSAnQXJyb3dSaWdodCdcbmNvbnN0IFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgPSA1MDAgLy8gVGltZSBmb3IgbW91c2UgY29tcGF0IGV2ZW50cyB0byBmaXJlIGFmdGVyIHRvdWNoXG5cbmNvbnN0IE9SREVSX05FWFQgPSAnbmV4dCdcbmNvbnN0IE9SREVSX1BSRVYgPSAncHJldidcbmNvbnN0IERJUkVDVElPTl9MRUZUID0gJ2xlZnQnXG5jb25zdCBESVJFQ1RJT05fUklHSFQgPSAncmlnaHQnXG5cbmNvbnN0IEVWRU5UX1NMSURFID0gYHNsaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0xJRCA9IGBzbGlkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTiA9IGBrZXlkb3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VFTlRFUiA9IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VMRUFWRSA9IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRFJBR19TVEFSVCA9IGBkcmFnc3RhcnQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9DQVJPVVNFTCA9ICdjYXJvdXNlbCdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfU0xJREUgPSAnc2xpZGUnXG5jb25zdCBDTEFTU19OQU1FX0VORCA9ICdjYXJvdXNlbC1pdGVtLWVuZCdcbmNvbnN0IENMQVNTX05BTUVfU1RBUlQgPSAnY2Fyb3VzZWwtaXRlbS1zdGFydCdcbmNvbnN0IENMQVNTX05BTUVfTkVYVCA9ICdjYXJvdXNlbC1pdGVtLW5leHQnXG5jb25zdCBDTEFTU19OQU1FX1BSRVYgPSAnY2Fyb3VzZWwtaXRlbS1wcmV2J1xuXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkUgPSAnLmFjdGl2ZSdcbmNvbnN0IFNFTEVDVE9SX0lURU0gPSAnLmNhcm91c2VsLWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkVfSVRFTSA9IFNFTEVDVE9SX0FDVElWRSArIFNFTEVDVE9SX0lURU1cbmNvbnN0IFNFTEVDVE9SX0lURU1fSU1HID0gJy5jYXJvdXNlbC1pdGVtIGltZydcbmNvbnN0IFNFTEVDVE9SX0lORElDQVRPUlMgPSAnLmNhcm91c2VsLWluZGljYXRvcnMnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1NMSURFID0gJ1tkYXRhLWJzLXNsaWRlXSwgW2RhdGEtYnMtc2xpZGUtdG9dJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9SSURFID0gJ1tkYXRhLWJzLXJpZGU9XCJjYXJvdXNlbFwiXSdcblxuY29uc3QgS0VZX1RPX0RJUkVDVElPTiA9IHtcbiAgW0FSUk9XX0xFRlRfS0VZXTogRElSRUNUSU9OX1JJR0hULFxuICBbQVJST1dfUklHSFRfS0VZXTogRElSRUNUSU9OX0xFRlRcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgaW50ZXJ2YWw6IDUwMDAsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBwYXVzZTogJ2hvdmVyJyxcbiAgcmlkZTogZmFsc2UsXG4gIHRvdWNoOiB0cnVlLFxuICB3cmFwOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBpbnRlcnZhbDogJyhudW1iZXJ8Ym9vbGVhbiknLCAvLyBUT0RPOnY2IHJlbW92ZSBib29sZWFuIHN1cHBvcnRcbiAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgcGF1c2U6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgcmlkZTogJyhib29sZWFufHN0cmluZyknLFxuICB0b3VjaDogJ2Jvb2xlYW4nLFxuICB3cmFwOiAnYm9vbGVhbidcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQ2Fyb3VzZWwgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gbnVsbFxuICAgIHRoaXMuX3N3aXBlSGVscGVyID0gbnVsbFxuXG4gICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0lORElDQVRPUlMsIHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5yaWRlID09PSBDTEFTU19OQU1FX0NBUk9VU0VMKSB7XG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICB9XG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIG5leHQoKSB7XG4gICAgdGhpcy5fc2xpZGUoT1JERVJfTkVYVClcbiAgfVxuXG4gIG5leHRXaGVuVmlzaWJsZSgpIHtcbiAgICAvLyBGSVhNRSBUT0RPIHVzZSBgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlYFxuICAgIC8vIERvbid0IGNhbGwgbmV4dCB3aGVuIHRoZSBwYWdlIGlzbid0IHZpc2libGVcbiAgICAvLyBvciB0aGUgY2Fyb3VzZWwgb3IgaXRzIHBhcmVudCBpc24ndCB2aXNpYmxlXG4gICAgaWYgKCFkb2N1bWVudC5oaWRkZW4gJiYgaXNWaXNpYmxlKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgIH1cbiAgfVxuXG4gIHByZXYoKSB7XG4gICAgdGhpcy5fc2xpZGUoT1JERVJfUFJFVilcbiAgfVxuXG4gIHBhdXNlKCkge1xuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5fY2xlYXJJbnRlcnZhbCgpXG4gIH1cblxuICBjeWNsZSgpIHtcbiAgICB0aGlzLl9jbGVhckludGVydmFsKClcbiAgICB0aGlzLl91cGRhdGVJbnRlcnZhbCgpXG5cbiAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHRoaXMubmV4dFdoZW5WaXNpYmxlKCksIHRoaXMuX2NvbmZpZy5pbnRlcnZhbClcbiAgfVxuXG4gIF9tYXliZUVuYWJsZUN5Y2xlKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnLnJpZGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJRCwgKCkgPT4gdGhpcy5jeWNsZSgpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jeWNsZSgpXG4gIH1cblxuICB0byhpbmRleCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5fZ2V0SXRlbXMoKVxuICAgIGlmIChpbmRleCA+IGl0ZW1zLmxlbmd0aCAtIDEgfHwgaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSUQsICgpID0+IHRoaXMudG8oaW5kZXgpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgodGhpcy5fZ2V0QWN0aXZlKCkpXG4gICAgaWYgKGFjdGl2ZUluZGV4ID09PSBpbmRleCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgb3JkZXIgPSBpbmRleCA+IGFjdGl2ZUluZGV4ID8gT1JERVJfTkVYVCA6IE9SREVSX1BSRVZcblxuICAgIHRoaXMuX3NsaWRlKG9yZGVyLCBpdGVtc1tpbmRleF0pXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGlmICh0aGlzLl9zd2lwZUhlbHBlcikge1xuICAgICAgdGhpcy5fc3dpcGVIZWxwZXIuZGlzcG9zZSgpXG4gICAgfVxuXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIGNvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgPSBjb25maWcuaW50ZXJ2YWxcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV04sIGV2ZW50ID0+IHRoaXMuX2tleWRvd24oZXZlbnQpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRUVOVEVSLCAoKSA9PiB0aGlzLnBhdXNlKCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VMRUFWRSwgKCkgPT4gdGhpcy5fbWF5YmVFbmFibGVDeWNsZSgpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG91Y2ggJiYgU3dpcGUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgdGhpcy5fYWRkVG91Y2hFdmVudExpc3RlbmVycygpXG4gICAgfVxuICB9XG5cbiAgX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgZm9yIChjb25zdCBpbWcgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JVEVNX0lNRywgdGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbihpbWcsIEVWRU5UX0RSQUdfU1RBUlQsIGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpXG4gICAgfVxuXG4gICAgY29uc3QgZW5kQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlICE9PSAnaG92ZXInKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCdzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2UsIG1vdXNlZW50ZXIvbGVhdmUgYXJlIGZpcmVkIGFzXG4gICAgICAvLyBwYXJ0IG9mIHRoZSBtb3VzZSBjb21wYXRpYmlsaXR5IGV2ZW50cyBvbiBmaXJzdCB0YXAgLSB0aGUgY2Fyb3VzZWxcbiAgICAgIC8vIHdvdWxkIHN0b3AgY3ljbGluZyB1bnRpbCB1c2VyIHRhcHBlZCBvdXQgb2YgaXQ7XG4gICAgICAvLyBoZXJlLCB3ZSBsaXN0ZW4gZm9yIHRvdWNoZW5kLCBleHBsaWNpdGx5IHBhdXNlIHRoZSBjYXJvdXNlbFxuICAgICAgLy8gKGFzIGlmIGl0J3MgdGhlIHNlY29uZCB0aW1lIHdlIHRhcCBvbiBpdCwgbW91c2VlbnRlciBjb21wYXQgZXZlbnRcbiAgICAgIC8vIGlzIE5PVCBmaXJlZCkgYW5kIGFmdGVyIGEgdGltZW91dCAodG8gYWxsb3cgZm9yIG1vdXNlIGNvbXBhdGliaWxpdHlcbiAgICAgIC8vIGV2ZW50cyB0byBmaXJlKSB3ZSBleHBsaWNpdGx5IHJlc3RhcnQgY3ljbGluZ1xuXG4gICAgICB0aGlzLnBhdXNlKClcbiAgICAgIGlmICh0aGlzLnRvdWNoVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50b3VjaFRpbWVvdXQpXG4gICAgICB9XG5cbiAgICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLl9tYXliZUVuYWJsZUN5Y2xlKCksIFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgKyB0aGlzLl9jb25maWcuaW50ZXJ2YWwpXG4gICAgfVxuXG4gICAgY29uc3Qgc3dpcGVDb25maWcgPSB7XG4gICAgICBsZWZ0Q2FsbGJhY2s6ICgpID0+IHRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoRElSRUNUSU9OX0xFRlQpKSxcbiAgICAgIHJpZ2h0Q2FsbGJhY2s6ICgpID0+IHRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoRElSRUNUSU9OX1JJR0hUKSksXG4gICAgICBlbmRDYWxsYmFjazogZW5kQ2FsbEJhY2tcbiAgICB9XG5cbiAgICB0aGlzLl9zd2lwZUhlbHBlciA9IG5ldyBTd2lwZSh0aGlzLl9lbGVtZW50LCBzd2lwZUNvbmZpZylcbiAgfVxuXG4gIF9rZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBLRVlfVE9fRElSRUNUSU9OW2V2ZW50LmtleV1cbiAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLl9zbGlkZSh0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKGRpcmVjdGlvbikpXG4gICAgfVxuICB9XG5cbiAgX2dldEl0ZW1JbmRleChlbGVtZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldEl0ZW1zKCkuaW5kZXhPZihlbGVtZW50KVxuICB9XG5cbiAgX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQoaW5kZXgpIHtcbiAgICBpZiAoIXRoaXMuX2luZGljYXRvcnNFbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVJbmRpY2F0b3IgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRSwgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpXG5cbiAgICBhY3RpdmVJbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICBhY3RpdmVJbmRpY2F0b3IucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKVxuXG4gICAgY29uc3QgbmV3QWN0aXZlSW5kaWNhdG9yID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShgW2RhdGEtYnMtc2xpZGUtdG89XCIke2luZGV4fVwiXWAsIHRoaXMuX2luZGljYXRvcnNFbGVtZW50KVxuXG4gICAgaWYgKG5ld0FjdGl2ZUluZGljYXRvcikge1xuICAgICAgbmV3QWN0aXZlSW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICBuZXdBY3RpdmVJbmRpY2F0b3Iuc2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnLCAndHJ1ZScpXG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZUludGVydmFsKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9hY3RpdmVFbGVtZW50IHx8IHRoaXMuX2dldEFjdGl2ZSgpXG5cbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRJbnRlcnZhbCA9IE51bWJlci5wYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1pbnRlcnZhbCcpLCAxMClcblxuICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCA9IGVsZW1lbnRJbnRlcnZhbCB8fCB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsXG4gIH1cblxuICBfc2xpZGUob3JkZXIsIGVsZW1lbnQgPSBudWxsKSB7XG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IHRoaXMuX2dldEFjdGl2ZSgpXG4gICAgY29uc3QgaXNOZXh0ID0gb3JkZXIgPT09IE9SREVSX05FWFRcbiAgICBjb25zdCBuZXh0RWxlbWVudCA9IGVsZW1lbnQgfHwgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQodGhpcy5fZ2V0SXRlbXMoKSwgYWN0aXZlRWxlbWVudCwgaXNOZXh0LCB0aGlzLl9jb25maWcud3JhcClcblxuICAgIGlmIChuZXh0RWxlbWVudCA9PT0gYWN0aXZlRWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgbmV4dEVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChuZXh0RWxlbWVudClcblxuICAgIGNvbnN0IHRyaWdnZXJFdmVudCA9IGV2ZW50TmFtZSA9PiB7XG4gICAgICByZXR1cm4gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgZXZlbnROYW1lLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IG5leHRFbGVtZW50LFxuICAgICAgICBkaXJlY3Rpb246IHRoaXMuX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpLFxuICAgICAgICBmcm9tOiB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudCksXG4gICAgICAgIHRvOiBuZXh0RWxlbWVudEluZGV4XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHNsaWRlRXZlbnQgPSB0cmlnZ2VyRXZlbnQoRVZFTlRfU0xJREUpXG5cbiAgICBpZiAoc2xpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWFjdGl2ZUVsZW1lbnQgfHwgIW5leHRFbGVtZW50KSB7XG4gICAgICAvLyBTb21lIHdlaXJkbmVzcyBpcyBoYXBwZW5pbmcsIHNvIHdlIGJhaWxcbiAgICAgIC8vIFRPRE86IGNoYW5nZSB0ZXN0cyB0aGF0IHVzZSBlbXB0eSBkaXZzIHRvIGF2b2lkIHRoaXMgY2hlY2tcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzQ3ljbGluZyA9IEJvb2xlYW4odGhpcy5faW50ZXJ2YWwpXG4gICAgdGhpcy5wYXVzZSgpXG5cbiAgICB0aGlzLl9pc1NsaWRpbmcgPSB0cnVlXG5cbiAgICB0aGlzLl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KG5leHRFbGVtZW50SW5kZXgpXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG5leHRFbGVtZW50XG5cbiAgICBjb25zdCBkaXJlY3Rpb25hbENsYXNzTmFtZSA9IGlzTmV4dCA/IENMQVNTX05BTUVfU1RBUlQgOiBDTEFTU19OQU1FX0VORFxuICAgIGNvbnN0IG9yZGVyQ2xhc3NOYW1lID0gaXNOZXh0ID8gQ0xBU1NfTkFNRV9ORVhUIDogQ0xBU1NfTkFNRV9QUkVWXG5cbiAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKG9yZGVyQ2xhc3NOYW1lKVxuXG4gICAgcmVmbG93KG5leHRFbGVtZW50KVxuXG4gICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG5cbiAgICBjb25zdCBjb21wbGV0ZUNhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShkaXJlY3Rpb25hbENsYXNzTmFtZSwgb3JkZXJDbGFzc05hbWUpXG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUsIG9yZGVyQ2xhc3NOYW1lLCBkaXJlY3Rpb25hbENsYXNzTmFtZSlcblxuICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcblxuICAgICAgdHJpZ2dlckV2ZW50KEVWRU5UX1NMSUQpXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxCYWNrLCBhY3RpdmVFbGVtZW50LCB0aGlzLl9pc0FuaW1hdGVkKCkpXG5cbiAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICB9XG4gIH1cblxuICBfaXNBbmltYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TTElERSlcbiAgfVxuXG4gIF9nZXRBY3RpdmUoKSB7XG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpXG4gIH1cblxuICBfZ2V0SXRlbXMoKSB7XG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSVRFTSwgdGhpcy5fZWxlbWVudClcbiAgfVxuXG4gIF9jbGVhckludGVydmFsKCkge1xuICAgIGlmICh0aGlzLl9pbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbClcbiAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIF9kaXJlY3Rpb25Ub09yZGVyKGRpcmVjdGlvbikge1xuICAgIGlmIChpc1JUTCgpKSB7XG4gICAgICByZXR1cm4gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTEVGVCA/IE9SREVSX1BSRVYgOiBPUkRFUl9ORVhUXG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX0xFRlQgPyBPUkRFUl9ORVhUIDogT1JERVJfUFJFVlxuICB9XG5cbiAgX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpIHtcbiAgICBpZiAoaXNSVEwoKSkge1xuICAgICAgcmV0dXJuIG9yZGVyID09PSBPUkRFUl9QUkVWID8gRElSRUNUSU9OX0xFRlQgOiBESVJFQ1RJT05fUklHSFRcbiAgICB9XG5cbiAgICByZXR1cm4gb3JkZXIgPT09IE9SREVSX1BSRVYgPyBESVJFQ1RJT05fUklHSFQgOiBESVJFQ1RJT05fTEVGVFxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gQ2Fyb3VzZWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnbnVtYmVyJykge1xuICAgICAgICBkYXRhLnRvKGNvbmZpZylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfU0xJREUsIGZ1bmN0aW9uIChldmVudCkge1xuICBjb25zdCB0YXJnZXQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpXG5cbiAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9DQVJPVVNFTCkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICBjb25zdCBjYXJvdXNlbCA9IENhcm91c2VsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KVxuICBjb25zdCBzbGlkZUluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtc2xpZGUtdG8nKVxuXG4gIGlmIChzbGlkZUluZGV4KSB7XG4gICAgY2Fyb3VzZWwudG8oc2xpZGVJbmRleClcbiAgICBjYXJvdXNlbC5fbWF5YmVFbmFibGVDeWNsZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZSh0aGlzLCAnc2xpZGUnKSA9PT0gJ25leHQnKSB7XG4gICAgY2Fyb3VzZWwubmV4dCgpXG4gICAgY2Fyb3VzZWwuX21heWJlRW5hYmxlQ3ljbGUoKVxuICAgIHJldHVyblxuICB9XG5cbiAgY2Fyb3VzZWwucHJldigpXG4gIGNhcm91c2VsLl9tYXliZUVuYWJsZUN5Y2xlKClcbn0pXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgY29uc3QgY2Fyb3VzZWxzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1JJREUpXG5cbiAgZm9yIChjb25zdCBjYXJvdXNlbCBvZiBjYXJvdXNlbHMpIHtcbiAgICBDYXJvdXNlbC5nZXRPckNyZWF0ZUluc3RhbmNlKGNhcm91c2VsKVxuICB9XG59KVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihDYXJvdXNlbClcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxcbiIsICJpbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcImpzL2Jvb3RzdHJhcC9zcmMvY2Fyb3VzZWxcIjtcblxuKCgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCIuY2Fyb3VzZWxcIikuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBuZXcgQ2Fyb3VzZWwoZWwpXG4gIH0pXG59KSgpXG4iLCAiZXhwb3J0IGNvbnN0IGlzU2FmYXJpID0gKCk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuIHVhLmluZGV4T2YoXCJzYWZhcmlcIikgIT09IC0xICYmIHVhLmluZGV4T2YoXCJjaHJvbWVcIikgPT09IC0xO1xufTtcblxuKCgpID0+IHtcbiAgaWYgKGlzU2FmYXJpKCkpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTExpbmtFbGVtZW50PihcImFbZGF0YS1yc3MtZmVlZF1cIilcbiAgICAgIC5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgIGxpbmsuaHJlZiA9IFwiZmVlZDpcIiArIGxpbmsuaHJlZjtcbiAgICAgIH0pO1xuICB9XG59KSgpIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBzY3JvbGxzcHkuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50LmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbiwgZ2V0RWxlbWVudCwgaXNEaXNhYmxlZCwgaXNWaXNpYmxlXG59IGZyb20gJy4vdXRpbC9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ3Njcm9sbHNweSdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnNjcm9sbHNweSdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBFVkVOVF9BQ1RJVkFURSA9IGBhY3RpdmF0ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLID0gYGNsaWNrJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0RST1BET1dOX0lURU0gPSAnZHJvcGRvd24taXRlbSdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcblxuY29uc3QgU0VMRUNUT1JfREFUQV9TUFkgPSAnW2RhdGEtYnMtc3B5PVwic2Nyb2xsXCJdJ1xuY29uc3QgU0VMRUNUT1JfVEFSR0VUX0xJTktTID0gJ1tocmVmXSdcbmNvbnN0IFNFTEVDVE9SX05BVl9MSVNUX0dST1VQID0gJy5uYXYsIC5saXN0LWdyb3VwJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0xJTktTID0gJy5uYXYtbGluaydcbmNvbnN0IFNFTEVDVE9SX05BVl9JVEVNUyA9ICcubmF2LWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9MSVNUX0lURU1TID0gJy5saXN0LWdyb3VwLWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9MSU5LX0lURU1TID0gYCR7U0VMRUNUT1JfTkFWX0xJTktTfSwgJHtTRUxFQ1RPUl9OQVZfSVRFTVN9ID4gJHtTRUxFQ1RPUl9OQVZfTElOS1N9LCAke1NFTEVDVE9SX0xJU1RfSVRFTVN9YFxuY29uc3QgU0VMRUNUT1JfRFJPUERPV04gPSAnLmRyb3Bkb3duJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJy5kcm9wZG93bi10b2dnbGUnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIG9mZnNldDogbnVsbCwgLy8gVE9ETzogdjYgQGRlcHJlY2F0ZWQsIGtlZXAgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHJlYXNvbnNcbiAgcm9vdE1hcmdpbjogJzBweCAwcHggLTI1JScsXG4gIHNtb290aFNjcm9sbDogZmFsc2UsXG4gIHRhcmdldDogbnVsbCxcbiAgdGhyZXNob2xkOiBbMC4xLCAwLjUsIDFdXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBvZmZzZXQ6ICcobnVtYmVyfG51bGwpJywgLy8gVE9ETyB2NiBAZGVwcmVjYXRlZCwga2VlcCBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgcmVhc29uc1xuICByb290TWFyZ2luOiAnc3RyaW5nJyxcbiAgc21vb3RoU2Nyb2xsOiAnYm9vbGVhbicsXG4gIHRhcmdldDogJ2VsZW1lbnQnLFxuICB0aHJlc2hvbGQ6ICdhcnJheSdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgU2Nyb2xsU3B5IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIC8vIHRoaXMuX2VsZW1lbnQgaXMgdGhlIG9ic2VydmFibGVzQ29udGFpbmVyIGFuZCBjb25maWcudGFyZ2V0IHRoZSBtZW51IGxpbmtzIHdyYXBwZXJcbiAgICB0aGlzLl90YXJnZXRMaW5rcyA9IG5ldyBNYXAoKVxuICAgIHRoaXMuX29ic2VydmFibGVTZWN0aW9ucyA9IG5ldyBNYXAoKVxuICAgIHRoaXMuX3Jvb3RFbGVtZW50ID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9lbGVtZW50KS5vdmVyZmxvd1kgPT09ICd2aXNpYmxlJyA/IG51bGwgOiB0aGlzLl9lbGVtZW50XG4gICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbFxuICAgIHRoaXMuX29ic2VydmVyID0gbnVsbFxuICAgIHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YSA9IHtcbiAgICAgIHZpc2libGVFbnRyeVRvcDogMCxcbiAgICAgIHBhcmVudFNjcm9sbFRvcDogMFxuICAgIH1cbiAgICB0aGlzLnJlZnJlc2goKSAvLyBpbml0aWFsaXplXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5faW5pdGlhbGl6ZVRhcmdldHNBbmRPYnNlcnZhYmxlcygpXG4gICAgdGhpcy5fbWF5YmVFbmFibGVTbW9vdGhTY3JvbGwoKVxuXG4gICAgaWYgKHRoaXMuX29ic2VydmVyKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSB0aGlzLl9nZXROZXdPYnNlcnZlcigpXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBzZWN0aW9uIG9mIHRoaXMuX29ic2VydmFibGVTZWN0aW9ucy52YWx1ZXMoKSkge1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZShzZWN0aW9uKVxuICAgIH1cbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIC8vIFRPRE86IG9uIHY2IHRhcmdldCBzaG91bGQgYmUgZ2l2ZW4gZXhwbGljaXRseSAmIHJlbW92ZSB0aGUge3RhcmdldDogJ3NzLXRhcmdldCd9IGNhc2VcbiAgICBjb25maWcudGFyZ2V0ID0gZ2V0RWxlbWVudChjb25maWcudGFyZ2V0KSB8fCBkb2N1bWVudC5ib2R5XG5cbiAgICAvLyBUT0RPOiB2NiBPbmx5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSByZWFzb25zLiBVc2Ugcm9vdE1hcmdpbiBvbmx5XG4gICAgY29uZmlnLnJvb3RNYXJnaW4gPSBjb25maWcub2Zmc2V0ID8gYCR7Y29uZmlnLm9mZnNldH1weCAwcHggLTMwJWAgOiBjb25maWcucm9vdE1hcmdpblxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGhyZXNob2xkID09PSAnc3RyaW5nJykge1xuICAgICAgY29uZmlnLnRocmVzaG9sZCA9IGNvbmZpZy50aHJlc2hvbGQuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gTnVtYmVyLnBhcnNlRmxvYXQodmFsdWUpKVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9tYXliZUVuYWJsZVNtb290aFNjcm9sbCgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5zbW9vdGhTY3JvbGwpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIHVucmVnaXN0ZXIgYW55IHByZXZpb3VzIGxpc3RlbmVyc1xuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fY29uZmlnLnRhcmdldCwgRVZFTlRfQ0xJQ0spXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fY29uZmlnLnRhcmdldCwgRVZFTlRfQ0xJQ0ssIFNFTEVDVE9SX1RBUkdFVF9MSU5LUywgZXZlbnQgPT4ge1xuICAgICAgY29uc3Qgb2JzZXJ2YWJsZVNlY3Rpb24gPSB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMuZ2V0KGV2ZW50LnRhcmdldC5oYXNoKVxuICAgICAgaWYgKG9ic2VydmFibGVTZWN0aW9uKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuX3Jvb3RFbGVtZW50IHx8IHdpbmRvd1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBvYnNlcnZhYmxlU2VjdGlvbi5vZmZzZXRUb3AgLSB0aGlzLl9lbGVtZW50Lm9mZnNldFRvcFxuICAgICAgICBpZiAocm9vdC5zY3JvbGxUbykge1xuICAgICAgICAgIHJvb3Quc2Nyb2xsVG8oeyB0b3A6IGhlaWdodCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaHJvbWUgNjAgZG9lc24ndCBzdXBwb3J0IGBzY3JvbGxUb2BcbiAgICAgICAgcm9vdC5zY3JvbGxUb3AgPSBoZWlnaHRcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgX2dldE5ld09ic2VydmVyKCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICByb290OiB0aGlzLl9yb290RWxlbWVudCxcbiAgICAgIHRocmVzaG9sZDogdGhpcy5fY29uZmlnLnRocmVzaG9sZCxcbiAgICAgIHJvb3RNYXJnaW46IHRoaXMuX2NvbmZpZy5yb290TWFyZ2luXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHRoaXMuX29ic2VydmVyQ2FsbGJhY2soZW50cmllcyksIG9wdGlvbnMpXG4gIH1cblxuICAvLyBUaGUgbG9naWMgb2Ygc2VsZWN0aW9uXG4gIF9vYnNlcnZlckNhbGxiYWNrKGVudHJpZXMpIHtcbiAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZW50cnkgPT4gdGhpcy5fdGFyZ2V0TGlua3MuZ2V0KGAjJHtlbnRyeS50YXJnZXQuaWR9YClcbiAgICBjb25zdCBhY3RpdmF0ZSA9IGVudHJ5ID0+IHtcbiAgICAgIHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS52aXNpYmxlRW50cnlUb3AgPSBlbnRyeS50YXJnZXQub2Zmc2V0VG9wXG4gICAgICB0aGlzLl9wcm9jZXNzKHRhcmdldEVsZW1lbnQoZW50cnkpKVxuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudFNjcm9sbFRvcCA9ICh0aGlzLl9yb290RWxlbWVudCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLnNjcm9sbFRvcFxuICAgIGNvbnN0IHVzZXJTY3JvbGxzRG93biA9IHBhcmVudFNjcm9sbFRvcCA+PSB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEucGFyZW50U2Nyb2xsVG9wXG4gICAgdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnBhcmVudFNjcm9sbFRvcCA9IHBhcmVudFNjcm9sbFRvcFxuXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICBpZiAoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGxcbiAgICAgICAgdGhpcy5fY2xlYXJBY3RpdmVDbGFzcyh0YXJnZXRFbGVtZW50KGVudHJ5KSlcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBlbnRyeUlzTG93ZXJUaGFuUHJldmlvdXMgPSBlbnRyeS50YXJnZXQub2Zmc2V0VG9wID49IHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS52aXNpYmxlRW50cnlUb3BcbiAgICAgIC8vIGlmIHdlIGFyZSBzY3JvbGxpbmcgZG93biwgcGljayB0aGUgYmlnZ2VyIG9mZnNldFRvcFxuICAgICAgaWYgKHVzZXJTY3JvbGxzRG93biAmJiBlbnRyeUlzTG93ZXJUaGFuUHJldmlvdXMpIHtcbiAgICAgICAgYWN0aXZhdGUoZW50cnkpXG4gICAgICAgIC8vIGlmIHBhcmVudCBpc24ndCBzY3JvbGxlZCwgbGV0J3Mga2VlcCB0aGUgZmlyc3QgdmlzaWJsZSBpdGVtLCBicmVha2luZyB0aGUgaXRlcmF0aW9uXG4gICAgICAgIGlmICghcGFyZW50U2Nyb2xsVG9wKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyBpZiB3ZSBhcmUgc2Nyb2xsaW5nIHVwLCBwaWNrIHRoZSBzbWFsbGVzdCBvZmZzZXRUb3BcbiAgICAgIGlmICghdXNlclNjcm9sbHNEb3duICYmICFlbnRyeUlzTG93ZXJUaGFuUHJldmlvdXMpIHtcbiAgICAgICAgYWN0aXZhdGUoZW50cnkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2luaXRpYWxpemVUYXJnZXRzQW5kT2JzZXJ2YWJsZXMoKSB7XG4gICAgdGhpcy5fdGFyZ2V0TGlua3MgPSBuZXcgTWFwKClcbiAgICB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMgPSBuZXcgTWFwKClcblxuICAgIGNvbnN0IHRhcmdldExpbmtzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9UQVJHRVRfTElOS1MsIHRoaXMuX2NvbmZpZy50YXJnZXQpXG5cbiAgICBmb3IgKGNvbnN0IGFuY2hvciBvZiB0YXJnZXRMaW5rcykge1xuICAgICAgLy8gZW5zdXJlIHRoYXQgdGhlIGFuY2hvciBoYXMgYW4gaWQgYW5kIGlzIG5vdCBkaXNhYmxlZFxuICAgICAgaWYgKCFhbmNob3IuaGFzaCB8fCBpc0Rpc2FibGVkKGFuY2hvcikpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb2JzZXJ2YWJsZVNlY3Rpb24gPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKGRlY29kZVVSSShhbmNob3IuaGFzaCksIHRoaXMuX2VsZW1lbnQpXG5cbiAgICAgIC8vIGVuc3VyZSB0aGF0IHRoZSBvYnNlcnZhYmxlU2VjdGlvbiBleGlzdHMgJiBpcyB2aXNpYmxlXG4gICAgICBpZiAoaXNWaXNpYmxlKG9ic2VydmFibGVTZWN0aW9uKSkge1xuICAgICAgICB0aGlzLl90YXJnZXRMaW5rcy5zZXQoZGVjb2RlVVJJKGFuY2hvci5oYXNoKSwgYW5jaG9yKVxuICAgICAgICB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMuc2V0KGFuY2hvci5oYXNoLCBvYnNlcnZhYmxlU2VjdGlvbilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfcHJvY2Vzcyh0YXJnZXQpIHtcbiAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ID09PSB0YXJnZXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2NsZWFyQWN0aXZlQ2xhc3ModGhpcy5fY29uZmlnLnRhcmdldClcbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSB0YXJnZXRcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICB0aGlzLl9hY3RpdmF0ZVBhcmVudHModGFyZ2V0KVxuXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfQUNUSVZBVEUsIHsgcmVsYXRlZFRhcmdldDogdGFyZ2V0IH0pXG4gIH1cblxuICBfYWN0aXZhdGVQYXJlbnRzKHRhcmdldCkge1xuICAgIC8vIEFjdGl2YXRlIGRyb3Bkb3duIHBhcmVudHNcbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BET1dOX0lURU0pKSB7XG4gICAgICBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSwgdGFyZ2V0LmNsb3Nlc3QoU0VMRUNUT1JfRFJPUERPV04pKVxuICAgICAgICAuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3QgbGlzdEdyb3VwIG9mIFNlbGVjdG9yRW5naW5lLnBhcmVudHModGFyZ2V0LCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCkpIHtcbiAgICAgIC8vIFNldCB0cmlnZ2VyZWQgbGlua3MgcGFyZW50cyBhcyBhY3RpdmVcbiAgICAgIC8vIFdpdGggYm90aCA8dWw+IGFuZCA8bmF2PiBtYXJrdXAgYSBwYXJlbnQgaXMgdGhlIHByZXZpb3VzIHNpYmxpbmcgb2YgYW55IG5hdiBhbmNlc3RvclxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIFNlbGVjdG9yRW5naW5lLnByZXYobGlzdEdyb3VwLCBTRUxFQ1RPUl9MSU5LX0lURU1TKSkge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2NsZWFyQWN0aXZlQ2xhc3MocGFyZW50KSB7XG4gICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICBjb25zdCBhY3RpdmVOb2RlcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoYCR7U0VMRUNUT1JfVEFSR0VUX0xJTktTfS4ke0NMQVNTX05BTUVfQUNUSVZFfWAsIHBhcmVudClcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgYWN0aXZlTm9kZXMpIHtcbiAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBTY3JvbGxTcHkuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGZvciAoY29uc3Qgc3B5IG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9TUFkpKSB7XG4gICAgU2Nyb2xsU3B5LmdldE9yQ3JlYXRlSW5zdGFuY2Uoc3B5KVxuICB9XG59KVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihTY3JvbGxTcHkpXG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFNweVxuIiwgIntcImJhY2tfdG9fdG9wXCI6e1wiYW5pbWF0aW9uXCI6dHJ1ZSxcImljb25faGVpZ2h0XCI6XCIyZW1cIixcImljb25fbmFtZVwiOlwiYXJyb3ctdXAtY2lyY2xlXCIsXCJpY29uX3dpZHRoXCI6XCIyZW1cIixcInBvc2l0aW9uX2JvdHRvbVwiOlwiMXJlbVwiLFwicG9zaXRpb25fZW5kXCI6XCIxcmVtXCJ9LFwiYmxvY2txdW90ZXNcIjp7XCJib3JkZXJfc3R5bGVcIjpcInByaW1hcnlcIixcImJvcmRlcl93aWR0aFwiOjQsXCJib3JkZXJlZFwiOnRydWV9LFwiYmxvZ1wiOntcImFyY2hpdmVzXCI6e1wicGFnaW5hdGVcIjozMH0sXCJmdWxsX3dpZHRoXCI6ZmFsc2UsXCJob21lXCI6e1wiZmVhdHVyZWRfcG9zdHNcIjozLFwicGlubmVkX3Bvc3RzX3Bvc2l0aW9uXCI6XCJcIn0sXCJsaXN0X2NvbHNfbGdcIjozLFwibGlzdF9jb2xzX21kXCI6MixcImxpc3RfcGlubmVkX3Bvc3RzXCI6MSxcImxpc3Rfc3R5bGVcIjpcIlwiLFwicGFnaW5hdGVcIjoxMixcInBvc3RfZGF0ZV9mb3JtYXRcIjpcIjpkYXRlX2xvbmdcIixcInBvc3RfcmVhZF9tb3JlXCI6ZmFsc2UsXCJwb3N0X3RodW1ibmFpbFwiOnRydWUsXCJwb3N0X3RodW1ibmFpbF9kZWZhdWx0XCI6XCJpbWFnZXMvdGh1bWJuYWlsLnBuZ1wiLFwicG9zdF90aHVtYm5haWxfaGVpZ2h0XCI6XCIxNjBweFwiLFwicG9zdF90aHVtYm5haWxfcGxhY2Vob2xkZXJcIjpcIlwiLFwicG9zdF90aHVtYm5haWxfcG9zaXRpb25cIjpcInRvcFwiLFwicG9zdF90aHVtYm5haWxfcmVzaXplX2hlaWdodFwiOjM2MCxcInJlbGF0ZWRfcG9zdHNcIjp7XCJsaXN0X3N0eWxlXCI6XCJzbGlkZVwifSxcInNpZGViYXJcIjp7XCJtYXhfd2lkdGhcIjpcIjMyMHB4XCIsXCJwb3NpdGlvblwiOlwiZW5kXCIsXCJwb3N0c1wiOntcInJlY2VudF9wb3N0c1wiOjEwfSxcInN0aWNreVwiOmZhbHNlLFwidGF4b25vbWllc1wiOntcImF1dGhvcnNcIjp7XCJkaXNhYmxlXCI6dHJ1ZX0sXCJzZXBhcmF0ZVwiOnRydWV9LFwid2lkdGhcIjowLjM1fSxcInRlcm1zXCI6e1wicGFnaW5hdGVcIjoxMn0sXCJ0b2NcIjp7XCJwb3NpdGlvblwiOlwiZW5kXCJ9fSxcImJyZWFkY3J1bWJcIjp7XCJkaXNhYmxlZFwiOmZhbHNlfSxcImNvbG9yXCI6XCJkYXJrXCIsXCJjb250ZW50X3BhbmVsXCI6e1wiYm90dG9tXCI6XCIyMHB4XCIsXCJjb21tZW50c1wiOnRydWV9LFwiY3NzX2J1bmRsZV9uYW1lXCI6XCJoYlwiLFwiZG9jc1wiOntcIm1ldGFcIjp7XCJhdXRob3JzXCI6ZmFsc2V9fSxcImZvb3RlclwiOntcInNvY2lhbHNcIjp7XCJfY29sb3JcIjp0cnVlLFwiZ2l0aHViXCI6XCJUZXRyYVRoZXRhXCIsXCJyc3NcIjp0cnVlfX0sXCJmdWxsX3dpZHRoXCI6ZmFsc2UsXCJoZWFkZXJcIjp7XCJicmVha3BvaW50XCI6XCJsZ1wiLFwiZnVsbF93aWR0aFwiOnRydWUsXCJsb2dvX2JnXCI6XCIjMDAwMDAwMDBcIixcInN0aWNreVwiOnRydWV9LFwiaGVhZGluZ19zaWduXCI6e1wiY29udGFpbmVyc1wiOntcIi5oYi1ibG9nLXBvc3QtY29udGVudFwiOnt9fSxcInN5bWJvbFwiOlwiXHUwMEI2XCJ9LFwianNfYnVuZGxlX25hbWVcIjpcImhiXCIsXCJsb2dvXCI6XCIvaW1hZ2VzL2xvZ28ucG5nXCIsXCJtb2R1bGVzXCI6e1wiY29kZS1ibG9jay1wYW5lbFwiOntcImpzX3Jlc291cmNlc1wiOlt7XCJwYXJ0aWFsXCI6XCJjb2RlLWJsb2NrLXBhbmVsL2Fzc2V0cy9qcy1yZXNvdXJjZVwifV19fSxcInBhZ2luYXRpb25cIjp7XCJhbGlnbm1lbnRcIjpcImNlbnRlclwiLFwic2libGluZ3NcIjozLFwic2l6ZVwiOlwiXCJ9LFwicHJvZ3Jlc3NfYmFyXCI6e1wiaGVpZ2h0XCI6XCI0cHhcIixcImluaXRpYWxfd2lkdGhcIjoyMCxcImludGVydmFsXCI6NTAsXCJ0aW1lXCI6Mn0sXCJzYXNzX3RyYW5zcGlsZXJcIjpcImRhcnRzYXNzXCIsXCJzdHlsZXNcIjp7XCJoYl90b3Bfb2Zmc2V0XCI6XCIyNHB4XCIsXCJwcmVmaXhcIjpcImhiLVwifSxcInRhYmxlc1wiOntcImFsaWduXCI6XCJtaWRkbGVcIixcImJvcmRlcl9zdHlsZVwiOlwiXCIsXCJib3JkZXJlZFwiOnRydWUsXCJncm91cF9kaXZpZGVyXCI6ZmFsc2UsXCJob3ZlclwiOnRydWUsXCJzdHJpcGVkXCI6dHJ1ZSxcInN0cmlwZWRfY29sdW1uc1wiOmZhbHNlLFwic3R5bGVcIjpcIlwiLFwidGhlYWRfc3R5bGVcIjpcIlwifSxcInRlcm1zXCI6e1wibGlzdF9zdHlsZVwiOlwiXCIsXCJwYWdpbmF0ZVwiOjEyLFwicHJvZmlsZVwiOmZhbHNlLFwicHJvZmlsZV9tZXRyaWNzXCI6dHJ1ZX0sXCJ0b2Nfc2Nyb2xsc3B5XCI6e1wiYm9yZGVyXCI6dHJ1ZX19IiwgImltcG9ydCAqIGFzIHBhcmFtcyBmcm9tICdAcGFyYW1zJztcblxuKCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXJzID0gcGFyYW1zPy5oZWFkaW5nX3NpZ24/LmNvbnRhaW5lcnNcbiAgICAgICAgaWYgKCFjb250YWluZXJzKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN5bWJvbCA9IHBhcmFtcz8uaGVhZGluZ19zaWduPy5zeW1ib2wgPz8gJ1x1MDBBNydcblxuICAgICAgICBmb3IgKGNvbnN0IHNlbGVjdG9yIGluIGNvbnRhaW5lcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcImgyLCBoMywgaDQsIGg1LCBoNlwiKS5mb3JFYWNoKChoZWFkaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBoZWFkaW5nLmdldEF0dHJpYnV0ZSgnaWQnKVxuICAgICAgICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICAgICAgICAgICAgYW5jaG9yLmNsYXNzTmFtZSA9ICdhbmNob3IgbXMtMSdcbiAgICAgICAgICAgICAgICBhbmNob3IuaHJlZiA9IGAjJHtpZH1gXG4gICAgICAgICAgICAgICAgYW5jaG9yLmlubmVyVGV4dCA9IHN5bWJvbFxuICAgICAgICAgICAgICAgIGhlYWRpbmcuYXBwZW5kQ2hpbGQoYW5jaG9yKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG59KSgpXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGNvbGxhcHNlLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnQsXG4gIHJlZmxvd1xufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdjb2xsYXBzZSdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmNvbGxhcHNlJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0UgPSAnY29sbGFwc2UnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNJTkcgPSAnY29sbGFwc2luZydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0VEID0gJ2NvbGxhcHNlZCdcbmNvbnN0IENMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOID0gYDpzY29wZSAuJHtDTEFTU19OQU1FX0NPTExBUFNFfSAuJHtDTEFTU19OQU1FX0NPTExBUFNFfWBcbmNvbnN0IENMQVNTX05BTUVfSE9SSVpPTlRBTCA9ICdjb2xsYXBzZS1ob3Jpem9udGFsJ1xuXG5jb25zdCBXSURUSCA9ICd3aWR0aCdcbmNvbnN0IEhFSUdIVCA9ICdoZWlnaHQnXG5cbmNvbnN0IFNFTEVDVE9SX0FDVElWRVMgPSAnLmNvbGxhcHNlLnNob3csIC5jb2xsYXBzZS5jb2xsYXBzaW5nJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIl0nXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIHBhcmVudDogbnVsbCxcbiAgdG9nZ2xlOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBwYXJlbnQ6ICcobnVsbHxlbGVtZW50KScsXG4gIHRvZ2dsZTogJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIENvbGxhcHNlIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgdGhpcy5fdHJpZ2dlckFycmF5ID0gW11cblxuICAgIGNvbnN0IHRvZ2dsZUxpc3QgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFKVxuXG4gICAgZm9yIChjb25zdCBlbGVtIG9mIHRvZ2dsZUxpc3QpIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gU2VsZWN0b3JFbmdpbmUuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtKVxuICAgICAgY29uc3QgZmlsdGVyRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpXG4gICAgICAgIC5maWx0ZXIoZm91bmRFbGVtZW50ID0+IGZvdW5kRWxlbWVudCA9PT0gdGhpcy5fZWxlbWVudClcblxuICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsICYmIGZpbHRlckVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJBcnJheS5wdXNoKGVsZW0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faW5pdGlhbGl6ZUNoaWxkcmVuKClcblxuICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdGhpcy5faXNTaG93bigpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG9nZ2xlKSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KClcbiAgICB9XG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgYWN0aXZlQ2hpbGRyZW4gPSBbXVxuXG4gICAgLy8gZmluZCBhY3RpdmUgY2hpbGRyZW5cbiAgICBpZiAodGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgYWN0aXZlQ2hpbGRyZW4gPSB0aGlzLl9nZXRGaXJzdExldmVsQ2hpbGRyZW4oU0VMRUNUT1JfQUNUSVZFUylcbiAgICAgICAgLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQgIT09IHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5tYXAoZWxlbWVudCA9PiBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIHsgdG9nZ2xlOiBmYWxzZSB9KSlcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlQ2hpbGRyZW4ubGVuZ3RoICYmIGFjdGl2ZUNoaWxkcmVuWzBdLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XKVxuICAgIGlmIChzdGFydEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3QgYWN0aXZlSW5zdGFuY2Ugb2YgYWN0aXZlQ2hpbGRyZW4pIHtcbiAgICAgIGFjdGl2ZUluc3RhbmNlLmhpZGUoKVxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRSlcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gMFxuXG4gICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdHJ1ZSlcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRSwgQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTilcbiAgICB9XG5cbiAgICBjb25zdCBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXG4gICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IGBzY3JvbGwke2NhcGl0YWxpemVkRGltZW5zaW9ufWBcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudFtzY3JvbGxTaXplXX1weGBcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCAhdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcbiAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1lbnNpb25dfXB4YFxuXG4gICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFLCBDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBmb3IgKGNvbnN0IHRyaWdnZXIgb2YgdGhpcy5fdHJpZ2dlckFycmF5KSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0cmlnZ2VyKVxuXG4gICAgICBpZiAoZWxlbWVudCAmJiAhdGhpcy5faXNTaG93bihlbGVtZW50KSkge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoW3RyaWdnZXJdLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9pc1Nob3duKGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVylcbiAgfVxuXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIGNvbmZpZy50b2dnbGUgPSBCb29sZWFuKGNvbmZpZy50b2dnbGUpIC8vIENvZXJjZSBzdHJpbmcgdmFsdWVzXG4gICAgY29uZmlnLnBhcmVudCA9IGdldEVsZW1lbnQoY29uZmlnLnBhcmVudClcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGltZW5zaW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0hPUklaT05UQUwpID8gV0lEVEggOiBIRUlHSFRcbiAgfVxuXG4gIF9pbml0aWFsaXplQ2hpbGRyZW4oKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX2dldEZpcnN0TGV2ZWxDaGlsZHJlbihTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcblxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBjaGlsZHJlbikge1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoW2VsZW1lbnRdLCB0aGlzLl9pc1Nob3duKHNlbGVjdGVkKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKHNlbGVjdG9yKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBTZWxlY3RvckVuZ2luZS5maW5kKENMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOLCB0aGlzLl9jb25maWcucGFyZW50KVxuICAgIC8vIHJlbW92ZSBjaGlsZHJlbiBpZiBncmVhdGVyIGRlcHRoXG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHRoaXMuX2NvbmZpZy5wYXJlbnQpLmZpbHRlcihlbGVtZW50ID0+ICFjaGlsZHJlbi5pbmNsdWRlcyhlbGVtZW50KSlcbiAgfVxuXG4gIF9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModHJpZ2dlckFycmF5LCBpc09wZW4pIHtcbiAgICBpZiAoIXRyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB0cmlnZ2VyQXJyYXkpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0NPTExBUFNFRCwgIWlzT3BlbilcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIGNvbnN0IF9jb25maWcgPSB7fVxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgIF9jb25maWcudG9nZ2xlID0gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIF9jb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gcHJldmVudERlZmF1bHQgb25seSBmb3IgPGE+IGVsZW1lbnRzICh3aGljaCBjaGFuZ2UgdGhlIFVSTCkgbm90IGluc2lkZSB0aGUgY29sbGFwc2libGUgZWxlbWVudFxuICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdBJyB8fCAoZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgZXZlbnQuZGVsZWdhdGVUYXJnZXQudGFnTmFtZSA9PT0gJ0EnKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBTZWxlY3RvckVuZ2luZS5nZXRNdWx0aXBsZUVsZW1lbnRzRnJvbVNlbGVjdG9yKHRoaXMpKSB7XG4gICAgQ29sbGFwc2UuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50LCB7IHRvZ2dsZTogZmFsc2UgfSkudG9nZ2xlKClcbiAgfVxufSlcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQ29sbGFwc2UpXG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNlXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHRhYi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IHsgZGVmaW5lSlF1ZXJ5UGx1Z2luLCBnZXROZXh0QWN0aXZlRWxlbWVudCwgaXNEaXNhYmxlZCB9IGZyb20gJy4vdXRpbC9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ3RhYidcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnRhYidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5cbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTiA9IGBrZXlkb3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBBUlJPV19MRUZUX0tFWSA9ICdBcnJvd0xlZnQnXG5jb25zdCBBUlJPV19SSUdIVF9LRVkgPSAnQXJyb3dSaWdodCdcbmNvbnN0IEFSUk9XX1VQX0tFWSA9ICdBcnJvd1VwJ1xuY29uc3QgQVJST1dfRE9XTl9LRVkgPSAnQXJyb3dEb3duJ1xuY29uc3QgSE9NRV9LRVkgPSAnSG9tZSdcbmNvbnN0IEVORF9LRVkgPSAnRW5kJ1xuXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfRFJPUERPV04gPSAnZHJvcGRvd24nXG5cbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9ICcuZHJvcGRvd24tdG9nZ2xlJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fTUVOVSA9ICcuZHJvcGRvd24tbWVudSdcbmNvbnN0IE5PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSBgOm5vdCgke1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX0pYFxuXG5jb25zdCBTRUxFQ1RPUl9UQUJfUEFORUwgPSAnLmxpc3QtZ3JvdXAsIC5uYXYsIFtyb2xlPVwidGFibGlzdFwiXSdcbmNvbnN0IFNFTEVDVE9SX09VVEVSID0gJy5uYXYtaXRlbSwgLmxpc3QtZ3JvdXAtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0lOTkVSID0gYC5uYXYtbGluayR7Tk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX0sIC5saXN0LWdyb3VwLWl0ZW0ke05PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEV9LCBbcm9sZT1cInRhYlwiXSR7Tk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX1gXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJ0YWJcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cInBpbGxcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cImxpc3RcIl0nIC8vIFRPRE86IGNvdWxkIG9ubHkgYmUgYHRhYmAgaW4gdjZcbmNvbnN0IFNFTEVDVE9SX0lOTkVSX0VMRU0gPSBgJHtTRUxFQ1RPUl9JTk5FUn0sICR7U0VMRUNUT1JfREFUQV9UT0dHTEV9YFxuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9BQ1RJVkUgPSBgLiR7Q0xBU1NfTkFNRV9BQ1RJVkV9W2RhdGEtYnMtdG9nZ2xlPVwidGFiXCJdLCAuJHtDTEFTU19OQU1FX0FDVElWRX1bZGF0YS1icy10b2dnbGU9XCJwaWxsXCJdLCAuJHtDTEFTU19OQU1FX0FDVElWRX1bZGF0YS1icy10b2dnbGU9XCJsaXN0XCJdYFxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBUYWIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHN1cGVyKGVsZW1lbnQpXG4gICAgdGhpcy5fcGFyZW50ID0gdGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX1RBQl9QQU5FTClcblxuICAgIGlmICghdGhpcy5fcGFyZW50KSB7XG4gICAgICByZXR1cm5cbiAgICAgIC8vIFRPRE86IHNob3VsZCB0aHJvdyBleGNlcHRpb24gaW4gdjZcbiAgICAgIC8vIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7ZWxlbWVudC5vdXRlckhUTUx9IGhhcyBub3QgYSB2YWxpZCBwYXJlbnQgJHtTRUxFQ1RPUl9JTk5FUl9FTEVNfWApXG4gICAgfVxuXG4gICAgLy8gU2V0IHVwIGluaXRpYWwgYXJpYSBhdHRyaWJ1dGVzXG4gICAgdGhpcy5fc2V0SW5pdGlhbEF0dHJpYnV0ZXModGhpcy5fcGFyZW50LCB0aGlzLl9nZXRDaGlsZHJlbigpKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV04sIGV2ZW50ID0+IHRoaXMuX2tleWRvd24oZXZlbnQpKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBzaG93KCkgeyAvLyBTaG93cyB0aGlzIGVsZW0gYW5kIGRlYWN0aXZhdGUgdGhlIGFjdGl2ZSBzaWJsaW5nIGlmIGV4aXN0c1xuICAgIGNvbnN0IGlubmVyRWxlbSA9IHRoaXMuX2VsZW1lbnRcbiAgICBpZiAodGhpcy5fZWxlbUlzQWN0aXZlKGlubmVyRWxlbSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIFNlYXJjaCBmb3IgYWN0aXZlIHRhYiBvbiBzYW1lIHBhcmVudCB0byBkZWFjdGl2YXRlIGl0XG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5fZ2V0QWN0aXZlRWxlbSgpXG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBhY3RpdmUgP1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIoYWN0aXZlLCBFVkVOVF9ISURFLCB7IHJlbGF0ZWRUYXJnZXQ6IGlubmVyRWxlbSB9KSA6XG4gICAgICBudWxsXG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcihpbm5lckVsZW0sIEVWRU5UX1NIT1csIHsgcmVsYXRlZFRhcmdldDogYWN0aXZlIH0pXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgfHwgKGhpZGVFdmVudCAmJiBoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2RlYWN0aXZhdGUoYWN0aXZlLCBpbm5lckVsZW0pXG4gICAgdGhpcy5fYWN0aXZhdGUoaW5uZXJFbGVtLCBhY3RpdmUpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9hY3RpdmF0ZShlbGVtZW50LCByZWxhdGVkRWxlbSkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgdGhpcy5fYWN0aXZhdGUoU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KSkgLy8gU2VhcmNoIGFuZCBhY3RpdmF0ZS9zaG93IHRoZSBwcm9wZXIgc2VjdGlvblxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSAhPT0gJ3RhYicpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHRydWUpXG4gICAgICB0aGlzLl90b2dnbGVEcm9wRG93bihlbGVtZW50LCB0cnVlKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIoZWxlbWVudCwgRVZFTlRfU0hPV04sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogcmVsYXRlZEVsZW1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgZWxlbWVudCwgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKSlcbiAgfVxuXG4gIF9kZWFjdGl2YXRlKGVsZW1lbnQsIHJlbGF0ZWRFbGVtKSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgZWxlbWVudC5ibHVyKClcblxuICAgIHRoaXMuX2RlYWN0aXZhdGUoU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KSkgLy8gU2VhcmNoIGFuZCBkZWFjdGl2YXRlIHRoZSBzaG93biBzZWN0aW9uIHRvb1xuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSAhPT0gJ3RhYicpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKVxuICAgICAgdGhpcy5fdG9nZ2xlRHJvcERvd24oZWxlbWVudCwgZmFsc2UpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihlbGVtZW50LCBFVkVOVF9ISURERU4sIHsgcmVsYXRlZFRhcmdldDogcmVsYXRlZEVsZW0gfSlcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCBlbGVtZW50LCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpKVxuICB9XG5cbiAgX2tleWRvd24oZXZlbnQpIHtcbiAgICBpZiAoIShbQVJST1dfTEVGVF9LRVksIEFSUk9XX1JJR0hUX0tFWSwgQVJST1dfVVBfS0VZLCBBUlJPV19ET1dOX0tFWSwgSE9NRV9LRVksIEVORF9LRVldLmluY2x1ZGVzKGV2ZW50LmtleSkpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKS8vIHN0b3BQcm9wYWdhdGlvbi9wcmV2ZW50RGVmYXVsdCBib3RoIGFkZGVkIHRvIHN1cHBvcnQgdXAvZG93biBrZXlzIHdpdGhvdXQgc2Nyb2xsaW5nIHRoZSBwYWdlXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLl9nZXRDaGlsZHJlbigpLmZpbHRlcihlbGVtZW50ID0+ICFpc0Rpc2FibGVkKGVsZW1lbnQpKVxuICAgIGxldCBuZXh0QWN0aXZlRWxlbWVudFxuXG4gICAgaWYgKFtIT01FX0tFWSwgRU5EX0tFWV0uaW5jbHVkZXMoZXZlbnQua2V5KSkge1xuICAgICAgbmV4dEFjdGl2ZUVsZW1lbnQgPSBjaGlsZHJlbltldmVudC5rZXkgPT09IEhPTUVfS0VZID8gMCA6IGNoaWxkcmVuLmxlbmd0aCAtIDFdXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlzTmV4dCA9IFtBUlJPV19SSUdIVF9LRVksIEFSUk9XX0RPV05fS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpXG4gICAgICBuZXh0QWN0aXZlRWxlbWVudCA9IGdldE5leHRBY3RpdmVFbGVtZW50KGNoaWxkcmVuLCBldmVudC50YXJnZXQsIGlzTmV4dCwgdHJ1ZSlcbiAgICB9XG5cbiAgICBpZiAobmV4dEFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgIG5leHRBY3RpdmVFbGVtZW50LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KVxuICAgICAgVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UobmV4dEFjdGl2ZUVsZW1lbnQpLnNob3coKVxuICAgIH1cbiAgfVxuXG4gIF9nZXRDaGlsZHJlbigpIHsgLy8gY29sbGVjdGlvbiBvZiBpbm5lciBlbGVtZW50c1xuICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lOTkVSX0VMRU0sIHRoaXMuX3BhcmVudClcbiAgfVxuXG4gIF9nZXRBY3RpdmVFbGVtKCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRDaGlsZHJlbigpLmZpbmQoY2hpbGQgPT4gdGhpcy5fZWxlbUlzQWN0aXZlKGNoaWxkKSkgfHwgbnVsbFxuICB9XG5cbiAgX3NldEluaXRpYWxBdHRyaWJ1dGVzKHBhcmVudCwgY2hpbGRyZW4pIHtcbiAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhwYXJlbnQsICdyb2xlJywgJ3RhYmxpc3QnKVxuXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgdGhpcy5fc2V0SW5pdGlhbEF0dHJpYnV0ZXNPbkNoaWxkKGNoaWxkKVxuICAgIH1cbiAgfVxuXG4gIF9zZXRJbml0aWFsQXR0cmlidXRlc09uQ2hpbGQoY2hpbGQpIHtcbiAgICBjaGlsZCA9IHRoaXMuX2dldElubmVyRWxlbWVudChjaGlsZClcbiAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMuX2VsZW1Jc0FjdGl2ZShjaGlsZClcbiAgICBjb25zdCBvdXRlckVsZW0gPSB0aGlzLl9nZXRPdXRlckVsZW1lbnQoY2hpbGQpXG4gICAgY2hpbGQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgaXNBY3RpdmUpXG5cbiAgICBpZiAob3V0ZXJFbGVtICE9PSBjaGlsZCkge1xuICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMob3V0ZXJFbGVtLCAncm9sZScsICdwcmVzZW50YXRpb24nKVxuICAgIH1cblxuICAgIGlmICghaXNBY3RpdmUpIHtcbiAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKVxuICAgIH1cblxuICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKGNoaWxkLCAncm9sZScsICd0YWInKVxuXG4gICAgLy8gc2V0IGF0dHJpYnV0ZXMgdG8gdGhlIHJlbGF0ZWQgcGFuZWwgdG9vXG4gICAgdGhpcy5fc2V0SW5pdGlhbEF0dHJpYnV0ZXNPblRhcmdldFBhbmVsKGNoaWxkKVxuICB9XG5cbiAgX3NldEluaXRpYWxBdHRyaWJ1dGVzT25UYXJnZXRQYW5lbChjaGlsZCkge1xuICAgIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IoY2hpbGQpXG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHModGFyZ2V0LCAncm9sZScsICd0YWJwYW5lbCcpXG5cbiAgICBpZiAoY2hpbGQuaWQpIHtcbiAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKHRhcmdldCwgJ2FyaWEtbGFiZWxsZWRieScsIGAke2NoaWxkLmlkfWApXG4gICAgfVxuICB9XG5cbiAgX3RvZ2dsZURyb3BEb3duKGVsZW1lbnQsIG9wZW4pIHtcbiAgICBjb25zdCBvdXRlckVsZW0gPSB0aGlzLl9nZXRPdXRlckVsZW1lbnQoZWxlbWVudClcbiAgICBpZiAoIW91dGVyRWxlbS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfRFJPUERPV04pKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGUgPSAoc2VsZWN0b3IsIGNsYXNzTmFtZSkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoc2VsZWN0b3IsIG91dGVyRWxlbSlcbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUsIG9wZW4pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSwgQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgdG9nZ2xlKFNFTEVDVE9SX0RST1BET1dOX01FTlUsIENMQVNTX05BTUVfU0hPVylcbiAgICBvdXRlckVsZW0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgb3BlbilcbiAgfVxuXG4gIF9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhlbGVtZW50LCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgaWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGUpKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIF9lbGVtSXNBY3RpdmUoZWxlbSkge1xuICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0FDVElWRSlcbiAgfVxuXG4gIC8vIFRyeSB0byBnZXQgdGhlIGlubmVyIGVsZW1lbnQgKHVzdWFsbHkgdGhlIC5uYXYtbGluaylcbiAgX2dldElubmVyRWxlbWVudChlbGVtKSB7XG4gICAgcmV0dXJuIGVsZW0ubWF0Y2hlcyhTRUxFQ1RPUl9JTk5FUl9FTEVNKSA/IGVsZW0gOiBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0lOTkVSX0VMRU0sIGVsZW0pXG4gIH1cblxuICAvLyBUcnkgdG8gZ2V0IHRoZSBvdXRlciBlbGVtZW50ICh1c3VhbGx5IHRoZSAubmF2LWl0ZW0pXG4gIF9nZXRPdXRlckVsZW1lbnQoZWxlbSkge1xuICAgIHJldHVybiBlbGVtLmNsb3Nlc3QoU0VMRUNUT1JfT1VURVIpIHx8IGVsZW1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcykuc2hvdygpXG59KVxuXG4vKipcbiAqIEluaXRpYWxpemUgb24gZm9jdXNcbiAqL1xuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRV9BQ1RJVkUpKSB7XG4gICAgVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudClcbiAgfVxufSlcbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFRhYilcblxuZXhwb3J0IGRlZmF1bHQgVGFiXG4iLCAie1wiYmFja190b190b3BcIjp7XCJhbmltYXRpb25cIjp0cnVlLFwiaWNvbl9oZWlnaHRcIjpcIjJlbVwiLFwiaWNvbl9uYW1lXCI6XCJhcnJvdy11cC1jaXJjbGVcIixcImljb25fd2lkdGhcIjpcIjJlbVwiLFwicG9zaXRpb25fYm90dG9tXCI6XCIxcmVtXCIsXCJwb3NpdGlvbl9lbmRcIjpcIjFyZW1cIn0sXCJibG9ja3F1b3Rlc1wiOntcImJvcmRlcl9zdHlsZVwiOlwicHJpbWFyeVwiLFwiYm9yZGVyX3dpZHRoXCI6NCxcImJvcmRlcmVkXCI6dHJ1ZX0sXCJibG9nXCI6e1wiYXJjaGl2ZXNcIjp7XCJwYWdpbmF0ZVwiOjMwfSxcImZ1bGxfd2lkdGhcIjpmYWxzZSxcImhvbWVcIjp7XCJmZWF0dXJlZF9wb3N0c1wiOjMsXCJwaW5uZWRfcG9zdHNfcG9zaXRpb25cIjpcIlwifSxcImxpc3RfY29sc19sZ1wiOjMsXCJsaXN0X2NvbHNfbWRcIjoyLFwibGlzdF9waW5uZWRfcG9zdHNcIjoxLFwibGlzdF9zdHlsZVwiOlwiXCIsXCJwYWdpbmF0ZVwiOjEyLFwicG9zdF9kYXRlX2Zvcm1hdFwiOlwiOmRhdGVfbG9uZ1wiLFwicG9zdF9yZWFkX21vcmVcIjpmYWxzZSxcInBvc3RfdGh1bWJuYWlsXCI6dHJ1ZSxcInBvc3RfdGh1bWJuYWlsX2RlZmF1bHRcIjpcImltYWdlcy90aHVtYm5haWwucG5nXCIsXCJwb3N0X3RodW1ibmFpbF9oZWlnaHRcIjpcIjE2MHB4XCIsXCJwb3N0X3RodW1ibmFpbF9wbGFjZWhvbGRlclwiOlwiXCIsXCJwb3N0X3RodW1ibmFpbF9wb3NpdGlvblwiOlwidG9wXCIsXCJwb3N0X3RodW1ibmFpbF9yZXNpemVfaGVpZ2h0XCI6MzYwLFwicmVsYXRlZF9wb3N0c1wiOntcImxpc3Rfc3R5bGVcIjpcInNsaWRlXCJ9LFwic2lkZWJhclwiOntcIm1heF93aWR0aFwiOlwiMzIwcHhcIixcInBvc2l0aW9uXCI6XCJlbmRcIixcInBvc3RzXCI6e1wicmVjZW50X3Bvc3RzXCI6MTB9LFwic3RpY2t5XCI6ZmFsc2UsXCJ0YXhvbm9taWVzXCI6e1wiYXV0aG9yc1wiOntcImRpc2FibGVcIjp0cnVlfSxcInNlcGFyYXRlXCI6dHJ1ZX0sXCJ3aWR0aFwiOjAuMzV9LFwidGVybXNcIjp7XCJwYWdpbmF0ZVwiOjEyfSxcInRvY1wiOntcInBvc2l0aW9uXCI6XCJlbmRcIn19LFwiYnJlYWRjcnVtYlwiOntcImRpc2FibGVkXCI6ZmFsc2V9LFwiY29sb3JcIjpcImRhcmtcIixcImNvbnRlbnRfcGFuZWxcIjp7XCJib3R0b21cIjpcIjIwcHhcIixcImNvbW1lbnRzXCI6dHJ1ZX0sXCJjc3NfYnVuZGxlX25hbWVcIjpcImhiXCIsXCJkb2NzXCI6e1wibWV0YVwiOntcImF1dGhvcnNcIjpmYWxzZX19LFwiZm9vdGVyXCI6e1wic29jaWFsc1wiOntcIl9jb2xvclwiOnRydWUsXCJnaXRodWJcIjpcIlRldHJhVGhldGFcIixcInJzc1wiOnRydWV9fSxcImZ1bGxfd2lkdGhcIjpmYWxzZSxcImhlYWRlclwiOntcImJyZWFrcG9pbnRcIjpcImxnXCIsXCJmdWxsX3dpZHRoXCI6dHJ1ZSxcImxvZ29fYmdcIjpcIiMwMDAwMDAwMFwiLFwic3RpY2t5XCI6dHJ1ZX0sXCJoZWFkaW5nX3NpZ25cIjp7XCJjb250YWluZXJzXCI6e1wiLmhiLWJsb2ctcG9zdC1jb250ZW50XCI6e319LFwic3ltYm9sXCI6XCJcdTAwQjZcIn0sXCJqc19idW5kbGVfbmFtZVwiOlwiaGJcIixcImxvZ29cIjpcIi9pbWFnZXMvbG9nby5wbmdcIixcIm1vZHVsZXNcIjp7XCJjb2RlLWJsb2NrLXBhbmVsXCI6e1wianNfcmVzb3VyY2VzXCI6W3tcInBhcnRpYWxcIjpcImNvZGUtYmxvY2stcGFuZWwvYXNzZXRzL2pzLXJlc291cmNlXCJ9XX19LFwicGFnaW5hdGlvblwiOntcImFsaWdubWVudFwiOlwiY2VudGVyXCIsXCJzaWJsaW5nc1wiOjMsXCJzaXplXCI6XCJcIn0sXCJwcm9ncmVzc19iYXJcIjp7XCJoZWlnaHRcIjpcIjRweFwiLFwiaW5pdGlhbF93aWR0aFwiOjIwLFwiaW50ZXJ2YWxcIjo1MCxcInRpbWVcIjoyfSxcInNhc3NfdHJhbnNwaWxlclwiOlwiZGFydHNhc3NcIixcInN0eWxlc1wiOntcImhiX3RvcF9vZmZzZXRcIjpcIjI0cHhcIixcInByZWZpeFwiOlwiaGItXCJ9LFwidGFibGVzXCI6e1wiYWxpZ25cIjpcIm1pZGRsZVwiLFwiYm9yZGVyX3N0eWxlXCI6XCJcIixcImJvcmRlcmVkXCI6dHJ1ZSxcImdyb3VwX2RpdmlkZXJcIjpmYWxzZSxcImhvdmVyXCI6dHJ1ZSxcInN0cmlwZWRcIjp0cnVlLFwic3RyaXBlZF9jb2x1bW5zXCI6ZmFsc2UsXCJzdHlsZVwiOlwiXCIsXCJ0aGVhZF9zdHlsZVwiOlwiXCJ9LFwidGVybXNcIjp7XCJsaXN0X3N0eWxlXCI6XCJcIixcInBhZ2luYXRlXCI6MTIsXCJwcm9maWxlXCI6ZmFsc2UsXCJwcm9maWxlX21ldHJpY3NcIjp0cnVlfSxcInRvY19zY3JvbGxzcHlcIjp7XCJib3JkZXJcIjp0cnVlfX0iLCAiaW1wb3J0ICogYXMgcGFyYW1zIGZyb20gXCJAcGFyYW1zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzIHtcbiAgICBwcml2YXRlIGVsZTogSFRNTEVsZW1lbnRcblxuICAgIHByaXZhdGUgYmFyOiBIVE1MRWxlbWVudFxuXG4gICAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyXG5cbiAgICBwcml2YXRlIGludGVydmFsOiBudW1iZXIgXG5cbiAgICBwcml2YXRlIHN0ZXA6IG51bWJlclxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSBwYXJhbXM/LnByb2dyZXNzX2Jhcj8ud2lkdGggPz8gMjBcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHBhcmFtcz8ucHJvZ3Jlc3NfYmFyPy5pbnRlcnZhbCA/PyA1MFxuICAgICAgICBjb25zdCB0aW1lID0gcGFyYW1zPy5wcm9ncmVzc19iYXI/LnRpbWUgPz8gMiBcbiAgICAgICAgdGhpcy5zdGVwID0gKDEwMCAtIHRoaXMud2lkdGgpIC8gdGltZSAvIDEwMDAgKiB0aGlzLmludGVydmFsXG4gICAgICAgIHRoaXMuaW5pdEJhcigpXG4gICAgICAgIHRoaXMuaW5pdFByb2dyZXNzKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRQcm9ncmVzcygpIHtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcm9ncmVzcy5jbGFzc05hbWUgPSAnaGItcHJvZ3Jlc3MgcHJvZ3Jlc3MgcG9zaXRpb24tZml4ZWQgdG9wLTAgdy0xMDAgcm91bmRlZC0wIGQtbm9uZSdcbiAgICAgICAgcHJvZ3Jlc3Mucm9sZSA9ICdwcm9ncmVzc2JhcidcbiAgICAgICAgcHJvZ3Jlc3MuYXBwZW5kQ2hpbGQodGhpcy5iYXIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocHJvZ3Jlc3MpXG4gICAgICAgIHRoaXMuZWxlID0gcHJvZ3Jlc3NcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRCYXIoKSB7XG4gICAgICAgIGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGJhci5jbGFzc05hbWUgPSAncHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci1zdHJpcGVkIHByb2dyZXNzLWJhci1hbmltYXRlZCdcbiAgICAgICAgYmFyLnN0eWxlLndpZHRoID0gdGhpcy53aWR0aCArICclJ1xuICAgICAgICB0aGlzLmJhciA9IGJhclxuICAgIH1cblxuICAgIHByaXZhdGUgdGltZXIgPSAwXG5cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLmVsZS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKVxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy53aWR0aCArPSB0aGlzLnN0ZXBcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLndpZHRoID0gYCR7dGhpcy53aWR0aH0lYFxuICAgICAgICB9LCB0aGlzLmludGVydmFsKVxuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuZWxlLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcbiAgICB9XG59XG4iLCAiaW1wb3J0IFByb2dyZXNzIGZyb20gXCIuL3Byb2dyZXNzXCI7XG5cbigoKSA9PiB7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBuZXcgUHJvZ3Jlc3MoKVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2VoaWRlJywgKCkgPT4ge1xuICAgICAgICBwcm9ncmVzcy5oaWRlKClcbiAgICB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsICgpID0+IHtcbiAgICAgICAgcHJvZ3Jlc3Muc2hvdygpXG4gICAgfSlcbn0pKClcbiIsICJ7XCJiYWNrX3RvX3RvcFwiOntcImFuaW1hdGlvblwiOnRydWUsXCJpY29uX2hlaWdodFwiOlwiMmVtXCIsXCJpY29uX25hbWVcIjpcImFycm93LXVwLWNpcmNsZVwiLFwiaWNvbl93aWR0aFwiOlwiMmVtXCIsXCJwb3NpdGlvbl9ib3R0b21cIjpcIjFyZW1cIixcInBvc2l0aW9uX2VuZFwiOlwiMXJlbVwifSxcImJsb2NrcXVvdGVzXCI6e1wiYm9yZGVyX3N0eWxlXCI6XCJwcmltYXJ5XCIsXCJib3JkZXJfd2lkdGhcIjo0LFwiYm9yZGVyZWRcIjp0cnVlfSxcImJsb2dcIjp7XCJhcmNoaXZlc1wiOntcInBhZ2luYXRlXCI6MzB9LFwiZnVsbF93aWR0aFwiOmZhbHNlLFwiaG9tZVwiOntcImZlYXR1cmVkX3Bvc3RzXCI6MyxcInBpbm5lZF9wb3N0c19wb3NpdGlvblwiOlwiXCJ9LFwibGlzdF9jb2xzX2xnXCI6MyxcImxpc3RfY29sc19tZFwiOjIsXCJsaXN0X3Bpbm5lZF9wb3N0c1wiOjEsXCJsaXN0X3N0eWxlXCI6XCJcIixcInBhZ2luYXRlXCI6MTIsXCJwb3N0X2RhdGVfZm9ybWF0XCI6XCI6ZGF0ZV9sb25nXCIsXCJwb3N0X3JlYWRfbW9yZVwiOmZhbHNlLFwicG9zdF90aHVtYm5haWxcIjp0cnVlLFwicG9zdF90aHVtYm5haWxfZGVmYXVsdFwiOlwiaW1hZ2VzL3RodW1ibmFpbC5wbmdcIixcInBvc3RfdGh1bWJuYWlsX2hlaWdodFwiOlwiMTYwcHhcIixcInBvc3RfdGh1bWJuYWlsX3BsYWNlaG9sZGVyXCI6XCJcIixcInBvc3RfdGh1bWJuYWlsX3Bvc2l0aW9uXCI6XCJ0b3BcIixcInBvc3RfdGh1bWJuYWlsX3Jlc2l6ZV9oZWlnaHRcIjozNjAsXCJyZWxhdGVkX3Bvc3RzXCI6e1wibGlzdF9zdHlsZVwiOlwic2xpZGVcIn0sXCJzaWRlYmFyXCI6e1wibWF4X3dpZHRoXCI6XCIzMjBweFwiLFwicG9zaXRpb25cIjpcImVuZFwiLFwicG9zdHNcIjp7XCJyZWNlbnRfcG9zdHNcIjoxMH0sXCJzdGlja3lcIjpmYWxzZSxcInRheG9ub21pZXNcIjp7XCJhdXRob3JzXCI6e1wiZGlzYWJsZVwiOnRydWV9LFwic2VwYXJhdGVcIjp0cnVlfSxcIndpZHRoXCI6MC4zNX0sXCJ0ZXJtc1wiOntcInBhZ2luYXRlXCI6MTJ9LFwidG9jXCI6e1wicG9zaXRpb25cIjpcImVuZFwifX0sXCJicmVhZGNydW1iXCI6e1wiZGlzYWJsZWRcIjpmYWxzZX0sXCJjb2xvclwiOlwiZGFya1wiLFwiY29udGVudF9wYW5lbFwiOntcImJvdHRvbVwiOlwiMjBweFwiLFwiY29tbWVudHNcIjp0cnVlfSxcImNzc19idW5kbGVfbmFtZVwiOlwiaGJcIixcImRvY3NcIjp7XCJtZXRhXCI6e1wiYXV0aG9yc1wiOmZhbHNlfX0sXCJmb290ZXJcIjp7XCJzb2NpYWxzXCI6e1wiX2NvbG9yXCI6dHJ1ZSxcImdpdGh1YlwiOlwiVGV0cmFUaGV0YVwiLFwicnNzXCI6dHJ1ZX19LFwiZnVsbF93aWR0aFwiOmZhbHNlLFwiaGVhZGVyXCI6e1wiYnJlYWtwb2ludFwiOlwibGdcIixcImZ1bGxfd2lkdGhcIjp0cnVlLFwibG9nb19iZ1wiOlwiIzAwMDAwMDAwXCIsXCJzdGlja3lcIjp0cnVlfSxcImhlYWRpbmdfc2lnblwiOntcImNvbnRhaW5lcnNcIjp7XCIuaGItYmxvZy1wb3N0LWNvbnRlbnRcIjp7fX0sXCJzeW1ib2xcIjpcIlx1MDBCNlwifSxcImpzX2J1bmRsZV9uYW1lXCI6XCJoYlwiLFwibG9nb1wiOlwiL2ltYWdlcy9sb2dvLnBuZ1wiLFwibW9kdWxlc1wiOntcImNvZGUtYmxvY2stcGFuZWxcIjp7XCJqc19yZXNvdXJjZXNcIjpbe1wicGFydGlhbFwiOlwiY29kZS1ibG9jay1wYW5lbC9hc3NldHMvanMtcmVzb3VyY2VcIn1dfX0sXCJwYWdpbmF0aW9uXCI6e1wiYWxpZ25tZW50XCI6XCJjZW50ZXJcIixcInNpYmxpbmdzXCI6MyxcInNpemVcIjpcIlwifSxcInByb2dyZXNzX2JhclwiOntcImhlaWdodFwiOlwiNHB4XCIsXCJpbml0aWFsX3dpZHRoXCI6MjAsXCJpbnRlcnZhbFwiOjUwLFwidGltZVwiOjJ9LFwic2Fzc190cmFuc3BpbGVyXCI6XCJkYXJ0c2Fzc1wiLFwic3R5bGVzXCI6e1wiaGJfdG9wX29mZnNldFwiOlwiMjRweFwiLFwicHJlZml4XCI6XCJoYi1cIn0sXCJ0YWJsZXNcIjp7XCJhbGlnblwiOlwibWlkZGxlXCIsXCJib3JkZXJfc3R5bGVcIjpcIlwiLFwiYm9yZGVyZWRcIjp0cnVlLFwiZ3JvdXBfZGl2aWRlclwiOmZhbHNlLFwiaG92ZXJcIjp0cnVlLFwic3RyaXBlZFwiOnRydWUsXCJzdHJpcGVkX2NvbHVtbnNcIjpmYWxzZSxcInN0eWxlXCI6XCJcIixcInRoZWFkX3N0eWxlXCI6XCJcIn0sXCJ0ZXJtc1wiOntcImxpc3Rfc3R5bGVcIjpcIlwiLFwicGFnaW5hdGVcIjoxMixcInByb2ZpbGVcIjpmYWxzZSxcInByb2ZpbGVfbWV0cmljc1wiOnRydWV9LFwidG9jX3Njcm9sbHNweVwiOntcImJvcmRlclwiOnRydWV9fSIsICJpbXBvcnQgKiBhcyBwYXJhbXMgZnJvbSBcIkBwYXJhbXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIHtcbiAgICBwcml2YXRlIGJ0bjogSFRNTEJ1dHRvbkVsZW1lbnRcblxuICAgIGNvbnN0cnVjdG9yKGljb246IHN0cmluZykge1xuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBidG4uY2xhc3NOYW1lID0gJ2hiLWJhY2stdG8tdG9wJ1xuICAgICAgICBidG4uYXJpYUxhYmVsID0gJ0JhY2sgdG8gdG9wJ1xuICAgICAgICBidG4uaW5uZXJIVE1MID0gdGhpcy50cmFuc2Zvcm1JY29uKGljb24pXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYnRuKVxuICAgICAgICB0aGlzLmJ0biA9IGJ0blxuXG4gICAgICAgIGxldCB5ID0gMFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID4gMjAgfHwgdG9wID4gMjApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5hbmltYXRpb24oKSAmJiB0b3AgPiB5KSB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbGluZycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB5ID0gdG9wXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvcygpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24oKSAmJiBidG4uY2xhc3NMaXN0LmFkZCgnc2Nyb2xsaW5nJylcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm1JY29uKGljb24pIHtcbiAgICAgICAgcmV0dXJuIGljb24ucmVwbGFjZSgvPHN2ZyguKik+KCgufFxcbikqKTxcXC9zdmc+LywgYDxzdmckMT5cbiAgPGRlZnM+PGNsaXBQYXRoIGlkPVwiaWNvblwiPiQyPC9jbGlwUGF0aD48L2RlZnM+XG4gIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGNsaXAtcGF0aD1cInVybCgjaWNvbilcIiAvPlxuICA8cmVjdCB4PVwiMFwiIHk9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGNsaXAtcGF0aD1cInVybCgjaWNvbilcIiAvPlxuPC9zdmc+YClcbiAgICB9XG5cbiAgICBwcml2YXRlIHBvc0ljb246IEhUTUxFbGVtZW50XG5cbiAgICB1cGRhdGVQb3MoKSB7XG4gICAgICAgIGlmICghdGhpcy5wb3NJY29uKSB7XG4gICAgICAgICAgICB0aGlzLnBvc0ljb24gPSB0aGlzLmJ0bi5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PigncmVjdCcpWzFdXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcG9zID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCAvIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0IC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodClcbiAgICAgICAgdGhpcy5wb3NJY29uLnNldEF0dHJpYnV0ZSgneScsICgxIC0gcG9zKSAqIDEwMCArICclJylcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLmJ0bi5jbGFzc0xpc3QuYWRkKCdzaG93JylcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLmJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcbiAgICB9XG5cbiAgICBhbmltYXRpb24oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBwYXJhbXM/LmJhY2tfdG9fdG9wPy5hbmltYXRpb24gIT09IGZhbHNlXG4gICAgfVxufVxuIiwgIi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL2pzL2luZGV4LnVtZC5qc1xuXG4gIGltcG9ydCAnL2hiL21vZHVsZXMvY3VzdG9tL2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICcvaGIvbW9kdWxlcy9oZWFkZXIvanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJy9oYi9tb2R1bGVzL2Nhcm91c2VsL2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICcvaGIvbW9kdWxlcy9zb2NpYWxzL2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICcvaGIvbW9kdWxlcy9jb250ZW50LXBhbmVsL2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICcvaGIvbW9kdWxlcy90b2Mtc2Nyb2xsc3B5L2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICcvaGIvbW9kdWxlcy9oZWFkaW5nLXNpZ24vanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJy9oYi9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9pbmRleC50cyc7XG4gIGltcG9ydCAnL2hiL21vZHVsZXMvcHJvZ3Jlc3MtYmFyL2pzL2luZGV4LnRzJztcblxuICBcbiAgXG5cbmltcG9ydCBCdXR0b24gZnJvbSAnaGIvbW9kdWxlcy9iYWNrLXRvLXRvcC9qcy9idXR0b24nO1xuXG4oKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ0biA9IG5ldyBCdXR0b24oYDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJiaSBiaS1hcnJvdy11cC1jaXJjbGUgaGktc3ZnLWlubGluZSBoYi1iYWNrLXRvLXRvcC1pY29uXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGhlaWdodD1cIjJlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB3aWR0aD1cIjJlbVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMSA4YTcgNyAwIDEgMCAxNCAwQTcgNyAwIDAgMCAxIDhtMTUgMEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwbS03LjUgMy41YS41LjUgMCAwIDEtMSAwVjUuNzA3TDUuMzU0IDcuODU0YS41LjUgMCAxIDEtLjcwOC0uNzA4bDMtM2EuNS41IDAgMCAxIC43MDggMGwzIDNhLjUuNSAwIDAgMS0uNzA4LjcwOEw4LjUgNS43MDd6XCIvPlxuPC9zdmc+YClcbiAgICB9KVxufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQU1BLGFBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUU1RCxlQUFTLFVBQVUsTUFBTTtBQUN2QixZQUFJLFFBQVEsTUFBTTtBQUNoQixpQkFBTztBQUFBLFFBQ1Q7QUFFQSxZQUFJLEtBQUssU0FBUyxNQUFNLG1CQUFtQjtBQUN6QyxjQUFJLGdCQUFnQixLQUFLO0FBQ3pCLGlCQUFPLGdCQUFnQixjQUFjLGVBQWUsU0FBUztBQUFBLFFBQy9EO0FBRUEsZUFBTztBQUFBLE1BQ1Q7QUFFQSxlQUFTQSxXQUFVLE1BQU07QUFDdkIsWUFBSSxhQUFhLFVBQVUsSUFBSSxFQUFFO0FBQ2pDLGVBQU8sZ0JBQWdCLGNBQWMsZ0JBQWdCO0FBQUEsTUFDdkQ7QUFFQSxlQUFTLGNBQWMsTUFBTTtBQUMzQixZQUFJLGFBQWEsVUFBVSxJ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ICAibmFtZXMiOiBbImlzRWxlbWVudCIsICJnZXRDb21wdXRlZFN0eWxlIiwgIndpbmRvdyIsICJtZXJnZWQiLCAiY2xpcHBpbmdQYXJlbnRzIiwgInJlZmVyZW5jZSIsICJwb3BwZXJPZmZzZXRzIiwgIm9mZnNldCIsICJkZWZhdWx0TW9kaWZpZXJzIiwgImNyZWF0ZVBvcHBlciIsICJwb3BwZXIiLCAib3B0aW9ucyIsICJzdGF0ZSIsICJlZmZlY3QiLCAibm9vcEZuIiwgIm5hbWUiLCAic3R5bGUiLCAicGxhY2VtZW50IiwgInBsYWNlbWVudHMiLCAiX2xvb3AiLCAiX2kiLCAiY2hlY2tzIiwgIm1pbiIsICJtYXgiLCAidG9QYWRkaW5nT2JqZWN0IiwgImNhbGxiYWNrIiwgImZuIiwgIk5BTUUiLCAiQ0xBU1NfTkFNRV9TSE9XIiwgIkRlZmF1bHQiLCAiRGVmYXVsdFR5cGUiLCAiTkFNRSIsICJEQVRBX0tFWSIsICJFVkVOVF9LRVkiLCAiVEFCX0tFWSIsICJEZWZhdWx0IiwgIkRlZmF1bHRUeXBlIiwgIk5BTUUiLCAiREFUQV9LRVkiLCAiRVZFTlRfS0VZIiwgIkRBVEFfQVBJX0tFWSIsICJFU0NBUEVfS0VZIiwgIkNMQVNTX05BTUVfU0hPVyIsICJFVkVOVF9TSE9XIiwgIkVWRU5UX1NIT1dOIiwgIkVWRU5UX0hJREUiLCAiRVZFTlRfSElEREVOIiwgIkVWRU5UX0NMSUNLX0RBVEFfQVBJIiwgIlNFTEVDVE9SX0RBVEFfVE9HR0xFIiwgIkRlZmF1bHQiLCAiRGVmYXVsdFR5cGUiLCAiaXNWaXNpYmxlIiwgImhlYWRlciIsICJOQU1FIiwgIkVWRU5UX0tFWSIsICJEZWZhdWx0IiwgIkRlZmF1bHRUeXBlIiwgIk5BTUUiLCAiREFUQV9LRVkiLCAiRVZFTlRfS0VZIiwgIkRBVEFfQVBJX0tFWSIsICJFVkVOVF9MT0FEX0RBVEFfQVBJIiwgIkVWRU5UX0NMSUNLX0RBVEFfQVBJIiwgIkRlZmF1bHQiLCAiRGVmYXVsdFR5cGUiLCAiTkFNRSIsICJEQVRBX0tFWSIsICJFVkVOVF9LRVkiLCAiREFUQV9BUElfS0VZIiwgIkVWRU5UX0xPQURfREFUQV9BUEkiLCAiQ0xBU1NfTkFNRV9BQ1RJVkUiLCAiRGVmYXVsdCIsICJEZWZhdWx0VHlwZSIsICJOQU1FIiwgIkRBVEFfS0VZIiwgIkVWRU5UX0tFWSIsICJEQVRBX0FQSV9LRVkiLCAiRVZFTlRfU0hPVyIsICJFVkVOVF9TSE9XTiIsICJFVkVOVF9ISURFIiwgIkVWRU5UX0hJRERFTiIsICJFVkVOVF9DTElDS19EQVRBX0FQSSIsICJDTEFTU19OQU1FX1NIT1ciLCAiU0VMRUNUT1JfREFUQV9UT0dHTEUiLCAiRGVmYXVsdCIsICJEZWZhdWx0VHlwZSIsICJOQU1FIiwgIkRBVEFfS0VZIiwgIkVWRU5UX0tFWSIsICJFVkVOVF9ISURFIiwgIkVWRU5UX0hJRERFTiIsICJFVkVOVF9TSE9XIiwgIkVWRU5UX1NIT1dOIiwgIkVWRU5UX0NMSUNLX0RBVEFfQVBJIiwgIkVWRU5UX0tFWURPV04iLCAiRVZFTlRfTE9BRF9EQVRBX0FQSSIsICJBUlJPV19MRUZUX0tFWSIsICJBUlJPV19SSUdIVF9LRVkiLCAiQVJST1dfVVBfS0VZIiwgIkFSUk9XX0RPV05fS0VZIiwgIkNMQVNTX05BTUVfQUNUSVZFIiwgIkNMQVNTX05BTUVfRkFERSIsICJDTEFTU19OQU1FX1NIT1ciLCAiU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFIiwgIlNFTEVDVE9SX0RBVEFfVE9HR0xFIiwgImVsZW1lbnQiLCAiYmFja190b190b3AiLCAiYmxvY2txdW90ZXMiLCAiYmxvZyIsICJicmVhZGNydW1iIiwgImNvbG9yIiwgImNvbnRlbnRfcGFuZWwiLCAiY3NzX2J1bmRsZV9uYW1lIiwgImRvY3MiLCAiZm9vdGVyIiwgImZ1bGxfd2lkdGgiLCAiaGVhZGVyIiwgImhlYWRpbmdfc2lnbiIsICJqc19idW5kbGVfbmFtZSIsICJsb2dvIiwgIm1vZHVsZXMiLCAicGFnaW5hdGlvbiIsICJwcm9ncmVzc19iYXIiLCAic2Fzc190cmFuc3BpbGVyIiwgInN0eWxlcyIsICJ0YWJsZXMiLCAidGVybXMiLCAidG9jX3Njcm9sbHNweSIsICJiYWNrX3RvX3RvcCIsICJibG9ja3F1b3RlcyIsICJibG9nIiwgImJyZWFkY3J1bWIiLCAiY29sb3IiLCAiY29udGVudF9wYW5lbCIsICJjc3NfYnVuZGxlX25hbWUiLCAiZG9jcyIsICJmb290ZXIiLCAiZnVsbF93aWR0aCIsICJoZWFkZXIiLCAiaGVhZGluZ19zaWduIiwgImpzX2J1bmRsZV9uYW1lIiwgImxvZ28iLCAibW9kdWxlcyIsICJwYWdpbmF0aW9uIiwgInByb2dyZXNzX2JhciIsICJzYXNzX3RyYW5zcGlsZXIiLCAic3R5bGVzIiwgInRhYmxlcyIsICJ0ZXJtcyIsICJ0b2Nfc2Nyb2xsc3B5Il0KfQo=

;
"use strict";
(() => {
  // ns-hugo-params:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\hugomods\code-block-panel@v0.9.0\assets\mods\code-block-panel\js\panel.ts
  var panel_default = { defaultLang: "ko", expand: false, i18n: { ko: { copied: { other: "\uBCF5\uC0AC \uC131\uACF5!" }, copy_failed: { other: "\uBCF5\uC0AC \uC2E4\uD328!" } } }, icons: { copy: '<svg aria-hidden="true" class="bi bi-clipboard hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>\n  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>\n</svg>', expand: '<svg aria-hidden="true" class="bi bi-chevron-expand hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>\n</svg>', ln: '<svg aria-hidden="true" class="bi bi-list-ol hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"/>\n  <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635z"/>\n</svg>', wrap: '<svg aria-hidden="true" class="bi bi-text-wrap hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h9a2.5 2.5 0 0 1 0 5h-1.293l.647.646a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 0 1 .708.708l-.647.646H11.5a1.5 1.5 0 0 0 0-3h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5"/>\n</svg>' }, line_nos: true, max_lines: 10, wrap: false };

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\hugomods\snackbar@v0.1.2\assets\mods\snackbar\js\index.ts
  var Snackbar = class {
    container;
    constructor() {
      this.container = document.createElement("div");
      this.container.className = "snackbars";
      document.body.appendChild(this.container);
    }
    add(text, duration = 2e3) {
      const msg = document.createElement("div");
      msg.className = "snackbar";
      msg.innerText = text;
      this.container.appendChild(msg);
      setTimeout(() => {
        msg.remove();
      }, duration);
    }
  };
  var snackbar = new Snackbar();
  var js_default = snackbar;

  // ns-hugo-params:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\hugomods\code-block-panel@v0.9.0\assets\mods\code-block-panel\js\i18n.ts
  var i18n_default = { defaultLang: "ko", expand: false, i18n: { ko: { copied: { other: "\uBCF5\uC0AC \uC131\uACF5!" }, copy_failed: { other: "\uBCF5\uC0AC \uC2E4\uD328!" } } }, icons: { copy: '<svg aria-hidden="true" class="bi bi-clipboard hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>\n  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>\n</svg>', expand: '<svg aria-hidden="true" class="bi bi-chevron-expand hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>\n</svg>', ln: '<svg aria-hidden="true" class="bi bi-list-ol hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"/>\n  <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635z"/>\n</svg>', wrap: '<svg aria-hidden="true" class="bi bi-text-wrap hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h9a2.5 2.5 0 0 1 0 5h-1.293l.647.646a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 0 1 .708.708l-.647.646H11.5a1.5 1.5 0 0 0 0-3h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5"/>\n</svg>' }, line_nos: true, max_lines: 10, wrap: false };

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\hugomods\i18n-js@v0.2.1\assets\mods\i18n\translator.ts
  var Translator = class {
    constructor(translations, fallback) {
      this.translations = translations;
      this.fallback = fallback;
    }
    lang = "";
    getLang() {
      if (this.lang === "") {
        this.lang = document.documentElement.getAttribute("lang") ?? this.fallback;
      }
      return this.lang;
    }
    getTranslations() {
      const lang = this.getLang();
      return this.translations[lang] ?? this.getFallbackTranslations();
    }
    getFallbackTranslations() {
      return this.translations[this.fallback];
    }
    getFallbackTranslation(key) {
      const translations = this.getFallbackTranslations();
      return translations[key] ?? "";
    }
    translate(key, ctx, fallback = "") {
      const translations = this.getTranslations();
      if (!translations) {
        return fallback === "" ? key : fallback;
      }
      const translation = translations[key] ?? this.getFallbackTranslation(key);
      if (!translation) {
        return fallback === "" ? key : fallback;
      }
      if (!ctx) {
        return translation.other;
      }
      let format = ctx.count === 1 ? translation.one : translation.other;
      for (let name in ctx) {
        format = format.replace(`{${name}}`, ctx[name]);
      }
      return format;
    }
  };

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\hugomods\code-block-panel@v0.9.0\assets\mods\code-block-panel\js\i18n.ts
  var i18n = new Translator(i18n_default.i18n, i18n_default.defaultLang);
  var i18n_default2 = i18n;

  // ns-hugo-imp:C:\Users\hi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\hugomods\code-block-panel@v0.9.0\assets\mods\code-block-panel\js\panel.ts
  var isTrue = (val) => {
    if (typeof val === "boolean") {
      return val;
    }
    return val !== "" && val !== "false" && val !== "0";
  };
  var Panel = class {
    constructor(code) {
      this.code = code;
    }
    highlight;
    pre;
    wrapper;
    ele;
    init() {
      const highlight = this.code.closest(".highlight");
      if (!isTrue(highlight?.getAttribute("data-line-nos") ?? panel_default.line_nos)) {
        this.code.classList.add("code-no-ln");
      }
      if (isTrue(highlight?.getAttribute("data-wrap") ?? panel_default.wrap)) {
        this.code.classList.add("code-wrap");
      }
      if (isTrue(highlight?.getAttribute("data-expand") ?? panel_default.expand)) {
        this.expand();
      }
      this.pre = this.code.parentElement;
      this.highlight = this.pre.parentElement;
      this.ele = document.createElement("div");
      this.ele.className = "code-block-panel";
      this.wrapper = document.createElement("div");
      this.wrapper.className = "code-block-panel-wrapper";
      this.wrapper.appendChild(this.ele);
      this.maxLines();
      this.title();
      this.lineNoButton();
      this.wrapButton();
      this.expandButton();
      this.copyButton();
      this.pre.appendChild(this.wrapper);
    }
    // Returns the lines of code block.
    lines() {
      return Array.from(this.code.querySelectorAll(":scope > span"));
    }
    maxHeight;
    maxLines() {
      const lines = this.lines();
      const maxLines = this.code.closest(".highlight")?.getAttribute("data-max-lines") ?? panel_default.max_lines;
      if (maxLines > 0 && lines.length > maxLines) {
        const offsetTop = lines[maxLines].offsetTop;
        if (offsetTop > 0) {
          this.pre.style.maxHeight = this.maxHeight = offsetTop + "px";
        }
      }
    }
    // Display the title
    title() {
      const title = this.highlight.getAttribute("title");
      if (title === null) {
        return;
      }
      this.code.setAttribute("title", title);
    }
    button(name, callback) {
      const btn = document.createElement("button");
      btn.className = "code-block-action code-block-action-" + name;
      btn.innerHTML = panel_default.icons[name];
      btn.addEventListener("click", () => {
        callback();
      });
      return btn;
    }
    copyButton() {
      const btn = this.button("copy", () => {
        this.copy();
      });
      this.ele.appendChild(btn);
    }
    copy() {
      const clone = this.code.cloneNode(true);
      clone.querySelectorAll(".ln, :scope > span > span:first-child").forEach((ln) => {
        ln.remove();
      });
      navigator.clipboard.writeText(clone.innerText).then(() => {
        js_default.add(i18n_default2.translate("copied", null, "Copied!"));
      }).catch((err) => {
        js_default.add(i18n_default2.translate("copy_failed", null, "Copy failed."));
        console.error(err);
      });
    }
    wrapButton() {
      const btn = this.button("wrap", () => {
        this.toggleClass("code-wrap");
      });
      this.ele.appendChild(btn);
    }
    toggleClass(className) {
      if (this.code.classList.contains(className)) {
        this.code.classList.remove(className);
        return;
      }
      this.code.classList.add(className);
    }
    lineNoButton() {
      const btn = this.button("ln", () => {
        this.toggleClass("code-no-ln");
      });
      this.ele.appendChild(btn);
    }
    expandButton() {
      const btn = this.button("expand", () => {
        this.expand();
      });
      this.ele.appendChild(btn);
    }
    expand() {
      if (!this.pre.style.maxHeight && !this.maxHeight) {
        return;
      }
      if (this.pre.style.maxHeight) {
        this.pre.style.maxHeight = "";
        return;
      }
      this.pre.style.maxHeight = this.maxHeight;
    }
  };

  // <stdin>
  (() => {
    "use strict";
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll("pre code").forEach((code) => {
        new Panel(code).init();
      });
    });
  })();
})();
