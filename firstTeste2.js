const {Builder,By,Key} = require ("selenium-webdriver");
const assert = require ("assert");
var should = require ('chai').should();

async function toDoList () {

     // Abrir o Navegador

    let driver = await new Builder().forBrowser("firefox").build();

    // Navegar até o Site

    await driver.get("https://herziopinto.github.io/lista-de-tarefas/");

    // Adicionar uma Tarefa

    await driver.findElement(By.id("inputTask")).sendKeys("Aprender Selenium", Key.RETURN);


    // Assertion / Validação utilizando o Node puro

    let seleniumText = await driver.findElement(By.xpath("/html/body/div/section/ul/li/label")).getText()
    .then(function(value){return value
    });

    //assert.strictEqual(seleniumText,"Aprender Selenium")
    
    // Assertion / Validação utilizando o library (Chay) should
    
    seleniumText.should.equal("Aprender Selenium");
    
    // Fechar o Navegador

    await driver.quit()

}

toDoList();

