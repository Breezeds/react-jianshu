import styled from "styled-components";
import logoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
	height: 56px;
	border-bottom: 1px solid #e2e2e2;
`

export const Logo = styled.div`
	display:block;
	position:absolute;
	top:0;
	left:0;
	width:100px;
	height: 56px;
	background: url(${logoPic});
	background-size:contain;
`

export const Nav = styled.div`
	width:960px;
	height:100%;
	margin: 0 auto;
`

export const NavItem = styled.div`
	line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	&.left{
		float: left;
	}
	&.right{
		float: right;
	}
	&.active{
		color: #ea6f5a;
	}
`

export const NavSearch = styled.input.attrs({
	placeholder:"搜索"
})`
	width: 160px;
	height: 38px;
	margin-top:9px;
	border:none;
	outline:none;
	border-radius:19px;
	background:#eee;
	box-sizing:border-box;
	font-size:14px;
	padding-left:20px;
	&::placeholder{
		color:#999;
	}
	&.focused{
		width:240px;
	}
`

export const Addition = styled.div`
	position:absolute;
	right:0;
	top:0;
	height:56px;
`

export const Button = styled.button`
	float:right;
	margin-top:9px;
	margin-right:20px;
	padding:0 20px;
	line-height:38px;
	border-radius:19px;
	border:1px solid #ec6149;
	&.reg{
		color:#ec6149;
		background:transparent;
	}
	&.writting{
		color:#fff;
		background:#ec6149;
	}
`

export const SearchWrapper = styled.div`
	position: relative;
	float: left;
	.slider-enter{
		transition:all .2s linear;
	}
	.slider-enter-active{
		width:240px;
	}
	.slider-exit{
		transition:all .2s linear;
	}
	.slider-exit-active{
		width:160px;
	}
	.zoom{
		position:absolute;
		right:5px;
		bottom:5px;
		line-height:30px;
		width:30px;
		background:#ccc;
		border-radius:15px;
		text-align:center;
		cursor:pointer;
		&.focused{
			background:#777;
			color:#fff;
		}
	}
`;

export const SearchInfo = styled.div`
	position:absolute;
	top:55px;
	left: 0;
	width:200px;
	// height:100px;
	box-shadow: 0 0 8px rgba(0,0,0,.2);
	border-radius: 3px;
	background:#fff;
	padding: 20px 20px 10px;
`;

export const SearchInfoTitle = styled.div`
	font-size:14px;
    color: #969696;
	.spin {
		display:block;
		float: left;
		font-size:12px;
		margin-right:3px;
		transition: all .2s ease-in;
		transform: rotate(20deg);
		transform-origin: center center;
	}
`;

export const SearchInfoSwitch = styled.span`
	float:right;
	font-size:13px;
	
`;

export const SearchInfoList = styled.div`
	overflow:hidden;
	margin-top:10px;
`;

export const SearchInfoItem = styled.a`
	display:block;
	float:left;
	padding :0 5px;
	border: 1px solid #e2e2e2;
	border-radius:3px;
	color:#787878;
	font-size:12px;
	line-height:20px;
	margin:0 10px 12px 0;
`;
