<template lang="html">
	<div id="app" class="app">
		<header>
			<section>
				<span>TodoList</span>
				<input type="text" v-model.trim='todo' @keyup.enter='confirm' placeholder="请添加todo">
			</section>
		</header>
		<section>
			<!-- 正在进行 -->
			<div class="panel">
				<div class="panel_title">
					<span>正在进行</span>
					<span v-text='list1.length'></span>
				</div>
				<div class="panel_list" v-for="(item,index) in list1" :key='index'>
					<span @click='transform(index,"up")'></span>
					<span>
						<input v-model='item.title'>
					</span>
					<span @click='del(index,"up")'></span>
				</div>
			</div>
			<!-- 已经完成 -->
			<div class="panel">
				<div class="panel_title">
					<span>已经完成</span>
					<span v-text='list2.length'></span>
				</div>
				<div class="panel_list panel_list-done" v-for="(item,index) in list2" :key='index'>
					<span @click='transform(index)'></span>
					<span>
						<input v-model='item.title'>
					</span>
					<span @click='del(index)'></span>
				</div>
			</div>
		</section>
		<footer>
			Copyright &copy; 2019 todolist.cn <a href="javascript:;">clear</a>
		</footer>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				todo: '',
				list1: [],
				list2: []
			}
		},
		methods: {
			confirm() {
				console.log(this.todo)
				if (!this.todo) {
					return;
				}
				this.list1.push({
					title: this.todo,
					time: Date.now()
				})
				this.todo = ''
			},
			del(index, type) {
				if (type === 'up') {
					this.list1.splice(index, 1)
				} else {
					this.list2.splice(index, 1)
				}
			},
			transform(index, type) {
				if (type === 'up') {
					var res1 = this.list1.splice(index, 1)
					this.list2.push(res1[0])
				} else {
					var res2 = this.list2.splice(index, 1)
					this.list1.push(res2[0])
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	body {
		margin: 0;
		padding: 0;
		font-size: 16px;
		background: #CDCDCD;
	}

	.app {}

	header {
		height: 50px;
		background: #333;
		background: rgba(47, 47, 47, 0.98);
	}

	section {
		margin: 0 auto;
	}

	header section {
		width: 600px;
		height: 100%;
		overflow: hidden;
	}

	header section span {
		float: left;
		width: 100px;
		line-height: 50px;
		color: #DDD;
		font-size: 24px;
		cursor: pointer;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	}

	header input {
		float: right;
		width: 60%;
		height: 24px;
		margin-top: 12px;
		text-indent: 10px;
		border-radius: 5px;
		box-shadow: 0 1px 0 rgba(255, 255, 255, 0.24), 0 1px 6px rgba(0, 0, 0, 0.45) inset;
		border: none
	}

	input:focus {
		outline-width: 0
	}

	.panel {
		width: 600px;
		margin: 0 auto;
	}

	.panel_title {
		line-height: 70px;
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
		padding-right: 5px;
	}

	.panel_title>span:nth-child(1) {
		font-size: 28px;
	}

	.panel_title>span:nth-child(2) {
		float: right;
		height: 20px;
		width: 20px;
		box-sizing: border-box;
		border-radius: 50%;
		background: #E6E6FA;
		line-height: 22px;
		text-align: center;
		color: #666;
		font-size: 14px;
		margin-top: 30px;
	}

	.panel_list {
		height: 32px;
		line-height: 32px;
		background: #fff;
		margin-bottom: 10px;
		padding: 0 10px;
		border-radius: 3px;
		border-left: 5px solid #629A9C;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
		overflow: hidden;
		box-sizing: border-box;
	}

	.panel_list>span:nth-child(1) {
		float: left;
		width: 26px;
		height: 26px;
		background: url(/icon/todo.png) no-repeat center center / 20px 20px;
		margin-top: 3px;
		cursor: pointer;
	}

	.panel_list-done>span:nth-child(1) {
		background: url(/icon/done.png) no-repeat center center / 20px 20px;
	}

	.panel_list>span:nth-child(2) {
		float: left;
		margin-left: 10px;
		width: 400px;
	}

	.panel_list>span:nth-child(2) input {
		/* display: block; */
		width: 100%;
		padding: 0 10px;
		font-size: 16px;
		border: none;
		line-height: 32px;
	}

	.panel_list>span:nth-child(3) {
		float: right;
		width: 26px;
		height: 26px;
		background: url(/icon/delete.png) no-repeat center center / 20px 20px;
		cursor: pointer;
		margin-top: 3px;
	}

	footer {
		color: #666;
		font-size: 14px;
		text-align: center;
	}

	footer a {
		color: #666;
		text-decoration: none;
		color: #999;
	}
</style>
