'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/android-icon-48x48.png": "d28a6c853677a06b33bdd75bbcc5b580",
"icons/android-icon-192x192.png": "b47de1e2f2442f94f73e890667e2744b",
"icons/ms-icon-150x150.png": "57bb98b536c027973b9cf9f820e7a9b5",
"icons/android-icon-72x72.png": "a8288707ba1d45d53a53cc0a80fd4e2f",
"icons/favicon-96x96.png": "4c991a134910dc633d3ce602a0df96a2",
"icons/apple-icon-120x120.png": "7dcd6cc85563af771a6c4ecb26496dfd",
"icons/ms-icon-310x310.png": "3ff54fd84dc90d7a28c76c52df2a7ab3",
"icons/android-icon-36x36.png": "3bd285f74c83c3b7ef88d092a0583f1f",
"icons/apple-icon-72x72.png": "a8288707ba1d45d53a53cc0a80fd4e2f",
"icons/ms-icon-70x70.png": "79f41d28a567d88fc2e10018e516d2c9",
"icons/apple-icon-152x152.png": "3b6ddae51db70c3906939b2e4dae1d41",
"icons/favicon-16x16.png": "c33b82a757c13f8386fa977a6f4146a4",
"icons/ms-icon-144x144.png": "a976d018de7fad407ffe4df3ad50c5f8",
"icons/apple-icon-57x57.png": "dacbe57818057261fe466153dddd27f1",
"icons/apple-icon-precomposed.png": "643f02e995c3a38470566b6fab95aa2b",
"icons/apple-icon-60x60.png": "787f242bb39947ca625628da4f70b429",
"icons/apple-icon.png": "643f02e995c3a38470566b6fab95aa2b",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "a976d018de7fad407ffe4df3ad50c5f8",
"icons/apple-icon-180x180.png": "c7dba35fece7f3547fd0b81bb938b217",
"icons/android-icon-96x96.png": "4c991a134910dc633d3ce602a0df96a2",
"icons/apple-icon-114x114.png": "e87bc5b47cb96efb3b616ebd5ba75b9d",
"icons/favicon-32x32.png": "93b9290b2f259372ea15bc9a3f36864d",
"icons/apple-icon-76x76.png": "fef41b049217d7f5dd25228d1d6155fd",
"icons/apple-icon-144x144.png": "a976d018de7fad407ffe4df3ad50c5f8",
"index.html": "e8e2207f2b5d4136280a33d8d9ba48c3",
"/": "e8e2207f2b5d4136280a33d8d9ba48c3",
"favicon.ico": "4adfc09679e4405c553d0e8611cd4620",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/AssetManifest.json": "b438655be9b61322a59c0cdf1c6758c9",
"assets/fonts/IBMPlexSans-Light.ttf": "29047654270fd882ab9e9ec10e28f7c5",
"assets/fonts/IBMPlexSans-Regular.ttf": "c02b4dc6554c116e4c40f254889d5871",
"assets/fonts/IBMPlexSans-Bold.ttf": "5159a5d89abe8bf68b09b569dbeccbc0",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/IBMPlexSans-LightItalic.ttf": "453b2bbf7ad0bb52a93f64ac96641f24",
"assets/fonts/IBMPlexSans-Medium.ttf": "ee83103a4a777209b0f759a4ff598066",
"assets/fonts/IBMPlexSans-ExtraLightItalic.ttf": "71efb00c2fc462eb4c4f778dac53e6dc",
"assets/fonts/IBMPlexSans-BoldItalic.ttf": "ee425cc83f37323665790c89758cf359",
"assets/fonts/IBMPlexSans-Thin.ttf": "969246a285e76a59329d5e003f1a28a0",
"assets/fonts/IBMPlexSans-SemiBold.ttf": "1ca9107e7544d3424419585c7c84cb67",
"assets/fonts/IBMPlexSans-Italic.ttf": "40bbef08ca6f6edea2a9a9e882541ce0",
"assets/fonts/IBMPlexSans-ExtraLight.ttf": "dc4c7cbc44c833f9a7540a6464a015fa",
"assets/fonts/IBMPlexSans-MediumItalic.ttf": "eb7dadea8e7c37ce1a1406045dda7c1e",
"assets/fonts/IBMPlexSans-SemiBoldItalic.ttf": "25178032f9e824996f04622926833459",
"assets/fonts/IBMPlexSans-ThinItalic.ttf": "984c6ee79e119ff312f599e0e1b21932",
"assets/assets/background_landscape.jpg": "74a7e87f8d0cd413bd95bfa6d71f7d13",
"assets/assets/yf_icon_black.png": "27cb51d7d390421f5a4c6ea773f094d1",
"assets/assets/yf_logo.png": "d9138e3e7c271210a0474283f7c76347",
"assets/assets/background_portrait.jpg": "289d757e3ee08515ba71c6575c6f4603",
"assets/NOTICES": "d70cc31e3d67cd7c97778fb9f2b024c9",
"assets/FontManifest.json": "c7cb1e13688b5fc92618e361a2ef77bd",
"assets/data/opensource.json": "f197d3573a2295691bf822b222c4eef2",
"assets/data/news.json": "bf719a62189025281af8a88c19dd6498",
"assets/data/apps.json": "e9c3e559ba053e9875cf43cde8fa87fe",
"assets/data/about.json": "f345907674448373a31bee4045bddf07",
"version.json": "c70bfeb715be1a57bd98bd1e1beb2817",
"manifest.json": "2474c6422f2b7e0b7dfb76e97f1ab066",
"main.dart.js": "a4d0cc044385ec585761195a9443dc12"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
