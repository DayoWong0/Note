(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{680:function(s,a,t){s.exports=t.p+"assets/img/image-20200803163902871.72cbfadc.png"},681:function(s,a,t){s.exports=t.p+"assets/img/image-20200803164123498.3f309835.png"},682:function(s,a,t){s.exports=t.p+"assets/img/image-20200803154158082.59b50212.png"},683:function(s,a,t){s.exports=t.p+"assets/img/image-20200803154348120.fa881f4f.png"},684:function(s,a,t){s.exports=t.p+"assets/img/image-20200803154504626.30a0613b.png"},685:function(s,a,t){s.exports=t.p+"assets/img/image-20200803154533902.8845b3b3.png"},686:function(s,a,t){s.exports=t.p+"assets/img/image-20200803155010463.cad6594a.png"},687:function(s,a,t){s.exports=t.p+"assets/img/image-20200803155801960.7b162618.png"},688:function(s,a,t){s.exports=t.p+"assets/img/image-20200803160202166.05036866.png"},689:function(s,a,t){s.exports=t.p+"assets/img/image-20200803162526360.476a3f32.png"},690:function(s,a,t){s.exports=t.p+"assets/img/image-20200803162656197.ec5f463f.png"},691:function(s,a,t){s.exports=t.p+"assets/img/image-20200803162957726.78728095.png"},692:function(s,a,t){s.exports=t.p+"assets/img/image-20200803163403639.178eeadb.png"},693:function(s,a,t){s.exports=t.p+"assets/img/image-20200803165416189.e1fec259.png"},694:function(s,a,t){s.exports=t.p+"assets/img/image-20200803174239682.187547da.png"},695:function(s,a,t){s.exports=t.p+"assets/img/image-20200803174309679.fe513dc3.png"},696:function(s,a,t){s.exports=t.p+"assets/img/image-20200803174720506.982b807a.png"},697:function(s,a,t){s.exports=t.p+"assets/img/image-20200803175135070.c04bffe3.png"},698:function(s,a,t){s.exports=t.p+"assets/img/image-20200803175444440.c353de80.png"},699:function(s,a,t){s.exports=t.p+"assets/img/image-20200803175657313.0d899a42.png"},700:function(s,a,t){s.exports=t.p+"assets/img/image-20200803180136888.945d4e9c.png"},701:function(s,a,t){s.exports=t.p+"assets/img/image-20200803182329603.4d268f0d.png"},752:function(s,a,t){"use strict";t.r(a);var e=t(18),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[s._v("#")]),s._v(" MySQL")]),s._v(" "),e("p",[s._v("参考资料:")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://www.bilibili.com/video/BV1NJ411J79W",target:"_blank",rel:"noopener noreferrer"}},[s._v("【狂神说Java】MySQL最新教程通俗易懂"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"数据库分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库分类"}},[s._v("#")]),s._v(" 数据库分类")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("关系型数据库 (SQL)")]),s._v(" "),e("p",[s._v("MySQL SQLlite")])]),s._v(" "),e("li",[e("p",[s._v("非关系型数据库(NoSQL) Not only SQL")]),s._v(" "),e("p",[s._v("对象存储")]),s._v(" "),e("p",[s._v("Redis, MongDB")])])]),s._v(" "),e("h2",{attrs:{id:"mysql-docker配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-docker配置"}},[s._v("#")]),s._v(" MySQL Docker配置")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("MySQL版本: 5.7.19")])]),s._v(" "),e("li",[e("p",[s._v("首次运行")]),s._v(" "),e("p",[s._v("端口: 3306")]),s._v(" "),e("p",[s._v("root密码: 123456")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker run -itd --name mysql-test -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306 -e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" mysql:5.7.19\n")])])])]),s._v(" "),e("li",[e("p",[s._v("启动")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker start 实例id\n")])])])]),s._v(" "),e("li",[e("p",[s._v("停止")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker stop 实例id\n")])])])]),s._v(" "),e("li",[e("p",[s._v("进入MySQL命令行")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it 实例id mysql -u root -p\n")])])])])]),s._v(" "),e("h2",{attrs:{id:"mysql命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql命令"}},[s._v("#")]),s._v(" MySQL命令")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("show databases"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \t--查看所有数据库\n")])])]),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("use school"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" --切换到 school数据库\n")])])]),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("describe student"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" --查看表的信息\n")])])]),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("creat database school"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" --创建数据库school\n")])])]),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("--退出 \n")])])]),e("ul",[e("li",[e("p",[s._v("if语句")]),s._v(" "),e("p",[s._v("如果不存在数据库school则创建数据库school")])])]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXISTS")]),s._v(" school"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("ul",[e("li",[e("p",[s._v("如果表名或者字段名为SQL保留字, 用反单引号Tab键上面那个引起来")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),e("li",[e("p",[s._v("从已经建好的表中获取新建表的命令")]),s._v(" "),e("p",[s._v("可以先用软件手动建好表, 再导出")]),s._v(" "),e("div",{staticClass:"language-SQL extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" 数据库名字\n")])])]),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" 数据表名称\n")])])]),e("ul",[e("li",[s._v("例子")])]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("school"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*!40100 DEFAULT CHARACTER SET utf8 */")]),s._v("\n")])])]),e("ul",[e("li",[e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("student\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("student"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("↵  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AUTO_INCREMENT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'学员id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("↵  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'姓名'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("↵  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("age"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'年龄'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("↵  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("↵"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENGINE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("InnoDB")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AUTO_INCREMENT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CHARSET")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8\n")])])])])])]),s._v(" "),e("li",[e("p",[s._v("DESC  表名: 显示表的结构.")])]),s._v(" "),e("li",[e("p",[s._v("修改表名")])]),s._v(" "),e("li",[e("p",[s._v("增加表的字段")])]),s._v(" "),e("li",[e("p",[s._v("修改表的字段")])])]),s._v(" "),e("p",[e("img",{attrs:{src:t(680),alt:"image-20200803163902871"}})]),s._v(" "),e("ul",[e("li",[e("p",[s._v("删除")]),s._v(" "),e("p",[e("img",{attrs:{src:t(681),alt:"image-20200803164123498"}})])])]),s._v(" "),e("h2",{attrs:{id:"数据类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[s._v("#")]),s._v(" 数据类型")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("数值")]),s._v(" "),e("p",[e("img",{attrs:{src:t(682),alt:"image-20200803154158082"}})])]),s._v(" "),e("li",[e("p",[s._v("字符串")]),s._v(" "),e("p",[e("img",{attrs:{src:t(683),alt:"image-20200803154348120"}})])]),s._v(" "),e("li",[e("p",[s._v("时间日期")]),s._v(" "),e("p",[e("img",{attrs:{src:t(684),alt:"image-20200803154504626"}})])]),s._v(" "),e("li",[e("p",[s._v("null")]),s._v(" "),e("p",[e("img",{attrs:{src:t(685),alt:"image-20200803154533902"}})])])]),s._v(" "),e("h2",{attrs:{id:"数据库字段属性-重要"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库字段属性-重要"}},[s._v("#")]),s._v(" 数据库字段属性(重要)")]),s._v(" "),e("p",[e("img",{attrs:{src:t(686),alt:"image-20200803155010463"}})]),s._v(" "),e("p",[e("img",{attrs:{src:t(687),alt:"image-20200803155801960"}})]),s._v(" "),e("p",[s._v("拓展:")]),s._v(" "),e("p",[e("img",{attrs:{src:t(688),alt:"image-20200803160202166"}})]),s._v(" "),e("h2",{attrs:{id:"数据表的类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据表的类型"}},[s._v("#")]),s._v(" 数据表的类型")]),s._v(" "),e("p",[e("img",{attrs:{src:t(689),alt:"image-20200803162526360"}})]),s._v(" "),e("p",[e("img",{attrs:{src:t(690),alt:"image-20200803162656197"}})]),s._v(" "),e("p",[e("img",{attrs:{src:t(691),alt:"image-20200803162957726"}})]),s._v(" "),e("h3",{attrs:{id:"字符集编码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符集编码"}},[s._v("#")]),s._v(" 字符集编码")]),s._v(" "),e("p",[e("img",{attrs:{src:t(692),alt:"image-20200803163403639"}})]),s._v(" "),e("h2",{attrs:{id:"_3-mysql数据管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-mysql数据管理"}},[s._v("#")]),s._v(" 3. MySQL数据管理")]),s._v(" "),e("h3",{attrs:{id:"_3-1-外键-了解即可"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-外键-了解即可"}},[s._v("#")]),s._v(" 3.1 外键(了解即可)")]),s._v(" "),e("p",[e("img",{attrs:{src:t(693),alt:"image-20200803165416189"}})]),s._v(" "),e("h3",{attrs:{id:"_3-2-dml语言-全部记住"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-dml语言-全部记住"}},[s._v("#")]),s._v(" 3.2 DML语言(全部记住)")]),s._v(" "),e("h3",{attrs:{id:"_3-3-添加"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-添加"}},[s._v("#")]),s._v(" 3.3 添加")]),s._v(" "),e("p",[e("img",{attrs:{src:t(694),alt:"image-20200803174239682"}})]),s._v(" "),e("p",[e("img",{attrs:{src:t(695),alt:"image-20200803174309679"}})]),s._v(" "),e("h3",{attrs:{id:"_3-4-修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-修改"}},[s._v("#")]),s._v(" 3.4 修改")]),s._v(" "),e("p",[e("img",{attrs:{src:t(696),alt:"image-20200803174720506"}})]),s._v(" "),e("p",[e("img",{attrs:{src:t(697),alt:"image-20200803175135070"}})]),s._v(" "),e("p",[e("img",{attrs:{src:t(698),alt:"image-20200803175444440"}})]),s._v(" "),e("h3",{attrs:{id:"_3-5-删除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-删除"}},[s._v("#")]),s._v(" 3.5 删除")]),s._v(" "),e("p",[e("img",{attrs:{src:t(699),alt:"image-20200803175657313"}})]),s._v(" "),e("ul",[e("li",[e("p",[s._v("两者删除方法的不同")]),s._v(" "),e("p",[e("img",{attrs:{src:t(700),alt:"image-20200803180136888"}})])])]),s._v(" "),e("h2",{attrs:{id:"_4-dql查询数据-最重点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-dql查询数据-最重点"}},[s._v("#")]),s._v(" 4. DQL查询数据(最重点)")]),s._v(" "),e("h3",{attrs:{id:"_4-1-dql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-dql"}},[s._v("#")]),s._v(" 4.1 DQL")]),s._v(" "),e("p",[s._v("(Data Query Language: 数据查询语言)")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("所有的查询操作都用它 Select")])]),s._v(" "),e("li",[e("p",[s._v("简单的查询, 复杂的查询它都能做")])]),s._v(" "),e("li",[e("p",[s._v("数据库中最核心的语言, 最重要的语句")])]),s._v(" "),e("li",[e("p",[s._v("使用频率最高的")])])]),s._v(" "),e("h3",{attrs:{id:"_4-2-查询所有字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-查询所有字段"}},[s._v("#")]),s._v(" 4.2 查询所有字段")]),s._v(" "),e("p",[e("img",{attrs:{src:t(701),alt:"image-20200803182329603"}})]),s._v(" "),e("h3",{attrs:{id:"_4-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3"}},[s._v("#")]),s._v(" 4.3")]),s._v(" "),e("p",[s._v("https://www.bilibili.com/video/BV1NJ411J79W?p=17")])])}),[],!1,null,null,null);a.default=r.exports}}]);