(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{424:function(a,s,t){"use strict";t.r(s);var r=t(14),e=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"lammps使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lammps使用"}},[a._v("#")]),a._v(" lammps使用")]),a._v(" "),s("h2",{attrs:{id:"toc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#toc"}},[a._v("#")]),a._v(" toc")]),a._v(" "),s("p",[a._v("[toc]")]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#toc"}},[a._v("toc")])]),s("li",[s("a",{attrs:{href:"#_1-lammps-可以做什么"}},[a._v("1.LAMMPS 可以做什么？")])]),s("li",[s("a",{attrs:{href:"#_2-编译lammps"}},[a._v("2.编译Lammps")]),s("ul",[s("li",[s("a",{attrs:{href:"#prof"}},[a._v("Prof")])])])]),s("li",[s("a",{attrs:{href:"#参考资料"}},[a._v("参考资料")])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"_1-lammps-可以做什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-lammps-可以做什么"}},[a._v("#")]),a._v(" 1.LAMMPS 可以做什么？")]),a._v(" "),s("p",[a._v("粗粒化模型；全原子；有限尺寸的球或椭球粒子; 偶极子; 刚体")]),a._v(" "),s("h2",{attrs:{id:"_2-编译lammps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-编译lammps"}},[a._v("#")]),a._v(" 2.编译Lammps")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("whoway@dell:~/exp/lammps-23Jun2022$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" whoway.build.sh\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#!/bin/bash")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" build\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" install-cmake\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" build\ncmake "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/cmake "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-DCMAKE_INSTALL_PREFIX")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/home/whoway/exp/lammps-23Jun2022/install-cmake\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("ul",[s("li",[a._v("参考资料：https://docs.lammps.org/Build_cmake.html")])]),a._v(" "),s("h3",{attrs:{id:"prof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prof"}},[a._v("#")]),a._v(" Prof")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("whoway@dell:~/exp/lammps-23Jun2022$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" whoway.build.sh\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#!/bin/bash")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" build\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" install-cmake\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" build\ncmake "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/cmake "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-DCMAKE_INSTALL_PREFIX")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/home/whoway/exp/lammps-23Jun2022/install-cmake "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-DCMAKE_C_COMPILER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("gcc "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-DCMAKE_CXX_COMPILER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("g++ "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-D")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CMAKE_C_FLAGS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-Og -pg"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-D")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CMAKE_CXX_FLAGS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-Og -pg"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-D")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CMAKE_EXE_LINKER_FLAGS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-Og -pg"')]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),s("ul",[s("li",[a._v("Lammps中文站：https://www.lammps.org.cn/")])])])}),[],!1,null,null,null);s.default=e.exports}}]);