(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{322:function(t,e,a){"use strict";a.r(e);var s=a(14),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"mysql语句工程写法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql语句工程写法"}},[t._v("#")]),t._v(" mysql语句工程写法")]),t._v(" "),e("div",{staticClass:"language-cpp line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("font style"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"background: yellow"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),e("p",[t._v("[TOC]")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#目录"}},[t._v("目录")])]),e("li",[e("a",{attrs:{href:"#_1-建立table"}},[t._v("1.建立table")]),e("ul",[e("li",[e("a",{attrs:{href:"#student-学生信息表"}},[t._v("student[学生信息表]")])]),e("li",[e("a",{attrs:{href:"#score-学生成绩表"}},[t._v("score[学生成绩表]")])])])]),e("li",[e("a",{attrs:{href:"#_2-内连接sql"}},[t._v("2.内连接sql")]),e("ul",[e("li",[e("a",{attrs:{href:"#sql语句"}},[t._v("sql语句")])]),e("li",[e("a",{attrs:{href:"#等价于inner-join"}},[t._v("等价于inner join")])]),e("li",[e("a",{attrs:{href:"#坑-自然连接和内连接有什么区别"}},[t._v("坑-自然连接和内连接有什么区别")])])])]),e("li",[e("a",{attrs:{href:"#_3-外连接sql"}},[t._v("3.外连接sql")]),e("ul",[e("li",[e("a",{attrs:{href:"#左外连接"}},[t._v("左外连接")])]),e("li",[e("a",{attrs:{href:"#右外连接"}},[t._v("右外连接")])]),e("li",[e("a",{attrs:{href:"#全外连接"}},[t._v("全外连接")])]),e("li",[e("a",{attrs:{href:"#_3-1-左外连接、左连接"}},[t._v("3.1.左外连接、左连接")])]),e("li",[e("a",{attrs:{href:"#_3-2-右外连接、右连接"}},[t._v("3.2.右外连接、右连接")])]),e("li",[e("a",{attrs:{href:"#_3-3-font-style-background-yellow-不支持-全连接-font"}},[t._v("3.3."),e("font",{staticStyle:{background:"yellow"}},[t._v("不支持-全连接")])],1)])])]),e("li",[e("a",{attrs:{href:"#_4-组合查询-union和union-all"}},[t._v("4.组合查询-union和union all")]),e("ul",[e("li",[e("a",{attrs:{href:"#_4-1-使用union默认会-去除相同行"}},[t._v("4.1.使用union默认会[去除相同行]")])]),e("li",[e("a",{attrs:{href:"#_4-2-保留相同行-union-all"}},[t._v("4.2.保留相同行-union all")])])])]),e("li",[e("a",{attrs:{href:"#面试代码题"}},[t._v("面试代码题")]),e("ul",[e("li",[e("a",{attrs:{href:"#_1-查询排名前10的数据"}},[t._v("1.查询排名前10的数据")])]),e("li",[e("a",{attrs:{href:"#sql查询各科成绩前三名"}},[t._v("sql查询各科成绩前三名")])]),e("li",[e("a",{attrs:{href:"#_2-mysql查询第1到2这2条语句"}},[t._v("2.mysql查询第1到2这2条语句")])]),e("li",[e("a",{attrs:{href:"#_3-联表查询"}},[t._v("3.联表查询")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"_1-建立table"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-建立table"}},[t._v("#")]),t._v(" 1.建立table")]),t._v(" "),e("h3",{attrs:{id:"student-学生信息表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#student-学生信息表"}},[t._v("#")]),t._v(" student[学生信息表]")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select version();\ncreate table student(\n    number INT NOT NULL AUTO_INCREMENT COMMENT '学号',\n    name VARCHAR(5) COMMENT '姓名',\n    major VARCHAR(30) COMMENT '专业',\n    PRIMARY KEY(number)\n)Engine=InnoDB CHARSET=utf8 COMMENT '学生信息表';\nINSERT into student VALUES(20180101, '张三', '软件学院');\nINSERT into student VALUES(20180102, '李四', '计算机科学与工程');\nINSERT into student VALUES(20180103, '王五', '计算机科学与工程');\nselect *\nfrom student;\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br")])]),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"right"}},[t._v("number")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("major")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("20180101")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("张三")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("软件学院")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("20180102")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("李四")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("计算机科学与工程")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("20180103")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("王五")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("计算机科学与工程")])])])]),t._v(" "),e("h3",{attrs:{id:"score-学生成绩表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#score-学生成绩表"}},[t._v("#")]),t._v(" score[学生成绩表]")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("create table score(\n    number INT COMMENT '学号',\n    subject VARCHAR(30) COMMENT '科目',\n    score TINYINT COMMENT '成绩',\n    PRIMARY KEY(number, subject)\n)Engine=InnoDB CHARSET=utf8 COMMENT '学生成绩表';\nINSERT into score VALUES(20180101, 'MySQL是怎样运行的', 78);\nINSERT into score VALUES(20180101, '深入浅出MySQL', 88);\nINSERT into score VALUES(20180102, '深入浅出MySQL', 98);\nINSERT into score VALUES(20180102, 'MySQL是怎样运行的', 100);\nINSERT into score VALUES(20180105, 'MySQL是怎样运行的', 66);\nselect *\nfrom score;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br")])]),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"right"}},[t._v("number")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("subject")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("score")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("20180101")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("MySQL是怎样运行的")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("78")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("20180101")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("深入浅出MySQL")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("88")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("20180102")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("MySQL是怎样运行的")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("100")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("20180102")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("深入浅出MySQL")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("98")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("20180105")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("MySQL是怎样运行的")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("66")])])])]),t._v(" "),e("h2",{attrs:{id:"_2-内连接sql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-内连接sql"}},[t._v("#")]),t._v(" 2.内连接sql")]),t._v(" "),e("p",[t._v('内连接（等值连接）AAA inner BBB  XX on\n自连接，自连接可以看成内连接的一种，只是连接的表是自身而已。，\n「employee」 AS e1 INNER JOIN 「employee」 AS e2 ON e1.department = e2.department AND e2.name = "Jim";')]),t._v(" "),e("p",[t._v("内连接和自然连接的"),e("strong",[t._v("区别")]),t._v("：内连接提供连接的列，而自然连接自动连接所有同名列。\n交叉连接（CROSS JOIN）：有两种，显式的和隐式的, 显式的交叉连接，使用CROSS JOIN。")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("SELECT O.ID, O.ORDER_NUMBER, C.ID,\nC.NAME\nFROM ORDERS as O \ncross join\nCUSTOMERS as C\nWHERE O.ID=1;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("h3",{attrs:{id:"sql语句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sql语句"}},[t._v("#")]),t._v(" sql语句")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("SELECT * \nfrom student, score \nwhere \n\tstudent.number=score.number;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"right"}},[t._v("number")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("major")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("number")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("subject")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("score")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("20180101")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("张三")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("软件学院")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("20180101")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("MySQL是怎样运行的")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("78")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("20180101")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("张三")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("软件学院")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("20180101")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("深入浅出MySQL")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("88")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("20180102")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("李四")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("计算机科学与工程")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("20180102")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("MySQL是怎样运行的")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("100")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("20180102")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("李四")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("计算机科学与工程")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("20180102")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("深入浅出MySQL")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("98")])])])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("王五缺考，但是查不到")])])]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("SELECT student.number, student.name, score.subject, score.score\nfrom \n\tstudent, score \nwhere \n\tstudent.number=score.number;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"right"}},[t._v("number")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("subject")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("score")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("20180101")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("张三")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("MySQL是怎样运行的")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("78")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("20180101")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("张三")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("深入浅出MySQL")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("88")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("20180102")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("李四")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("MySQL是怎样运行的")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("100")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("20180102")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("李四")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("深入浅出MySQL")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("98")])])])]),t._v(" "),e("h3",{attrs:{id:"等价于inner-join"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#等价于inner-join"}},[t._v("#")]),t._v(" 等价于inner join")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("SELECT student.number, student.name, score.subject, score.score\nfrom \n  student\ninner join \n  score \non \n\tstudent.number=score.number;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"right"}},[t._v("number")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("subject")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("score")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("20180101")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("张三")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("MySQL是怎样运行的")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("78")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("20180101")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("张三")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("深入浅出MySQL")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("88")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("20180102")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("李四")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("MySQL是怎样运行的")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("100")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("20180102")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("李四")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("深入浅出MySQL")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("98")])])])]),t._v(" "),e("ul",[e("li",[e("font",{staticStyle:{background:"yellow"}},[t._v("王五缺考，但是查不到")])],1),t._v(" "),e("li",[t._v("注意："),e("font",{staticStyle:{background:"yellow"}},[t._v("内连接里面的on，使用和where等价，on语句只有在"),e("strong",[t._v("外连接")]),t._v("才能发挥用途！")])],1)]),t._v(" "),e("h3",{attrs:{id:"坑-自然连接和内连接有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#坑-自然连接和内连接有什么区别"}},[t._v("#")]),t._v(" 坑-自然连接和内连接有什么区别")]),t._v(" "),e("p",[t._v("自然连接natural join")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("aaa AS A natural join bbb AS B;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("自然连接是基于两个表之间的共同列进行匹配的一种连接方式，它不是内连接（"),e("code",[t._v("INNER JOIN")]),t._v("）的一种。")]),t._v(" "),e("p",[t._v("在自然连接中，MySQL会自动查找两个表中具有相同名称的列，并将它们作为连接条件。因此，自然连接不需要指定连接条件。而在内连接中，我们需要显式地指定要连接的列和连接条件。")]),t._v(" "),e("p",[t._v("虽然自然连接和内连接都会返回匹配的行，但它们的区别在于，自然连接除了返回匹配的行，还会返回两个表中所有其他非重复的列。而内连接只返回符合连接条件的匹配行。")]),t._v(" "),e("p",[t._v("需要注意的是，"),e("strong",[t._v("使用自然连接可能会造成一些潜在的问题")]),t._v("。例如，如果两个表中具有相同名称的列包含了不同的数据类型，那么自然连接可能会出现数据类型不匹配的错误。此外，在具有多个匹配列的情况下，自然连接可能会导致意外的结果集。所以，在实际应用中，我们需要仔细考虑是否使用自然连接，或者选择使用其他类型的连接来实现我们的需求。")]),t._v(" "),e("h2",{attrs:{id:"_3-外连接sql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-外连接sql"}},[t._v("#")]),t._v(" 3.外连接sql")]),t._v(" "),e("ul",[e("li",[t._v("为了"),e("font",{staticStyle:{background:"yellow"}},[e("strong",[t._v("解决")]),t._v("王五缺考，但是查不到")]),t._v("，使用外连接的on，而不是where语句！")],1)]),t._v(" "),e("p",[t._v("外连接  外连接"),e("font",{staticStyle:{background:"yellow"}},[t._v("保留了"),e("strong",[t._v("没有关联")]),t._v("的那些行（OUTER JOIN）")])],1),t._v(" "),e("h3",{attrs:{id:"左外连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#左外连接"}},[t._v("#")]),t._v(" 左外连接")]),t._v(" "),e("p",[e("code",[t._v("Customers left outer join Orders on Customers.cust_id = Orders.cust_id")]),t._v("\n​\t左外连接就是"),e("strong",[t._v("保留左表（此时左边表是-驱动表，右边的是被驱动表）没有关联的行")])]),t._v(" "),e("h3",{attrs:{id:"右外连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#右外连接"}},[t._v("#")]),t._v(" 右外连接")]),t._v(" "),e("p",[e("code",[t._v("RIGHT OUTER JOIN")])]),t._v(" "),e("p",[t._v("​\t右外连接就是"),e("strong",[t._v("保留右表（此时右边表是-驱动表，左边的是被驱动表）没有关联的行")])]),t._v(" "),e("h3",{attrs:{id:"全外连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全外连接"}},[t._v("#")]),t._v(" 全外连接")]),t._v(" "),e("p",[e("code",[t._v("FULL OUTER JOIN")])]),t._v(" "),e("ul",[e("li",[t._v("参考资料：《Mysql是怎样运行的》P183-P185")])]),t._v(" "),e("h3",{attrs:{id:"_3-1-左外连接、左连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-左外连接、左连接"}},[t._v("#")]),t._v(" 3.1.左外连接、左连接")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("SELECT student.number, student.name, score.subject, score.score\nfrom \n\tstudent\nleft join \n\tscore \non \n\tstudent.number=score.number;  #注意！！！没有用where了\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"right"}},[t._v("number")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("subject")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("score")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("20180101")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("张三")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("MySQL是怎样运行的")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("78")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("20180101")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("张三")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("深入浅出MySQL")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("88")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("20180102")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("李四")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("MySQL是怎样运行的")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("100")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("20180102")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("李四")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("深入浅出MySQL")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("98")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[e("font",{staticStyle:{background:"yellow"}},[t._v("20180103")])],1),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("王五")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("em",[t._v("null")])]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[e("em",[t._v("null")])])])])]),t._v(" "),e("h3",{attrs:{id:"_3-2-右外连接、右连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-右外连接、右连接"}},[t._v("#")]),t._v(" 3.2.右外连接、右连接")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("SELECT student.number, student.name, score.subject, score.score\nfrom \n\tstudent\nright join \n\tscore \non \n\tstudent.number=score.number;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"right"}},[t._v("number")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("subject")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("score")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("20180101")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("张三")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("MySQL是怎样运行的")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("78")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("20180101")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("张三")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("深入浅出MySQL")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("88")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("20180102")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("李四")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("MySQL是怎样运行的")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("100")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("20180102")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("李四")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("深入浅出MySQL")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("98")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[e("em",[t._v("null")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("em",[t._v("null")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("MySQL是怎样运行的")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[e("font",{staticStyle:{background:"yellow"}},[t._v("66")])],1)])])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("注意是因为，student.number"),e("strong",[t._v("不存在05号")]),t._v("，所以才是NULL")])]),t._v(" "),e("li",[e("p",[e("font",{staticStyle:{background:"yellow"}},[t._v("总结：左、右外连接，其实"),e("strong",[t._v("只在驱动表的选取方式上")]),t._v("不同，在其他方面都一样，所以，优化器会把右外查询转换为左外查询")])],1)])]),t._v(" "),e("h3",{attrs:{id:"_3-3-不支持-全连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-不支持-全连接"}},[t._v("#")]),t._v(" 3.3."),e("font",{staticStyle:{background:"yellow"}},[t._v("不支持-全连接")])],1),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("SELECT student.number, student.name, score.subject, score.score\nfrom \n\tstudent\nfull join \n\tscore \non \n\tstudent.number=score.number;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("ul",[e("li",[e("font",{staticStyle:{background:"yellow"}},[t._v("语法报错")])],1)]),t._v(" "),e("p",[e("font",{staticStyle:{background:"yellow"}},[t._v("MySQL"),e("strong",[t._v("目前并不支持"),e("code",[t._v("FULL JOIN")]),t._v("语法")]),t._v("，但是可以使用其他方式实现"),e("code",[t._v("FULL JOIN")]),t._v("的效果。")])],1),t._v(" "),e("p",[t._v("一种解决方法是")]),t._v(" "),e("ul",[e("li",[t._v("将"),e("code",[t._v("LEFT JOIN")]),t._v("和"),e("code",[t._v("RIGHT JOIN")]),t._v("合并使用，并使用"),e("code",[t._v("UNION")]),t._v("操作在结果集中"),e("strong",[t._v("去除重复行")]),t._v("。")])]),t._v(" "),e("h2",{attrs:{id:"_4-组合查询-union和union-all"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-组合查询-union和union-all"}},[t._v("#")]),t._v(" 4.组合查询-union和union all")]),t._v(" "),e("p",[t._v("​\t组合查询，使用 UNION 来组合两个查询，如果第一个查询返回 M 行，第二个查询返回 N 行，那么组合查询的结果一般为M+N 行")]),t._v(" "),e("ul",[e("li",[t._v("1、"),e("strong",[t._v("每个查询「必须」包含相同的列")]),t._v("、"),e("font",{staticStyle:{background:"yellow"}},[t._v("表达式")]),t._v("和"),e("strong",[t._v("聚集函数")]),t._v("。")],1),t._v(" "),e("li",[t._v("2、union默认会去除相同行」，如果需要保留相同行，使用 "),e("code",[t._v("union all")])]),t._v(" "),e("li",[t._v("3、"),e("strong",[t._v("只能包含一个 ORDER BY 子句")]),t._v("，并且必须位于语句的最后")])]),t._v(" "),e("h3",{attrs:{id:"_4-1-使用union默认会-去除相同行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-使用union默认会-去除相同行"}},[t._v("#")]),t._v(" 4.1.使用union默认会[去除相同行]")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("SELECT student.number\nfrom \n\tstudent\n\t\nunion\n\nSELECT score.number\nfrom \n\tscore ;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("number")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("20180101")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("20180102")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("20180103")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("20180105")])])])]),t._v(" "),e("h3",{attrs:{id:"_4-2-保留相同行-union-all"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-保留相同行-union-all"}},[t._v("#")]),t._v(" 4.2.保留相同行-union all")]),t._v(" "),e("ul",[e("li",[t._v("需"),e("strong",[t._v("要保留相同行")]),t._v("，使用 union all")])]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("SELECT student.number\nfrom \n\tstudent\n\t\nunion all\n\nSELECT score.number\nfrom \n\tscore ;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("number")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("20180101"),e("font",{staticStyle:{background:"yellow"}},[t._v("[可能是student表的01]")])],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("20180102")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("20180103")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("20180101")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("20180101"),e("font",{staticStyle:{background:"yellow"}},[t._v("[可能是score表的01]")])],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("20180102")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("20180102")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("20180105")])])])]),t._v(" "),e("h2",{attrs:{id:"面试代码题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面试代码题"}},[t._v("#")]),t._v(" 面试代码题")]),t._v(" "),e("h3",{attrs:{id:"_1-查询排名前10的数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-查询排名前10的数据"}},[t._v("#")]),t._v(" 1.查询排名前10的数据")]),t._v(" "),e("h3",{attrs:{id:"sql查询各科成绩前三名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sql查询各科成绩前三名"}},[t._v("#")]),t._v(" sql查询各科成绩前三名")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("create table scores(\nname varchar(100),\nsubject varchar(100),\nscore int\n);\ninsert into scores values\n('学生a','java','100'),\n('学生b','java','90'),\n('学生c','java','90'),\n('学生d','java','60'),\n('学生e','java','80'),\n('学生a','python','100'),\n('学生b','python','90'),\n('学生c','python','90'),\n('学生d','python','60'),\n('学生e','python','80');\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br")])]),e("p",[t._v("MYSQL取表中分数排名前10%的学生信息")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("SELECT `name` FROM(\n  select table.`name`, @row_num:=@row_num+1 as row_num\n  from table, (SELECT @row_num:=1) as b\n  ORDER BY score DESC\n) new_table\nwhere new_table.row_num <= @row_num*0.1;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("h3",{attrs:{id:"_2-mysql查询第1到2这2条语句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-mysql查询第1到2这2条语句"}},[t._v("#")]),t._v(" 2.mysql查询第1到2这2条语句")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("SELECT * from Customers limit 0,2; #LIMIT子句限制查询结果的条数, 表示从【LIMIT 初始位置，记录数】\n\n#1、注意1，初始位置是从0开始\n#2、注意2，是初始位置+记录数\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("DROP TABLE IF EXISTS `Customers`;\n\nCREATE TABLE IF NOT EXISTS `Customers`(\n    cust_id VARCHAR(255) DEFAULT NULL\n);\n\nINSERT `Customers` VALUES ('A'),('B'),('C');\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("h3",{attrs:{id:"_3-联表查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-联表查询"}},[t._v("#")]),t._v(" 3.联表查询")]),t._v(" "),e("p",[t._v("联表查询在平时的项目中经常遇到,比方我们有如下两张表,从上面两张表可以看出他们存在"),e("code",[t._v("dept id")]),t._v("为关联的关系，所以就会存在如下需求：找出EmployeeTB中员工与DeptTB中部门之间对应关系；")]),t._v(" "),e("ul",[e("li",[t._v("参考资料：https://www.jianshu.com/p/1d02f1e9aad1")])])])}),[],!1,null,null,null);e.default=n.exports}}]);