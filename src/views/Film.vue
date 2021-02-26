<template lang="html">
	<div>
		<h1>电影</h1>
		<div class='tabs'>
			<div>
				<router-link to='/film' tag='span' active-class='on' exact>正在热映</router-link>
			</div>
			<div>
				<router-link to='/film/future' tag='span' active-class='on' exact>即将上映</router-link>
			</div>
		</div>
		
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss" scoped>
	.tabs{
		display:flex;
		&>div{
			flex:1;
			height:50px;
			line-height:50px;
			text-align:center;
			border:1px solid #eee;
		}
		&>div>.on{
			color:blue;
			font-weight:700;
		}
	}
	
</style>
