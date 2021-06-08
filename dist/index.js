/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar app = express();\r\nvar port = 3000;\r\nvar initalState = {\r\n    \"initalState\": {\r\n        \"mylist\": [],\r\n        \"trends\": [\r\n            {\r\n                \"id\": 2,\r\n                \"slug\": \"tvshow-2\",\r\n                \"title\": \"In the Dark\",\r\n                \"type\": \"Scripted\",\r\n                \"language\": \"English\",\r\n                \"year\": 2009,\r\n                \"contentRating\": \"16+\",\r\n                \"duration\": 164,\r\n                \"cover\": \"http://dummyimage.com/800x600.png/99118E/ffffff\",\r\n                \"description\": \"Vestibulum ac est lacinia nisi venenatis tristique\",\r\n                \"source\": \"https://mdstrm.com/video/58333e214ad055d208427db5.mp4\"\r\n            },\r\n            {\r\n                \"id\": 3,\r\n                \"slug\": \"tvshow-3\",\r\n                \"title\": \"Instinct\",\r\n                \"type\": \"Adventure\",\r\n                \"language\": \"English\",\r\n                \"year\": 2002,\r\n                \"contentRating\": \"16+\",\r\n                \"duration\": 137,\r\n                \"cover\": \"http://dummyimage.com/800x600.png/302140/ffffff\",\r\n                \"description\": \"Vestibulum ac est lacinia nisi venenatis tristique\",\r\n                \"source\": \"https://mdstrm.com/video/58333e214ad055d208427db5.mp4\"\r\n            },\r\n            {\r\n                \"id\": 4,\r\n                \"slug\": \"tvshow-4\",\r\n                \"title\": \"Grand Hotel\",\r\n                \"type\": \"Comedy\",\r\n                \"language\": \"English\",\r\n                \"year\": 2014,\r\n                \"contentRating\": \"16+\",\r\n                \"duration\": 163,\r\n                \"cover\": \"http://dummyimage.com/800x600.png/5472FF/ffffff\",\r\n                \"description\": \"Vestibulum ac est lacinia nisi venenatis tristique\",\r\n                \"source\": \"https://mdstrm.com/video/58333e214ad055d208427db5.mp4\"\r\n            },\r\n            {\r\n                \"id\": 5,\r\n                \"slug\": \"tvshow-5\",\r\n                \"title\": \"Stargate Atlantis\",\r\n                \"type\": \"Scripted\",\r\n                \"language\": \"English\",\r\n                \"year\": 2014,\r\n                \"contentRating\": \"16+\",\r\n                \"duration\": 194,\r\n                \"cover\": \"http://dummyimage.com/800x600.png/B36F20/ffffff\",\r\n                \"description\": \"Vestibulum ac est lacinia nisi venenatis tristique\",\r\n                \"source\": \"https://mdstrm.com/video/58333e214ad055d208427db5.mp4\"\r\n            },\r\n            {\r\n                \"id\": 6,\r\n                \"slug\": \"tvshow-6\",\r\n                \"title\": \"Final Space\",\r\n                \"type\": \"Scripted\",\r\n                \"language\": \"English\",\r\n                \"year\": 2017,\r\n                \"contentRating\": \"16+\",\r\n                \"duration\": 124,\r\n                \"cover\": \"http://dummyimage.com/800x600.png/CCC539/ffffff\",\r\n                \"description\": \"Vestibulum ac est lacinia nisi venenatis tristique\",\r\n                \"source\": \"https://mdstrm.com/video/58333e214ad055d208427db5.mp4\"\r\n            },\r\n            {\r\n                \"id\": 7,\r\n                \"slug\": \"tvshow-7\",\r\n                \"title\": \"The InBetween\",\r\n                \"type\": \"Drama\",\r\n                \"language\": \"English\",\r\n                \"year\": 2011,\r\n                \"contentRating\": \"16+\",\r\n                \"duration\": 179,\r\n                \"cover\": \"http://dummyimage.com/800x600.png/FF7A90/ffffff\",\r\n                \"description\": \"Vestibulum ac est lacinia nisi venenatis tristique\",\r\n                \"source\": \"https://mdstrm.com/video/58333e214ad055d208427db5.mp4\"\r\n            }\r\n        ],\r\n        \"originals\": [\r\n            {\r\n                \"id\": 8,\r\n                \"slug\": \"tvshow-8\",\r\n                \"title\": \"Stargate Atlantis\",\r\n                \"type\": \"Action\",\r\n                \"language\": \"English\",\r\n                \"year\": 2012,\r\n                \"contentRating\": \"16+\",\r\n                \"duration\": 148,\r\n                \"cover\": \"http://dummyimage.com/800x600.png/306880/ffffff\",\r\n                \"description\": \"Vestibulum ac est lacinia nisi venenatis tristique\",\r\n                \"source\": \"https://mdstrm.com/video/58333e214ad055d208427db5.mp4\"\r\n            },\r\n            {\r\n                \"id\": 9,\r\n                \"slug\": \"tvshow-9\",\r\n                \"title\": \"Alien Highway\",\r\n                \"type\": \"Action\",\r\n                \"language\": \"English\",\r\n                \"year\": 2019,\r\n                \"contentRating\": \"16+\",\r\n                \"duration\": 128,\r\n                \"cover\": \"http://dummyimage.com/800x600.png/604180/ffffff\",\r\n                \"description\": \"Vestibulum ac est lacinia nisi venenatis tristique\",\r\n                \"source\": \"https://mdstrm.com/video/58333e214ad055d208427db5.mp4\"\r\n            },\r\n            {\r\n                \"id\": 10,\r\n                \"slug\": \"tvshow-10\",\r\n                \"title\": \"Elementary\",\r\n                \"type\": \"Animation\",\r\n                \"language\": \"English\",\r\n                \"year\": 2011,\r\n                \"contentRating\": \"16+\",\r\n                \"duration\": 346,\r\n                \"cover\": \"http://dummyimage.com/800x600.png/FF91BA/ffffff\",\r\n                \"description\": \"Vestibulum ac est lacinia nisi venenatis tristique\",\r\n                \"source\": \"https://mdstrm.com/video/58333e214ad055d208427db5.mp4\"\r\n            },\r\n            {\r\n                \"id\": 11,\r\n                \"slug\": \"tvshow-11\",\r\n                \"title\": \"Strange Angel\",\r\n                \"type\": \"War\",\r\n                \"language\": \"English\",\r\n                \"year\": 2015,\r\n                \"contentRating\": \"16+\",\r\n                \"duration\": 226,\r\n                \"cover\": \"http://dummyimage.com/800x600.png/45807C/ffffff\",\r\n                \"description\": \"Vestibulum ac est lacinia nisi venenatis tristique\",\r\n                \"source\": \"https://mdstrm.com/video/58333e214ad055d208427db5.mp4\"\r\n            },\r\n            {\r\n                \"id\": 12,\r\n                \"slug\": \"tvshow-12\",\r\n                \"title\": \"Private Eyes\",\r\n                \"type\": \"Comedy\",\r\n                \"language\": \"English\",\r\n                \"year\": 2018,\r\n                \"contentRating\": \"16+\",\r\n                \"duration\": 190,\r\n                \"cover\": \"http://dummyimage.com/800x600.png/577380/ffffff\",\r\n                \"description\": \"Vestibulum ac est lacinia nisi venenatis tristique\",\r\n                \"source\": \"https://mdstrm.com/video/58333e214ad055d208427db5.mp4\"\r\n            },\r\n            {\r\n                \"id\": 13,\r\n                \"slug\": \"tvshow-13\",\r\n                \"title\": \"NCIS: Los Angeles\",\r\n                \"type\": \"Drama\",\r\n                \"language\": \"English\",\r\n                \"year\": 2010,\r\n                \"contentRating\": \"16+\",\r\n                \"duration\": 160,\r\n                \"cover\": \"http://dummyimage.com/800x600.png/5472FF/ffffff\",\r\n                \"description\": \"Vestibulum ac est lacinia nisi venenatis tristique\",\r\n                \"source\": \"https://mdstrm.com/video/58333e214ad055d208427db5.mp4\"\r\n            }\r\n        ]\r\n    }\r\n};\r\napp.get('/', function (req, res) {\r\n    res.send('Hello With typescript');\r\n});\r\napp.get('/api/v1', function (req, res) {\r\n    res.json(initalState);\r\n});\r\napp.listen(port, function () {\r\n    console.log(\"Server on port \" + port);\r\n});\r\n\n\n//# sourceURL=webpack://webpack-practico/./src/index.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;