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

var precacheConfig = [["F:/WuYongZhi/public/about/index.html","9655163efbec5bfb716ac35c05478b72"],["F:/WuYongZhi/public/archives/2019/01/index.html","cc7db76e0a485c065948e68e7477b1ff"],["F:/WuYongZhi/public/archives/2019/02/index.html","e758b50b9920d84c595e7bf6bef26927"],["F:/WuYongZhi/public/archives/2019/03/index.html","13cda5d7160bf374ee06486b971590a3"],["F:/WuYongZhi/public/archives/2019/04/index.html","4328e460ac6964d8e10fcb0b5c45d352"],["F:/WuYongZhi/public/archives/2019/05/index.html","47a4158416deb149f3db8812ea44f5d6"],["F:/WuYongZhi/public/archives/2019/06/index.html","2984255cb7083be889953200f4c2c2cb"],["F:/WuYongZhi/public/archives/2019/07/index.html","0695a7fb9e1e081e35d8c5853c108802"],["F:/WuYongZhi/public/archives/2019/08/index.html","e9230168f64d873e634417147d4ace7c"],["F:/WuYongZhi/public/archives/2019/09/index.html","2212614f4b6470aba40a075469672cfe"],["F:/WuYongZhi/public/archives/2019/10/index.html","a91eff5dd30fd19f7408c790001cf4e3"],["F:/WuYongZhi/public/archives/2019/index.html","caec37f93fed40c7e7783e08bed10795"],["F:/WuYongZhi/public/archives/2019/page/2/index.html","e56310974deb61f090e0ba53729a0508"],["F:/WuYongZhi/public/archives/2019/page/3/index.html","9001eaed3b5c453cecf71bb5270b955f"],["F:/WuYongZhi/public/archives/2020/02/index.html","c081e8afd4ca978263e4aabd18d53185"],["F:/WuYongZhi/public/archives/2020/index.html","c112fad13f4373f182b1c9497e325fc3"],["F:/WuYongZhi/public/archives/index.html","ceede0e12aa9f49d30b9df2b12a92564"],["F:/WuYongZhi/public/archives/page/2/index.html","ad9b22b0302998d9c0898c4d7912ecf2"],["F:/WuYongZhi/public/archives/page/3/index.html","24f56ec0f7658ef63b9560fc935af85e"],["F:/WuYongZhi/public/categories/index.html","08ceb049432763d8c65f4cf7ff9a68bd"],["F:/WuYongZhi/public/categories/事故案例/index.html","2c6cc1c2aa016198806e13541ed26283"],["F:/WuYongZhi/public/categories/工作日志/index.html","80b9b5b3f7281b8fd2491f4488a9c1f7"],["F:/WuYongZhi/public/categories/打发时间/index.html","f7261fb20e3f5801d3e74b9ac021f5a2"],["F:/WuYongZhi/public/categories/瞎记乱写/index.html","2388f0d8a70d176925d8fe68f0da301f"],["F:/WuYongZhi/public/categories/轮机技术/index.html","9287af6ab72dc3c7d119575034513595"],["F:/WuYongZhi/public/categories/阅读识字/index.html","52de5d26abd030d9b5723d3ea3cc4d28"],["F:/WuYongZhi/public/css/index.css","34dad4246088b8910453131af9371060"],["F:/WuYongZhi/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/WuYongZhi/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["F:/WuYongZhi/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["F:/WuYongZhi/public/img/alipay.jpg","b98449cfb93e5a6edb3287cf28bb6148"],["F:/WuYongZhi/public/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["F:/WuYongZhi/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["F:/WuYongZhi/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/WuYongZhi/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/WuYongZhi/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/WuYongZhi/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/WuYongZhi/public/img/wechatpay.jpg","d969edca8a8da7643ce77f2fd97da37d"],["F:/WuYongZhi/public/index.html","4e60dae817abe98016c772d783812a26"],["F:/WuYongZhi/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["F:/WuYongZhi/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/WuYongZhi/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/WuYongZhi/public/link/index.html","7e76f39322f9e82d17a53416b4ee99ce"],["F:/WuYongZhi/public/movies/index.html","d1ba81be745a69fd2f88b9d54c436086"],["F:/WuYongZhi/public/page/2/index.html","a860302e65d06316fecae2027c71950c"],["F:/WuYongZhi/public/page/3/index.html","b5b0593ad721e57aa634382a1bd3feb2"],["F:/WuYongZhi/public/tags/1624-1公里/index.html","ab763fe21f30d7d7ff2e55fea17abffa"],["F:/WuYongZhi/public/tags/GoldenDict/index.html","e38f4e2d03947ac510b03d628014094a"],["F:/WuYongZhi/public/tags/HEXO/index.html","ab539db00619dbe28e4b634cff4b7642"],["F:/WuYongZhi/public/tags/MAN-B-W-7S70ME-C8-2/index.html","3e157cfd00786fda4cd68f19a9633bcd"],["F:/WuYongZhi/public/tags/MaterialX/index.html","25d5aad645db0e53c5e5ccf254331ff2"],["F:/WuYongZhi/public/tags/Photoshop/index.html","9b729df9f9ad761f41ab0e26d254c9c9"],["F:/WuYongZhi/public/tags/Pjax/index.html","1e4601c26d00cd48b1a1606e40a607ec"],["F:/WuYongZhi/public/tags/Valine/index.html","d8a270269716a42d089d977543ac6a37"],["F:/WuYongZhi/public/tags/index.html","1d9f4418bb3de7a400218c7f5af74129"],["F:/WuYongZhi/public/tags/win10/index.html","c9110ce734c4021865c6884b7fceb58d"],["F:/WuYongZhi/public/tags/上船/index.html","341462388ce31c5f058d0c2a45c143c3"],["F:/WuYongZhi/public/tags/上船必备/index.html","1fb043d2bbd630eefba5df66fda52d8e"],["F:/WuYongZhi/public/tags/两性/index.html","70be499dbb53b142c68ed8a68827ab48"],["F:/WuYongZhi/public/tags/二氧化碳/index.html","e06430ff96d8edcf9b8941ad89dc523f"],["F:/WuYongZhi/public/tags/交接/index.html","0d17c4fe11458750f523d458d320210b"],["F:/WuYongZhi/public/tags/交接班/index.html","8242611eb77b9ce0e6568d2e1f594e45"],["F:/WuYongZhi/public/tags/优化/index.html","4537fb91ddd1ebbf3bd973265fd6f47d"],["F:/WuYongZhi/public/tags/修图/index.html","5977420bad1f57ee5a6867fded74da84"],["F:/WuYongZhi/public/tags/分油机/index.html","a3e447361ac9f9986ce69549c063f838"],["F:/WuYongZhi/public/tags/博客/index.html","c667d793bbd825b535fc5f904fb55f92"],["F:/WuYongZhi/public/tags/卸载/index.html","07ef9337406566c4d168696fcef83066"],["F:/WuYongZhi/public/tags/商店/index.html","ef00b5d733c28faa958b4ff5e2c1eb57"],["F:/WuYongZhi/public/tags/喷射泵/index.html","930eed423e283649a450661bb95a173c"],["F:/WuYongZhi/public/tags/回顾/index.html","4da0f7e3d22fcb61fe35db854db0c890"],["F:/WuYongZhi/public/tags/培训/index.html","6bd346d157caa2bd3a45ede9db94cce2"],["F:/WuYongZhi/public/tags/增压器/index.html","f70a006004feb62111fc9aad8c8e6718"],["F:/WuYongZhi/public/tags/夫妻/index.html","2512deebbdb4e6cc462f7a7a4a46dcb5"],["F:/WuYongZhi/public/tags/失眠/index.html","3899c60f3182345575c7c6ae4f177bf2"],["F:/WuYongZhi/public/tags/女孩/index.html","0ec897d30b3e8a3c8111ac9080e9acc0"],["F:/WuYongZhi/public/tags/婚姻/index.html","c92427ee1b8103f8cd7f642040ee33cf"],["F:/WuYongZhi/public/tags/工作/index.html","4b568739d2d5cb97032aefdb9740fe4b"],["F:/WuYongZhi/public/tags/应用/index.html","99da6f5fd34273ec58cb92ff1e474493"],["F:/WuYongZhi/public/tags/必备软件/index.html","801a4937cce1e5661e5eb91237cb6c84"],["F:/WuYongZhi/public/tags/快捷键/index.html","a469ce9e8623258179735f37407e44ee"],["F:/WuYongZhi/public/tags/恋爱/index.html","3d9754e8c09f1a19294ed51683cff289"],["F:/WuYongZhi/public/tags/恢复/index.html","af035b62fe5267c2b2ee8475c51542b3"],["F:/WuYongZhi/public/tags/情侣/index.html","7fe188c10ad9e9d75c2b0ecfaf47cd90"],["F:/WuYongZhi/public/tags/情商/index.html","7d687d43ce0c5ef9e22ea6682fcf4955"],["F:/WuYongZhi/public/tags/扫舱/index.html","d62d5030469b137487f06d70358be100"],["F:/WuYongZhi/public/tags/排气阀/index.html","d895a4085c8ca3f037f5710b8dced402"],["F:/WuYongZhi/public/tags/接船/index.html","2acfafa48ce1529242326e8422bdd25a"],["F:/WuYongZhi/public/tags/提职三管轮/index.html","6a03b66e87bfd0cce92a591f6d24380b"],["F:/WuYongZhi/public/tags/故障/index.html","251b6889fb443681a4b5ad4dc3be9776"],["F:/WuYongZhi/public/tags/故障分析/index.html","bfb0d84ec4cdbb31b27675a762f00434"],["F:/WuYongZhi/public/tags/新年/index.html","a4f3d2efd1e3f15cc17166a1f5b250ae"],["F:/WuYongZhi/public/tags/旋杯燃烧器/index.html","3839dc762b6ea9f6d37a502c70cc5d81"],["F:/WuYongZhi/public/tags/机工提职/index.html","a84a138a1ad379f6c489f3be1d36ced2"],["F:/WuYongZhi/public/tags/污油水/index.html","a8a9e2f69c3f1c874162a0a2245c3eba"],["F:/WuYongZhi/public/tags/油水分离/index.html","a6733f5e36e16785b9416c07fc9b3679"],["F:/WuYongZhi/public/tags/泄漏事故/index.html","ce97c79c5b0725460aadb72e9a6991ef"],["F:/WuYongZhi/public/tags/海员/index.html","0ac603d2323f6abf297d294991612660"],["F:/WuYongZhi/public/tags/点火失败/index.html","94cbf10ad0be339f64d6e99bc80304a2"],["F:/WuYongZhi/public/tags/爱情/index.html","58ee7b98df690f71116e380535a2f96c"],["F:/WuYongZhi/public/tags/瓦锡兰/index.html","83a22ff41fce5f72de55760a7dad5481"],["F:/WuYongZhi/public/tags/生活/index.html","aab86858f74f180aa4dd377e0973563a"],["F:/WuYongZhi/public/tags/电喷主机/index.html","6fb6050ef5fe326001a12b97a6b8df7f"],["F:/WuYongZhi/public/tags/神华/index.html","dfe3295556959caba6566089563e56f1"],["F:/WuYongZhi/public/tags/神华538/index.html","8e41a242906aee2b5c85a39ade2aa6ca"],["F:/WuYongZhi/public/tags/离心滤器/index.html","3bc219ea89c7ebcc7569e3cbd8f73348"],["F:/WuYongZhi/public/tags/离线词典/index.html","fe700af240edd340b3a48a8755fb79e7"],["F:/WuYongZhi/public/tags/等待/index.html","a5f0603033d35c2e4aa3192589757eff"],["F:/WuYongZhi/public/tags/管理心得/index.html","141f07ddfe774817d97a3c66cce2559d"],["F:/WuYongZhi/public/tags/经验/index.html","9987e7535e561e8e90a45af9415ad07f"],["F:/WuYongZhi/public/tags/结婚/index.html","bafd1f8a44fe5d4e1bc87dc17815e79c"],["F:/WuYongZhi/public/tags/维修/index.html","85c4bbce9dff236c70b255517950c132"],["F:/WuYongZhi/public/tags/老七/index.html","5a90e9dec21a6150f554f99fd53d2fd3"],["F:/WuYongZhi/public/tags/职业/index.html","c27afb4c16f3d9d19704dddffd36eed2"],["F:/WuYongZhi/public/tags/自省/index.html","df51ef772be470f60b7119cfff4deb67"],["F:/WuYongZhi/public/tags/自荐信/index.html","891575f6115e1494693bdaf404aebba0"],["F:/WuYongZhi/public/tags/船舶污染/index.html","95a2ced93fbe8a867adfb7247d191a12"],["F:/WuYongZhi/public/tags/船舶设备/index.html","b1a2f477a6ba8b9183bc7aafb2c51827"],["F:/WuYongZhi/public/tags/规划/index.html","4144fcd9f0f368fa8d76ae379ee505e5"],["F:/WuYongZhi/public/tags/误删/index.html","45ef1eddb7429dd93b99bb7f7ab79ee3"],["F:/WuYongZhi/public/tags/软件分享/index.html","9da424a33f421471edb58b6da9c313c8"],["F:/WuYongZhi/public/tags/邮件通知/index.html","012a4278faffb728e9bb258430ac95ef"],["F:/WuYongZhi/public/tags/重装/index.html","042ca2f5becb59ad508ebda83543689e"],["F:/WuYongZhi/public/tags/金海翔/index.html","ea9f36197e23a5482e0921cb7e6c9c81"],["F:/WuYongZhi/public/tags/金钱/index.html","92a83d993addb8846eae1cd843f97f2b"],["F:/WuYongZhi/public/tags/锅炉/index.html","d1723d1e117c2c828f70370a1cdf52e2"],["F:/WuYongZhi/public/tags/防污染/index.html","c08465124a17ae43d14629099b727bc1"],["F:/WuYongZhi/public/tags/面试/index.html","90d465281c8c7928ef6dc2641f6b310a"],["F:/WuYongZhi/public/undefined/101660557/index.html","428dfdf5ef5c85c1b313352ebcd5a0fb"],["F:/WuYongZhi/public/undefined/1034342947/index.html","eca45d18ca194a38d83c387f7eef9890"],["F:/WuYongZhi/public/undefined/1407782573/index.html","687adc6c9c7385571e41e10d460cfb11"],["F:/WuYongZhi/public/undefined/1470485030/index.html","cbeef3d8dd87d0c77d7bba59ff574ca9"],["F:/WuYongZhi/public/undefined/1500021339/index.html","f2e0ec01bb137f069b58d68d6a31749b"],["F:/WuYongZhi/public/undefined/1563181924/index.html","f2da37ed728d044543ea0a6e0fbf7544"],["F:/WuYongZhi/public/undefined/157123478/index.html","8fa35d9c5f100cca7498a5efb3e45375"],["F:/WuYongZhi/public/undefined/1950196688/index.html","d722d2a98ee97d4da1eaaf20688e0c4e"],["F:/WuYongZhi/public/undefined/2066502676/index.html","c6b63cddd105865202383b809427fa76"],["F:/WuYongZhi/public/undefined/2164511907/index.html","e52e03c3b37aae81bde2110b52b16bf5"],["F:/WuYongZhi/public/undefined/2175512848/index.html","855b2bef4447c95783c6f97434d90e62"],["F:/WuYongZhi/public/undefined/2265490893/index.html","522a9052cc3235f99862249661accc19"],["F:/WuYongZhi/public/undefined/2416123799/index.html","dc7d9210e9cd042a304654ab7b452105"],["F:/WuYongZhi/public/undefined/2578471232/index.html","269c65824d6ce71a6000fad36d338105"],["F:/WuYongZhi/public/undefined/2733374787/index.html","5a2133536868ebf9c7842364b6cf56e3"],["F:/WuYongZhi/public/undefined/2841450072/index.html","4a6f515e9a9482dcfb43324ee8891ae9"],["F:/WuYongZhi/public/undefined/2865054090/index.html","f332dce23b00ad3ce3da87a7633af4e5"],["F:/WuYongZhi/public/undefined/2874389552/index.html","5992f97512c71004e1bfaa6c3466d06b"],["F:/WuYongZhi/public/undefined/293364186/index.html","2009e095f47c8d78655a692a636b9666"],["F:/WuYongZhi/public/undefined/3456093329/index.html","d67f41345a4992733b6aa090704d9d0d"],["F:/WuYongZhi/public/undefined/3553923324/index.html","ccfc7f32c73f344e1078415294577a12"],["F:/WuYongZhi/public/undefined/3575515497/index.html","6ad44a1240cde621552862bb7bba2c58"],["F:/WuYongZhi/public/undefined/402975490/index.html","3d525e7312d9a02eac9bf8d7cbc9db62"],["F:/WuYongZhi/public/undefined/4099807269/index.html","6d6ea12eed6c9b0ced3799124790a499"],["F:/WuYongZhi/public/undefined/521877410/index.html","205aa6b7b6dbf1404f7ad611956009b3"],["F:/WuYongZhi/public/undefined/978701696/index.html","3d5712bd53d0e6313b0c41bc28b0e47d"],["F:/WuYongZhi/public/undefined/999270176/index.html","ccc894e331bdc931fda65f5a00120f5d"],["F:/WuYongZhi/public/word/index.html","8bed4f4509b3e3f793235288b067803b"]];
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







