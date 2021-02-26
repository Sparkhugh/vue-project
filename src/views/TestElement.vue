<template lang="html">
	<div>
		<h1>ElementUi</h1>

		<el-row type="flex" align="middle">
			<el-col :span="2">
				<span>商品名称:</span>
			</el-col>
			<el-col :span="6">
				<el-input v-model="input" placeholder="请输入内容"></el-input>
			</el-col>
			<el-col :span="2" :offset="2">
				<span>商品数量:</span>
			</el-col>
			<el-col :span="4">
				<el-input v-model="input"></el-input>
			</el-col>

			<el-col :span="2" :offset="2">
				<span>商品价格:</span>
			</el-col>
			<el-col :span="4">
				<el-input v-model="input"></el-input>
			</el-col>
		</el-row>
		<br>
		<el-button type="primary" icon="el-icon-search">搜索</el-button>
		
		<br>

		<el-table :data="tableData" style="width: 100%">
			<el-table-column prop="date" label="日期" width="180">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="180">
			</el-table-column>
			<el-table-column prop="phone" label="联系方式">
			</el-table-column>
			<el-table-column prop="address" label="地址">
			</el-table-column>
		</el-table>

	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				input: '',
				tableData: [
					{
						date:'2021-02-02',
						name:'赵四',
						phone:1000000,
						address:'花果山水帘洞'
					},
					{
						date:'2021-02-02',
						name:'赵四',
						phone:1000000,
						address:'花果山水帘洞'
					},
					{
						date:'2021-02-02',
						name:'赵四',
						phone:1000000,
						address:'花果山水帘洞'
					},
					{
						date:'2021-02-02',
						name:'赵四',
						phone:1000000,
						address:'花果山水帘洞'
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
