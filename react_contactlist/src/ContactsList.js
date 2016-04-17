import React from 'react';
import Contact from './Contact';


/**
*自定义组件联系人列表，嵌套联系人信息组件
**/
class ContactsList extends React.Component{

   constructor(){
     super()
     this.state={
     	search:''
     };
   }

   updateSearch(event){
   	  this.setState({
         search:event.target.value.substr(0,20)
   	  });
   }

	render(){
		console.log(this.props.listContacts);

		let filteredContacts=this.props.listContacts.filter(
			(contact)=>{
				return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1; //如果找不到则不返回
			}
		);

		return (
           <div>
           	   <p>
           	   搜索(按名字)：<input type="text" 
	                   defaultValue="搜索关键字" 
                       value={this.state.search}
                       onChange={this.updateSearch.bind(this)}
	                   />
           	    </p>
				<ul>
	              {filteredContacts.map((contact)=>{
	                  return <Contact contact={contact} key={contact.id}/>
	              })
	              }
	            </ul>

           </div>
		)
	}
}

//输出组件，其他组件可以调用
export default ContactsList;
