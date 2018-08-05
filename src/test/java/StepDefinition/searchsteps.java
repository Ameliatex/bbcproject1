package StepDefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import static org.junit.Assert.assertEquals;

public class searchsteps
{
    WebDriver driver;


    @Given("^I navigate to bbc homepage$")
    public void iNavigateToBbcHomepage() throws Throwable
    {
        System.setProperty("webdriver.gecko.driver", "C:\\Users\\lammy\\Downloads\\geckodriver.exe");

        driver = new FirefoxDriver();

        driver.get("https://www.bbc.co.uk/");

    }

    @When("^I click on search box$")
    public void iClickOnSearchBox() throws Throwable
    {
        driver.findElement(By.id("orb-search-q")).click();

    }

    @And("^I enter text$")
    public void iEnterText() throws Throwable
    {
        driver.findElement(By.id("orb-search-q")).sendKeys("worldcup");

    }

    @And("^I Click on the search button$")
    public void iClickOnTheSearchButton() throws Throwable
    {
       // driver.findElement(By.className("se-searchbox__submit")).click();
        driver.findElement(By.id("se-searchbox-input-field")).sendKeys(Keys.ENTER);

    }

    @Then("^I should see world cup information$")
    public void iShouldSeeWorldCupInformation() throws Throwable
    {
        Thread.sleep(5000);
        assertEquals("https://www.bbc.co.uk/search?q=worldcup", driver.getCurrentUrl());


    }
}
