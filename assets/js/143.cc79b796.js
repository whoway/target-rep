(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{422:function(v,_,t){"use strict";t.r(_);var r=t(14),e=Object(r.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"gcc-开发人员的-svn-指南"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#gcc-开发人员的-svn-指南"}},[v._v("#")]),v._v(" GCC 开发人员的 SVN 指南")]),v._v(" "),_("blockquote",[_("p",[v._v("SVN Guide for GCC developers")])]),v._v(" "),_("ul",[_("li",[v._v("翻译链接："),_("a",{attrs:{href:"https://gcc.gnu.org/wiki/SvnHelp",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://gcc.gnu.org/wiki/SvnHelp"),_("OutboundLink")],1)])]),v._v(" "),_("h2",{attrs:{id:"目录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[v._v("#")]),v._v(" 目录")]),v._v(" "),_("p",[v._v("[TOC]")]),v._v(" "),_("h2",{attrs:{id:"_1-介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍"}},[v._v("#")]),v._v(" 1.介绍")]),v._v(" "),_("p",[v._v("GCC 已切换到 SVN（参见"),_("a",{attrs:{href:"https://gcc.gnu.org/wiki/SvnPlan",target:"_blank",rel:"noopener noreferrer"}},[v._v("计划"),_("OutboundLink")],1),v._v("）。 本文档适用于 GCC 开发人员和维护人员，作为开始使用 Subversion 的简单方法。 本文档未涵盖的任何内容都可以在 SVN 官方手册中找到。")]),v._v(" "),_("h2",{attrs:{id:"_2-页面索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-页面索引"}},[v._v("#")]),v._v(" 2.页面索引")]),v._v(" "),_("ul",[_("li",[v._v("1.设置和优化 SVN 以访问 GCC 存储库。")]),v._v(" "),_("li",[v._v("2.给 CVS 用户的 SVN 概念介绍。（请务必阅读并消化此内容！）")]),v._v(" "),_("li",[v._v("3.基本命令。")]),v._v(" "),_("li",[v._v("4.移动补丁：合并和反向移植。")]),v._v(" "),_("li",[v._v("5.如何维护一个分支。")]),v._v(" "),_("li",[v._v("6.各种技巧和食谱。")]),v._v(" "),_("li",[v._v("7.故障排除。")])]),v._v(" "),_("h2",{attrs:{id:"_3-前-5-条-svn-建议-针对-cvs-用户"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-前-5-条-svn-建议-针对-cvs-用户"}},[v._v("#")]),v._v(" 3.前 5 条 SVN 建议（针对 CVS 用户）")]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("使用"),_("code",[v._v("svn 状态")])]),v._v("。它将显示您的工作副本中的内容，以毫秒为单位！了解"),_("code",[v._v("--show-updates")]),v._v("和"),_("code",[v._v("--verbose")])]),v._v(" "),_("li",[_("strong",[v._v("使用"),_("code",[v._v("svn 日志")])]),v._v("。它不像"),_("code",[v._v("cvs log")]),v._v(" 它是一个动态生成的"),_("a",{attrs:{href:"https://gcc.gnu.org/wiki/ChangeLog",target:"_blank",rel:"noopener noreferrer"}},[v._v("ChangeLog"),_("OutboundLink")],1),v._v("，细化到您想要的目录，并具有完整的文件名集（没有破坏您的 grep 的邪恶 glob）。")]),v._v(" "),_("li",[_("strong",[v._v("使用"),_("code",[v._v("svn 合并")])]),v._v("。不要"),_("code",[v._v("svn diff | patch")]),v._v(" 使用"),_("code",[v._v("svn merge")]),v._v("向后移植补丁，它更快更正确！")]),v._v(" "),_("li",[_("strong",[v._v("使用"),_("code",[v._v("svn 还原")])]),v._v("。不要删除和更新：只需还原！它更快，并且还将恢复添加、删除等。")]),v._v(" "),_("li",[_("strong",[v._v("使用"),_("code",[v._v("svn 开关")])]),v._v("。如果您只有另一个工作副本，请不要将其丢弃，将其切换到您想要的分支并使用它！")])])])}),[],!1,null,null,null);_.default=e.exports}}]);