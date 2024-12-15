/****************************************************************************
 * Betterfox                                                                *
 * "Ad meliora"                                                             *
 * version: 133                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
****************************************************************************/
/** GENERAL ***/
user_pref("content.notify.interval", 100000);

/** GFX ***/
user_pref("gfx.canvas.accelerated.cache-items", 4096);
user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("gfx.content.skia-font-cache-size", 20);

/** DISK CACHE ***/
user_pref("browser.cache.disk.enable", true);

/** MEDIA CACHE ***/
user_pref("media.memory_cache_max_size", 65536);
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);

/** IMAGE CACHE ***/
user_pref("image.mem.decode_bytes_at_a_time", 32768);

/** NETWORK ***/
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.ssl_tokens_cache_capacity", 10240);

/** SPECULATIVE LOADING ***/
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);

/** EXPERIMENTAL ***/
user_pref("layout.css.grid-template-masonry-value.enabled", true);
user_pref("dom.enable_web_task_scheduling", true);

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
****************************************************************************/
/** TRACKING PROTECTION ***/
user_pref("browser.contentblocking.category", "strict");
user_pref("urlclassifier.trackingSkipURLs", "*.reddit.com, *.twitter.com, *.twimg.com");
user_pref("urlclassifier.features.socialtracking.skipURLs", "*.twitter.com, *.twimg.com");
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.uitour.enabled", false);
user_pref("privacy.globalprivacycontrol.enabled", true);

/** OCSP & CERTS / HPKP ***/
user_pref("security.OCSP.enabled", 0);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);

/** SSL / TLS ***/
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("security.tls.enable_0rtt_data", false);

/** DISK AVOIDANCE ***/
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("browser.sessionstore.interval", 60000);

/** SHUTDOWN & SANITIZING ***/
user_pref("privacy.history.custom", true);

/** SEARCH / URL BAR ***/
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.urlbar.update2.engineAliasRefresh", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.formfill.enable", false);
user_pref("security.insecure_connection_text.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", true);
user_pref("network.IDN_show_punycode", true);

/** HTTPS-FIRST POLICY ***/
user_pref("dom.security.https_first", true);

/** PASSWORDS ***/
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("editor.truncate_user_pastes", false);

/** MIXED CONTENT + CROSS-SITE ***/
user_pref("security.mixed_content.block_display_content", true);
user_pref("pdfjs.enableScripting", false);

/** EXTENSIONS ***/
user_pref("extensions.enabledScopes", 5);

/** HEADERS / REFERERS ***/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/** CONTAINERS ***/
user_pref("privacy.userContext.ui.enabled", true);

/** SAFE BROWSING ***/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

/** MOZILLA ***/
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("permissions.manager.defaultsUrl", "");

/** TELEMETRY ***/
//user_pref("datareporting.policy.dataSubmissionEnabled", false);
//user_pref("datareporting.healthreport.uploadEnabled", false);
//user_pref("toolkit.telemetry.unified", false);
//user_pref("toolkit.telemetry.enabled", false);
//user_pref("toolkit.telemetry.server", "data:,");
//user_pref("toolkit.telemetry.archive.enabled", false);
//user_pref("toolkit.telemetry.newProfilePing.enabled", false);
//user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
//user_pref("toolkit.telemetry.updatePing.enabled", false);
//user_pref("toolkit.telemetry.bhrPing.enabled", false);
//user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
//user_pref("toolkit.telemetry.coverage.opt-out", true);
//user_pref("toolkit.coverage.opt-out", true);
//user_pref("toolkit.coverage.endpoint.base", "");
//user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
//user_pref("browser.newtabpage.activity-stream.telemetry", false);

/** EXPERIMENTS ***/
//user_pref("app.shield.optoutstudies.enabled", false);
//user_pref("app.normandy.enabled", false);
//user_pref("app.normandy.api_url", "");

/** CRASH REPORTS ***/
//user_pref("breakpad.reportURL", "");
//user_pref("browser.tabs.crashReporting.sendReport", false);

/** DETECTION ***/
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);

/****************************************************************************
 * SECTION: PESKYFOX                                                        *
****************************************************************************/
/** MOZILLA UI ***/
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.aboutwelcome.enabled", false);
user_pref("browser.profiles.enabled", true);

/** THEME ADJUSTMENTS ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.privateWindowSeparation.enabled", false); // WINDOWS

/** COOKIE BANNER HANDLING ***/
user_pref("cookiebanners.service.mode", 1);
user_pref("cookiebanners.service.mode.privateBrowsing", 1);

/** FULLSCREEN NOTICE ***/
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.timeout", 0);

/** URL BAR ***/
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);
user_pref("browser.urlbar.trending.featureGate", false);

/** NEW TAB PAGE ***/
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.showWeather", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

/** POCKET ***/
user_pref("extensions.pocket.enabled", false);

/** DOWNLOADS ***/
user_pref("browser.download.manager.addToRecentDocs", false);

/** PDF ***/
user_pref("browser.download.open_pdf_attachments_inline", true);

/** TAB BEHAVIOR ***/
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("browser.menu.showViewImageInfo", true);
user_pref("findbar.highlightAll", true);
user_pref("layout.word_select.eat_space_to_next_word", false);

/****************************************************************************
 * START: MY OVERRIDES                                                      *
****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/wiki/Common-Overrides
// visit https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening
// Enter your personal overrides below this line:

///// BETTERFOX OVERRIDES /////
// PREF: enable urlbar group labels
user_pref("browser.urlbar.groupLabels.enabled", true);
// PREF: enable CSS prefers-color-scheme - enable dark mode reporting to sites
user_pref("layout.css.prefers-color-scheme.content-override", 0);
// PREF: enable Firefox Suggest
user_pref("browser.search.suggest.enabled", true);
// PREF: allow websites to ask you for your location
user_pref("permissions.default.geo", 0);
// PREF: enable ocsp verification
user_pref("security.OCSP.enabled", 1);



///// UNIQUE /////
//PREF: allow fullscreen ui without maximizing window
// user_pref("full-screen-api.ignore-widgets", true);
//PREF: allow extensions on restricted pages. 
// user_pref("extensions.webextensions.restrictedDomains", "");
// user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);
// PREF: Use Old Sanitize dialog (history scrub)
user_pref("privacy.sanitize.useOldClearHistoryDialog", true);
// PREF: Enable Mico for System Theme
user_pref("browser.theme.windows.accent-color-in-tabs.enabled", true);
user_pref("browser.tabs.allow_transparent_browser", true);
user_pref("browser.theme.native-theme", true);
user_pref("widget.windows.mica", true);
// PREF: enable tab group experiement
user_pref("browser.tabs.groups.enabled", true);
// PREF: disable search icon in urlbar
user_pref("browser.urlbar.scotchBonnet.enableOverride", false);
// PREF: enable resist fingerprinting in privacy mode
// user_pref("privacy.resistFingerprinting.pbmode", false);
// PREF: enable url tracker stripping in privacy mode
user_pref("privacy.query_stripping.enabled.pbmode", true);
// PREF: enable faster vertical scrolling
user_pref("mousewheel.default.delta_multiplier_y", 200);
// PREF: use webrender always (gpu)
user_pref("gfx.webrender.all", true);
// PREF: use Mozilla Location Services
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
// PREF: prevent keyboard shortcut hijacking
user_pref("permissions.default.shortcuts", 2);
// PREF: open bookmarks in new tabs always
user_pref("browser.tabs.loadBookmarksInTabs", true);
// PREF: enable fingerprinting resistance/protection
user_pref("privacy.fingerprintingProtection", true);
// PREF: disable ALT key bringing up titlebar.
user_pref("ui.key.menuAccessKeyFocuses", false);
// PREF: clear download and formdata
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
// PREF: disable autofill
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);

/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js
// Enter your scrolling overrides below this line:

/****************************************************************************
 * END: BETTERFOX                                                           *
****************************************************************************/
