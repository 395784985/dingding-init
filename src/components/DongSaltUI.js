//所有UI二次封装，为其他模块方便引用
module.exports = {
	ComNavbar : require('./comnavbar'), //顶部导航
	ComSearch1 : require('./comsearch1'), //顶部搜索1
	ComGallery : require('./comgallery'), //图片轮播
	ComGrid : require('./comgrid'), //宫格
	ComPerson : require('./comperson'), //个人信息1
	ComPerson2 : require('./comperson2'), //个人信息2
	ComTabbar : require('./comtabbar'), //底部菜单
	ComList : {
		ComList1 : require('./comlist1'),//聊天记录列表
		ComList2 : require('./comlist2'),//通讯录
		ComList3 : require('./comlist3'),//图文纵排
		ComList4 : require('./comlist4'),//信息卡
		ComList5 : require('./comlist5'),//个人中心模块列表
		ComList6 : require('./comlist6'),//我的动态模块列表
	},
	ComChat:{
		ComBottom: require("./chat/chatbottom"),//聊天底部
		ComItem: require("./chat/chatitem"),//聊天条目
		ComPicText: require("./chat/pictext"),//图文消息
	},
	ComGoods:{
		ComGoodsDetail: require("./goods/goodsdetail"),
		ComGoodsList: require("./goods/goodslistitem"),
	}
	
}