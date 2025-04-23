const { faker } = require('@faker-js/faker');

class headerPage {

    get calc() {return $('a[class="neolit-bg-button  neolit-fade"]') }
    get questionnaire() {return $('h1[class="lg:text-56 leading-tight md:text-26 text-28 lg:!mb-4 lg:!mt-8 !mb-5 !mt-1 font-black lg:text-center lg:max-w-full neolit-wrap-content"]') }
    get sea() {return $('.choice-3.depth-1') }
    get seaRequirements() {return $('#wpforms-413-field_61') }
    get castomerName() {return $('#wpforms-413-field_3') }
    get phoneNumber() {return $('#wpforms-413-field_5') }
    get cargoName() {return $('#wpforms-413-field_6') }
    get loadingPortName() {return $('#wpforms-413-field_46') }
    get unloadingPortName () {return $('#wpforms-413-field_47') }
    get deliveryTerms () {return $('#wpforms-413-field_48') }
    get selectCIP () {return $('#wpforms-413-field_48 > option:nth-child(8)') }
    get moreInfo () {return $('#wpforms-413-field_55-container') }
    get hazardClass () {return $('#wpforms-413-field_54') }
    get selectClass () {return $('#wpforms-413-field_54 > option:nth-child(4)') }
    get containerType () {return $('#wpforms-413-field_56') }
    get selectType () {return $('#wpforms-413-field_56 > option:nth-child(4)') }
    get email () {return $('#wpforms-413-field_57') }
    get count () {return $('#wpforms-413-field_58') }
    get description () {return $('#wpforms-413-field_59') }
    get submit () {return $('#wpforms-submit-413') }
    get orderConfirmed() {return $('h1[class="lg:text-110 leading-none md:text-72 text-64 uppercase mb-4 font-black "]') }
    get timeToConnect() {return $('p[class="ml11 text-white/90 mb-0"]') }
    

        async calcClick () {
        await this.calc.click();  
        }

        async textCacl () {
        console.log("Text in calc header is: " + await this.questionnaire.getText());  
        }

        async seaClickable () {
        console.log("Does Sea button clickable? " + await this.sea.isClickable());  
        }

        async seaClick () {
        await this.sea.click();  
        }

        async seaReq () {
        console.log("Text of sea equirements is: " + await this.seaRequirements.getText());  
        }

        async setCompanyName () {
            await this.castomerName.setValue(faker.company.name());   
        }

        async setPhoneNumb () {
            await this.phoneNumber.setValue(faker.number.int({ min: 10000000000, max: 99999999999 }));   
        }

        async setCargoName () {
            await this.cargoName.setValue(faker.commerce.product());   
        }

        async setloadingPort () {
            await this.loadingPortName.setValue(faker.location.streetAddress({ useFullAddress: true }));   
        }

        async setUnloadingPort () {
            await this.unloadingPortName.setValue(faker.location.streetAddress({ useFullAddress: true }));   
        }

        async clickTemrs () {
            await this.deliveryTerms.click();   
        }

        async clickCIP () {
            await this.selectCIP.click();   
        }
        
        async moreScroll () {
            await this.moreInfo.scrollIntoView();   
        }
        
        async moreClick () {
            await this.moreInfo.click();   
        }

        async hazard () {
            await this.hazardClass.click();   
        }

        async selectHazard () {
            await this.selectClass.click();   
        }

        async container () {
            await this.containerType.click();   
        }

        async selectContainer () {
            await this.selectType.click();   
        }

        async setEmail () {
            await this.email.setValue(faker.internet.email());   
        }

        async containersCount () {
            await this.count.setValue(faker.number.int({ min: 1, max: 999}));   
        }

        async setDescription () {
            await this.description.setValue(faker.lorem.paragraphs(4));   
        }

        async submitClick () {
            await this.submit.click();   
        }

        async confirmedText() {
            await this.orderConfirmed.waitUntil(async () => {
                return await this.orderConfirmed.isDisplayed(); 
            }, {
                timeout: 5000,
                timeoutMsg: "Order isn't confirmed"
            });
            console.log("Confirmed oder text is: " + await this.orderConfirmed.getText()); 
        }

        async managerTime () {
            console.log("Time to connect with maneger is: " + await this.timeToConnect.getText());
        }
          
    }

module.exports = new headerPage()