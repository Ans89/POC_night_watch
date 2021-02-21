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
                .url('https://news.ycombinator.com/')
                .waitForElementVisible('.hnname')
                .assert.containsText(".hnname","Hacker News");

    }

}