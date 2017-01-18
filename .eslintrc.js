module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
		"no-tabs": "off",
		// 允许出现alert, prompt 和 confirm
		"no-alert": 0,

		// 允许出现console
		// "no-console": 2,

		// 允许出现debugger
		"no-debugger": 2,

		// 禁止不写分号
		"semi": [1, "always"],

		// 禁止出现tab之外的缩进
		"indent": [2, "tab"],

		// 允许定义前使用
		"no-use-before-define": 0,

		// 允许if (!!foo) 这种形式
		"no-extra-boolean-cast": 0,

		// 允许对函数声明进行覆盖赋值
		"no-func-assign": 0,

		// 允许使用caller或callee
		"no-caller": 0,

		// 允许函数在不同的情况下返回不同类型的值
		"consistent-return": 0,

		// 允许在switch的case中不加break
		"no-fallthrough": 0,

		// 不建议使用__proto__
		"no-proto": 1,

		// 允许覆盖外部变量
		"no-shadow": 0,

		// 建议文件的最后一行是空白行
		"eol-last": 1,

		// 允许使用下划线开头命名变量
		"no-underscore-dangle": 0,

		// 建议将操作符放到行尾, 而不是行首
		"operator-linebreak": [1, "after"],

		// 建议使用已定义的变量
		"no-undef": 1,

		// 建议return语句中不要包含赋值表达式
		"no-return-assign": 1,

		// 建议代码列数不能超过120行
		"max-len": [1, 180],

		// 建议启用严格模式
		"global-strict": 0,
		"strict": 0,

		// 建议使用单引号
		"quotes": [0, "single"],

		// 建议注释符要有空白隔开
		"spaced-comment": [1, "always"],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
