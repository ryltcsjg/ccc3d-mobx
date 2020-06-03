/*
cocoscreator3d中定义了 define和define.amd，导致webpack打包出来的js文件会执行如下定义
if("function"==typeof define&&define.amd)define([],t)

先将define.amd值设置为null，不确定会否影响其它功能
 */
if(window.define){
  window.define.amd=null;
}