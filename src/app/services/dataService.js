(function dataService(pvg) {

  const baseApiUrls = [];

  function getBaseApiUrl() {

    return pvg.config.XpoolApi;

  }
  function getAuthenticationApiUrl() {

    return pvg.config.authenticationUrl;

  }

  pvg.dataService = (function () {
    function get(entityName) {
      return $.ajax({
        url: getBaseApiUrl() + entityName,
        type: 'GET',
        contentType: "application/json; charset=utf-8"
      });
    }

    function getById(entityName, id) {
      return $.ajax({
        url: getBaseApiUrl() + entityName + '/' + id,
        type: 'GET',
        contentType: "application/json; charset=utf-8"
      });
    }

    function add(entityName, entity) {
      return $.ajax({
        url: getBaseApiUrl() + entityName,
        type: 'POST',
        data: JSON.stringify(entity),
        contentType: "application/json; charset=utf-8"
      });
    }

    function update(entityName, entity) {
      return $.ajax({
        url: getBaseApiUrl() + entityName + '/' + id,
        type: 'PUT',
        data: JSON.stringify(entity),
        contentType: "application/json; charset=utf-8"
      });
    }

    function remove(entityName, id, eTag) {

      var entityid = entityName + 'Id';
      return $.ajax({
        url: getBaseApiUrl() + entityName + '/' + id,
        type: 'DELETE',
        contentType: "application/json; charset=utf-8"
      });
    }

    return {}

  
  })();
})(Xpool);
