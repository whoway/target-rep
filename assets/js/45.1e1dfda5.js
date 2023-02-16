(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{323:function(s,a,t){"use strict";t.r(a);var e=t(14),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"cxx无逻辑的内容记忆手册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cxx无逻辑的内容记忆手册"}},[s._v("#")]),s._v(" CXX无逻辑的内容记忆手册")]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1-运算符"}},[s._v("1.运算符")]),a("ul",[a("li",[a("a",{attrs:{href:"#不能重载的5个运算符记忆"}},[s._v("不能重载的5个运算符记忆")])]),a("li",[a("a",{attrs:{href:"#可以重载-但建议不要重载的运算符"}},[s._v("可以重载，但建议不要重载的运算符")])])])]),a("li",[a("a",{attrs:{href:"#_2-什么是big-three-什么是big-five"}},[s._v("2.什么是big three，什么是big five")])]),a("li",[a("a",{attrs:{href:"#_3"}},[s._v("3.")])])])]),a("p"),s._v(" "),a("p",[s._v("[toc]")]),s._v(" "),a("h2",{attrs:{id:"_1-运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-运算符"}},[s._v("#")]),s._v(" 1.运算符")]),s._v(" "),a("h3",{attrs:{id:"不能重载的5个运算符记忆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不能重载的5个运算符记忆"}},[s._v("#")]),s._v(" 不能重载的5个运算符记忆")]),s._v(" "),a("p",[s._v("​\t"),a("strong",[s._v("百度")]),s._v("招聘考过")]),s._v(" "),a("ul",[a("li",[s._v("1、第1个，也是我们常常忘记是运算符的"),a("code",[s._v("sizeof")])]),s._v(" "),a("li",[s._v("2、其他4个，记住只要挂"),a("code",[s._v(".")]),s._v("的运算符"),a("strong",[s._v("均不能被重载")])])]),s._v(" "),a("blockquote",[a("p",[s._v("第2点，参考自用户讨论：@"),a("a",{attrs:{href:"https://www.nowcoder.com/profile/2887214",target:"_blank",rel:"noopener noreferrer"}},[s._v("牛客2887214号"),a("OutboundLink")],1)])]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[s._v("C"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("不能重载的总共五个：\n（"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("）"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"."')]),s._v("（类成员访问运算符） \n（"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("）"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" .*"')]),s._v("（类成员指针访问运算符） \n（"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("）"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"::"')]),s._v("（域运算符） \n（"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("）"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"siezof"')]),s._v("（长度运算符） \n（"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("）"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" ?:"')]),s._v("（条件运算符）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"可以重载-但建议不要重载的运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可以重载-但建议不要重载的运算符"}},[s._v("#")]),s._v(" 可以重载，但建议不要重载的运算符")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("&&")]),s._v("和"),a("code",[s._v("||")]),s._v("很建议不要重载『会出点问题』")])]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、因为，重载运算符，也就意味着靠函数重载来完成，操作数会作为『函数参数，传递』\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、C"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("的『函数参数都会被求值，无法实现（短路规则）』\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_2-什么是big-three-什么是big-five"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么是big-three-什么是big-five"}},[s._v("#")]),s._v(" 2.什么是big three，什么是big five")]),s._v(" "),a("p",[s._v("​\tbig three指的是")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("拷贝构造函数\n赋值构造函数\n\n析构函数（侯捷说还有构造函数，但是C++ primer这2种说法都有）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("​\tbig five指的是")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("copy 构造函数 + mov语意的拷贝构造函数\ncopy 赋值构造函数+ mov语意的赋值构造函数\n\n析构函数（侯捷说还有构造函数，但是C++ primer这2种说法都有）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3"}},[s._v("#")]),s._v(" 3.")])])}),[],!1,null,null,null);a.default=r.exports}}]);