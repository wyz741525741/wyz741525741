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

var precacheConfig = [["F:/WuYongZhi/public/about/index.html","96d6285c516353c332ee24a45ee45ca5"],["F:/WuYongZhi/public/archives/2019/01/index.html","4c31a87f9a824dcc213aed46a63cf72a"],["F:/WuYongZhi/public/archives/2019/02/index.html","47b53ab7cb2e70527fac567a9ad7f211"],["F:/WuYongZhi/public/archives/2019/03/index.html","277164108e27c4923f1bfdc19c6a3086"],["F:/WuYongZhi/public/archives/2019/04/index.html","fea6c25053e58fc874c21d32fb502d37"],["F:/WuYongZhi/public/archives/2019/05/index.html","8c1f9a000a8693954d1a42f285a6e439"],["F:/WuYongZhi/public/archives/2019/06/index.html","51a2ba6c1d0108ac4246c59e87caaa1d"],["F:/WuYongZhi/public/archives/2019/07/index.html","ca1510c7a6945e2927be7be050e6d0ab"],["F:/WuYongZhi/public/archives/2019/08/index.html","7c725d98bb0b364568ab58c859ce3672"],["F:/WuYongZhi/public/archives/2019/09/index.html","b8830d05b5fa04f0fc7f3a76c5d6b496"],["F:/WuYongZhi/public/archives/2019/10/index.html","a28ce9b6930e6be4cb9ae1bf0f338ea6"],["F:/WuYongZhi/public/archives/2019/index.html","68946acfe05c5276915da95fdbb22ed2"],["F:/WuYongZhi/public/archives/2019/page/2/index.html","c078ccacb32132d0d6ab77f1da3a04b7"],["F:/WuYongZhi/public/archives/2019/page/3/index.html","769cd03bd27012db3a040d245e00972f"],["F:/WuYongZhi/public/archives/2020/02/index.html","89b8d40e73f06c2b669b40fb727ac865"],["F:/WuYongZhi/public/archives/2020/03/index.html","6700686b89cb92f60e87b60469c34964"],["F:/WuYongZhi/public/archives/2020/04/index.html","c22d6f0dd4c8218b1f2b4d3cc838e5e4"],["F:/WuYongZhi/public/archives/2020/index.html","6818acc0c36eca10e4102828feae0af6"],["F:/WuYongZhi/public/archives/index.html","8e442b7b845e0bd56ff0d8f2d3f5ffe5"],["F:/WuYongZhi/public/archives/page/2/index.html","206b48e8f4780d4c829b69de72d2d2ad"],["F:/WuYongZhi/public/archives/page/3/index.html","eefb68e362896205602c2818673527ed"],["F:/WuYongZhi/public/categories/index.html","d44b9e6a9eda8f5b513bf32482641fc0"],["F:/WuYongZhi/public/categories/事故案例/index.html","bb15251a2c7160d7d97c2c5fa0842bd8"],["F:/WuYongZhi/public/categories/工作日志/index.html","77eebbf911b8c9c67f449163a893aeb8"],["F:/WuYongZhi/public/categories/打发时间/index.html","de5a859d97f07caab823dcb164ade025"],["F:/WuYongZhi/public/categories/瞎记乱写/index.html","e53916091cc95e2935e06aa6fdd11c92"],["F:/WuYongZhi/public/categories/轮机技术/index.html","ccb06fa65918dc1561e302af3b74dbbe"],["F:/WuYongZhi/public/categories/阅读识字/index.html","57dd691a6d4cce21d316ba057d813740"],["F:/WuYongZhi/public/css/index.css","34dad4246088b8910453131af9371060"],["F:/WuYongZhi/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/WuYongZhi/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["F:/WuYongZhi/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["F:/WuYongZhi/public/img/alipay.jpg","b98449cfb93e5a6edb3287cf28bb6148"],["F:/WuYongZhi/public/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["F:/WuYongZhi/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["F:/WuYongZhi/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/WuYongZhi/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/WuYongZhi/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/WuYongZhi/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/WuYongZhi/public/img/wechatpay.jpg","d969edca8a8da7643ce77f2fd97da37d"],["F:/WuYongZhi/public/index.html","7082a44440bcc9ac53df8fc6ebd7f208"],["F:/WuYongZhi/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["F:/WuYongZhi/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/WuYongZhi/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/WuYongZhi/public/link/index.html","a1221741036a01fc1b9ee074fa2d81ee"],["F:/WuYongZhi/public/movies/index.html","70520642690d80082601319dfe04558c"],["F:/WuYongZhi/public/page/2/index.html","e329f28f0653d199ff2f2b424bc04de6"],["F:/WuYongZhi/public/page/3/index.html","a032c30211e02585a948d7a6e42e7597"],["F:/WuYongZhi/public/tags/1624-1公里/index.html","14120cb0d405661ab866682eb188b593"],["F:/WuYongZhi/public/tags/GoldenDict/index.html","0dc62fdcc3b148ad411e3161b292be03"],["F:/WuYongZhi/public/tags/HEXO/index.html","cc73ae25e73c2f336b5b9e5f8ce1680a"],["F:/WuYongZhi/public/tags/MAN-B-W-7S70ME-C8-2/index.html","a361823359f609f63ba2107efb103b3b"],["F:/WuYongZhi/public/tags/MaterialX/index.html","d1978a50b422aa20aef5c66ca2bd870e"],["F:/WuYongZhi/public/tags/Photoshop/index.html","85ed23f9c3f3a84168b03b82712391f2"],["F:/WuYongZhi/public/tags/Pjax/index.html","71c15d61d1d2f7375676555b21f11b51"],["F:/WuYongZhi/public/tags/Valine/index.html","7ded7d9f04754035a6aa29b8d5fa0e05"],["F:/WuYongZhi/public/tags/index.html","840fbacbfa81971590cb978ee40de350"],["F:/WuYongZhi/public/tags/win10/index.html","8851e4ed8e49017b0b20323dcaf357a9"],["F:/WuYongZhi/public/tags/上船/index.html","c193010fffea54360cc294f6557e6bee"],["F:/WuYongZhi/public/tags/上船必备/index.html","216eebddfb2dcc4d210e0d5be5b9ffa5"],["F:/WuYongZhi/public/tags/两性/index.html","216d4695ba8784635322594173f98716"],["F:/WuYongZhi/public/tags/二氧化碳/index.html","585874a267d39358d8cf6dcd67a249fd"],["F:/WuYongZhi/public/tags/交接/index.html","948c5fc1e58e7131cbefd8cc06515cc4"],["F:/WuYongZhi/public/tags/交接班/index.html","f4cf3e4ffefad0c47dd5c2e2e13f344d"],["F:/WuYongZhi/public/tags/优化/index.html","a7bffbea6803b8a15810be949b0efcf6"],["F:/WuYongZhi/public/tags/修图/index.html","6ea25e0bd0702c6034ffbafe89696176"],["F:/WuYongZhi/public/tags/俯卧撑/index.html","101c73e9cad7941fea115b4500a282ed"],["F:/WuYongZhi/public/tags/健身/index.html","b1b49d93f0ea3a8b86cc04b53d6a8563"],["F:/WuYongZhi/public/tags/分油机/index.html","57159c2c79fb70c52c2e9f3192d92f66"],["F:/WuYongZhi/public/tags/博客/index.html","0d09b343bc48dca0c19650d2a80d77dc"],["F:/WuYongZhi/public/tags/卸载/index.html","7fa9396a5be43b01c8cda5048b62d15b"],["F:/WuYongZhi/public/tags/商店/index.html","b8777716169fdfc4b4f497f27228900c"],["F:/WuYongZhi/public/tags/喷射泵/index.html","24f314a38d51d1a5e2988be626c3f0f7"],["F:/WuYongZhi/public/tags/回顾/index.html","f0ea2b3638a87c4157b66dea3aead4ae"],["F:/WuYongZhi/public/tags/培训/index.html","dc901ccc59f6a4728da86309101015a2"],["F:/WuYongZhi/public/tags/增压器/index.html","772a0c87cb472e9df7770b37dbcc0947"],["F:/WuYongZhi/public/tags/夫妻/index.html","aa42a5bafd0cbceb84f463b8eefbe553"],["F:/WuYongZhi/public/tags/失眠/index.html","4c029e1b4b943c45ab5b310e5b89e778"],["F:/WuYongZhi/public/tags/女孩/index.html","a33064359c2d65cb5ac7844551ce9af1"],["F:/WuYongZhi/public/tags/婚姻/index.html","ff885ea462453e41ce9f5d6ee97e159e"],["F:/WuYongZhi/public/tags/工作/index.html","ddc874cd4b962a5fc22e6a025bc6c5e8"],["F:/WuYongZhi/public/tags/应用/index.html","901e90f428312770b4d036d19255dd64"],["F:/WuYongZhi/public/tags/必备软件/index.html","f5d7296d9d6dbc80122be90d40e97b15"],["F:/WuYongZhi/public/tags/快捷键/index.html","3d6adf1d87a7fd9e5917331e4ed4e5d1"],["F:/WuYongZhi/public/tags/恋爱/index.html","9c76654db1c6319fb53c2a41a10152d2"],["F:/WuYongZhi/public/tags/恢复/index.html","d7e2c8039de63f2c6447bf45a7db2ec3"],["F:/WuYongZhi/public/tags/情侣/index.html","3eb2bf764e0a843f30f911775ec3a69f"],["F:/WuYongZhi/public/tags/情商/index.html","ae8a94f5383c71cc11f12c8ddb0e5c5d"],["F:/WuYongZhi/public/tags/扫舱/index.html","c0367f9e5fa3849959170624614a14bf"],["F:/WuYongZhi/public/tags/排气阀/index.html","30a25e1905d858fe947b02befb4ce7b1"],["F:/WuYongZhi/public/tags/接船/index.html","926d6b0c64a439ec16134d24d58fe522"],["F:/WuYongZhi/public/tags/提职三管轮/index.html","ccf340b4d30e0b509d81344501ea1da5"],["F:/WuYongZhi/public/tags/故障/index.html","87cdd6d914b37057bd0ec7c018a26b30"],["F:/WuYongZhi/public/tags/故障分析/index.html","0269beff217a37e16570d73cc2025b03"],["F:/WuYongZhi/public/tags/故障处理/index.html","60b0366a23084ac43f20e21b2c982559"],["F:/WuYongZhi/public/tags/新年/index.html","43e56308fef00a905999f6660a35abd5"],["F:/WuYongZhi/public/tags/旋杯燃烧器/index.html","0335090aa0a0a42ba3baef33d31bd134"],["F:/WuYongZhi/public/tags/机工提职/index.html","45e482531bb5e7cf875ac94586205aeb"],["F:/WuYongZhi/public/tags/污油水/index.html","9d739b59528d1760cfcfc901686acb1e"],["F:/WuYongZhi/public/tags/油水分离/index.html","72e84c0a9d3ea2a7402f0309d2cea1c8"],["F:/WuYongZhi/public/tags/泄漏事故/index.html","585d3441f139d693b3b47b9f94a01444"],["F:/WuYongZhi/public/tags/海员/index.html","4ef237809f6feecde36f1c0ad9a4dc70"],["F:/WuYongZhi/public/tags/点火失败/index.html","b260a838ab5e6d60513bb32c8e45d604"],["F:/WuYongZhi/public/tags/爱情/index.html","1477b1852a8905a7d548f5c9d85e2dba"],["F:/WuYongZhi/public/tags/瓦锡兰/index.html","2ad1144a0185e0a245c06f76216ee938"],["F:/WuYongZhi/public/tags/生活/index.html","918b96c64c878e0d0452b7858d8c571a"],["F:/WuYongZhi/public/tags/电喷主机/index.html","c4a1ce8f703ed9bbdf20b6d4385e3561"],["F:/WuYongZhi/public/tags/电喷柴油机/index.html","afd537c06b3829f93b01cb395f5efb33"],["F:/WuYongZhi/public/tags/疫情/index.html","c1baa72edf04280ec9c3505aebbf1b25"],["F:/WuYongZhi/public/tags/神华/index.html","aa00f3a237d7c852168780bfc4b5098d"],["F:/WuYongZhi/public/tags/神华538/index.html","900e7ec2d48dbe7572a3fc5a513db9b1"],["F:/WuYongZhi/public/tags/离心滤器/index.html","3ab099f0b972cb757a1f5dae2d0ae6b6"],["F:/WuYongZhi/public/tags/离线词典/index.html","0932f797404264e8d4d811570905f5bb"],["F:/WuYongZhi/public/tags/等待/index.html","770441d050faf00f7da0094192b7fe2b"],["F:/WuYongZhi/public/tags/管理心得/index.html","be104d9e326a34a1172bdbd77799345b"],["F:/WuYongZhi/public/tags/经验/index.html","6bb4a9b1d282cb2408acca89624bbe3d"],["F:/WuYongZhi/public/tags/结婚/index.html","241a7337cd02c0cd84ff05d8c7e8dc72"],["F:/WuYongZhi/public/tags/维修/index.html","9402520cf3e8c82adaa6ab7ed26c6cb3"],["F:/WuYongZhi/public/tags/老七/index.html","8f83ba9c90c7dc746e76337e4f881cf4"],["F:/WuYongZhi/public/tags/职业/index.html","8f4a62e3693a24768649ea10edd8e8aa"],["F:/WuYongZhi/public/tags/自省/index.html","89e5b3fefbbbd7487f63267c9600bbea"],["F:/WuYongZhi/public/tags/自荐信/index.html","fb1993dc3c9d46d5a3ebfd287855731f"],["F:/WuYongZhi/public/tags/船舶污染/index.html","afdafb6fe0aaa2d75a85cc72670e8d32"],["F:/WuYongZhi/public/tags/船舶设备/index.html","3a4f3bddb2957dd50321fdbd1a957559"],["F:/WuYongZhi/public/tags/规划/index.html","46f62eed749a64ded7b219ccb57b56e9"],["F:/WuYongZhi/public/tags/角度编码器/index.html","3d35d8f1cbdbf4d06a7e21c189f429ee"],["F:/WuYongZhi/public/tags/误删/index.html","82715f5be672aa5e90e0b5bac8a76204"],["F:/WuYongZhi/public/tags/谢谢/index.html","e6bb3299219e778f7bb41375ba3bcd48"],["F:/WuYongZhi/public/tags/软件分享/index.html","ff8241e720e67303d266f6ecbf8f8822"],["F:/WuYongZhi/public/tags/邮件通知/index.html","5f02ab1c7ac366ada16ce81832b4c992"],["F:/WuYongZhi/public/tags/重装/index.html","4eb84ae04f3d4f9a13bf62fc3b6aba90"],["F:/WuYongZhi/public/tags/金海翔/index.html","06539e425295ad4139063fbb8a229b1d"],["F:/WuYongZhi/public/tags/金钱/index.html","6aa3fc37a851c695451c8e53a6843b79"],["F:/WuYongZhi/public/tags/锅炉/index.html","eed471bb18dcb2e5604a8562b993660f"],["F:/WuYongZhi/public/tags/锻炼/index.html","c00fb5213f33fac6b68586c3a890f665"],["F:/WuYongZhi/public/tags/防污染/index.html","a19c9ee9d0ef46e72e2fdef712173e71"],["F:/WuYongZhi/public/tags/面试/index.html","1d7e8c41fd023056409aaefb8cd74a8f"],["F:/WuYongZhi/public/undefined/101660557/index.html","267ae05efa647caa27e3acea098bc379"],["F:/WuYongZhi/public/undefined/1034342947/index.html","c3fca75bb18fb9bf6945cc7fe8013d2b"],["F:/WuYongZhi/public/undefined/135746830/index.html","e8a2ab862e00553d9f276aeb582e3c20"],["F:/WuYongZhi/public/undefined/1407782573/index.html","a9bed3ef9061b474e2789cfea81bedf1"],["F:/WuYongZhi/public/undefined/1470485030/index.html","2e84a8f40170d2216d20509e444e828b"],["F:/WuYongZhi/public/undefined/1500021339/index.html","86b8341e54a26510dcbea36cde88523d"],["F:/WuYongZhi/public/undefined/1563181924/index.html","df78e566fa5911bc47df9ddc495dd9ee"],["F:/WuYongZhi/public/undefined/157123478/index.html","cfc88a6e3f91ff620059141d1a7d6f4f"],["F:/WuYongZhi/public/undefined/1950196688/index.html","903cc216970583bd67fc72c6d02ebf12"],["F:/WuYongZhi/public/undefined/2066502676/index.html","d20211b2c26c156a3db50f3158e798ff"],["F:/WuYongZhi/public/undefined/2164511907/index.html","b68b89d470c33801f148b10cc8697af4"],["F:/WuYongZhi/public/undefined/2175512848/index.html","0065047b2ba52c8c11c3b3832b34d438"],["F:/WuYongZhi/public/undefined/2416123799/index.html","70f9845acd306f3c0ff5a0da52d763dd"],["F:/WuYongZhi/public/undefined/2578471232/index.html","1bdd13c2cda225df9af82db0b3a217e9"],["F:/WuYongZhi/public/undefined/2733374787/index.html","b7bf13a9723454236aad5b6a5e9fe0f6"],["F:/WuYongZhi/public/undefined/2841450072/index.html","ae64ac958e56aa03665c013ac4f0bdff"],["F:/WuYongZhi/public/undefined/2865054090/index.html","f9cbe47e9a0393b81c5e11c4e0c5b89f"],["F:/WuYongZhi/public/undefined/2874389552/index.html","5cc5425de43341e6cb7fd506d0bab97b"],["F:/WuYongZhi/public/undefined/293364186/index.html","1d67c04de9e18a9969e7ba93f8b534ac"],["F:/WuYongZhi/public/undefined/3194670239/index.html","e3cefee95743cfb92b92544d935b6135"],["F:/WuYongZhi/public/undefined/3355297568/index.html","c03c1ac2be0b3322ccba2b7cb2814b7b"],["F:/WuYongZhi/public/undefined/3456093329/index.html","b6001460350c945de54a8c36b2d48c39"],["F:/WuYongZhi/public/undefined/3553923324/index.html","181ae19ab76b2293bc0ced911f84e88c"],["F:/WuYongZhi/public/undefined/3575515497/index.html","0ae31456c4b9a229e89d6d1afa6cc021"],["F:/WuYongZhi/public/undefined/402975490/index.html","3d8f1c58f7c8172fdfcebb815fc92506"],["F:/WuYongZhi/public/undefined/4099807269/index.html","46ece1e38ef07c8622c864fe93d1a003"],["F:/WuYongZhi/public/undefined/521877410/index.html","7165c86df5b3167d455508dbf5283ffe"],["F:/WuYongZhi/public/undefined/978701696/index.html","0098ef1a1d719e46dfd159ea81213433"],["F:/WuYongZhi/public/undefined/999270176/index.html","4d832e925236b8b44ab22ba90181f044"],["F:/WuYongZhi/public/word/index.html","c194c6031b9cc3f6123ec30d2336861d"]];
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







