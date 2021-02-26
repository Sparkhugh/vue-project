<template lang="html">
	<div class="app">
		<h1>vue-project</h1>
		<div>
			<h2>1</h2>
			<h2>2</h2>
		</div>
		
	</div>
</template>

<script>
	export default{
		components:{
			
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/common.scss';
	
	.app{
		&>h1{
			color:$color1;
		}
		&>div{
			h2:nth-of-type(1){
				color:$color2;
				font-size:$size1;
			}
			h2:nth-of-type(2){
				font-size:$size2;
			}
		}
	}
</style>
