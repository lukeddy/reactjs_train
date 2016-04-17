import React from 'react';


/**
 * 自定义组件,单条联系人信息封装
 */
class Contact extends React.Component{
	render(){
		console.log(this.props.contact);
		return (
        <li>
           {this.props.contact.name}
           {this.props.contact.phone}
        </li>
		)
	}
}


export default Contact;
