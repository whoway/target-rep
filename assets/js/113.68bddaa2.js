(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{403:function(s,t,n){"use strict";n.r(t);var a=n(14),r=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"c语言描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c语言描述"}},[s._v("#")]),s._v(" C语言描述")]),s._v(" "),t("div",{staticClass:"language-txt line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-txt"}},[t("code",[s._v('<font style="background: yellow" >\n<font style="background: MediumSpringGreen">\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("补码和有符号的溢出")]),s._v(" "),t("h2",{attrs:{id:"_1-原码-反码-补码-移码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-原码-反码-补码-移码"}},[s._v("#")]),s._v(" 1.原码.反码.补码.移码")]),s._v(" "),t("h3",{attrs:{id:"_1-1-实际背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-实际背景"}},[s._v("#")]),s._v(" 1.1.实际背景")]),s._v(" "),t("p",[t("strong",[s._v("现实生活")]),s._v("中：在计算机中所有的数据运算都是采用"),t("strong",[s._v("补码")]),s._v("进行的（比如Windows中）\n注意：负数用补码表示，如果相加的和为负，也采用补码表示")]),s._v(" "),t("h3",{attrs:{id:"_1-2-有符号数的原码-反码-补码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-有符号数的原码-反码-补码"}},[s._v("#")]),s._v(" 1.2.有符号数的原码.反码.补码")]),s._v(" "),t("p",[s._v("计算机中，"),t("font",{attrs:{color:"red"}},[s._v("有符号数")]),s._v("有3种表示法：原码→反码→补码（发展历程，记得“"),t("strong",[s._v("简书")]),s._v("”上有篇文章讲解了这个发展的历程，告诉了为什么一步步，最后用的补码）")],1),s._v(" "),t("ul",[t("li",[t("p",[s._v("但是现在目前的电脑其实都是补码表示了")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("也有书上说")]),s._v("：负数是补码表示，正数是原码/反码/补码表示")]),s._v(" "),t("li",[s._v("也算是对的.谁让他们编码真的一样）")])])]),s._v(" "),t("li",[t("p",[s._v("『当然，个人从底层硬件实现来考虑，我觉得说正数是原码表示，负数是补码表示蛮好的』")])]),s._v(" "),t("li",[t("p",[s._v("原因：这样，我可以想象的是正数和负数首先全部编码为原码，然后根据符号位来判断，我要不要调用求补码的线路，正数不用，负数显然要，这样就能在硬件层面获得比较小的计算能耗")])])]),s._v(" "),t("p",[t("font",{staticStyle:{background:"yellow"}},[s._v("记忆：符号位，0为正，1为负")])],1),s._v(" "),t("ul",[t("li",[s._v("原码，反码，补码的正数表达是一样的")])]),s._v(" "),t("h4",{attrs:{id:"_1-2-1-原码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-原码"}},[s._v("#")]),s._v(" 1.2.1.原码")]),s._v(" "),t("p",[s._v("原码就是符号位加上真值的绝对值，既最高位为符号位，0为正，1为负，其余表示数值的大小，比如")]),s._v(" "),t("ul",[t("li",[s._v("正数"),t("code",[s._v("+3=00000011")])]),s._v(" "),t("li",[s._v("负数"),t("code",[s._v("-3=10000011")])])]),s._v(" "),t("h4",{attrs:{id:"_1-2-2-反码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-反码"}},[s._v("#")]),s._v(" 1.2.2.反码")]),s._v(" "),t("p",[s._v("原码，反码，补码的正数表达是一样的")]),s._v(" "),t("ul",[t("li",[s._v("正数"),t("code",[s._v("+3=00000011")])])]),s._v(" "),t("p",[t("strong",[s._v("负数")]),s._v("的反码是在原码的基础上（"),t("strong",[s._v("符号位不变")]),s._v("，其他位均取反）")]),s._v(" "),t("ul",[t("li",[s._v("负数"),t("code",[s._v("-3=11111100")])])]),s._v(" "),t("h4",{attrs:{id:"_1-2-3-补码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-补码"}},[s._v("#")]),s._v(" 1.2.3.补码")]),s._v(" "),t("p",[s._v("原码，反码，补码的正数表达是一样的")]),s._v(" "),t("ul",[t("li",[s._v("正数"),t("code",[s._v("+3=00000011")])])]),s._v(" "),t("p",[s._v("负数的补码是在"),t("strong",[s._v("反码")]),s._v("的基础上（"),t("strong",[s._v("符号位不变")]),s._v("，在末位加1）")]),s._v(" "),t("ul",[t("li",[s._v("负数"),t("code",[s._v("-3=11111101")])])]),s._v(" "),t("p",[t("font",{staticStyle:{background:"yellow"}},[s._v("至此，我们可以总结出一种"),t("strong",[s._v("求一个负数的补码")]),s._v("的规则：")]),s._v("\n写出"),t("strong",[s._v("负数")]),s._v("的原码→符号位不变，其他位取反（求反码）→"),t("code",[s._v("符号位不变，末位+1（求补码）")]),s._v(" "),t("strong",[s._v("即：负数原码基础上，符号位不变，其他位取反，末位+1")]),s._v("\n上面，也是国内主流的教材上的方法（比如清华的那本计算机组成的教材）")],1),s._v(" "),t("p",[s._v("但是，我在"),t("font",{staticStyle:{background:"yellow"}},[t("strong",[s._v("另一些书")]),s._v("上看到了下面2种求一个负数的补码方法：")])],1),s._v(" "),t("ul",[t("li",[t("p",[s._v("1）（唯一的,也是独特的）"),t("strong",[s._v("负数的原码")]),s._v("基础上，直接变补码规则如下：符号位不变，从数的右边往左开始数,遇到“0”不理它,"),t("strong",[s._v("直到遇到第一个“1”为止")]),s._v("，这个"),t("strong",[s._v("第一次遇到的1它本身不变")]),s._v(",但事继续向左（直到符号位右边一个）的每一位取反，比如：")]),s._v(" "),t("ul",[t("li",[s._v("原码"),t("code",[s._v("1001 0010")])]),s._v(" "),t("li",[s._v("补码"),t("code",[s._v("1110 1110")])])])]),s._v(" "),t("li",[t("p",[s._v("2）先"),t("strong",[s._v("找到这个负数的正数编码")]),s._v("，然后在这个基础上，所有位全取反，末位+1\n比如：-1（我用8个比特说明）\n"),t("code",[s._v("+1原码是0000 0001")])]),s._v(" "),t("ul",[t("li",[s._v("全取反是"),t("code",[s._v("1111 1110")])]),s._v(" "),t("li",[s._v("末位加一是"),t("code",[s._v("1111 1111")])]),s._v(" "),t("li",[s._v("继续将，主流的方法补充到这，成为第3条")])])]),s._v(" "),t("li",[t("p",[s._v("3）负数原码基础上，符号位不变，其他位取反，末位+1\n总结这三种方法：其实，本质都是等效的。我也不知道为什么，以前在自学的时候竟然看到了三种方法。")])])]),s._v(" "),t("p",[s._v("Tips:"),t("strong",[s._v("对于负整数")]),s._v("，补码的补码是原码（强调是负整数，有的书没有强调是负整数）\n比如：原码"),t("code",[s._v("1001")])]),s._v(" "),t("ul",[t("li",[s._v("补码（我用方法3）"),t("code",[s._v("1001->1110->1111")])]),s._v(" "),t("li",[s._v("原码（补码的补码，继续方法3）"),t("code",[s._v("1111->1000->1001")])])]),s._v(" "),t("h3",{attrs:{id:"_1-3-有符号数到无符号数的过渡标题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-有符号数到无符号数的过渡标题"}},[s._v("#")]),s._v(" 1.3.有符号数到无符号数的过渡标题")]),s._v(" "),t("p",[s._v("重点：\n"),t("strong",[s._v("计算机不区分有符号数和无符号数")]),s._v(" "),t("strong",[s._v("只有")]),t("font",{attrs:{color:"red"}},[s._v("有符号数")]),s._v("有原码，反码，补码\n计算机中存储数据")],1),s._v(" "),t("ul",[t("li",[s._v("a.无符号数——直接以对应的二进制表示")]),s._v(" "),t("li",[s._v("b.有符号数——补码形式表示，无论是计算还是存储")])]),s._v(" "),t("p",[s._v("其实可以说无符号数没有原码，反码，补码一说，毕竟又不用分符号")]),s._v(" "),t("p",[s._v("《C陷阱与缺陷》一书在“整数溢出”一节中指出：\n如果算术运算符的一个操作数是有符号数，另一个是无符号数，那么有符号数会被转换为无符号数")]),s._v(" "),t("h3",{attrs:{id:"_1-4-关于无符号数和有符号一个注意的地方"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-关于无符号数和有符号一个注意的地方"}},[s._v("#")]),s._v(" 1.4.关于无符号数和有符号一个注意的地方")]),s._v(" "),t("ul",[t("li",[s._v("无符号数，竟然没有溢出一说?")])]),s._v(" "),t("p",[s._v("样例：")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("<stdio.h>")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//4294967295对应二进制 11111111 11111111 11111111 1111111")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4294967295")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"无符号输出:%u\\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"有符号输出:%d\\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%u"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输出结果如下： ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//无符号输出:4294967295")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//有符号输出:-1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//此外编译器警告（unsigned int a=4294967295;）：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//[Warning] this decimal constant is unsigned only in ISO C90")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("无符号的加法")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("A11111111 11111111 11111111 11111111")]),s._v("（表示32位的无符号最大值4294967295）")]),s._v(" "),t("li",[t("code",[s._v("A00000000 00000000 00000000 00000001")]),s._v("（表示1）")]),s._v(" "),t("li",[s._v("1"),t("strong",[s._v("00000000 00000000 00000000 00000000")]),s._v(" "),t("strong",[s._v("丢弃最高位，所以等于0")]),s._v('（硬件自动实现）\n其实这种情况下个人认为是"溢出"了，但是可以通过下面的做法进行解释\n//上面编译的，没有显示溢出的异常\n'),t("font",{staticStyle:{background:"yellow"}},[s._v("解释：这样溢出后就相当于对（2"),t("sup",[s._v("32")]),s._v("-1）+1=2"),t("sup",[s._v("32")]),s._v(" ，再对和2"),t("sup",[s._v("32")]),s._v(" 取模2"),t("sup",[s._v("32")]),s._v("得到为0")])],1)]),s._v(" "),t("p",[t("strong",[s._v("但是，有本书上的说法，让我对“溢出”这个概念有些混乱")]),s._v("\n《C陷阱与缺陷》在“整数溢出”一节中指出，在"),t("font",{attrs:{color:"red"}},[s._v("无符号")]),s._v("算术运算中，没有所谓的“溢出”一说。\n有个博客对它的解释是：\n我想Koenig的思路可能是这样，钟表上，当下午1点的时候，没有任何人会说：“现在是12点溢出了。”\n因为我们已经常识性地知道，我们的钟表上是没有13这个数字的。")],1),s._v(" "),t("p",[s._v("虽然，这么说，个人还是觉得这种在一个数据类型边界出现较反常的，我都应该关注一下、\n到目前为止我看过的好几本书的说法，真的有点弄晕我的感觉。但是，至此，我个人倾向是忘记什么叫溢出。只关注底层的比特的变化会不会造成影响。")]),s._v(" "),t("h2",{attrs:{id:"_2-位运算之左移和右移"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-位运算之左移和右移"}},[s._v("#")]),s._v(" 2.位运算之左移和右移")]),s._v(" "),t("h3",{attrs:{id:"_2-1-用途"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-用途"}},[s._v("#")]),s._v(" 2.1.用途")]),s._v(" "),t("p",[s._v("1）获得int型最大值\n这样的话在编程的时候就算不带书也能很准确的得知int等的数字大小。\n其实就是不想记忆具体范围。")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getMaxInt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//2147483647， 由于优先级关系，括号不可省略")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("解释：整型int占用4个字节（即32位）\n所以可以表示2"),t("sup",[s._v("32")]),s._v("个数字，int有正负和0；\n所以表示的数字范围是\t-2"),t("sup",[s._v("31")]),s._v("—（2"),t("sup",[s._v("31")]),s._v("-1）\n所以是1（二进制为 00000000 00000000 00000000 00000001）\n移位31位，然后变成了2"),t("sup",[s._v("31")]),s._v("  （二进制为 10000000 00000000 00000000 00000000）\n但是0占掉了一个数字，所以还要减去1，才得到最大的int的数值。\n（二进制为 "),t("code",[s._v("01111111 11111111 11111111 11111111")]),s._v("）\n注意：\n我在测试的时候，在devC++和VS2017中编译这个，都显示了warm\n"),t("code",[s._v("[Warning] integer overflow in expression [-Woverflow]")]),s._v("\n但是都最终还是显示了结果：")]),s._v(" "),t("p",[s._v("原因：\n1.最高位的进位在计算机中被舍去，因为没有位去存储它\n2.在计算机中似乎"),t("strong",[s._v("只检测有符号数的溢出")]),s._v("（"),t("strong",[s._v("这就和那本书《C陷阱与缺陷》上说的一样，我们不认为无符号整数有溢出")]),s._v("）在编译器中会显示warm，但是它不给你处理，还是会让你运行。（这是正常的，正是因为这样，所以C语言才这么自由，它认为这些你能够自己解决）它还是一样的用加法器和补码器进行有符号数和无符号数的加法和减法。\n补码器真的就是由这样的电路组成\n1.如果是有符号数的取补码，符号位不变，后面的诸位取反然后末尾加1\n2.无符号数的取补码")]),s._v(" "),t("h3",{attrs:{id:"_2-2-右移-注意点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-右移-注意点"}},[s._v("#")]),s._v(" 2.2.右移—注意点")]),s._v(" "),t("p",[s._v("比如，求int类型数据中bit中1点个数。")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" sum"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        \t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("sum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        \n        n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" sum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("看上去，蛮好的，但是其实不然")]),s._v(" "),t("ul",[t("li",[s._v("因为，我们需要注意右移的一个注意点")]),s._v(" "),t("li",[t("font",{staticStyle:{background:"yellow"}},[s._v("对于"),t("strong",[s._v("有符号数")]),s._v("的"),t("strong",[s._v("右移")]),s._v("，它会用符号位来补全。")])],1)]),s._v(" "),t("p",[s._v("这样测试")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("<stdio.h>")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" sum"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        \t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("sum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"loop\\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//测试")]),s._v("\n        n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" sum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%d"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//发现，一直输出loop")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//因为-1的二进制全是1，符号位也是1。一直右移，还是把1补进来。")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br")])]),t("p",[s._v("此外，用1，这样的有符号数测试，就会发现，得出了1，因为他的符号位是0，到时候补的还是0")]),s._v(" "),t("ul",[t("li",[t("font",{staticStyle:{background:"yellow"}},[s._v("改进：（用无符号数来右移，就能解决这种右移可能导致的bug）")])],1)]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" temp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//改进")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" sum"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        \t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("sum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        \n        temp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" sum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//用-1，测试是32")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h3",{attrs:{id:"_2-3-c语言中数据表示的杂谈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-c语言中数据表示的杂谈"}},[s._v("#")]),s._v(" 2.3.C语言中数据表示的杂谈")]),s._v(" "),t("p",[t("font",{staticStyle:{background:"yellow"}},[s._v("C语言中变量"),t("strong",[s._v("默认为有符号")]),s._v("的类型")]),s._v("\nunsigned关键字声明变量为无符号类型，C语言中"),t("strong",[s._v("只有整数类型")]),s._v("能够声明unsigned变量")],1),s._v(" "),t("p",[s._v("1）有符号数的表示法\n在计算机内部用补码表示有符号数\n正数的补码为正数本身\n负数的补码为负数的绝对值各位取反后加1")]),s._v(" "),t("p",[s._v("2）无符号数的表示法\n在计算机内部用原码表示无符号数\n"),t("strong",[s._v("无符号数默认为正数")]),s._v("\n无符号数没有符号位\n对于固定长度的无符号数有用！")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//其实，获取C语言中数据范围，还可以查看这些宏，但是不同编译器可能实现不同？忘记查了。")]),s._v("\nMAX_VALUE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" MIN_VALUE\nMIN_VALUE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" MAX_VALUE\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("计算机中，当确定为有符号数运算时，符号数一律用补码表示，运算时符号位和数字位一起参加运算。运算结果也用补码表示。")]),s._v(" "),t("h2",{attrs:{id:"_3-浮点数细节⭐️"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-浮点数细节⭐️"}},[s._v("#")]),s._v(" 3.浮点数细节⭐️")]),s._v(" "),t("ul",[t("li",[s._v("本文为自己的一个快速记录")])]),s._v(" "),t("h3",{attrs:{id:"_3-1-杭电视频"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-杭电视频"}},[s._v("#")]),s._v(" 3.1.杭电视频")]),s._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"http://mooc1.chaoxing.com/course/206090161.html#courseArticle_157633879",target:"_blank",rel:"noopener noreferrer"}},[s._v("杭电-C语言程序设计2"),t("OutboundLink")],1)])]),s._v(" "),t("li",[t("p",[s._v("其中的，浮点数部分的视频")])])]),s._v(" "),t("p",[s._v("在杭电的视频中")]),s._v(" "),t("ul",[t("li",[s._v("(11100.101)"),t("sub",[s._v("2")]),s._v("=0.11100101*2"),t("sup",[s._v("101")])]),s._v(" "),t("li",[s._v("指数上面的101，其实是二进制，真的是坑，记得以前在很多书上都不告知，那些数字的由来，注明进制")])]),s._v(" "),t("h3",{attrs:{id:"_3-2-清华教材"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-清华教材"}},[s._v("#")]),s._v(" 3.2.清华教材")]),s._v(" "),t("p",[s._v("教材：《C++语言程序设计(第4版)》(郑莉,董渊) "),t("code",[s._v("page15")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/image-20210713103503229.png",alt:"image-20210713103503229"}})]),s._v(" "),t("p",[s._v("如上，第一个红色箭头『『注意：“表示二进制”这句话是修饰后面的数字的，而不是修饰前面的图片的』")]),s._v(" "),t("ul",[t("li",[s._v("提醒：\n"),t("ul",[t("li",[s._v("原码的符号位和数值位是"),t("strong",[s._v("分离")]),s._v("管理的")]),s._v(" "),t("li",[s._v("补码的符号位和数值位是"),t("strong",[s._v("一起")]),s._v("管理的")])])])]),s._v(" "),t("p",[s._v("所以可以解释，第1个箭头和第2个箭头")]),s._v(" "),t("h2",{attrs:{id:"_4-函数调用栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-函数调用栈"}},[s._v("#")]),s._v(" 4.函数调用栈")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("参数(ebp+8)")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("Ret返回地址(ebp+4)")])]),s._v(" "),t("tr",[t("td",[s._v("ebp+0（旧ebp）")])]),s._v(" "),t("tr",[t("td",[s._v("参数")])]),s._v(" "),t("tr",[t("td",[s._v("局部变量")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);