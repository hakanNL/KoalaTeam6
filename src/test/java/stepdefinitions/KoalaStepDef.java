package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import pages.KoalaPage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class KoalaStepDef {
    KoalaPage page = new KoalaPage();

//ONUR BEY
    @Given("kullanici {string} sayfasina gider")
    public void kullanici_sayfasina_gider(String string) {
        Driver.getDriver().get("http://www.kaolapalace-qa-environment2.com/Account/Logon");
    }

    @Given("kullanici kullaniciadi ve sifresini girer")
    public void kullanici_kullaniciadi_ve_sifresini_girer() throws InterruptedException {
        Thread.sleep(2000);
        page.userNameKutusu.sendKeys("manager2");
        page.passwordKutusu.sendKeys("Man1ager2!");
    }

    @Then("kullanici giris islemini gerceklestirir")
    public void kullanici_giris_islemini_gerceklestirir() {
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        page.girisButonu.click();
    }

    //======================TC01===============================
    @Given("kullanici roomreservation sayfasina gider")
    public void kullanici_roomreservation_sayfasina_gider() {
        Driver.getDriver().get("http://www.kaolapalace-qa-environment2.com/admin/RoomReservationAdmin/Create");
    }

    @Given("kullanici room reservation IDUser1 bolumunde dropdowndan {string} secer")
    public void kullanici_room_reservation_IDUser1_bolumunde_dropdowndan_secer(String string) {
        Select select = new Select(page.roomReservationIDUser1);
        select.selectByVisibleText(string);
    }

    @Given("kullanici room reservation IDUser2 bolumunde dropdowndan {string} secer")
    public void kullanici_room_reservation_IDUser2_bolumunde_dropdowndan_secer(String string) {
        Select select = new Select(page.roomReservationIDUser2);
        select.selectByVisibleText(string);
    }

    @Given("kullanici room reservation Price bolumune {string} girer")
    public void kullanici_room_reservation_Price_bolumune_girer(String string) {
        page.roomReservationPrice.sendKeys(string);
    }

    @Given("kullanici room reservation DateStart bolumune {string} girer")
    public void kullanici_room_reservation_DateStart_bolumune_girer(String string) {
        page.roomReservationDateStart.sendKeys(string);
    }

    @Given("kullanici room reservation DateEnd bolumune {string} girer")
    public void kullanici_room_reservation_DateEnd_bolumune_girer(String string) {
        page.roomReservationDateEnd.sendKeys(string);
    }

    @Given("kullanici room reservation AdultAmount bolumune {string} girer")
    public void kullanici_room_reservation_AdultAmount_bolumune_girer(String string) {
        page.roomReservationAdultAmount.sendKeys(string);
    }

    @Given("kullanici room reservation ChildrenAmount bolumune {string} girer")
    public void kullanici_room_reservation_ChildrenAmount_bolumune_girer(String string) {
        page.roomReservationChildrenAmount.sendKeys(string);
    }

    @Given("kullanici room reservation ContactNameSurname bolumune {string} girer")
    public void kullanici_room_reservation_ContactNameSurname_bolumune_girer(String string) {
        page.roomReservationContactNameSurname.sendKeys(string);
    }

    @Given("kullanici room reservation ContactPhone bolumune {string} girer")
    public void kullanici_room_reservation_ContactPhone_bolumune_girer(String string) {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        page.roomReservationContactPhone.sendKeys(string);
    }

    @Given("kullanici room reservation ContactEmail bolumune {string} girer")
    public void kullanici_room_reservation_ContactEmail_bolumune_girer(String string) {
        page.roomReservationContactEmail.sendKeys(string);
    }

    @Given("kullanici room reservation Notes bolumune {string} ekler")
    public void kullanici_room_reservation_Notes_bolumune_ekler(String string) {
        page.roomReservationNotes.sendKeys(string);
    }

    @Given("kullanici room reservation bolumunde save buttonuna tiklar")
    public void kullanici_room_reservation_bolumunde_save_buttonuna_tiklar() {
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        page.roomReservationSaveButonu.click();
    }

    @Then("And kullanici basarili yazisini assert eder.")
    public void and_kullanici_basarili_yazisini_assert_eder() {
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(page.roomReservationBasariliYazisi.getText());
        Assert.assertTrue(page.roomReservationBasariliYazisi.isDisplayed());
    }

    //======================TC02===============================
    @Then("And kullanici basarilidir yazisini assert eder.")
    public void and_kullanici_basarilidir_yazisini_assert_eder() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(page.roomReservationBasariliYazisi.getText());
        Assert.assertTrue(page.roomReservationBasariliYazisi.isDisplayed());
    }

    //======================TC03========================================
    @Then("And kullanici basarili yazisini ekranda gormemeli.")
    public void and_kullanici_basarili_yazisini_ekranda_gormemeli() {
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(page.roomReservationBasariliYazisi.getText());
        Assert.assertFalse(page.roomReservationBasariliYazisi.isDisplayed());
    }

    //================================TC04=====================================
    @Then("And kullanici hatamesaji almali.")
    public void and_kullanici_hatamesaji_almali() {
        for (WebElement w : page.hataMesaji) {
            System.out.println(w.getText());
            Assert.assertTrue(w.isDisplayed());
        }
    }

    //================================TC05=========================================
    @Then("And kullanici DateEnd kisminda hatamesaji almali.")
    public void and_kullanici_DateEnd_kisminda_hatamesaji_almali() {
        for (WebElement w : page.hataMesaji) {
            System.out.println(w.getText());
            Assert.assertTrue(w.isDisplayed());
        }
    }

    //================================TC06=========================================
    @Then("And kullanici DateStart ve DateEnd kisminda hatamesaji almali.")
    public void and_kullanici_DateStart_ve_DateEnd_kisminda_hatamesaji_almali() {
        for (WebElement w : page.hataMesaji) {
            System.out.println(w.getText());
            Assert.assertTrue(w.isDisplayed());
        }
    }

    //================================TC07=========================================
    @Then("And kullanici DateStart ve DateEndde hatamesaji almali ve basarili yazisi elde edilmemeli.")
    public void and_kullanici_DateStart_ve_DateEndde_hatamesaji_almali_ve_basarili_yazisi_elde_edilmemeli() {
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(page.roomReservationBasariliYazisi.getText());
        Assert.assertFalse(page.roomReservationBasariliYazisi.isDisplayed());
    }

    //================================TC08=========================================
    @Then("And kullanici roomreservation basarili yazisi elde etmemeli.")
    public void and_kullanici_roomreservation_basarili_yazisi_elde_etmemeli() {
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(page.roomReservationBasariliYazisi.getText());
        Assert.assertFalse(page.roomReservationBasariliYazisi.isDisplayed());
    }

    //================================TC09=========================================
    @Then("kullanici roomreservation basarilimi, basarili degilmi assert eder")
    public void kullanici_roomreservation_basarilimi_basarili_degilmi_assert_eder() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(page.roomReservationBasariliYazisi.getText());
        Assert.assertFalse(page.roomReservationBasariliYazisi.isDisplayed());
    }

    //====================================TC10=========================================
    @Then("kullanici roomreservationin basarili olup olmadigini assert eder")
    public void kullanici_roomreservationin_basarili_olup_olmadigini_assert_eder() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(page.roomReservationBasariliYazisi.getText());
        Assert.assertFalse(page.roomReservationBasariliYazisi.isDisplayed());
    }

    //====================================TC11=========================================
    @Then("kullanicim Dates bolumlerinde hatamesajlari alir")
    public void kullanicim_Dates_bolumlerinde_hatamesajlari_alir() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        for (WebElement w : page.hataMesaji) {
            System.out.println(w.getText());
            Assert.assertTrue(w.isDisplayed());
        }
    }

    //====================================TC12=========================================
    @Then("kullanici dates bolumlerinden hata mesajlari almali")
    public void kullanici_dates_bolumlerinden_hata_mesajlari_almali() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        for (WebElement w : page.hataMesaji) {
            System.out.println(w.getText());
            Assert.assertTrue(w.isDisplayed());
        }

    }


//HAKAN BEY
    @Given("kullanici koalapalace admin sayfasina gider")
    public void kullanici_koalapalace_admin_sayfasina_gider() {
        Driver.getDriver().get("https://www.kaolapalace-qa-environment.com");
        System.out.println();
    }
    @Given("kullanici Welcome To Koalapalace yazisini gorur")
    public void kullanici_Welcome_To_Koalapalace_yazisini_gorur() {
        System.out.println(page.welcomeYazisi.getText());
    }
    @Given("kullanici logine clik yapar")
    public void kullanici_logine_clik_yapar() {
        page.loginButonu.click();
    }
    @Given("kullanici kullaniciadi ve sifresini girer ve entere basar")
    public void kullanici_kullaniciadi_ve_sifresini_girer_ve_entere_basar() {
        page.kullaniciAdi.sendKeys("manager2");
        page.sifre.sendKeys("Man1ager2!");
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        page.girisButonu1.submit();
    }
    @Then("kullanici LISTOFUSER yazisini gorur")
    public void kullanici_LISTOFUSER_yazisini_gorur() {
        System.out.println(page.listofuserYazisi.getText());
        Assert.assertTrue(page.listofuserYazisi.isDisplayed());
        System.out.println(" Hakan deneme GITHUB branch");

    }


 //Aysoltan Hanim
//Hotel Create with Invalid Credentials Aysoltan
//    @Given("kullanici koalapalace admin sayfasina gider")
//   public void kullanici_koalapalace_admin_sayfasina_gider() {
//       Driver.getDriver().get("http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl=%2FAdmin%2FUserAdmin");
//    }
//    @Given("kullanici kullaniciadi ve sifresini girer")
//    public void kullanici_kullaniciadi_ve_sifresini_girer() {
//       page.userNameKutusu3.sendKeys("manager2");
//        page.passwordKutusu3.sendKeys("Man1ager2!");
//    }
//    @Then("kullanici giris islemini gerceklestirir")
//    public void kullanici_giris_islemini_gerceklestirir() {
//        page.girisButonu3.click();
//    }
    @Given("kullanici hotelcreate sayfasina gider")
    public void kullanici_hotelcreate_sayfasina_gider() {
        Driver.getDriver().get("http://www.kaolapalace-qa-environment2.com/admin/HotelAdmin/Create");
    }
    @Given("kullanici hotelcreate code bolumune {string} girer")
    public void kullanici_hotelcreate_code_bolumune_girer(String string) {
        page.hotelCreateCodeKutusu.sendKeys(string);
    }
    @Given("kullanici hotelcreate name bolumune {string} girer")
    public void kullanici_hotelcreate_name_bolumune_girer(String string) {
        page.hotelCreateNameKutusu.sendKeys(string);
    }
    @Given("kullanici hotelcreate adress bolumune {string} girer")
    public void kullanici_hotelcreate_adress_bolumune_girer(String string) {
        page.hotelCreateAddressKutusu.sendKeys(string);
    }
    @Given("kullanici hotelcreate phone bolumune {string} girer")
    public void kullanici_hotelcreate_phone_bolumune_girer(String string) {
        page.hotelCreatePhoneKutusu.sendKeys(string);
    }
    @Given("kullanici hotelcreate email bolumune {string} girer")
    public void kullanici_hotelcreate_email_bolumune_girer(String string) {
        page.hotelCreateEmailKutusu.sendKeys(string);
    }
    @Given("kullanici hotelcreate idgroup bolumunde {string} secer")
    public void kullanici_hotelcreate_idgroup_bolumunde_secer(String string) {
        Select select = new Select(page.hotelCreateIDGroupDropdown);
        select.selectByVisibleText(string);
    }
    @Given("kullanici hotelcreate save butonuna tiklar")
    public void kullanici_hotelcreate_save_butonuna_tiklar() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        page.hotelCreateSaveButonu.click();
    }
    public void kullanici_driveri_kapatir() {
        Driver.closeDriver();
    }
    @Then("kullanici hotelcreate kayit islemini assert eder")
    public void kullanici_hotelcreate_kayit_islemini_assert_eder() {
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        boolean uyari=page.hotelCreateUariYazisi.isDisplayed();
        Assert.assertTrue(uyari);
        System.out.println(page.hotelCreateUariYazisi.getText());

    }


//MELTEM HANIM
    @Given("kullanici hotelroomreservation sayfasina gider")
    public void kullanici_hotelroomreservation_sayfasina_gider() {
        Driver.getDriver().get("http://www.kaolapalace-qa-environment2.com/admin/RoomReservationAdmin/Create");
    }
    @Given("kullanici roomreservation iduser bolumunde {string} secer")
    public void kullanici_roomreservation_iduser_bolumunde_secer(String string) {
        Select select = new Select(page.hotelRoomReservationCreateIDUserDropdown);
        select.selectByVisibleText(string);
    }
    @Given("kullanici roomreservation idhotelroom bolumunde {string} secer")
    public void kullanici_roomreservation_idhotelroom_bolumunde_secer(String string) {
        Select select = new Select(page.hotelRoomReservationCreateIDHotelRoomDropdown);
        select.selectByVisibleText(string);
    }
    @Given("kullanici roomreservation price bolumune {string} girer")
    public void kullanici_roomreservation_price_bolumune_girer(String string) {
        page.hotelRoomReservationCreatePriceKutusu.sendKeys(string);
    }
    @Given("kullanici roomreservation datestart bolumune {string} girer")
    public void kullanici_roomreservation_datestart_bolumune_girer(String string) {
        page.hotelRoomReservationCreateDateStartKutusu.sendKeys(string);
    }
    @Given("kullanici roomreservation dateend bolumune {string} girer")
    public void kullanici_roomreservation_dateend_bolumune_girer(String string) {
        page.hotelRoomReservationCreateDateEndKutusu.sendKeys(string);
    }
    @Given("kullanici roomreservation adultamaount bolumune {string} girer")
    public void kullanici_roomreservation_adultamaount_bolumune_girer(String string) {
        page.hotelRoomReservationCreateAdultAmountKutusu.sendKeys(string);
    }
    @Given("kullanici roomreservation childrenamount bolumune {string} girer")
    public void kullanici_roomreservation_childrenamount_bolumune_girer(String string) {
        page.hotelRoomReservationCreateChildrenAmountKutusu.sendKeys(string);
    }
    @Given("kullanici roomreservation namesurname bolumune {string} girer")
    public void kullanici_roomreservation_namesurname_bolumune_girer(String string) {
        page.hotelRoomReservationCreateNameSurnameKutusu.sendKeys(string);
    }
    @Given("kullanici roomreservation phone bolumune {string} girer")
    public void kullanici_roomreservation_phone_bolumune_girer(String string) {
        page.hotelRoomReservationCreatePhoneKutusu.sendKeys(string);
    }
    @Given("kullanici roomreservation email bolumune {string} girer")
    public void kullanici_roomreservation_email_bolumune_girer(String string) {
        page.hotelRoomReservationCreateEmailKutusu.sendKeys(string);
    }
    @Given("kullanici roomreservation notes bolumune {string} girer")
    public void kullanici_roomreservation_notes_bolumune_girer(String string) {
        page.hotelRoomReservationCreateNotesKutusu.sendKeys(string);
    }
    @Given("kullanici roomreservation save butonuna tiklar")
    public void kullanici_roomreservation_save_butonuna_tiklar() {
        page.hotelRoomReservationCreateSaveButonu.click();
    }
    @Then("kullanici roomreservation kayit islemini assert eder")
    public void kullanici_roomreservation_kayit_islemini_assert_eder() {
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(page.hotelRoomReservationCreateBasariliYazisi.getText());
        Assert.assertTrue(page.hotelRoomReservationCreateBasariliYazisi.isDisplayed());
    }



//SALIH BEY

    @Given("team06_kullanici koalapalace admin sayfasina gider")
    public void team06_kullanici_koalapalace_admin_sayfasina_gider() {
        Driver.getDriver().get("http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl=%2Fadmin%2FHotelroomAdmin");
    }
    @Given("team06_kullanici kullaniciadi ve sifresini girer")
    public void team06_kullanici_kullaniciadi_ve_sifresini_girer() {
        page.userNameKutusu2.sendKeys("manager2");
        page.passwordKutusu2.sendKeys("Man1ager2!");
    }
    @Then("team06_kullanici giris islemini gerceklestirir")
    public void team06_kullanici_giris_islemini_gerceklestirir() {
        page.girisButonu2.click();
    }
    @Given("team06_kullanici hotelroomcreate sayfasina gider")
    public void team06_kullanici_hotelroomcreate_sayfasina_gider() {
        Driver.getDriver().get("http://www.kaolapalace-qa-environment2.com/admin/HotelroomAdmin/Create");
    }
    @Given("team06_kullanici hotelroomcreate idhotel bolumunde {string} secer")
    public void team06_kullanici_hotelroomcreate_idhotel_bolumunde_secer(String string) {
        page.hotelRoomCreateIDHotelDropdown.sendKeys(string);
    }
    @Given("team06_kullanici hotelroomcreate code bolumune {string} girer")
    public void team06_kullanici_hotelroomcreate_code_bolumune_girer(String string) {
        page.hotelRoomCreateCodeKutusu.sendKeys(string);
    }
    @Given("team06_kullanici hotelroomcreate name bolumune {string} girer")
    public void team06_kullanici_hotelroomcreate_name_bolumune_girer(String string) {
        page.hotelRoomCreateNameKutusu.sendKeys(string);
    }
    @Given("team06_kullanici hotelroomcreate location bolumune {string} girer")
    public void team06_kullanici_hotelroomcreate_location_bolumune_girer(String string) {
        page.hotelRoomCreateLocationKutusu.sendKeys(string);
    }
    @Given("team06_kullanici hotelroomcreate description bolumune {string} girer")
    public void team06_kullanici_hotelroomcreate_description_bolumune_girer(String string) {
        page.hotelRoomCreateDescriptionKutusu.sendKeys(string);
    }
    @Given("team06_kullanici hotelroomcreate price bolumune fiyat girer")
    public void team06_kullanici_hotelroomcreate_price_bolumune_fiyat_girer() {
        Actions actions = new Actions(Driver.getDriver());
        actions.dragAndDrop(page.hotelRoomCreatePrice500 , page.hotelRoomCreatePriceKutusu)
                .perform();
    }
    @Given("team06_kullanici hotelroomcreate roomtype bolumunde {string} secer")
    public void team06_kullanici_hotelroomcreate_roomtype_bolumunde_secer(String string) {
        Select select2 = new Select(page.hotelRoomCreateIDGroupRoomTypeDropDown);
        select2.selectByVisibleText(string);
    }
    @Given("team06_kullanici hotelroomcreate maxadult bolumune {string} girer")
    public void team06_kullanici_hotelroomcreate_maxadult_bolumune_girer(String string) {
        page.hotelRoomCreateMaxAdultKutusu.sendKeys(string);
    }
    @Given("team06_kullanici hotelroomcreate maxchildren bolumune {string} girer")
    public void team06_kullanici_hotelroomcreate_maxchildren_bolumune_girer(String string) {
        page.hotelRoomCreateMaxChildKutusu.sendKeys(string);
    }
    @Given("team06_kullanici hotelroomcreate save butonuna tiklar")
    public void team06_kullanici_hotelroomcreate_save_butonuna_tiklar() {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        page.hotelRoomCreateSaveButonu.click();
    }
    @Then("team06_kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder")
    public void team06_kullanici_roomreservation_kayit_isleminin_basarisiz_oldugunu_assert_eder() {
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(page.hotelRoomCreatelUyariYazisi.getText());
        Assert.assertTrue(page.hotelRoomCreatelUyariYazisi.isDisplayed());
    }
    @Then("team06_kullanici {string} uyari mesaji aldigini assert eder")
    public void team06_kullanici_uyari_mesaji_aldigini_assert_eder(String string) {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        //Assert.assertTrue(page.uyariMesaji3.getText().equals("Fill All Fields Please"));
        String uyari = page.uyariMesaji3.getText();
        if (uyari.equals("Fill All Fields Please")) {
            System.out.println("Test Basarili");
        }else {
            System.out.println("Test Basarisiz Bug Bulundu");
        }
    }
    @Given("team06_kullanici hotelroomcreate price bolumune fiyat {string} girer")
    public void team06_kullanici_hotelroomcreate_price_bolumune_fiyat_girer(String string) {
        page.hotelRoomCreatePriceKutusu.sendKeys(string);
    }


//EMRULLAH
Actions actions=new Actions(Driver.getDriver());
    @Given("kullanici koala {string} gider")
    public void kullanici_koala_gider(String string) {
        Driver.getDriver().get(string);
    }
    @Given("kullanici room rezarvasyon kismina giris yapar")
    public void kullanici_room_rezarvasyon_kismina_giris_yapar() {
        page.username.sendKeys(ConfigurationReader.getProperty("username"));
        page.pass.sendKeys(ConfigurationReader.getProperty("pass"));
        page.button.submit();
    }
    @Given("kullanici addroom kismina click yapar")
    public void kullanici_addroom_kismina_click_yapar() {
        try {
            Thread.sleep(10000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Driver.getDriver().get("http://www.kaolapalace-qa-environment2.com/admin/RoomReservationAdmin/Create");
    }
    @Given("kullanici birinci IDUser kismini dropdown ile secer")
    public void kullanici_birinci_IDUser_kismini_dropdown_ile_secer() {
        Select select1 = new Select(page.iDUser);
        select1.selectByIndex(2);
    }
    @Given("kullanici ikinci IDUser kismini dropdown ile secer")
    public void kullanici_ikinci_IDUser_kismini_dropdown_ile_secer() {
        Select select2=new Select(page.iDHotelRoom);
        select2.selectByIndex(3);
    }
    @Given("kullanici price kismini secer ve value yollar")
    public void kullanici_price_kismini_secer_ve_value_yollar() {
        page.price.sendKeys(ConfigurationReader.getProperty("price"));
    }
    @Given("kullanici giris tarihini secer ve yazar")
    public void kullanici_giris_tarihini_secer_ve_yazar() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        page.girisTarih.sendKeys(ConfigurationReader.getProperty("giristarihi"));
    }
    @Given("kullanici cikis tarihini secer ve girer")
    public void kullanici_cikis_tarihini_secer_ve_girer() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        page.cikisTarih.sendKeys(ConfigurationReader.getProperty("cikisTarihi"));
    }
    @Given("kullanici AdultAmont kismini secer ve value gonderir")
    public void kullanici_AdultAmont_kismini_secer_ve_value_gonderir() {
        page.adult.sendKeys(ConfigurationReader.getProperty("adult"));
    }
    @Given("kullanici ChildAmont kismini secer ve value gonderir")
    public void kullanici_ChildAmont_kismini_secer_ve_value_gonderir() {
        page.child.sendKeys(ConfigurationReader.getProperty("child"));
    }
    @Given("kullanici ContactNameSurname kismini secer ve value gonderir")
    public void kullanici_ContactNameSurname_kismini_secer_ve_value_gonderir() {
        page.contactName.sendKeys(ConfigurationReader.getProperty("contactName"));
    }
    @Given("kullanici ContactPhone kismini secer ve value gonderir")
    public void kullanici_ContactPhone_kismini_secer_ve_value_gonderir() {
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        page.contactPhone.sendKeys(ConfigurationReader.getProperty("contactPhone"));
    }
    @Given("kullanici Contact Email kismini secer ve value gonderir")
    public void kullanici_Contact_Email_kismini_secer_ve_value_gonderir() {
        page.email.sendKeys(ConfigurationReader.getProperty("email"));
    }
    @Given("kullanici Notes kismini secev ve value gonderir")
    public void kullanici_Notes_kismini_secev_ve_value_gonderir() {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        page.note.sendKeys("note");
    }
    @Given("kullanici Aproved kismini click yapar")
    public void kullanici_Aproved_kismini_click_yapar() {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        page.approved.click();
    }
    @Given("kullanici IsPaid kismini click yapar")
    public void kullanici_IsPaid_kismini_click_yapar() {
        page.isPaid.click();
    }
    @Given("kullanici Save butonuna click yapar")
    public void kullanici_Save_butonuna_click_yapar() {
        page.save.click();
    }
    @Then("kullanici accept sonucunu ekranda gormemeli")
    public void kullanici_accept_sonucunu_ekranda_gormemeli() {
    }



//SENGUL HANIM
@Given("kullanici login sayfasinda deneme yapar")
public void kullanici_login_sayfasinda_deneme_yapar() {
    Driver.getDriver().get("http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl=%2FAdmin%2FUserAdmin");
}
    @Given("kullanici login sayfasinda username bolumunde {string} girer")
    public void kullanici_login_sayfasinda_username_bolumunde_girer(String username) {
        page.userNameKutusu4.sendKeys(username);
    }
    @Given("kullanici login sayfasinda password bolumunde {string} girer")
    public void kullanici_login_sayfasinda_password_bolumunde_girer(String password) {
        page.passwordKutusu4.sendKeys(password);
    }
    @Given("kullanici login butonuna tiklar")
    public void kullanici_login_butonuna_tiklar() {
        page.girisButonu4.click();
    }
    @Then("kullanici giris isleminin basarisiz oldugunu verify eder")
    public void kullanici_giris_isleminin_basarisiz_oldugunu_verify_eder() {
        System.out.println(page.hataMesaji5.getText());
        Assert.assertTrue(page.hataMesaji5.isDisplayed());
    }
    @Then("kullanici username is required mesajini gorur")
    public void kullanici_username_is_required_mesajini_gorur() {
        Assert.assertTrue(page.userNameBlankMessage.isDisplayed());
    }
    @Then("kullanici password is required mesajini gorur")
    public void kullanici_password_is_required_mesajini_gorur() {
        Assert.assertTrue(page.passwordBlankMessage.isDisplayed());
    }

    //Umut bey=============================================================
    @Given("kullanici  {string} sayfasina gider")
    public void kullanici_sayfasina_gider() {
        Driver.getDriver().get("http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl=%2FAdmin%2FUserAdmin");
    }
    @Given("kullanici username bolumune {string} girer")
    public void kullanici_username_bolumune_girer(String string) {
        page.loginUserNameKutusu.sendKeys(string);
    }
    @Given("kullanici password bolumune {string} girer")
    public void kullanici_password_bolumune_girer(String string) {
        page.loginPasswordKutusu.sendKeys(string);
    }
    @Then("kullanici login butonuna basar ve admin sayfasina ulasir")
    public void kullanici_login_butonuna_basar_ve_admin_sayfasina_ulasir() {
        page.hesapLoginButonu.click();
    }
    @Then("kullanici Hotel Manangment sekmesine tiklar")
    public void kullanici_Hotel_Manangment_sekmesine_tiklar() {
        page.hotelManagmentSekmesi.click();
    }
    @Given("kullanici Hotel List butonuna tiklar")
    public void kullanici_Hotel_List_butonuna_tiklar() {
        page.hotelListSekmesi.click();
    }
    @Given("kullanici LIST OF HOTELS yazisini goruntuler")
    public void kullanici_LIST_OF_HOTELS_yazisini_goruntuler() {
        System.out.println(page.HotelListYazisi.getText());
        Assert.assertTrue(page.HotelListYazisi.isEnabled());
    }
    @Given("kullanici Hotel Rooms butonuna tiklar")
    public void kullanici_Hotel_Rooms_butonuna_tiklar() {
        page.hotelRoomSekmesi.click();
    }
    @Given("kullanici LIST OF ROOMS yazisini goruntuler")
    public void kullanici_LIST_OF_ROOMS_yazisini_goruntuler() {
        System.out.println(page.HotelRoomsYazisi.getText());
        Assert.assertTrue(page.HotelRoomsYazisi.isEnabled());
    }
    @Given("kullanici Room reservations butonuna tiklar")
    public void kullanici_Room_reservations_butonuna_tiklar() {
        page.hotelReservationsSekmesi.click();
    }
    @Given("kullanici LIST OF RESERVATIONS yazisini goruntuler")
    public void kullanici_LIST_OF_RESERVATIONS_yazisini_goruntuler() {
        System.out.println(page.HotelReservationsYazisi.getText());
        Assert.assertTrue(page.HotelReservationsYazisi.isEnabled());

        System.out.println();
    }




}














