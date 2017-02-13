/**
 * Created by Administrator on 2016/11/22.
 */
/**
 * 定义了一个没有兼容性的获取标签内容的函数
 * @param element
 * @returns {*}
 */
function getText(element){ //形参
    // 能力检测   就是要看当前的浏览器，是否支持此对象的属性或是方法
//        var b = typeof element.innerText;
    if(typeof element.innerText=="string"){
        return    element.innerText;
    }else {
        return   element.textContent; // 低版本的火狐浏览器支持
    }
}

/**
 * 定义了一个没有兼容性的设置标签内容的函数
 * @param element
 * @param value
 */
function setText(element,value){
    if(typeof element.innerText=="string"){
        element.innerText = value; //IE8及之前的低版本的浏览器
    }else {
        element.textContent = value;//低版本的火狐浏览器
    }
}


var Txt = {
    getText:function(element){
        // 能力检测   就是要看当前的浏览器，是否支持此对象的属性或是方法
//        var b = typeof element.innerText;
        if(typeof element.innerText=="string"){
            return    element.innerText;
        }else {
            return   element.textContent; // 低版本的火狐浏览器支持
        }
    },
    setText:function(element,value){
        if(typeof element.innerText=="string"){
            element.innerText = value; //IE8及之前的低版本的浏览器
        }else {
            element.textContent = value;//低版本的火狐浏览器
        }
    }
}


var ele = {
    getNextElement:function(element){
        // 能力检测  就是要看当前的浏览器是否支持此对象的属性或是方法
        if(element.nextElementSibling) {
            return element.nextElementSibling;//高级浏览器支持的方式
        }else { // 是IE8及之前的低版本的浏览器支持的方式
            var ele = element.nextSibling;
            while(ele&&ele.nodeType!=1){ // 每一个条件是保证对象得真实存，不是undefined，再一个就是这个节点不是标签
                ele =  ele.nextSibling; //继续在当前标签对象往后找
            }
            return ele;
        }
    },
    getPreviousElement:function(element){
        // 能力检测
        if(element.previousElementSibling){
            return element.previousElementSibling; // 高级浏览器支持的获取当前标签的上一个标签节点
        }else {
            var ele = element.previousSibling;
            while(ele&&ele.nodeType!=1){
                ele=  ele.previousSibling;
            }
            return ele;
        }
    },
    getFirstElement:function(element){
        // 能力检测
        if(element.firstElementChild){ // 高级浏览器支持的方式
            return element.firstElementChild;
        }else {
            //低版本的浏览器支持的方式
            var ele = element.firstChild;
            while(ele&&ele.nodeType!=1){
                ele= ele.nextSibling;
            }
            return ele;
        }
    },
    getLastElement:function(element){
        // 能力检测
        if(element.lastElementChild){
            return element.lastElementChild;
        }else {
            var ele = element.lastChild;
            while(ele&&ele.nodeType!=1){
                ele= ele.previousSibling;
            }
            return ele;
        }
    }
}


/**
 * 封装了一个兼容性版本的获取下一个相邻的标签节点的函数
 * @param element
 * @returns {*}
 */

function getNextElement(element){
    // 能力检测  就是要看当前的浏览器是否支持此对象的属性或是方法
    if(element.nextElementSibling) {
        return element.nextElementSibling;//高级浏览器支持的方式
    }else { // 是IE8及之前的低版本的浏览器支持的方式
        var ele = element.nextSibling;
        while(ele&&ele.nodeType!=1){ // 每一个条件是保证对象得真实存，不是undefined，再一个就是这个节点不是标签
            ele =  ele.nextSibling; //继续在当前标签对象往后找
        }
        return ele;
    }
}
/**
 * 封装了一个兼容版本的获取上一个标签节点的函数
 * @param element
 * @returns {*}
 */
function getPreviousElement(element){
    // 能力检测
    if(element.previousElementSibling){
        return element.previousElementSibling; // 高级浏览器支持的获取当前标签的上一个标签节点
    }else {
        var ele = element.previousSibling;
        while(ele&&ele.nodeType!=1){
            ele=  ele.previousSibling;
        }
        return ele;
    }
}
/**
 * 封装了一个兼容版本的获得子标签节点的函数
 * @param element
 * @returns {element}
 */
function  getFirstElement(element){
    // 能力检测
    if(element.firstElementChild){ // 高级浏览器支持的方式
        return element.firstElementChild;
    }else {
        //低版本的浏览器支持的方式
        var ele = element.firstChild;
        while(ele&&ele.nodeType!=1){
            ele= ele.nextSibling;
        }
        return ele;
    }
}

/**
 * 封装了一个兼容版本的获取父元素的最后一个子标签节点函数
 * @param element
 * @returns {*}
 */
function getLastElement(element){
    // 能力检测
    if(element.lastElementChild){
        return element.lastElementChild;
    }else {
        var ele = element.lastChild;
        while(ele&&ele.nodeType!=1){
            ele= ele.previousSibling;
        }
        return ele;
    }
}
/**
 * 封装了一个通过ID获取标签对象的函数
 * @param id
 * @returns {Element}
 */
function $$(id){
    return document.getElementById(id);
}


/**
 * 封装了一个移动所有的option的函数
 * @param source
 * @param target
 */
function moveAll(source,target){
    var all = $$(source);
    var sel = $$(target);
    var options = all.children;//仅仅获取子标签节点
    for(var i=0;i<options.length;i++){
        sel.appendChild(options[i]); //是将左侧的option一个一个的剪切到右边
        i--;
    }
}
/**
 * 封装了一个移动选中option的按钮
 * @param source
 * @param target
 */
function moveSelecte(source,target){
    var all = $$(source);
    var sel = $$(target);
    var options = all.children;
    for(var i=0;i<options.length;i++){ // 循环遍历每一个option,查看选中状态
        if(options[i].selected){
            sel.appendChild(options[i]);
            i--;// i--之后，再++,保证再从原来剪切的位置继续向后循环
        }
    }
}

function animate(tag, target) {
    //将定时器设置在tag的自定义属性上
    clearInterval(tag.timer);
    //设置定时器，进行运动
    tag.timer = setInterval(function () {
        //获取初始位置
        var leader = tag.offsetLeft;
        //设置步长
        var step = 9;
        //根据leader和target的大小关系去设置step的正负
        step = leader > target ? -step : step;
        //检测什么时候可以进行运动
        //有时候，不能正好运动到指定位置
        //我们需要检测，当前位置距离目标位置的长度是否够一步
        //如果足够走一步，随便走，
        //如果不够，直接走到指定位置
        if (Math.abs(leader - target) > Math.abs(step)) {
            //套用公式，计算要运动到的新位置
            leader = leader + step;
            //将新位置设置给元素，进行运动
            tag.style.left = leader + "px";
        } else {
            //直接走到指定位置
            tag.style.left = target + "px";
            //到达指定位置，清除定时器
            clearInterval(tag.timer);
        }
    }, 17);
}

//修改animate，可以修改任意的属性
function animate(tag, attr, target) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        //改点1 - 获取某个属性的当前状态
        //由于具有单位，需要取整
        //parseInt("hehe") => NaN    NaN || 0
        //为了应对auto转换为NaN的问题，我们使用短路操作，保证程序的健壮性
        var leader = parseInt(getStyle(tag, attr)) || 0;
        //缓动公式的一部分是更改step的值
        var step = (target - leader ) / 10;
        //由于offsetLeft在取值的时候会四舍五入，我们的step如果比较小，会造成无法运动的问题
        //根据步数的正负，更改取整方式
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        //缓动公式
        leader = leader + step;
        //改点2 - 设置给某一个属性
        tag.style[attr] = leader + "px";
        //检测是否走到了指定位置
        if (leader == target) {
            clearInterval(tag.timer);
        }
    }, 17);
}
function getStyle(tag, attr) {
    //检测支持哪一个
    //box.currentStyle//如果不存在值为undefined
    //getComputedStyle如果浏览器不支持。相当于变量未声明，报错
    if (tag.currentStyle) {
        //ie支持
        return tag.currentStyle[attr];
    } else {
        //标准方法
        return getComputedStyle(tag, null)[attr];
    }
}