/*replaceme.js
 *
 * See: http://decodize.com/javascript/build-nodejs-npm-installation-package-scratch/
 */
#!/usr/bin/env node
var path = require('path');
var fs = require('fs');
var lib = path.join(path.dirname(fs.realpathSync(__filename)), '../lib');
require(lib + '/main.js');