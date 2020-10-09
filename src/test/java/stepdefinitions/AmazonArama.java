package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.Keys;
import pages.AmazonPage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class AmazonArama {
    AmazonPage amazonPage=new AmazonPage();
    @Given("kullanici amazon sayfasina gider")
    public void kullanici_amazon_sayfasina_gider() {
        Driver.getDriver().get(ConfigurationReader.getProperty("amazon_link"));
    }

    @Given("kullanici arama kutusuna {string} yazar ve arar")
    public void kullanici_arama_kutusuna_yazar_ve_arar(String string) {
       amazonPage.aramaKutusu.sendKeys(string+Keys.ENTER);
    }

    @Then("sayfada kac tane sonuc oldugunu ekrana yazdirir")
    public void sayfada_kac_tane_sonuc_oldugunu_ekrana_yazdirir() {
        System.out.println(amazonPage.sonuc.getText());
    }

}
