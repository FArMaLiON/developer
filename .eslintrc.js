// https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
	  sourceType: 'module'
	},
	env: {
	  browser: true,
	},
	extends: 'airbnb-base',
	// required to lint *.vue files
	plugins: [
	  'html'
	],
	// check if imports actually resolve
	'settings': {
	  'import/resolver': {
		'webpack': {
		  'config': 'build/webpack.base.conf.js'
		}
	  }
	},
	// add your custom rules here
	'rules': {
	  // don't require .vue extension when importing
	  'import/extensions': ['error', 'always', {
		'js': 'never',
		'vue': 'never'
	  }],
	  // allow optionalDependencies
	  'import/no-extraneous-dependencies': ['error', {
		'optionalDependencies': ['test/unit/index.js']
	  }],
	  // allow debugger during development
	  'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
	  // disable rules from base configurations
	  "no-console": "off",
	  "func-names": 0,
	  "comma-spacing": 0,
	  "space-infix-ops": 0,
	  "space-before-function-paren": 0,
	  "arrow-spacing": [1,{"before":true,"after":true}],
	  "prefer-arrow-callback": 0,
	  "space-before-blocks": 0,
	  "indent": 0,
	  "no-unused-vars": 0,
	  "no-multi-spaces": 0,
	  "prefer-template": 0,
	  "no-tabs": 0,
	  "spaced-comment": 0,
	  "max-len": 0,
	  "no-mixed-spaces-and-tabs": 0,
	  "linebreak-style": 0,
	  "global-require": 0,
	  "import/no-dynamic-require": 0,
	  "no-undef": 0,
	  "allowForLoopAfterthoughts":  true,
	  "no-param-reassign": 0,
	  "no-plusplus": 0,
	  "no-underscore-dangle": ["error", { "allow": ["__INITIAL_STATE__"] }],
	  "no-prototype-builtins": 0,
	}
  }
  