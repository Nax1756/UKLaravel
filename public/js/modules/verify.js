function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var expectedCodePattern = /^\d{6}$/;

var userCode = getParameterByName('code');
if (!userCode || !userCode.match(expectedCodePattern)) {
  window.location.href = 'http://uk/error-403.html';
}