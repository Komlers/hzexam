// Sidebar
document.getElementById("sidebar").innerHTML = `
<h3>目录</h3>
<p><a href="1.html">① 下载安装练习程序</a></p>
<ul>
    <li><a href="1-1.html">1.1 常规安装</a></li>
    <li><a href="1-2.html">1.2 免安装版</a></li>
</ul>
<p><a href="2.html">② 下载安装依赖软件</a></p>
<ul>
    <li><a href="2-1.html">2.1 安装 Python3.4</a></li>
    <li><a href="2-2.html">2.2 安装 WPS Office</a></li>
</ul>
<p><a href="3.html">③ 一些常见问题</a></p>
<ul>
    <li><a href="3-1.html">3.1 “生成考卷”时报错</a></li>
    <li><a href="3-2.html">3.2 右键菜单无“编辑”</a></li>
    <li><a href="3-3.html">3.3 “答题文件不存在”</a></li>
</ul>
<p><a href="4.html">④ 练习试题答案</a></p>
<ul>
    <li><a href="4-1.html">4.1 2024年题库答案</a></li>
    <li><a href="4-2.html">4.2 Python试题答案</a></li>
</ul>
`;

document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggleLink = document.querySelector('a[href="#sidebar"]');
    const sidebar = document.getElementById('sidebar');
    const container = document.querySelector('.container');

    function adjustSidebarAndContainerOnLoad() {
        if (window.innerWidth > 800) {
            sidebar.style.display = 'block';
            sidebarToggleLink.innerHTML = '收起目录';
            container.style.marginLeft = '260px';
        } else {
            sidebar.style.display = 'none';
            sidebarToggleLink.innerHTML = '展开目录';
            container.style.marginLeft = '0';
        }
    }

    // 只在页面加载时调整一遍
    adjustSidebarAndContainerOnLoad();

    sidebarToggleLink.addEventListener('click', function(event) {
        event.preventDefault(); // 阻止默认跳转行为

        if (sidebar.style.display === 'none' || sidebar.style.display === '') {
            sidebar.style.display = 'block';
            sidebarToggleLink.innerHTML = '收起目录';
            if (window.innerWidth > 800) {
                container.style.marginLeft = '260px';
            }
        } else {
            sidebar.style.display = 'none';
            sidebarToggleLink.innerHTML = '展开目录';
            container.style.marginLeft = '0';
        }
    });

    // 为了确保在窗口大小改变时也能正确调整container的左边距，但不改变侧边栏的显示状态
    window.addEventListener('resize', function() {
        if (sidebar.style.display === 'block') {
            if (window.innerWidth > 800) {
                container.style.marginLeft = '260px';
            } else {
                container.style.marginLeft = '0';
            }
        } else {
            container.style.marginLeft = '0';
        }
    });
});
