
class loginPage {

        get clickOnLogin() {return $('#login-link') }
        get accountsForm() {return $('#_loginDialog') }
        get chooseAccount() {return $('#_loginDialog .head .title') }  
        get googleButton() {return $('#btnGoogle')}
        get linkedInButton() {return $('#btnLinkedIn')}
        get gitHubButton() {return $('#btnLoginGitHub')}
        get faceBookButton() {return $('#btnFb')} 
        get closeButton() {return $('.close.cancel')} 
        
       
        
            async loginClick () {
                await this.clickOnLogin.click();   
            }

            async form () {
                console.log("Form with methods of logIn is displayed? " + await this.accountsForm.isDisplayed({ withinViewport: true }));  
            }

            async formTitle () {
                console.log("Title of the form is: " + await this.chooseAccount.getText());  
            }

            async google() {
                console.log("Does Google form exist? " + await this.googleButton.isExisting());

            }

            async linkedIn() {
                console.log("Does linkedIn form exist? " + await this.linkedInButton.isExisting());
            }

            async gitHub() {
                console.log("Does gitHub form exist? " + await this.gitHubButton.isExisting());
            } 

            async faceBook() {
                console.log("Does faceBook form exist? " + await this.faceBookButton.isExisting());
            } 

            async closeClick() {
                await this.closeButton.click();
            } 

            
    }


module.exports = new loginPage()