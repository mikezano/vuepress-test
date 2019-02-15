module.exports ={
	base: '/vuepress-test',
	title: 'Sandbox',
	description: 'Testing',
	themeConfig:{
		nav:[
			{text: 'Home', link: '/'},
			{text: 'Guide', link: '/guide/'},
		],
		sidebar: {
			'/guide/':[
				'',
				'frontend',
				'backend',
				'last' 
			]
		}
	},

}