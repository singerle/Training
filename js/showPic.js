window.onload = function () {
		
}
function showPicture (whichPicture) {
	var oImg = document.getElementById('picture'); // 获取并保存展示图片的Id为picture的元素节点
	var pictureHref = whichPicture.getAttribute('href'); // 将当前点击a标签的href图片地址保存起来
	oImg.setAttribute('src',pictureHref);	// 修改img src的属性值，展示出想要展示的图片
	var oDescribe = document.getElementById('picDescribe'); // 获取并保存用来展示描述图片信息的id为picDescribe的元素节点
	var text = whichPicture.getAttribute('title'); // 获取并保存要展示的图片描述文本
	oDescribe.firstChild.nodeValue = text; // 将要展示的值 展示在id为picDescribe的元素节点下的文本节点中，以使得描述内容展示出来。
}