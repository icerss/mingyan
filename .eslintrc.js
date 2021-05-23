module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"browser": true,
		"jquery": true,
		"es6": true,
		"node": true,
		"commonjs": true,
		"amd": true
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"sourceType": "module",
		"ecmaVersion": 12
	},
	"rules": {
		"indent": [
			"error",
			4
		],
		"linebreak-style": [
			"error",
			"windows"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"no-useless-escape": "off",
		"no-prototype-builtins": "off",
		"no-case-declarations": "off"
	},
	"globals": {
		"window": true,
		"md5": true,
		"Promise": true,
		"mingyan": true,
		"Browser": true,
		"mingyanPicUrl": true,
		"solvePicUrl": true,
		"specialVerbList": true,
		"lazyload": true,
		"swal": true,
		"saveAs": true,
		"marked": true,
		"cloudbase": true,
		"Headroom": true,
		"dataLayer": true,
		"APlayer": true
	}
};
