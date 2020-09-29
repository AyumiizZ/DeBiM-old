// ./elasticsearch.js
var es = require('elasticsearch');

var client = new es.Client({
  host: '192.168.1.109:9200'
  ,log: 'trace'
});

function search (myIndex, searchText)
  return client.search({
    index: 'result',
    body: {
        timestamp: {},
        domain: {},
        is_legit: {}
        }
  }).then(function (resp) {
      return hits = resp.hits.hits;
  }, function (err) {
    console.trace(err.message);
});

export { search }