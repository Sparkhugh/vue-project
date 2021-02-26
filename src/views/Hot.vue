<template lang="html">
	<div>
		热映中
		<div class='tabs'>
			<div>
				<router-link to='/film/hot/tabs1' tag='span' active-class='on' exact>tabs1</router-link>
			</div>
			<div>
				<router-link to='/film/hot/tabs2' tag='span' active-class='on' exact>tabs2</router-link>
			</div>
		</div>
		
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
			width:60px;
			height:30px;
			line-height:30px;
			text-align:center;
			border:1px solid #eee;
		}
		&>div>.on{
			color:blue;
			font-weight:700;
		}
	}
</style>
