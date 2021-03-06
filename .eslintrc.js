module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"ecmaVersion": 12
	},
	"rules": {
		"indent": [
			"error",
			"tab"
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
	},
	"env": {
		"browser": true,
		"jquery": true,
		"es6": true
	},
};
