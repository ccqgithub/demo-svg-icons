svg-icons-demo
====

使用[gulp-svg-symbols](https://github.com/Hiswe/gulp-svg-symbols)管理的图标库。

## 管理图标

* 安装好nodejs，npm

* clone 代码到本地

* 将你的svg图标文件拷贝到svgs目录下

* 打开命令行，cd到目录

* `npm install`

* `gulp`

* 打开浏览器浏览`http://localhost:2222/svg-icons.html`

## 使用图标

* 在body出include生成的svg代码（例子是：outs/svg-icons.svg）

    <svg xmlns="http://www.w3.org/2000/svg" class="si-sprites" style="width:0; height:0; visibility:hidden;">
            
        
        <symbol id="si-envelope" class="si-symbol" viewBox="0 0 1024 1024">
            
             <path fill="#272636" d="M928 684l-832 0c-52.8 0-96-43.2-96-96l0-640c0-52.8 43.2-96 96-96l832 0c52.8 0 96 43.2 96 96l0 640c0 52.8-43.2 96-96 96zM398.74 261.628l-270.74-210.892 0 501.642 270.74-290.75zM176.38 556l671.24 0-335.62-252-335.62 252zM409.288 250.302l102.712-110.302 102.71 110.302 210.554-270.302-626.528 0 210.552 270.302zM625.26 261.628l270.74 290.75 0-501.642-270.74 210.892z" transform="translate(0, 812) scale(1, -1)"/> 
        </symbol>
    </svg>

* 使用图标，拷贝预览处图标下面的代码即可，如：

        <svg class="si si-envelope"><use xlink:href="#si-envelope"></use></svg>

* 一般path的颜色(fill)设为`currentColor`即可，继承父元素的颜色。对应特殊图标，再单独定义。

* 确保兼容性，自定义样式时用每个图标的唯一标识，如上面的图标自定义样式时如下：
        
        /*可以给图标设置大小*/
        .si-envelope{
            width: 200px;
            height: 200px;
        }
        
        /*注：(si 为图标库的名字)
        svg use表示从克隆svg的一部分独立使用
        所以在给path定义样式的时候，如果有父级选择器，请注意：
        在Firefox中path的父元素是克隆的svg（即图标调用的地方）
        而chrome、ie父元素是sprites（即body处include的代码,被克隆的svg）
        所以在给图标的svg的内部内容定义样式时，最好不要用父级选择器，直接使用唯一标识符如：`#si-envelope path`、`.si-symbol-envelope path`, 而不是`.si #si-envelope path`
        */
        /*给全部图标设置颜色*/
        .si-symbol path{
            fill: #ff0000;
        }
        /*给一个图标设置颜色*/
        #si-envelope path{
            fill: #ff0000;
        }
        /*给一个图标设置颜色*/
        .si-symbol-envelope path{
            fill: #ff0000;
        }
