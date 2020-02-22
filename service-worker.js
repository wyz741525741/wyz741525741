/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["F:/WuYongZhi/public/about/index.html","23430355c7dbe0198bc2fe360479bd08"],["F:/WuYongZhi/public/archives/2019/01/index.html","ded0bd13a2301dacbd85f1d754ee1160"],["F:/WuYongZhi/public/archives/2019/02/index.html","5579485aa889edc4a4fe428f713bb8a2"],["F:/WuYongZhi/public/archives/2019/03/index.html","eda7bf8e023d498e560e182c7f9def11"],["F:/WuYongZhi/public/archives/2019/04/index.html","8947607d28e12497c77af2889a74ce51"],["F:/WuYongZhi/public/archives/2019/05/index.html","9e90a826d708831811438851ba99fc1d"],["F:/WuYongZhi/public/archives/2019/06/index.html","88748551646fc5cb2b5ceb70222805aa"],["F:/WuYongZhi/public/archives/2019/07/index.html","a7712ac7ad4e733bd6613253374ab654"],["F:/WuYongZhi/public/archives/2019/08/index.html","739e41099d99e33d1f8a0a07e6e549de"],["F:/WuYongZhi/public/archives/2019/09/index.html","bd76a70b28e0bbfcfe7bd115f09b848d"],["F:/WuYongZhi/public/archives/2019/10/index.html","f4a32ec4d9a26bed144fb54ce442599a"],["F:/WuYongZhi/public/archives/2019/index.html","5d686becce55dc5458a125fba7cef58f"],["F:/WuYongZhi/public/archives/2019/page/2/index.html","2891cdc431a749ca126d7532bc8062b6"],["F:/WuYongZhi/public/archives/2019/page/3/index.html","2931c90c14b57294b4b4017fc402c45a"],["F:/WuYongZhi/public/archives/2020/02/index.html","6a99a520c99c97008134c5ac3e834d6c"],["F:/WuYongZhi/public/archives/2020/index.html","7ada1824ac2ae79dbbf12e4d7978cfdb"],["F:/WuYongZhi/public/archives/index.html","b06b64d1e618f2d5f5faba19d46aa46b"],["F:/WuYongZhi/public/archives/page/2/index.html","c516f6b041b8ee74b01ac6bcf422a748"],["F:/WuYongZhi/public/archives/page/3/index.html","eecc583c00781f96b0a2de08b75e38f8"],["F:/WuYongZhi/public/categories/index.html","5405648c8aa6e008e53b1d7897cefa77"],["F:/WuYongZhi/public/categories/事故案例/index.html","c9a0179dcd4a8270d05d4fe18ae92777"],["F:/WuYongZhi/public/categories/工作日志/index.html","8a827635aea1a815345350da17663d8e"],["F:/WuYongZhi/public/categories/打发时间/index.html","4593962d85b603e41cea1b068b60f4ea"],["F:/WuYongZhi/public/categories/瞎记乱写/index.html","28d73f4b74210d239f45c56cc1caa474"],["F:/WuYongZhi/public/categories/轮机技术/index.html","6abf488cb04ecc2260aaeaf7a347912d"],["F:/WuYongZhi/public/categories/阅读识字/index.html","58a48f4806eb34fec1598a261fcf2fdd"],["F:/WuYongZhi/public/css/index.css","34dad4246088b8910453131af9371060"],["F:/WuYongZhi/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/WuYongZhi/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["F:/WuYongZhi/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["F:/WuYongZhi/public/img/alipay.jpg","b98449cfb93e5a6edb3287cf28bb6148"],["F:/WuYongZhi/public/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["F:/WuYongZhi/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["F:/WuYongZhi/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/WuYongZhi/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/WuYongZhi/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/WuYongZhi/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/WuYongZhi/public/img/wechatpay.jpg","d969edca8a8da7643ce77f2fd97da37d"],["F:/WuYongZhi/public/index.html","e941eb03d544b7586845265b0c69558d"],["F:/WuYongZhi/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["F:/WuYongZhi/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/WuYongZhi/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/WuYongZhi/public/link/index.html","ac94665a775f6f084535b8c3b41c6342"],["F:/WuYongZhi/public/movies/index.html","b3c9cb24289432ff60794d46437a9401"],["F:/WuYongZhi/public/page/2/index.html","fb6e12e5ddf3241a52c0779d91a3b438"],["F:/WuYongZhi/public/page/3/index.html","d137032cf265b4d3b39780126bd6ce01"],["F:/WuYongZhi/public/tags/1624-1公里/index.html","376ca8db508a78e8c1c7b564da37f582"],["F:/WuYongZhi/public/tags/GoldenDict/index.html","b9c265ed940dd3e0cf2c612b0282462d"],["F:/WuYongZhi/public/tags/HEXO/index.html","13cbea8381eb6295bec46736998315ca"],["F:/WuYongZhi/public/tags/MAN-B-W-7S70ME-C8-2/index.html","225ca101ef9d06d08c118da9acf74cf3"],["F:/WuYongZhi/public/tags/MaterialX/index.html","4f2f0d2d1ff6c7fcd569561178d2b0ae"],["F:/WuYongZhi/public/tags/Photoshop/index.html","f6453559bc242712a428561c454c48e9"],["F:/WuYongZhi/public/tags/Pjax/index.html","81671bf30651af7eaa7cc518e137a407"],["F:/WuYongZhi/public/tags/Valine/index.html","2b91fbaf8779e2bf1b106a44904e8fd4"],["F:/WuYongZhi/public/tags/index.html","588edac53a8098c35a67b8e56b454efa"],["F:/WuYongZhi/public/tags/win10/index.html","15060874c392c23e1cb7ad8c9ca373e1"],["F:/WuYongZhi/public/tags/上船/index.html","a8cccce7e320ea5ace99a8f4e179fd4e"],["F:/WuYongZhi/public/tags/上船必备/index.html","577eda2801314e4e5fdd393e0a44f8c2"],["F:/WuYongZhi/public/tags/两性/index.html","0b8e49ba17120a32eb6798d05f9b5c93"],["F:/WuYongZhi/public/tags/二氧化碳/index.html","2c003849ed57e3c73be657432125d12c"],["F:/WuYongZhi/public/tags/交接/index.html","1261bb1e9674f2a2c8b43bee227766c6"],["F:/WuYongZhi/public/tags/交接班/index.html","e96f3ef707b543c63322b810b0bbf880"],["F:/WuYongZhi/public/tags/优化/index.html","820331769d749684b97e944fb11950f2"],["F:/WuYongZhi/public/tags/修图/index.html","ac8840f8074574ec0708ab55b3799856"],["F:/WuYongZhi/public/tags/分油机/index.html","63f758cceaa94f1361797c44a579e859"],["F:/WuYongZhi/public/tags/博客/index.html","cacb535c194d7ad5ba8bd71ed3b72735"],["F:/WuYongZhi/public/tags/卸载/index.html","4dc8221e6a13f458c160b971fcdcf906"],["F:/WuYongZhi/public/tags/商店/index.html","5edd49cd586cd49555a7fea2f57e8f1e"],["F:/WuYongZhi/public/tags/喷射泵/index.html","912e0d896a0083a1b36daed3e2c5a25f"],["F:/WuYongZhi/public/tags/回顾/index.html","9b43629d7d28b97daeff75b4c6edac12"],["F:/WuYongZhi/public/tags/培训/index.html","cbfbd0b6350428d783430531714ba98d"],["F:/WuYongZhi/public/tags/增压器/index.html","7457e46b7dc6aede556e2492f8231c61"],["F:/WuYongZhi/public/tags/夫妻/index.html","d7a662193cd9e87b8242ddda87d62c0f"],["F:/WuYongZhi/public/tags/失眠/index.html","6aabe98d98daf4ff4aa20446ce675a59"],["F:/WuYongZhi/public/tags/女孩/index.html","ec425fa976cb806cf433a0d984ba0316"],["F:/WuYongZhi/public/tags/婚姻/index.html","39d2baf56e8335745a63fb51e03d1fee"],["F:/WuYongZhi/public/tags/工作/index.html","b39f22468f79dd6320990a9c40172864"],["F:/WuYongZhi/public/tags/应用/index.html","8c31153452044cc7858006798e8a3bae"],["F:/WuYongZhi/public/tags/必备软件/index.html","b9807d5d82fec6cab2f9f0c5fab75ff4"],["F:/WuYongZhi/public/tags/快捷键/index.html","bbabc8dd8d4be9985dedc0a426497097"],["F:/WuYongZhi/public/tags/恋爱/index.html","f17225f2d1a6067c9ef20a500b3be8ce"],["F:/WuYongZhi/public/tags/恢复/index.html","7f695e666b6cb5bae44825c0bfb3c838"],["F:/WuYongZhi/public/tags/情侣/index.html","62c521f5677b9635552cdc3ecfc780a7"],["F:/WuYongZhi/public/tags/情商/index.html","c889b68321f186b813f1884d479c52a4"],["F:/WuYongZhi/public/tags/扫舱/index.html","46e39ab38015c22d9d1df93a800935ed"],["F:/WuYongZhi/public/tags/排气阀/index.html","b8b9dde7b0820d16093540cef06209da"],["F:/WuYongZhi/public/tags/接船/index.html","96c78a0d4f9ec61c28e627d6c2a4ec9b"],["F:/WuYongZhi/public/tags/提职三管轮/index.html","12cba0278c99bb2abdca6ae8f02465f5"],["F:/WuYongZhi/public/tags/故障/index.html","8a5922ccfb4cb9d92c67efb5b7f1cd30"],["F:/WuYongZhi/public/tags/故障分析/index.html","2b5395ac8ba5c2ea53c14f2297eca642"],["F:/WuYongZhi/public/tags/新年/index.html","01037072e959be48dca1dc38a3403ba1"],["F:/WuYongZhi/public/tags/旋杯燃烧器/index.html","882495fc3897f4d44abb6a4890bfc456"],["F:/WuYongZhi/public/tags/机工提职/index.html","d7e4f5e8f53d4b6805ec0b93cb2f1d90"],["F:/WuYongZhi/public/tags/污油水/index.html","97062a743d0818bc4fd55c809e2b6907"],["F:/WuYongZhi/public/tags/油水分离/index.html","59987d8c9d03a726b18e37e8c20e2b48"],["F:/WuYongZhi/public/tags/泄漏事故/index.html","1c0d081b4cd81ddb93d1584abf0979e3"],["F:/WuYongZhi/public/tags/海员/index.html","368cc66df9ca80080d26cc7813cdee0c"],["F:/WuYongZhi/public/tags/点火失败/index.html","21d76d8194b49cd3f7ae019c04a4bebe"],["F:/WuYongZhi/public/tags/爱情/index.html","97da30a9e4fb8c95eaaac935dcf852d3"],["F:/WuYongZhi/public/tags/瓦锡兰/index.html","d13a74c9a6cbff8c896c827275dbf8bc"],["F:/WuYongZhi/public/tags/生活/index.html","b2ff2c48677918790d26bcd4df45f531"],["F:/WuYongZhi/public/tags/电喷主机/index.html","4d1f0410eaf9bdbec37725424697c0d5"],["F:/WuYongZhi/public/tags/神华/index.html","f5b5b996efb77b59335005d148da7aa1"],["F:/WuYongZhi/public/tags/神华538/index.html","314691785171ad269aaa9c00b7c2db5e"],["F:/WuYongZhi/public/tags/离心滤器/index.html","9ff701454e3f19313d21c06c64913e29"],["F:/WuYongZhi/public/tags/离线词典/index.html","d4dbf1873785990b7082ae33a62f9238"],["F:/WuYongZhi/public/tags/等待/index.html","5a5bb25785ff3ae0022fc1fe06faf044"],["F:/WuYongZhi/public/tags/管理心得/index.html","ae40621169f7f613f0db92d29c37fb70"],["F:/WuYongZhi/public/tags/经验/index.html","3fa0d1f52712f818e393c66dad591879"],["F:/WuYongZhi/public/tags/结婚/index.html","d00a677152a8d94035bdbdac85ede25c"],["F:/WuYongZhi/public/tags/维修/index.html","8d8041a83f645f9d49bbe39f703df54c"],["F:/WuYongZhi/public/tags/老七/index.html","6c016ae8ca1f9627a5f3e657ec4ae373"],["F:/WuYongZhi/public/tags/职业/index.html","644c9604d6ccca9b3b46096b013737b6"],["F:/WuYongZhi/public/tags/自省/index.html","c6032a617786df7d2ccbf99d44188ae9"],["F:/WuYongZhi/public/tags/自荐信/index.html","ea3127edfa1038f061794e2c393cef62"],["F:/WuYongZhi/public/tags/船舶污染/index.html","38e9d5a76a8a7c84c7df8e95f4c8e5a3"],["F:/WuYongZhi/public/tags/船舶设备/index.html","a0448cf2445b22e14fba6a2d2cf6e185"],["F:/WuYongZhi/public/tags/规划/index.html","a0401c6b715e15501baed785061bb388"],["F:/WuYongZhi/public/tags/误删/index.html","21bec7729cc341fc435c6f12c8250614"],["F:/WuYongZhi/public/tags/软件分享/index.html","d16704003b2ae46494f8781538b8a7f8"],["F:/WuYongZhi/public/tags/邮件通知/index.html","8bf0c5a738a8538669f512a87c33e70e"],["F:/WuYongZhi/public/tags/重装/index.html","f8184ae2194d516719e589590d7bfb47"],["F:/WuYongZhi/public/tags/金海翔/index.html","1c7f85e334ac474ae9f6b5fc8841b1a2"],["F:/WuYongZhi/public/tags/金钱/index.html","060d16850217be20068965ca277d66b5"],["F:/WuYongZhi/public/tags/锅炉/index.html","c3cfa84b80fcb9dca5ba784be8076989"],["F:/WuYongZhi/public/tags/防污染/index.html","5ff8992598df68ade774502f03d2dfa2"],["F:/WuYongZhi/public/tags/面试/index.html","61aa062334153ba6f6fb4ab7fbb19d32"],["F:/WuYongZhi/public/undefined/101660557/index.html","9751e63018df8c6ce67dd9fcf6ea10e0"],["F:/WuYongZhi/public/undefined/1034342947/index.html","5e1fa2b8a90d8c8a9a1c97bfa9ca893d"],["F:/WuYongZhi/public/undefined/1407782573/index.html","4ad234f96f9892da48615b3c0fbb5534"],["F:/WuYongZhi/public/undefined/1470485030/index.html","154a9d066a31370ce94cbb16d4dc2fab"],["F:/WuYongZhi/public/undefined/1500021339/index.html","3268c01036105c7d5cb53ae8d2056ddc"],["F:/WuYongZhi/public/undefined/1563181924/index.html","15569368bbe42b3342dd2b10168def96"],["F:/WuYongZhi/public/undefined/157123478/index.html","147de541daf168dbd8553260a564fe42"],["F:/WuYongZhi/public/undefined/1950196688/index.html","1744ca557de3ec3204217d21cf70be0c"],["F:/WuYongZhi/public/undefined/2066502676/index.html","a3b0c583f044a8cb83504963e59fbad8"],["F:/WuYongZhi/public/undefined/2164511907/index.html","dabdb2876b568cf8f2084ea1ca823804"],["F:/WuYongZhi/public/undefined/2175512848/index.html","511d97c12d99e0edfd6d6a8808ecaf56"],["F:/WuYongZhi/public/undefined/2265490893/index.html","78d6f10154909a2e6b0937349fae5dba"],["F:/WuYongZhi/public/undefined/2416123799/index.html","2753a6ff1e0726732d6606fb58af1930"],["F:/WuYongZhi/public/undefined/2578471232/index.html","240439c224c949fcb337c17d41a4374a"],["F:/WuYongZhi/public/undefined/2733374787/index.html","25e0123b8672e62cfa9e04766880b045"],["F:/WuYongZhi/public/undefined/2841450072/index.html","1b71e4cf6eaa704455b37193f48ef81d"],["F:/WuYongZhi/public/undefined/2865054090/index.html","14e9bffcda9f2afd13b4c028bc4d2871"],["F:/WuYongZhi/public/undefined/2874389552/index.html","25002f8249926b04845b08387a08e1d1"],["F:/WuYongZhi/public/undefined/293364186/index.html","874ee80d6b85f6c4657b6ad2ba7ffebb"],["F:/WuYongZhi/public/undefined/3456093329/index.html","02fcd9204148223809060e7024322e7e"],["F:/WuYongZhi/public/undefined/3553923324/index.html","e2710ebd9a571c4aeb47cd634bc439ef"],["F:/WuYongZhi/public/undefined/3575515497/index.html","f749e3f1c417ea74c8ea0b2fbe19253d"],["F:/WuYongZhi/public/undefined/402975490/index.html","5161c10723182cc9ccc2ad98cb7316b1"],["F:/WuYongZhi/public/undefined/4099807269/index.html","e4d72a1b21e9f76703711d57df181eee"],["F:/WuYongZhi/public/undefined/521877410/index.html","e5c7b94c205a617286bc0c700f69ad0f"],["F:/WuYongZhi/public/undefined/978701696/index.html","c39c10a6a8ba641d188e881ebf3b89ba"],["F:/WuYongZhi/public/undefined/999270176/index.html","077f0a4a2ad339ae2aa1617fde5585f3"],["F:/WuYongZhi/public/word/index.html","b43a306977d9ccf69cf16e22dcac7129"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







