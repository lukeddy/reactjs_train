import React from 'react';
import ContactsList from './ContactsList';

//这里是联系人模拟数据
let mycontacts=[{
	id:1,
	name:'张三',
	phone:'123456789' 
},{
	id:2,
	name:'小芳',
	phone:'1111122222' 
},{
	id:3,
	name:'小美',
	phone:'33355676' 
}];

/**
 * 入口类
 */
class App extends React.Component{
	render(){
		console.log(this.props.contacts);
		return (
            <div> 
              <h1>Contacts List</h1>
              <ContactsList listContacts={this.props.contacts}/>
            </div>
		)
	}
}

/**
 * 将组件渲染到网页上
 */
React.render(<App contacts={mycontacts} />,document.getElementById('app'));