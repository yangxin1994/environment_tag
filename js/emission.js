$(document).ready(function() {
	
	//为方便以文件的方式查看页面写的数据，开发可删掉
	var tempData = {
		"basicFeature":[
			{
		        "name": "花鸟市场",
		        "value": 1446,
		        "type": "b"
		    },
		    {
		        "name": "汽车",
		        "value": 928,
		        "type":"b"
		    },
		    {
		        "name": "视频",
		        "value": 906,
		        "type":"b"
		    },
		    {
		        "name": "电视",
		        "value": 825,
		        "type":"b"
		    },
		    {
		        "name": "Lover Boy 88",
		        "value": 514,
		        "type":"b"
		    },
		    {
		        "name": "动漫",
		        "value": 486,
		        "type":"b"
		    },
		    {
		        "name": "音乐",
		        "value": 53,
		        "type":"b"
		    },
		    {
		        "name": "直播",
		        "value": 163,
		        "type":"b"
		    },
		    {
		        "name": "广播电台",
		        "value": 86,
		        "type":"b"
		    },
		    {
		        "name": "戏曲曲艺",
		        "value": 17,
		        "type":"b"
		    },
		    {
		        "name": "演出票务",
		        "value": 6,
		        "type":"b"
		    },
		    {
		        "name": "全日制学校",
		        "value": 941,
		        "type":"b"
		    },
		    {
		        "name": "基础教育科目",
		        "value": 585,
		        "type":"b"
		    },
		    {
		        "name": "考试培训",
		        "value": 473,
		        "type":"b"
		    },
		    {
		        "name": "语言学习",
		        "value": 358,
		        "type":"b"
		    },
		    {
		        "name": "留学",
		        "value": 246,
		        "type":"b"
		    },
		    {
		        "name": "K12课程培训",
		        "value": 207,
		        "type":"b"
		    },
		    {
		        "name": "艺术培训",
		        "value": 194,
		        "type":"b"
		    },
		    {
		        "name": "技能培训",
		        "value": 104,
		        "type":"b"
		    },
		    {
		        "name": "IT培训",
		        "value": 87,
		        "type":"b"
		    },
		    {
		        "name": "高等教育专业",
		        "value": 63,
		        "type":"b"
		    },
		    {
		        "name": "家教",
		        "value": 48,
		        "type":"b"
		    },
		    {
		        "name": "体育培训",
		        "value": 23,
		        "type":"b"
		    }
		],
		"emissionFeature":[
			{
		        "name": "职场培训",
		        "value": 5,
		        "type":"e"
		    },
		    {
		        "name": "金融财经",
		        "value": 1328,
		        "type":"e"
		    },
		    {
		        "name": "银行",
		        "value": 765,
		        "type":"e"
		    },
		    {
		        "name": "股票",
		        "value": 452,
		        "type":"e"
		    },
		    {
		        "name": "保险",
		        "value": 415,
		        "type":"e"
		    },
		    {
		        "name": "贷款",
		        "value": 253,
		        "type":"e"
		    },
		    {
		        "name": "基金",
		        "value": 211,
		        "type":"e"
		    },
		    {
		        "name": "信用卡",
		        "value": 180,
		        "type":"e"
		    },
		    {
		        "name": "外汇",
		        "value": 138,
		        "type":"e"
		    },
		    {
		        "name": "P2P",
		        "value": 116,
		        "type":"e"
		    },
		    {
		        "name": "贵金属",
		        "value": 98,
		        "type":"e"
		    },
		    {
		        "name": "债券",
		        "value": 93,
		        "type":"e"
		    },
		    {
		        "name": "网络理财",
		        "value": 92,
		        "type":"e"
		    },
		    {
		        "name": "信托",
		        "value": 90,
		        "type":"e"
		    },
		    {
		        "name": "征信",
		        "value": 76,
		        "type":"e"
		    },
		    {
		        "name": "期货",
		        "value": 76,
		        "type":"e"
		    },
		    {
		        "name": "公积金",
		        "value": 40,
		        "type":"e"
		    },
		    {
		        "name": "银行理财",
		        "value": 36,
		        "type":"e"
		    },
		    {
		        "name": "银行业务",
		        "value": 30,
		        "type":"e"
		    },
		    {
		        "name": "典当",
		        "value": 7,
		        "type":"e"
		    },
		    {
		        "name": "海外置业",
		        "value": 1,
		        "type":"e"
		    },
		    {
		        "name": "汽车",
		        "value": 1309,
		        "type":"e"
		    },
		    {
		        "name": "汽车用品",
		        "value": 37,
		        "type":"e"
		    },
		    {
		        "name": "路况查询",
		        "value": 32,
		        "type":"e"
		    },
		    {
		        "name": "汽车保险",
		        "value": 28,
		        "type":"e"
		    },
		    {
		        "name": "陪驾代驾",
		        "value": 4,
		        "type":"e"
		    },
		    {
		        "name": "网络购物",
		        "value": 1275,
		        "type":"e"
		    },
		    {
		        "name": "做我的猫",
		        "value": 1088,
		        "type":"e"
		    },
		    {
		        "name": "只想要你知道",
		        "value": 907,
		        "type":"e"
		    },
		    {
		        "name": "团购",
		        "value": 837,
		        "type":"e"
		    },
		    {
		        "name": "比价",
		        "value": 201,
		        "type":"e"
		    },
		    {
		        "name": "海淘",
		        "value": 195,
		        "type":"e"
		    },
		    {
		        "name": "移动APP购物",
		        "value": 179,
		        "type":"e"
		    },
		    {
		        "name": "支付方式",
		        "value": 119,
		        "type":"e"
		    },
		    {
		        "name": "代购",
		        "value": 43,
		        "type":"e"
		    },
		    {
		        "name": "体育健身",
		        "value": 1234,
		        "type":"e"
		    },
		    {
		        "name": "体育赛事项目",
		        "value": 802,
		        "type":"e"
		    },
		    {
		        "name": "运动项目",
		        "value": 405,
		        "type":"e"
		    },
		    {
		        "name": "体育类赛事",
		        "value": 337,
		        "type":"e"
		    },
		    {
		        "name": "健身项目",
		        "value": 199,
		        "type":"e"
		    },
		    {
		        "name": "健身房健身",
		        "value": 78,
		        "type":"e"
		    },
		    {
		        "name": "运动健身",
		        "value": 77,
		        "type":"e"
		    },
		    {
		        "name": "家庭健身",
		        "value": 36,
		        "type":"e"
		    }
		],
		"superviseFeature":[
			{
		        "name": "健身器械",
		        "value": 29,
		        "type":"s"
		    },
		    {
		        "name": "办公室健身",
		        "value": 3,
		        "type":"s"
		    },
		    {
		        "name": "商务服务",
		        "value": 1201,
		        "type":"s"
		    },
		    {
		        "name": "法律咨询",
		        "value": 508,
		        "type":"s"
		    },
		    {
		        "name": "化工材料",
		        "value": 147,
		        "type":"s"
		    },
		    {
		        "name": "广告服务",
		        "value": 125,
		        "type":"s"
		    },
		    {
		        "name": "会计审计",
		        "value": 115,
		        "type":"s"
		    },
		    {
		        "name": "人员招聘",
		        "value": 101,
		        "type":"s"
		    },
		    {
		        "name": "印刷打印",
		        "value": 66,
		        "type":"s"
		    },
		    {
		        "name": "知识产权",
		        "value": 32,
		        "type":"s"
		    },
		    {
		        "name": "翻译",
		        "value": 22,
		        "type":"s"
		    },
		    {
		        "name": "安全安保",
		        "value": 9,
		        "type":"s"
		    },
		    {
		        "name": "公关服务",
		        "value": 8,
		        "type":"s"
		    },
		    {
		        "name": "商旅服务",
		        "value": 2,
		        "type":"s"
		    },
		    {
		        "name": "展会服务",
		        "value": 2,
		        "type":"s"
		    },
		    {
		        "name": "特许经营",
		        "value": 1,
		        "type":"s"
		    },
		    {
		        "name": "DIY手工",
		        "value": 75,
		        "type":"s"
		    },
		    {
		        "name": "舞蹈",
		        "value": 23,
		        "type":"s"
		    },
		    {
		        "name": "钓鱼",
		        "value": 21,
		        "type":"s"
		    },
		    {
		        "name": "棋牌桌游",
		        "value": 17,
		        "type":"s"
		    },
		    {
		        "name": "KTV",
		        "value": 6,
		        "type":"s"
		    },
		    {
		        "name": "密室",
		        "value": 5,
		        "type":"s"
		    }
		],
		"valueFeature":[
			{
		        "name": "采摘",
		        "value": 4,
		        "type":"v"
		    },
		    {
		        "name": "电玩",
		        "value": 1,
		        "type":"v"
		    },
		    {
		        "name": "真人CS",
		        "value": 1,
		        "type":"v"
		    },
		    {
		        "name": "轰趴",
		        "value": 1,
		        "type":"v"
		    },
		    {
		        "name": "家电数码",
		        "value": 1111,
		        "type":"v"
		    },
		    {
		        "name": "手机",
		        "value": 885,
		        "type":"v"
		    },
		    {
		        "name": "服饰鞋包",
		        "value": 1047,
		        "type":"v"
		    },
		    {
		        "name": "服装",
		        "value": 566,
		        "type":"v"
		    },
		    {
		        "name": "饰品",
		        "value": 289,
		        "type":"v"
		    },
		    {
		        "name": "鞋",
		        "value": 184,
		        "type":"v"
		    },
		    {
		        "name": "箱包",
		        "value": 168,
		        "type":"v"
		    },
		    {
		        "name": "奢侈品",
		        "value": 137,
		        "type":"v"
		    },
		    {
		        "name": "母婴亲子",
		        "value": 1041,
		        "type":"v"
		    },
		    {
		        "name": "孕婴保健",
		        "value": 505,
		        "type":"v"
		    },
		    {
		        "name": "母婴社区",
		        "value": 299,
		        "type":"v"
		    },
		    {
		        "name": "早教",
		        "value": 103,
		        "type":"v"
		    },
		    {
		        "name": "奶粉辅食",
		        "value": 66,
		        "type":"v"
		    },
		    {
		        "name": "童车童床",
		        "value": 41,
		        "type":"v"
		    },
		    {
		        "name": "关注品牌",
		        "value": 271,
		        "type":"v"
		    },
		    {
		        "name": "宝宝玩乐",
		        "value": 30,
		        "type":"v"
		    }
		],
		"riskFeature":[
			{
		        "name": "母婴护理服务",
		        "value": 25,
		        "type":"r"
		    },
		    {
		        "name": "纸尿裤湿巾",
		        "value": 16,
		        "type":"r"
		    },
		    {
		        "name": "妈妈用品",
		        "value": 15,
		        "type":"r"
		    },
		    {
		        "name": "宝宝起名",
		        "value": 12,
		        "type":"r"
		    },
		    {
		        "name": "童装童鞋",
		        "value": 9,
		        "type":"r"
		    },
		    {
		        "name": "胎教",
		        "value": 8,
		        "type":"r"
		    },
		    {
		        "name": "宝宝安全",
		        "value": 1,
		        "type":"r"
		    },
		    {
		        "name": "宝宝洗护用品",
		        "value": 1,
		        "type":"r"
		    },
		    {
		        "name": "软件应用",
		        "value": 1018,
		        "type":"r"
		    },
		    {
		        "name": "系统工具",
		        "value": 896,
		        "type":"r"
		    },
		    {
		        "name": "理财购物",
		        "value": 440,
		        "type":"r"
		    },
		    {
		        "name": "生活实用",
		        "value": 365,
		        "type":"r"
		    },
		    {
		        "name": "影音图像",
		        "value": 256,
		        "type":"r"
		    },
		    {
		        "name": "社交通讯",
		        "value": 214,
		        "type":"r"
		    },
		    {
		        "name": "手机美化",
		        "value": 39,
		        "type":"r"
		    },
		    {
		        "name": "办公学习",
		        "value": 28,
		        "type":"r"
		    },
		    {
		        "name": "应用市场",
		        "value": 23,
		        "type":"r"
		    },
		    {
		        "name": "母婴育儿",
		        "value": 14,
		        "type":"r"
		    },
		    {
		        "name": "游戏",
		        "value": 946,
		        "type":"r"
		    },
		    {
		        "name": "手机游戏",
		        "value": 565,
		        "type":"r"
		    }
		]
	}	

    
	var featuresNum = 5;//特征词的种类
	var allFeatures = [];//存放五种类别的特征词
	var featureWords = [];//用于存储没有选中特征时将所有特征词渲染echarts
	var wordChart = echarts.init(document.getElementById("wordCloud"));
	
	//浏览器窗口大小改变时，重新渲染echarts图
    $(window).resize(function(){
	    wordChart.resize();
	});
	
	getAllKeyWords();
		
	//头部标签的点击事件
	$('.containter-title-nav li').click(function() {
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	})
	
	
	/**
	 * 获取所有特征统计云图特征词
	 */
	function getAllKeyWords() {
//		$.getJSON("words.json", "", function(data) {
//			allFeatures[0] = data.basicFeature;
//			allFeatures[1] = data.emissionFeature;
//			allFeatures[2] = data.superviseFeature;
//			allFeatures[3] = data.valueFeature;
//			allFeatures[4] = data.riskFeature;
		
			allFeatures[0] = tempData.basicFeature;
			allFeatures[1] = tempData.emissionFeature;
			allFeatures[2] = tempData.superviseFeature;
			allFeatures[3] = tempData.valueFeature;
			allFeatures[4] = tempData.riskFeature;
			
			for(var j = 0;j < featuresNum;j++){
				featureWords = featureWords.concat(allFeatures[j]);
			}
			wordCloudGo(featureWords);
//		});
	}
	

	/**
	 * 渲染特征词云图
	 */
	function wordCloudGo(data){

		var wordOption = {
			series: [{
		        type: 'wordCloud',
		        left: 'center',
		        top: 'center',
		        size: ['100%', '100%'],
		        rotationRange: [0, 90,-90],
		        autoSize:{
				    "enable": true,
				    "minSize": 16
				},
		        data: data.map(function(item){
		        	var cr;
	
	        		if(item.type == 'b'){
        				cr = '#14b4a8';
            		}else if(item.type == 'e'){
            			cr = '#fe9b48';
            		}else if(item.type == 's'){
            			cr = '#e84c4d';
            		}else if(item.type == 'v'){
            			cr = '#5197ed';
            		}else{
            			cr = '#5572fb';
            		}
		        	
            		return{
            			name:item.name,
            			value:item.value,
            			itemStyle:{
            				normal: {
	            				color:cr
	            			}
            			}
            		}
		        })
		    }]
		}
		wordChart.setOption(wordOption,true);
	}
});