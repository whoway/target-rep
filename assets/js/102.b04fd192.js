(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{381:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"os工程基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#os工程基础"}},[t._v("#")]),t._v(" OS工程基础")]),t._v(" "),s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-txt"}},[s("code",[t._v('<font style="background:yellow">\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#目录"}},[t._v("目录")])]),s("li",[s("a",{attrs:{href:"#_1-后台开发-概念辨析"}},[t._v("1.”后台开发“概念辨析")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1-1-cpu密集型和i-o密集型"}},[t._v("1.1.CPU密集型和I/O密集型")])]),s("li",[s("a",{attrs:{href:"#_1-2-同步和异步"}},[t._v("1.2.同步和异步")])]),s("li",[s("a",{attrs:{href:"#_1-3-阻塞和非阻塞和轮询"}},[t._v("1.3.阻塞和非阻塞和轮询")])]),s("li",[s("a",{attrs:{href:"#_1-4-xx池"}},[t._v("1.4.XX池")])]),s("li",[s("a",{attrs:{href:"#_1-5-上下文切换"}},[t._v("1.5.上下文切换")])]),s("li",[s("a",{attrs:{href:"#_1-6-tlb"}},[t._v("1.6.TLB")])])])]),s("li",[s("a",{attrs:{href:"#_2-大小端之争"}},[t._v("2.大小端之争")]),s("ul",[s("li",[s("a",{attrs:{href:"#大端和小端存储-引子"}},[t._v("大端和小端存储-引子")])]),s("li",[s("a",{attrs:{href:"#_2-1-概念"}},[t._v("2.1.概念")])]),s("li",[s("a",{attrs:{href:"#_2-2-具体的-大端法和小端法的应用"}},[t._v("2.2.具体的，大端法和小端法的应用")])]),s("li",[s("a",{attrs:{href:"#_2-3-大端法和小端法导致的问题"}},[t._v("2.3.大端法和小端法导致的问题：")])]),s("li",[s("a",{attrs:{href:"#_2-4-如何判别大端和小端"}},[t._v("2.4.如何判别大端和小端")])])])]),s("li",[s("a",{attrs:{href:"#_3-概念辨析"}},[t._v("3.概念辨析")]),s("ul",[s("li",[s("a",{attrs:{href:"#_3-1-终端"}},[t._v("3.1.终端")])]),s("li",[s("a",{attrs:{href:"#_3-2-僵尸进程-zombie"}},[t._v("3.2.僵尸进程（Zombie）")])]),s("li",[s("a",{attrs:{href:"#_3-3-孤儿进程"}},[t._v("3.3.孤儿进程")])]),s("li",[s("a",{attrs:{href:"#_3-4-init-进程"}},[t._v("3.4.init 进程")])]),s("li",[s("a",{attrs:{href:"#_2-5-内核"}},[t._v("2.5.内核")])]),s("li",[s("a",{attrs:{href:"#_2-6-进程组-作业"}},[t._v("2.6.进程组（作业）")])]),s("li",[s("a",{attrs:{href:"#_2-7-会话-session"}},[t._v("2.7.会话（session）")])]),s("li",[s("a",{attrs:{href:"#_2-8-守护进程-daemon-『后台开发核心』"}},[t._v("2.8.守护进程（daemon）『后台开发核心』")])])])]),s("li",[s("a",{attrs:{href:"#参考资料"}},[t._v("参考资料")])])])]),s("p"),t._v(" "),s("p",[t._v("[TOC]")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("硬件")]),t._v(" "),s("th",[t._v("OS管理")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("CPU（控制器和运算器）")]),t._v(" "),s("td",[t._v("进程管理")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("I/O（输入和输出）")]),t._v(" "),s("td",[t._v("I/O管理")]),t._v(" "),s("td",[t._v("网络数据传输、中断、缓冲区")])]),t._v(" "),s("tr",[s("td",[t._v("存储器")]),t._v(" "),s("td",[t._v("内存管理、外存管理")]),t._v(" "),s("td",[t._v("寄存器、内存、固态/机械硬盘")])])])]),t._v(" "),s("h2",{attrs:{id:"_1-后台开发-概念辨析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-后台开发-概念辨析"}},[t._v("#")]),t._v(" 1.”后台开发“概念辨析")]),t._v(" "),s("h3",{attrs:{id:"_1-1-cpu密集型和i-o密集型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-cpu密集型和i-o密集型"}},[t._v("#")]),t._v(" 1.1.CPU密集型和I/O密集型")]),t._v(" "),s("h4",{attrs:{id:"cpu密集型-cpu-bound"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cpu密集型-cpu-bound"}},[t._v("#")]),t._v(" CPU密集型（CPU-bound）")]),t._v(" "),s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-txt"}},[s("code",[t._v("CPU密集型也叫计算密集型，英文为CPU-bound，直译为CPU『受限』型\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("blockquote",[s("p",[t._v("特点：")])]),t._v(" "),s("ul",[s("li",[t._v("1.是要进行大量的计算，"),s("font",{staticStyle:{background:"yellow"}},[t._v("消耗CPU资源")])],1),t._v(" "),s("li",[t._v("2.这种计算密集型任务虽然也可以用多任务完成，但是"),s("font",{staticStyle:{background:"yellow"}},[t._v("任务越多，花在『任务切换』的时间就越多，CPU执行任务的『效率』就越低")])],1),t._v(" "),s("li",[t._v("3.要最高效地利用CPU，计算密集型任务同时进行的数量应当"),s("strong",[t._v("等于")]),t._v("CPU的核心数。")])]),t._v(" "),s("h4",{attrs:{id:"i-o密集型-i-o-bound"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#i-o密集型-i-o-bound"}},[t._v("#")]),t._v(" I/O密集型（I/O-bound）")]),t._v(" "),s("ul",[s("li",[t._v("IO密集型，涉及到"),s("font",{staticStyle:{background:"yellow"}},[t._v("网络、磁盘IO")]),t._v("的任务都是IO密集型任务")],1),t._v(" "),s("li",[t._v("这类任务的特点是"),s("strong",[t._v("CPU消耗很少")]),t._v("，任务的"),s("strong",[t._v("大部分时间都在等待IO操作完成")]),t._v("（因为IO的速度远远低于CPU和内存的速度）")]),t._v(" "),s("li",[t._v("对于IO密集型任务，"),s("font",{staticStyle:{background:"yellow"}},[t._v("任务越多，CPU效率越高，但也有一个限度")]),t._v("。常见的大部分任务都是IO密集型任务，比如Web应用。")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("参考资料：")])]),t._v(" "),s("ul",[s("li",[t._v("维基百科："),s("a",{attrs:{href:"https://zh.wikipedia.org/wiki/CPU%E5%AF%86%E9%9B%86%E5%9E%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("CPU密集型"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("廖雪峰描述"),s("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/897692888725344/945570591695328",target:"_blank",rel:"noopener noreferrer"}},[t._v("CPU密集型和I/O密集型"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"_1-2-同步和异步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-同步和异步"}},[t._v("#")]),t._v(" 1.2.同步和异步")]),t._v(" "),s("ul",[s("li",[t._v("同步（Synchronization）")]),t._v(" "),s("li",[t._v("异步（asynchronous）")])]),t._v(" "),s("h3",{attrs:{id:"_1-3-阻塞和非阻塞和轮询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-阻塞和非阻塞和轮询"}},[t._v("#")]),t._v(" 1.3.阻塞和非阻塞和轮询")]),t._v(" "),s("ul",[s("li",[t._v("阻塞（blocking）")]),t._v(" "),s("li",[t._v("非阻塞（ non-blocking）")]),t._v(" "),s("li",[t._v("轮询（polling）")])]),t._v(" "),s("h3",{attrs:{id:"_1-4-xx池"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-xx池"}},[t._v("#")]),t._v(" 1.4.XX池")]),t._v(" "),s("ul",[s("li",[t._v("进程池")]),t._v(" "),s("li",[t._v("线程池")]),t._v(" "),s("li",[t._v("数据库连接池")])]),t._v(" "),s("p",[t._v("线程池")]),t._v(" "),s("ul",[s("li",[t._v("线程池：是由服务器预先创建的一组子线程")])]),t._v(" "),s("p",[t._v("下文参考自："),s("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzI1NTE3OTk4Nw==&mid=2653734974&idx=1&sn=987f9a4cfea1c830036ae20fc04866d5&chksm=f1e18582c6960c941a5e147c198d9cbc3f27e88dbb82fb62f0d23261821070bd43bdfd2fc2b2&mpshare=1&scene=23&srcid=0728Ab0PK8WsIZWsv1UoVm8L&sharer_sharetime=1595948760667&sharer_shareid=7d02bdfe8ee477ab2b773f2df63f3163#rd",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_1-什么是线程池"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是线程池"}},[t._v("#")]),t._v(" （1）什么是线程池？")]),t._v(" "),s("p",[t._v("实际开发中我们需要让程序执行某个特定任务时，就会开启一个线程，如果并发的线程数量太多，频繁地创建线程就会严重影响系统的运行效率。")]),t._v(" "),s("ul",[s("li",[t._v("如何解决上述为呢？有没有一种方式可以让线程得到复用？")]),t._v(" "),s("li",[t._v("也就是要求执行一次任务之后不被销毁，可以继续执行其他任务，这就跟“数据库连接池”的思路一样了，数据库连接池的实现逻辑是在缓冲池中预先放置一定数量的连接对象，然后进行复用，那么很显然，在缓冲池中"),s("b",[t._v("预先放置一定数量的线程对象")]),t._v("以实现复用的机制就叫做线程池。")])]),t._v(" "),s("h4",{attrs:{id:"_2-线程池的优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-线程池的优点"}},[t._v("#")]),t._v(" （2）线程池的优点")]),t._v(" "),s("ul",[s("li",[t._v("1.使用线程池可以减少创建和销毁线程的次数，每个工作线程都可以重复使用。")]),t._v(" "),s("li",[t._v("2.可以根据系统的承受能力，调整线程池中工作线程的数量，防止因为消耗过多内存导致服务器崩溃。")])]),t._v(" "),s("h3",{attrs:{id:"_1-5-上下文切换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-上下文切换"}},[t._v("#")]),t._v(" 1.5.上下文切换")]),t._v(" "),s("ul",[s("li",[t._v("定义："),s("strong",[t._v("上下文切换")]),t._v("(英语：context switch)，又称"),s("strong",[t._v("环境切换")]),t._v("，电脑术语，是一个"),s("strong",[t._v("存储")]),t._v("和"),s("strong",[t._v("重建")]),t._v("CPU的"),s("strong",[t._v("状态")]),t._v(" ("),s("strong",[t._v("内文")]),t._v(")，因此令多个进程(process)可以分享单一CPU资源的计算过程。要切换CPU上的进程时，必需先行存储目前进程的状态，再将欲运行的进程之状态读回CPU中。")]),t._v(" "),s("li",[t._v("开销：上下文切换通常是『"),s("strong",[t._v("计算密集型")]),t._v("』的，『"),s("strong",[t._v("操作系统中的许多设计都是针对上下文切换的优化")]),t._v("』。在进程间切换需要消耗一定的时间进行相关的管理工作——包括寄存器和内存映射的保存与读取、更新各种内部的表等等。处理器或者操作系统不同，上下文切换时所涉及的内容也不尽相同。比如在Linux内核中，上下文切换需要涉及寄存器、栈指针、程序计数器的切换，但和地址空间的切换无关（虽然进程在进行上下文切换时也需要做地址空间的切换）[2][3]。用户态线程之间也会发生类似的上下文切换，但这样的切换非常轻量。")])]),t._v(" "),s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-txt"}},[s("code",[t._v("『CPU 寄存器』和『程序计数器』就是 CPU 上下文，因为它们都是 CPU 在运行任何任务前，必须的依赖环境。\n\nCPU 寄存器是 CPU 内置的容量小、但速度极快的内存。『这是个比方，不是真实的』\n程序计数器则是用来存储 CPU 正在执行的指令位置、或者即将执行的下一条指令位置。\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("ul",[s("li",[t._v("根据 Tsuna 的测试报告，每次上下文切换都需要『"),s("strong",[t._v("几十ns到数us")]),t._v("』的 CPU 时间。这个时间还是相当可观的，特别是在进程上下文切换次数较多的情况下，很容易导致 CPU 将大量时间耗费在寄存器、内核栈以及虚拟内存等资源的保存和恢复上，进而大大缩短了真正运行进程的时间。这也正是导致平均负载升高的一个重要因素。")]),t._v(" "),s("li",[t._v("另外，我们知道， Linux 通过 "),s("strong",[t._v("TLB（Translation Lookaside Buffer）"),s("strong",[t._v("来管理虚拟内存到物理内存的映射关系。当虚拟内存更新后，T")]),t._v("LB 也需要刷新，内存的访问也会随之变慢『因为命中的原因』")]),t._v("。特别是在多处理器系统上，缓存是被多个处理器共享的，刷新缓存不仅会影响当前处理器的进程，还会影响共享缓存的其他处理器的进程。")])]),t._v(" "),s("blockquote",[s("p",[t._v("维基百科："),s("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BA%A4%E6%8F%9B",target:"_blank",rel:"noopener noreferrer"}},[t._v("上下文切换"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("知乎："),s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/52845869",target:"_blank",rel:"noopener noreferrer"}},[t._v("上下文切换"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"_1-6-tlb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-tlb"}},[t._v("#")]),t._v(" 1.6.TLB")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("TLB（Translation Lookaside Buffer，"),s("strong",[t._v("转译后备缓冲器")]),t._v("/页表缓存）")])]),t._v(" "),s("li",[s("p",[t._v("在中国大陆被翻译为"),s("strong",[t._v("页表缓存")]),t._v("、"),s("strong",[t._v("转址旁路缓存")]),t._v("，为"),s("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%A4%AE%E8%99%95%E7%90%86%E5%99%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("CPU"),s("OutboundLink")],1),t._v("的一种缓存，由"),s("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86%E5%8D%95%E5%85%83",target:"_blank",rel:"noopener noreferrer"}},[t._v("存储器管理单元"),s("OutboundLink")],1),t._v("用于改进"),s("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E8%99%9B%E6%93%AC%E4%BD%8D%E5%9D%80",target:"_blank",rel:"noopener noreferrer"}},[t._v("虚拟地址"),s("OutboundLink")],1),t._v("到物理地址的转译速度")])]),t._v(" "),s("li",[s("p",[t._v("『进程』切换期间，TLB会被刷新，从而使内存访问在一段时间内变得更加昂贵。")])])]),t._v(" "),s("blockquote",[s("p",[t._v("知乎："),s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/108425561",target:"_blank",rel:"noopener noreferrer"}},[t._v("TLB原理"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("维基百科："),s("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E8%BD%89%E8%AD%AF%E5%BE%8C%E5%82%99%E7%B7%A9%E8%A1%9D%E5%8D%80",target:"_blank",rel:"noopener noreferrer"}},[t._v("TLB原理"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"_2-大小端之争"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-大小端之争"}},[t._v("#")]),t._v(" 2.大小端之争")]),t._v(" "),s("ul",[s("li",[t._v("大小端（BigEndianLittleEndian）")])]),t._v(" "),s("h3",{attrs:{id:"大端和小端存储-引子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#大端和小端存储-引子"}},[t._v("#")]),t._v(" 大端和小端存储-引子")]),t._v(" "),s("ul",[s("li",[t._v("《格列夫游记》一书中讲到，格列佛在小人国中，遇到了“"),s("a",{attrs:{href:"https://blog.csdn.net/linghaidong/article/details/50242233",target:"_blank",rel:"noopener noreferrer"}},[t._v("大小端"),s("OutboundLink")],1),t._v("的事情”。在计算机界，也有一个类似的大端小端之争，随着计算机的发展，历史告诉我们，这些都是合理的，但是要在计算机间合理通信或者理解计算机底层的时候，你自己记得转换就好了。")])]),t._v(" "),s("h3",{attrs:{id:"_2-1-概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-概念"}},[t._v("#")]),t._v(" 2.1.概念")]),t._v(" "),s("p",[t._v("大端：指低字节存储在高地址。\n小端：指低字节存储在低地址。")]),t._v(" "),s("p",[s("strong",[t._v("记忆方法：")])]),t._v(" "),s("p",[s("font",{staticStyle:{background:"yellow"}},[t._v("小端说：我就是个低低（弟弟）")])],1),t._v(" "),s("p",[t._v("下图描述了——大端存储（低字节存储在内存高地址了）：\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/1.png",alt:"1"}})]),t._v(" "),s("p",[t._v("下图描述了——小端存储（低字节存储在内存低地址了）：："),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/2.png",alt:"2"}})]),t._v(" "),s("h3",{attrs:{id:"_2-2-具体的-大端法和小端法的应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-具体的-大端法和小端法的应用"}},[t._v("#")]),t._v(" 2.2.具体的，大端法和小端法的应用")]),t._v(" "),s("p",[t._v("有的产品用的大端法，有的产品则是小端法。\nPS:"),s("strong",[t._v("这个大端和小端并没有严格按照企业界限来区分")]),t._v("，因为有的企业，它在之前采用的处理器，可能是大端，但是后面的产品中改变了采用的处理器，可能就采用小端法了。\n前沿：许多比较新的微处理器使用双端法，也就是说可以把它们配置成作为大端或者小端的机器运行。")]),t._v(" "),s("h3",{attrs:{id:"_2-3-大端法和小端法导致的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-大端法和小端法导致的问题"}},[t._v("#")]),t._v(" 2.3.大端法和小端法导致的问题：")]),t._v(" "),s("ul",[s("li",[t._v("1）网络应用程序数据传输")])]),t._v(" "),s("p",[t._v("在采用不同大小端存储的机器之间通过网络传送二进制数据时候，会导致采用不同大小端存储方式的数据的字节变成反序。\n网络字节序\n网络上传输的数据都是字节流,对于一个多字节数值，在进行网络传输的时候,先传递哪个字节?也就是说,当接收端收到第一个字节的时候,它将这个字节作为高位字节还是低位字节处理,是一个比较有意义的问题;\nUDP/TCP/IP协议规定:\n把接收到的第一个字节当作高位字节看待,这就要求发送端发送的第一个字节是高位字节;")]),t._v(" "),s("p",[t._v("而在发送端发送数据时，发送的第一个字节是该数值在内存中的起始地址处对应的那个字节,也就是说,该数值在内存中的起始地址处对应的那个字节就是要发送的第一个高位字节(即:高位字节存放在低地址处);\n由此可见,多字节数值在发送之前,在内存中因该是以大端法存放的;所以说,网络字节序是大端字节序;")]),t._v(" "),s("p",[t._v("比如,我们经过网络发送整型数值0x12345678时,在80x86平台中,它是以小端发存放的,在发送之前需要使用系统提供的字节序转换函数将其转换成大端法存放的数值;")]),t._v(" "),s("p",[t._v("常见CPU的宇节序\n大端（big Endian）: PowerPC、IBM、 Sun\n小端（little Endian）:x86、DEC\n"),s("strong",[t._v("ARM既可以工作在大端模式,也可以工作在小端模式")])]),t._v(" "),s("ul",[s("li",[t._v("2）反汇编的时候")])]),t._v(" "),s("p",[t._v("（—未完待续）")]),t._v(" "),s("h3",{attrs:{id:"_2-4-如何判别大端和小端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-如何判别大端和小端"}},[t._v("#")]),t._v(" 2.4.如何判别大端和小端")]),t._v(" "),s("p",[t._v("1）我们可以根据C语言中的，联合体来判断，该系统是大端还是小端。\n因为，联合体变量总是从低地址存储。")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("union")]),t._v(" test\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n\tdemo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x01ffff03")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x03")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"这个机器是小端存储！"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"这个机器是大端存储！"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"无法判断机器类型！"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br")])]),s("p",[t._v("显然，\n要是小端存储，那么（低字节）0x03在低地址，\n要是大端存储，那么（高字节）0x00在低地址。\n所以，打印出3就是小端存储。打印出0那就是大端存储。\n笔者的电脑是采用的intel的X86CPU，是小端存储。")]),t._v(" "),s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-txt"}},[s("code",[t._v("输出是3\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"_3-概念辨析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-概念辨析"}},[t._v("#")]),t._v(" 3.概念辨析")]),t._v(" "),s("h3",{attrs:{id:"_3-1-终端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-终端"}},[t._v("#")]),t._v(" 3.1.终端")]),t._v(" "),s("p",[t._v("计算机中的终端：是所有"),s("strong",[t._v("输入输出")]),t._v("设备的『总称』。")]),t._v(" "),s("ul",[s("li",[t._v("键盘，鼠标，摄像头")]),t._v(" "),s("li",[t._v("屏幕，打印机")])]),t._v(" "),s("p",[t._v("虚拟机那个黑框框。是终端，是『"),s("strong",[t._v("虚拟终端")]),t._v("』，不是真实存在的"),s("br"),t._v("\n输入可以在这，输出也在这出，又输入有输出")]),t._v(" "),s("ul",[s("li",[t._v("终端在我们系统的级别分，大致如下：")]),t._v(" "),s("li",[t._v("1、Alt + Ctrl + F1、F2、F3、F4、F5、F6\t"),s("strong",[t._v("字符终端")]),t._v("   pts (pseudo terminal slave) 指伪终端。")]),t._v(" "),s("li",[t._v("2、Alt + F7\t\t"),s("strong",[t._v("图形终端")])]),t._v(" "),s("li",[t._v("3、ssh、telnet...\t\t"),s("strong",[t._v("网络终端")]),t._v("（比如用Xshell啥的，通过网络传输到主机上）")])]),t._v(" "),s("h3",{attrs:{id:"_3-2-僵尸进程-zombie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-僵尸进程-zombie"}},[t._v("#")]),t._v(" 3.2.僵尸进程（Zombie）")]),t._v(" "),s("ul",[s("li",[t._v("参考"),s("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%83%B5%E5%B0%B8%E8%BF%9B%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-txt"}},[s("code",[t._v("僵尸进程（僵死进程）: 进程终止，父进程尚未回收，子进程残留资源（PCB）存放于内核中，变成僵尸（Zombie）进程。\n\n注意:僵尸进程是不能使用kill命令清除掉的。因为kill命令只是用来终止进程的，而僵尸进程已经终止。\n\n思考！用什么办法可清除掉僵尸进程呢？\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("ul",[s("li",[s("p",[s("strong",[t._v("僵尸进程")]),t._v(": （死亡的子进程，但不回收）进程终止，父进程尚未回收，子进程残留资源（PCB）存放于"),s("strong",[t._v("内核")]),t._v("中，变成僵尸（Zombie）进程\n（父进程有义务将子进程回收。如果子进程死完之后，要是父进程不给子进程收尸，子进程就成僵尸了）")])]),t._v(" "),s("li",[s("p",[t._v("变成僵尸进程的危害?")])]),t._v(" "),s("li",[s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-txt"}},[s("code",[t._v("1、正常进程结束之后，0-3G的进程（用户空间）地址空间，都会被释放。子进程整个0-3G的地址空间都被释放。\n2、但是，唯独PCB残留到内核当中，残留的目的是，为了让父进程给他报仇。因为，子进程死了，不留下点什么痕迹，父进程怎么知道你子进程是怎么死的？？他杀，还是自杀『自行结束』\n3、父进程可以通过PCB来获取它的死亡状态，如果你是自杀，还算了\n4、如果你是他杀，父进程需要采取措施，给你报仇？？？PCB存在的意义是为了，方便父进程收尸，如果父进程比较粗心大意，不管，那么那个PCB就一直存在内核当中。 这样会造成溢出，所以编程的时候，记得要回收僵尸进程\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])])]),t._v(" "),s("h3",{attrs:{id:"_3-3-孤儿进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-孤儿进程"}},[t._v("#")]),t._v(" 3.3.孤儿进程")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("孤儿进程")]),t._v(": "),s("strong",[t._v("父进程先于子进程结束")]),t._v("，则子进程成为孤儿进程，子进程的父进程成为init进程，称为init进程领养孤儿进程。（操作系统让孤儿进程进入“进程孤儿院”（不对吧）。也就是被init进程收养）（有人叫init进程叫进程孤儿院）")])]),t._v(" "),s("h3",{attrs:{id:"_3-4-init-进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-init-进程"}},[t._v("#")]),t._v(" 3.4.init 进程")]),t._v(" "),s("ul",[s("li",[t._v("init进程："),s("strong",[t._v("系统初始化进程")]),t._v("，是所有用户进程和非调度进程的祖先")]),t._v(" "),s("li",[t._v("init进程是『1号进程』，所有进程原先的祖先")]),t._v(" "),s("li",[t._v("0号进程是『不会』在操作系统中实际存在的")])]),t._v(" "),s("h3",{attrs:{id:"_2-5-内核"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-内核"}},[t._v("#")]),t._v(" 2.5.内核")]),t._v(" "),s("h3",{attrs:{id:"_2-6-进程组-作业"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-进程组-作业"}},[t._v("#")]),t._v(" 2.6.进程组（作业）")]),t._v(" "),s("p",[t._v("一个作业通常包括程序、数据和『操作说明书』3部分。\n每一个进程由PCB、程序和数据集合组成。这说明程序是进程的一部分，是进程的实体。\n因此，一个作业可划分为若干个进程来完成，而每一个进程有其实体————程序和数据集合。")]),t._v(" "),s("p",[t._v("1、『"),s("strong",[t._v("有的书上叫“作业”")]),t._v("，重要！』只不过"),s("font",{staticStyle:{background:"yellow"}},[t._v("在不同操作系统下，叫法不同而已。")]),s("br"),t._v("\n2、作业这个概念，早先的时候，来源于BSD操作系统")],1),t._v(" "),s("ul",[s("li",[t._v("BSD于1980年前后向Unix中增加的一个新特性。")]),t._v(" "),s("li",[t._v("代表一个或多个进程的集合。"),s("strong",[t._v("每个进程都属于一个进程组")]),t._v("。")])]),t._v(" "),s("p",[t._v("可以用kill，进行进程组ID取负号的方式，来杀死整个组内的进程。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("组长进程")]),t._v("可以创建一个进程组")])]),t._v(" "),s("h3",{attrs:{id:"_2-7-会话-session"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-会话-session"}},[t._v("#")]),t._v(" 2.7.会话（session）")]),t._v(" "),s("ul",[s("li",[t._v("会话（session）：把"),s("font",{staticStyle:{background:"yellow"}},[t._v("一组『"),s("strong",[t._v("进程组")]),t._v("』再重新编号")]),t._v("，就变成了会话。（圈圈圆圆圈圈，禁止套娃2333）")],1)]),t._v(" "),s("p",[t._v("创建一个会话需要注意以下6点"),s("strong",[t._v("注意事项")]),t._v("：")]),t._v(" "),s("ol",[s("li",[t._v("调用进程"),s("strong",[t._v("不能")]),t._v("是进程组组长，该进程变成新会话"),s("strong",[t._v("首进程")]),t._v("(session Leader)（简称，“会长”，滑稽）")]),t._v(" "),s("li",[t._v("该进程成为一个新进程组的组长进程。")]),t._v(" "),s("li",[t._v("需有root权限(ubuntu不需要)")]),t._v(" "),s("li",[t._v("新会话丢弃原有的控制终端，该会话没有控制终端（只在后台执行）")]),t._v(" "),s("li",[t._v("该调用进程是组长进程，则出错返回")]),t._v(" "),s("li",[t._v("建立新会话时，先调用fork, 父进程终止，子进程调用setsid")])]),t._v(" "),s("p",[t._v("Q：要"),s("strong",[t._v("会话ID")]),t._v("干啥？")]),t._v(" "),s("p",[t._v("A：主要是为了，守护进程用")]),t._v(" "),s("h3",{attrs:{id:"_2-8-守护进程-daemon-『后台开发核心』"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-守护进程-daemon-『后台开发核心』"}},[t._v("#")]),t._v(" 2.8.守护进程（daemon）『后台开发核心』")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("守护进程（daemon进程/精灵进程）")]),t._v("：“系统进程”与终端无关，不由用户启动，通常也叫做守护进程，是Linux/Unix『"),s("strong",[t._v("内核")]),t._v("』专用的特殊进程，是Linux中的"),s("strong",[t._v("后台服务进程")]),t._v("，通常独立于『控制终端』并且周"),s("strong",[t._v("期性地")]),t._v("执行某种任务或等待处理某些发生的事件。一般采用以d结尾的名字。")]),t._v(" "),s("li",[t._v("守护进程，说白了，就是一个后台系统服务器。")])]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("比如，Linux中的vsftpd，搭建ftp服务器的，安装+启动，httpd，sshd,xinetd")])])]),t._v(" "),s("ul",[s("li",[t._v("FAQ：只要是后台的，有没有终端？？没有！")]),t._v(" "),s("li",[s("b",[t._v("注意：")]),t._v("守护进程不受用户登录、注销的影响，当然，机器重启就另说了,但是厉害的守护进程，比如vsftpd和mysql等，你关机再开机，它也跟着启动")])]),t._v(" "),s("h4",{attrs:{id:"创建守护进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建守护进程"}},[t._v("#")]),t._v(" 创建守护进程")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("创建守护进程，最关键的一步是调用setsid函数"),s("strong",[t._v("创建一个新的会话（Session）")]),t._v("，并成为Session Leader。")])]),t._v(" "),s("li",[s("p",[t._v("当然，你也可以写这样的守护进程，比")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" .bashrc\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("这是bash解析器的配置文件，每次加载bash的时候都是按照这个去走。\n显然设置这个，就可以让完成那样的守护进程。启动放这个里面。")]),t._v(" "),s("li",[t._v("为什么，要用会话呢？")]),t._v(" "),s("li",[s("font",{staticStyle:{background:"yellow"}},[t._v("因为守护进程都不需要控制终端")])],1)])])]),t._v(" "),s("h4",{attrs:{id:"_2-创建守护进程模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建守护进程模型"}},[t._v("#")]),t._v(" 2.创建守护进程模型")]),t._v(" "),s("ol",[s("li",[t._v("创建子进程，父进程退出\n所有工作在子进程中进行形式上脱离了控制终端")]),t._v(" "),s("li",[t._v("在子进程中创建新会话（主要，为了丢弃终端）\n　　\tsetsid()函数\n　　\t使子进程完全独立出来，脱离控制")]),t._v(" "),s("li",[t._v("改变当前目录为根目录\n　　\tchdir()函数\n　　\t防止占用可卸载的文件系统（比如，U盘）\n　　\t也可以换成其它路径")]),t._v(" "),s("li",[t._v("重设文件权限掩码\n　　\tumask()函数\n　　\t防止继承的文件创建屏蔽字拒绝某些权限\n　　\t增加守护进程灵活性")]),t._v(" "),s("li",[t._v("关闭文件描述符\n　　\t继承的打开文件不会用到，浪费系统资源，无法卸载")]),t._v(" "),s("li",[t._v("开始执行守护进程核心工作（守护进程主逻辑）")]),t._v(" "),s("li",[t._v("守护进程退出处理程序模型（几乎不会用，毕竟守护进程一般不退出）")])]),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[t._v("《鸟哥的Linux私房菜》")]),t._v(" "),s("li",[t._v("张小方Blog，"),s("a",{attrs:{href:"http://balloonwj.gitee.io/cpp-guide-web/",target:"_blank",rel:"noopener noreferrer"}},[t._v("高性能服务器开发Gitee版"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("张小方Blog，"),s("a",{attrs:{href:"https://balloonwj.github.io/cpp-guide-web/",target:"_blank",rel:"noopener noreferrer"}},[t._v("高性能服务器开发GitHub版"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);