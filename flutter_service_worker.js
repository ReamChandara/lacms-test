'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f5553d430571dd57caed68e03aed7288",
"version.json": "c693ba222d2f180b4ba3ed05ca62f66e",
"index.html": "d6dd26bd7048f2e645222f03c23d3438",
"/": "d6dd26bd7048f2e645222f03c23d3438",
"main.dart.js": "0cbbcdaf862e75b46207bcd86e2d4ebc",
"flutter.js": "2a09505589bbbd07ac54b434883c2f03",
"favicon.png": "7d7284ae8ba5b4d5c3c56eb3b90953fc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7ab265016537c900ffb9c7d85786fd6e",
"assets/AssetManifest.json": "dd7ae7117af47b07f3059fec9df0f380",
"assets/NOTICES": "ed57e3792352f6f7fd2b2d30f3376eb0",
"assets/FontManifest.json": "89c2b93a023991d489b7789c11827bc2",
"assets/AssetManifest.bin.json": "1a25a000c92def3278d918acfcf899d0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "dff2f5147046df570f16d361243b7eea",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "164af00c924ce047977cc1b7707fa246",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "6c35abe7cfd441aa49e95917c43c8f04",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "07c11ed324cc8f69cf4cb172c639c3a6",
"assets/fonts/MaterialIcons-Regular.otf": "99cc9fd0b072f68c45056bcf735a21a4",
"assets/assets/image/email.png": "bc4bc0957c3f37a0663b0f1ad25a68f3",
"assets/assets/image/warning.png": "dc072f5a89cb7a46bde16156f2764611",
"assets/assets/image/factory.png": "428a302aa7a4458cc2b06a174bc123aa",
"assets/assets/image/telegram.png": "321607c074ca0ecd31faaabec1592802",
"assets/assets/image/hero-bg.png": "26142aaf9a4a06afeda3ef31b41ac2c0",
"assets/assets/image/website.png": "c4dd566830d497eed8780e779cf2fd16",
"assets/assets/image/certificate.pdf": "4233442031451c18686994e234402907",
"assets/assets/image/logosplash.png": "1a6a83d01338c85562c00c084550ba97",
"assets/assets/image/pdf_logo.png": "6e0d7b3e62a1a503b708c6b606420371",
"assets/assets/image/excel_logo.png": "cabf92de69a4ab2bbc13968027cd960c",
"assets/assets/image/file.png": "c5c65b80803c65b9963caab7dfcd318d",
"assets/assets/image/english_flag.png": "f646ee2fb7231f6470e2677756ed2298",
"assets/assets/image/cambodia_flag.png": "15bec9f455e7b48fde646de02e2dfcc6",
"assets/assets/image/worker.png": "fe60c219357a6beb0ace93dfb3e8e89a",
"assets/assets/image/undraw_Page_not_found_re_e9o6.png": "c76c8dd46f67128b462344709ae462ed",
"assets/assets/image/error.png": "f38f633f7a43f2474f4cc53af1ae2817",
"assets/assets/image/image.jpeg": "7f22e646889498bc7da53501ecf63a38",
"assets/assets/image/phone.png": "99ec85d3b7cb537ae4f5263603b55dac",
"assets/assets/image/Ministry_Invoice_FWP01340419-1709641400.pdf": "7482ba0c9df4d999a956bb0aeeab1299",
"assets/assets/image/facebook.png": "02e92b97687c09fc41c206faa054674d",
"assets/assets/image/imageAndPDF.png": "27dab9bd7239fee14269be003096faaa",
"assets/assets/image/LogoMLVT.png": "7d7284ae8ba5b4d5c3c56eb3b90953fc",
"assets/assets/icons/sort_down.png": "2c75439830acc7f391328045a167296c",
"assets/assets/icons/info.png": "b0e52a2a6e487ca8c313258c29802953",
"assets/assets/icons/sort_up.png": "b47ae191928bf70b5828accb2944e24b",
"assets/assets/icons/data-processing.png": "7fa3fd1765e8ac9a8561703acfb8b943",
"assets/assets/icons/sorting.png": "da043752a9c2c4397e42b031650d22e3",
"assets/assets/icons/user.png": "810033bc125abd69a2bb61b608316260",
"assets/assets/icons/employment.png": "ff772e8393e90a60c897e054a091176b",
"assets/assets/icons/teamwork.png": "1063efbb94435bd25e57943169d2c9aa",
"assets/assets/icons/request.png": "4a1f236b2acc2df2efb1c24fe520bb2b",
"assets/assets/icons/Excel.png": "5adf3a88f4a5dacb6d1e896d1386d1e5",
"assets/assets/icons/dashboards.png": "6186e931fda6bbeec07d881d6f96328f",
"assets/assets/icons/group-users.png": "8caf3497d8121670ce9e46f19962f292",
"assets/assets/icons/faq.png": "7bfba3bb93bc634fd1b8e198d2b1972b",
"assets/assets/icons/browser.png": "b10ac2b74b1f8052198af5a50d985529",
"assets/assets/icons/404-error.png": "bf56f6d2e82d4cce6f26a10bea6feb83",
"assets/assets/icons/contract.png": "4b82917048026a3f4ddd4b38a4a5926b",
"assets/assets/icons/csv.png": "a49eeac0158c91bae9587680cd249fcb",
"assets/assets/doc/employment_certificate.jpg": "15a73609e2afb90613ff54408a406cb8",
"assets/assets/doc/prokas_wp.jpg": "c86e8300e203791a355b6b8f0aa1b683",
"assets/assets/doc/prokas_04_2022.jpg": "9fb21ce74d933322ac7a9dc456292f5e",
"assets/assets/doc/Appendix_Sample_Worker_List_FV.xlsx": "6a504916764dced4679961cfd94edda7",
"assets/assets/doc/prokas_new.jpg": "ceda29495323f69cb855e901ecdecc72",
"assets/assets/doc/Appendix-Sample-Bio-Import-List-FN-updated.xlsx": "99ad43a0527f50c0ca5ab241f6a96fe6",
"assets/assets/doc/prokas_09_2023_new.jpeg": "6c704e980d98fa79b99c02c2e807b410",
"assets/assets/fonts/Battambang%2520Bold.ttf": "d181e97d6231f4cb6cacbfcc84c7dc3e",
"assets/assets/fonts/SourceSansPro-Bold.otf": "1a2a157bfd94b250884c09f1bd57a0bb",
"assets/assets/fonts/Moul-Regular.ttf": "904c0b4523c3b82d85fde9f62f1a556c",
"assets/assets/fonts/SourceSansPro-Regular.otf": "5e1d162e634a102d7da8db597825a764",
"assets/assets/fonts/KhmerOSBattambang-Regular.ttf": "a680c425b92d3705c1b96c424c4b7208",
"canvaskit/skwasm.js": "4087d5eaf9b62d309478803602d8e131",
"canvaskit/skwasm_heavy.js": "dddba7cbf636e5e28af8de827a6e5b49",
"canvaskit/skwasm.js.symbols": "ffc07b382ae1e2cf61303ec4391ea4ad",
"canvaskit/canvaskit.js.symbols": "05e7032ed1a877f972cbcf13b3ae2a83",
"canvaskit/skwasm_heavy.js.symbols": "ea201db27134823febd57da1f31df2ec",
"canvaskit/skwasm.wasm": "bf03908c64926317680317decd585425",
"canvaskit/chromium/canvaskit.js.symbols": "8fce22f4d72ad11f225a4999cd247660",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "79edcb1b72306f512e90f3e5e4063b40",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "dfd8c2ccd4a55ef5eb15ea5526ce88c7",
"canvaskit/skwasm_heavy.wasm": "a8695a49f5aee9479f64b69a90674703"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
