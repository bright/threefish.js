(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("threefish", [], factory);
	else if(typeof exports === 'object')
		exports["threefish"] = factory();
	else
		root["threefish"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./threefish.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./threefish.ts":
/*!**********************!*\
  !*** ./threefish.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction add64(a, b) {\n    var l = a.l + b.l;\n    var h = a.h + b.h;\n    if (l > 0xffffffff) {\n        h = h + 1;\n    }\n    return { l: l >>> 0, h: h >>> 0 };\n}\nfunction sub64(a, b) {\n    var l = ((~b.l) >>> 0) + 1;\n    var h = (~b.h) >>> 0;\n    if (l > 0xffffffff) {\n        ++h;\n    }\n    return add64(a, { l: l >>> 0, h: h >>> 0 });\n}\nfunction xor64(a, b) {\n    return { l: (a.l ^ b.l) >>> 0, h: (a.h ^ b.h) >>> 0 };\n}\nfunction rotL64(x, n) {\n    n = n % 64;\n    if (n == 32) {\n        return { l: x.h, h: x.l };\n    }\n    else if (n == 0) {\n        return x;\n    }\n    else if (n > 32) {\n        n -= 32;\n        var tmp = x.l;\n        x.l = x.h;\n        x.h = tmp;\n    }\n    return { l: ((x.l << n) | (x.h >>> (32 - n))) >>> 0,\n        h: ((x.h << n) | (x.l >>> (32 - n))) >>> 0 };\n}\nfunction rotR64(x, n) {\n    n = n % 64;\n    if (n == 32) {\n        return { l: x.h, h: x.l };\n    }\n    else if (n == 0) {\n        return x;\n    }\n    else if (n >= 32) {\n        n -= 32;\n        var tmp = x.l;\n        x.l = x.h;\n        x.h = tmp;\n    }\n    return { l: ((x.l >>> n) | (x.h << (32 - n))) >>> 0,\n        h: ((x.h >>> n) | (x.l << (32 - n))) >>> 0 };\n}\nvar keyConst = { l: 0xA9FC1A22, h: 0x1BD11BDA };\n// Encrypt a block using 256 bit threefish. The result is stored in blockout\n// as well as returned, to avoid unnecessary allocations when encrypting many\n// blocks.\nfunction encrypt256(key, tweak, blockin, blockout) {\n    var k4 = xor64(keyConst, xor64(key[0], xor64(key[1], xor64(key[2], key[3]))));\n    var k = [key[0], key[1], key[2], key[3], k4];\n    var t = [tweak[0], tweak[1], xor64(tweak[0], tweak[1])];\n    var a = add64(blockin[0], key[0]), b = add64(add64(blockin[1], key[1]), tweak[0]), c = add64(add64(blockin[2], key[2]), tweak[1]), d = add64(blockin[3], key[3]);\n    for (var r = 2; r < 20; r += 2) {\n        a = add64(a, b);\n        b = xor64(rotL64(b, 14), a);\n        c = add64(c, d);\n        d = xor64(rotL64(d, 16), c);\n        a = add64(a, d);\n        d = xor64(rotL64(d, 52), a);\n        c = add64(c, b);\n        b = xor64(rotL64(b, 57), c);\n        a = add64(a, b);\n        b = xor64(rotL64(b, 23), a);\n        c = add64(c, d);\n        d = xor64(rotL64(d, 40), c);\n        a = add64(a, d);\n        d = xor64(rotL64(d, 5), a);\n        c = add64(c, b);\n        b = xor64(rotL64(b, 37), c);\n        a = add64(a, k[(r - 1) % 5]);\n        b = add64(add64(b, k[r % 5]), t[(r - 1) % 3]);\n        c = add64(add64(c, k[(r + 1) % 5]), t[r % 3]);\n        d = add64(add64(d, k[(r + 2) % 5]), { l: r - 1, h: 0 });\n        a = add64(a, b);\n        b = xor64(rotL64(b, 25), a);\n        c = add64(c, d);\n        d = xor64(rotL64(d, 33), c);\n        a = add64(a, d);\n        d = xor64(rotL64(d, 46), a);\n        c = add64(c, b);\n        b = xor64(rotL64(b, 12), c);\n        a = add64(a, b);\n        b = xor64(rotL64(b, 58), a);\n        c = add64(c, d);\n        d = xor64(rotL64(d, 22), c);\n        a = add64(a, d);\n        d = xor64(rotL64(d, 32), a);\n        c = add64(c, b);\n        b = xor64(rotL64(b, 32), c);\n        a = add64(a, k[r % 5]);\n        b = add64(add64(b, k[(r + 1) % 5]), t[r % 3]);\n        c = add64(add64(c, k[(r + 2) % 5]), t[(r + 1) % 3]);\n        d = add64(add64(d, k[(r + 3) % 5]), { l: r, h: 0 });\n    }\n    blockout[0] = a;\n    blockout[1] = b;\n    blockout[2] = c;\n    blockout[3] = d;\n    return blockout;\n}\nfunction decrypt256(key, tweak, blockin, blockout) {\n    var k4 = xor64(keyConst, xor64(key[0], xor64(key[1], xor64(key[2], key[3]))));\n    var k = [key[0], key[1], key[2], key[3], k4];\n    var t = [tweak[0], tweak[1], xor64(tweak[0], tweak[1])];\n    var a = blockin[0], b = blockin[1], c = blockin[2], d = blockin[3];\n    for (var r = 18; r >= 2; r -= 2) {\n        a = sub64(a, k[r % 5]);\n        b = sub64(b, add64(k[(r + 1) % 5], t[r % 3]));\n        c = sub64(c, add64(k[(r + 2) % 5], t[(r + 1) % 3]));\n        d = sub64(d, add64(k[(r + 3) % 5], { l: r, h: 0 }));\n        d = rotR64(xor64(d, a), 32);\n        a = sub64(a, d);\n        b = rotR64(xor64(b, c), 32);\n        c = sub64(c, b);\n        b = rotR64(xor64(b, a), 58);\n        a = sub64(a, b);\n        d = rotR64(xor64(d, c), 22);\n        c = sub64(c, d);\n        d = rotR64(xor64(d, a), 46);\n        a = sub64(a, d);\n        b = rotR64(xor64(b, c), 12);\n        c = sub64(c, b);\n        b = rotR64(xor64(b, a), 25);\n        a = sub64(a, b);\n        d = rotR64(xor64(d, c), 33);\n        c = sub64(c, d);\n        a = sub64(a, k[(r - 1) % 5]);\n        b = sub64(b, add64(k[r % 5], t[(r - 1) % 3]));\n        c = sub64(c, add64(k[(r + 1) % 5], t[r % 3]));\n        d = sub64(d, add64(k[(r + 2) % 5], { l: r - 1, h: 0 }));\n        d = rotR64(xor64(d, a), 5);\n        a = sub64(a, d);\n        b = rotR64(xor64(b, c), 37);\n        c = sub64(c, b);\n        b = rotR64(xor64(b, a), 23);\n        a = sub64(a, b);\n        d = rotR64(xor64(d, c), 40);\n        c = sub64(c, d);\n        d = rotR64(xor64(d, a), 52);\n        a = sub64(a, d);\n        b = rotR64(xor64(b, c), 57);\n        c = sub64(c, b);\n        b = rotR64(xor64(b, a), 14);\n        a = sub64(a, b);\n        d = rotR64(xor64(d, c), 16);\n        c = sub64(c, d);\n    }\n    blockout[0] = sub64(a, k[0]);\n    blockout[1] = sub64(b, add64(k[1], t[0]));\n    blockout[2] = sub64(c, add64(k[2], t[1]));\n    blockout[3] = sub64(d, k[3]);\n    return blockout;\n}\nvar _skeincfg256 = [{ l: 0x33414853, h: 1 }, { l: 256, h: 0 }, { l: 0, h: 0 }, { l: 0, h: 0 }];\nvar _zero256 = [{ l: 0, h: 0 }, { l: 0, h: 0 }, { l: 0, h: 0 }, { l: 0, h: 0 }];\nfunction newTweak(type) {\n    return setFirst(true, setType(type, [{ l: 0, h: 0 }, { l: 0, h: 0 }]));\n}\n// Relevant types for \"normal\" Skein\nvar _t_key = 0;\nvar _t_config = 4;\nvar _t_message = 48;\nvar _t_output = 63;\nfunction setType(type, tweak) {\n    tweak[1].h = ((tweak[1].h & ~(63 << 24)) | (type << 24)) >>> 0;\n    return tweak;\n}\nfunction setFirst(first, tweak) {\n    if (first) {\n        tweak[1].h = (tweak[1].h | (1 << 30)) >>> 0;\n    }\n    else {\n        tweak[1].h = (tweak[1].h & (~(1 << 30))) >>> 0;\n    }\n    return tweak;\n}\nfunction setLast(first, tweak) {\n    if (first) {\n        tweak[1].h = (tweak[1].h | (1 << 31)) >>> 0;\n    }\n    else {\n        tweak[1].h = (tweak[1].h & (~(1 << 31))) >>> 0;\n    }\n    return tweak;\n}\nfunction addBytes(bytes, tweak) {\n    tweak[0] = add64(tweak[0], { l: bytes, h: 0 });\n    return tweak;\n}\nfunction init256(key) {\n    var t = addBytes(32, cfgTweak());\n    return xor(encrypt256(key, t, _skeincfg256, [0, 0, 0, 0]), _skeincfg256);\n}\nvar _zeroPadding = '\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0';\nfunction hash256(key, msg) {\n    var tweak = newTweak(_t_message);\n    var out = [0, 0, 0, 0];\n    var lastlen = msg.length % 32 ? msg.length % 32 : (msg.length ? 32 : 0);\n    var lastblock = Math.ceil(msg.length / 32) - 1;\n    if (lastblock < 0) {\n        lastblock = 0;\n    }\n    msg = msg + _zeroPadding;\n    key = init256(key);\n    for (var i = 0; i <= lastblock; ++i) {\n        var block = toBlock256(msg.substring(0, 32));\n        msg = msg.substring(32);\n        if (i == lastblock) {\n            setLast(true, tweak);\n            addBytes(lastlen, tweak);\n        }\n        else {\n            addBytes(32, tweak);\n        }\n        encrypt256(key, tweak, block, out);\n        key = xor(out, block);\n        setFirst(false, tweak);\n    }\n    var finalTweak = addBytes(8, setLast(true, newTweak(_t_output)));\n    return encrypt256(key, finalTweak, _zero256, out);\n}\nfunction toBlock256(str) {\n    var block = [0, 0, 0, 0];\n    for (var i = 0; i < 32; i += 8) {\n        var l = ((str.charCodeAt(i) & 255)\n            | ((str.charCodeAt(i + 1) & 255) << 8)\n            | ((str.charCodeAt(i + 2) & 255) << 16)\n            | ((str.charCodeAt(i + 3) & 255) << 24)) >>> 0;\n        var h = ((str.charCodeAt(i + 4) & 255)\n            | ((str.charCodeAt(i + 5) & 255) << 8)\n            | ((str.charCodeAt(i + 6) & 255) << 16)\n            | ((str.charCodeAt(i + 7) & 255) << 24)) >>> 0;\n        block[i / 8] = { l: l, h: h };\n    }\n    return block;\n}\nfunction cfgTweak() { return setLast(true, newTweak(_t_config)); }\n;\n// XOR an array of 64 bit words.\nfunction xor(a, b) {\n    var c = [];\n    for (var i in a) {\n        c[i] = xor64(a[i], b[i]);\n    }\n    return c;\n}\nvar _hex = '0123456789abcdef';\n// Shows a block as a list of 64 bit words.\nfunction showWords(ws) {\n    var s = '';\n    for (var i in ws) {\n        var word = ws[i].h;\n        for (var j = 0; j < 4; ++j) {\n            var w = word >>> (24 - j * 8);\n            s += _hex[(w >>> 4) & 0x0f] + _hex[w & 0x0f];\n        }\n        var word = ws[i].l;\n        s += \".\";\n        for (var j = 0; j < 4; ++j) {\n            var w = word >>> (24 - j * 8);\n            s += _hex[(w >>> 4) & 0x0f] + _hex[w & 0x0f];\n        }\n        s += \" \";\n    }\n    return s;\n}\n// Shows a block as a string of bytes.\nfunction showHex(ws) {\n    var s = '';\n    for (var i in ws) {\n        var w = ws[i].l;\n        for (var j = 0; j < 4; ++j) {\n            s += _hex[(w >>> 4) & 0x0f] + _hex[w & 0x0f];\n            w = w >>> 8;\n        }\n        var w = ws[i].h;\n        for (var j = 0; j < 4; ++j) {\n            s += _hex[(w >>> 4) & 0x0f] + _hex[w & 0x0f];\n            w = w >>> 8;\n        }\n    }\n    return s;\n}\nfunction toBytes(words) {\n    var bytes = [];\n    for (var i = 0; i < words.length; ++i) {\n        var b = words[i];\n        bytes.push(String.fromCharCode(b.l & 0xff));\n        bytes.push(String.fromCharCode((b.l >>> 8) & 0xff));\n        bytes.push(String.fromCharCode((b.l >>> 16) & 0xff));\n        bytes.push(String.fromCharCode((b.l >>> 24) & 0xff));\n        bytes.push(String.fromCharCode(b.h & 0xff));\n        bytes.push(String.fromCharCode((b.h >>> 8) & 0xff));\n        bytes.push(String.fromCharCode((b.h >>> 16) & 0xff));\n        bytes.push(String.fromCharCode((b.h >>> 24) & 0xff));\n    }\n    return bytes.join('');\n}\n// Calculate the 256 bit Skein digest of a given message.\n// The message is assumed to be a string where each character represents\n// a single byte.\nfunction skein256(message) {\n    return toBytes(hash256(_zero256, message));\n}\nexports.skein256 = skein256;\n// Calculate the 256 bit Skein MAC of a given message.\n// The key and message are both assumed to be strings where each character\n// represents a single byte. The key must be 256 bits long.\nfunction skeinMAC256(key, message) {\n    key = toBlock256(key);\n    var t = addBytes(32, setLast(true, newTweak(_t_key)));\n    var enc = encrypt256(_zero256, t, key, [0, 0, 0, 0]);\n    return toBytes(hash256(xor(key, enc), message));\n}\n// Encrypt a message using 256 bit Threefish in CBC mode. The key, message and\n// IV are assumed to be strings of bytes whose length is a multiple of 32.\nfunction cbc(key, message, iv) {\n    var block;\n    var out = [];\n    var t = [{ l: 0, h: 0 }, { l: 0, h: 0 }];\n    iv = toBlock256(iv);\n    key = toBlock256(key);\n    while (message.length) {\n        block = toBlock256(message.substring(0, 32));\n        message = message.substring(32);\n        encrypt256(key, t, xor(block, iv), iv);\n        out.push(iv[0]);\n        out.push(iv[1]);\n        out.push(iv[2]);\n        out.push(iv[3]);\n    }\n    return toBytes(out);\n}\n// Encrypt a message using 256 bit Threefish in CBC mode. The key, message and\n// IV are assumed to be strings of bytes whose length is a multiple of 32.\nfunction uncbc(key, message, iv) {\n    var block, tmp = [0, 0, 0, 0];\n    var out = [];\n    var t = [{ l: 0, h: 0 }, { l: 0, h: 0 }];\n    iv = toBlock256(iv);\n    key = toBlock256(key);\n    while (message.length) {\n        block = toBlock256(message.substring(0, 32));\n        message = message.substring(32);\n        decrypt256(key, t, block, tmp);\n        tmp = xor(tmp, iv);\n        out.push(tmp[0]);\n        out.push(tmp[1]);\n        out.push(tmp[2]);\n        out.push(tmp[3]);\n        iv = block;\n    }\n    return toBytes(out);\n}\n// A Threefish 256 encryptor. The key is assumed to be a string consisting of\n// exactly 32 characters, none of which has a charcode >255.\nfunction Threefish256(key) {\n    var tweak = [{ l: 0, h: 0 }, { l: 0, h: 0 }];\n    // Encrypt a message using CBC with the given IV. Messages whose length is\n    // not a multiple of 32 bytes are zero padded.\n    this.encryptCBC = function (message, iv) {\n        var padlen = 32 - (message.length % 32);\n        if (padlen == 32) {\n            padlen = 0;\n        }\n        message = message + _zeroPadding.substring(0, padlen);\n        return cbc(key, message, iv);\n    };\n    // Decrypt a message using CBC with the given IV.\n    this.decryptCBC = function (message, iv) {\n        return uncbc(key, message, iv);\n    };\n    // CBC encrypt a message, then prepend the 256 bit SkeinMAC of the\n    // cryptotext.\n    this.encryptAuthenticated = function (message, iv) {\n        var cryptotext = this.encryptCBC(message, iv);\n        var macKey = encrypt256(_zero256, tweak, toBlock256(key), [0, 0, 0, 0]);\n        var mac = skeinMAC256(toBytes(macKey), cryptotext);\n        return mac + cryptotext;\n    };\n    // Check the signature of a message encrypted using encryptAuthenticated,\n    // then decrypt it. Returns null if signature verification fails.\n    this.decryptAuthenticated = function (message, iv) {\n        var cryptotext = message.substring(32);\n        var macKey = encrypt256(_zero256, tweak, toBlock256(key), [0, 0, 0, 0]);\n        var mac = skeinMAC256(toBytes(macKey), cryptotext);\n        if (mac != message.substring(0, 32)) {\n            return null;\n        }\n        return this.decryptCBC(cryptotext, iv);\n    };\n}\n\n\n//# sourceURL=webpack://threefish/./threefish.ts?");

/***/ })

/******/ });
});