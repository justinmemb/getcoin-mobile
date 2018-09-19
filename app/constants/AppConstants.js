// Service API
export const SERVICE_API = {
    BASE_URI:'https://qst7-dev.serverdatahost.com/api/',
    API_VERSION: 'v1',
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

// Date & time formats
export const FORMATS = {
    JSON_DATE: 'YYYY-MM-DDTHH:mm:ss.SSSZ',
    JSON_DATE_UTC: 'YYYY-MM-DDTHH:mm:ss.SSS[Z]',
    TIME_SLOT: 'HH:mm',
    DATE_ID: 'YYYY-MM-DD',
    START_TIME: {
        HOUR_FORMAT: 'HH:mm',
        LONG_DATE_FORMAT: 'dddd, [ngày] DD [tháng] MM',
        SHORT_DATE_FORMAT: 'dddd (DD/MM)',
    },
    EXPIRATION_DATE: 'DD/MM/YYYY',
};
export const colors ={
    redColor:'rgba(229,0,29,1.0)',
    blueColor:'rgba(36,59,152,1.0)',
    whiteColor:'rgba(198,225,228,1.0)'
};

export const ICONS = {
    logoImage:require('app/source/Assets/getcoinsAssets/getcoin_logo.png'),
    userProfile :require('app/source/Assets/getcoinsAssets/myprofile_usename.png'),
    lockImage :require('app/source/Assets/getcoinsAssets/myprofile_lock.png'),
    phoneImage:require('app/source/Assets/getcoinsAssets/myprofile_mobile.png'),
    emailImage:require('app/source/Assets/getcoinsAssets/myprofile_email.png'),
    locationImage:require('app/source/Assets/getcoinsAssets/myprofile_location.png'),
    activeDealsImage:require('app/source/Assets/getcoinsAssets/active_deal01.png'),
    walletImage:require('app/source/Assets/getcoinsAssets/setting_wallet.png'),
    transactionHistory:require('app/source/Assets/getcoinsAssets/trancation_icon.png'),
    createOffers:require('app/source/Assets/getcoinsAssets/create_offer.png'),
    feedback:require('app/source/Assets/getcoinsAssets/feedback_icon.png'),
    setting:require('app/source/Assets/getcoinsAssets/setting_icon.png'),
    logout:require('app/source/Assets/getcoinsAssets/logout_icon.png'),
    bgImage:require('app/source/Assets/getcoinsAssets/bg_main.jpg'),
    languageImage:require('app/source/Assets/getcoinsAssets/myprofile_language.png'),
    bitcoin_icon:require('app/source/Assets/getcoinsAssets/bitcoin_icon.png'),
    menu_icon:require('app/source/Assets/getcoinsAssets/menu_icon.png'),
    doller_icon:require('app/source/Assets/getcoinsAssets/doller_icon.png'),
    tab_Home_icon:require('app/source/Assets/getcoinsAssets/home_icon.png'),
    tab_offer_icon:require('app/source/Assets/getcoinsAssets/reward_icon.png'),
    tab_feedback_icon:require('app/source/Assets/getcoinsAssets/review_icon.png'),
    refresh_icon:require('app/source/Assets/getcoinsAssets/refresh_icon.png'),
    date_icon:require('app/source/Assets/getcoinsAssets/myprofile_date.png'),
    profile_offers_icon:require('app/source/Assets/getcoinsAssets/myprofile_offer.png'),
    profile_created_offers:require('app/source/Assets/getcoinsAssets/myprofile_create0ffer.png'),
    profile_thumb:require('app/source/Assets/getcoinsAssets/myprofile_thumb.png'),
    arrow_icon:require('app/source/Assets/getcoinsAssets/setting_arrow.png'),
    notification_icon:require('app/source/Assets/getcoinsAssets/setting_notification.png'),
    pin_change_icon:require('app/source/Assets/getcoinsAssets/setting_changeepin.png'),
    help_support_icon:require('app/source/Assets/getcoinsAssets/settiong_support.png'),

















};

export  const GOOGLE_MAP_API_KEY = 'AIzaSyCDTZQt0XCtLOddDlcCvnU6FQ9RyNqZZR0';
