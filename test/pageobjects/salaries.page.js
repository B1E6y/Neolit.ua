
class salariesPage {

    get salariesBtn() {return $('a[href="https://jobs.dou.ua/salaries/"]') }
    get typeOfProgrammer() {return $('#dd-position') }
    get QAposition() {return $('div.options-positions-list > div:nth-child(2) > div.positons-list') }  
    get automationBtn() {return $('#dws-fl-specialization > div > div.tags-box > div:nth-child(2)')}
    get typeScriptBtn() {return $('#dws-fl-technology > div > div.tags-box > div:nth-child(13)')}
    get vacanciesValue() {return $('#resp-num')}
    get firstQuartile() {return $('#q1 .value .bc-num-value')} 
    get secondQuartile() {return $('#median .value .bc-num-value')} 
    get thirdQuartile() {return $('#q3 .value .bc-num-value')} 
    get closeButton() {return $('.close.cancel')} 
    

    async salaries () {
        console.log("Does salaries button clickable? " + await this.salariesBtn.isClickable());   
    }
   
    async salariesClick () {
        await this.salariesBtn.click();   
    }

    async positionClick () {
        await this.typeOfProgrammer.click();   
    }

    async chooseQa () {
        await this.QAposition.click();   
    }

    async automation () {
        await this.automationBtn.click();   
    }
    
    async typeScript () {
        await this.typeScriptBtn.click();   
    }

    async vacancies () {
        console.log("Quantity of vacancies is: " + await this.vacanciesValue.getText());   
    }

    async lowSalary () {
        console.log("First Quartile Salary is: " + await this.firstQuartile.getText());   
    }

    async midSalary () {
        console.log("Second Quartile Salary is: " + await this.secondQuartile.getText());   
    }

    async hightSalary () {
        console.log("Third Quartile Salary is: " + await this.thirdQuartile.getText());   
    }     
}


module.exports = new salariesPage()