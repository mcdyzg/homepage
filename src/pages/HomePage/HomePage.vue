

<template>
	<div class="home-page-wrap" :style="bgStyle" >
		<div class="left-top">
			<el-popover

				placement="bottom-start"
				width="200"
				trigger="click"
				popper-class='show-links'
				>
				<ul class="">
					<li class="show-links-item flex-h ai-center jc-start">
						<svg style='margin: 0 5px 0 1px;' viewBox="0 0 1024 1024" width="20" height="20"><path fill='#fff' d="M941.714 512q0 143.433-83.712 258.011t-216.283 158.574q-15.433 2.853-22.565-3.986t-7.131-17.152v-120.576q0-55.442-29.696-81.152 32.585-3.438 58.587-10.277t53.723-22.272 46.299-37.998 30.281-60.014 11.703-86.016q0-69.157-45.129-117.723 21.138-52.005-4.571-116.553-16.018-5.157-46.299 6.29t-52.553 25.161l-21.723 13.714q-53.138-14.848-109.714-14.848t-109.714 14.848q-9.143-6.29-24.283-15.433t-47.726-22.016-49.152-7.717q-25.161 64.585-3.986 116.553-45.129 48.567-45.129 117.723 0 48.567 11.703 85.723t29.989 60.014 46.007 38.29 53.723 22.272 58.587 10.277q-22.857 20.553-28.014 58.843-11.995 5.705-25.71 8.558t-32.585 2.853-37.413-12.288-31.707-35.73q-10.862-18.286-27.721-29.696t-28.27-13.714l-11.447-1.719q-11.995 0-16.567 2.56t-2.853 6.583 5.157 8.009 7.424 6.839l3.986 2.853q12.581 5.705 24.869 21.723t17.993 29.147l5.705 13.129q7.424 21.723 25.161 35.145t38.29 17.152 39.717 3.986 31.707-2.011l13.129-2.304q0 21.723 0.293 50.871t0.293 30.866q0 10.277-7.424 17.152t-22.857 3.986q-132.571-43.995-216.283-158.574t-83.712-258.011q0-119.442 58.843-220.27t159.707-159.707 220.27-58.843 220.27 58.843 159.707 159.707 58.843 220.27z" p-id="5587"></path></svg>
						<span>Github</span>
					</li>
					<li class="show-links-item flex-h ai-center jc-start">
						<svg style='margin: 0 8px 0 3px;' viewBox="0 0 1024 1024"  width="16" height="16"><path fill='#fff' d="M32 96l960 0 0 64-960 0 0-64zM32 864l960 0 0 64-960 0 0-64zM128 192l64 0 0 64-64 0 0-64zM224 192l64 0 0 64-64 0 0-64zM320 192l64 0 0 64-64 0 0-64zM384 768l-256 0 0-320 256 0 0 320zM192 704l128 0 0-192-128 0 0 192zM448 448l224 0 0 64-224 0 0-64zM1024 352l-1024 0 0-256 1024 0 0 256zM64 288l896 0 0-128-896 0 0 128zM1024 928l-1024 0 0-479.84 64 0 0 415.84 896 0 0-447.264 64 0zM448 576l448 0 0 64-448 0 0-64zM448 704l448 0 0 64-448 0 0-64z" p-id="6557"></path></svg>
						<span>Blog</span>
					</li>
					<li class="show-links-item flex-h jc-start ai-center">
						<svg style="margin: 0 3px 0 0px;" viewBox="0 0 1024 1024"  width="22" height="22"><path d="M816.872727 256c-2.327273 0-4.654545-2.327273-6.981818-2.327273L535.272727 176.872727c-2.327273 0-2.327273 0-4.654545-2.327272-13.963636-4.654545-27.927273-4.654545-39.563637 0-2.327273 0-2.327273 0-4.654545 2.327272L209.454545 249.018182c-2.327273 0-4.654545 2.327273-6.981818 2.327273-39.563636 20.945455-37.236364 32.581818 4.654546 53.527272H209.454545l283.927273 109.381818c13.963636 6.981818 30.254545 6.981818 44.218182 0L814.545455 309.527273h2.327272c41.890909-20.945455 41.890909-34.909091 0-53.527273zM512 295.563636c-25.6 0-46.545455-11.636364-46.545455-25.6 0-13.963636 20.945455-25.6 46.545455-25.6s46.545455 11.636364 46.545455 25.6c0 16.290909-20.945455 25.6-46.545455 25.6z" fill="#FFCC00" p-id="7364"></path><path d="M477.090909 435.2L207.127273 332.8C186.181818 325.818182 162.909091 339.781818 162.909091 360.727273v358.4c0 18.618182 13.963636 32.581818 30.254545 32.581818 2.327273 0 4.654545 0 6.981819 2.327273l251.345454 95.418181c20.945455 9.309091 44.218182-6.981818 44.218182-30.254545V465.454545c2.327273-13.963636-6.981818-25.6-18.618182-30.254545z m-230.4 211.781818c-16.290909 0-30.254545-13.963636-30.254545-32.581818 0-18.618182 13.963636-32.581818 30.254545-32.581818s30.254545 13.963636 30.254546 32.581818c-2.327273 16.290909-13.963636 32.581818-30.254546 32.581818z m46.545455-128c0-18.618182 13.963636-32.581818 30.254545-32.581818s30.254545 13.963636 30.254546 32.581818c0 18.618182-13.963636 32.581818-30.254546 32.581818s-30.254545-13.963636-30.254545-32.581818z m74.472727 174.545455c-16.290909 0-30.254545-13.963636-30.254546-32.581818s13.963636-32.581818 30.254546-32.581819c16.290909 0 30.254545 13.963636 30.254545 32.581819s-13.963636 32.581818-30.254545 32.581818z" fill="#5CAEFB" p-id="7365"></path><path d="M861.090909 360.727273c0-20.945455-23.272727-34.909091-44.218182-27.927273l-267.636363 102.4c-11.636364 4.654545-20.945455 16.290909-20.945455 30.254545v353.745455c0 23.272727 23.272727 39.563636 44.218182 30.254545l251.345454-95.418181c2.327273 0 4.654545-2.327273 6.981819-2.327273 16.290909-2.327273 30.254545-16.290909 30.254545-32.581818V360.727273c0 2.327273 0 0 0 0z m-197.818182 332.8c-16.290909 0-30.254545-13.963636-30.254545-32.581818s13.963636-32.581818 30.254545-32.581819 30.254545 13.963636 30.254546 32.581819-13.963636 32.581818-30.254546 32.581818z m100.072728-130.327273c-16.290909 0-30.254545-13.963636-30.254546-32.581818 0-18.618182 13.963636-32.581818 30.254546-32.581818 16.290909 0 30.254545 13.963636 30.254545 32.581818 0 18.618182-13.963636 32.581818-30.254545 32.581818z" fill="#FB6969" p-id="7366"></path></svg>
						<span>Game</span>
					</li>
				</ul>
				<div slot="reference" >Links</div>
			</el-popover>

		</div>
		<div class="overlay-wrap" :style="overlayStyle"></div>
		<div class="hp-content-wrap">
			<transition name='fadeIn' mode='out-in'>
			<div key='notinput' v-if='noInputName'>
				<div class="hp-time">
					{{nowTime}}
				</div>
				<div class="hp-hello">
					Good {{timedot}}
					<transition name='fade' mode='out-in'>
					 <div
					 	key='static'
					 	v-if='!inputEdit'
						class='hh-name'
						:class='{inputActive:inputEdit}'
						@dblclick='changeName'>
						{{yourName}}
					</div>
					<div key='move' v-else>
						<input
							id='hh-change-name'
							@blur='finashInput'
							@keyup.enter='finashInput'
							@input='changeYourName'
							:value='yourName'
							class="hh-input"
							type="text"
							name="">
					</div>

					</transition>
				</div>
				<div class="main-focus">
					<transition name="fade" mode="out-in" >
						<!-- 添加今天关注 -->
						<div key='show' v-if='showMainFocus' >
							<div class="main-focus-tip">
							What is your main focus for today?
							</div>

							<input
								@keyup.enter='finashFocus'
								class="main-focus-input"
								type="text"
								name="">
						</div>
						<!-- 今天关注已添加 -->
						<div key='hide' v-else>
							<div class="main-focus-today">
								TODAY
							</div>
							<div class="flex-h jc-center ai-center main-focus-todo">
								<Checkbox
									:class='{show:finashToday}'
									class='checkbox-btn'
									@click.native='changePick'
									:picked='finashToday' />
								<div
									:class='{mfwShow:finashToday}'
									class="main-focus-word">
									{{mainFocusWord}}
								</div>
								<div
									@click="mainFocusWord='';showMainFocus=true;"
									:class='{mfcShow:finashToday}'
									class="main-focus-close">
									✕
								</div>
							</div>
						</div>
					</transition>
				</div>
			</div>

			<div key='input' v-else>
				<div class="name-tip">
					Hello,what's your name?
				</div>
				<input
					ref='inputName'
					@keyup.enter='finashName '
					class="hh-input"
					type="text">
			</div>
			</transition>

		</div>
		<div v-if='noInputName' class="encourage-word">{{encourageWord}}</div>
	</div>
</template>

<script>
import Vue from 'vue'
import _trim from 'lodash/trim'
import bg from '@/assets/img/bg4.jpg';
import overlay from '@/assets/img/overlay.png';
import { Popover } from 'element-ui'

import Checkbox from '@/components/Checkbox'

Vue.use(Popover)
// 全局组件
// Vue.component('todo-item', {
// 	props:['todo'],
// 	template: '<div><li>{{todo.text}}</li></div>'
// })

export default {
	name: 'home-page',
	components:{
		Checkbox
	},
	data () {
		return {
			// 是否已经输入过名字
			HasInputName:false,
			nowTime:'',
			timedot:'morning',
			// 今天已完成的打钩
			finashToday:false,
			encourageWord:'The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails',
			yourName:localStorage.yourName,
			// 是否正在输入名称
			inputEdit:false,
			// 是否添加过了今天任务
			showMainFocus:true,
			// 今天的任务
			mainFocusWord:'',
			bgStyle:{
				backgroundImage:'url('+bg+')'
			},
			overlayStyle:{
				backgroundImage:'url('+overlay+')'
			}
		}
	},
	updated(){
		// console.log('ddd')
	},
	methods: {
		// 已经输入完名字了
		finashName(e){
			this.HasInputName = true;
			this.yourName = e.target.value;
			localStorage.yourName = this.yourName;
		},
		getTime(){
			let time = new Date()
			this.nowTime = time.getHours()+':'+(time.getMinutes()<10?"0"+time.getMinutes():time.getMinutes());
			if(time.getHours <= 12 && time.getHours >= 6){
				this.timedot = 'morning';
			}else{
				this.timedot = 'afternoon';
			}

			setInterval(()=>{
				let tem = new Date();
				this.nowTime = tem.getHours()+':'+(time.getMinutes()<10?"0"+time.getMinutes():time.getMinutes())
			},30000)
		},
		// 切换今日的任务完成与否
		changePick(){
			this.finashToday = !this.finashToday
		},
		// 完成输入名称按回车
		finashInput(e){
			e.preventDefault()
			this.inputEdit = false;
		},
		// 更改输入名称框的状态，div变input
		changeName(){
			this.inputEdit = true;
			setTimeout(()=>{
				document.getElementById('hh-change-name').focus()
			},800)
		},
		// 更改名称
		changeYourName(e){
			this.yourName = e.target.value;
			localStorage.yourName = this.yourName;
		},
		// 今日任务输入完成 回车保存
		finashFocus(e){
			this.mainFocusWord = e.target.value;
			this.showMainFocus = false;
		},
		// ...mapActions([
		// 	'getEncourageWord'
		// ])
	},
	mounted(){
		this.$nextTick(()=>{
			this.$refs.inputName && this.$refs.inputName.focus()
		})

	},
	created(){
		this.getTime()
	},
	computed:{
		noInputName(){
			return (this.HasInputName) || (localStorage.yourName !== undefined)
		}
	},
	watch:{

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass' scoped>
.fadeIn-enter-active, .fadeIn-leave-active {
  	transition: all 0.8s;
}
.fadeIn-enter {
  	opacity: 0;
  	transform:translateY(100px);
}
.fadeIn-leave-active{
	opacity: 0;
	transform:translateY(-100px);
}
.home-page-wrap{
	height:100%;
	background-position: center center;
	background-size: cover;
	position: relative;
	.left-top{
		position: absolute;
		top:0;
		padding: 0 15px;
	    color: rgba(255,255,255,.7);
	    font-weight: 500;
	    line-height: 60px;
	    -webkit-transition: color .15s ease,text-shadow .15s ease;
	    user-select: none;
	    cursor:pointer;
	    z-index: 3;
	    &:hover{
	    	color:rgba(255,255,255,.8);
	    }
	}
	.overlay-wrap{
		position: absolute;
		top:0;
		right:0;
		left:0;
		background-position: center center;
		background-size: cover;
		bottom:0;
		z-index: 1;
	}
	.hp-content-wrap{
		position: absolute;
		left:50%;
		top:50%;
		color:#fff;
		transform:translate(-50%,-50%);
		width:100%;
		text-align: center;
		z-index: 2;
		.hh-input{
    		height:60px;
    		line-height: 60px;
    		letter-spacing: 0;
		    white-space: nowrap;
		    font-weight: 500;
		    font-size: 3.4rem;
    		text-align: center;
    		border:none;
    		background: transparent;
    		color:#fff;
    		border-bottom: 3px solid #fff;
    	}
		.name-tip{
			font-size: 54px;
			margin-bottom: 30px;
		}
		.hp-time{
			font-size: 11rem;
			font-weight: 500;
			letter-spacing: -5px;
		}
		.hp-hello{
			letter-spacing: 0;
    		white-space: nowrap;
    		font-weight: 500;
    		font-size: 3.4rem;

    		.hh-name{
    			height:60px;
    			line-height: 60px;
    			user-select: none;
    			outline: 0;
    		}

		}
		.main-focus{
			position: absolute;
    		top: 118%;
    		width:100%;
    		text-align: center;
    		.main-focus-today{
    			margin: 17px 0 3px;
			    font-size: 1.5rem;
			    line-height: 1.2;
			    font-weight: bold;
    		}
    		.main-focus-todo{
    			.show{
    				opacity: 1!important;
    			}
    			font-size: 2.2rem;
    			.mfwShow{
    				text-decoration: line-through;
    			}
    			.main-focus-word{
    				padding: 0 10px;
    			}
    			.mfcShow{
    				opacity: 1!important;
    				transform: rotate(-45deg);
    			}
    			.main-focus-close{
    				font-size: 0.8rem;
    				opacity: 0;
    				transition:all 0.3s ease;
    				font-weight: lighter;
    				position: relative;
    				top: 3px;
    				padding: 8px;
    				text-align: center;
    				border-radius: 50%;
    				cursor: pointer;
    				border:2px solid rgba(255,255,255,0);
    				&:hover{
    					border:2px solid rgba(255,255,255,1);
    				}
    			}
    			.checkbox-btn{
    				opacity: 0;
    				transition:all 0.3s ease;
    			}
    			&:hover .checkbox-btn{
    				opacity: 1;
    			}
    			&:hover .main-focus-close{
    				opacity: 0.75;
    			}
    		}
    		.main-focus-tip{
    			text-shadow: 0 1px 5px rgba(0,0,0,.1);
    			font-size: 2.3rem;
    			font-weight: lighter;
    		}
    		.main-focus-input{
    			background: inherit;
    			border:none;
    			border-bottom: 3px solid #fff;
    			outline: none;
    			color:#fff;
    			font-size: 2.2rem;
    			text-align: center;
    		}
		}
	}
	.encourage-word{
		position: absolute;
		bottom:10px;
		z-index: 4;
		width:60%;
		left:50%;
		transform:translate(-50%,0);
		text-align: center;
		color:#fff;
		font-size: 1.1rem;
		line-height: 1.3rem;
		font-weight: lighter;
	}

}
</style>
<style lang='sass'>
.show-links{
    background: rgba(15,15,15,.925)!important;
    border:none!important;
    border-radius: 3px;
    .popper__arrow{
    	&:after{
    		border-bottom-color: #000!important;
    	}
    	border-bottom-color: #000!important;
    }
    .show-links-item{
    	cursor: pointer;
		color:#fff;
		font-size: 0.9rem;
		line-height: 25px;
		height:25px;
		opacity: 0.75;
	}
}
</style>
