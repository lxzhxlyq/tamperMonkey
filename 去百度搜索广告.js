// ==UserScript==
// @name         去百度搜索广告
// @namespace    lxz
// @version      2017.12.09
// @description  去掉百度广告
// @author       lxz
// @match        https://www.baidu.com/s*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function(){
        $("td[align=left]").remove();
    });
})();