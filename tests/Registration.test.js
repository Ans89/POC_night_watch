module.exports={
    //"@tags":['Registration-Test'],
    //'Try with Valid Details':function (browser){
        'Try with Valid Details'(browser){
        browser
                // .url('http://localhost:3000')
                // .waitForElementVisible('body',3000) 
                // .waitForElementVisible('#txtFirstName')
                // .clearValue('#txtFirstName')
                // .setValue('#txtFirstName','Anshu')
                // .click('button[type=submit]')
                // .pause(3000)
                // .assert.title('Registration Completed')
                // .end();
                .url('https://ans89.github.io/POC_night_watch/')
                .click('button[type=submit]')
                .verify.title('Registration')
                .waitForElementVisible('body',3000)
                .waitForElementVisible('#txtFirstName',3000) 
                .setValue('#txtFirstName','Anshu')
                .setValue('#txtLastName','Choudhary')
                .setValue('#txtMobile','9876766789')
                .setValue('#txtEmail','anshu.choudhary@ibm.com')
                .setValue('#txtDescription','Testing for Night Watch') 
                .setValue('#ddlGender','option[value="1"]')
                //.click('button[type=submit]')
                .pause(10000) 
                .end();

    }

}