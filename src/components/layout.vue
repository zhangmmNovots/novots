<template>
	<div 
    class="layout" v-if="isWeb">
		<div class="layout-header" v-if="pageGuide.showLayout !== '1'">
			<div class="layout-header-logo goApplication" style='padding-left: 20px;'>
				<img :src="logoSrc"/>
				<span>
					{{ applicationData.applicationName }}
					
				</span>
			</div>
			<div class="layout-header-sider" v-if="applicationData.applicationGuideType === '2'">
				<menu-list :subMenuData="subMenuData" :currentPage="[pageGuide.uuid]" @toPath="toPath"></menu-list>
			</div>
		</div>
		<div class="layout-content" :style="{height: pageGuide.showLayout === '1' ? 'calc(100%)' : 'calc(100% - 56px)'}">
			<div class="layout-content-sider" v-if="applicationData.applicationGuideType === '3' && pageGuide.showGuide !== '1'">
				<div class="layout-content-sider" >
					<menu-list  mode="inline" :subMenuData="subMenuData" :currentPage="[pageGuide.uuid]" @toPath="toPath"></menu-list>
				</div>
			</div>
			<div
					class="layout-content-right"
					:style="{width: applicationData.applicationGuideType !== '3' || pageGuide.showGuide === '1' ? '100%' : 'calc(100% - 200px)'}"
				>
				<div class="layout-content-right-content">
					<router-view></router-view>
				</div>
			</div>
		</div>
	</div>
	<div class="mobile" v-else>
		<div class="mobile-header" v-if="pageGuide.showLayout !== '1'">
			<div class="icon" @click="showMenu" v-show="applicationData.applicationGuideType !== '1'">
				<!--type="left"-->
				<a-icon type="menu-unfold"></a-icon>
			</div>
			<div class="title head-title">
				<img :src="logoSrc" class="logo"/>
				<span>
					{{ applicationData.applicationName }}
					
				</span>
			</div>
			<div class="header-settings">
				<a-icon type="bell" style="font-size: 16px;"></a-icon>
			</div>

		</div>
		<div class="layout-content-container">
			<router-view ></router-view>
		</div>
		<a-drawer title="菜单" placement="left" :visible="visible" @close="onClose" :body-style="{ padding: '0px' }">
			<menu-list  mode="inline" :subMenuData="subMenuData" :currentPage="[pageGuide.uuid]" @toPath="toPath"></menu-list>
		</a-drawer>

	</div>
</template>
<script>
	import menuList from '../plugins/menuList';
	export default {
		data() {
			return {
				pageIndex: 0,
				visible: false,
				pageGuideList: [{"showLayout":"1","showGuide":"1","uuid":"62296682e4b0027f28d67802","visit_word":"login"},{"showLayout":"1","showGuide":"1","uuid":"622eb843e4b0027f28d67908","visit_word":"addEmployee"},{"showLayout":null,"showGuide":null,"uuid":"623966b4e4b0d56b50932e5f","visit_word":"layOut"},{"showLayout":"1","showGuide":"1","uuid":"623969a7e4b05fd77008a06e","visit_word":"apply"},{"showLayout":"1","showGuide":"1","uuid":"62396b69e4b05fd77008a06f","visit_word":"default1DSne"},{"showLayout":"1","showGuide":"1","uuid":"623be14ae4b0d56b50933053","visit_word":"default1tIZt"},{"showLayout":"1","showGuide":"1","uuid":"623c1bdfe4b05fd77008a11b","visit_word":"default1fmmF"},{"showLayout":"1","showGuide":"1","uuid":"623d8089e4b05fd77008a232","visit_word":"default1"},{"showLayout":null,"showGuide":null,"uuid":"624e575ae4b05b1369e4c552","visit_word":"default1wpsc"},{"showLayout":"1","showGuide":"1","uuid":"PQiuEJzW7dCSldgEf","visit_word":"toExampleVisitPage"}],
				subMenuData: [],
				pageUuid: '',
				applicationData: {}
			}
		},
		mounted() {
			this.pageUuid = this.pageGuideList.find(item => item.visit_word === this.$route.name)?.uuid
		
		},
		methods: {
			showMenu() {
				this.visible = true;
			},
			onClose() {
				this.visible = false;
			},
			// 跳转路由 如果没有菜单的话就先不跳转
			toPath(item) {
				const {uuid, pageUuid, openType, targetLink} = item
				this.pageUuid = pageUuid
				this.pageIndex = this
					.subMenuData
					.findIndex(item => {
						return item.pageUuid === pageUuid
					})
				if (targetLink) {
					window.open(targetLink, `_${openType}`);
				} else {
					this
						.$router
						.push({
							path: '/page' + pageUuid
						})
				}
			}
		},
		computed: {
			isWeb() {
				return document.body.clientWidth >= 750
			},
			logoSrc() {
				return this.applicationData.logoSrc || require('@/assets/logo.png')
			},
			pageGuide() {
				
				return this.pageGuideList.find(item => item.visit_word === this.$route.name)||{}

			}
		},
		components: {
			menuList
		}
	}
</script>
<style lang="less" scoped>
	.localHeight () {
		height: 56px;
		line-height: 56px;
	}
	.layout-header {
		display: flex;
		justify-content: space-between;
		background: #fff;
		box-shadow: 0 0 14px 0 rgba(5, 6, 26, 0.1);
		position: relative;
		.localHeight;
		&-logo {
			color: #fff;
			display: flex;
			align-items: center;
			width: 30%;
			display: flex;
			img {
				max-width: 50%;
				height: 36px;
				margin-right: 10px;
			}
			span {
				display: inline-block;
				font-size: 20px;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
				color: #05061a;
				opacity: 0.86;
			}
		}
		&-sider {
			width: 60%;
			/deep/ .ant-menu-horizontal {
				height: 100%;
				border: none;
				li {
					.localHeight;
					min-width: 92px;
					text-align: center;
				}
			}
		}

		&-settings {
			// width: 100px;
			display: flex;
			flex-direction: row-reverse;
			padding: 10px;
			img {
				width: 24px;
				height: 24px;
				cursor: pointer;
			}
		}
	}
	.goApplication {
		display: flex;
		align-items: center;
		.iconImg {
			height: 100%;
			width: 56px;
			margin-right: 13px;
			background: rgba(5, 6, 26, 0.03);
			display: flex;
			align-items: center;
			justify-content: center;
			> img {
				width: 18px;
				height: 18px;
				margin: 0;
			}
		}
		> img:nth-child(2) {
			max-width: none;
			margin: 0;
		}
	}
	#applicationContent {
		max-height: 350px;
		overflow: scroll;
		.applicationTitle {
			display: flex;
			justify-content: space-between;
			> span {
				color: rgba(5, 6, 26, 0.46);
			}
			> div {
				background: rgba(51, 60, 255, 0.06);
				cursor: pointer;
				display: flex;
				align-items: center;
			}
		}
		.ant-list {
			li {
				height: 54px;
				p {
					color: rgba(5, 6, 26, 0.86);
				}
			}
			li:hover {
				background: rgba(51, 60, 255, 0.06);
			}
		}
	}
	#applicationContent::-webkit-scrollbar {
		width: 0;
		outline: none;
	}
	.page {
		height: 100%;
	}

	.layout {
		height: calc(100%);

		.layout-content {
			display: flex;
			height: calc(100% - 56px);

			&-sider {
				width: 200px;
				height: 100%;
				overflow: auto;

				&-menu {
					background: #fff;
					padding-top: 12px;
					height: 100%;
					overflow: auto;

					.ant-menu-submenu-arrow {
						height: 10px;
					}
				}
			}

			&-right {
				width: calc(100% - 200px);
				overflow: auto;

				&-content {
					height: 100%;

					&-approvalFormClass {
						height: 60px;
						line-height: 60px;
						border-top: 1px solid rgba(224, 226, 234, 0.66);
						width: 100%;
						text-align: right;
						padding-right: 220px;
						position: fixed;
						bottom: 0;
						background: #fff;
						margin-right: 30px;
					}
				}

				&-footer {
					.localHeight;
					text-align: center;
				}
			}
		}
	}
	.mobile {
		&-header {
			display: flex;
			justify-content: space-between;
			padding: 5px 10px;
		}
		/deep/ .ant-drawer-body {
			padding: 0;
		}
	}

	.layout-content-fotter {
		.localHeight;
		text-align: center;
		font-size: 14px;
	}

	/deep/ .subMenu {
		width: 100px;
	}

	.logo {
		height: 21px;
		max-width: 100px;
		margin: 0 5px;
	}

	.head-title {
		display: flex;
		align-items: center;
	}
	/deep/ .ant-modal-wrap {
		background: #fff;
		padding-top: 150px;
		> .ant-modal {
			padding: 0;
			top: 0;
			> .ant-modal-content {
				width: 100%;
			}
		}
	}
</style>