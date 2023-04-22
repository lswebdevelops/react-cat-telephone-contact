import '../Styles/Contact.css';
import React from 'react';

class Contact extends React.Component{
    render(){
        return(
            <div className='content-container'>
                <img className='image'
                 src={require(`../images/cat-${this.props.image}.png`)} />
                <div className='text-container'>
                    <h1 className='h1-name'>{this.props.name}</h1>
                    <p className='para-icon-phone'><span className='icon-phone'>{this.props.icon_phone}</span> {this.props.number}</p>
                    <p className='para-icon-email'><span className='icon-email'>{this.props.icon_email} </span>{this.props.email}</p>
                </div>
            </div>
        )
    }
}

export default Contact;
