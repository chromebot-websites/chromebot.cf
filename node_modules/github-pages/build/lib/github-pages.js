'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var relativePath = require('path').relative;
var GitHubApi = require('github');
var list = require('ls-all');
var fs = require('fs');
var encoding = 'base64';

module.exports = function () {
  function GithubPages(config) {
    _classCallCheck(this, GithubPages);

    this.config = config;
    this.api = new GitHubApi(this.config.api);
  }

  _createClass(GithubPages, [{
    key: 'auth',
    value: function auth() {
      this.api.authenticate(this.config.auth);
    }
  }, {
    key: 'runApi',
    value: function runApi(msg, method, extract) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        method(_this.api)(msg, function (err, data) {
          if (err) {
            reject(err);
          } else {
            var res = extract ? extract(data) : data;
            resolve(res);
          }
        });
      });
    }
  }, {
    key: 'latestCommitSHA',
    value: function latestCommitSHA() {
      var _config$remote = this.config.remote;
      var user = _config$remote.user;
      var repo = _config$remote.repo;
      var ref = _config$remote.ref;

      var msg = { user: user, repo: repo, ref: ref };
      return this.runApi(msg, function (api) {
        return api.gitdata.getReference;
      }, function (res) {
        return res.object.sha;
      });
    }
  }, {
    key: 'getTreeSHA',
    value: function getTreeSHA(sha) {
      var _config$remote2 = this.config.remote;
      var user = _config$remote2.user;
      var repo = _config$remote2.repo;

      var msg = { user: user, repo: repo, sha: sha };
      return this.runApi(msg, function (api) {
        return api.gitdata.getCommit;
      }, function (res) {
        return res.tree.sha;
      });
    }
  }, {
    key: 'listFolderFiles',
    value: function listFolderFiles() {
      var src = this.config.src;


      return list([src], { recurse: true, flatten: true }).then(function (files) {
        return files.filter(function (file) {
          return !file.mode.dir;
        }).map(function (file) {
          var mode = file.mode.exec ? '100755' : '100644';
          var type = 'blob';

          return {
            fullPath: file.path,
            path: relativePath(src, file.path),
            mode: mode,
            type: type,
            encoding: encoding
          };
        });
      });
    }
  }, {
    key: 'readFile',
    value: function readFile(filePath) {
      return new Buffer(fs.readFileSync(filePath)).toString(encoding);
    }
  }, {
    key: 'createBlob',
    value: function createBlob(filePath) {
      var _config$remote3 = this.config.remote;
      var user = _config$remote3.user;
      var repo = _config$remote3.repo;

      var msg = { user: user, repo: repo, encoding: encoding, content: this.readFile(filePath) };
      return this.runApi(msg, function (api) {
        return api.gitdata.createBlob;
      }, function (res) {
        return res.sha;
      });
    }
  }, {
    key: 'createBlobs',
    value: function createBlobs(files) {
      var _this2 = this;

      return Promise.all(files.map(function (file) {
        return _this2.createBlob(file.fullPath).then(function (sha) {
          return _extends({}, file, { sha: sha });
        });
      }));
    }
  }, {
    key: 'createTree',
    value: function createTree(tree, sha) {
      var _config$remote4 = this.config.remote;
      var user = _config$remote4.user;
      var repo = _config$remote4.repo;

      var msg = { user: user, repo: repo, tree: tree };

      return this.runApi(msg, function (api) {
        return api.gitdata.createTree;
      }, function (res) {
        return res.sha;
      });
    }
  }, {
    key: 'createCommit',
    value: function createCommit(tree, parentSHA) {
      var _config$remote5 = this.config.remote;
      var user = _config$remote5.user;
      var repo = _config$remote5.repo;
      var _config$commit = this.config.commit;
      var message = _config$commit.message;
      var author = _config$commit.author;

      var msg = {
        user: user,
        repo: repo,
        message: message,
        author: author,
        tree: tree,
        parents: [parentSHA]
      };
      return this.runApi(msg, function (api) {
        return api.gitdata.createCommit;
      }, function (res) {
        return res.sha;
      });
    }
  }, {
    key: 'createRef',
    value: function createRef(sha) {
      var _config$remote6 = this.config.remote;
      var user = _config$remote6.user;
      var repo = _config$remote6.repo;
      var ref = _config$remote6.ref;

      var msg = { user: user, repo: repo, sha: sha, ref: ref };

      return this.runApi(msg, function (api) {
        return api.gitdata.updateReference;
      });
    }
  }, {
    key: 'publish',
    value: function publish() {
      var _this3 = this;

      var commitSHA = void 0;
      this.auth();
      return this.latestCommitSHA().then(function (sha) {
        return commitSHA = sha;
      }).then(function (sha) {
        return _this3.getTreeSHA(sha);
      }).then(function (sha) {
        return _this3.listFolderFiles().then(function (tree) {
          return _this3.createBlobs(tree);
        }).then(function (tree) {
          return _this3.createTree(tree, sha);
        }).then(function (sha) {
          return _this3.createCommit(sha, commitSHA);
        }).then(function (sha) {
          return _this3.createRef(sha);
        });
      });
    }
  }]);

  return GithubPages;
}();