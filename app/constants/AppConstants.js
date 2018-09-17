/** Service API */

export const SERVICE_API = {
    BASE_URI: '',           // entry the base uri
    API_VERSION: '',
    PAGINATION: 20,
    REQUEST_METHODS: {
        GET: 'get',
        POST: 'post',
        PUT: 'put',
        DELETE: 'del',
    },
    RESPONSE_STATUSES: {
        SUCCESS: 200,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        NOT_FOUND: 404,
        UNPROCESSABLE_ENTITY: 422,
        INTERNAL_SERVER_ERROR: 500,
        BAD_GATEWAY: 502,
        SERVICE_UNAVAILABLE: 503,
    },
};


/** Date & Time formats */

export const FORMATS = {
    JSON_DATE: 'YYYY-MM-DDHH:mm:ss.SSSZ',
    JSON_DATE_UTC: 'YYYY-MM-DDHH:mm:ss.SSS[Z]',
    TIME_SLOT: 'HH:mm',
    DATE_ID: 'YYYY-MM-DD',
    START_TIME: {
        HOUR_FORMAT: 'HH:mm',
        LONG_DATE_FORMAT: 'dddd, DD MM',
        SHORT_DATE_FORMAT: 'dddd (DD/MM)',
    },
    EXPIRATION_DATE: 'DD/MM/YYYY',
};

export const colors = {
    redColor: 'rgba(229, 0, 29, 1.0)',
    blueColor: 'rgba(36, 59, 152, 1.0)',
    whiteColor: 'rgba(198, 225, 228, 1.0)'
};

export const ICONS = {
    logoImage: require('app/source/assets/getcoinsAssets/getcoin_logo.png'),
    userProfile: require('app/source/assets/getcoinsAssets/myprofile_username.png'),
    lockImage: require('app/source/assets/getcoinsAssets/myprofile_lock.png'),
    phoneImage: require('app/source/assets/getcoinsAssets/myprofile_mobile.png'),
    emailImage: require('app/source/assets/getcoinsAssets/myprofile_email.png'),
    locationImage: require('app/source/assets/getcoinsAssets/myprofile_location.png'),
    activeDealsImage: require('app/source/assets/getcoinsAssets/active_deal01.png'),
    walletImage: require('app/source/assets/getcoinsAssets/setting_wallet.png'),
    transactionHistory: require('app/source/assets/getcoinsAssets/trancation_icon.png'),
    createOffers: require('app/source/assets/getcoinsAssets/create_offer.png'),
    feedback: require('app/source/assets/getcoinsAssets/feedback_icon.png'),
    setting: require('app/source/assets/getcoinsAssets/setting_icon.png'),
    logout: require('app/source/assets/getcoinsAssets/logout_icon.png'),
    bgImage: require('app/source/assets/getcoinsAssets/bg_main.jpg'),
    languageImage: require('app/source/assets/getcoinsAssets/myprofile_language.png'),
    bitcoin_icon: require('app/source/assets/getcoinsAssets/bitcoin_icon.png'),
    menu_icon: require('app/source/assets/getcoinsAssets/menu_icon.png'),
    doller_icon: require('app/source/assets/getcoinsAssets/doller_icon.png'),
    tab_Home_icon: require('app/source/assets/getcoinsAssets/home_icon.png'),
    tab_offer_icon: require('app/source/assets/getcoinsAssets/reward_icon.png'),
    tab_feedback_icon: require('app/source/assets/getcoinsAssets/review_icon.png'),
    refresh_icon: require('app/source/assets/getcoinsAssets/refresh_icon.png'),
    date_icon: require('app/source/assets/getcoinsAssets/myprofile_date.png'),
    profile_offers_icon: require('app/source/assets/getcoinsAssets/myprofile_offer.png'),
    profile_created_offers: require('app/source/assets/getcoinsAssets/myprofile_create0ffer.png'),
    profile_thumb: require('app/source/assets/getcoinsAssets/myprofile_thumb.png'),
    arrow_icon: require('app/source/assets/getcoinsAssets/setting_arrow.png'),
    notification_icon: require('app/source/assets/getcoinsAssets/setting_notification.png'),
    pin_change_icon: require('app/source/assets/getcoinsAssets/setting_changepin.png'),
    help_support_icon: require('app/source/assets/getcoinsAssets/settiong_support.png'),
    cash_icon: require('app/source/assets/getcoinsAssets/cash_icon.png'),
    chatBackBg: require('app/source/assets/getcoinsAssets/chatting_bg.jpg'),
};

export const GOOGLE_MAP_API_KEY = '';   // enter google map api key
