$.postJSON = function (url, data) {
    return jQuery.ajax({
        'type': 'POST',
        'url': url,
        'contentType': 'application/json; charset=utf-8',
        'data': JSON.stringify(data),
        'dataType': 'json',
    });
};
Vue.config.debug = true;