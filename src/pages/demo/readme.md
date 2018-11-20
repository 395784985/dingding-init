tingle-style是tingle的底层样式实现方案，包括两个部分的实现：
CSS
reset：即样式重置，部分功能不需要在组件中手动调用和处理，对下面文档中提到的几个关键点知晓即可。
flexbox + util：以局部样式声明为粒度的通用样式切片，注意，这里的粒度不是组件级别的。详见下面的文档。
var：stylus的辅助样式函数
JS
util.js：通过js操作样式的辅助函数
CSS Reset
文件：reset.styl
border box：
默认所有元素的盒模型类型为border-box

list style：
列表元素ul和ol的样式默认为none值。
input, textarea
消除输入框和按钮的原生外观
去掉点击链接和文本框对象时默认的灰色半透明覆盖层(iOS)或者虚框(Android)
and more...
更多的reset不再一一列举，详见原文件。
CSS Flexbox
文件：flexbox.styl
tingle中，所有flexbox相关的class值，都以tFB为前缀。
定义伸缩容器：
tFBH: 即flexbox horizontal，指定目标元素成为伸缩容器，且内部子元素水平排列。
tFBV: 即flexbox vertical，指定目标元素成为伸缩容器，且内部子元素垂直排列。
对齐子元素(包括伸缩元素)：
tFBAS: 即cross axis's align start，将子元素对齐到cross轴的起点上。
tFBAC: 即cross axis's align center，将子元素对齐到cross轴的中点上。
tFBAE: 即cross axis's align end，将子元素对齐到cross轴的终点上。
tFBJS: 即main axis's justify start，将子元素对齐到main轴的起点上。
tFBJC: 即main axis's justify center，将子元素对齐到main轴的起点上。
tFBJE: 即main axis's justify end，将子元素对齐到main轴的起点上。
CSS Utils
文件：util.styl
float(移动端不建议使用float)：
tCL / tClear: 即clear，清除浮动
tFL: 即float left

tFR: 即float right

radius：
tR{n}: 即border-radius，n的可选值为3 4 5 6

tRT{n}: 左上角和右上角为圆角，n的可选值同上
tRR{n}: 右上角和右下角为圆角，n的可选值同上
tRB{n}: 左下角和右下角为圆角，n的可选值同上
tRL{n}: 左上角和左下角为圆角，n的可选值同上
padding：
tP{n}: 即padding，n的可选值为0 2 4 6 8 10 12 14 16 18 20 22 24 26 28 30，即从0开始，到30为止的所有偶数。
tPT{n}: 即padding-top，n的可选值同上
tPR{n}: 即padding-right，n的可选值同上
tPB{n}: 即padding-bottom，n的可选值同上
tPL{n}: 即padding-left，n的可选值同上
margin：
tM{n}: 即margin，n的可选值为0 2 4 6 8 10 12 14 16 18 20 22 24 26 28 30，即从0开始，到30为止的所有偶数。
tMT{n}: 即margin-top，n的可选值同上
tMR{n}: 即margin-right，n的可选值同上
tMB{n}: 即margin-bottom，n的可选值同上
tML{n}: 即margin-left，n的可选值同上
position:
tPR: 即position: relative

tPF: 即position: fixed

tPA: 即position: absolute

visibility:
tDN / tHide: 即display: none

tDB: 即display: block

tDIB: 即display: inline-block

tBHide: 即-webkit-backface-visibility: hidden

ellipsis:
tOmit: 强制在一行内显示文字，多余部分用...显示
tOmit2: 强制在两行内显示文字，多余部分用...显示，通常需要和设置父容器高度一起使用。
tOmit3: 强制在三行内显示文字，多余部分用...显示，通常需要和设置父容器高度一起使用。
line height:
规则：1 ≤ n ≤ 2之间的值表示字号的倍数，且小数点用_表示。
tLH{em}: 基于字号的行高，em的可选值为1、1_3、1_4、1_5、1_6、1_7、1_8、1_9、2。如：tLH1表示line-height: 1em，tLH1_3表示line-height: 1.3em。
tLH{px}: 基于px的行高，px的可选值为30、44，如：tLH30表示line-height: 30px。
width:
tW{px}: 基于px的宽度，px的可选值包括：0、16、32、64、128、30、44。如tW44表示width: 44px。
height:
tH{px}: 基于px的高度，px的可选值包括：0、16、32、64、128、30、44。如tH44表示height: 44px。
square:
宽度和高度相等的情况，最常用于icon大小的设置。
tWH{px}: px的可选值包括：0、16、32、64、128、30、44。如tWH44表示width: 44px; height: 44px。
font size:
tFS{px}: 即font-size，px的可选值包括0 12 14 16 18 20 22 24 26 28 30

font color:
tFC{x}: 即color: #xxx，x的可选值包括0、3、4、5、6、7、8、9、a、b、c、d、e、f。如：tFCa表示color: #aaa;。
font align:
tFAL: 即text-align: left

tFAC: 即text-align: center

tFAR: 即text-align: right

backgrond color:
tBC{x}: 即background-color: #xxx，x的可选值包括0、3、4、5、6、7、8、9、a、b、c、d、e、f。如tBC0表示background-color: #000。
opacity:
tOP{n}: 即opacity，设置透明度，n的可选值包括0、10、30、50、80、100。如tOP30表示opacity: 0.3。
3d speed up:
t3D: 即transform translateZ(0)，开启3D加速，谨慎使用。
CSS Var
文件：var.styl
radius(n)
创建圆角样式，单位px

shadow(x, y, b, s, a)
创建阴影样式，单位px

rem(px)
将px值转换为rem值
JS Utils
文件：util.js
createStyleContext
创建一个带有add方法的样式上下文对象，用于动态生成样式。
什么叫动态生成样式？
当然是相对于写在css文件里的静态样式而言啦，动态样式的最明显标志就是样式的名称或者样式的值中包含js的变量。见下面示例的第三步。
语法：
// 第一步：引入模块
const {createStyleContext} = require('tingle-style');

// 第二步：创建一个样式对象
let style = createStyleContext(contextId);

// 第三步：在该对象下添加样式
style.add(ruleId, ruleString); // ruleId可选，但强烈建议使用它。
参数：
contextId：{String} required 上下文样式对象的唯一标识
ruleId：{String} optional 新样式的唯一标识，建议使用，这样可以优化去重
ruleString：{String} required 新样式的内容，建议使用ES6的字符串语法，见下面的demo

示例：
// 第一步：引入模块
const {createStyleContext} = require('tingle-style');

// 第二步：创建一个样式对象
let style = createStyleContext('tGroup_List');

// 第三步：添加带有唯一标记的样式(内部会根据ruleId做去重优化)
// NOTE：省略了部分代码，定义了下面了indent，value，lowerSide变量
style.add(`lineIndent${indent}`, `
    .tGroup_List.lineIndent${indent} .tGroup_ListItem:after{
        ${lowerSide}: ${value}
    }
`);
unitize
添加长度单位，默认单位是px，返回0或者是带有单位的长度字符串值。
语法：
// 第一步：引入模块
const {unitize} = require('tingle-style');

// 第二步：语法
let value = unitize(any);
参数：
any {Number|String|*} optional 要处理的长度值
示例：
unitize(10);     // 10px
unitize('10px'); // 10px
unitize('1rem'); // 1rem
unitize();       // 0
Local Dev
$ gulp server
启动之后，对任何styl文件的改动都会触发重新编译，得到同步更新的css文件。
Updates
tingle-style@0.3.0 / 2015-10-25
radius、padding、margin样式顺序优化
添加util.js模块
tingle-style@0.3.1 / 2015-10-28
添加文档
版本更新
0.2.1 / 2015-09-11
change rem to px
0.2.0 / 2015-09-10
字体调整
0.1.0 / 2015-09-08
add history.md
add value 0 for padding and margin utils
add doc
0.0.1 / 2015-09-07
First Version