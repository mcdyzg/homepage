

<template>
	<div class="home-page-wrap" :style="bgStyle" >
		<div class="overlay-wrap" :style="overlayStyle"></div>
		<div class="hp-content-wrap">
			<div class="hp-time">
				22:04
			</div>
			<div class="hp-hello">
				Good morning, <span 
					class='hh-name'
					:class='{inputActive:inputEdit}'
					@blur='finashInput'
					@focus='getFocus' 
					@keyup.enter='finashInput'
					id='hh-change-name' 
					@dblclick='changeName' 
					:contenteditable='inputEdit'>
					{{yourName}}</span>.
			</div>
		</div>
		
	</div>
</template>

<script>
import Vue from 'vue'
import _trim from 'lodash/trim'
import bg from '@/assets/img/bg2.jpg';
import overlay from '@/assets/img/overlay.png';
// 全局组件
// Vue.component('todo-item', {
// 	props:['todo'],
// 	template: '<div><li>{{todo.text}}</li></div>'
// })

export default {
	name: 'home-page',
	data () {
		return {
			yourName:'mcdyzg',
			inputEdit:false,
			bgStyle:{
				backgroundImage:'url('+bg+')'
			},
			overlayStyle:{
				backgroundImage:'url('+overlay+')'
			}
		}
	},
	methods: {
		finashInput(e){
			this.yourName = e.target.innerHTML.replace('<br>','');
			this.inputEdit = false;
			document.getElementById('hh-change-name').innerHTML = this.yourName;
		},
		changeName(){
			this.inputEdit = true;
			setTimeout(()=>{
				document.getElementById('hh-change-name').focus()
			},0)
		},
		getFocus(e){
			let editor = e.target;
			// window.setTimeout(function () {
				let sel,range;
				if (window.getSelection && document.createRange) {
					range = document.createRange();
					range.selectNodeContents(editor);
					range.collapse(true);
					range.setEnd(editor, editor.childNodes.length);
					range.setStart(editor, editor.childNodes.length);
					sel = window.getSelection();
					sel.removeAllRanges();
					sel.addRange(range);
				} else if (document.body.createTextRange) {
					range = document.body.createTextRange();
					range.moveToElementText(editor);
					range.collapse(true);
					range.select();
				}
			// }, 1);
		}
	},
	computed:{
	},
	watch:{
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass' scoped>
.home-page-wrap{
	height:100%;
	background-position: center center;
	background-size: cover;
	position: relative;
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
    			user-select: none;
    			outline: 0;
    			&:focus{
					outline:0;
    			}
    			&.inputActive{
					border-bottom: 3px solid #fff;
				}
    		}
    		
		}
	}
	
}
</style>
