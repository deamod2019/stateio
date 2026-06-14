/**
 * Webpack Module #56467
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(n.r(t),
    n.d(t, {
      ActionCodeOperation: () => h,
      ActionCodeURL: () => De,
      AuthCredential: () => Ee,
      AuthErrorCodes: () => m,
      EmailAuthCredential: () => Pe,
      EmailAuthProvider: () => Fe,
      FacebookAuthProvider: () => He,
      FactorId: () => u,
      GithubAuthProvider: () => Ze,
      GoogleAuthProvider: () => Ve,
      OAuthCredential: () => Re,
      OAuthProvider: () => je,
      OperationType: () => d,
      PhoneAuthCredential: () => Ne,
      PhoneAuthProvider: () => Bn,
      PhoneMultiFactorGenerator: () => Oi,
      ProviderId: () => l,
      RecaptchaVerifier: () => Mn,
      SAMLAuthProvider: () => Ye,
      SignInMethod: () => c,
      TwitterAuthProvider: () => We,
      applyActionCode: () => _t,
      beforeAuthStateChanged: () => Ut,
      browserLocalPersistence: () => en,
      browserPopupRedirectResolver: () => Ii,
      browserSessionPersistence: () => nn,
      checkActionCode: () => gt,
      confirmPasswordReset: () => ft,
      connectAuthEmulator: () => Te,
      createUserWithEmailAndPassword: () => vt,
      debugErrorMap: () => f,
      deleteUser: () => Zt,
      fetchSignInMethodsForEmail: () => xt,
      getAdditionalUserInfo: () => Dt,
      getAuth: () => Fi,
      getIdToken: () => W,
      getIdTokenResult: () => X,
      getMultiFactorResolver: () => Wt,
      getRedirectResult: () => ri,
      inMemoryPersistence: () => ae,
      indexedDBLocalPersistence: () => vn,
      initializeAuth: () => M,
      isSignInWithEmailLink: () => bt,
      linkWithCredential: () => st,
      linkWithPhoneNumber: () => Rn,
      linkWithPopup: () => Wn,
      linkWithRedirect: () => ii,
      multiFactor: () => Kt,
      onAuthStateChanged: () => Gt,
      onIdTokenChanged: () => Ft,
      parseActionCodeURL: () => Be,
      prodErrorMap: () => _,
      reauthenticateWithCredential: () => ut,
      reauthenticateWithPhoneNumber: () => kn,
      reauthenticateWithPopup: () => Yn,
      reauthenticateWithRedirect: () => ni,
      reload: () => te,
      sendEmailVerification: () => Tt,
      sendPasswordResetEmail: () => pt,
      sendSignInLinkToEmail: () => Ct,
      setPersistence: () => Bt,
      signInAnonymously: () => $e,
      signInWithCredential: () => at,
      signInWithCustomToken: () => lt,
      signInWithEmailAndPassword: () => yt,
      signInWithEmailLink: () => wt,
      signInWithPhoneNumber: () => On,
      signInWithPopup: () => zn,
      signInWithRedirect: () => ti,
      signOut: () => Vt,
      unlink: () => tt,
      updateCurrentUser: () => Ht,
      updateEmail: () => Et,
      updatePassword: () => At,
      updatePhoneNumber: () => Dn,
      updateProfile: () => Lt,
      useDeviceLanguage: () => jt,
      verifyBeforeUpdateEmail: () => St,
      verifyPasswordResetCode: () => mt,
    }))
  var i = n(74444),
    r = n(32238),
    o = n(53333),
    a = n(70655),
    s = n(8463)
  const u = { PHONE: "phone" },
    l = {
      FACEBOOK: "facebook.com",
      GITHUB: "github.com",
      GOOGLE: "google.com",
      PASSWORD: "password",
      PHONE: "phone",
      TWITTER: "twitter.com",
    },
    c = {
      EMAIL_LINK: "emailLink",
      EMAIL_PASSWORD: "password",
      FACEBOOK: "facebook.com",
      GITHUB: "github.com",
      GOOGLE: "google.com",
      PHONE: "phone",
      TWITTER: "twitter.com",
    },
    d = { LINK: "link", REAUTHENTICATE: "reauthenticate", SIGN_IN: "signIn" },
    h = {
      EMAIL_SIGNIN: "EMAIL_SIGNIN",
      PASSWORD_RESET: "PASSWORD_RESET",
      RECOVER_EMAIL: "RECOVER_EMAIL",
      REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
      VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
      VERIFY_EMAIL: "VERIFY_EMAIL",
    }
  function p() {
    return {
      "dependent-sdk-initialized-before-auth":
        "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
    }
  }
  const f = function () {
      return {
        "admin-restricted-operation": "This operation is restricted to administrators only.",
        "argument-error": "",
        "app-not-authorized":
          "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
        "app-not-installed":
          "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
        "captcha-check-failed":
          "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
        "code-expired":
          "The SMS code has expired. Please re-send the verification code to try again.",
        "cordova-not-ready": "Cordova framework is not ready.",
        "cors-unsupported": "This browser is not supported.",
        "credential-already-in-use":
          "This credential is already associated with a different user account.",
        "custom-token-mismatch": "The custom token corresponds to a different audience.",
        "requires-recent-login":
          "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
        "dependent-sdk-initialized-before-auth":
          "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
        "dynamic-link-not-activated":
          "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
        "email-change-needs-verification": "Multi-factor users must always have a verified email.",
        "email-already-in-use": "The email address is already in use by another account.",
        "emulator-config-failed":
          'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',
        "expired-action-code": "The action code has expired.",
        "cancelled-popup-request":
          "This operation has been cancelled due to another conflicting popup being opened.",
        "internal-error": "An internal AuthError has occurred.",
        "invalid-app-credential":
          "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
        "invalid-app-id": "The mobile app identifier is not registed for the current project.",
        "invalid-user-token":
          "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
        "invalid-auth-event": "An internal AuthError has occurred.",
        "invalid-verification-code":
          "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",
        "invalid-continue-uri": "The continue URL provided in the request is invalid.",
        "invalid-cordova-configuration":
          "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
        "invalid-custom-token":
          "The custom token format is incorrect. Please check the documentation.",
        "invalid-dynamic-link-domain":
          "The provided dynamic link domain is not configured or authorized for the current project.",
        "invalid-email": "The email address is badly formatted.",
        "invalid-emulator-scheme":
          "Emulator URL must start with a valid scheme (http:// or https://).",
        "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
        "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
        "invalid-credential": "The supplied auth credential is malformed or has expired.",
        "invalid-message-payload":
          "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
        "invalid-multi-factor-session":
          "The request does not contain a valid proof of first factor successful sign-in.",
        "invalid-oauth-provider":
          "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
        "invalid-oauth-client-id":
          "The OAuth client ID provided is either invalid or does not match the specified API key.",
        "unauthorized-domain":
          "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
        "invalid-action-code":
          "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
        "wrong-password": "The password is invalid or the user does not have a password.",
        "invalid-persistence-type":
          "The specified persistence type is invalid. It can only be local, session or none.",
        "invalid-phone-number":
          "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
        "invalid-provider-id": "The specified provider ID is invalid.",
        "invalid-recipient-email":
          "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
        "invalid-sender":
          "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
        "invalid-verification-id":
          "The verification ID used to create the phone auth credential is invalid.",
        "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
        "login-blocked": "Login blocked by user-provided method: {$originalMessage}",
        "missing-android-pkg-name":
          "An Android Package Name must be provided if the Android App is required to be installed.",
        "auth-domain-config-required":
          "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
        "missing-app-credential":
          "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
        "missing-verification-code":
          "The phone auth credential was created with an empty SMS verification code.",
        "missing-continue-uri": "A continue URL must be provided in the request.",
        "missing-iframe-start": "An internal AuthError has occurred.",
        "missing-ios-bundle-id":
          "An iOS Bundle ID must be provided if an App Store ID is provided.",
        "missing-or-invalid-nonce":
          "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
        "missing-multi-factor-info": "No second factor identifier is provided.",
        "missing-multi-factor-session":
          "The request is missing proof of first factor successful sign-in.",
        "missing-phone-number":
          "To send verification codes, provide a phone number for the recipient.",
        "missing-verification-id":
          "The phone auth credential was created with an empty verification ID.",
        "app-deleted": "This instance of FirebaseApp has been deleted.",
        "multi-factor-info-not-found":
          "The user does not have a second factor matching the identifier provided.",
        "multi-factor-auth-required":
          "Proof of ownership of a second factor is required to complete sign-in.",
        "account-exists-with-different-credential":
          "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
        "network-request-failed":
          "A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",
        "no-auth-event": "An internal AuthError has occurred.",
        "no-such-provider": "User was not linked to an account with the given provider.",
        "null-user":
          "A null user object was provided as the argument for an operation which requires a non-null user object.",
        "operation-not-allowed":
          "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
        "operation-not-supported-in-this-environment":
          'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
        "popup-blocked":
          "Unable to establish a connection with the popup. It may have been blocked by the browser.",
        "popup-closed-by-user":
          "The popup has been closed by the user before finalizing the operation.",
        "provider-already-linked":
          "User can only be linked to one identity for the given provider.",
        "quota-exceeded": "The project's quota for this operation has been exceeded.",
        "redirect-cancelled-by-user":
          "The redirect operation has been cancelled by the user before finalizing.",
        "redirect-operation-pending": "A redirect sign-in operation is already pending.",
        "rejected-credential": "The request contains malformed or mismatching credentials.",
        "second-factor-already-in-use": "The second factor is already enrolled on this account.",
        "maximum-second-factor-count-exceeded":
          "The maximum allowed number of second factors on a user has been exceeded.",
        "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
        timeout: "The operation has timed out.",
        "user-token-expired":
          "The user's credential is no longer valid. The user must sign in again.",
        "too-many-requests":
          "We have blocked all requests from this device due to unusual activity. Try again later.",
        "unauthorized-continue-uri":
          "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
        "unsupported-first-factor":
          "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
        "unsupported-persistence-type":
          "The current environment does not support the specified persistence type.",
        "unsupported-tenant-operation":
          "This operation is not supported in a multi-tenant context.",
        "unverified-email": "The operation requires a verified email.",
        "user-cancelled": "The user did not grant your application the permissions it requested.",
        "user-not-found":
          "There is no user record corresponding to this identifier. The user may have been deleted.",
        "user-disabled": "The user account has been disabled by an administrator.",
        "user-mismatch":
          "The supplied credentials do not correspond to the previously signed in user.",
        "user-signed-out": "",
        "weak-password": "The password must be 6 characters long or more.",
        "web-storage-unsupported":
          "This browser is not supported or 3rd party cookies and data may be disabled.",
        "already-initialized":
          "initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",
      }
    },
    _ = p,
    g = new i.LL("auth", "Firebase", {
      "dependent-sdk-initialized-before-auth":
        "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
    }),
    m = {
      ADMIN_ONLY_OPERATION: "auth/admin-restricted-operation",
      ARGUMENT_ERROR: "auth/argument-error",
      APP_NOT_AUTHORIZED: "auth/app-not-authorized",
      APP_NOT_INSTALLED: "auth/app-not-installed",
      CAPTCHA_CHECK_FAILED: "auth/captcha-check-failed",
      CODE_EXPIRED: "auth/code-expired",
      CORDOVA_NOT_READY: "auth/cordova-not-ready",
      CORS_UNSUPPORTED: "auth/cors-unsupported",
      CREDENTIAL_ALREADY_IN_USE: "auth/credential-already-in-use",
      CREDENTIAL_MISMATCH: "auth/custom-token-mismatch",
      CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "auth/requires-recent-login",
      DEPENDENT_SDK_INIT_BEFORE_AUTH: "auth/dependent-sdk-initialized-before-auth",
      DYNAMIC_LINK_NOT_ACTIVATED: "auth/dynamic-link-not-activated",
      EMAIL_CHANGE_NEEDS_VERIFICATION: "auth/email-change-needs-verification",
      EMAIL_EXISTS: "auth/email-already-in-use",
      EMULATOR_CONFIG_FAILED: "auth/emulator-config-failed",
      EXPIRED_OOB_CODE: "auth/expired-action-code",
      EXPIRED_POPUP_REQUEST: "auth/cancelled-popup-request",
      INTERNAL_ERROR: "auth/internal-error",
      INVALID_API_KEY: "auth/invalid-api-key",
      INVALID_APP_CREDENTIAL: "auth/invalid-app-credential",
      INVALID_APP_ID: "auth/invalid-app-id",
      INVALID_AUTH: "auth/invalid-user-token",
      INVALID_AUTH_EVENT: "auth/invalid-auth-event",
      INVALID_CERT_HASH: "auth/invalid-cert-hash",
      INVALID_CODE: "auth/invalid-verification-code",
      INVALID_CONTINUE_URI: "auth/invalid-continue-uri",
      INVALID_CORDOVA_CONFIGURATION: "auth/invalid-cordova-configuration",
      INVALID_CUSTOM_TOKEN: "auth/invalid-custom-token",
      INVALID_DYNAMIC_LINK_DOMAIN: "auth/invalid-dynamic-link-domain",
      INVALID_EMAIL: "auth/invalid-email",
      INVALID_EMULATOR_SCHEME: "auth/invalid-emulator-scheme",
      INVALID_IDP_RESPONSE: "auth/invalid-credential",
      INVALID_MESSAGE_PAYLOAD: "auth/invalid-message-payload",
      INVALID_MFA_SESSION: "auth/invalid-multi-factor-session",
      INVALID_OAUTH_CLIENT_ID: "auth/invalid-oauth-client-id",
      INVALID_OAUTH_PROVIDER: "auth/invalid-oauth-provider",
      INVALID_OOB_CODE: "auth/invalid-action-code",
      INVALID_ORIGIN: "auth/unauthorized-domain",
      INVALID_PASSWORD: "auth/wrong-password",
      INVALID_PERSISTENCE: "auth/invalid-persistence-type",
      INVALID_PHONE_NUMBER: "auth/invalid-phone-number",
      INVALID_PROVIDER_ID: "auth/invalid-provider-id",
      INVALID_RECIPIENT_EMAIL: "auth/invalid-recipient-email",
      INVALID_SENDER: "auth/invalid-sender",
      INVALID_SESSION_INFO: "auth/invalid-verification-id",
      INVALID_TENANT_ID: "auth/invalid-tenant-id",
      MFA_INFO_NOT_FOUND: "auth/multi-factor-info-not-found",
      MFA_REQUIRED: "auth/multi-factor-auth-required",
      MISSING_ANDROID_PACKAGE_NAME: "auth/missing-android-pkg-name",
      MISSING_APP_CREDENTIAL: "auth/missing-app-credential",
      MISSING_AUTH_DOMAIN: "auth/auth-domain-config-required",
      MISSING_CODE: "auth/missing-verification-code",
      MISSING_CONTINUE_URI: "auth/missing-continue-uri",
      MISSING_IFRAME_START: "auth/missing-iframe-start",
      MISSING_IOS_BUNDLE_ID: "auth/missing-ios-bundle-id",
      MISSING_OR_INVALID_NONCE: "auth/missing-or-invalid-nonce",
      MISSING_MFA_INFO: "auth/missing-multi-factor-info",
      MISSING_MFA_SESSION: "auth/missing-multi-factor-session",
      MISSING_PHONE_NUMBER: "auth/missing-phone-number",
      MISSING_SESSION_INFO: "auth/missing-verification-id",
      MODULE_DESTROYED: "auth/app-deleted",
      NEED_CONFIRMATION: "auth/account-exists-with-different-credential",
      NETWORK_REQUEST_FAILED: "auth/network-request-failed",
      NULL_USER: "auth/null-user",
      NO_AUTH_EVENT: "auth/no-auth-event",
      NO_SUCH_PROVIDER: "auth/no-such-provider",
      OPERATION_NOT_ALLOWED: "auth/operation-not-allowed",
      OPERATION_NOT_SUPPORTED: "auth/operation-not-supported-in-this-environment",
      POPUP_BLOCKED: "auth/popup-blocked",
      POPUP_CLOSED_BY_USER: "auth/popup-closed-by-user",
      PROVIDER_ALREADY_LINKED: "auth/provider-already-linked",
      QUOTA_EXCEEDED: "auth/quota-exceeded",
      REDIRECT_CANCELLED_BY_USER: "auth/redirect-cancelled-by-user",
      REDIRECT_OPERATION_PENDING: "auth/redirect-operation-pending",
      REJECTED_CREDENTIAL: "auth/rejected-credential",
      SECOND_FACTOR_ALREADY_ENROLLED: "auth/second-factor-already-in-use",
      SECOND_FACTOR_LIMIT_EXCEEDED: "auth/maximum-second-factor-count-exceeded",
      TENANT_ID_MISMATCH: "auth/tenant-id-mismatch",
      TIMEOUT: "auth/timeout",
      TOKEN_EXPIRED: "auth/user-token-expired",
      TOO_MANY_ATTEMPTS_TRY_LATER: "auth/too-many-requests",
      UNAUTHORIZED_DOMAIN: "auth/unauthorized-continue-uri",
      UNSUPPORTED_FIRST_FACTOR: "auth/unsupported-first-factor",
      UNSUPPORTED_PERSISTENCE: "auth/unsupported-persistence-type",
      UNSUPPORTED_TENANT_OPERATION: "auth/unsupported-tenant-operation",
      UNVERIFIED_EMAIL: "auth/unverified-email",
      USER_CANCELLED: "auth/user-cancelled",
      USER_DELETED: "auth/user-not-found",
      USER_DISABLED: "auth/user-disabled",
      USER_MISMATCH: "auth/user-mismatch",
      USER_SIGNED_OUT: "auth/user-signed-out",
      WEAK_PASSWORD: "auth/weak-password",
      WEB_STORAGE_UNSUPPORTED: "auth/web-storage-unsupported",
      ALREADY_INITIALIZED: "auth/already-initialized",
    },
    v = new o.Yd("@firebase/auth")
  function y(e, ...t) {
    v.logLevel <= o.in.ERROR && v.error(`Auth (${r.Jn}): ${e}`, ...t)
  }
  function C(e, ...t) {
    throw T(e, ...t)
  }
  function b(e, ...t) {
    return T(e, ...t)
  }
  function w(e, t, n) {
    const r = Object.assign(Object.assign({}, _()), { [t]: n })
    return new i.LL("auth", "Firebase", r).create(t, { appName: e.name })
  }
  function x(e, t, n) {
    if (!(t instanceof n))
      throw (
        n.name !== t.constructor.name && C(e, "argument-error"),
        w(
          e,
          "argument-error",
          `Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`,
        )
      )
  }
  function T(e, ...t) {
    if ("string" != typeof e) {
      const n = t[0],
        i = [...t.slice(1)]
      return (i[0] && (i[0].appName = e.name), e._errorFactory.create(n, ...i))
    }
    return g.create(e, ...t)
  }
  function S(e, t, ...n) {
    if (!e) throw T(t, ...n)
  }
  function L(e) {
    const t = "INTERNAL ASSERTION FAILED: " + e
    throw (y(t), new Error(t))
  }
  function E(e, t) {
    e || L(t)
  }
  const A = new Map()
  function I(e) {
    E(e instanceof Function, "Expected a class definition")
    let t = A.get(e)
    return t
      ? (E(t instanceof e, "Instance stored in cache mismatched with class"), t)
      : ((t = new e()), A.set(e, t), t)
  }
  function M(e, t) {
    const n = (0, r.qX)(e, "auth")
    if (n.isInitialized()) {
      const e = n.getImmediate(),
        r = n.getOptions()
      if ((0, i.vZ)(r, null != t ? t : {})) return e
      C(e, "already-initialized")
    }
    return n.initialize({ options: t })
  }
  function P() {
    var e
    return (
      ("undefined" != typeof self &&
        (null === (e = self.location) || void 0 === e ? void 0 : e.href)) ||
      ""
    )
  }
  function O() {
    return "http:" === R() || "https:" === R()
  }
  function R() {
    var e
    return (
      ("undefined" != typeof self &&
        (null === (e = self.location) || void 0 === e ? void 0 : e.protocol)) ||
      null
    )
  }
  class k {
    constructor(e, t) {
      ;((this.shortDelay = e),
        (this.longDelay = t),
        E(t > e, "Short delay should be less than long delay!"),
        (this.isMobile = (0, i.uI)() || (0, i.b$)()))
    }
    get() {
      return "undefined" != typeof navigator &&
        navigator &&
        "onLine" in navigator &&
        "boolean" == typeof navigator.onLine &&
        (O() || (0, i.ru)() || "connection" in navigator) &&
        !navigator.onLine
        ? Math.min(5e3, this.shortDelay)
        : this.isMobile
          ? this.longDelay
          : this.shortDelay
    }
  }
  function N(e, t) {
    E(e.emulator, "Emulator should always be set here")
    const { url: n } = e.emulator
    return t ? `${n}${t.startsWith("/") ? t.slice(1) : t}` : n
  }
  class D {
    static initialize(e, t, n) {
      ;((this.fetchImpl = e), t && (this.headersImpl = t), n && (this.responseImpl = n))
    }
    static fetch() {
      return this.fetchImpl
        ? this.fetchImpl
        : "undefined" != typeof self && "fetch" in self
          ? self.fetch
          : void L(
              "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill",
            )
    }
    static headers() {
      return this.headersImpl
        ? this.headersImpl
        : "undefined" != typeof self && "Headers" in self
          ? self.Headers
          : void L(
              "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill",
            )
    }
    static response() {
      return this.responseImpl
        ? this.responseImpl
        : "undefined" != typeof self && "Response" in self
          ? self.Response
          : void L(
              "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill",
            )
    }
  }
  const B = {
      CREDENTIAL_MISMATCH: "custom-token-mismatch",
      MISSING_CUSTOM_TOKEN: "internal-error",
      INVALID_IDENTIFIER: "invalid-email",
      MISSING_CONTINUE_URI: "internal-error",
      INVALID_PASSWORD: "wrong-password",
      MISSING_PASSWORD: "internal-error",
      EMAIL_EXISTS: "email-already-in-use",
      PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
      INVALID_IDP_RESPONSE: "invalid-credential",
      INVALID_PENDING_TOKEN: "invalid-credential",
      FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
      MISSING_REQ_TYPE: "internal-error",
      EMAIL_NOT_FOUND: "user-not-found",
      RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
      EXPIRED_OOB_CODE: "expired-action-code",
      INVALID_OOB_CODE: "invalid-action-code",
      MISSING_OOB_CODE: "internal-error",
      CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
      INVALID_ID_TOKEN: "invalid-user-token",
      TOKEN_EXPIRED: "user-token-expired",
      USER_NOT_FOUND: "user-token-expired",
      TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
      INVALID_CODE: "invalid-verification-code",
      INVALID_SESSION_INFO: "invalid-verification-id",
      INVALID_TEMPORARY_PROOF: "invalid-credential",
      MISSING_SESSION_INFO: "missing-verification-id",
      SESSION_EXPIRED: "code-expired",
      MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
      UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
      INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
      ADMIN_ONLY_OPERATION: "admin-restricted-operation",
      INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
      MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
      MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
      MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
      SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
      SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
      BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
    },
    F = new k(3e4, 6e4)
  function U(e, t) {
    return e.tenantId && !t.tenantId
      ? Object.assign(Object.assign({}, t), { tenantId: e.tenantId })
      : t
  }
  async function G(e, t, n, r, o = {}) {
    return j(e, o, async () => {
      let o = {},
        a = {}
      r && ("GET" === t ? (a = r) : (o = { body: JSON.stringify(r) }))
      const s = (0, i.xO)(Object.assign({ key: e.config.apiKey }, a)).slice(1),
        u = await e._getAdditionalHeaders()
      return (
        (u["Content-Type"] = "application/json"),
        e.languageCode && (u["X-Firebase-Locale"] = e.languageCode),
        D.fetch()(
          V(e, e.config.apiHost, n, s),
          Object.assign({ method: t, headers: u, referrerPolicy: "no-referrer" }, o),
        )
      )
    })
  }
  async function j(e, t, n) {
    e._canInitEmulator = !1
    const r = Object.assign(Object.assign({}, B), t)
    try {
      const t = new Z(e),
        i = await Promise.race([n(), t.promise])
      t.clearNetworkTimeout()
      const o = await i.json()
      if ("needConfirmation" in o) throw z(e, "account-exists-with-different-credential", o)
      if (i.ok && !("errorMessage" in o)) return o
      {
        const t = i.ok ? o.errorMessage : o.error.message,
          [n, a] = t.split(" : ")
        if ("FEDERATED_USER_ID_ALREADY_LINKED" === n) throw z(e, "credential-already-in-use", o)
        if ("EMAIL_EXISTS" === n) throw z(e, "email-already-in-use", o)
        if ("USER_DISABLED" === n) throw z(e, "user-disabled", o)
        const s = r[n] || n.toLowerCase().replace(/[_\s]+/g, "-")
        if (a) throw w(e, s, a)
        C(e, s)
      }
    } catch (t) {
      if (t instanceof i.ZR) throw t
      C(e, "network-request-failed")
    }
  }
  async function H(e, t, n, i, r = {}) {
    const o = await G(e, t, n, i, r)
    return (
      "mfaPendingCredential" in o && C(e, "multi-factor-auth-required", { _serverResponse: o }),
      o
    )
  }
  function V(e, t, n, i) {
    const r = `${t}${n}?${i}`
    return e.config.emulator ? N(e.config, r) : `${e.config.apiScheme}://${r}`
  }
  class Z {
    constructor(e) {
      ;((this.auth = e),
        (this.timer = null),
        (this.promise = new Promise((e, t) => {
          this.timer = setTimeout(() => t(b(this.auth, "network-request-failed")), F.get())
        })))
    }
    clearNetworkTimeout() {
      clearTimeout(this.timer)
    }
  }
  function z(e, t, n) {
    const i = { appName: e.name }
    ;(n.email && (i.email = n.email), n.phoneNumber && (i.phoneNumber = n.phoneNumber))
    const r = b(e, t, i)
    return ((r.customData._tokenResponse = n), r)
  }
  function Y(e) {
    if (e)
      try {
        const t = new Date(Number(e))
        if (!isNaN(t.getTime())) return t.toUTCString()
      } catch (e) {}
  }
  function W(e, t = !1) {
    return (0, i.m9)(e).getIdToken(t)
  }
  async function X(e, t = !1) {
    const n = (0, i.m9)(e),
      r = await n.getIdToken(t),
      o = K(r)
    S(o && o.exp && o.auth_time && o.iat, n.auth, "internal-error")
    const a = "object" == typeof o.firebase ? o.firebase : void 0,
      s = null == a ? void 0 : a.sign_in_provider
    return {
      claims: o,
      token: r,
      authTime: Y(q(o.auth_time)),
      issuedAtTime: Y(q(o.iat)),
      expirationTime: Y(q(o.exp)),
      signInProvider: s || null,
      signInSecondFactor: (null == a ? void 0 : a.sign_in_second_factor) || null,
    }
  }
  function q(e) {
    return 1e3 * Number(e)
  }
  function K(e) {
    const [t, n, r] = e.split(".")
    if (void 0 === t || void 0 === n || void 0 === r)
      return (y("JWT malformed, contained fewer than 3 sections"), null)
    try {
      const e = (0, i.tV)(n)
      return e ? JSON.parse(e) : (y("Failed to decode base64 JWT payload"), null)
    } catch (e) {
      return (
        y("Caught error parsing JWT payload as JSON", null == e ? void 0 : e.toString()),
        null
      )
    }
  }
  async function $(e, t, n = !1) {
    if (n) return t
    try {
      return await t
    } catch (t) {
      throw (
        t instanceof i.ZR &&
          (function ({ code: e }) {
            return "auth/user-disabled" === e || "auth/user-token-expired" === e
          })(t) &&
          e.auth.currentUser === e &&
          (await e.auth.signOut()),
        t
      )
    }
  }
  class J {
    constructor(e) {
      ;((this.user = e), (this.isRunning = !1), (this.timerId = null), (this.errorBackoff = 3e4))
    }
    _start() {
      this.isRunning || ((this.isRunning = !0), this.schedule())
    }
    _stop() {
      this.isRunning && ((this.isRunning = !1), null !== this.timerId && clearTimeout(this.timerId))
    }
    getInterval(e) {
      var t
      if (e) {
        const e = this.errorBackoff
        return ((this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4)), e)
      }
      {
        this.errorBackoff = 3e4
        const e =
          (null !== (t = this.user.stsTokenManager.expirationTime) && void 0 !== t ? t : 0) -
          Date.now() -
          3e5
        return Math.max(0, e)
      }
    }
    schedule(e = !1) {
      if (!this.isRunning) return
      const t = this.getInterval(e)
      this.timerId = setTimeout(async () => {
        await this.iteration()
      }, t)
    }
    async iteration() {
      try {
        await this.user.getIdToken(!0)
      } catch (e) {
        return void (
          "auth/network-request-failed" === (null == e ? void 0 : e.code) && this.schedule(!0)
        )
      }
      this.schedule()
    }
  }
  class Q {
    constructor(e, t) {
      ;((this.createdAt = e), (this.lastLoginAt = t), this._initializeTime())
    }
    _initializeTime() {
      ;((this.lastSignInTime = Y(this.lastLoginAt)), (this.creationTime = Y(this.createdAt)))
    }
    _copy(e) {
      ;((this.createdAt = e.createdAt), (this.lastLoginAt = e.lastLoginAt), this._initializeTime())
    }
    toJSON() {
      return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt }
    }
  }
  async function ee(e) {
    var t
    const n = e.auth,
      i = await e.getIdToken(),
      r = await $(
        e,
        (async function (e, t) {
          return G(e, "POST", "/v1/accounts:lookup", t)
        })(n, { idToken: i }),
      )
    S(null == r ? void 0 : r.users.length, n, "internal-error")
    const o = r.users[0]
    e._notifyReloadListener(o)
    const s = (null === (t = o.providerUserInfo) || void 0 === t ? void 0 : t.length)
      ? o.providerUserInfo.map((e) => {
          var { providerId: t } = e,
            n = (0, a.__rest)(e, ["providerId"])
          return {
            providerId: t,
            uid: n.rawId || "",
            displayName: n.displayName || null,
            email: n.email || null,
            phoneNumber: n.phoneNumber || null,
            photoURL: n.photoUrl || null,
          }
        })
      : []
    const u =
      ((l = e.providerData),
      (c = s),
      [...l.filter((e) => !c.some((t) => t.providerId === e.providerId)), ...c])
    var l, c
    const d = e.isAnonymous,
      h = !((e.email && o.passwordHash) || (null == u ? void 0 : u.length)),
      p = !!d && h,
      f = {
        uid: o.localId,
        displayName: o.displayName || null,
        photoURL: o.photoUrl || null,
        email: o.email || null,
        emailVerified: o.emailVerified || !1,
        phoneNumber: o.phoneNumber || null,
        tenantId: o.tenantId || null,
        providerData: u,
        metadata: new Q(o.createdAt, o.lastLoginAt),
        isAnonymous: p,
      }
    Object.assign(e, f)
  }
  async function te(e) {
    const t = (0, i.m9)(e)
    ;(await ee(t), await t.auth._persistUserIfCurrent(t), t.auth._notifyListenersIfCurrent(t))
  }
  class ne {
    constructor() {
      ;((this.refreshToken = null), (this.accessToken = null), (this.expirationTime = null))
    }
    get isExpired() {
      return !this.expirationTime || Date.now() > this.expirationTime - 3e4
    }
    updateFromServerResponse(e) {
      ;(S(e.idToken, "internal-error"),
        S(void 0 !== e.idToken, "internal-error"),
        S(void 0 !== e.refreshToken, "internal-error"))
      const t =
        "expiresIn" in e && void 0 !== e.expiresIn
          ? Number(e.expiresIn)
          : (function (e) {
              const t = K(e)
              return (
                S(t, "internal-error"),
                S(void 0 !== t.exp, "internal-error"),
                S(void 0 !== t.iat, "internal-error"),
                Number(t.exp) - Number(t.iat)
              )
            })(e.idToken)
      this.updateTokensAndExpiration(e.idToken, e.refreshToken, t)
    }
    async getToken(e, t = !1) {
      return (
        S(!this.accessToken || this.refreshToken, e, "user-token-expired"),
        t || !this.accessToken || this.isExpired
          ? this.refreshToken
            ? (await this.refresh(e, this.refreshToken), this.accessToken)
            : null
          : this.accessToken
      )
    }
    clearRefreshToken() {
      this.refreshToken = null
    }
    async refresh(e, t) {
      const {
        accessToken: n,
        refreshToken: r,
        expiresIn: o,
      } = await (async function (e, t) {
        const n = await j(e, {}, async () => {
          const n = (0, i.xO)({ grant_type: "refresh_token", refresh_token: t }).slice(1),
            { tokenApiHost: r, apiKey: o } = e.config,
            a = V(e, r, "/v1/token", `key=${o}`),
            s = await e._getAdditionalHeaders()
          return (
            (s["Content-Type"] = "application/x-www-form-urlencoded"),
            D.fetch()(a, { method: "POST", headers: s, body: n })
          )
        })
        return {
          accessToken: n.access_token,
          expiresIn: n.expires_in,
          refreshToken: n.refresh_token,
        }
      })(e, t)
      this.updateTokensAndExpiration(n, r, Number(o))
    }
    updateTokensAndExpiration(e, t, n) {
      ;((this.refreshToken = t || null),
        (this.accessToken = e || null),
        (this.expirationTime = Date.now() + 1e3 * n))
    }
    static fromJSON(e, t) {
      const { refreshToken: n, accessToken: i, expirationTime: r } = t,
        o = new ne()
      return (
        n && (S("string" == typeof n, "internal-error", { appName: e }), (o.refreshToken = n)),
        i && (S("string" == typeof i, "internal-error", { appName: e }), (o.accessToken = i)),
        r && (S("number" == typeof r, "internal-error", { appName: e }), (o.expirationTime = r)),
        o
      )
    }
    toJSON() {
      return {
        refreshToken: this.refreshToken,
        accessToken: this.accessToken,
        expirationTime: this.expirationTime,
      }
    }
    _assign(e) {
      ;((this.accessToken = e.accessToken),
        (this.refreshToken = e.refreshToken),
        (this.expirationTime = e.expirationTime))
    }
    _clone() {
      return Object.assign(new ne(), this.toJSON())
    }
    _performRefresh() {
      return L("not implemented")
    }
  }
  function ie(e, t) {
    S("string" == typeof e || void 0 === e, "internal-error", { appName: t })
  }
  class re {
    constructor(e) {
      var { uid: t, auth: n, stsTokenManager: i } = e,
        r = (0, a.__rest)(e, ["uid", "auth", "stsTokenManager"])
      ;((this.providerId = "firebase"),
        (this.proactiveRefresh = new J(this)),
        (this.reloadUserInfo = null),
        (this.reloadListener = null),
        (this.uid = t),
        (this.auth = n),
        (this.stsTokenManager = i),
        (this.accessToken = i.accessToken),
        (this.displayName = r.displayName || null),
        (this.email = r.email || null),
        (this.emailVerified = r.emailVerified || !1),
        (this.phoneNumber = r.phoneNumber || null),
        (this.photoURL = r.photoURL || null),
        (this.isAnonymous = r.isAnonymous || !1),
        (this.tenantId = r.tenantId || null),
        (this.providerData = r.providerData ? [...r.providerData] : []),
        (this.metadata = new Q(r.createdAt || void 0, r.lastLoginAt || void 0)))
    }
    async getIdToken(e) {
      const t = await $(this, this.stsTokenManager.getToken(this.auth, e))
      return (
        S(t, this.auth, "internal-error"),
        this.accessToken !== t &&
          ((this.accessToken = t),
          await this.auth._persistUserIfCurrent(this),
          this.auth._notifyListenersIfCurrent(this)),
        t
      )
    }
    getIdTokenResult(e) {
      return X(this, e)
    }
    reload() {
      return te(this)
    }
    _assign(e) {
      this !== e &&
        (S(this.uid === e.uid, this.auth, "internal-error"),
        (this.displayName = e.displayName),
        (this.photoURL = e.photoURL),
        (this.email = e.email),
        (this.emailVerified = e.emailVerified),
        (this.phoneNumber = e.phoneNumber),
        (this.isAnonymous = e.isAnonymous),
        (this.tenantId = e.tenantId),
        (this.providerData = e.providerData.map((e) => Object.assign({}, e))),
        this.metadata._copy(e.metadata),
        this.stsTokenManager._assign(e.stsTokenManager))
    }
    _clone(e) {
      return new re(
        Object.assign(Object.assign({}, this), {
          auth: e,
          stsTokenManager: this.stsTokenManager._clone(),
        }),
      )
    }
    _onReload(e) {
      ;(S(!this.reloadListener, this.auth, "internal-error"),
        (this.reloadListener = e),
        this.reloadUserInfo &&
          (this._notifyReloadListener(this.reloadUserInfo), (this.reloadUserInfo = null)))
    }
    _notifyReloadListener(e) {
      this.reloadListener ? this.reloadListener(e) : (this.reloadUserInfo = e)
    }
    _startProactiveRefresh() {
      this.proactiveRefresh._start()
    }
    _stopProactiveRefresh() {
      this.proactiveRefresh._stop()
    }
    async _updateTokensIfNecessary(e, t = !1) {
      let n = !1
      ;(e.idToken &&
        e.idToken !== this.stsTokenManager.accessToken &&
        (this.stsTokenManager.updateFromServerResponse(e), (n = !0)),
        t && (await ee(this)),
        await this.auth._persistUserIfCurrent(this),
        n && this.auth._notifyListenersIfCurrent(this))
    }
    async delete() {
      const e = await this.getIdToken()
      return (
        await $(
          this,
          (async function (e, t) {
            return G(e, "POST", "/v1/accounts:delete", t)
          })(this.auth, { idToken: e }),
        ),
        this.stsTokenManager.clearRefreshToken(),
        this.auth.signOut()
      )
    }
    toJSON() {
      return Object.assign(
        Object.assign(
          {
            uid: this.uid,
            email: this.email || void 0,
            emailVerified: this.emailVerified,
            displayName: this.displayName || void 0,
            isAnonymous: this.isAnonymous,
            photoURL: this.photoURL || void 0,
            phoneNumber: this.phoneNumber || void 0,
            tenantId: this.tenantId || void 0,
            providerData: this.providerData.map((e) => Object.assign({}, e)),
            stsTokenManager: this.stsTokenManager.toJSON(),
            _redirectEventId: this._redirectEventId,
          },
          this.metadata.toJSON(),
        ),
        { apiKey: this.auth.config.apiKey, appName: this.auth.name },
      )
    }
    get refreshToken() {
      return this.stsTokenManager.refreshToken || ""
    }
    static _fromJSON(e, t) {
      var n, i, r, o, a, s, u, l
      const c = null !== (n = t.displayName) && void 0 !== n ? n : void 0,
        d = null !== (i = t.email) && void 0 !== i ? i : void 0,
        h = null !== (r = t.phoneNumber) && void 0 !== r ? r : void 0,
        p = null !== (o = t.photoURL) && void 0 !== o ? o : void 0,
        f = null !== (a = t.tenantId) && void 0 !== a ? a : void 0,
        _ = null !== (s = t._redirectEventId) && void 0 !== s ? s : void 0,
        g = null !== (u = t.createdAt) && void 0 !== u ? u : void 0,
        m = null !== (l = t.lastLoginAt) && void 0 !== l ? l : void 0,
        { uid: v, emailVerified: y, isAnonymous: C, providerData: b, stsTokenManager: w } = t
      S(v && w, e, "internal-error")
      const x = ne.fromJSON(this.name, w)
      ;(S("string" == typeof v, e, "internal-error"),
        ie(c, e.name),
        ie(d, e.name),
        S("boolean" == typeof y, e, "internal-error"),
        S("boolean" == typeof C, e, "internal-error"),
        ie(h, e.name),
        ie(p, e.name),
        ie(f, e.name),
        ie(_, e.name),
        ie(g, e.name),
        ie(m, e.name))
      const T = new re({
        uid: v,
        auth: e,
        email: d,
        emailVerified: y,
        displayName: c,
        isAnonymous: C,
        photoURL: p,
        phoneNumber: h,
        tenantId: f,
        stsTokenManager: x,
        createdAt: g,
        lastLoginAt: m,
      })
      return (
        b && Array.isArray(b) && (T.providerData = b.map((e) => Object.assign({}, e))),
        _ && (T._redirectEventId = _),
        T
      )
    }
    static async _fromIdTokenResponse(e, t, n = !1) {
      const i = new ne()
      i.updateFromServerResponse(t)
      const r = new re({ uid: t.localId, auth: e, stsTokenManager: i, isAnonymous: n })
      return (await ee(r), r)
    }
  }
  class oe {
    constructor() {
      ;((this.type = "NONE"), (this.storage = {}))
    }
    async _isAvailable() {
      return !0
    }
    async _set(e, t) {
      this.storage[e] = t
    }
    async _get(e) {
      const t = this.storage[e]
      return void 0 === t ? null : t
    }
    async _remove(e) {
      delete this.storage[e]
    }
    _addListener(e, t) {}
    _removeListener(e, t) {}
  }
  oe.type = "NONE"
  const ae = oe
  function se(e, t, n) {
    return `firebase:${e}:${t}:${n}`
  }
  class ue {
    constructor(e, t, n) {
      ;((this.persistence = e), (this.auth = t), (this.userKey = n))
      const { config: i, name: r } = this.auth
      ;((this.fullUserKey = se(this.userKey, i.apiKey, r)),
        (this.fullPersistenceKey = se("persistence", i.apiKey, r)),
        (this.boundEventHandler = t._onStorageEvent.bind(t)),
        this.persistence._addListener(this.fullUserKey, this.boundEventHandler))
    }
    setCurrentUser(e) {
      return this.persistence._set(this.fullUserKey, e.toJSON())
    }
    async getCurrentUser() {
      const e = await this.persistence._get(this.fullUserKey)
      return e ? re._fromJSON(this.auth, e) : null
    }
    removeCurrentUser() {
      return this.persistence._remove(this.fullUserKey)
    }
    savePersistenceForRedirect() {
      return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
    }
    async setPersistence(e) {
      if (this.persistence === e) return
      const t = await this.getCurrentUser()
      return (
        await this.removeCurrentUser(),
        (this.persistence = e),
        t ? this.setCurrentUser(t) : void 0
      )
    }
    delete() {
      this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
    }
    static async create(e, t, n = "authUser") {
      if (!t.length) return new ue(I(ae), e, n)
      const i = (
        await Promise.all(
          t.map(async (e) => {
            if (await e._isAvailable()) return e
          }),
        )
      ).filter((e) => e)
      let r = i[0] || I(ae)
      const o = se(n, e.config.apiKey, e.name)
      let a = null
      for (const n of t)
        try {
          const t = await n._get(o)
          if (t) {
            const i = re._fromJSON(e, t)
            ;(n !== r && (a = i), (r = n))
            break
          }
        } catch (e) {}
      const s = i.filter((e) => e._shouldAllowMigration)
      return r._shouldAllowMigration && s.length
        ? ((r = s[0]),
          a && (await r._set(o, a.toJSON())),
          await Promise.all(
            t.map(async (e) => {
              if (e !== r)
                try {
                  await e._remove(o)
                } catch (e) {}
            }),
          ),
          new ue(r, e, n))
        : new ue(r, e, n)
    }
  }
  function le(e) {
    const t = e.toLowerCase()
    if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/")) return "Opera"
    if (pe(t)) return "IEMobile"
    if (t.includes("msie") || t.includes("trident/")) return "IE"
    if (t.includes("edge/")) return "Edge"
    if (ce(t)) return "Firefox"
    if (t.includes("silk/")) return "Silk"
    if (_e(t)) return "Blackberry"
    if (ge(t)) return "Webos"
    if (de(t)) return "Safari"
    if ((t.includes("chrome/") || he(t)) && !t.includes("edge/")) return "Chrome"
    if (fe(t)) return "Android"
    {
      const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
        n = e.match(t)
      if (2 === (null == n ? void 0 : n.length)) return n[1]
    }
    return "Other"
  }
  function ce(e = (0, i.z$)()) {
    return /firefox\//i.test(e)
  }
  function de(e = (0, i.z$)()) {
    const t = e.toLowerCase()
    return (
      t.includes("safari/") &&
      !t.includes("chrome/") &&
      !t.includes("crios/") &&
      !t.includes("android")
    )
  }
  function he(e = (0, i.z$)()) {
    return /crios\//i.test(e)
  }
  function pe(e = (0, i.z$)()) {
    return /iemobile/i.test(e)
  }
  function fe(e = (0, i.z$)()) {
    return /android/i.test(e)
  }
  function _e(e = (0, i.z$)()) {
    return /blackberry/i.test(e)
  }
  function ge(e = (0, i.z$)()) {
    return /webos/i.test(e)
  }
  function me(e = (0, i.z$)()) {
    return /iphone|ipad|ipod/i.test(e) || (/macintosh/i.test(e) && /mobile/i.test(e))
  }
  function ve(e = (0, i.z$)()) {
    return me(e) || fe(e) || ge(e) || _e(e) || /windows phone/i.test(e) || pe(e)
  }
  function ye(e, t = []) {
    let n
    switch (e) {
      case "Browser":
        n = le((0, i.z$)())
        break
      case "Worker":
        n = `${le((0, i.z$)())}-${e}`
        break
      default:
        n = e
    }
    const o = t.length ? t.join(",") : "FirebaseCore-web"
    return `${n}/JsCore/${r.Jn}/${o}`
  }
  class Ce {
    constructor(e) {
      ;((this.auth = e), (this.queue = []))
    }
    pushCallback(e, t) {
      const n = (t) =>
        new Promise((n, i) => {
          try {
            n(e(t))
          } catch (e) {
            i(e)
          }
        })
      ;((n.onAbort = t), this.queue.push(n))
      const i = this.queue.length - 1
      return () => {
        this.queue[i] = () => Promise.resolve()
      }
    }
    async runMiddleware(e) {
      if (this.auth.currentUser === e) return
      const t = []
      try {
        for (const n of this.queue) (await n(e), n.onAbort && t.push(n.onAbort))
      } catch (e) {
        t.reverse()
        for (const e of t)
          try {
            e()
          } catch (e) {}
        throw this.auth._errorFactory.create("login-blocked", {
          originalMessage: null == e ? void 0 : e.message,
        })
      }
    }
  }
  class be {
    constructor(e, t, n) {
      ;((this.app = e),
        (this.heartbeatServiceProvider = t),
        (this.config = n),
        (this.currentUser = null),
        (this.emulatorConfig = null),
        (this.operations = Promise.resolve()),
        (this.authStateSubscription = new xe(this)),
        (this.idTokenSubscription = new xe(this)),
        (this.beforeStateQueue = new Ce(this)),
        (this.redirectUser = null),
        (this.isProactiveRefreshEnabled = !1),
        (this._canInitEmulator = !0),
        (this._isInitialized = !1),
        (this._deleted = !1),
        (this._initializationPromise = null),
        (this._popupRedirectResolver = null),
        (this._errorFactory = g),
        (this.lastNotifiedUid = void 0),
        (this.languageCode = null),
        (this.tenantId = null),
        (this.settings = { appVerificationDisabledForTesting: !1 }),
        (this.frameworks = []),
        (this.name = e.name),
        (this.clientVersion = n.sdkClientVersion))
    }
    _initializeWithPersistence(e, t) {
      return (
        t && (this._popupRedirectResolver = I(t)),
        (this._initializationPromise = this.queue(async () => {
          var n, i
          if (
            !this._deleted &&
            ((this.persistenceManager = await ue.create(this, e)), !this._deleted)
          ) {
            if (
              null === (n = this._popupRedirectResolver) || void 0 === n
                ? void 0
                : n._shouldInitProactively
            )
              try {
                await this._popupRedirectResolver._initialize(this)
              } catch (e) {}
            ;(await this.initializeCurrentUser(t),
              (this.lastNotifiedUid =
                (null === (i = this.currentUser) || void 0 === i ? void 0 : i.uid) || null),
              this._deleted || (this._isInitialized = !0))
          }
        })),
        this._initializationPromise
      )
    }
    async _onStorageEvent() {
      if (this._deleted) return
      const e = await this.assertedPersistence.getCurrentUser()
      return this.currentUser || e
        ? this.currentUser && e && this.currentUser.uid === e.uid
          ? (this._currentUser._assign(e), void (await this.currentUser.getIdToken()))
          : void (await this._updateCurrentUser(e, !0))
        : void 0
    }
    async initializeCurrentUser(e) {
      var t
      const n = await this.assertedPersistence.getCurrentUser()
      let i = n,
        r = !1
      if (e && this.config.authDomain) {
        await this.getOrInitRedirectPersistenceManager()
        const n = null === (t = this.redirectUser) || void 0 === t ? void 0 : t._redirectEventId,
          o = null == i ? void 0 : i._redirectEventId,
          a = await this.tryRedirectSignIn(e)
        ;(n && n !== o) || !(null == a ? void 0 : a.user) || ((i = a.user), (r = !0))
      }
      if (!i) return this.directlySetCurrentUser(null)
      if (!i._redirectEventId) {
        if (r)
          try {
            await this.beforeStateQueue.runMiddleware(i)
          } catch (e) {
            ;((i = n),
              this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(e)))
          }
        return i ? this.reloadAndSetCurrentUserOrClear(i) : this.directlySetCurrentUser(null)
      }
      return (
        S(this._popupRedirectResolver, this, "argument-error"),
        await this.getOrInitRedirectPersistenceManager(),
        this.redirectUser && this.redirectUser._redirectEventId === i._redirectEventId
          ? this.directlySetCurrentUser(i)
          : this.reloadAndSetCurrentUserOrClear(i)
      )
    }
    async tryRedirectSignIn(e) {
      let t = null
      try {
        t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0)
      } catch (e) {
        await this._setRedirectUser(null)
      }
      return t
    }
    async reloadAndSetCurrentUserOrClear(e) {
      try {
        await ee(e)
      } catch (e) {
        if ("auth/network-request-failed" !== (null == e ? void 0 : e.code))
          return this.directlySetCurrentUser(null)
      }
      return this.directlySetCurrentUser(e)
    }
    useDeviceLanguage() {
      this.languageCode = (function () {
        if ("undefined" == typeof navigator) return null
        const e = navigator
        return (e.languages && e.languages[0]) || e.language || null
      })()
    }
    async _delete() {
      this._deleted = !0
    }
    async updateCurrentUser(e) {
      const t = e ? (0, i.m9)(e) : null
      return (
        t && S(t.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"),
        this._updateCurrentUser(t && t._clone(this))
      )
    }
    async _updateCurrentUser(e, t = !1) {
      if (!this._deleted)
        return (
          e && S(this.tenantId === e.tenantId, this, "tenant-id-mismatch"),
          t || (await this.beforeStateQueue.runMiddleware(e)),
          this.queue(async () => {
            ;(await this.directlySetCurrentUser(e), this.notifyAuthListeners())
          })
        )
    }
    async signOut() {
      return (
        await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) &&
          (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0)
      )
    }
    setPersistence(e) {
      return this.queue(async () => {
        await this.assertedPersistence.setPersistence(I(e))
      })
    }
    _getPersistence() {
      return this.assertedPersistence.persistence.type
    }
    _updateErrorMap(e) {
      this._errorFactory = new i.LL("auth", "Firebase", e())
    }
    onAuthStateChanged(e, t, n) {
      return this.registerStateListener(this.authStateSubscription, e, t, n)
    }
    beforeAuthStateChanged(e, t) {
      return this.beforeStateQueue.pushCallback(e, t)
    }
    onIdTokenChanged(e, t, n) {
      return this.registerStateListener(this.idTokenSubscription, e, t, n)
    }
    toJSON() {
      var e
      return {
        apiKey: this.config.apiKey,
        authDomain: this.config.authDomain,
        appName: this.name,
        currentUser: null === (e = this._currentUser) || void 0 === e ? void 0 : e.toJSON(),
      }
    }
    async _setRedirectUser(e, t) {
      const n = await this.getOrInitRedirectPersistenceManager(t)
      return null === e ? n.removeCurrentUser() : n.setCurrentUser(e)
    }
    async getOrInitRedirectPersistenceManager(e) {
      if (!this.redirectPersistenceManager) {
        const t = (e && I(e)) || this._popupRedirectResolver
        ;(S(t, this, "argument-error"),
          (this.redirectPersistenceManager = await ue.create(
            this,
            [I(t._redirectPersistence)],
            "redirectUser",
          )),
          (this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()))
      }
      return this.redirectPersistenceManager
    }
    async _redirectUserForId(e) {
      var t, n
      return (
        this._isInitialized && (await this.queue(async () => {})),
        (null === (t = this._currentUser) || void 0 === t ? void 0 : t._redirectEventId) === e
          ? this._currentUser
          : (null === (n = this.redirectUser) || void 0 === n ? void 0 : n._redirectEventId) === e
            ? this.redirectUser
            : null
      )
    }
    async _persistUserIfCurrent(e) {
      if (e === this.currentUser) return this.queue(async () => this.directlySetCurrentUser(e))
    }
    _notifyListenersIfCurrent(e) {
      e === this.currentUser && this.notifyAuthListeners()
    }
    _key() {
      return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
    }
    _startProactiveRefresh() {
      ;((this.isProactiveRefreshEnabled = !0),
        this.currentUser && this._currentUser._startProactiveRefresh())
    }
    _stopProactiveRefresh() {
      ;((this.isProactiveRefreshEnabled = !1),
        this.currentUser && this._currentUser._stopProactiveRefresh())
    }
    get _currentUser() {
      return this.currentUser
    }
    notifyAuthListeners() {
      var e, t
      if (!this._isInitialized) return
      this.idTokenSubscription.next(this.currentUser)
      const n =
        null !== (t = null === (e = this.currentUser) || void 0 === e ? void 0 : e.uid) &&
        void 0 !== t
          ? t
          : null
      this.lastNotifiedUid !== n &&
        ((this.lastNotifiedUid = n), this.authStateSubscription.next(this.currentUser))
    }
    registerStateListener(e, t, n, i) {
      if (this._deleted) return () => {}
      const r = "function" == typeof t ? t : t.next.bind(t),
        o = this._isInitialized ? Promise.resolve() : this._initializationPromise
      return (
        S(o, this, "internal-error"),
        o.then(() => r(this.currentUser)),
        "function" == typeof t ? e.addObserver(t, n, i) : e.addObserver(t)
      )
    }
    async directlySetCurrentUser(e) {
      ;(this.currentUser && this.currentUser !== e && this._currentUser._stopProactiveRefresh(),
        e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(),
        (this.currentUser = e),
        e
          ? await this.assertedPersistence.setCurrentUser(e)
          : await this.assertedPersistence.removeCurrentUser())
    }
    queue(e) {
      return ((this.operations = this.operations.then(e, e)), this.operations)
    }
    get assertedPersistence() {
      return (S(this.persistenceManager, this, "internal-error"), this.persistenceManager)
    }
    _logFramework(e) {
      e &&
        !this.frameworks.includes(e) &&
        (this.frameworks.push(e),
        this.frameworks.sort(),
        (this.clientVersion = ye(this.config.clientPlatform, this._getFrameworks())))
    }
    _getFrameworks() {
      return this.frameworks
    }
    async _getAdditionalHeaders() {
      var e
      const t = { "X-Client-Version": this.clientVersion }
      this.app.options.appId && (t["X-Firebase-gmpid"] = this.app.options.appId)
      const n = await (null ===
        (e = this.heartbeatServiceProvider.getImmediate({ optional: !0 })) || void 0 === e
        ? void 0
        : e.getHeartbeatsHeader())
      return (n && (t["X-Firebase-Client"] = n), t)
    }
  }
  function we(e) {
    return (0, i.m9)(e)
  }
  class xe {
    constructor(e) {
      ;((this.auth = e),
        (this.observer = null),
        (this.addObserver = (0, i.ne)((e) => (this.observer = e))))
    }
    get next() {
      return (S(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer))
    }
  }
  function Te(e, t, n) {
    const i = we(e)
    ;(S(i._canInitEmulator, i, "emulator-config-failed"),
      S(/^https?:\/\//.test(t), i, "invalid-emulator-scheme"))
    const r = !!(null == n ? void 0 : n.disableWarnings),
      o = Se(t),
      { host: a, port: s } = (function (e) {
        const t = Se(e),
          n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length))
        if (!n) return { host: "", port: null }
        const i = n[2].split("@").pop() || "",
          r = /^(\[[^\]]+\])(:|$)/.exec(i)
        if (r) {
          const e = r[1]
          return { host: e, port: Le(i.substr(e.length + 1)) }
        }
        {
          const [e, t] = i.split(":")
          return { host: e, port: Le(t) }
        }
      })(t),
      u = null === s ? "" : `:${s}`
    ;((i.config.emulator = { url: `${o}//${a}${u}/` }),
      (i.settings.appVerificationDisabledForTesting = !0),
      (i.emulatorConfig = Object.freeze({
        host: a,
        port: s,
        protocol: o.replace(":", ""),
        options: Object.freeze({ disableWarnings: r }),
      })),
      r ||
        (function () {
          function e() {
            const e = document.createElement("p"),
              t = e.style
            ;((e.innerText = "Running in emulator mode. Do not use with production credentials."),
              (t.position = "fixed"),
              (t.width = "100%"),
              (t.backgroundColor = "#ffffff"),
              (t.border = ".1em solid #000000"),
              (t.color = "#b50000"),
              (t.bottom = "0px"),
              (t.left = "0px"),
              (t.margin = "0px"),
              (t.zIndex = "10000"),
              (t.textAlign = "center"),
              e.classList.add("firebase-emulator-warning"),
              document.body.appendChild(e))
          }
          "undefined" != typeof console &&
            "function" == typeof console.info &&
            console.info(
              "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.",
            )
          "undefined" != typeof window &&
            "undefined" != typeof document &&
            ("loading" === document.readyState
              ? window.addEventListener("DOMContentLoaded", e)
              : e())
        })())
  }
  function Se(e) {
    const t = e.indexOf(":")
    return t < 0 ? "" : e.substr(0, t + 1)
  }
  function Le(e) {
    if (!e) return null
    const t = Number(e)
    return isNaN(t) ? null : t
  }
  class Ee {
    constructor(e, t) {
      ;((this.providerId = e), (this.signInMethod = t))
    }
    toJSON() {
      return L("not implemented")
    }
    _getIdTokenResponse(e) {
      return L("not implemented")
    }
    _linkToIdToken(e, t) {
      return L("not implemented")
    }
    _getReauthenticationResolver(e) {
      return L("not implemented")
    }
  }
  async function Ae(e, t) {
    return G(e, "POST", "/v1/accounts:resetPassword", U(e, t))
  }
  async function Ie(e, t) {
    return G(e, "POST", "/v1/accounts:update", t)
  }
  async function Me(e, t) {
    return G(e, "POST", "/v1/accounts:sendOobCode", U(e, t))
  }
  class Pe extends Ee {
    constructor(e, t, n, i = null) {
      ;(super("password", n), (this._email = e), (this._password = t), (this._tenantId = i))
    }
    static _fromEmailAndPassword(e, t) {
      return new Pe(e, t, "password")
    }
    static _fromEmailAndCode(e, t, n = null) {
      return new Pe(e, t, "emailLink", n)
    }
    toJSON() {
      return {
        email: this._email,
        password: this._password,
        signInMethod: this.signInMethod,
        tenantId: this._tenantId,
      }
    }
    static fromJSON(e) {
      const t = "string" == typeof e ? JSON.parse(e) : e
      if ((null == t ? void 0 : t.email) && (null == t ? void 0 : t.password)) {
        if ("password" === t.signInMethod) return this._fromEmailAndPassword(t.email, t.password)
        if ("emailLink" === t.signInMethod)
          return this._fromEmailAndCode(t.email, t.password, t.tenantId)
      }
      return null
    }
    async _getIdTokenResponse(e) {
      switch (this.signInMethod) {
        case "password":
          return (async function (e, t) {
            return H(e, "POST", "/v1/accounts:signInWithPassword", U(e, t))
          })(e, { returnSecureToken: !0, email: this._email, password: this._password })
        case "emailLink":
          return (async function (e, t) {
            return H(e, "POST", "/v1/accounts:signInWithEmailLink", U(e, t))
          })(e, { email: this._email, oobCode: this._password })
        default:
          C(e, "internal-error")
      }
    }
    async _linkToIdToken(e, t) {
      switch (this.signInMethod) {
        case "password":
          return Ie(e, {
            idToken: t,
            returnSecureToken: !0,
            email: this._email,
            password: this._password,
          })
        case "emailLink":
          return (async function (e, t) {
            return H(e, "POST", "/v1/accounts:signInWithEmailLink", U(e, t))
          })(e, { idToken: t, email: this._email, oobCode: this._password })
        default:
          C(e, "internal-error")
      }
    }
    _getReauthenticationResolver(e) {
      return this._getIdTokenResponse(e)
    }
  }
  async function Oe(e, t) {
    return H(e, "POST", "/v1/accounts:signInWithIdp", U(e, t))
  }
  class Re extends Ee {
    constructor() {
      ;(super(...arguments), (this.pendingToken = null))
    }
    static _fromParams(e) {
      const t = new Re(e.providerId, e.signInMethod)
      return (
        e.idToken || e.accessToken
          ? (e.idToken && (t.idToken = e.idToken),
            e.accessToken && (t.accessToken = e.accessToken),
            e.nonce && !e.pendingToken && (t.nonce = e.nonce),
            e.pendingToken && (t.pendingToken = e.pendingToken))
          : e.oauthToken && e.oauthTokenSecret
            ? ((t.accessToken = e.oauthToken), (t.secret = e.oauthTokenSecret))
            : C("argument-error"),
        t
      )
    }
    toJSON() {
      return {
        idToken: this.idToken,
        accessToken: this.accessToken,
        secret: this.secret,
        nonce: this.nonce,
        pendingToken: this.pendingToken,
        providerId: this.providerId,
        signInMethod: this.signInMethod,
      }
    }
    static fromJSON(e) {
      const t = "string" == typeof e ? JSON.parse(e) : e,
        { providerId: n, signInMethod: i } = t,
        r = (0, a.__rest)(t, ["providerId", "signInMethod"])
      if (!n || !i) return null
      const o = new Re(n, i)
      return (
        (o.idToken = r.idToken || void 0),
        (o.accessToken = r.accessToken || void 0),
        (o.secret = r.secret),
        (o.nonce = r.nonce),
        (o.pendingToken = r.pendingToken || null),
        o
      )
    }
    _getIdTokenResponse(e) {
      return Oe(e, this.buildRequest())
    }
    _linkToIdToken(e, t) {
      const n = this.buildRequest()
      return ((n.idToken = t), Oe(e, n))
    }
    _getReauthenticationResolver(e) {
      const t = this.buildRequest()
      return ((t.autoCreate = !1), Oe(e, t))
    }
    buildRequest() {
      const e = { requestUri: "http://localhost", returnSecureToken: !0 }
      if (this.pendingToken) e.pendingToken = this.pendingToken
      else {
        const t = {}
        ;(this.idToken && (t.id_token = this.idToken),
          this.accessToken && (t.access_token = this.accessToken),
          this.secret && (t.oauth_token_secret = this.secret),
          (t.providerId = this.providerId),
          this.nonce && !this.pendingToken && (t.nonce = this.nonce),
          (e.postBody = (0, i.xO)(t)))
      }
      return e
    }
  }
  const ke = { USER_NOT_FOUND: "user-not-found" }
  class Ne extends Ee {
    constructor(e) {
      ;(super("phone", "phone"), (this.params = e))
    }
    static _fromVerification(e, t) {
      return new Ne({ verificationId: e, verificationCode: t })
    }
    static _fromTokenResponse(e, t) {
      return new Ne({ phoneNumber: e, temporaryProof: t })
    }
    _getIdTokenResponse(e) {
      return (async function (e, t) {
        return H(e, "POST", "/v1/accounts:signInWithPhoneNumber", U(e, t))
      })(e, this._makeVerificationRequest())
    }
    _linkToIdToken(e, t) {
      return (async function (e, t) {
        const n = await H(e, "POST", "/v1/accounts:signInWithPhoneNumber", U(e, t))
        if (n.temporaryProof) throw z(e, "account-exists-with-different-credential", n)
        return n
      })(e, Object.assign({ idToken: t }, this._makeVerificationRequest()))
    }
    _getReauthenticationResolver(e) {
      return (async function (e, t) {
        return H(
          e,
          "POST",
          "/v1/accounts:signInWithPhoneNumber",
          U(e, Object.assign(Object.assign({}, t), { operation: "REAUTH" })),
          ke,
        )
      })(e, this._makeVerificationRequest())
    }
    _makeVerificationRequest() {
      const {
        temporaryProof: e,
        phoneNumber: t,
        verificationId: n,
        verificationCode: i,
      } = this.params
      return e && t ? { temporaryProof: e, phoneNumber: t } : { sessionInfo: n, code: i }
    }
    toJSON() {
      const e = { providerId: this.providerId }
      return (
        this.params.phoneNumber && (e.phoneNumber = this.params.phoneNumber),
        this.params.temporaryProof && (e.temporaryProof = this.params.temporaryProof),
        this.params.verificationCode && (e.verificationCode = this.params.verificationCode),
        this.params.verificationId && (e.verificationId = this.params.verificationId),
        e
      )
    }
    static fromJSON(e) {
      "string" == typeof e && (e = JSON.parse(e))
      const { verificationId: t, verificationCode: n, phoneNumber: i, temporaryProof: r } = e
      return n || t || i || r
        ? new Ne({ verificationId: t, verificationCode: n, phoneNumber: i, temporaryProof: r })
        : null
    }
  }
  class De {
    constructor(e) {
      var t, n, r, o, a, s
      const u = (0, i.zd)((0, i.pd)(e)),
        l = null !== (t = u.apiKey) && void 0 !== t ? t : null,
        c = null !== (n = u.oobCode) && void 0 !== n ? n : null,
        d = (function (e) {
          switch (e) {
            case "recoverEmail":
              return "RECOVER_EMAIL"
            case "resetPassword":
              return "PASSWORD_RESET"
            case "signIn":
              return "EMAIL_SIGNIN"
            case "verifyEmail":
              return "VERIFY_EMAIL"
            case "verifyAndChangeEmail":
              return "VERIFY_AND_CHANGE_EMAIL"
            case "revertSecondFactorAddition":
              return "REVERT_SECOND_FACTOR_ADDITION"
            default:
              return null
          }
        })(null !== (r = u.mode) && void 0 !== r ? r : null)
      ;(S(l && c && d, "argument-error"),
        (this.apiKey = l),
        (this.operation = d),
        (this.code = c),
        (this.continueUrl = null !== (o = u.continueUrl) && void 0 !== o ? o : null),
        (this.languageCode = null !== (a = u.languageCode) && void 0 !== a ? a : null),
        (this.tenantId = null !== (s = u.tenantId) && void 0 !== s ? s : null))
    }
    static parseLink(e) {
      const t = (function (e) {
        const t = (0, i.zd)((0, i.pd)(e)).link,
          n = t ? (0, i.zd)((0, i.pd)(t)).deep_link_id : null,
          r = (0, i.zd)((0, i.pd)(e)).deep_link_id
        return (r ? (0, i.zd)((0, i.pd)(r)).link : null) || r || n || t || e
      })(e)
      try {
        return new De(t)
      } catch (e) {
        return null
      }
    }
  }
  function Be(e) {
    return De.parseLink(e)
  }
  class Fe {
    constructor() {
      this.providerId = Fe.PROVIDER_ID
    }
    static credential(e, t) {
      return Pe._fromEmailAndPassword(e, t)
    }
    static credentialWithLink(e, t) {
      const n = De.parseLink(t)
      return (S(n, "argument-error"), Pe._fromEmailAndCode(e, n.code, n.tenantId))
    }
  }
  ;((Fe.PROVIDER_ID = "password"),
    (Fe.EMAIL_PASSWORD_SIGN_IN_METHOD = "password"),
    (Fe.EMAIL_LINK_SIGN_IN_METHOD = "emailLink"))
  class Ue {
    constructor(e) {
      ;((this.providerId = e), (this.defaultLanguageCode = null), (this.customParameters = {}))
    }
    setDefaultLanguage(e) {
      this.defaultLanguageCode = e
    }
    setCustomParameters(e) {
      return ((this.customParameters = e), this)
    }
    getCustomParameters() {
      return this.customParameters
    }
  }
  class Ge extends Ue {
    constructor() {
      ;(super(...arguments), (this.scopes = []))
    }
    addScope(e) {
      return (this.scopes.includes(e) || this.scopes.push(e), this)
    }
    getScopes() {
      return [...this.scopes]
    }
  }
  class je extends Ge {
    static credentialFromJSON(e) {
      const t = "string" == typeof e ? JSON.parse(e) : e
      return (S("providerId" in t && "signInMethod" in t, "argument-error"), Re._fromParams(t))
    }
    credential(e) {
      return this._credential(Object.assign(Object.assign({}, e), { nonce: e.rawNonce }))
    }
    _credential(e) {
      return (
        S(e.idToken || e.accessToken, "argument-error"),
        Re._fromParams(
          Object.assign(Object.assign({}, e), {
            providerId: this.providerId,
            signInMethod: this.providerId,
          }),
        )
      )
    }
    static credentialFromResult(e) {
      return je.oauthCredentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
      return je.oauthCredentialFromTaggedObject(e.customData || {})
    }
    static oauthCredentialFromTaggedObject({ _tokenResponse: e }) {
      if (!e) return null
      const {
        oauthIdToken: t,
        oauthAccessToken: n,
        oauthTokenSecret: i,
        pendingToken: r,
        nonce: o,
        providerId: a,
      } = e
      if (!(n || i || t || r)) return null
      if (!a) return null
      try {
        return new je(a)._credential({ idToken: t, accessToken: n, nonce: o, pendingToken: r })
      } catch (e) {
        return null
      }
    }
  }
  class He extends Ge {
    constructor() {
      super("facebook.com")
    }
    static credential(e) {
      return Re._fromParams({
        providerId: He.PROVIDER_ID,
        signInMethod: He.FACEBOOK_SIGN_IN_METHOD,
        accessToken: e,
      })
    }
    static credentialFromResult(e) {
      return He.credentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
      return He.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({ _tokenResponse: e }) {
      if (!e || !("oauthAccessToken" in e)) return null
      if (!e.oauthAccessToken) return null
      try {
        return He.credential(e.oauthAccessToken)
      } catch (e) {
        return null
      }
    }
  }
  ;((He.FACEBOOK_SIGN_IN_METHOD = "facebook.com"), (He.PROVIDER_ID = "facebook.com"))
  class Ve extends Ge {
    constructor() {
      ;(super("google.com"), this.addScope("profile"))
    }
    static credential(e, t) {
      return Re._fromParams({
        providerId: Ve.PROVIDER_ID,
        signInMethod: Ve.GOOGLE_SIGN_IN_METHOD,
        idToken: e,
        accessToken: t,
      })
    }
    static credentialFromResult(e) {
      return Ve.credentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
      return Ve.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({ _tokenResponse: e }) {
      if (!e) return null
      const { oauthIdToken: t, oauthAccessToken: n } = e
      if (!t && !n) return null
      try {
        return Ve.credential(t, n)
      } catch (e) {
        return null
      }
    }
  }
  ;((Ve.GOOGLE_SIGN_IN_METHOD = "google.com"), (Ve.PROVIDER_ID = "google.com"))
  class Ze extends Ge {
    constructor() {
      super("github.com")
    }
    static credential(e) {
      return Re._fromParams({
        providerId: Ze.PROVIDER_ID,
        signInMethod: Ze.GITHUB_SIGN_IN_METHOD,
        accessToken: e,
      })
    }
    static credentialFromResult(e) {
      return Ze.credentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
      return Ze.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({ _tokenResponse: e }) {
      if (!e || !("oauthAccessToken" in e)) return null
      if (!e.oauthAccessToken) return null
      try {
        return Ze.credential(e.oauthAccessToken)
      } catch (e) {
        return null
      }
    }
  }
  ;((Ze.GITHUB_SIGN_IN_METHOD = "github.com"), (Ze.PROVIDER_ID = "github.com"))
  class ze extends Ee {
    constructor(e, t) {
      ;(super(e, e), (this.pendingToken = t))
    }
    _getIdTokenResponse(e) {
      return Oe(e, this.buildRequest())
    }
    _linkToIdToken(e, t) {
      const n = this.buildRequest()
      return ((n.idToken = t), Oe(e, n))
    }
    _getReauthenticationResolver(e) {
      const t = this.buildRequest()
      return ((t.autoCreate = !1), Oe(e, t))
    }
    toJSON() {
      return {
        signInMethod: this.signInMethod,
        providerId: this.providerId,
        pendingToken: this.pendingToken,
      }
    }
    static fromJSON(e) {
      const t = "string" == typeof e ? JSON.parse(e) : e,
        { providerId: n, signInMethod: i, pendingToken: r } = t
      return n && i && r && n === i ? new ze(n, r) : null
    }
    static _create(e, t) {
      return new ze(e, t)
    }
    buildRequest() {
      return {
        requestUri: "http://localhost",
        returnSecureToken: !0,
        pendingToken: this.pendingToken,
      }
    }
  }
  class Ye extends Ue {
    constructor(e) {
      ;(S(e.startsWith("saml."), "argument-error"), super(e))
    }
    static credentialFromResult(e) {
      return Ye.samlCredentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
      return Ye.samlCredentialFromTaggedObject(e.customData || {})
    }
    static credentialFromJSON(e) {
      const t = ze.fromJSON(e)
      return (S(t, "argument-error"), t)
    }
    static samlCredentialFromTaggedObject({ _tokenResponse: e }) {
      if (!e) return null
      const { pendingToken: t, providerId: n } = e
      if (!t || !n) return null
      try {
        return ze._create(n, t)
      } catch (e) {
        return null
      }
    }
  }
  class We extends Ge {
    constructor() {
      super("twitter.com")
    }
    static credential(e, t) {
      return Re._fromParams({
        providerId: We.PROVIDER_ID,
        signInMethod: We.TWITTER_SIGN_IN_METHOD,
        oauthToken: e,
        oauthTokenSecret: t,
      })
    }
    static credentialFromResult(e) {
      return We.credentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
      return We.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({ _tokenResponse: e }) {
      if (!e) return null
      const { oauthAccessToken: t, oauthTokenSecret: n } = e
      if (!t || !n) return null
      try {
        return We.credential(t, n)
      } catch (e) {
        return null
      }
    }
  }
  async function Xe(e, t) {
    return H(e, "POST", "/v1/accounts:signUp", U(e, t))
  }
  ;((We.TWITTER_SIGN_IN_METHOD = "twitter.com"), (We.PROVIDER_ID = "twitter.com"))
  class qe {
    constructor(e) {
      ;((this.user = e.user),
        (this.providerId = e.providerId),
        (this._tokenResponse = e._tokenResponse),
        (this.operationType = e.operationType))
    }
    static async _fromIdTokenResponse(e, t, n, i = !1) {
      const r = await re._fromIdTokenResponse(e, n, i),
        o = Ke(n)
      return new qe({ user: r, providerId: o, _tokenResponse: n, operationType: t })
    }
    static async _forOperation(e, t, n) {
      await e._updateTokensIfNecessary(n, !0)
      const i = Ke(n)
      return new qe({ user: e, providerId: i, _tokenResponse: n, operationType: t })
    }
  }
  function Ke(e) {
    return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null
  }
  async function $e(e) {
    var t
    const n = we(e)
    if (
      (await n._initializationPromise,
      null === (t = n.currentUser) || void 0 === t ? void 0 : t.isAnonymous)
    )
      return new qe({ user: n.currentUser, providerId: null, operationType: "signIn" })
    const i = await Xe(n, { returnSecureToken: !0 }),
      r = await qe._fromIdTokenResponse(n, "signIn", i, !0)
    return (await n._updateCurrentUser(r.user), r)
  }
  class Je extends i.ZR {
    constructor(e, t, n, i) {
      var r
      ;(super(t.code, t.message),
        (this.operationType = n),
        (this.user = i),
        Object.setPrototypeOf(this, Je.prototype),
        (this.customData = {
          appName: e.name,
          tenantId: null !== (r = e.tenantId) && void 0 !== r ? r : void 0,
          _serverResponse: t.customData._serverResponse,
          operationType: n,
        }))
    }
    static _fromErrorAndOperation(e, t, n, i) {
      return new Je(e, t, n, i)
    }
  }
  function Qe(e, t, n, i) {
    return (
      "reauthenticate" === t ? n._getReauthenticationResolver(e) : n._getIdTokenResponse(e)
    ).catch((n) => {
      if ("auth/multi-factor-auth-required" === n.code) throw Je._fromErrorAndOperation(e, n, t, i)
      throw n
    })
  }
  function et(e) {
    return new Set(e.map(({ providerId: e }) => e).filter((e) => !!e))
  }
  async function tt(e, t) {
    const n = (0, i.m9)(e)
    await it(!0, n, t)
    const { providerUserInfo: r } = await (async function (e, t) {
        return G(e, "POST", "/v1/accounts:update", t)
      })(n.auth, { idToken: await n.getIdToken(), deleteProvider: [t] }),
      o = et(r || [])
    return (
      (n.providerData = n.providerData.filter((e) => o.has(e.providerId))),
      o.has("phone") || (n.phoneNumber = null),
      await n.auth._persistUserIfCurrent(n),
      n
    )
  }
  async function nt(e, t, n = !1) {
    const i = await $(e, t._linkToIdToken(e.auth, await e.getIdToken()), n)
    return qe._forOperation(e, "link", i)
  }
  async function it(e, t, n) {
    await ee(t)
    const i = !1 === e ? "provider-already-linked" : "no-such-provider"
    S(et(t.providerData).has(n) === e, t.auth, i)
  }
  async function rt(e, t, n = !1) {
    const { auth: i } = e,
      r = "reauthenticate"
    try {
      const o = await $(e, Qe(i, r, t, e), n)
      S(o.idToken, i, "internal-error")
      const a = K(o.idToken)
      S(a, i, "internal-error")
      const { sub: s } = a
      return (S(e.uid === s, i, "user-mismatch"), qe._forOperation(e, r, o))
    } catch (e) {
      throw ("auth/user-not-found" === (null == e ? void 0 : e.code) && C(i, "user-mismatch"), e)
    }
  }
  async function ot(e, t, n = !1) {
    const i = "signIn",
      r = await Qe(e, i, t),
      o = await qe._fromIdTokenResponse(e, i, r)
    return (n || (await e._updateCurrentUser(o.user)), o)
  }
  async function at(e, t) {
    return ot(we(e), t)
  }
  async function st(e, t) {
    const n = (0, i.m9)(e)
    return (await it(!1, n, t.providerId), nt(n, t))
  }
  async function ut(e, t) {
    return rt((0, i.m9)(e), t)
  }
  async function lt(e, t) {
    const n = we(e),
      i = await (async function (e, t) {
        return H(e, "POST", "/v1/accounts:signInWithCustomToken", U(e, t))
      })(n, { token: t, returnSecureToken: !0 }),
      r = await qe._fromIdTokenResponse(n, "signIn", i)
    return (await n._updateCurrentUser(r.user), r)
  }
  class ct {
    constructor(e, t) {
      ;((this.factorId = e),
        (this.uid = t.mfaEnrollmentId),
        (this.enrollmentTime = new Date(t.enrolledAt).toUTCString()),
        (this.displayName = t.displayName))
    }
    static _fromServerResponse(e, t) {
      return "phoneInfo" in t ? dt._fromServerResponse(e, t) : C(e, "internal-error")
    }
  }
  class dt extends ct {
    constructor(e) {
      ;(super("phone", e), (this.phoneNumber = e.phoneInfo))
    }
    static _fromServerResponse(e, t) {
      return new dt(t)
    }
  }
  function ht(e, t, n) {
    var i
    ;(S((null === (i = n.url) || void 0 === i ? void 0 : i.length) > 0, e, "invalid-continue-uri"),
      S(
        void 0 === n.dynamicLinkDomain || n.dynamicLinkDomain.length > 0,
        e,
        "invalid-dynamic-link-domain",
      ),
      (t.continueUrl = n.url),
      (t.dynamicLinkDomain = n.dynamicLinkDomain),
      (t.canHandleCodeInApp = n.handleCodeInApp),
      n.iOS &&
        (S(n.iOS.bundleId.length > 0, e, "missing-ios-bundle-id"),
        (t.iOSBundleId = n.iOS.bundleId)),
      n.android &&
        (S(n.android.packageName.length > 0, e, "missing-android-pkg-name"),
        (t.androidInstallApp = n.android.installApp),
        (t.androidMinimumVersionCode = n.android.minimumVersion),
        (t.androidPackageName = n.android.packageName)))
  }
  async function pt(e, t, n) {
    const r = (0, i.m9)(e),
      o = { requestType: "PASSWORD_RESET", email: t }
    ;(n && ht(r, o, n),
      await (async function (e, t) {
        return Me(e, t)
      })(r, o))
  }
  async function ft(e, t, n) {
    await Ae((0, i.m9)(e), { oobCode: t, newPassword: n })
  }
  async function _t(e, t) {
    await (async function (e, t) {
      return G(e, "POST", "/v1/accounts:update", U(e, t))
    })((0, i.m9)(e), { oobCode: t })
  }
  async function gt(e, t) {
    const n = (0, i.m9)(e),
      r = await Ae(n, { oobCode: t }),
      o = r.requestType
    switch ((S(o, n, "internal-error"), o)) {
      case "EMAIL_SIGNIN":
        break
      case "VERIFY_AND_CHANGE_EMAIL":
        S(r.newEmail, n, "internal-error")
        break
      case "REVERT_SECOND_FACTOR_ADDITION":
        S(r.mfaInfo, n, "internal-error")
      default:
        S(r.email, n, "internal-error")
    }
    let a = null
    return (
      r.mfaInfo && (a = ct._fromServerResponse(we(n), r.mfaInfo)),
      {
        data: {
          email: ("VERIFY_AND_CHANGE_EMAIL" === r.requestType ? r.newEmail : r.email) || null,
          previousEmail:
            ("VERIFY_AND_CHANGE_EMAIL" === r.requestType ? r.email : r.newEmail) || null,
          multiFactorInfo: a,
        },
        operation: o,
      }
    )
  }
  async function mt(e, t) {
    const { data: n } = await gt((0, i.m9)(e), t)
    return n.email
  }
  async function vt(e, t, n) {
    const i = we(e),
      r = await Xe(i, { returnSecureToken: !0, email: t, password: n }),
      o = await qe._fromIdTokenResponse(i, "signIn", r)
    return (await i._updateCurrentUser(o.user), o)
  }
  function yt(e, t, n) {
    return at((0, i.m9)(e), Fe.credential(t, n))
  }
  async function Ct(e, t, n) {
    const r = (0, i.m9)(e),
      o = { requestType: "EMAIL_SIGNIN", email: t }
    ;(S(n.handleCodeInApp, r, "argument-error"),
      n && ht(r, o, n),
      await (async function (e, t) {
        return Me(e, t)
      })(r, o))
  }
  function bt(e, t) {
    const n = De.parseLink(t)
    return "EMAIL_SIGNIN" === (null == n ? void 0 : n.operation)
  }
  async function wt(e, t, n) {
    const r = (0, i.m9)(e),
      o = Fe.credentialWithLink(t, n || P())
    return (S(o._tenantId === (r.tenantId || null), r, "tenant-id-mismatch"), at(r, o))
  }
  async function xt(e, t) {
    const n = { identifier: t, continueUri: O() ? P() : "http://localhost" },
      { signinMethods: r } = await (async function (e, t) {
        return G(e, "POST", "/v1/accounts:createAuthUri", U(e, t))
      })((0, i.m9)(e), n)
    return r || []
  }
  async function Tt(e, t) {
    const n = (0, i.m9)(e),
      r = { requestType: "VERIFY_EMAIL", idToken: await e.getIdToken() }
    t && ht(n.auth, r, t)
    const { email: o } = await (async function (e, t) {
      return Me(e, t)
    })(n.auth, r)
    o !== e.email && (await e.reload())
  }
  async function St(e, t, n) {
    const r = (0, i.m9)(e),
      o = { requestType: "VERIFY_AND_CHANGE_EMAIL", idToken: await e.getIdToken(), newEmail: t }
    n && ht(r.auth, o, n)
    const { email: a } = await (async function (e, t) {
      return Me(e, t)
    })(r.auth, o)
    a !== e.email && (await e.reload())
  }
  async function Lt(e, { displayName: t, photoURL: n }) {
    if (void 0 === t && void 0 === n) return
    const r = (0, i.m9)(e),
      o = { idToken: await r.getIdToken(), displayName: t, photoUrl: n, returnSecureToken: !0 },
      a = await $(
        r,
        (async function (e, t) {
          return G(e, "POST", "/v1/accounts:update", t)
        })(r.auth, o),
      )
    ;((r.displayName = a.displayName || null), (r.photoURL = a.photoUrl || null))
    const s = r.providerData.find(({ providerId: e }) => "password" === e)
    ;(s && ((s.displayName = r.displayName), (s.photoURL = r.photoURL)),
      await r._updateTokensIfNecessary(a))
  }
  function Et(e, t) {
    return It((0, i.m9)(e), t, null)
  }
  function At(e, t) {
    return It((0, i.m9)(e), null, t)
  }
  async function It(e, t, n) {
    const { auth: i } = e,
      r = { idToken: await e.getIdToken(), returnSecureToken: !0 }
    ;(t && (r.email = t), n && (r.password = n))
    const o = await $(e, Ie(i, r))
    await e._updateTokensIfNecessary(o, !0)
  }
  class Mt {
    constructor(e, t, n = {}) {
      ;((this.isNewUser = e), (this.providerId = t), (this.profile = n))
    }
  }
  class Pt extends Mt {
    constructor(e, t, n, i) {
      ;(super(e, t, n), (this.username = i))
    }
  }
  class Ot extends Mt {
    constructor(e, t) {
      super(e, "facebook.com", t)
    }
  }
  class Rt extends Pt {
    constructor(e, t) {
      super(
        e,
        "github.com",
        t,
        "string" == typeof (null == t ? void 0 : t.login) ? (null == t ? void 0 : t.login) : null,
      )
    }
  }
  class kt extends Mt {
    constructor(e, t) {
      super(e, "google.com", t)
    }
  }
  class Nt extends Pt {
    constructor(e, t, n) {
      super(e, "twitter.com", t, n)
    }
  }
  function Dt(e) {
    const { user: t, _tokenResponse: n } = e
    return t.isAnonymous && !n
      ? { providerId: null, isNewUser: !1, profile: null }
      : (function (e) {
          var t, n
          if (!e) return null
          const { providerId: i } = e,
            r = e.rawUserInfo ? JSON.parse(e.rawUserInfo) : {},
            o = e.isNewUser || "identitytoolkit#SignupNewUserResponse" === e.kind
          if (!i && (null == e ? void 0 : e.idToken)) {
            const i =
              null === (n = null === (t = K(e.idToken)) || void 0 === t ? void 0 : t.firebase) ||
              void 0 === n
                ? void 0
                : n.sign_in_provider
            if (i) return new Mt(o, "anonymous" !== i && "custom" !== i ? i : null)
          }
          if (!i) return null
          switch (i) {
            case "facebook.com":
              return new Ot(o, r)
            case "github.com":
              return new Rt(o, r)
            case "google.com":
              return new kt(o, r)
            case "twitter.com":
              return new Nt(o, r, e.screenName || null)
            case "custom":
            case "anonymous":
              return new Mt(o, null)
            default:
              return new Mt(o, i, r)
          }
        })(n)
  }
  function Bt(e, t) {
    return (0, i.m9)(e).setPersistence(t)
  }
  function Ft(e, t, n, r) {
    return (0, i.m9)(e).onIdTokenChanged(t, n, r)
  }
  function Ut(e, t, n) {
    return (0, i.m9)(e).beforeAuthStateChanged(t, n)
  }
  function Gt(e, t, n, r) {
    return (0, i.m9)(e).onAuthStateChanged(t, n, r)
  }
  function jt(e) {
    ;(0, i.m9)(e).useDeviceLanguage()
  }
  function Ht(e, t) {
    return (0, i.m9)(e).updateCurrentUser(t)
  }
  function Vt(e) {
    return (0, i.m9)(e).signOut()
  }
  async function Zt(e) {
    return (0, i.m9)(e).delete()
  }
  class zt {
    constructor(e, t, n) {
      ;((this.type = e), (this.credential = t), (this.auth = n))
    }
    static _fromIdtoken(e, t) {
      return new zt("enroll", e, t)
    }
    static _fromMfaPendingCredential(e) {
      return new zt("signin", e)
    }
    toJSON() {
      return {
        multiFactorSession: {
          ["enroll" === this.type ? "idToken" : "pendingCredential"]: this.credential,
        },
      }
    }
    static fromJSON(e) {
      var t, n
      if (null == e ? void 0 : e.multiFactorSession) {
        if (null === (t = e.multiFactorSession) || void 0 === t ? void 0 : t.pendingCredential)
          return zt._fromMfaPendingCredential(e.multiFactorSession.pendingCredential)
        if (null === (n = e.multiFactorSession) || void 0 === n ? void 0 : n.idToken)
          return zt._fromIdtoken(e.multiFactorSession.idToken)
      }
      return null
    }
  }
  class Yt {
    constructor(e, t, n) {
      ;((this.session = e), (this.hints = t), (this.signInResolver = n))
    }
    static _fromError(e, t) {
      const n = we(e),
        i = t.customData._serverResponse,
        r = (i.mfaInfo || []).map((e) => ct._fromServerResponse(n, e))
      S(i.mfaPendingCredential, n, "internal-error")
      const o = zt._fromMfaPendingCredential(i.mfaPendingCredential)
      return new Yt(o, r, async (e) => {
        const r = await e._process(n, o)
        ;(delete i.mfaInfo, delete i.mfaPendingCredential)
        const a = Object.assign(Object.assign({}, i), {
          idToken: r.idToken,
          refreshToken: r.refreshToken,
        })
        switch (t.operationType) {
          case "signIn":
            const e = await qe._fromIdTokenResponse(n, t.operationType, a)
            return (await n._updateCurrentUser(e.user), e)
          case "reauthenticate":
            return (S(t.user, n, "internal-error"), qe._forOperation(t.user, t.operationType, a))
          default:
            C(n, "internal-error")
        }
      })
    }
    async resolveSignIn(e) {
      const t = e
      return this.signInResolver(t)
    }
  }
  function Wt(e, t) {
    var n
    const r = (0, i.m9)(e),
      o = t
    return (
      S(t.customData.operationType, r, "argument-error"),
      S(
        null === (n = o.customData._serverResponse) || void 0 === n
          ? void 0
          : n.mfaPendingCredential,
        r,
        "argument-error",
      ),
      Yt._fromError(r, o)
    )
  }
  class Xt {
    constructor(e) {
      ;((this.user = e),
        (this.enrolledFactors = []),
        e._onReload((t) => {
          t.mfaInfo &&
            (this.enrolledFactors = t.mfaInfo.map((t) => ct._fromServerResponse(e.auth, t)))
        }))
    }
    static _fromUser(e) {
      return new Xt(e)
    }
    async getSession() {
      return zt._fromIdtoken(await this.user.getIdToken(), this.user.auth)
    }
    async enroll(e, t) {
      const n = e,
        i = await this.getSession(),
        r = await $(this.user, n._process(this.user.auth, i, t))
      return (await this.user._updateTokensIfNecessary(r), this.user.reload())
    }
    async unenroll(e) {
      const t = "string" == typeof e ? e : e.uid,
        n = await this.user.getIdToken(),
        i = await $(
          this.user,
          ((r = this.user.auth),
          (o = { idToken: n, mfaEnrollmentId: t }),
          G(r, "POST", "/v2/accounts/mfaEnrollment:withdraw", U(r, o))),
        )
      var r, o
      ;((this.enrolledFactors = this.enrolledFactors.filter(({ uid: e }) => e !== t)),
        await this.user._updateTokensIfNecessary(i))
      try {
        await this.user.reload()
      } catch (e) {
        if ("auth/user-token-expired" !== (null == e ? void 0 : e.code)) throw e
      }
    }
  }
  const qt = new WeakMap()
  function Kt(e) {
    const t = (0, i.m9)(e)
    return (qt.has(t) || qt.set(t, Xt._fromUser(t)), qt.get(t))
  }
  const $t = "__sak"
  class Jt {
    constructor(e, t) {
      ;((this.storageRetriever = e), (this.type = t))
    }
    _isAvailable() {
      try {
        return this.storage
          ? (this.storage.setItem($t, "1"), this.storage.removeItem($t), Promise.resolve(!0))
          : Promise.resolve(!1)
      } catch (e) {
        return Promise.resolve(!1)
      }
    }
    _set(e, t) {
      return (this.storage.setItem(e, JSON.stringify(t)), Promise.resolve())
    }
    _get(e) {
      const t = this.storage.getItem(e)
      return Promise.resolve(t ? JSON.parse(t) : null)
    }
    _remove(e) {
      return (this.storage.removeItem(e), Promise.resolve())
    }
    get storage() {
      return this.storageRetriever()
    }
  }
  class Qt extends Jt {
    constructor() {
      ;(super(() => window.localStorage, "LOCAL"),
        (this.boundEventHandler = (e, t) => this.onStorageEvent(e, t)),
        (this.listeners = {}),
        (this.localCache = {}),
        (this.pollTimer = null),
        (this.safariLocalStorageNotSynced =
          (function () {
            const e = (0, i.z$)()
            return de(e) || me(e)
          })() &&
          (function () {
            try {
              return !(!window || window === window.top)
            } catch (e) {
              return !1
            }
          })()),
        (this.fallbackToPolling = ve()),
        (this._shouldAllowMigration = !0))
    }
    forAllChangedKeys(e) {
      for (const t of Object.keys(this.listeners)) {
        const n = this.storage.getItem(t),
          i = this.localCache[t]
        n !== i && e(t, i, n)
      }
    }
    onStorageEvent(e, t = !1) {
      if (!e.key)
        return void this.forAllChangedKeys((e, t, n) => {
          this.notifyListeners(e, n)
        })
      const n = e.key
      if ((t ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced)) {
        const i = this.storage.getItem(n)
        if (e.newValue !== i)
          null !== e.newValue ? this.storage.setItem(n, e.newValue) : this.storage.removeItem(n)
        else if (this.localCache[n] === e.newValue && !t) return
      }
      const r = () => {
          const e = this.storage.getItem(n)
          ;(t || this.localCache[n] !== e) && this.notifyListeners(n, e)
        },
        o = this.storage.getItem(n)
      ;(0, i.w1)() && 10 === document.documentMode && o !== e.newValue && e.newValue !== e.oldValue
        ? setTimeout(r, 10)
        : r()
    }
    notifyListeners(e, t) {
      this.localCache[e] = t
      const n = this.listeners[e]
      if (n) for (const e of Array.from(n)) e(t ? JSON.parse(t) : t)
    }
    startPolling() {
      ;(this.stopPolling(),
        (this.pollTimer = setInterval(() => {
          this.forAllChangedKeys((e, t, n) => {
            this.onStorageEvent(
              new StorageEvent("storage", { key: e, oldValue: t, newValue: n }),
              !0,
            )
          })
        }, 1e3)))
    }
    stopPolling() {
      this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null))
    }
    attachListener() {
      window.addEventListener("storage", this.boundEventHandler)
    }
    detachListener() {
      window.removeEventListener("storage", this.boundEventHandler)
    }
    _addListener(e, t) {
      ;(0 === Object.keys(this.listeners).length &&
        (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
        this.listeners[e] ||
          ((this.listeners[e] = new Set()), (this.localCache[e] = this.storage.getItem(e))),
        this.listeners[e].add(t))
    }
    _removeListener(e, t) {
      ;(this.listeners[e] &&
        (this.listeners[e].delete(t), 0 === this.listeners[e].size && delete this.listeners[e]),
        0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling()))
    }
    async _set(e, t) {
      ;(await super._set(e, t), (this.localCache[e] = JSON.stringify(t)))
    }
    async _get(e) {
      const t = await super._get(e)
      return ((this.localCache[e] = JSON.stringify(t)), t)
    }
    async _remove(e) {
      ;(await super._remove(e), delete this.localCache[e])
    }
  }
  Qt.type = "LOCAL"
  const en = Qt
  class tn extends Jt {
    constructor() {
      super(() => window.sessionStorage, "SESSION")
    }
    _addListener(e, t) {}
    _removeListener(e, t) {}
  }
  tn.type = "SESSION"
  const nn = tn
  class rn {
    constructor(e) {
      ;((this.eventTarget = e),
        (this.handlersMap = {}),
        (this.boundEventHandler = this.handleEvent.bind(this)))
    }
    static _getInstance(e) {
      const t = this.receivers.find((t) => t.isListeningto(e))
      if (t) return t
      const n = new rn(e)
      return (this.receivers.push(n), n)
    }
    isListeningto(e) {
      return this.eventTarget === e
    }
    async handleEvent(e) {
      const t = e,
        { eventId: n, eventType: i, data: r } = t.data,
        o = this.handlersMap[i]
      if (!(null == o ? void 0 : o.size)) return
      t.ports[0].postMessage({ status: "ack", eventId: n, eventType: i })
      const a = Array.from(o).map(async (e) => e(t.origin, r)),
        s = await (function (e) {
          return Promise.all(
            e.map(async (e) => {
              try {
                return { fulfilled: !0, value: await e }
              } catch (e) {
                return { fulfilled: !1, reason: e }
              }
            }),
          )
        })(a)
      t.ports[0].postMessage({ status: "done", eventId: n, eventType: i, response: s })
    }
    _subscribe(e, t) {
      ;(0 === Object.keys(this.handlersMap).length &&
        this.eventTarget.addEventListener("message", this.boundEventHandler),
        this.handlersMap[e] || (this.handlersMap[e] = new Set()),
        this.handlersMap[e].add(t))
    }
    _unsubscribe(e, t) {
      ;(this.handlersMap[e] && t && this.handlersMap[e].delete(t),
        (t && 0 !== this.handlersMap[e].size) || delete this.handlersMap[e],
        0 === Object.keys(this.handlersMap).length &&
          this.eventTarget.removeEventListener("message", this.boundEventHandler))
    }
  }
  function on(e = "", t = 10) {
    let n = ""
    for (let e = 0; e < t; e++) n += Math.floor(10 * Math.random())
    return e + n
  }
  rn.receivers = []
  class an {
    constructor(e) {
      ;((this.target = e), (this.handlers = new Set()))
    }
    removeMessageHandler(e) {
      ;(e.messageChannel &&
        (e.messageChannel.port1.removeEventListener("message", e.onMessage),
        e.messageChannel.port1.close()),
        this.handlers.delete(e))
    }
    async _send(e, t, n = 50) {
      const i = "undefined" != typeof MessageChannel ? new MessageChannel() : null
      if (!i) throw new Error("connection_unavailable")
      let r, o
      return new Promise((a, s) => {
        const u = on("", 20)
        i.port1.start()
        const l = setTimeout(() => {
          s(new Error("unsupported_event"))
        }, n)
        ;((o = {
          messageChannel: i,
          onMessage(e) {
            const t = e
            if (t.data.eventId === u)
              switch (t.data.status) {
                case "ack":
                  ;(clearTimeout(l),
                    (r = setTimeout(() => {
                      s(new Error("timeout"))
                    }, 3e3)))
                  break
                case "done":
                  ;(clearTimeout(r), a(t.data.response))
                  break
                default:
                  ;(clearTimeout(l), clearTimeout(r), s(new Error("invalid_response")))
              }
          },
        }),
          this.handlers.add(o),
          i.port1.addEventListener("message", o.onMessage),
          this.target.postMessage({ eventType: e, eventId: u, data: t }, [i.port2]))
      }).finally(() => {
        o && this.removeMessageHandler(o)
      })
    }
  }
  function sn() {
    return window
  }
  function un() {
    return void 0 !== sn().WorkerGlobalScope && "function" == typeof sn().importScripts
  }
  const ln = "firebaseLocalStorageDb",
    cn = "firebaseLocalStorage",
    dn = "fbase_key"
  class hn {
    constructor(e) {
      this.request = e
    }
    toPromise() {
      return new Promise((e, t) => {
        ;(this.request.addEventListener("success", () => {
          e(this.request.result)
        }),
          this.request.addEventListener("error", () => {
            t(this.request.error)
          }))
      })
    }
  }
  function pn(e, t) {
    return e.transaction([cn], t ? "readwrite" : "readonly").objectStore(cn)
  }
  function fn() {
    const e = indexedDB.open(ln, 1)
    return new Promise((t, n) => {
      ;(e.addEventListener("error", () => {
        n(e.error)
      }),
        e.addEventListener("upgradeneeded", () => {
          const t = e.result
          try {
            t.createObjectStore(cn, { keyPath: dn })
          } catch (e) {
            n(e)
          }
        }),
        e.addEventListener("success", async () => {
          const n = e.result
          n.objectStoreNames.contains(cn)
            ? t(n)
            : (n.close(),
              await (function () {
                const e = indexedDB.deleteDatabase(ln)
                return new hn(e).toPromise()
              })(),
              t(await fn()))
        }))
    })
  }
  async function _n(e, t, n) {
    const i = pn(e, !0).put({ [dn]: t, value: n })
    return new hn(i).toPromise()
  }
  function gn(e, t) {
    const n = pn(e, !0).delete(t)
    return new hn(n).toPromise()
  }
  class mn {
    constructor() {
      ;((this.type = "LOCAL"),
        (this._shouldAllowMigration = !0),
        (this.listeners = {}),
        (this.localCache = {}),
        (this.pollTimer = null),
        (this.pendingWrites = 0),
        (this.receiver = null),
        (this.sender = null),
        (this.serviceWorkerReceiverAvailable = !1),
        (this.activeServiceWorker = null),
        (this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(
          () => {},
          () => {},
        )))
    }
    async _openDb() {
      return (this.db || (this.db = await fn()), this.db)
    }
    async _withRetries(e) {
      let t = 0
      for (;;)
        try {
          const t = await this._openDb()
          return await e(t)
        } catch (e) {
          if (t++ > 3) throw e
          this.db && (this.db.close(), (this.db = void 0))
        }
    }
    async initializeServiceWorkerMessaging() {
      return un() ? this.initializeReceiver() : this.initializeSender()
    }
    async initializeReceiver() {
      ;((this.receiver = rn._getInstance(un() ? self : null)),
        this.receiver._subscribe("keyChanged", async (e, t) => ({
          keyProcessed: (await this._poll()).includes(t.key),
        })),
        this.receiver._subscribe("ping", async (e, t) => ["keyChanged"]))
    }
    async initializeSender() {
      var e, t
      if (
        ((this.activeServiceWorker = await (async function () {
          if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker))
            return null
          try {
            return (await navigator.serviceWorker.ready).active
          } catch (e) {
            return null
          }
        })()),
        !this.activeServiceWorker)
      )
        return
      this.sender = new an(this.activeServiceWorker)
      const n = await this.sender._send("ping", {}, 800)
      n &&
        (null === (e = n[0]) || void 0 === e ? void 0 : e.fulfilled) &&
        (null === (t = n[0]) || void 0 === t ? void 0 : t.value.includes("keyChanged")) &&
        (this.serviceWorkerReceiverAvailable = !0)
    }
    async notifyServiceWorker(e) {
      var t
      if (
        this.sender &&
        this.activeServiceWorker &&
        ((null ===
          (t = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) ||
        void 0 === t
          ? void 0
          : t.controller) || null) === this.activeServiceWorker
      )
        try {
          await this.sender._send(
            "keyChanged",
            { key: e },
            this.serviceWorkerReceiverAvailable ? 800 : 50,
          )
        } catch (t) {}
    }
    async _isAvailable() {
      try {
        if (!indexedDB) return !1
        const e = await fn()
        return (await _n(e, $t, "1"), await gn(e, $t), !0)
      } catch (e) {}
      return !1
    }
    async _withPendingWrite(e) {
      this.pendingWrites++
      try {
        await e()
      } finally {
        this.pendingWrites--
      }
    }
    async _set(e, t) {
      return this._withPendingWrite(
        async () => (
          await this._withRetries((n) => _n(n, e, t)),
          (this.localCache[e] = t),
          this.notifyServiceWorker(e)
        ),
      )
    }
    async _get(e) {
      const t = await this._withRetries((t) =>
        (async function (e, t) {
          const n = pn(e, !1).get(t),
            i = await new hn(n).toPromise()
          return void 0 === i ? null : i.value
        })(t, e),
      )
      return ((this.localCache[e] = t), t)
    }
    async _remove(e) {
      return this._withPendingWrite(
        async () => (
          await this._withRetries((t) => gn(t, e)),
          delete this.localCache[e],
          this.notifyServiceWorker(e)
        ),
      )
    }
    async _poll() {
      const e = await this._withRetries((e) => {
        const t = pn(e, !1).getAll()
        return new hn(t).toPromise()
      })
      if (!e) return []
      if (0 !== this.pendingWrites) return []
      const t = [],
        n = new Set()
      for (const { fbase_key: i, value: r } of e)
        (n.add(i),
          JSON.stringify(this.localCache[i]) !== JSON.stringify(r) &&
            (this.notifyListeners(i, r), t.push(i)))
      for (const e of Object.keys(this.localCache))
        this.localCache[e] && !n.has(e) && (this.notifyListeners(e, null), t.push(e))
      return t
    }
    notifyListeners(e, t) {
      this.localCache[e] = t
      const n = this.listeners[e]
      if (n) for (const e of Array.from(n)) e(t)
    }
    startPolling() {
      ;(this.stopPolling(), (this.pollTimer = setInterval(async () => this._poll(), 800)))
    }
    stopPolling() {
      this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null))
    }
    _addListener(e, t) {
      ;(0 === Object.keys(this.listeners).length && this.startPolling(),
        this.listeners[e] || ((this.listeners[e] = new Set()), this._get(e)),
        this.listeners[e].add(t))
    }
    _removeListener(e, t) {
      ;(this.listeners[e] &&
        (this.listeners[e].delete(t), 0 === this.listeners[e].size && delete this.listeners[e]),
        0 === Object.keys(this.listeners).length && this.stopPolling())
    }
  }
  mn.type = "LOCAL"
  const vn = mn
  function yn(e) {
    return new Promise((t, n) => {
      const i = document.createElement("script")
      var r, o
      ;(i.setAttribute("src", e),
        (i.onload = t),
        (i.onerror = (e) => {
          const t = b("internal-error")
          ;((t.customData = e), n(t))
        }),
        (i.type = "text/javascript"),
        (i.charset = "UTF-8"),
        (null !==
          (o =
            null === (r = document.getElementsByTagName("head")) || void 0 === r ? void 0 : r[0]) &&
        void 0 !== o
          ? o
          : document
        ).appendChild(i))
    })
  }
  function Cn(e) {
    return `__${e}${Math.floor(1e6 * Math.random())}`
  }
  const bn = 1e12
  class wn {
    constructor(e) {
      ;((this.auth = e), (this.counter = bn), (this._widgets = new Map()))
    }
    render(e, t) {
      const n = this.counter
      return (this._widgets.set(n, new xn(e, this.auth.name, t || {})), this.counter++, n)
    }
    reset(e) {
      var t
      const n = e || bn
      ;(null === (t = this._widgets.get(n)) || void 0 === t || t.delete(), this._widgets.delete(n))
    }
    getResponse(e) {
      var t
      const n = e || bn
      return (null === (t = this._widgets.get(n)) || void 0 === t ? void 0 : t.getResponse()) || ""
    }
    async execute(e) {
      var t
      const n = e || bn
      return (null === (t = this._widgets.get(n)) || void 0 === t || t.execute(), "")
    }
  }
  class xn {
    constructor(e, t, n) {
      ;((this.params = n),
        (this.timerId = null),
        (this.deleted = !1),
        (this.responseToken = null),
        (this.clickHandler = () => {
          this.execute()
        }))
      const i = "string" == typeof e ? document.getElementById(e) : e
      ;(S(i, "argument-error", { appName: t }),
        (this.container = i),
        (this.isVisible = "invisible" !== this.params.size),
        this.isVisible
          ? this.execute()
          : this.container.addEventListener("click", this.clickHandler))
    }
    getResponse() {
      return (this.checkIfDeleted(), this.responseToken)
    }
    delete() {
      ;(this.checkIfDeleted(),
        (this.deleted = !0),
        this.timerId && (clearTimeout(this.timerId), (this.timerId = null)),
        this.container.removeEventListener("click", this.clickHandler))
    }
    execute() {
      ;(this.checkIfDeleted(),
        this.timerId ||
          (this.timerId = window.setTimeout(() => {
            this.responseToken = (function (e) {
              const t = [],
                n = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
              for (let i = 0; i < e; i++) t.push(n.charAt(Math.floor(Math.random() * n.length)))
              return t.join("")
            })(50)
            const { callback: e, "expired-callback": t } = this.params
            if (e)
              try {
                e(this.responseToken)
              } catch (e) {}
            this.timerId = window.setTimeout(() => {
              if (((this.timerId = null), (this.responseToken = null), t))
                try {
                  t()
                } catch (e) {}
              this.isVisible && this.execute()
            }, 6e4)
          }, 500)))
    }
    checkIfDeleted() {
      if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
    }
  }
  const Tn = Cn("rcb"),
    Sn = new k(3e4, 6e4)
  class Ln {
    constructor() {
      var e
      ;((this.hostLanguage = ""),
        (this.counter = 0),
        (this.librarySeparatelyLoaded = !!(null === (e = sn().grecaptcha) || void 0 === e
          ? void 0
          : e.render)))
    }
    load(e, t = "") {
      return (
        S(
          (function (e) {
            return e.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(e)
          })(t),
          e,
          "argument-error",
        ),
        this.shouldResolveImmediately(t)
          ? Promise.resolve(sn().grecaptcha)
          : new Promise((n, r) => {
              const o = sn().setTimeout(() => {
                r(b(e, "network-request-failed"))
              }, Sn.get())
              sn()[Tn] = () => {
                ;(sn().clearTimeout(o), delete sn()[Tn])
                const i = sn().grecaptcha
                if (!i) return void r(b(e, "internal-error"))
                const a = i.render
                ;((i.render = (e, t) => {
                  const n = a(e, t)
                  return (this.counter++, n)
                }),
                  (this.hostLanguage = t),
                  n(i))
              }
              yn(
                `https://www.google.com/recaptcha/api.js??${(0, i.xO)({ onload: Tn, render: "explicit", hl: t })}`,
              ).catch(() => {
                ;(clearTimeout(o), r(b(e, "internal-error")))
              })
            })
      )
    }
    clearedOneInstance() {
      this.counter--
    }
    shouldResolveImmediately(e) {
      var t
      return (
        !!(null === (t = sn().grecaptcha) || void 0 === t ? void 0 : t.render) &&
        (e === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
      )
    }
  }
  class En {
    async load(e) {
      return new wn(e)
    }
    clearedOneInstance() {}
  }
  const An = "recaptcha",
    In = { theme: "light", type: "image" }
  class Mn {
    constructor(e, t = Object.assign({}, In), n) {
      ;((this.parameters = t),
        (this.type = An),
        (this.destroyed = !1),
        (this.widgetId = null),
        (this.tokenChangeListeners = new Set()),
        (this.renderPromise = null),
        (this.recaptcha = null),
        (this.auth = we(n)),
        (this.isInvisible = "invisible" === this.parameters.size),
        S("undefined" != typeof document, this.auth, "operation-not-supported-in-this-environment"))
      const i = "string" == typeof e ? document.getElementById(e) : e
      ;(S(i, this.auth, "argument-error"),
        (this.container = i),
        (this.parameters.callback = this.makeTokenCallback(this.parameters.callback)),
        (this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting
          ? new En()
          : new Ln()),
        this.validateStartingState())
    }
    async verify() {
      this.assertNotDestroyed()
      const e = await this.render(),
        t = this.getAssertedRecaptcha(),
        n = t.getResponse(e)
      return (
        n ||
        new Promise((n) => {
          const i = (e) => {
            e && (this.tokenChangeListeners.delete(i), n(e))
          }
          ;(this.tokenChangeListeners.add(i), this.isInvisible && t.execute(e))
        })
      )
    }
    render() {
      try {
        this.assertNotDestroyed()
      } catch (e) {
        return Promise.reject(e)
      }
      return (
        this.renderPromise ||
          (this.renderPromise = this.makeRenderPromise().catch((e) => {
            throw ((this.renderPromise = null), e)
          })),
        this.renderPromise
      )
    }
    _reset() {
      ;(this.assertNotDestroyed(),
        null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId))
    }
    clear() {
      ;(this.assertNotDestroyed(),
        (this.destroyed = !0),
        this._recaptchaLoader.clearedOneInstance(),
        this.isInvisible ||
          this.container.childNodes.forEach((e) => {
            this.container.removeChild(e)
          }))
    }
    validateStartingState() {
      ;(S(!this.parameters.sitekey, this.auth, "argument-error"),
        S(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"),
        S("undefined" != typeof document, this.auth, "operation-not-supported-in-this-environment"))
    }
    makeTokenCallback(e) {
      return (t) => {
        if ((this.tokenChangeListeners.forEach((e) => e(t)), "function" == typeof e)) e(t)
        else if ("string" == typeof e) {
          const n = sn()[e]
          "function" == typeof n && n(t)
        }
      }
    }
    assertNotDestroyed() {
      S(!this.destroyed, this.auth, "internal-error")
    }
    async makeRenderPromise() {
      if ((await this.init(), !this.widgetId)) {
        let e = this.container
        if (!this.isInvisible) {
          const t = document.createElement("div")
          ;(e.appendChild(t), (e = t))
        }
        this.widgetId = this.getAssertedRecaptcha().render(e, this.parameters)
      }
      return this.widgetId
    }
    async init() {
      ;(S(O() && !un(), this.auth, "internal-error"),
        await (function () {
          let e = null
          return new Promise((t) => {
            "complete" !== document.readyState
              ? ((e = () => t()), window.addEventListener("load", e))
              : t()
          }).catch((t) => {
            throw (e && window.removeEventListener("load", e), t)
          })
        })(),
        (this.recaptcha = await this._recaptchaLoader.load(
          this.auth,
          this.auth.languageCode || void 0,
        )))
      const e = await (async function (e) {
        return (await G(e, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
      })(this.auth)
      ;(S(e, this.auth, "internal-error"), (this.parameters.sitekey = e))
    }
    getAssertedRecaptcha() {
      return (S(this.recaptcha, this.auth, "internal-error"), this.recaptcha)
    }
  }
  class Pn {
    constructor(e, t) {
      ;((this.verificationId = e), (this.onConfirmation = t))
    }
    confirm(e) {
      const t = Ne._fromVerification(this.verificationId, e)
      return this.onConfirmation(t)
    }
  }
  async function On(e, t, n) {
    const r = we(e),
      o = await Nn(r, t, (0, i.m9)(n))
    return new Pn(o, (e) => at(r, e))
  }
  async function Rn(e, t, n) {
    const r = (0, i.m9)(e)
    await it(!1, r, "phone")
    const o = await Nn(r.auth, t, (0, i.m9)(n))
    return new Pn(o, (e) => st(r, e))
  }
  async function kn(e, t, n) {
    const r = (0, i.m9)(e),
      o = await Nn(r.auth, t, (0, i.m9)(n))
    return new Pn(o, (e) => ut(r, e))
  }
  async function Nn(e, t, n) {
    var i
    const r = await n.verify()
    try {
      let o
      if (
        (S("string" == typeof r, e, "argument-error"),
        S(n.type === An, e, "argument-error"),
        (o = "string" == typeof t ? { phoneNumber: t } : t),
        "session" in o)
      ) {
        const t = o.session
        if ("phoneNumber" in o) {
          S("enroll" === t.type, e, "internal-error")
          const n = await (function (e, t) {
            return G(e, "POST", "/v2/accounts/mfaEnrollment:start", U(e, t))
          })(e, {
            idToken: t.credential,
            phoneEnrollmentInfo: { phoneNumber: o.phoneNumber, recaptchaToken: r },
          })
          return n.phoneSessionInfo.sessionInfo
        }
        {
          S("signin" === t.type, e, "internal-error")
          const n =
            (null === (i = o.multiFactorHint) || void 0 === i ? void 0 : i.uid) || o.multiFactorUid
          S(n, e, "missing-multi-factor-info")
          const a = await (function (e, t) {
            return G(e, "POST", "/v2/accounts/mfaSignIn:start", U(e, t))
          })(e, {
            mfaPendingCredential: t.credential,
            mfaEnrollmentId: n,
            phoneSignInInfo: { recaptchaToken: r },
          })
          return a.phoneResponseInfo.sessionInfo
        }
      }
      {
        const { sessionInfo: t } = await (async function (e, t) {
          return G(e, "POST", "/v1/accounts:sendVerificationCode", U(e, t))
        })(e, { phoneNumber: o.phoneNumber, recaptchaToken: r })
        return t
      }
    } finally {
      n._reset()
    }
  }
  async function Dn(e, t) {
    await nt((0, i.m9)(e), t)
  }
  class Bn {
    constructor(e) {
      ;((this.providerId = Bn.PROVIDER_ID), (this.auth = we(e)))
    }
    verifyPhoneNumber(e, t) {
      return Nn(this.auth, e, (0, i.m9)(t))
    }
    static credential(e, t) {
      return Ne._fromVerification(e, t)
    }
    static credentialFromResult(e) {
      const t = e
      return Bn.credentialFromTaggedObject(t)
    }
    static credentialFromError(e) {
      return Bn.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({ _tokenResponse: e }) {
      if (!e) return null
      const { phoneNumber: t, temporaryProof: n } = e
      return t && n ? Ne._fromTokenResponse(t, n) : null
    }
  }
  function Fn(e, t) {
    return t ? I(t) : (S(e._popupRedirectResolver, e, "argument-error"), e._popupRedirectResolver)
  }
  ;((Bn.PROVIDER_ID = "phone"), (Bn.PHONE_SIGN_IN_METHOD = "phone"))
  class Un extends Ee {
    constructor(e) {
      ;(super("custom", "custom"), (this.params = e))
    }
    _getIdTokenResponse(e) {
      return Oe(e, this._buildIdpRequest())
    }
    _linkToIdToken(e, t) {
      return Oe(e, this._buildIdpRequest(t))
    }
    _getReauthenticationResolver(e) {
      return Oe(e, this._buildIdpRequest())
    }
    _buildIdpRequest(e) {
      const t = {
        requestUri: this.params.requestUri,
        sessionId: this.params.sessionId,
        postBody: this.params.postBody,
        tenantId: this.params.tenantId,
        pendingToken: this.params.pendingToken,
        returnSecureToken: !0,
        returnIdpCredential: !0,
      }
      return (e && (t.idToken = e), t)
    }
  }
  function Gn(e) {
    return ot(e.auth, new Un(e), e.bypassAuthState)
  }
  function jn(e) {
    const { auth: t, user: n } = e
    return (S(n, t, "internal-error"), rt(n, new Un(e), e.bypassAuthState))
  }
  async function Hn(e) {
    const { auth: t, user: n } = e
    return (S(n, t, "internal-error"), nt(n, new Un(e), e.bypassAuthState))
  }
  class Vn {
    constructor(e, t, n, i, r = !1) {
      ;((this.auth = e),
        (this.resolver = n),
        (this.user = i),
        (this.bypassAuthState = r),
        (this.pendingPromise = null),
        (this.eventManager = null),
        (this.filter = Array.isArray(t) ? t : [t]))
    }
    execute() {
      return new Promise(async (e, t) => {
        this.pendingPromise = { resolve: e, reject: t }
        try {
          ;((this.eventManager = await this.resolver._initialize(this.auth)),
            await this.onExecution(),
            this.eventManager.registerConsumer(this))
        } catch (e) {
          this.reject(e)
        }
      })
    }
    async onAuthEvent(e) {
      const { urlResponse: t, sessionId: n, postBody: i, tenantId: r, error: o, type: a } = e
      if (o) return void this.reject(o)
      const s = {
        auth: this.auth,
        requestUri: t,
        sessionId: n,
        tenantId: r || void 0,
        postBody: i || void 0,
        user: this.user,
        bypassAuthState: this.bypassAuthState,
      }
      try {
        this.resolve(await this.getIdpTask(a)(s))
      } catch (e) {
        this.reject(e)
      }
    }
    onError(e) {
      this.reject(e)
    }
    getIdpTask(e) {
      switch (e) {
        case "signInViaPopup":
        case "signInViaRedirect":
          return Gn
        case "linkViaPopup":
        case "linkViaRedirect":
          return Hn
        case "reauthViaPopup":
        case "reauthViaRedirect":
          return jn
        default:
          C(this.auth, "internal-error")
      }
    }
    resolve(e) {
      ;(E(this.pendingPromise, "Pending promise was never set"),
        this.pendingPromise.resolve(e),
        this.unregisterAndCleanUp())
    }
    reject(e) {
      ;(E(this.pendingPromise, "Pending promise was never set"),
        this.pendingPromise.reject(e),
        this.unregisterAndCleanUp())
    }
    unregisterAndCleanUp() {
      ;(this.eventManager && this.eventManager.unregisterConsumer(this),
        (this.pendingPromise = null),
        this.cleanUp())
    }
  }
  const Zn = new k(2e3, 1e4)
  async function zn(e, t, n) {
    const i = we(e)
    x(e, t, Ue)
    const r = Fn(i, n)
    return new Xn(i, "signInViaPopup", t, r).executeNotNull()
  }
  async function Yn(e, t, n) {
    const r = (0, i.m9)(e)
    x(r.auth, t, Ue)
    const o = Fn(r.auth, n)
    return new Xn(r.auth, "reauthViaPopup", t, o, r).executeNotNull()
  }
  async function Wn(e, t, n) {
    const r = (0, i.m9)(e)
    x(r.auth, t, Ue)
    const o = Fn(r.auth, n)
    return new Xn(r.auth, "linkViaPopup", t, o, r).executeNotNull()
  }
  class Xn extends Vn {
    constructor(e, t, n, i, r) {
      ;(super(e, t, i, r),
        (this.provider = n),
        (this.authWindow = null),
        (this.pollId = null),
        Xn.currentPopupAction && Xn.currentPopupAction.cancel(),
        (Xn.currentPopupAction = this))
    }
    async executeNotNull() {
      const e = await this.execute()
      return (S(e, this.auth, "internal-error"), e)
    }
    async onExecution() {
      E(1 === this.filter.length, "Popup operations only handle one event")
      const e = on()
      ;((this.authWindow = await this.resolver._openPopup(
        this.auth,
        this.provider,
        this.filter[0],
        e,
      )),
        (this.authWindow.associatedEvent = e),
        this.resolver._originValidation(this.auth).catch((e) => {
          this.reject(e)
        }),
        this.resolver._isIframeWebStorageSupported(this.auth, (e) => {
          e || this.reject(b(this.auth, "web-storage-unsupported"))
        }),
        this.pollUserCancellation())
    }
    get eventId() {
      var e
      return (null === (e = this.authWindow) || void 0 === e ? void 0 : e.associatedEvent) || null
    }
    cancel() {
      this.reject(b(this.auth, "cancelled-popup-request"))
    }
    cleanUp() {
      ;(this.authWindow && this.authWindow.close(),
        this.pollId && window.clearTimeout(this.pollId),
        (this.authWindow = null),
        (this.pollId = null),
        (Xn.currentPopupAction = null))
    }
    pollUserCancellation() {
      const e = () => {
        var t, n
        ;(
          null === (n = null === (t = this.authWindow) || void 0 === t ? void 0 : t.window) ||
          void 0 === n
            ? void 0
            : n.closed
        )
          ? (this.pollId = window.setTimeout(() => {
              ;((this.pollId = null), this.reject(b(this.auth, "popup-closed-by-user")))
            }, 2e3))
          : (this.pollId = window.setTimeout(e, Zn.get()))
      }
      e()
    }
  }
  Xn.currentPopupAction = null
  const qn = new Map()
  class Kn extends Vn {
    constructor(e, t, n = !1) {
      ;(super(
        e,
        ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"],
        t,
        void 0,
        n,
      ),
        (this.eventId = null))
    }
    async execute() {
      let e = qn.get(this.auth._key())
      if (!e) {
        try {
          const t = (await (async function (e, t) {
            const n = ei(t),
              i = Qn(e)
            if (!(await i._isAvailable())) return !1
            const r = "true" === (await i._get(n))
            return (await i._remove(n), r)
          })(this.resolver, this.auth))
            ? await super.execute()
            : null
          e = () => Promise.resolve(t)
        } catch (t) {
          e = () => Promise.reject(t)
        }
        qn.set(this.auth._key(), e)
      }
      return (this.bypassAuthState || qn.set(this.auth._key(), () => Promise.resolve(null)), e())
    }
    async onAuthEvent(e) {
      if ("signInViaRedirect" === e.type) return super.onAuthEvent(e)
      if ("unknown" !== e.type) {
        if (e.eventId) {
          const t = await this.auth._redirectUserForId(e.eventId)
          if (t) return ((this.user = t), super.onAuthEvent(e))
          this.resolve(null)
        }
      } else this.resolve(null)
    }
    async onExecution() {}
    cleanUp() {}
  }
  async function $n(e, t) {
    return Qn(e)._set(ei(t), "true")
  }
  function Jn(e, t) {
    qn.set(e._key(), t)
  }
  function Qn(e) {
    return I(e._redirectPersistence)
  }
  function ei(e) {
    return se("pendingRedirect", e.config.apiKey, e.name)
  }
  function ti(e, t, n) {
    return (async function (e, t, n) {
      const i = we(e)
      x(e, t, Ue)
      const r = Fn(i, n)
      return (await $n(r, i), r._openRedirect(i, t, "signInViaRedirect"))
    })(e, t, n)
  }
  function ni(e, t, n) {
    return (async function (e, t, n) {
      const r = (0, i.m9)(e)
      x(r.auth, t, Ue)
      const o = Fn(r.auth, n)
      await $n(o, r.auth)
      const a = await ai(r)
      return o._openRedirect(r.auth, t, "reauthViaRedirect", a)
    })(e, t, n)
  }
  function ii(e, t, n) {
    return (async function (e, t, n) {
      const r = (0, i.m9)(e)
      x(r.auth, t, Ue)
      const o = Fn(r.auth, n)
      ;(await it(!1, r, t.providerId), await $n(o, r.auth))
      const a = await ai(r)
      return o._openRedirect(r.auth, t, "linkViaRedirect", a)
    })(e, t, n)
  }
  async function ri(e, t) {
    return (await we(e)._initializationPromise, oi(e, t, !1))
  }
  async function oi(e, t, n = !1) {
    const i = we(e),
      r = Fn(i, t),
      o = new Kn(i, r, n),
      a = await o.execute()
    return (
      a &&
        !n &&
        (delete a.user._redirectEventId,
        await i._persistUserIfCurrent(a.user),
        await i._setRedirectUser(null, t)),
      a
    )
  }
  async function ai(e) {
    const t = on(`${e.uid}:::`)
    return (
      (e._redirectEventId = t),
      await e.auth._setRedirectUser(e),
      await e.auth._persistUserIfCurrent(e),
      t
    )
  }
  class si {
    constructor(e) {
      ;((this.auth = e),
        (this.cachedEventUids = new Set()),
        (this.consumers = new Set()),
        (this.queuedRedirectEvent = null),
        (this.hasHandledPotentialRedirect = !1),
        (this.lastProcessedEventTime = Date.now()))
    }
    registerConsumer(e) {
      ;(this.consumers.add(e),
        this.queuedRedirectEvent &&
          this.isEventForConsumer(this.queuedRedirectEvent, e) &&
          (this.sendToConsumer(this.queuedRedirectEvent, e),
          this.saveEventToCache(this.queuedRedirectEvent),
          (this.queuedRedirectEvent = null)))
    }
    unregisterConsumer(e) {
      this.consumers.delete(e)
    }
    onEvent(e) {
      if (this.hasEventBeenHandled(e)) return !1
      let t = !1
      return (
        this.consumers.forEach((n) => {
          this.isEventForConsumer(e, n) &&
            ((t = !0), this.sendToConsumer(e, n), this.saveEventToCache(e))
        }),
        this.hasHandledPotentialRedirect ||
          !(function (e) {
            switch (e.type) {
              case "signInViaRedirect":
              case "linkViaRedirect":
              case "reauthViaRedirect":
                return !0
              case "unknown":
                return li(e)
              default:
                return !1
            }
          })(e) ||
          ((this.hasHandledPotentialRedirect = !0),
          t || ((this.queuedRedirectEvent = e), (t = !0))),
        t
      )
    }
    sendToConsumer(e, t) {
      var n
      if (e.error && !li(e)) {
        const i =
          (null === (n = e.error.code) || void 0 === n ? void 0 : n.split("auth/")[1]) ||
          "internal-error"
        t.onError(b(this.auth, i))
      } else t.onAuthEvent(e)
    }
    isEventForConsumer(e, t) {
      const n = null === t.eventId || (!!e.eventId && e.eventId === t.eventId)
      return t.filter.includes(e.type) && n
    }
    hasEventBeenHandled(e) {
      return (
        Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(),
        this.cachedEventUids.has(ui(e))
      )
    }
    saveEventToCache(e) {
      ;(this.cachedEventUids.add(ui(e)), (this.lastProcessedEventTime = Date.now()))
    }
  }
  function ui(e) {
    return [e.type, e.eventId, e.sessionId, e.tenantId].filter((e) => e).join("-")
  }
  function li({ type: e, error: t }) {
    return "unknown" === e && "auth/no-auth-event" === (null == t ? void 0 : t.code)
  }
  const ci = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
    di = /^https?/
  async function hi(e) {
    if (e.config.emulator) return
    const { authorizedDomains: t } = await (async function (e, t = {}) {
      return G(e, "GET", "/v1/projects", t)
    })(e)
    for (const e of t)
      try {
        if (pi(e)) return
      } catch (e) {}
    C(e, "unauthorized-domain")
  }
  function pi(e) {
    const t = P(),
      { protocol: n, hostname: i } = new URL(t)
    if (e.startsWith("chrome-extension://")) {
      const r = new URL(e)
      return "" === r.hostname && "" === i
        ? "chrome-extension:" === n &&
            e.replace("chrome-extension://", "") === t.replace("chrome-extension://", "")
        : "chrome-extension:" === n && r.hostname === i
    }
    if (!di.test(n)) return !1
    if (ci.test(e)) return i === e
    const r = e.replace(/\./g, "\\.")
    return new RegExp("^(.+\\." + r + "|" + r + ")$", "i").test(i)
  }
  const fi = new k(3e4, 6e4)
  function _i() {
    const e = sn().___jsl
    if (null == e ? void 0 : e.H)
      for (const t of Object.keys(e.H))
        if (
          ((e.H[t].r = e.H[t].r || []),
          (e.H[t].L = e.H[t].L || []),
          (e.H[t].r = [...e.H[t].L]),
          e.CP)
        )
          for (let t = 0; t < e.CP.length; t++) e.CP[t] = null
  }
  let gi = null
  function mi(e) {
    return (
      (gi =
        gi ||
        (function (e) {
          return new Promise((t, n) => {
            var i, r, o
            function a() {
              ;(_i(),
                gapi.load("gapi.iframes", {
                  callback: () => {
                    t(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    ;(_i(), n(b(e, "network-request-failed")))
                  },
                  timeout: fi.get(),
                }))
            }
            if (
              null === (r = null === (i = sn().gapi) || void 0 === i ? void 0 : i.iframes) ||
              void 0 === r
                ? void 0
                : r.Iframe
            )
              t(gapi.iframes.getContext())
            else {
              if (!(null === (o = sn().gapi) || void 0 === o ? void 0 : o.load)) {
                const t = Cn("iframefcb")
                return (
                  (sn()[t] = () => {
                    gapi.load ? a() : n(b(e, "network-request-failed"))
                  }),
                  yn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e) => n(e))
                )
              }
              a()
            }
          }).catch((e) => {
            throw ((gi = null), e)
          })
        })(e)),
      gi
    )
  }
  const vi = new k(5e3, 15e3),
    yi = {
      style: { position: "absolute", top: "-100px", width: "1px", height: "1px" },
      "aria-hidden": "true",
      tabindex: "-1",
    },
    Ci = new Map([
      ["identitytoolkit.googleapis.com", "p"],
      ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
      ["test-identitytoolkit.sandbox.googleapis.com", "t"],
    ])
  function bi(e) {
    const t = e.config
    S(t.authDomain, e, "auth-domain-config-required")
    const n = t.emulator
        ? N(t, "emulator/auth/iframe")
        : `https://${e.config.authDomain}/__/auth/iframe`,
      o = { apiKey: t.apiKey, appName: e.name, v: r.Jn },
      a = Ci.get(e.config.apiHost)
    a && (o.eid = a)
    const s = e._getFrameworks()
    return (s.length && (o.fw = s.join(",")), `${n}?${(0, i.xO)(o).slice(1)}`)
  }
  const wi = { location: "yes", resizable: "yes", statusbar: "yes", toolbar: "no" }
  class xi {
    constructor(e) {
      ;((this.window = e), (this.associatedEvent = null))
    }
    close() {
      if (this.window)
        try {
          this.window.close()
        } catch (e) {}
    }
  }
  function Ti(e, t, n, r = 500, o = 600) {
    const a = Math.max((window.screen.availHeight - o) / 2, 0).toString(),
      s = Math.max((window.screen.availWidth - r) / 2, 0).toString()
    let u = ""
    const l = Object.assign(Object.assign({}, wi), {
        width: r.toString(),
        height: o.toString(),
        top: a,
        left: s,
      }),
      c = (0, i.z$)().toLowerCase()
    ;(n && (u = he(c) ? "_blank" : n),
      ce(c) && ((t = t || "http://localhost"), (l.scrollbars = "yes")))
    const d = Object.entries(l).reduce((e, [t, n]) => `${e}${t}=${n},`, "")
    if (
      (function (e = (0, i.z$)()) {
        var t
        return me(e) && !!(null === (t = window.navigator) || void 0 === t ? void 0 : t.standalone)
      })(c) &&
      "_self" !== u
    )
      return (
        (function (e, t) {
          const n = document.createElement("a")
          ;((n.href = e), (n.target = t))
          const i = document.createEvent("MouseEvent")
          ;(i.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null),
            n.dispatchEvent(i))
        })(t || "", u),
        new xi(null)
      )
    const h = window.open(t || "", u, d)
    S(h, e, "popup-blocked")
    try {
      h.focus()
    } catch (e) {}
    return new xi(h)
  }
  const Si = "__/auth/handler",
    Li = "emulator/auth/handler"
  function Ei(e, t, n, o, a, s) {
    ;(S(e.config.authDomain, e, "auth-domain-config-required"),
      S(e.config.apiKey, e, "invalid-api-key"))
    const u = {
      apiKey: e.config.apiKey,
      appName: e.name,
      authType: n,
      redirectUrl: o,
      v: r.Jn,
      eventId: a,
    }
    if (t instanceof Ue) {
      ;(t.setDefaultLanguage(e.languageCode),
        (u.providerId = t.providerId || ""),
        (0, i.xb)(t.getCustomParameters()) ||
          (u.customParameters = JSON.stringify(t.getCustomParameters())))
      for (const [e, t] of Object.entries(s || {})) u[e] = t
    }
    if (t instanceof Ge) {
      const e = t.getScopes().filter((e) => "" !== e)
      e.length > 0 && (u.scopes = e.join(","))
    }
    e.tenantId && (u.tid = e.tenantId)
    const l = u
    for (const e of Object.keys(l)) void 0 === l[e] && delete l[e]
    return `${(function ({ config: e }) {
      if (!e.emulator) return `https://${e.authDomain}/${Si}`
      return N(e, Li)
    })(e)}?${(0, i.xO)(l).slice(1)}`
  }
  const Ai = "webStorageSupport"
  const Ii = class {
    constructor() {
      ;((this.eventManagers = {}),
        (this.iframes = {}),
        (this.originValidationPromises = {}),
        (this._redirectPersistence = nn),
        (this._completeRedirectFn = oi),
        (this._overrideRedirectResult = Jn))
    }
    async _openPopup(e, t, n, i) {
      var r
      E(
        null === (r = this.eventManagers[e._key()]) || void 0 === r ? void 0 : r.manager,
        "_initialize() not called before _openPopup()",
      )
      return Ti(e, Ei(e, t, n, P(), i), on())
    }
    async _openRedirect(e, t, n, i) {
      var r
      return (
        await this._originValidation(e),
        (r = Ei(e, t, n, P(), i)),
        (sn().location.href = r),
        new Promise(() => {})
      )
    }
    _initialize(e) {
      const t = e._key()
      if (this.eventManagers[t]) {
        const { manager: e, promise: n } = this.eventManagers[t]
        return e ? Promise.resolve(e) : (E(n, "If manager is not set, promise should be"), n)
      }
      const n = this.initAndGetManager(e)
      return (
        (this.eventManagers[t] = { promise: n }),
        n.catch(() => {
          delete this.eventManagers[t]
        }),
        n
      )
    }
    async initAndGetManager(e) {
      const t = await (async function (e) {
          const t = await mi(e),
            n = sn().gapi
          return (
            S(n, e, "internal-error"),
            t.open(
              {
                where: document.body,
                url: bi(e),
                messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
                attributes: yi,
                dontclear: !0,
              },
              (t) =>
                new Promise(async (n, i) => {
                  await t.restyle({ setHideOnLeave: !1 })
                  const r = b(e, "network-request-failed"),
                    o = sn().setTimeout(() => {
                      i(r)
                    }, vi.get())
                  function a() {
                    ;(sn().clearTimeout(o), n(t))
                  }
                  t.ping(a).then(a, () => {
                    i(r)
                  })
                }),
            )
          )
        })(e),
        n = new si(e)
      return (
        t.register(
          "authEvent",
          (t) => {
            S(null == t ? void 0 : t.authEvent, e, "invalid-auth-event")
            return { status: n.onEvent(t.authEvent) ? "ACK" : "ERROR" }
          },
          gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        ),
        (this.eventManagers[e._key()] = { manager: n }),
        (this.iframes[e._key()] = t),
        n
      )
    }
    _isIframeWebStorageSupported(e, t) {
      this.iframes[e._key()].send(
        Ai,
        { type: Ai },
        (n) => {
          var i
          const r = null === (i = null == n ? void 0 : n[0]) || void 0 === i ? void 0 : i[Ai]
          ;(void 0 !== r && t(!!r), C(e, "internal-error"))
        },
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
      )
    }
    _originValidation(e) {
      const t = e._key()
      return (
        this.originValidationPromises[t] || (this.originValidationPromises[t] = hi(e)),
        this.originValidationPromises[t]
      )
    }
    get _shouldInitProactively() {
      return ve() || de() || me()
    }
  }
  class Mi {
    constructor(e) {
      this.factorId = e
    }
    _process(e, t, n) {
      switch (t.type) {
        case "enroll":
          return this._finalizeEnroll(e, t.credential, n)
        case "signin":
          return this._finalizeSignIn(e, t.credential)
        default:
          return L("unexpected MultiFactorSessionType")
      }
    }
  }
  class Pi extends Mi {
    constructor(e) {
      ;(super("phone"), (this.credential = e))
    }
    static _fromCredential(e) {
      return new Pi(e)
    }
    _finalizeEnroll(e, t, n) {
      return (function (e, t) {
        return G(e, "POST", "/v2/accounts/mfaEnrollment:finalize", U(e, t))
      })(e, {
        idToken: t,
        displayName: n,
        phoneVerificationInfo: this.credential._makeVerificationRequest(),
      })
    }
    _finalizeSignIn(e, t) {
      return (function (e, t) {
        return G(e, "POST", "/v2/accounts/mfaSignIn:finalize", U(e, t))
      })(e, {
        mfaPendingCredential: t,
        phoneVerificationInfo: this.credential._makeVerificationRequest(),
      })
    }
  }
  class Oi {
    constructor() {}
    static assertion(e) {
      return Pi._fromCredential(e)
    }
  }
  Oi.FACTOR_ID = "phone"
  var Ri = "@firebase/auth",
    ki = "0.21.0"
  class Ni {
    constructor(e) {
      ;((this.auth = e), (this.internalListeners = new Map()))
    }
    getUid() {
      var e
      return (
        this.assertAuthConfigured(),
        (null === (e = this.auth.currentUser) || void 0 === e ? void 0 : e.uid) || null
      )
    }
    async getToken(e) {
      if (
        (this.assertAuthConfigured(),
        await this.auth._initializationPromise,
        !this.auth.currentUser)
      )
        return null
      return { accessToken: await this.auth.currentUser.getIdToken(e) }
    }
    addAuthTokenListener(e) {
      if ((this.assertAuthConfigured(), this.internalListeners.has(e))) return
      const t = this.auth.onIdTokenChanged((t) => {
        e((null == t ? void 0 : t.stsTokenManager.accessToken) || null)
      })
      ;(this.internalListeners.set(e, t), this.updateProactiveRefresh())
    }
    removeAuthTokenListener(e) {
      this.assertAuthConfigured()
      const t = this.internalListeners.get(e)
      t && (this.internalListeners.delete(e), t(), this.updateProactiveRefresh())
    }
    assertAuthConfigured() {
      S(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth")
    }
    updateProactiveRefresh() {
      this.internalListeners.size > 0
        ? this.auth._startProactiveRefresh()
        : this.auth._stopProactiveRefresh()
    }
  }
  const Di = (0, i.Pz)("authIdTokenMaxAge") || 300
  let Bi = null
  function Fi(e = (0, r.Mq)()) {
    const t = (0, r.qX)(e, "auth")
    if (t.isInitialized()) return t.getImmediate()
    const n = M(e, { popupRedirectResolver: Ii, persistence: [vn, en, nn] }),
      o = (0, i.Pz)("authTokenSyncURL")
    if (o) {
      const e =
        ((a = o),
        async (e) => {
          const t = e && (await e.getIdTokenResult()),
            n = t && (new Date().getTime() - Date.parse(t.issuedAtTime)) / 1e3
          if (n && n > Di) return
          const i = null == t ? void 0 : t.token
          Bi !== i &&
            ((Bi = i),
            await fetch(a, {
              method: i ? "POST" : "DELETE",
              headers: i ? { Authorization: `Bearer ${i}` } : {},
            }))
        })
      ;(Ut(n, e, () => e(n.currentUser)), Ft(n, (t) => e(t)))
    }
    var a
    const s = (0, i.q4)("auth")
    return (s && Te(n, `http://${s}`), n)
  }
  var Ui
  ;((Ui = "Browser"),
    (0, r.Xd)(
      new s.wA(
        "auth",
        (e, { options: t }) => {
          const n = e.getProvider("app").getImmediate(),
            i = e.getProvider("heartbeat"),
            { apiKey: r, authDomain: o } = n.options
          return ((e, n) => {
            ;(S(r && !r.includes(":"), "invalid-api-key", { appName: e.name }),
              S(!(null == o ? void 0 : o.includes(":")), "argument-error", { appName: e.name }))
            const i = {
                apiKey: r,
                authDomain: o,
                clientPlatform: Ui,
                apiHost: "identitytoolkit.googleapis.com",
                tokenApiHost: "securetoken.googleapis.com",
                apiScheme: "https",
                sdkClientVersion: ye(Ui),
              },
              a = new be(e, n, i)
            return (
              (function (e, t) {
                const n = (null == t ? void 0 : t.persistence) || [],
                  i = (Array.isArray(n) ? n : [n]).map(I)
                ;((null == t ? void 0 : t.errorMap) && e._updateErrorMap(t.errorMap),
                  e._initializeWithPersistence(i, null == t ? void 0 : t.popupRedirectResolver))
              })(a, t),
              a
            )
          })(n, i)
        },
        "PUBLIC",
      )
        .setInstantiationMode("EXPLICIT")
        .setInstanceCreatedCallback((e, t, n) => {
          e.getProvider("auth-internal").initialize()
        }),
    ),
    (0, r.Xd)(
      new s.wA(
        "auth-internal",
        (e) => ((e) => new Ni(e))(we(e.getProvider("auth").getImmediate())),
        "PRIVATE",
      ).setInstantiationMode("EXPLICIT"),
    ),
    (0, r.KN)(
      Ri,
      ki,
      (function (e) {
        switch (e) {
          case "Node":
            return "node"
          case "ReactNative":
            return "rn"
          case "Worker":
            return "webworker"
          case "Cordova":
            return "cordova"
          default:
            return
        }
      })(Ui),
    ),
    (0, r.KN)(Ri, ki, "esm2017"))
}
