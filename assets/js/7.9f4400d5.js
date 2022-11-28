(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{278:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"hello-vuepress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hello-vuepress"}},[t._v("#")]),t._v(" Hello VuePress")]),t._v(" "),s("h1",{attrs:{id:"私有仓库源码-公有仓库前端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#私有仓库源码-公有仓库前端"}},[t._v("#")]),t._v(" 私有仓库源码+公有仓库前端")]),t._v(" "),s("h2",{attrs:{id:"配置actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置actions"}},[t._v("#")]),t._v(" 配置actions")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Automaticblogupdate\n\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在push或pull请求事件时触发工作流，但只针对主分支")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" main "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pull_request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" main "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#允许从Actions选项卡手动运行此工作流")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("workflow_dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 工作流运行由一个或多个jobs组成，这些job可以按顺序或并行运行")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此工作流包含一个名为“build-deploy”的job。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20.04")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 改job运行于什么虚拟机上")]),t._v("\n  \n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# steps表示将作为job一部分执行的一系列任务")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Checkout\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@main "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换分支到main")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fetch-depth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Use Node.js 12.x "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#使用nodejs 12.x版本")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/setup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node@v1\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node-version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12.16.3'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#先前用的'12.x'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" install and build \n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#安装以来并打包，执行的是项目我们定义的命令")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm install "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" npm run build\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" deploy "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#部署")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" peaceiris/actions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("gh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages@v3 \n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#和上面一样，这里使用的是他人写好的插件库，作用是发布到其他仓库中或者其他分支上，想要具体了解可以在插件库中搜索")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy_key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.BLOG "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# key  ")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("external_repository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" whoway/target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rep "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#推送到该仓库中，地址格式为github名称/仓库名  ")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("publish_branch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" main "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#分支名  ")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("publish_dir")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docs/.vuepress/dist "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#要推送的内容（打包后的博客文件夹）  ")]),t._v("\n")])])]),s("h2",{attrs:{id:"deploy-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deploy-key"}},[t._v("#")]),t._v(" deploy_key")]),t._v(" "),s("p",[t._v("配置过程中容易出错的便是deploy_key的配置,"),s("strong",[t._v("设置deploy_key的目的是获取push权限")]),t._v("，并且不被其他人所见")]),t._v(" "),s("blockquote",[s("p",[t._v("设置「公开仓库的」")])]),t._v(" "),s("p",[t._v("的Settings，也就是部署博客（公开）的仓库,选择"),s("strong",[t._v("Deploy_keys")]),t._v(">Add depoly_key")]),t._v(" "),s("p",[t._v("为了方便分辩，我将名称设置为BLOG,再将**xx.pub(公有)**的内容复制到文本框中，")]),t._v(" "),s("p",[t._v("**勾选Allow write access(写入权限)**最后选择Add Key")]),t._v(" "),s("h3",{attrs:{id:"注意-必须重新搞个私钥对-不然说-已经被用了"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意-必须重新搞个私钥对-不然说-已经被用了"}},[t._v("#")]),t._v(" 注意：必须重新搞个私钥对，不然说，已经被用了！")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("ssh-keygen "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" rsa "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-C")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"whoway2017@qq.com"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" ~/.ssh/id_rsa_whoway2017\n")])])]),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://blog.51cto.com/u_15089766/2602506",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.51cto.com/u_15089766/2602506"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);