class Shape{
    constructor(){
        this.color=""
    }
    SetColor(color){
        this.color=color
    }
}
class Circle extends Shape{
    render(){
        return`<circle cx="50" cy="52" r="50"   fill="${this.color}" />`
    }
}
class Triangle extends Shape{
    render(){
        return`<polygon points="200,10 250,190 160,210" fill="${this.color}" />`
    }
}
class Square extends Shape{
    render(){
        return`<square width="300" height="100" fill="${this.color}" />`
    }
}
module.exports ={Circle,Triangle,Square}