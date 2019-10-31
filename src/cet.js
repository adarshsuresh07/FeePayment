import React from 'react'
import Style from './Login.module.css';
class CET extends React.Component {
render(){
	return(<div className={Style.imagecss}>
	<img src={require("./cet.png")}/>
	<hr backgroundColor={'red'}/></div>);
}}
export default CET;