(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{394:function(t,a,s){"use strict";s.r(a);var r=s(14),_=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tcp-ip详解卷1阅读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip详解卷1阅读"}},[t._v("#")]),t._v(" TCP/IP详解卷1阅读")]),t._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("font style"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"background: MediumSpringGreen"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("font style"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"background:yellow"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("ul",[a("li",[t._v("仅仅考虑业界『"),a("strong",[t._v("TCP/IP4层模型")]),t._v("』，不对“学术界”中的5层模型进行分析")])]),t._v(" "),a("p",[t._v("​\t实现一遍网络协议栈，然后再看书，TCP详解卷1，理解就不一样了")]),t._v(" "),a("p",[t._v("《tcp/ip详解卷一》:150行代码拉开协议栈实现的篇章")]),t._v(" "),a("p",[t._v("1.以太网协议，ip协议，udp协议的封装")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("icmp协议与arp的实现")])]),t._v(" "),a("li",[a("p",[t._v("netmap的原理\n4.柔性数组的两种使用场景")])])]),t._v(" "),a("p",[t._v("5.字节对齐的那些事儿")]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("mmap的原理")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("7.手把手实现协议栈\n")])])]),a("h2",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#目录"}},[t._v("目录")])]),a("li",[a("a",{attrs:{href:"#_1-150行代码拉开协议栈实现的篇章"}},[t._v("1.150行代码拉开协议栈实现的篇章")]),a("ul",[a("li",[a("a",{attrs:{href:"#关于网络的万金油的学习方法"}},[t._v("关于网络的万金油的学习方法：")])])])]),a("li",[a("a",{attrs:{href:"#_18分钟"}},[t._v("18分钟")])])])]),a("p"),t._v(" "),a("p",[t._v("[TOC]")]),t._v(" "),a("h2",{attrs:{id:"_1-150行代码拉开协议栈实现的篇章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-150行代码拉开协议栈实现的篇章"}},[t._v("#")]),t._v(" 1.150行代码拉开协议栈实现的篇章")]),t._v(" "),a("p",[t._v("对于网络的概念好像都懂，但是细问又不懂")]),t._v(" "),a("p",[t._v("原因：")]),t._v(" "),a("p",[t._v("1、大学的计算机网络，学习目的是考试。后边在学校也没写多少代码，关于网络相关的。")]),t._v(" "),a("p",[t._v("2、工作的网络和书本上的不一样，大量以业务为主，而且不是TCP的网络，是http，这些基于tcp的")]),t._v(" "),a("p",[t._v("3、百度查，为啥好多time_wait啥的")]),t._v(" "),a("h3",{attrs:{id:"关于网络的万金油的学习方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于网络的万金油的学习方法"}},[t._v("#")]),t._v(" 关于网络的万金油的学习方法：")]),t._v(" "),a("p",[t._v("1、站在==1个协议栈的设计的==角度，比如你花费1-2个月的时间，你尝试，自己造一个网络的框架，自己实现1个tcp的协议栈")]),t._v(" "),a("p",[t._v("a.你对所有网络的原理，你都会懂，比如提到什么三次握手，什么epoll，你都会中间的原理和具体实现的流程")]),t._v(" "),a("p",[t._v("学网络最好的方法不是看书+不是看技术博客，最好的是，你自己带着1个设计者的角度，你去实现1个TCP的协议栈。")]),t._v(" "),a("ul",[a("li",[t._v("当你实现1遍之后，再来看书《TCP卷1》你就会发现你很多点的理解都会不一样。")])]),t._v(" "),a("p",[t._v("《TCP卷1》这样的书，是通过外文翻译过来的，翻译过程中，有些概念可能和你看到的技术博客上的，名词一样，但是表达的意思好像不一样==。那其实在看书的时候，在没有代码量的时候，我也不建议大家去啃书==，因为这个看到这个，你会越看越迷。")]),t._v(" "),a("p",[t._v("如果看书看不懂，多来听听carl老师讲课、。。。听课比看书去更容易去吸收")]),t._v(" "),a("p",[t._v("关于这个并发，很多朋友在聊。")]),t._v(" "),a("p",[t._v("这个并发和框架没有半毛钱关系")]),t._v(" "),a("p",[t._v("这个底层网络并发，IO连接的数量的管理，他和网络框架没有半毛钱关系，他是和epoll有关系")]),t._v(" "),a("p",[t._v("就是你什么框架都 不用，就单跑1个epoll，不到100-200行代码，照样也能维护个1-2百万")]),t._v(" "),a("p",[t._v("但是关于epoll的一些做法，以及关于他的一些优化的东西，一些各种场景上的问题就会比较多")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/image-20221020103832921.png",alt:"image-20221020103832921"}})]),t._v(" "),a("p",[t._v("关于协程这个概念，其实80年代就有了，但是现在对于协程的概念是什么")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/fajghasfjkgjagj.png",alt:"fajghasfjkgjagj"}})]),t._v(" "),a("ul",[a("li",[t._v("这个不比Http服务器更好？")])]),t._v(" "),a("h2",{attrs:{id:"_18分钟"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_18分钟"}},[t._v("#")]),t._v(" 18分钟")])])}),[],!1,null,null,null);a.default=_.exports}}]);