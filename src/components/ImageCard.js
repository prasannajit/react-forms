import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.imageRef = React.createRef();
        this.state ={
            spans:0
        };
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load',()=>{
            this.setSpans();
        });
    }
    setSpans(){
        const imgHeight = this.imageRef.current.clientHeight;
        const spans = Math.ceil(imgHeight/150);
        this.setState({spans})
    }
    render(){
        const { description, urls } = this.props.image;
        return (
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img 
                    alt={description} 
                    ref = {this.imageRef}
                    src={urls.regular}>
                </img>
            </div>
        )
    }
}
export default ImageCard;