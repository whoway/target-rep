(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{493:function(t,v,a){"use strict";a.r(v);var s=a(14),_=Object(s.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"深入llvm项目"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#深入llvm项目"}},[t._v("#")]),t._v(" 深入LLVM项目")]),t._v(" "),v("ul",[v("li",[t._v("flang-clang-llvm工程经验积累")])]),t._v(" "),v("h2",{attrs:{id:"目录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#目录"}},[t._v("目录")])]),v("li",[v("a",{attrs:{href:"#⚙️llvm工具篇"}},[t._v("⚙️LLVM工具篇")])]),v("li",[v("a",{attrs:{href:"#_0-llvm-tools-中命令的简单使用"}},[t._v("0.llvm tools 中命令的简单使用")])]),v("li",[v("a",{attrs:{href:"#_1-flang⭐️源码目录结构"}},[t._v("1.flang⭐️源码目录结构")]),v("ul",[v("li",[v("a",{attrs:{href:"#_1-1-代码目录结构"}},[t._v("1.1.代码目录结构")])]),v("li",[v("a",{attrs:{href:"#_1-2-flang-glossary-术语表-docs-glossary-rst"}},[t._v("1.2.Flang glossary（术语表）-docs/glossary.rst")])])])]),v("li",[v("a",{attrs:{href:"#_2-clang⭐️源码目录结构"}},[t._v("2.clang⭐️源码目录结构")])]),v("li",[v("a",{attrs:{href:"#_3-llvm⭐️源码目录结构"}},[t._v("3.Llvm⭐️源码目录结构")])])])]),v("p"),t._v(" "),v("p",[t._v("[TOC]")]),t._v(" "),v("h2",{attrs:{id:"⚙️llvm工具篇"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#⚙️llvm工具篇"}},[t._v("#")]),t._v(" ⚙️LLVM工具篇")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("工具")]),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("llvm-as")]),t._v(" "),v("td",[t._v("汇编器，将 .ll 汇编成字节码")])]),t._v(" "),v("tr",[v("td",[t._v("llvm-dis")]),t._v(" "),v("td",[t._v("反汇编器，将字节码编成可读的 .ll 文件")])]),t._v(" "),v("tr",[v("td",[t._v("opt")]),t._v(" "),v("td",[t._v("字节码优化器")])]),t._v(" "),v("tr",[v("td",[t._v("llc")]),t._v(" "),v("td",[t._v("静态编译器，将字节码编译成汇编代码")])]),t._v(" "),v("tr",[v("td",[t._v("lli")]),t._v(" "),v("td",[t._v("直接执行 LLVM 字节码")])]),t._v(" "),v("tr",[v("td",[t._v("llvm-link")]),t._v(" "),v("td",[t._v("字节码链接器，可以把多个字节码文件链接成一个")])]),t._v(" "),v("tr",[v("td",[t._v("llvm-ar")]),t._v(" "),v("td",[t._v("字节码文件打包器")])]),t._v(" "),v("tr",[v("td",[t._v("llvm-lib - LLVM lib.exe")]),t._v(" "),v("td",[t._v("兼容库工具")])]),t._v(" "),v("tr",[v("td",[t._v("llvm-nm")]),t._v(" "),v("td",[t._v("列出字节码和符号表")])]),t._v(" "),v("tr",[v("td",[t._v("llvm-config")]),t._v(" "),v("td",[t._v("打印 LLVM 编译选项")])]),t._v(" "),v("tr",[v("td",[t._v("llvm-diff")]),t._v(" "),v("td",[t._v("对两个进行比较")])]),t._v(" "),v("tr",[v("td",[t._v("llvm-cov")]),t._v(" "),v("td",[t._v("输出 coverage infomation")])]),t._v(" "),v("tr",[v("td",[t._v("llvm-profdata - Profile")]),t._v(" "),v("td",[t._v("数据工具")])]),t._v(" "),v("tr",[v("td",[t._v("llvm-stress")]),t._v(" "),v("td",[t._v("生成随机 .ll 文件")])]),t._v(" "),v("tr",[v("td",[t._v("llvm-symbolizer")]),t._v(" "),v("td",[t._v("地址对应源码位置，定位错误")])]),t._v(" "),v("tr",[v("td",[t._v("llvm-dwarfdump")]),t._v(" "),v("td",[t._v("打印 DWARF")])])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("调试工具")]),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("bugpoint")]),t._v(" "),v("td",[t._v("自动测试案例工具")])]),t._v(" "),v("tr",[v("td",[t._v("llvm-extract")]),t._v(" "),v("td",[t._v("从一个 LLVM 的模块里提取一个函数")])]),t._v(" "),v("tr",[v("td",[t._v("llvm-bcanalyzer")]),t._v(" "),v("td",[t._v("LLVM 字节码分析器")])])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("开发工具")]),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("FileCheck")])]),t._v(" "),v("td",[t._v("灵活的模式匹配文件验证器")])]),t._v(" "),v("tr",[v("td",[t._v("tblgen")]),t._v(" "),v("td",[t._v("C++ 代码生成器")])]),t._v(" "),v("tr",[v("td",[t._v("lit")]),t._v(" "),v("td",[t._v("LLVM 集成测试器")])]),t._v(" "),v("tr",[v("td",[t._v("llvm-build")]),t._v(" "),v("td",[t._v("LLVM 构建工程时需要的工具")])]),t._v(" "),v("tr",[v("td",[t._v("llvm-readobj")]),t._v(" "),v("td",[t._v("LLVM Object 结构查看器")])])])]),t._v(" "),v("h2",{attrs:{id:"_0-llvm-tools-中命令的简单使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_0-llvm-tools-中命令的简单使用"}},[t._v("#")]),t._v(" 0.llvm tools 中命令的简单使用")]),t._v(" "),v("div",{staticClass:"language-bash line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[t._v("生成可执行文件有两种方式：\n\na"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("生成目标文件，通过系统链接器链接多个目标文件，生成可执行文件。\n$ llc "),v("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-filetype")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("obj main.bc "),v("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" main.o\n$ llc "),v("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-filetype")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("obj sum.bc "),v("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" sum.o\n$ clang main.o sum.o "),v("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),t._v("\n\nb"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("使用llvm-link链接多个二进制文件为一个文件，生成目标文件，之后生成可执行文件。\n\n$ llvm-link main.bc sum.bc "),v("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" sum.linked.bc\n$ llc "),v("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-filetype")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("obj sum.linked.bc "),v("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" sum.linked.o\n$ clang sum.linked.o "),v("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),t._v("\n\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br"),v("span",{staticClass:"line-number"},[t._v("7")]),v("br"),v("span",{staticClass:"line-number"},[t._v("8")]),v("br"),v("span",{staticClass:"line-number"},[t._v("9")]),v("br"),v("span",{staticClass:"line-number"},[t._v("10")]),v("br"),v("span",{staticClass:"line-number"},[t._v("11")]),v("br"),v("span",{staticClass:"line-number"},[t._v("12")]),v("br"),v("span",{staticClass:"line-number"},[t._v("13")]),v("br")])]),v("ul",[v("li",[t._v("参考资料："),v("a",{attrs:{href:"https://blog.csdn.net/ldzm_edu/article/details/50405182",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/ldzm_edu/article/details/50405182"),v("OutboundLink")],1)])]),t._v(" "),v("h2",{attrs:{id:"_1-flang⭐️源码目录结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-flang⭐️源码目录结构"}},[t._v("#")]),t._v(" 1.flang⭐️源码目录结构")]),t._v(" "),v("div",{staticClass:"language-bash line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[t._v("whoway@VMwhoway:~/work/flang/flang-flang_20210324$ "),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),t._v("\n/home/whoway/work/flang/flang-flang_20210324\nwhoway@VMwhoway:~/work/flang/flang-flang_20210324$ "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\nCMakeLists.txt  docs  include  lib  LICENSE.txt  README.md  runtime  "),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("  tools  utils\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br")])]),v("h3",{attrs:{id:"_1-1-代码目录结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-代码目录结构"}},[t._v("#")]),t._v(" 1.1.代码目录结构")]),t._v(" "),v("p",[t._v("​\tFlang的源代码主要是"),v("strong",[t._v("ANSI C98")]),t._v("和一些**C++**Fortran例程存在于运行时库中文档维护在"),v("code",[t._v("nroff ('' *.n '')")]),t._v("文件中，可以用"),v("code",[t._v("'' -DLLVM_INCLUDE_DOCS=on ''")]),t._v("构建")]),t._v(" "),v("p",[t._v("​\t这里列出了主要的目录，其中一些在下面有更详细的解释:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("目录")]),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("lib")])]),t._v(" "),v("td",[t._v("包括由"),v("strong",[t._v("flang1、flang2")]),t._v("和"),v("strong",[t._v("Fortran运行时库")]),t._v("共享的辅助库")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("runtime")])]),t._v(" "),v("td",[t._v("Fortran运行库")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("tools/flang1")])]),t._v(" "),v("td",[t._v("flang1, Fortran到==ILM==的翻译工具")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("tools/flang2")])]),t._v(" "),v("td",[t._v("flang2, ==ILM到LLVM的IR转换器==")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("tools/include/symtab")])]),t._v(" "),v("td",[t._v("' ' gbldefs.h ' '(有此名称的三个头文件之一!)和global.h(四个头文件之一)"),v("br"),t._v("文件")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("utils")])]),t._v(" "),v("td",[t._v("errmsggen (errmsg.cpp)实用程序，用于生成两个"),v("code",[t._v("errmsggen.h")]),t._v("文件(一个用于flang1，一个用于flang2)，错误消息文本")])]),t._v(" "),v("tr",[v("td",[t._v("docs/")]),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"_1-2-flang-glossary-术语表-docs-glossary-rst"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-flang-glossary-术语表-docs-glossary-rst"}},[t._v("#")]),t._v(" 1.2.Flang glossary（术语表）-"),v("code",[t._v("docs/glossary.rst")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th"),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("ADT")]),t._v(" "),v("td",[t._v("Abstract Data Types.")])]),t._v(" "),v("tr",[v("td",[t._v("ASD")]),t._v(" "),v("td",[t._v("数组下标描述符（Array Subscript Descriptor）——保存数组的维数，请参见' ' ast.h ' ' '")])]),t._v(" "),v("tr",[v("td",[t._v("AST")]),t._v(" "),v("td",[t._v("Abstract Syntax Tree.")])]),t._v(" "),v("tr",[v("td",[t._v("BE")]),t._v(" "),v("td",[t._v("“后端”的缩写(在代码和注释中大量使用)")])]),t._v(" "),v("tr",[v("td",[t._v("FE")]),t._v(" "),v("td",[t._v("“frontend”的缩写(在代码和注释中大量使用)")])]),t._v(" "),v("tr",[v("td",[t._v("ILM")]),t._v(" "),v("td",[t._v("(Intermediate Language Macros.  )可执行语句的表示这是flang1的输出，是flang2的输入")])]),t._v(" "),v("tr",[v("td",[t._v("ILI")]),t._v(" "),v("td",[t._v("Intermediate Language Instructions.  中间语言指令flang2用于优化的IR")])]),t._v(" "),v("tr",[v("td",[t._v("ILT")]),t._v(" "),v("td",[t._v("ILI语句的终端节点，与源语言语句对应ilt的序列表示一个块ilt有到下一个和上一个的链接")])]),t._v(" "),v("tr",[v("td",[t._v("IPA")]),t._v(" "),v("td",[t._v("InterProcedural Analysis(过程间分析) https://en.wikipedia.org/wiki/Interprocedural_optimization")])]),t._v(" "),v("tr",[v("td",[t._v("IR")]),t._v(" "),v("td",[t._v("中间表示一种通用术语，可指多种表现形式")])]),t._v(" "),v("tr",[v("td",[t._v("PGI")]),t._v(" "),v("td",[t._v("旧版Fortran编译器，Flang前端基于它PGI编译器和工具已经演变成NVIDIA HPC SDK")])]),t._v(" "),v("tr",[v("td",[t._v("SD")]),t._v(" "),v("td",[t._v("静态描述符(与指针一起使用“ptr sd“美元)")])]),t._v(" "),v("tr",[v("td",[t._v("STB")]),t._v(" "),v("td",[t._v("Symbol TaBle, created symbol after symbol as identified by the parser 符号表，创建一个又一个由解析器识别的符号")])]),t._v(" "),v("tr",[v("td",[t._v("SHD")]),t._v(" "),v("td",[t._v("SHape Descriptor 形状描述符——保存数组和跨步的上下边界")])]),t._v(" "),v("tr",[v("td",[t._v("STD")]),t._v(" "),v("td",[t._v("STatement Descriptor - a larger, more generic structure describing the parsed code elementsSee "),v("code",[t._v("ast.h")]),t._v(" for full members list. 语句描述符——一个更大、更通用的结构，描述解析的代码元素完整成员列表见' ' ast.h ' '")])]),t._v(" "),v("tr",[v("td",[t._v("TBAA")]),t._v(" "),v("td",[t._v("Type Based Alias Analysis基于类型的别名分析")])]),t._v(" "),v("tr",[v("td",[t._v("TPV")]),t._v(" "),v("td",[t._v("Target Processor Value (used in "),v("code",[t._v("semant.c")]),t._v(")目标处理器值(在'' semantic.c ''中使用)")])])])]),t._v(" "),v("h2",{attrs:{id:"_2-clang⭐️源码目录结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-clang⭐️源码目录结构"}},[t._v("#")]),t._v(" 2.clang⭐️源码目录结构")]),t._v(" "),v("h2",{attrs:{id:"_3-llvm⭐️源码目录结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-llvm⭐️源码目录结构"}},[t._v("#")]),t._v(" 3.Llvm⭐️源码目录结构")]),t._v(" "),v("ul",[v("li",[t._v("llvm源码阅读网站："),v("a",{attrs:{href:"https://codebrowser.dev/llvm/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://codebrowser.dev/llvm/"),v("OutboundLink")],1)])]),t._v(" "),v("div",{staticClass:"language-txt line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-txt"}},[v("code",[t._v("- bolt/\t\n- ==clang/==\t\n- clang-tools-extra/\t\n- compiler-rt/\t\n- cross-project-tests/\t\n- ==flang/==\t\n- libc/\t\n- libclc/\t\n- libcxx/\t\n- libcxxabi/\t\n- libunwind/\t\n- lld/\t\n- lldb/\t\n- ==llvm/==\t\n- llvm-libgcc/\t\n- llvm_build/\t\n- mlir/\t\n- ==openmp/==\t\n- polly/\t\n- pstl/\t\n- third-party/\t\n- utils/\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br"),v("span",{staticClass:"line-number"},[t._v("7")]),v("br"),v("span",{staticClass:"line-number"},[t._v("8")]),v("br"),v("span",{staticClass:"line-number"},[t._v("9")]),v("br"),v("span",{staticClass:"line-number"},[t._v("10")]),v("br"),v("span",{staticClass:"line-number"},[t._v("11")]),v("br"),v("span",{staticClass:"line-number"},[t._v("12")]),v("br"),v("span",{staticClass:"line-number"},[t._v("13")]),v("br"),v("span",{staticClass:"line-number"},[t._v("14")]),v("br"),v("span",{staticClass:"line-number"},[t._v("15")]),v("br"),v("span",{staticClass:"line-number"},[t._v("16")]),v("br"),v("span",{staticClass:"line-number"},[t._v("17")]),v("br"),v("span",{staticClass:"line-number"},[t._v("18")]),v("br"),v("span",{staticClass:"line-number"},[t._v("19")]),v("br"),v("span",{staticClass:"line-number"},[t._v("20")]),v("br"),v("span",{staticClass:"line-number"},[t._v("21")]),v("br"),v("span",{staticClass:"line-number"},[t._v("22")]),v("br")])]),v("ul",[v("li",[v("strong",[t._v("一、docs目录")])])]),t._v(" "),v("p",[t._v("​\t这个目录下存放Llvm各个模块的==相关介绍文档==")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("二、examples目录")])])]),t._v(" "),v("p",[t._v("​\t这个目录是一些"),v("strong",[t._v("使用LLVM IR")]),t._v("和"),v("strong",[t._v("JIT")]),t._v("的简单例子")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("三、include目录")])])]),t._v(" "),v("p",[t._v("​\tinclude 目录主要是包含llvm做为lib的c++和c的api头文件在include下还有三个主要的子目录：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("目录")]),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("include/llvm")])]),t._v(" "),v("td",[t._v("所有LLVM特定的头文件和头文件子目录子目录对应LLVM各个部分：Analysis，CodeGen，Target，Transforms，etc...")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("include/llvm/Support")])]),t._v(" "),v("td",[t._v("LLVM提供的"),v("strong",[t._v("通用支持")]),t._v("工具的"),v("strong",[t._v("lib头文件目录")]),t._v("例如，一些C++ STL小工具和命令行选项相关的lib的头文件会放在该文件夹里")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("include/llvm/Config")])]),t._v(" "),v("td",[t._v("由cmake配置的头文件他们包括标准UNIX和C的头文件源码可以引入这些自动处理的头文件#include that cmake generates")])])])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("四、lib目录")])])]),t._v(" "),v("p",[t._v("​\t这个目录下存放着大部分的源码，将源码放进库中，可以使得LLVM能在一些"),v("strong",[t._v("工具间")]),t._v("==分享==代码")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("目录")]),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("lib/IR/")])]),t._v(" "),v("td",[t._v("核心LLVM源文件，实现了核心的类比如：Instruction和BasicBlock")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("lib/AsmParser/")])]),t._v(" "),v("td",[t._v("解释汇编语言的源码")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("lib/Bitcode/")])]),t._v(" "),v("td",[t._v("读写字节码的源码")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("lib/Analysis/")])]),t._v(" "),v("td",[t._v("各种分析程序的源码，例如：Call-Graphs，Induction-Variables，Natural-Loop-Identification，etc")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("lib/Transforms/")])]),t._v(" "),v("td",[t._v("IR-to-IR 程序转换，例如：主动死代码消除，稀疏有条件常量传播，内联，循环不变码变化，死全局消除...")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("lib/Target/")])]),t._v(" "),v("td",[t._v("Target目录是"),v("strong",[t._v("目标平台")]),t._v("指令集相关内容，"),v("strong",[t._v("内部代码量很大")]),t._v("，具体芯片指令，版本等相关信息都在其中，最新的专有功能，比如AMD,NVIDIA相关的显卡计算目标代码生成也在其中")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("lib/CodeGen/")])]),t._v(" "),v("td",[t._v("代码生成的主要部分：指令选择器，指令调度以及寄存器分配")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("lib/ExecutionEngine/")])]),t._v(" "),v("td",[t._v("用于直接在JIT解释器中执行字节码的库")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("lib/Support/")])]),t._v(" "),v("td",[t._v("对应于llvm/include/ADT和llvm/include/Support的头文件")])])])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("五、projects目录")])])]),t._v(" "),v("p",[t._v("​\t这个==目录严格上来说并不是llvm的一部分==，是附属于llvm这个目录可以存放用户自己利用llvm，构建的系统")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("六、test目录")])])]),t._v(" "),v("p",[t._v("​\tLLVM基础结构上的特性和回归测试以及其他健全性检查它们旨在快速运行并覆盖很多领域，而不会很低效")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("七、tools目录")])])]),t._v(" "),v("p",[t._v("​\t这个目录下存放的是由之前介绍过的库文件build而成的可执行文件（工具），这是用户交互的主要部分")])])}),[],!1,null,null,null);v.default=_.exports}}]);