(function (pvg) {
  $.ajaxSetup({
    beforeSend: function (xhr) {
      xhr.setRequestHeader("Authorization", pvg.authService.getAccessToken());
      xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

    }
  });
})(xPool);
