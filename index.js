const fs = require('fs');
const inquirer = require('inquirer');
const {Square,Triangle,Circle}=require("./shapes")
class LogoGenerator {
    constructor(){
        this.color = '';
        this.shape = '';
        this.logoText = '';
    }

    async promptUser() {
         const data = await inquirer.prompt([
           {
            type:'list',
            name:'color',
            message:'Select a color:',
            choices:['Red','Green','Blue']
           },

           {
            type:'list',
            name:'shape',
            message:'Select a shape:',
            choices:['Circle','square','Triangle'],

           },
           {
            type:'input',
           name:'LogoText',
           message:'Enter the logo text'
            },
        ])
        let shape;   
        if(data.shape==="Circle"){
         shape=new Circle()
        }else if(data.shape==="Triangle"){
            shape=new Triangle()
        }else if (data.shape==="Square"){
            shape=new Square()
        }
        
        shape.SetColor(data.color)
        
        const svgContent=this.generateSVG(shape,data.LogoText)
        this.saveSVGtoFile(svgContent)
       
    }
    generateSVG(shape,text){
        const svgContent=`
        <svg width="150" height="150">
        ${shape.render()}
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="24">${text}</text>
        </svg>
      `;
        
       return svgContent;
    }
    
    saveSVGtoFile(svgContent){
        const filename = '${this.color.toLowerCase()}_${this.shape.toLowerCase()}_${Date.now()}.svg';
        
        fs.writeFile(filename,svgContent, (err)=> 
        { if (err) {
            console.log('Error saving this SVG file:',err);
        } else {
            console.log('SVG file saved as ${filename}');

        } 
    });
    }
    async run (){
        console.log()

        await this.promptUser();


    } 
}
    const Logo = new LogoGenerator();
    
    Logo.run();
