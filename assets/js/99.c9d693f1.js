(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{392:function(t,a,r){"use strict";r.r(a);var s=r(14),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"gprof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gprof"}},[t._v("#")]),t._v(" gprof")]),t._v(" "),a("h2",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),a("p",[t._v("[toc]")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#目录"}},[t._v("目录")])]),a("li",[a("a",{attrs:{href:"#_1-gprof"}},[t._v("1.gprof")])]),a("li",[a("a",{attrs:{href:"#_2-gprof无法监测到的情况"}},[t._v("2.gprof无法监测到的情况")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"_1-gprof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-gprof"}},[t._v("#")]),t._v(" 1.gprof")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("gcc "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-pg")]),t._v(" demo.c \n./a.out\ngprof ./a.out gmon.out\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"_2-gprof无法监测到的情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-gprof无法监测到的情况"}},[t._v("#")]),t._v(" 2.gprof无法监测到的情况")]),t._v(" "),a("ul",[a("li",[t._v("gprof 的最大缺陷：它只能分析应用程序在运行过程中所消耗掉的用户时间，"),a("strong",[t._v("无法得到程序内核空间的运行时间")]),t._v("。")]),t._v(" "),a("li",[t._v("通常来说，应用程序在运行时是在内核态和用户态直接切换的")])]),t._v(" "),a("p",[t._v("1.比如调用的printf不在分析结果里面的，也就是库函数是不算在分析里面的。因为工作在"),a("strong",[t._v("内核态")]),t._v("的函数和"),a("strong",[t._v("没有加-pg编译的第三方库函数是")]),t._v("无法被gprof能够监控到的.")]),t._v(" "),a("p",[t._v("2.gprof只能在程序正常结束退出之后才能生成报告（gmon.out）。因为gprof通过在atexit()里注册了一个函数来产生结果信息，任何非正常退出都不会执行atexit()的动作，所以不会产生gmon.out文件。")]),t._v(" "),a("p",[t._v("3.不支持多线程应用，多线程下只能采集主线程性能数据。")])])}),[],!1,null,null,null);a.default=e.exports}}]);