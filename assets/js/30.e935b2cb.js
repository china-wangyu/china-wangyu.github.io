(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{240:function(t,a,s){"use strict";s.r(a);var e=s(5),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"生成api文档篇"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成api文档篇","aria-hidden":"true"}},[t._v("#")]),t._v(" 生成API文档篇")]),t._v(" "),s("h2",{attrs:{id:"api文档演示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api文档演示","aria-hidden":"true"}},[t._v("#")]),t._v(" API文档演示")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Html")]),t._v(" 格式："),s("a",{attrs:{href:"http://trr.ibs3.cn/apiView",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 👉 点我了解 👈 "),s("OutboundLink")],1)]),t._v(" "),s("li",[s("code",[t._v("Markdown")]),t._v(" 格式："),s("a",{attrs:{href:"http://trr.ibs3.cn/apiShow",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 👉 点我了解 👈 "),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"使用教程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用教程","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用教程")]),t._v(" "),s("h3",{attrs:{id:"composer-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#composer-安装","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("composer")]),t._v(" 安装")]),t._v(" "),s("div",{staticClass:"language-composer line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("composer require wangyu/tp-anntation\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"注册tp-think-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注册tp-think-命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 注册"),s("code",[t._v("TP think 命令")])]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),s("p",[s("code",[t._v("thinkphp5.1 think 命令")]),t._v("配置文件在"),s("code",[t._v("application/command.php")])])]),t._v(" "),s("p",[t._v("注册命令")]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"lin-cms:apiDoc"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \\"),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("WangYu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("DocCommand")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"第一种：输出反射api文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一种：输出反射api文档","aria-hidden":"true"}},[t._v("#")]),t._v(" 第一种：输出反射API文档")]),t._v(" "),s("h4",{attrs:{id:"写-接口类-注释-例如：admin-类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写-接口类-注释-例如：admin-类","aria-hidden":"true"}},[t._v("#")]),t._v(" 写 "),s("code",[t._v("接口类")]),t._v(" 注释,例如："),s("code",[t._v("Admin")]),t._v(" 类")]),t._v(" "),s("p",[t._v("反射标识说明：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("注释")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("使用说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("doc")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("文档说明")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("@doc('方法名称')")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("route")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("路由规则")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("@route('规则','请求类型')")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("middleware")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("路由中间件规则")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("@middleware('中间件1','中间件2')")])])])]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* @doc('Admin 后台管理类')\n* @package app\\api\\controller\\cms\n*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Admin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h4",{attrs:{id:"写接口方法注释-例如：getadminusers-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写接口方法注释-例如：getadminusers-方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 写"),s("code",[t._v("接口方法")]),t._v("注释,例如："),s("code",[t._v("getAdminUsers")]),t._v(" 方法")]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("注： 本扩展输出文档参数表是 "),s("code",[t._v("markdown table")]),t._v(" 做的，\n因为 "),s("code",[t._v("markdown table")]),t._v(" 的分隔符 "),s("code",[t._v("|")]),t._v(" 与 "),s("code",[t._v("thinkphp 5.1")]),t._v("验证规则分隔符"),s("code",[t._v("|")]),t._v("冲突")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("本扩展输出文档时采取 "),s("code",[t._v("#")]),t._v(" 代替 "),s("code",[t._v("thinkphp5.1")]),t._v(" 验证规则分隔符 "),s("code",[t._v("|")])])])]),t._v(" "),s("li",[s("p",[t._v("使用时：@param('id','用户ID','require|number')")])]),t._v(" "),s("li",[s("p",[t._v("输出时：@param('id','用户ID','require#number')")])])])]),t._v(" "),s("p",[t._v("反射标识说明：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("函数名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("注释")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("使用说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("doc")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("文档说明")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("@doc('方法名称')")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("route")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("路由规则")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("@route('规则','请求类型')")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("middleware")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("路由中间件规则")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("@middleware('中间件1','中间件2')")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("param")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("参数验证")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("@param('参数名称','参数注释','参数验证规则')")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("validate")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("验证模型验证,需要继承 "),s("code",[t._v("\\WangYu\\validate\\BaseValidate")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("@validate('模型名称')")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("error")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("错误返回")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("@error('错误返回的"),s("code",[t._v("JSON")]),t._v("数据')")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("success")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("正确返回")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("@success('正确返回的"),s("code",[t._v("JSON")]),t._v("数据')")])])])]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @doc('创建图书')\n * @route('','post')\n * @validate('CreateGroup')\n * @param('name','图书名称','require|graph|length:1,50')\n * @param('img','图书img','require|graph|length:1,16')\n * @success('{\"code\":200,\"msg\":\"操作成功\",\"data\":[]}')\n * @error('{\"code\":400,\"msg\":\"appSecret不能为空\",\"data\":[]}')\n * @return array\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token shell-comment comment"}},[t._v("#......}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("h4",{attrs:{id:"输出api文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输出api文档","aria-hidden":"true"}},[t._v("#")]),t._v(" 输出API文档")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("命令行模式")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("有关于怎么使用命令行模式参考下，thinkphp5.1官方文档\n"),s("a",{attrs:{href:"https://www.kancloud.cn/manual/thinkphp5_1/354146",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 👉 点我了解 👈 "),s("OutboundLink")],1)])]),t._v(" "),s("ul",[s("li",[t._v("配置application/command.php文件")])]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// API文档输出")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'trr:doc'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" WangYu\\"),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("DocCommand")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("ul",[s("li",[t._v("运行 "),s("code",[t._v("trr:doc")]),t._v(" 命令")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("  php think trr:doc --module"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("api  --type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("html\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("输出")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("  Successful. Output Document Successful "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" File Path ：api-doc.html\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("查看 "),s("code",[t._v("trr:doc")]),t._v(" 命令帮助")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("  php think trr:doc -h\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("输出")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("  wy@aokodeiMac TRR "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fix/apidoc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" $ php think trr:doc -h\n  Usage:\n    doc:build "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  \n  Options:\n        --module"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("MODULE   your API Folder,Examples: api "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /application/api "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("default: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        --type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("TYPE       your API "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" type,type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" html or markdown "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("default: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"html"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        --name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("NAME       your API to markdown filename "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("default: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api-md"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        --force"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("FORCE     your API markdown filename is exist, backup and create, force "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" or "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("default: true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    -h, --help            Display this "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" message\n    -V, --version         Display this console version\n    -q, --quiet           Do not output any message\n        --ansi            Force ANSI output\n        --no-ansi         Disable ANSI output\n    -n, --no-interaction  Do not ask any interactive question\n    -v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("vv"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("vvv, --verbose  Increase the verbosity of messages: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" normal output, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" verbose output and "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" debug\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])])])]),t._v(" "),s("h4",{attrs:{id:"生成-markdown-格式的-api-文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成-markdown-格式的-api-文档","aria-hidden":"true"}},[t._v("#")]),t._v(" 生成 "),s("code",[t._v("Markdown")]),t._v(" 格式的 "),s("code",[t._v("API")]),t._v(" 文档")]),t._v(" "),s("p",[t._v("在项目根目录下打开 "),s("code",[t._v("cmd")]),t._v(" 或 "),s("code",[t._v("终端")]),t._v(" 输入以下命令")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("php think trr:doc --module"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("api  --type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("markdown\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("效果如下，代表文档生成成功：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("F:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("project"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("open-source-object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Trr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-7-6"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("TRR "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("master ≡ +0 ~217 -0 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nλ  php think trr:doc --module"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("api  --type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("markdown\nSuccessful. Output Document Successful "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" File Path ：api-doc.md\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h4",{attrs:{id:"生成-html-格式的-api-文档-推荐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成-html-格式的-api-文档-推荐","aria-hidden":"true"}},[t._v("#")]),t._v(" 生成 "),s("code",[t._v("HTML")]),t._v(" 格式的 "),s("code",[t._v("API")]),t._v(" 文档(推荐)")]),t._v(" "),s("p",[t._v("在项目根目录下打开 "),s("code",[t._v("cmd")]),t._v(" 或 "),s("code",[t._v("终端")]),t._v(" 输入以下命令")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("php think trr:doc --module"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("api  --type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("html\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("效果如下，代表文档生成成功：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("F:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("project"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("open-source-object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Trr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-7-6"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("TRR "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("master ≡ +0 ~217 -0 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nλ  php think trr:doc --module"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("api  --type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("html\nSuccessful. Output Document Successful "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" File Path ：api-doc.html\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])])},[],!1,null,null,null);a.default=n.exports}}]);