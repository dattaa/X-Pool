(function authService(pvg) {
  var accessToken = $.cookie('AccessToken');
  pvg.authService = (function () {
    function getAccessToken() {
      return  accessToken;
    }
    return {
      getAccessToken: getAccessToken
    }
  })();
})(Xpool);
