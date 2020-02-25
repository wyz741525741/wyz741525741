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

var precacheConfig = [["F:/WuYongZhi/public/about/index.html","117a50a040bb8e508fc72dcb8552e056"],["F:/WuYongZhi/public/archives/2019/01/index.html","f6c823d9bafdb09620af2a65d3cca40b"],["F:/WuYongZhi/public/archives/2019/02/index.html","06cd9f8945653293fcc3c09b0c18aad7"],["F:/WuYongZhi/public/archives/2019/03/index.html","7169fe691b319cb3029fa866d2634612"],["F:/WuYongZhi/public/archives/2019/04/index.html","8aac59b4863848c0ed0b079cb6ce9e1e"],["F:/WuYongZhi/public/archives/2019/05/index.html","51617c02f88a3e864637b692242053ce"],["F:/WuYongZhi/public/archives/2019/06/index.html","fa79a31f69e9de1cfc8b3c4c8c3f0841"],["F:/WuYongZhi/public/archives/2019/07/index.html","927b619d21eda56225433897c306cc80"],["F:/WuYongZhi/public/archives/2019/08/index.html","645f7d0b4700f193fa26f99fb44a0585"],["F:/WuYongZhi/public/archives/2019/09/index.html","a4715dc2a997b7f228d1db67fd9b90a5"],["F:/WuYongZhi/public/archives/2019/10/index.html","38fa78c6a40d254f6c14dddc112632e2"],["F:/WuYongZhi/public/archives/2019/index.html","1501ba51e2a65c09d6bd9f5da8168ae7"],["F:/WuYongZhi/public/archives/2019/page/2/index.html","827382ffa57e289325bfb5bbee15d93d"],["F:/WuYongZhi/public/archives/2019/page/3/index.html","30c2716f55ee8aeece3f4e16df75d644"],["F:/WuYongZhi/public/archives/2020/02/index.html","fdb9e4bfd7bace156d3d163a0ea6ab29"],["F:/WuYongZhi/public/archives/2020/index.html","681e25a8696fa8f3f294fb042c04fea7"],["F:/WuYongZhi/public/archives/index.html","ea2b7c8b0d97172dbe1361c6fe056b18"],["F:/WuYongZhi/public/archives/page/2/index.html","b515d4874d584d4cd76e10ddfad05144"],["F:/WuYongZhi/public/archives/page/3/index.html","f083b4fe0c694db8100b312a6ef2a582"],["F:/WuYongZhi/public/categories/index.html","16a6dda4bdce0b8636eab8c3fec30c6d"],["F:/WuYongZhi/public/categories/事故案例/index.html","065e4a80a26ed0f0b62e14b0cac01674"],["F:/WuYongZhi/public/categories/工作日志/index.html","9f10a5e7d5ad5020cc1138894b38551e"],["F:/WuYongZhi/public/categories/打发时间/index.html","040511e2b6e0e1cb57d396780bd337d0"],["F:/WuYongZhi/public/categories/瞎记乱写/index.html","e469b50f26ff75452c9cb7d8506a01dc"],["F:/WuYongZhi/public/categories/轮机技术/index.html","2b111809eba11c1f9955785a7e295f35"],["F:/WuYongZhi/public/categories/阅读识字/index.html","c5fe8f7de887426f73597884b03ffea7"],["F:/WuYongZhi/public/css/index.css","34dad4246088b8910453131af9371060"],["F:/WuYongZhi/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/WuYongZhi/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["F:/WuYongZhi/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["F:/WuYongZhi/public/img/alipay.jpg","b98449cfb93e5a6edb3287cf28bb6148"],["F:/WuYongZhi/public/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["F:/WuYongZhi/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["F:/WuYongZhi/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/WuYongZhi/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/WuYongZhi/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/WuYongZhi/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/WuYongZhi/public/img/wechatpay.jpg","d969edca8a8da7643ce77f2fd97da37d"],["F:/WuYongZhi/public/index.html","33d4ad841b3476d2ab815b86161463e3"],["F:/WuYongZhi/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["F:/WuYongZhi/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/WuYongZhi/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/WuYongZhi/public/link/index.html","87f0a3eab0444cc7d948ca11d57144bf"],["F:/WuYongZhi/public/movies/index.html","9c5f175d8e7649cc86e6b00dea09d846"],["F:/WuYongZhi/public/page/2/index.html","a5c55414c774f96849d4947151257c1a"],["F:/WuYongZhi/public/page/3/index.html","14c8a70ad00fff8c946d7df61c94469f"],["F:/WuYongZhi/public/tags/1624-1公里/index.html","e97ad8598212492da1b546795c01fe2c"],["F:/WuYongZhi/public/tags/GoldenDict/index.html","520d06bd35eddaf5c92687dc72135f42"],["F:/WuYongZhi/public/tags/HEXO/index.html","843b05403493ad214845eb3013ea35e7"],["F:/WuYongZhi/public/tags/MAN-B-W-7S70ME-C8-2/index.html","1ccf52a4f47a60a54fc9ec336fa67830"],["F:/WuYongZhi/public/tags/MaterialX/index.html","0bb610f218b34fe0564079542de6e9f2"],["F:/WuYongZhi/public/tags/Photoshop/index.html","0689092b89895b3e55da5343303cd9fb"],["F:/WuYongZhi/public/tags/Pjax/index.html","8b33a37a5b98304b36fb0b45978a0858"],["F:/WuYongZhi/public/tags/Valine/index.html","c288b9cc4130ec15d556e97a19856a38"],["F:/WuYongZhi/public/tags/index.html","e73997fcc4649f4ff9a33d2ab6ba37d0"],["F:/WuYongZhi/public/tags/win10/index.html","2274b466e82fbe0293ba976b359f8ac5"],["F:/WuYongZhi/public/tags/上船/index.html","b8bd3204960fb4c144e94996c09bb7ca"],["F:/WuYongZhi/public/tags/上船必备/index.html","09fea5792b7df5949f51c376faeef7fb"],["F:/WuYongZhi/public/tags/两性/index.html","fcc9bf80dd553f7e44d3c0b07a5ae9ca"],["F:/WuYongZhi/public/tags/二氧化碳/index.html","c6c4fe0cd2791dfddbbea895dc250af3"],["F:/WuYongZhi/public/tags/交接/index.html","35b12318b574260c2c0793e22c6c61e4"],["F:/WuYongZhi/public/tags/交接班/index.html","1ba634c8fa46c5a49c95a5b84aed1d64"],["F:/WuYongZhi/public/tags/优化/index.html","2c7828dff59f4dfb0614ef05dfd0421d"],["F:/WuYongZhi/public/tags/修图/index.html","ca1a413fc2c957dcd7c140f8ae1e579b"],["F:/WuYongZhi/public/tags/俯卧撑/index.html","dfc6eef4676cd8c6d7ed0c05f0dc27ba"],["F:/WuYongZhi/public/tags/健身/index.html","6abffc713af383c6b1560ec8480897f9"],["F:/WuYongZhi/public/tags/分油机/index.html","f13fd597047e4479e6ec94bbda349ca7"],["F:/WuYongZhi/public/tags/博客/index.html","6d14b771639dc23e1922356c491a561b"],["F:/WuYongZhi/public/tags/卸载/index.html","43bbe6949e4af8704904e84b0ed0cfb0"],["F:/WuYongZhi/public/tags/商店/index.html","2cbd9dad88862ff217c5393ade09832c"],["F:/WuYongZhi/public/tags/喷射泵/index.html","001e9bb9e4dd510f405acbbc7849b1cd"],["F:/WuYongZhi/public/tags/囚徒/index.html","1dfa11a44dea58186808f3ba4265d99a"],["F:/WuYongZhi/public/tags/回顾/index.html","15e0214efb4915207766b7e09e746460"],["F:/WuYongZhi/public/tags/培训/index.html","9173f81d746bf6ae168de4af0540cbad"],["F:/WuYongZhi/public/tags/增压器/index.html","cd24725d1e977b2132fe1f472a6f2fec"],["F:/WuYongZhi/public/tags/夫妻/index.html","aedb625be810375d8f8ff8ad74567e83"],["F:/WuYongZhi/public/tags/失眠/index.html","445c07873d5bd3d15801a1675fad000f"],["F:/WuYongZhi/public/tags/女孩/index.html","4e72bc16d61dc72585a1f082c1376518"],["F:/WuYongZhi/public/tags/婚姻/index.html","66d10cf3901ad658dba43abfdec51716"],["F:/WuYongZhi/public/tags/工作/index.html","c6b969ee37ec2f0bd489c964576720c0"],["F:/WuYongZhi/public/tags/应用/index.html","dc62e49cf12b79f84ba18d5875769d69"],["F:/WuYongZhi/public/tags/必备软件/index.html","ad3b4551dd7fb0195951ec2f5090bf28"],["F:/WuYongZhi/public/tags/快捷键/index.html","9a737294ad14af2b41b19a08b7eeebba"],["F:/WuYongZhi/public/tags/恋爱/index.html","dbf494d8ef324cfe7f860d0bd3573924"],["F:/WuYongZhi/public/tags/恢复/index.html","ef7e082deb8b1e38f8e528a3aa15d7ff"],["F:/WuYongZhi/public/tags/情侣/index.html","e5d4db3eb8952f7b57429abb92dee231"],["F:/WuYongZhi/public/tags/情商/index.html","5b81d8a1301348c80f5f2c37322f7fc3"],["F:/WuYongZhi/public/tags/扫舱/index.html","7e203b3361c36f4ba11eeda60d42da80"],["F:/WuYongZhi/public/tags/排气阀/index.html","a9ead1a5b1f4df830066c15c78ea9ceb"],["F:/WuYongZhi/public/tags/接船/index.html","fca9351ddef4ba2ae0603f20adb14e44"],["F:/WuYongZhi/public/tags/提职三管轮/index.html","e6fe5693bac89032b94f1cb5d7c49c1d"],["F:/WuYongZhi/public/tags/故障/index.html","52e6a94e11716022affc610f5c2fe995"],["F:/WuYongZhi/public/tags/故障分析/index.html","00975478188c600f78c465d356d7c57e"],["F:/WuYongZhi/public/tags/新年/index.html","e66e25f98347cb14e7e2a79f1a7b6b82"],["F:/WuYongZhi/public/tags/旋杯燃烧器/index.html","7df0d4e13fd156529e691f63995a7089"],["F:/WuYongZhi/public/tags/机工提职/index.html","b8257866ee70dfe351d1721f5443801c"],["F:/WuYongZhi/public/tags/污油水/index.html","10f9805d578bcaf963eb7cb5045a36e9"],["F:/WuYongZhi/public/tags/油水分离/index.html","3b5e0b80d1769c2c1d818412a774b4d3"],["F:/WuYongZhi/public/tags/泄漏事故/index.html","074c6f9fe3ede19edfaf9c40791060c0"],["F:/WuYongZhi/public/tags/海员/index.html","7fcd971e8af9d8e190f0dd5979fa6a1d"],["F:/WuYongZhi/public/tags/点火失败/index.html","a671f40b022c3d53b8befd3e744fcf85"],["F:/WuYongZhi/public/tags/爱情/index.html","87d548380ed3d13400618a8c25411128"],["F:/WuYongZhi/public/tags/瓦锡兰/index.html","f45d992471903512f0f0e263cea4330b"],["F:/WuYongZhi/public/tags/生活/index.html","f5065e7d9fbeab8a31095fbf9ed4e245"],["F:/WuYongZhi/public/tags/电喷主机/index.html","79e34b928d502449abfc1ae2ce354066"],["F:/WuYongZhi/public/tags/神华/index.html","4e73cf17fcc536bf95878e3da16ad087"],["F:/WuYongZhi/public/tags/神华538/index.html","ba69b4f105a0cccd7a634d6dc1e40402"],["F:/WuYongZhi/public/tags/离心滤器/index.html","9887e4a23555ab25aba71a255f045ba2"],["F:/WuYongZhi/public/tags/离线词典/index.html","4af272fec53ef66d2dd1fd7ae71af5cc"],["F:/WuYongZhi/public/tags/等待/index.html","75aacdc133e1ce59dc86003063c37666"],["F:/WuYongZhi/public/tags/管理心得/index.html","45b9912a609a68e018c0487fa2bdc8c6"],["F:/WuYongZhi/public/tags/经验/index.html","19a1434c403e1f874fc010ade5354be6"],["F:/WuYongZhi/public/tags/结婚/index.html","35e200e271ab3bc8b191c179444e4475"],["F:/WuYongZhi/public/tags/维修/index.html","057692684b26b4abcda85aa16e9003cc"],["F:/WuYongZhi/public/tags/老七/index.html","a1fc16ccbafa0103f7f1e4f40e6d5c5e"],["F:/WuYongZhi/public/tags/职业/index.html","5b586c648050129720a0409544688460"],["F:/WuYongZhi/public/tags/自省/index.html","cb1e93aa3b8c085bb6727364373610bf"],["F:/WuYongZhi/public/tags/自荐信/index.html","4725ccb5f07db6758b592da3ade19d72"],["F:/WuYongZhi/public/tags/船舶污染/index.html","35edd7a34be6eb77316e0bb80a946e1e"],["F:/WuYongZhi/public/tags/船舶设备/index.html","4b6e9ca2be0dc6ce4f193e27725a050d"],["F:/WuYongZhi/public/tags/规划/index.html","7e52537363b4a33aef4a5385c67e6fd9"],["F:/WuYongZhi/public/tags/误删/index.html","bdf32db83aafe65f1620782f8856256a"],["F:/WuYongZhi/public/tags/软件分享/index.html","dfac9a65d4f59605c55df6691a01ec00"],["F:/WuYongZhi/public/tags/邮件通知/index.html","c1048fed104ddbe394537cc2dfa67ca4"],["F:/WuYongZhi/public/tags/重装/index.html","14cd1325b681d640e56137a342189b2b"],["F:/WuYongZhi/public/tags/金海翔/index.html","ec70eccdf61fa344de21412d516bc267"],["F:/WuYongZhi/public/tags/金钱/index.html","a3b1d3be825a5302d97eb25f7d49d210"],["F:/WuYongZhi/public/tags/锅炉/index.html","e8cf67a9f56ae1a520c1bd74d8335975"],["F:/WuYongZhi/public/tags/锻炼/index.html","43e37b33c1095e06162686b5e9b2b032"],["F:/WuYongZhi/public/tags/防污染/index.html","a3ba7f0d2809879ea8116c7753c6d3bc"],["F:/WuYongZhi/public/tags/面试/index.html","6ad478ee239e9fdb6773d9d5020f653d"],["F:/WuYongZhi/public/undefined/101660557/index.html","4dce2c64cc7accefee7c422093392ae1"],["F:/WuYongZhi/public/undefined/1034342947/index.html","3f3c3df390824f21a14f3e9b6da5cd94"],["F:/WuYongZhi/public/undefined/135746830/index.html","0d4dc52a4f053c1ee97519137edd120d"],["F:/WuYongZhi/public/undefined/1407782573/index.html","a12feb12a60e9debfc077fc80278f6a8"],["F:/WuYongZhi/public/undefined/1470485030/index.html","c047ae4bb1b451fb0d664b3c85f502c2"],["F:/WuYongZhi/public/undefined/1500021339/index.html","46a9983aa4044facede0731d2b0cfa62"],["F:/WuYongZhi/public/undefined/1563181924/index.html","28aeda21010d28269ffac11fa522c917"],["F:/WuYongZhi/public/undefined/157123478/index.html","ddb124ece32a406f19651c3dc1f3c57d"],["F:/WuYongZhi/public/undefined/1950196688/index.html","0fa45d78bd177e4689f087c7ef258a4a"],["F:/WuYongZhi/public/undefined/2066502676/index.html","8d52ac147aa77618c1ca0e79b016faba"],["F:/WuYongZhi/public/undefined/2164511907/index.html","5c80d0e655380f2c2178792d6c88a36e"],["F:/WuYongZhi/public/undefined/2175512848/index.html","38a289289b64f5f04039623bec6bdba1"],["F:/WuYongZhi/public/undefined/2265490893/index.html","79bb82cb87ea08c2ecab6997a85aff62"],["F:/WuYongZhi/public/undefined/2416123799/index.html","c7254f1b95a9e3027f4f1239f09c1ff0"],["F:/WuYongZhi/public/undefined/2578471232/index.html","1885ce39cdab33486c087fbe58185844"],["F:/WuYongZhi/public/undefined/2733374787/index.html","90740b00f957bc7621ecbe29c886e856"],["F:/WuYongZhi/public/undefined/2841450072/index.html","d9e2c9fdd80b5e2ae74bd2fe924205ce"],["F:/WuYongZhi/public/undefined/2865054090/index.html","03261c94ed010baa711f3822026d9e15"],["F:/WuYongZhi/public/undefined/2874389552/index.html","23a18014984f60fa5884eb79bae80507"],["F:/WuYongZhi/public/undefined/293364186/index.html","63ddc19bef60729feac1eed18ef17b16"],["F:/WuYongZhi/public/undefined/3456093329/index.html","4d72c0a460c37e4af05bcdd31f27c5ec"],["F:/WuYongZhi/public/undefined/3553923324/index.html","83d1f8e7fb4ba937124232f79c6f70a5"],["F:/WuYongZhi/public/undefined/3575515497/index.html","4eadd5e3bba2cff07b55f92cb4c4a295"],["F:/WuYongZhi/public/undefined/402975490/index.html","2593376b6127e5239a7ac8ed6e1b3f4c"],["F:/WuYongZhi/public/undefined/4099807269/index.html","e9895a83b0e947c6897910269915e079"],["F:/WuYongZhi/public/undefined/521877410/index.html","36dd7e65576560cb24abe48819f6ad98"],["F:/WuYongZhi/public/undefined/978701696/index.html","478bd320dc5a99d9b2f7d15580c218b4"],["F:/WuYongZhi/public/undefined/999270176/index.html","3a31f79884f29325d98a639c9f1f3b3c"],["F:/WuYongZhi/public/word/index.html","1029bcfe953799168ce56aabfe5b5b0a"]];
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







