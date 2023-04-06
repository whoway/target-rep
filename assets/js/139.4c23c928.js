(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{425:function(s,a,r){"use strict";r.r(a);var t=r(14),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"redis学习笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis学习笔记"}},[s._v("#")]),s._v(" Redis学习笔记")]),s._v(" "),a("h2",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[s._v("#")]),s._v(" 目录")]),s._v(" "),a("p",[s._v("[TOC]")]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#目录"}},[s._v("目录")])]),a("li",[a("a",{attrs:{href:"#_1-搭建redis学习环境-环境配置⭐️"}},[s._v("1.搭建Redis学习环境-环境配置⭐️")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1-1-安装路径"}},[s._v("1.1.安装路径")])]),a("li",[a("a",{attrs:{href:"#_1-2-配置"}},[s._v("1.2.配置")])]),a("li",[a("a",{attrs:{href:"#_1-3-查看redis"}},[s._v("1.3.查看redis")])])])]),a("li",[a("a",{attrs:{href:"#_2-视频-笔记"}},[s._v("2.视频-笔记")]),a("ul",[a("li",[a("a",{attrs:{href:"#_2-1-redis-benchmark"}},[s._v("2.1.redis-benchmark")])])])]),a("li",[a("a",{attrs:{href:"#_3-another-redis-desktop-manager"}},[s._v("3.Another Redis Desktop Manager")]),a("ul",[a("li",[a("a",{attrs:{href:"#_3-1-远程使用-another连接服务器的redis"}},[s._v("3.1.远程使用-another连接服务器的redis")])]),a("li",[a("a",{attrs:{href:"#_3-2-介绍软件"}},[s._v("3.2.介绍软件")])])])]),a("li",[a("a",{attrs:{href:"#_4-redis命令行⭐️"}},[s._v("4.redis命令行⭐️")])]),a("li",[a("a",{attrs:{href:"#_5-redis"}},[s._v("5.redis")])]),a("li",[a("a",{attrs:{href:"#_666-使用java的jredis"}},[s._v("666.使用Java的Jredis")])]),a("li",[a("a",{attrs:{href:"#参考资料"}},[s._v("参考资料")])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"_1-搭建redis学习环境-环境配置⭐️"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-搭建redis学习环境-环境配置⭐️"}},[s._v("#")]),s._v(" 1.搭建Redis学习环境-环境配置⭐️")]),s._v(" "),a("h3",{attrs:{id:"_1-1-安装路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-安装路径"}},[s._v("#")]),s._v(" 1.1.安装路径")]),s._v(" "),a("ul",[a("li",[s._v("记得联网！")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("gcc g++\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pkg-config\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" whoway.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#root")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/bin/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#others 默认安装路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/bin/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("root@hecs-358761:/usr/local/bin"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll")]),s._v("\ntotal "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23532")]),s._v("\ndrwxr-xr-x  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" root root     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Apr  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":02 ./\ndrwxr-xr-x "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" root root     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Feb "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/\n-rwxr-xr-x  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("966")]),s._v(" Feb "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v(" cloud-id*\n-rwxr-xr-x  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("970")]),s._v(" Feb "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v(" cloud-init*\n-rwxr-xr-x  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2108")]),s._v(" Feb "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v(" cloud-init-per*\n-rwxr-xr-x  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1003")]),s._v(" Feb "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v(" jsondiff*\n-rwxr-xr-x  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3858")]),s._v(" Feb "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v(" jsonpatch*\n-rwxr-xr-x  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1837")]),s._v(" Feb "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v(" jsonpointer*\n-rwxr-xr-x  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("973")]),s._v(" Feb "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v(" jsonschema*\n-rwxr-xr-x  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5886560")]),s._v(" Apr  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":02 redis-benchmark*\nlrwxrwxrwx  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" Apr  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":02 redis-check-aof -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" redis-server*\nlrwxrwxrwx  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" Apr  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":02 redis-check-rdb -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" redis-server*\n-rwxr-xr-x  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5789224")]),s._v(" Apr  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":02 redis-cli*\nlrwxrwxrwx  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" Apr  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":02 redis-sentinel -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" redis-server*\n-rwxr-xr-x  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12375472")]),s._v(" Apr  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":02 redis-server*\nroot@hecs-358761:/usr/local/bin"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h3",{attrs:{id:"_1-2-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-配置"}},[s._v("#")]),s._v(" 1.2.配置")]),s._v(" "),a("p",[s._v("redis默认不是后台启动的，，需要修改配置文件")]),s._v(" "),a("p",[s._v("默认是在本机运行，需要修改ip")]),s._v(" "),a("p",[s._v("默认端口是6379")]),s._v(" "),a("p",[s._v("通过指定的配置文件启动")]),s._v(" "),a("ul",[a("li",[s._v("启动服务的时候，可以通过指定的配置文件")]),s._v(" "),a("li",[s._v("我们未来要启动集群的话，我们就要启动好多个这样的服务\n"),a("ul",[a("li",[s._v("比如redis-conf1 redis-conf2")])])]),s._v(" "),a("li",[s._v("我们也可以单机，多redis")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("root@hecs-358761:/usr/local/bin"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-server whoway-config/redis.conf")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#使用redis客户端进行连接")]),s._v("\nroot@hecs-358761:/usr/local/bin"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-cli -p 6379")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("\nPONG\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" name whoway\nOK\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" get name\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"whoway"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" get nme\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nil"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" keys *\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h3",{attrs:{id:"_1-3-查看redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-查看redis"}},[s._v("#")]),s._v(" 1.3.查看redis")]),s._v(" "),a("p",[s._v("查看redis的进程是否开启")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" redis\n\nroot@hecs-358761:~"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps -ef | grep redis")]),s._v("\nroot      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8991")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":16 ?        00:00:00 redis-server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6379\nroot      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8996")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2665")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":16 pts/0    00:00:00 redis-cli "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\nroot      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9088")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9071")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":19 pts/1    00:00:00 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--color")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("auto redis\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("如何关闭redis服务呢？")]),s._v(" "),a("p",[s._v("回顾，linux关机命令shutdown")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" keys *\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#关闭redis的server")]),s._v("\nnot connected"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#所以才not connect， exit是退出redis-cli")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_2-视频-笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-视频-笔记"}},[s._v("#")]),s._v(" 2.视频-笔记")]),s._v(" "),a("h3",{attrs:{id:"_2-1-redis-benchmark"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-redis-benchmark"}},[s._v("#")]),s._v(" 2.1.redis-benchmark")]),s._v(" "),a("p",[s._v("redis-benchmark是一个压力测试工具")]),s._v(" "),a("p",[s._v("官方自带的性能测试工具")]),s._v(" "),a("p",[s._v("指定测试机器，指定并发数目（默认是50），指定请求数（默认是1W）")]),s._v(" "),a("p",[s._v("我们来简单测试一下")]),s._v(" "),a("h2",{attrs:{id:"_3-another-redis-desktop-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-another-redis-desktop-manager"}},[s._v("#")]),s._v(" 3."),a("code",[s._v("Another Redis Desktop Manager")])]),s._v(" "),a("h3",{attrs:{id:"_3-1-远程使用-another连接服务器的redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-远程使用-another连接服务器的redis"}},[s._v("#")]),s._v(" 3.1.远程使用-another连接服务器的redis")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("将 bind 127.0.0.1 # 注释掉")])]),s._v(" "),a("li",[a("p",[s._v("将protected-mode yes 改成 protected-mode no")])]),s._v(" "),a("li",[a("p",[s._v("将# requirepass foobared 去掉注释 改成 requirepass 密码")])])]),s._v(" "),a("p",[s._v("然后使用ssl和上面的密码或者readonly和密码都可以连接")]),s._v(" "),a("p",[s._v("并且这2种连接，都是可以使用get name这样的redis命令的")]),s._v(" "),a("p",[s._v("也能")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("auth 你的密码\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v("  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("在本地进行关闭")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" NOAUTH Authentication required怎么办\n\n这个错误表明Redis需要进行身份验证，但是你尝试执行的操作没有通过身份验证，因此无法执行。要解决这个问题，你需要在执行 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v(" 命令之前进行身份验证。\n\n如果你在启动Redis时设置了密码，可以使用以下命令进行身份验证：\n\nAUTH password\n其中，password 是你在启动Redis时设置的密码。\n\n如果你没有设置密码，则可以在Redis配置文件中开启身份验证。编辑Redis配置文件（一般位于 /etc/redis/redis.conf 或者 /usr/local/etc/redis.conf），找到以下行：\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# requirepass foobared")]),s._v("\n将注释符号 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除，并将 foobared 替换为你想要的密码。保存并关闭文件后，重启Redis服务即可生效。现在你可以使用上述命令进行身份验证。")]),s._v("\n\n来源链接："),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h3",{attrs:{id:"_3-2-介绍软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-介绍软件"}},[s._v("#")]),s._v(" 3.2.介绍软件")]),s._v(" "),a("p",[s._v("是一款开源的跨平台 Redis 可视化管理工具，支持 SSH 和 SSL 等协议，也支持只读模式")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("SSH")]),s._v("：通过 SSH 协议连接 Redis 服务器，可以加密通信以提高安全性。如果你的 Redis 服务器启用了 SSH，则可以使用 SSH 选项来连接 Redis。")]),s._v(" "),a("li",[a("code",[s._v("SSL")]),s._v("：通过 SSL 加密协议连接 Redis 服务器，可以将数据在客户端和服务器之间进行加密传输，以提高安全性。如果你的 Redis 服务器启用了 SSL，则可以使用 SSL 选项来连接 Redis。")]),s._v(" "),a("li",[a("code",[s._v("readonly")]),s._v("：只读模式是指连接 Redis 服务器时，只能执行查询操作，不能进行修改或删除操作。只读模式可以增加 Redis 服务器的安全性，避免数据意外被修改或删除。在 Another Redis Desktop Manager 中，只需要在连接设置中选择“只读模式”，即可连接到 Redis 服务器的只读实例。")])]),s._v(" "),a("p",[s._v("总的来说，SSH 和 SSL 都提供了一定程度的安全性保障，只读模式则可以进一步增强 Redis 服务器的安全性。在连接 Redis 服务器时，根据实际需要选择合适的选项即可。")]),s._v(" "),a("h2",{attrs:{id:"_4-redis命令行⭐️"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-redis命令行⭐️"}},[s._v("#")]),s._v(" 4.redis命令行⭐️")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\nflushdb\nflushall\n\nkeys *\n\ndbsize\t\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"_5-redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-redis"}},[s._v("#")]),s._v(" 5.redis")]),s._v(" "),a("h2",{attrs:{id:"_666-使用java的jredis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_666-使用java的jredis"}},[s._v("#")]),s._v(" 666.使用Java的Jredis")]),s._v(" "),a("p",[s._v("jredis是redis官网，推荐的java连接开发工具，")]),s._v(" "),a("p",[s._v("使用java操作redis中间件，如果你要使用java操作redis，那么一定要对Jredis十分的熟悉。。。但是显然spring boot，redistemplate集成了很多")]),s._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("ul",[a("li",[s._v("https://www.bilibili.com/video/BV1S54y1R7SB?p=9&vd_source=ea20f1fccee6fd3f1af7d59cd3ae7575")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.bilibili.com/video/BV1S54y1R7SB?p=10",target:"_blank",rel:"noopener noreferrer"}},[s._v("P1010、redis-benchmark性能测试"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("【狂神说Java】"),a("a",{attrs:{href:"https://www.bilibili.com/video/BV1S54y1R7SB/?p=1&vd_source=ea20f1fccee6fd3f1af7d59cd3ae7575",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis最新超详细版教程通俗易懂"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);