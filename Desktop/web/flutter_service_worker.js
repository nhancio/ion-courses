'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0d02f5e0cc82af2148665296f7b0d8d4",
"assets/AssetManifest.bin.json": "2669b4946b974085ac37100264967407",
"assets/AssetManifest.json": "5e4cfac9caf44f9d03d90a480c33ed8d",
"assets/assets/icons/ai.png": "759dc3c124e614a474921f0780bb57bf",
"assets/assets/icons/alcoholic.png": "aad84f14ee44c706eaaaeebbbe08e1e7",
"assets/assets/icons/danile.png": "8398b2180acadcfd6a9ccbd72d58a524",
"assets/assets/icons/delete.png": "95b55fb72ced6a120056a8f2ec00f702",
"assets/assets/icons/flag.png": "7f9419013adb9421e0c1e055f5a83c6c",
"assets/assets/icons/friends.png": "d71a6f24e2dac663f8362f2b740531c1",
"assets/assets/icons/google.png": "9aede332b5a5bfbbbbc2d0312d7d7b33",
"assets/assets/icons/growth.png": "2abb764997fcf29af883d91344790320",
"assets/assets/icons/gym.png": "18f78f57d33114b48e579989acd3ac45",
"assets/assets/icons/icon.png": "ad9671fb0ad60e2bbe8dbb79c3a9ea90",
"assets/assets/icons/laura.png": "505a77442c298be983e2f32e598f7b6e",
"assets/assets/icons/mic.png": "5de3fae448ff7042a6a2a8038873d2da",
"assets/assets/icons/mike.png": "1a7eb0cc85ed97dd14f9d0fcc3a038e8",
"assets/assets/icons/music.png": "54fd2ee54e2e30401e7695fefa74af25",
"assets/assets/icons/non_smoker.png": "32f80241f0292402487a39ca4e2c8ead",
"assets/assets/icons/party.png": "7c54edb31cbfdc55e6982aa4e20ffc40",
"assets/assets/icons/pause.png": "b90fb89cd2548a3bbc461fafc68332f5",
"assets/assets/icons/pet.png": "22ad94b7e893341d5b01b9d59623b920",
"assets/assets/icons/reload.png": "502b173f9c54810ae43622f55feaafc3",
"assets/assets/icons/robot.png": "16e661d04382f7b511bb43f5cd2b6a70",
"assets/assets/icons/shopping.png": "88c81326cccefb6cd8d187193523da9b",
"assets/assets/icons/sport.png": "19b3c9e264605992160eed6a6fbd4631",
"assets/assets/icons/studious.png": "2da8a9d7e95e1b232887be9062c57b6a",
"assets/assets/icons/tome.png": "79df841f229321c9df1a44f6225906dc",
"assets/assets/icons/travel.png": "1e4cc76265553fca1efcf265e6584973",
"assets/assets/icons/vegan.png": "0f79e0c1c957ffbcc18ed33e884e44f7",
"assets/assets/icons/yoga.png": "6e1d990c093e188b4940d5885c22fbd1",
"assets/assets/images/andera.png": "c6af153cf5d767c60f345b1025e593a0",
"assets/assets/images/bad1.png": "c50df353858b11d9026d5da41c4f10b3",
"assets/assets/images/bad2.png": "98d6edc611d728534bf37d007fed06b2",
"assets/assets/images/bad3.png": "3f190a44c326f378bbb07358215ec2e1",
"assets/assets/images/bad4.png": "a870a000234242af7275d846b11a8812",
"assets/assets/images/couple_sitting.png": "facaedf6efa75fdc055c8032855ec67a",
"assets/assets/images/daniel.png": "b63fd6e99dad741e59e8397d4e169dfe",
"assets/assets/images/first_icon.png": "b8f9ef32e922a532b163e93161a19b00",
"assets/assets/images/first_page.png": "bc26938b63f7eaead4ff722f22155fc8",
"assets/assets/images/home_room.png": "ce4161930361e1efaf9fdad34ade307a",
"assets/assets/images/house.png": "a8140165dc833bda834587e84933ff5a",
"assets/assets/images/img.png": "9b9ce0a131a944fcd9d61b2b115fadda",
"assets/assets/images/india.png": "7f9419013adb9421e0c1e055f5a83c6c",
"assets/assets/images/john.png": "46e574aec907b67becbd57f5b757eb0f",
"assets/assets/images/list_room.png": "b8fe6031b3c49ad357af7358c7f3d1cc",
"assets/assets/images/look_room.png": "bd5bb67029089334fb53bcf771784b21",
"assets/assets/images/look_roommate.png": "3132cf056d73cb158a02646a58945050",
"assets/assets/images/man.png": "dbcff15383e7fab468851063b5a496a8",
"assets/assets/images/room.png": "f3a54365ec0681a4edd24c5d39edff91",
"assets/assets/images/sara.png": "c53034e3d45c5e7f74eb2e5ca3b1dff0",
"assets/assets/images/sohan.png": "dbcff15383e7fab468851063b5a496a8",
"assets/assets/images/user.jpg": "e496d7ccf54886ee88eaab0717c27250",
"assets/assets/images/welcome.png": "3ab2a274c594421804136c78c19855e5",
"assets/FontManifest.json": "f598b4392ce449f90edc471731d22eb3",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/NOTICES": "40611049bbdd0fc76d68b7f26aeb66a8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase_config.js": "ca15690f0ea593101c24a8bfa87b0d28",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "f8ab265bd04e48959813ca02cd2215d7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "09b2fdaeb6f3c813a7fd055795af0b35",
"/": "09b2fdaeb6f3c813a7fd055795af0b35",
"main.dart.js": "3cae6836631dca97062c324ffac80769",
"manifest.json": "5d1bbc57c5c2734fcd789f034d073dc3",
"version.json": "ca9c557c539fde7ea942c0802f64a13a"};
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
