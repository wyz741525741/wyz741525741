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

var precacheConfig = [["F:/WuYongZhi/public/about/index.html","dce9912c5e9f87da0b8e215c24d024ee"],["F:/WuYongZhi/public/archives/2019/01/index.html","32f2f532a2ca0c2894f01519d565187e"],["F:/WuYongZhi/public/archives/2019/02/index.html","4c2fbf866293d012f66ed0863da880f9"],["F:/WuYongZhi/public/archives/2019/03/index.html","19c99aed3c9c2540e5c3c1c38e547ead"],["F:/WuYongZhi/public/archives/2019/04/index.html","7b7b29977e22cbd7226eb0a5068d3d0a"],["F:/WuYongZhi/public/archives/2019/05/index.html","e44a4c3202b9ceba784c17eea7458699"],["F:/WuYongZhi/public/archives/2019/06/index.html","5851a0adb85d1797f7f6ac202968a546"],["F:/WuYongZhi/public/archives/2019/07/index.html","df30490911b89bb5c0c3a562b1a52800"],["F:/WuYongZhi/public/archives/2019/08/index.html","cc377f315c2929d27ec1b65f096e0a86"],["F:/WuYongZhi/public/archives/2019/09/index.html","697ff5ee870d84fb2806b9bb8997ed3c"],["F:/WuYongZhi/public/archives/2019/10/index.html","2438a22ad276052a13d29ea97740078d"],["F:/WuYongZhi/public/archives/2019/index.html","e49394b614bc78102b27bf1d9823b955"],["F:/WuYongZhi/public/archives/2019/page/2/index.html","feff7dd20f3c59324f1147cddc920870"],["F:/WuYongZhi/public/archives/2019/page/3/index.html","31b78bf1b296e203c054237f323bf37e"],["F:/WuYongZhi/public/archives/2020/02/index.html","c3718ad7f6779de727c593be041278be"],["F:/WuYongZhi/public/archives/2020/index.html","e16c218fe35c7e26df6301b25c8ed3a1"],["F:/WuYongZhi/public/archives/index.html","b7661f3f43c598be917e4192a7b0a6c4"],["F:/WuYongZhi/public/archives/page/2/index.html","c89f3d2ccdf99088f74bcb8a44cb3c91"],["F:/WuYongZhi/public/archives/page/3/index.html","b70b09f5cc674943d8cfda63bdeeed80"],["F:/WuYongZhi/public/categories/index.html","8335cf72101d70e6e43195bb26c2c21e"],["F:/WuYongZhi/public/categories/事故案例/index.html","570b2cb5cf8e85f7800e950f9e3a1279"],["F:/WuYongZhi/public/categories/工作日志/index.html","2415b9f27f14996c30948cd71b8ad8a5"],["F:/WuYongZhi/public/categories/打发时间/index.html","c81a16048b85bcd4ccfa62bc904b7c07"],["F:/WuYongZhi/public/categories/瞎记乱写/index.html","018ebdd56a8fbf2e9997de6b0b2f9ce1"],["F:/WuYongZhi/public/categories/轮机技术/index.html","d75ce2765ef24baa53db9d16b8a70faf"],["F:/WuYongZhi/public/categories/阅读识字/index.html","4e297d7464cc082fd00034eab409bf14"],["F:/WuYongZhi/public/css/index.css","34dad4246088b8910453131af9371060"],["F:/WuYongZhi/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/WuYongZhi/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["F:/WuYongZhi/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["F:/WuYongZhi/public/img/alipay.jpg","b98449cfb93e5a6edb3287cf28bb6148"],["F:/WuYongZhi/public/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["F:/WuYongZhi/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["F:/WuYongZhi/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/WuYongZhi/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/WuYongZhi/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/WuYongZhi/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/WuYongZhi/public/img/wechatpay.jpg","d969edca8a8da7643ce77f2fd97da37d"],["F:/WuYongZhi/public/index.html","d0c2f0b8bde7e7e610fdc789729cc47f"],["F:/WuYongZhi/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["F:/WuYongZhi/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/WuYongZhi/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/WuYongZhi/public/link/index.html","8a61f7053ee0b12a3125127f15efeb4d"],["F:/WuYongZhi/public/movies/index.html","49385199b97bfafce926f44d7770449d"],["F:/WuYongZhi/public/page/2/index.html","f76e9143bc6dc8d6a97a1d4a8cb77e31"],["F:/WuYongZhi/public/page/3/index.html","96925de80ebe5b539429845e0bcb835e"],["F:/WuYongZhi/public/tags/1624-1公里/index.html","975d4bbe28350b2d27604c27e3bd6c19"],["F:/WuYongZhi/public/tags/GoldenDict/index.html","d2529dd5550209a482a4e70414a2be11"],["F:/WuYongZhi/public/tags/HEXO/index.html","47522a631665d0ee1b8342dfa8895b79"],["F:/WuYongZhi/public/tags/MAN-B-W-7S70ME-C8-2/index.html","20b63f026c8caaf4e9e1f4bad6c86175"],["F:/WuYongZhi/public/tags/MaterialX/index.html","6bf5e384132a28460b17e8b3622823cb"],["F:/WuYongZhi/public/tags/Photoshop/index.html","0d6ffdeb1bc935148d2c98ee7e83305c"],["F:/WuYongZhi/public/tags/Pjax/index.html","0a13bace87b8879e1bc8c81b7c9be5ad"],["F:/WuYongZhi/public/tags/Valine/index.html","ca33b3f57b0d4acfac9a28117bb508a7"],["F:/WuYongZhi/public/tags/index.html","901c5580ef646715142dcb5e8ace2544"],["F:/WuYongZhi/public/tags/win10/index.html","017b8c686db439864158b5c62dcb867f"],["F:/WuYongZhi/public/tags/上船/index.html","c3f6a99a673505ab861fc7b8957a0a08"],["F:/WuYongZhi/public/tags/上船必备/index.html","83739517e6f031ffc03008b7843d2c1e"],["F:/WuYongZhi/public/tags/两性/index.html","5978bc8f3f6e586e440b91db7dae0422"],["F:/WuYongZhi/public/tags/二氧化碳/index.html","da64b8104954f4c6184cda87f099e4bf"],["F:/WuYongZhi/public/tags/交接/index.html","b603c8a24c18c1a0f667358548b3f0a6"],["F:/WuYongZhi/public/tags/交接班/index.html","da8f3f46493aa0cd180f39531d1b5812"],["F:/WuYongZhi/public/tags/优化/index.html","1514ee6c32f2e982d3eba962f5bde111"],["F:/WuYongZhi/public/tags/修图/index.html","a7fdb98a07cb0010a898c597aa993b8b"],["F:/WuYongZhi/public/tags/俯卧撑/index.html","a1fbb08ea69d0be03fe63d1de905550b"],["F:/WuYongZhi/public/tags/健身/index.html","866ff0ffcf53e13d4dae4ad4e1fea0fd"],["F:/WuYongZhi/public/tags/分油机/index.html","a0826afa7ebc28e761dcc4fb7a9b53b5"],["F:/WuYongZhi/public/tags/博客/index.html","4dbe2b7d06b0b93a9ba79f730e8665c9"],["F:/WuYongZhi/public/tags/卸载/index.html","8bc5f4d542bb3b1c59c423cbe2f80cde"],["F:/WuYongZhi/public/tags/商店/index.html","8d549a0395d6a6b8a21aded9f2a8cd5f"],["F:/WuYongZhi/public/tags/喷射泵/index.html","0cc4c08dd5d38b8abb9d8a05c62d3128"],["F:/WuYongZhi/public/tags/囚徒/index.html","f668c79b73a9a913bee51d16e34be6ee"],["F:/WuYongZhi/public/tags/回顾/index.html","319eb0180c3afb0e06e647460896daf3"],["F:/WuYongZhi/public/tags/培训/index.html","c5283c3c5bebcb87b20c4af67617b158"],["F:/WuYongZhi/public/tags/增压器/index.html","3184c7e6414b0f7c3dfff672c610e2ba"],["F:/WuYongZhi/public/tags/夫妻/index.html","5b5816dcc3cd9ce61f1137cd270e7ede"],["F:/WuYongZhi/public/tags/失眠/index.html","99a809bf1e14be89e72e83dae873f778"],["F:/WuYongZhi/public/tags/女孩/index.html","ede0f2b883b6dce5108cfa4df3ded910"],["F:/WuYongZhi/public/tags/婚姻/index.html","bd348b5f26a08f1a1b67ca5df29248ed"],["F:/WuYongZhi/public/tags/工作/index.html","5d39a89380e2cc2c746a8dc8d44bbe90"],["F:/WuYongZhi/public/tags/应用/index.html","13196d7bc068ed882f0085ef2acbfa23"],["F:/WuYongZhi/public/tags/必备软件/index.html","bd9099295dae08e10a959b06847a68c9"],["F:/WuYongZhi/public/tags/快捷键/index.html","7ecebb66cb21022e5c4d1a88c33f69d1"],["F:/WuYongZhi/public/tags/恋爱/index.html","ca87f251cc5edbd158acde62aec439b1"],["F:/WuYongZhi/public/tags/恢复/index.html","c0f015bc46dd5664b869d4be4b137e1e"],["F:/WuYongZhi/public/tags/情侣/index.html","54421cb2a45619c2ba7f8ce1cfbe9f52"],["F:/WuYongZhi/public/tags/情商/index.html","c5093695edb20b3cf0017972fcc7a239"],["F:/WuYongZhi/public/tags/扫舱/index.html","42a020edfbe2558f709f629951fc681c"],["F:/WuYongZhi/public/tags/排气阀/index.html","e5ff4edac2915497cf018bea94b916a5"],["F:/WuYongZhi/public/tags/接船/index.html","65d5ae3486fc31904e2bb8800ba23cd5"],["F:/WuYongZhi/public/tags/提职三管轮/index.html","042369502b971b8dac85415d03ee1726"],["F:/WuYongZhi/public/tags/故障/index.html","841af2c51eb7c8fc6ea5b3087b3e9f31"],["F:/WuYongZhi/public/tags/故障分析/index.html","10c02cd7f403a094e4ab9253a04b37af"],["F:/WuYongZhi/public/tags/新年/index.html","befa9e8266ffa52eb0ad5307139b5cb6"],["F:/WuYongZhi/public/tags/旋杯燃烧器/index.html","983f35c766332fae82600f259ec9b497"],["F:/WuYongZhi/public/tags/机工提职/index.html","0fbbe1a7c69b8fc034a4eff5d6391f01"],["F:/WuYongZhi/public/tags/污油水/index.html","58a649edfe3bd6cfe42916f25000f201"],["F:/WuYongZhi/public/tags/油水分离/index.html","f158bf9e94058bf9940eff01c26a2674"],["F:/WuYongZhi/public/tags/泄漏事故/index.html","005c56f98839ff68cbf04e1f32b4f291"],["F:/WuYongZhi/public/tags/海员/index.html","5d0f6bf032df08b18147ed06cc31346a"],["F:/WuYongZhi/public/tags/点火失败/index.html","4489ec48baafcb6cb8fd51c05d24e4ad"],["F:/WuYongZhi/public/tags/爱情/index.html","902d6ecb9141d4dfe4476fa10593372a"],["F:/WuYongZhi/public/tags/瓦锡兰/index.html","b369004e82590e3087bb71f5c3be5672"],["F:/WuYongZhi/public/tags/生活/index.html","aa11e26207fb9a1143af0f36afe3119f"],["F:/WuYongZhi/public/tags/电喷主机/index.html","4246ded0136e1f07189e4573bae822f0"],["F:/WuYongZhi/public/tags/神华/index.html","16f0cbb5a892a3a6763108c60d2ced12"],["F:/WuYongZhi/public/tags/神华538/index.html","192feff1c5f60cd25e4145506cceaf53"],["F:/WuYongZhi/public/tags/离心滤器/index.html","397d53d49069916a484025113583bcf7"],["F:/WuYongZhi/public/tags/离线词典/index.html","325847e017dee83a211385e635b08720"],["F:/WuYongZhi/public/tags/等待/index.html","d7de674d01647d17810cc4813b2395b7"],["F:/WuYongZhi/public/tags/管理心得/index.html","6b43e455715ad1edd3f927b9825a28ec"],["F:/WuYongZhi/public/tags/经验/index.html","ee9e509a37411e657d38c8008c042668"],["F:/WuYongZhi/public/tags/结婚/index.html","bf39bafb7de79b74c645cd17702aa54b"],["F:/WuYongZhi/public/tags/维修/index.html","7d409a5577b105a28b3b4f53235387ba"],["F:/WuYongZhi/public/tags/老七/index.html","6bc1e46cb8ee73396693e33ba1c55585"],["F:/WuYongZhi/public/tags/职业/index.html","b23b8a59a9a7a11e1f78cb2de7b4f85b"],["F:/WuYongZhi/public/tags/自省/index.html","ffc3b16e43e49a411f400fe52ab6ded9"],["F:/WuYongZhi/public/tags/自荐信/index.html","caf7ac55e902b7124475f51cd966f6c4"],["F:/WuYongZhi/public/tags/船舶污染/index.html","05a52725dda553e419c470a1c21ae103"],["F:/WuYongZhi/public/tags/船舶设备/index.html","9056b66b208a69e8d039da7b4ddd77ac"],["F:/WuYongZhi/public/tags/规划/index.html","fa2f1989de9092da0b2c96eef96b3315"],["F:/WuYongZhi/public/tags/误删/index.html","595a533cbea287e4634c30f448dac926"],["F:/WuYongZhi/public/tags/软件分享/index.html","fac112e6000de13c136cf8e8671db2db"],["F:/WuYongZhi/public/tags/邮件通知/index.html","8e5f40c4523bec1d6d0953d616f42590"],["F:/WuYongZhi/public/tags/重装/index.html","50600941583057df89136350a19cf2ed"],["F:/WuYongZhi/public/tags/金海翔/index.html","89a1f4da6e7df51f4e837a4541396894"],["F:/WuYongZhi/public/tags/金钱/index.html","afc5391bb3eedcfc40160cdedf624deb"],["F:/WuYongZhi/public/tags/锅炉/index.html","7ae4ef8535fb403a2542f7dc0e77cbcb"],["F:/WuYongZhi/public/tags/锻炼/index.html","1594ea3aac9f158107938596e2fe60fa"],["F:/WuYongZhi/public/tags/防污染/index.html","144cc20013ddb23577a96361b7b28f45"],["F:/WuYongZhi/public/tags/面试/index.html","af3e67597c161076e999adde4ca584f1"],["F:/WuYongZhi/public/undefined/101660557/index.html","4dce2c64cc7accefee7c422093392ae1"],["F:/WuYongZhi/public/undefined/1034342947/index.html","3f3c3df390824f21a14f3e9b6da5cd94"],["F:/WuYongZhi/public/undefined/135746830/index.html","22eb6bf1c09662cb34fbc41dd049c229"],["F:/WuYongZhi/public/undefined/1407782573/index.html","a12feb12a60e9debfc077fc80278f6a8"],["F:/WuYongZhi/public/undefined/1470485030/index.html","c047ae4bb1b451fb0d664b3c85f502c2"],["F:/WuYongZhi/public/undefined/1500021339/index.html","46a9983aa4044facede0731d2b0cfa62"],["F:/WuYongZhi/public/undefined/1563181924/index.html","28aeda21010d28269ffac11fa522c917"],["F:/WuYongZhi/public/undefined/157123478/index.html","ddb124ece32a406f19651c3dc1f3c57d"],["F:/WuYongZhi/public/undefined/1950196688/index.html","0fa45d78bd177e4689f087c7ef258a4a"],["F:/WuYongZhi/public/undefined/2066502676/index.html","8d52ac147aa77618c1ca0e79b016faba"],["F:/WuYongZhi/public/undefined/2164511907/index.html","5c80d0e655380f2c2178792d6c88a36e"],["F:/WuYongZhi/public/undefined/2175512848/index.html","38a289289b64f5f04039623bec6bdba1"],["F:/WuYongZhi/public/undefined/2265490893/index.html","7df3489e3110f9ebbab9278c05b9fd56"],["F:/WuYongZhi/public/undefined/2416123799/index.html","c7254f1b95a9e3027f4f1239f09c1ff0"],["F:/WuYongZhi/public/undefined/2578471232/index.html","1885ce39cdab33486c087fbe58185844"],["F:/WuYongZhi/public/undefined/2733374787/index.html","90740b00f957bc7621ecbe29c886e856"],["F:/WuYongZhi/public/undefined/2841450072/index.html","d9e2c9fdd80b5e2ae74bd2fe924205ce"],["F:/WuYongZhi/public/undefined/2865054090/index.html","03261c94ed010baa711f3822026d9e15"],["F:/WuYongZhi/public/undefined/2874389552/index.html","23a18014984f60fa5884eb79bae80507"],["F:/WuYongZhi/public/undefined/293364186/index.html","63ddc19bef60729feac1eed18ef17b16"],["F:/WuYongZhi/public/undefined/3456093329/index.html","4d72c0a460c37e4af05bcdd31f27c5ec"],["F:/WuYongZhi/public/undefined/3553923324/index.html","83d1f8e7fb4ba937124232f79c6f70a5"],["F:/WuYongZhi/public/undefined/3575515497/index.html","4eadd5e3bba2cff07b55f92cb4c4a295"],["F:/WuYongZhi/public/undefined/402975490/index.html","2593376b6127e5239a7ac8ed6e1b3f4c"],["F:/WuYongZhi/public/undefined/4099807269/index.html","e9895a83b0e947c6897910269915e079"],["F:/WuYongZhi/public/undefined/521877410/index.html","36dd7e65576560cb24abe48819f6ad98"],["F:/WuYongZhi/public/undefined/978701696/index.html","478bd320dc5a99d9b2f7d15580c218b4"],["F:/WuYongZhi/public/undefined/999270176/index.html","3a31f79884f29325d98a639c9f1f3b3c"],["F:/WuYongZhi/public/word/index.html","aa77e001b4c871cbe9c83fe50e273214"]];
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







